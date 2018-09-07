const forTime = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

export default {
  for: forTime
};