import { observable, computed } from 'mobx';

class Textarea {
  @observable text;

  constructor(text) {
    this.text = text;
  }

  setText = text => {
    this.text = text;
  }
}

export default class State {
  canvas;
  textState = new Textarea('Steganography is awesome!');
  originalImage;
  @observable status = '';
  @observable error = '';
  @observable base64;

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
    this.originalImage = image;
    this.canvas.width = image.width;
    this.canvas.height = image.height;
    this.context.drawImage(image, 0, 0);
    this.base64 = this.canvas.toDataURL();
    this.processSucceeded();
  }

  applySteganography() {
    this.startProcess();
    const message = this.text;
    this.context.drawImage(this.originalImage, 0, 0);
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
    this.base64 = this.canvas.toDataURL();

    if(i > data.length) {
      this.processFailed('Unfortunately, the length of the message exceeded the number of bytes available in the image.');
    } else {
      this.processSucceeded();
    }
  }

  decodeFromImage() {
    this.startProcess();
    const imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
    const data = imageData.data;
    let message = '';
    let i = 0;
    const increment = () => i += i % 4 === 2 ? 2 : 1;
    const next = () => {
      const couple = data[i] & 0x03;
      increment();
      return couple;
    };

    while(i < data.length) {
      const code = (next() << 6) |
                   (next() << 4) |
                   (next() << 2) |
                   (next());
      if(9 <= code && code <= 13 || 32 <= code && code <= 126)
        message += String.fromCharCode(code);
      else
        break;
    }

    this.textState.text = message;

    if(message.length === 0)
      this.processFailed('Unfortunately, no message could be found in the image');
    else
      this.processSucceeded();
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