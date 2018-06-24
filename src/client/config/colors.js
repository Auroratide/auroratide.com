const color = (name) => ({ name });

const colors = {
  AURORA_BLUE: color('aurora-blue'),
  FABLE_LAVENDER: color('fable-lavender'),
  EVENTIDE_BLACK: color('eventide-black'),
  AUTUMN_RED: color('autumn-red')
};

export default {
  list: () => Object.values(colors).map(color => color.name),
  ...colors
};
