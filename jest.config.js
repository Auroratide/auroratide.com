const path = require('path')

module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.svelte$': ['svelte-jester', {
      preprocess: true
    }]
  },
  setupFilesAfterEnv: [ path.join(__dirname, 'src', 'testing', 'setup.ts') ],
};
