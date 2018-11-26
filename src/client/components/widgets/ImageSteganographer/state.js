import { observable, computed } from 'mobx';
import Textarea from 'Client/components/core/Textarea';

export default class State {
  canvas;
  textState = new Textarea.State('Steganography is awesome!');
  @observable status = '';
  @observable error = '';
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
    this.startProcess();
    this.canvas.width = image.width;
    this.canvas.height = image.height;
    this.context.drawImage(image, 0, 0);
    this.originalBase64 = this.canvas.toDataURL();
    this.processSucceeded();

    this.applySteganography();
  }

  applySteganography() {
    this.startProcess();
    const message = this.text;
    const imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
    const data = imageData.data;
    let i = 0;
    const increment = () => i += i % 4 === 2 ? 2 : 1;
    const setBits = (bits) => {
      if(i < data.length)
        data[i] = (data[i] & 0xFC) | bits;
      increment();
    };
    
    message.split('').forEach(letter => {
      const code = letter.charCodeAt(0);
      setBits(code >> 6);
      setBits((code >> 4) & 0x03);
      setBits((code >> 2) & 0x03);
      setBits(code & 0x03);
    });

    this.context.putImageData(imageData, 0, 0);
    this.modifiedBase64 = this.canvas.toDataURL();

    if(i >= data.length) {
      this.processFailed('Unfortunately, the length of the message exceeded the number of bytes available in the image.');
    } else {
      this.processSucceeded();
    }
  }

  startProcess() {
    this.status = 'pending';
    this.error = '';
  }

  processSucceeded() {
    this.status = 'success';
  }

  processFailed(message) {
    this.status = 'failure';
    this.error = message;
  }
}