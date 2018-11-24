import React from 'react';
import PropTypes from 'prop-types';
import State from './state';
import debounce from 'Client/utils/debounce';
import Textarea from 'Client/components/core/Textarea';
import styles from './style';

class ImageSteganographer extends React.Component {
  componentDidMount() {
    const { state } = this.props;

    state.initCanvas(this.canvas);

    const initialImage = new Image();
    initialImage.onload = () => state.updateImage(initialImage);
    initialImage.src = '/assets/logo/logo_0192.png';
  }

  handleFileUpload = e => createImageBitmap(e.target.files[0])
    .then(data => this.props.state.updateImage(data));

  handleTextChange = debounce.event(() => this.props.state.applySteganography(), 500);

  render() {
    const { state } = this.props;

    return <div className={styles['image-steganographer']}>
      <div className={styles.images}>
        <div className={styles['image-container']}>
          <strong>Original</strong>
          <img src={state.originalBase64} />
          <input type='file' onChange={this.handleFileUpload} />
        </div>
        <div className={styles['image-container']}>
          <strong>Modified</strong>
          <img src={state.modifiedBase64} />
          <Textarea
            state={state.textState}
            placeholder='Type in the text you want to embed!'
            onChange={this.handleTextChange} />
        </div>
      </div>
      <canvas ref={elem => this.canvas = elem}></canvas>
    </div>;
  }
}

ImageSteganographer.propTypes = {
  state: PropTypes.instanceOf(State).isRequired
};

export default ImageSteganographer;