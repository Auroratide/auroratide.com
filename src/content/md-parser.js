module.exports = input => {
  if(input.length === 0)
    return {};

  const rcon = input.split(/\r?\n\r?\n/).map(text => ( {
    c: 'p',
    d: text
  } ));

  if(rcon.length === 1) {
    return rcon[0];
  } else {
    return rcon;
  }
};