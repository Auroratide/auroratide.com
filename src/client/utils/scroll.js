import wait from '@auroratide/wait';

export const toTop = () => wait.for(1).milliseconds().then(() => window.scroll( {
  top: 0,
  left: 0,
  behavior: 'smooth'
} ));

export default {
  toTop
};
