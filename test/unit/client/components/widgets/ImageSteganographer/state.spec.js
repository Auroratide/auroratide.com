import State from 'Client/components/widgets/ImageSteganographer/state';

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

    state = new State();
    state.initCanvas(canvas);
  });

  afterEach(() => jest.restoreAllMocks());

  describe('applySteganography', () => {
    const _ = undefined; // implementation detail of jest-canvas-mock

    it('should embed the message into the two least significant bits of the colors in the image data', () => {
      state.textState.text = 'hi';
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
      state.textState.text = 'hiih';
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
      expect(state.error).not.toEqual('');
    });
  });
});