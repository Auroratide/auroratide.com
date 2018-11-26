import React from 'react';
import PropTypes from 'prop-types';
import State from './state';
import debounce from 'Client/utils/debounce';
import FileUploader from 'Client/components/core/FileUploader';
import Textarea from 'Client/components/core/Textarea';
import ImageContainer from './ImageContainer';

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

  handleTextChange = debounce.event(() => this.props.state.applySteganography(), 500);

  render() {
    const { state } = this.props;

    return <div className={classnames(styles['image-steganographer'], styles[state.status])}>
      <div className={styles.images}>
        <ImageContainer title='Original' base64={state.originalBase64}>
          <FileUploader text='Select File' onChange={this.handleFileUpload} />
        </ImageContainer>
        <ImageContainer title='Modified' base64={state.modifiedBase64}>
          <Textarea
            state={state.textState}
            placeholder='Type in the text you want to embed!'
            onChange={this.handleTextChange} />
        </ImageContainer>
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