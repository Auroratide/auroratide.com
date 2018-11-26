import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import Button from 'Client/components/core/Button';
import styles from './style';

const FileUploader = ({ text, secondary, onChange }) =>
  <Button.label className={styles['file-uploader']} primary={!secondary} secondary={secondary}>
    <input type='file' onChange={onChange} />
    {text}
  </Button.label>;

FileUploader.propTypes = {
  text: PropTypes.string,
  secondary: PropTypes.bool,
  onChange: PropTypes.func
};

FileUploader.defaultProps = {
  text: 'Upload'
};

export default FileUploader;