import { observable, computed } from 'mobx';
import Textarea from 'Client/components/core/Textarea';

export default class State {
  canvas;
  textState = new Textarea.State('Steganography is awesome!');
  @observable originalBase64;
  @observable modifiedBase64;

  initCanvas(canvas) {
    this.canvas = canvas;
  }

  get context() {
    return this.canvas.getContext('2d');
  }

  @computed get text() {
    return this.textState.text;
  }

  updateImage(image) {
    this.canvas.width = image.width;
    this.canvas.height = image.height;
    this.context.drawImage(image, 0, 0);
    this.originalBase64 = this.canvas.toDataURL();
    this.applySteganography();
  }

  applySteganography() {
    const message = this.text;
    const imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
    const data = imageData.data;
    let i = 0;
    const increment = () => i += i % 4 === 2 ? 2 : 1;
    
    message.split('').forEach(letter => {
      const code = letter.charCodeAt(0);
      data[i] = (data[i] & 0xFC) | (code >> 6);
      increment();
      data[i] = (data[i] & 0xFC) | ((code >> 4) & 0x03);
      increment();
      data[i] = (data[i] & 0xFC) | ((code >> 2) & 0x03);
      increment();
      data[i] = (data[i] & 0xFC) | (code & 0x03);
      increment();
    });

    this.context.putImageData(imageData, 0, 0);
    this.modifiedBase64 = this.canvas.toDataURL();
  }
}