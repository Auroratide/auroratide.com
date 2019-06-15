import React, { useState, useRef } from 'react';
import State from './state';
import Dots from './Dots';
import Line from './Line';
import LastClicked from './LastClicked';
import Button from 'Client/components/core/Button';
import { renderIf } from 'Client/utils/render-if';
import classnames from 'classnames';
import useArray from './use-array';

import styles from './style';

const ConnectNineDots = () => {
  const points = useArray();
  const [ state ] = useState(new State(points, 4));
  const dots = useRef();
  const lines = useRef();

  const handleClick = e => {
    if(state.atLimit) {
      state.reset();
    } else {
      const rect = e.currentTarget.getBoundingClientRect();
      state.record(e.clientX - rect.left, e.clientY - rect.top);
    }
  };

  const isSuccess = dots.current && lines.current &&
    state.intersectsAllCircles(dots.current.getCirclesRelativeTo(lines.current));

  return <div className={styles['connect-nine-dots']}>
    <div className={classnames(styles['game-area'], { [styles.success]: isSuccess }, { [styles.danger]: !isSuccess && state.atLimit })}>
      <Dots ref={dots} />
      <div className={styles.lines} onClick={handleClick} ref={lines}>
        {state.lines.map((line, i) => <Line line={line} key={i} />)}
      </div>
      {renderIf(state.lastPoint && !state.atLimit, () => <LastClicked point={state.lastPoint} />)}
    </div>
    <Button primary className={styles.reset} onClick={() => state.reset()}>Restart</Button>
  </div>;
};

export default ConnectNineDots;