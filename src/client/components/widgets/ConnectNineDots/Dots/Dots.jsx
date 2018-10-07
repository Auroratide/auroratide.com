import React from 'react';
import Assets from 'Client/config/assets';
import Point from '../geometry/point';
import Circle from '../geometry/circle';

import styles from './style';

export default class Dots extends React.Component {
  getCirclesRelativeTo(elem) {
    const container = elem.getBoundingClientRect();
    const dots = Array.from(this.container.children);

    return dots.map(dot => {
      const rect = dot.getBoundingClientRect();
      const radius = rect.width / 2;
      return new Circle(new Point(rect.left - container.left + radius, rect.top - container.top + radius), radius);
    });
  }

  render() {
    return <div className={styles.dots} ref={elem => this.container = elem}>
      <img src={Assets.ConnectNineDots.DOT} className={styles.dot} />
      <img src={Assets.ConnectNineDots.DOT} className={styles.dot} />
      <img src={Assets.ConnectNineDots.DOT} className={styles.dot} />
      <img src={Assets.ConnectNineDots.DOT} className={styles.dot} />
      <img src={Assets.ConnectNineDots.DOT} className={styles.dot} />
      <img src={Assets.ConnectNineDots.DOT} className={styles.dot} />
      <img src={Assets.ConnectNineDots.DOT} className={styles.dot} />
      <img src={Assets.ConnectNineDots.DOT} className={styles.dot} />
      <img src={Assets.ConnectNineDots.DOT} className={styles.dot} />
    </div>;
  }
}
