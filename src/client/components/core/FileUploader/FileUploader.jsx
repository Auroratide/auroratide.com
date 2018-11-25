import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Button from 'Client/components/core/Button';
import styles from './style';

const FileUploader = ({ text, onChange }) =>
  <Button.label className={styles['file-uploader']} primary>
    <input type='file' onChange={onChange} />
    {text}
  </Button.label>;

FileUploader.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func
};

FileUploader.defaultProps = {
  text: 'Upload'
};

export default FileUploader;