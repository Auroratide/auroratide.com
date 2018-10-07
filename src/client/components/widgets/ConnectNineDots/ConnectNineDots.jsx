import React from 'react';
import PropTypes from 'Client/utils/prop-types';
import State from './state';
import Dots from './Dots';
import Line from './Line';
import LastClicked from './LastClicked';
import Button from 'Client/components/core/Button';
import { renderIf } from 'Client/utils/render-if';
import classnames from 'classnames';

import styles from './style';

class ConnectNineDots extends React.Component {
  handleClick = e => {
    const state = this.props.state;
    if(state.atLimit) {
      state.reset();
    } else {
      const rect = e.currentTarget.getBoundingClientRect();
      state.record(e.clientX - rect.left, e.clientY - rect.top);
    }
  };

  isSuccess = () => {
    return this.dots && this.lines &&
      this.props.state.intersectsAllCircles(this.dots.getCirclesRelativeTo(this.lines));
  }

  render() {
    const { state } = this.props;
    const isSuccess = this.isSuccess();

    return <div className={styles['connect-nine-dots']}>
      <div className={classnames(styles['game-area'], { [styles.success]: isSuccess }, { [styles.danger]: !isSuccess && state.atLimit })}>
        <Dots ref={elem => this.dots = elem} />
        <div className={styles.lines} onClick={this.handleClick} ref={elem => this.lines = elem}>
          {state.lines.map((line, i) => <Line line={line} key={i} />)}
        </div>
        {renderIf(state.lastPoint && !state.atLimit, () => <LastClicked point={state.lastPoint} />)}
      </div>
      <Button primary className={styles.reset} onClick={() => state.reset()}>Restart</Button>
    </div>;
  }
}

ConnectNineDots.propTypes = {
  state: PropTypes.instanceOf(State).isRequired
};

export default ConnectNineDots;