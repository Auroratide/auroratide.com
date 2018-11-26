import React from 'react';
import PropTypes from 'prop-types';
import State from './state';
import { renderIf } from 'Client/utils/render-if';
import FileUploader from 'Client/components/core/FileUploader';
import Textarea from 'Client/components/core/Textarea';
import Loading from 'Client/components/core/Loading';
import Button from 'Client/components/core/Button';

import classnames from 'classnames';
import styles from './style';

class ImageSteganographer extends React.Component {
  componentDidMount() {
    const { state } = this.props;

    state.initCanvas(this.canvas);

    const initialImage = new Image();
    initialImage.onload = () => state.updateImage(initialImage);
    initialImage.src = '/assets/logo/logo_0192.png';
  }

  handleFileUpload = e => Promise.resolve(e.persist())
    .then(() => this.props.state.startProcess())
    .then(() => createImageBitmap(e.target.files[0]))
    .then(data => this.props.state.updateImage(data))
    .catch(() => this.props.state.processFailed('Unfortunately, the image could not be processed.'));

  handleEncode = () => this.props.state.applySteganography();

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
            <FileUploader text='Select File' onChange={this.handleFileUpload} />
            <Button primary>Decode Text</Button>
          </div>
        </div>

        <div className={styles['interactive-element']}>
          <strong>Text</strong>
          <Textarea
            state={state.textState}
            placeholder='Type in the text you want to embed!' />
          <div className={styles.actions}>
            <Button primary className={styles.encode} onClick={this.handleEncode}>Encode into Image</Button>
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