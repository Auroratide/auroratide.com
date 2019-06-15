import React from 'react';
import PropTypes from 'prop-types';
import State from './state';
import { renderIf } from 'Client/utils/render-if';
import FileUploader from 'Client/components/core/FileUploader';
import Textarea from 'Client/components/core/Textarea';
import Loading from 'Client/components/core/Loading';
import Button from 'Client/components/core/Button';
import Icon from 'Client/components/core/Icon';

import classnames from 'classnames';
import styles from './style';

class ImageSteganographer extends React.Component {
  componentDidMount() {
    const { state } = this.props;

    state.initCanvas(this.canvas);

    const initialImage = new Image();
    initialImage.onload = () => {
      state.updateImage(initialImage);
      state.applySteganography();
    };
    initialImage.src = '/assets/logo/logo_0192.png';
  }

  handleFileUpload = e => Promise.resolve(e.persist())
    .then(() => this.props.state.startProcess())
    .then(() => createImageBitmap(e.target.files[0]))
    .then(data => this.props.state.updateImage(data))
    .catch(() => this.props.state.processFailed('Unfortunately, the image could not be processed.'));

  handleEncode = () => this.props.state.applySteganography();
  handleDecode = () => this.props.state.decodeFromImage();

  render() {
    const { state } = this.props;

    return <div className={classnames(styles['image-steganographer'], styles[state.status])}>
      {renderIf(state.status === 'pending', () =>
        <Loading className={styles.loading} text='Processing image...' />
      )}

      <div className={styles['interactive-elements']}>
        <div className={styles['interactive-element']}>
          <strong>Image</strong>
          <div className={styles['image-container']}>
            <img src={state.base64} alt='Steganography Image' />
          </div>
          <div className={styles.actions}>
            <FileUploader secondary text='Select File' onChange={this.handleFileUpload} />
            <Button primary className={styles.decode} onClick={this.handleDecode}>
              <Icon icon='angle-double-right' /> Decode Text <Icon icon='angle-double-right' />
            </Button>
          </div>
        </div>

        <div className={styles['interactive-element']}>
          <strong>Text</strong>
          <Textarea
            text={state.textState.text}
            onChange={state.textState.setText}
            className={styles.textarea}
            placeholder='Type in the text you want to embed!' />
          <div className={styles.actions}>
            <Button primary className={styles.encode} onClick={this.handleEncode}>
              <Icon icon='angle-double-left' /> Encode into Image <Icon icon='angle-double-left' />
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.message}>
        {state.error}
      </div>
      <canvas ref={elem => this.canvas = elem}></canvas>
    </div>;
  }
}

ImageSteganographer.propTypes = {
  state: PropTypes.instanceOf(State).isRequired
};

export default ImageSteganographer;