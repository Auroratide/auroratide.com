import State from 'Client/components/widgets/ImageSteganographer/state';
import { Text } from 'Client/components/widgets/ImageSteganographer/use-text';

describe('ImageSteganographer State', () => {
  let state;
  let canvas;
  let context;

  beforeEach(() => {
    canvas = document.createElement('canvas');
    context = canvas.getContext('2d');
    jest.spyOn(canvas, 'getContext').mockReturnValue(context);
    canvas.width = 2;
    canvas.height = 2;

    state = new State(new Text(''), new Text(''), new Text(''), new Text(''));
    state.initCanvas(canvas);
  });

  afterEach(() => jest.restoreAllMocks());

  describe('applySteganography', () => {
    const _ = undefined; // implementation detail of jest-canvas-mock

    it('should embed the message into the two least significant bits of the colors in the image data', () => {
      state.text.set('hi');
      jest.spyOn(context, 'putImageData');

      state.applySteganography();

      expect(context.putImageData).toHaveBeenCalledWith(expect.objectContaining({
        data: [
          1, 2, 2, _,
          0, 1, 2, _,
          2, 1, _, _,
          _, _, _, _
        ]
      }), 0, 0);
    });

    it('should set failure message when the message size exceeds the number of available bytes in the image', () => {
      state.text.set('hiih');
      jest.spyOn(context, 'putImageData');

      state.applySteganography();

      expect(context.putImageData).toHaveBeenCalledWith(expect.objectContaining({
        data: [
          1, 2, 2, _,
          0, 1, 2, _,
          2, 1, 1, _,
          2, 2, 1, _
        ]
      }), 0, 0);
      expect(state.error.get()).not.toEqual('');
    });
  });

  describe('decodeFromImage', () => {
    it('should decode the message from the image and stop at the first nonnormal character', () => {
      const _ = 0;
      jest.spyOn(context, 'getImageData').mockReturnValue({
        data: [
          1, 3, 0, _,
          0, 1, 2, _,
          2, 1, 0, _,
          1, 2, 0, _
        ]
      });

      state.decodeFromImage();

      expect(state.text.get()).toEqual('pi');
    });

    it('should set the error message when no letters could be determined', () => {
      const _ = 0;
      jest.spyOn(context, 'getImageData').mockReturnValue({
        data: [
          0, 0, 0, _,
          1, _, _, _,
          _, _, _, _,
          _, _, _, _
        ]
      });

      state.decodeFromImage();

      expect(state.text.get()).toEqual('');
      expect(state.error.get()).not.toEqual('');
    });
  });
});