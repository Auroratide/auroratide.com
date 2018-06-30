import React from 'react';
import OmnixisImage from '../OmnixisImage';
import styles from './style';

const CoderSection = () =>
  <div className={styles['coder-section']}>
    <div className={styles.text}>
      <h2>Coder</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis volutpat lorem, eu porta justo. Pellentesque volutpat commodo egestas. Proin posuere urna at ligula sollicitudin lacinia. Nam congue, purus nec imperdiet tempor, velit sapien egestas enim, nec eleifend dui odio eu est.</p>
      <p>Mauris rutrum facilisis nunc, sed blandit justo viverra eu. Nulla consectetur, lacus id ornare pellentesque, ante nisl finibus tortor, vitae ullamcorper purus odio a mi. Morbi feugiat risus ante, id imperdiet diam placerat viverra.</p>
    </div>
    <OmnixisImage className={styles.image} />
  </div>;

export default CoderSection;