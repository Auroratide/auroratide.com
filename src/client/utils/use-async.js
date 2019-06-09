import { useState, useEffect } from 'react';

export default (fn) => {
  const [ waiting, setWaiting ] = useState(true);

  useEffect(() => {
    setWaiting(true);
    fn()
      .then(() => setWaiting(false))
      .catch(err => {
        setWaiting(false);
        throw err;
      });
  }, []);

  return waiting;
};