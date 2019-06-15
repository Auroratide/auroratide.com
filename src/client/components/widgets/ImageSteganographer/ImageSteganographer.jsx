import React, { useState, useEffect, useRef } from 'react';
import State from './state';
import { renderIf } from 'Client/utils/render-if';
import FileUploader from 'Client/components/core/FileUploader';
import Textarea from 'Client/components/core/Textarea';
import Loading from 'Client/components/core/Loading';
import Button from 'Client/components/core/Button';
import Icon from 'Client/components/core/Icon';
import useText from './use-text';

import classnames from 'classnames';
import styles from './style';

const ImageSteganographer = () => {
  const text = useText('Steganography is awesome!');
  const status = useText('');
  const error = useText('');
  const base64 = useText();
  const canvas = useRef(null);

  const [ state ] = useState(new State(text, status, error, base64));
  useEffect(() => {
    state.initCanvas(canvas.current);
    
    const initialImage = new Image();
    initialImage.onload = () => {
      state.updateImage(initialImage);
      state.applySteganography();
    };
    initialImage.src = '/assets/logo/logo_0192.png';
  }, []);

  const handleFileUpload = e => Promise.resolve(e.persist())
    .then(() => state.startProcess())
    .then(() => createImageBitmap(e.target.files[0]))
    .then(data => state.updateImage(data))
    .catch(() => state.processFailed('Unfortunately, the image could not be processed.'));

  return <div className={classnames(styles['image-steganographer'], styles[state.status.get()])}>
    {renderIf(state.status.get() === 'pending', () =>
      <Loading className={styles.loading} text='Processing image...' />
    )}

    <div className={styles['interactive-elements']}>
      <div className={styles['interactive-element']}>
        <strong>Image</strong>
        <div className={styles['image-container']}>
          <img src={state.base64.get()} alt='Steganography Image' />
        </div>
        <div className={styles.actions}>
          <FileUploader secondary text='Select File' onChange={handleFileUpload} />
          <Button primary className={styles.decode} onClick={state.decodeFromImage}>
            <Icon icon='angle-double-right' /> Decode Text <Icon icon='angle-double-right' />
          </Button>
        </div>
      </div>

      <div className={styles['interactive-element']}>
        <strong>Text</strong>
        <Textarea
          text={state.text.get()}
          onChange={state.text.set}
          className={styles.textarea}
          placeholder='Type in the text you want to embed!' />
        <div className={styles.actions}>
          <Button primary className={styles.encode} onClick={state.applySteganography}>
            <Icon icon='angle-double-left' /> Encode into Image <Icon icon='angle-double-left' />
          </Button>
        </div>
      </div>
    </div>

    <div className={styles.message}>
      {state.error.get()}
    </div>
    <canvas ref={canvas}></canvas>
  </div>;
};

export default ImageSteganographer;