const color = (name) => ({ name });

const colors = {
  AURORA_BLUE: color('aurora-blue'),
  AURORA_GREEN: color('aurora-green'),
  FABLE_LAVENDER: color('fable-lavender'),
  FABLE_PINK: color('fable-pink'),
  LIVIAN_YELLOW: color('livian-yellow'),
  EVENTIDE_BLACK: color('eventide-black'),
  AUTUMN_RED: color('autumn-red'),
  AUTUMN_ORANGE: color('autumn-orange'),
  AELLA_GREEN: color('aella-green')
};

export default {
  list: () => Object.values(colors).map(color => color.name),
  ...colors
};
