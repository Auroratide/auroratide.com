import React from 'react';
import Layer from './Layer';
import styles from './style';

const MaslowsHierarchyOfNeeds = () =>
  <div className={styles['maslows-hierarchy-of-needs']}>
    <Layer className={styles['self-actualization']} title='Self-Actualization' text='Need for self-expression and meeting personal goals' />
    <Layer className={styles.esteem} title='Esteem' text='Need for respect, recognition, and self worth' />
    <Layer className={styles.belonging} title='Belonging' text='Need for friendship, family, and intimacy' />
    <Layer className={styles.safety} title='Safety' text='Need for security, consistency, employment, and health' />
    <Layer className={styles.physiological} title='Physiological' text='Need for food, water, air, and sleep' />
  </div>;

export default MaslowsHierarchyOfNeeds;