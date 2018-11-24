import React from 'react';
import { mount } from 'Test/enzyme';
import { allActionsToComplete } from 'Test/behavioural/helpers';
import wait from 'Client/utils/wait';
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

  const uploadFile = (name) => wrapper.find('input[type="file"]').simulate('change', {
    target: {
      files: [name]
    }
  });

  const changeText = (text) => wrapper.find(Textarea).simulate('change', {
    target: {
      value: text
    }
  });

  const getOriginalImage = () => wrapper.find('img').at(0);
  const getModifiedImage = () => wrapper.find('img').at(1);

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

    expect(getOriginalImage().props().src).toEqual('0000000000000000');

    changeText('yes');

    await wait.for(501); // debounce
    wrapper.update();

    expect(getModifiedImage().props().src).toContain('1320112011103030');
  });
});