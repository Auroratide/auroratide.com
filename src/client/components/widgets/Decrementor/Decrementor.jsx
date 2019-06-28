import React, { useState } from 'react';
import PropTypes from 'Client/utils/prop-types';
import Button from 'Client/components/core/Button';
import styles from './style';

const Decrementor = ({ initialValue }) => {
  const [ value, setValue ] = useState(initialValue);
  const decrement = () => setValue(prev => prev - 2);

  return <div className={styles.decrementor}>
    <div className={styles.number}>
      {value}
    </div>
    <Button primary onClick={decrement}>Decrement</Button>
  </div>;
};

Decrementor.propTypes = {
  initialValue: PropTypes.number
};

Decrementor.defaultProps = {
  initialValue: 100
};

export default Decrementor;