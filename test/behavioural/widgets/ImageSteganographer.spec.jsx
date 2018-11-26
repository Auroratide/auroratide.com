import React from 'react';
import { mount } from 'Test/enzyme';
import { allActionsToComplete } from 'Test/behavioural/helpers';
import Textarea from 'Client/components/core/Textarea';

import ImageSteganographer from 'Client/components/widgets/ImageSteganographer';

describe('ImageSteganographer Behaviour', () => {
  const ORIGINAL_IMAGE = {
    width: 2,
    height: 2,
    data: [
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0
    ]
  };

  let canvas;
  let context;
  let currentImage;

  let wrapper;

  const uploadFile = (file) => wrapper.find('input[type="file"]').simulate('change', {
    target: {
      files: [file]
    }
  });

  const changeText = (text) => wrapper.find(Textarea).simulate('change', {
    target: {
      value: text
    }
  });

  const encodeIntoImage = () => wrapper.find('button.encode').simulate('click');

  const getImageSrc = () => wrapper.find('img').props().src;

  beforeEach(() => {
    global.createImageBitmap = jest.fn();

    wrapper = mount(<ImageSteganographer />);
    canvas = wrapper.find('ImageSteganographer').instance().canvas;
    context = canvas.getContext('2d');
    canvas.getContext = jest.fn(() => context);
    context.drawImage = jest.fn(img => currentImage = img);
    context.getImageData = jest.fn(() => currentImage);
    context.putImageData = jest.fn(img => currentImage = img);

    canvas.toDataURL = jest.fn(() => currentImage.data.join(''));
  });

  afterAll(() => {
    delete global.createImageBitmap;
  });

  it('should embed the text into the uploaded image', async () => {
    global.createImageBitmap.mockResolvedValue(ORIGINAL_IMAGE);
    uploadFile('name.png');

    await allActionsToComplete();
    wrapper.update();

    expect(getImageSrc()).toEqual('0000000000000000');

    changeText('yes');
    encodeIntoImage();

    expect(getImageSrc()).toContain('1320112011103030');
  });

  it('should report an error when an error occurs uploading the file', async () => {
    global.createImageBitmap.mockResolvedValue(ORIGINAL_IMAGE);
    canvas.toDataURL.mockImplementation(() => {
      throw new Error();
    });

    uploadFile('name.png');

    await allActionsToComplete();
    wrapper.update();

    expect(wrapper.text()).toContain('Unfortunately');
  });
});