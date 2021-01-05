module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.svelte$': ['svelte-jester', {
      preprocess: true
    }]
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect'
  ]
};