import path from 'path'

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\$lib(.*)': '<rootDir>/src/lib$1',
    '^@\/(.*)': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.svelte$': ['svelte-jester', {
      preprocess: true
    }],
    "\\.[jt]sx?$": "babel-jest",
  },
  setupFilesAfterEnv: [ path.resolve('test', 'testing', 'setup.ts') ],
  modulePathIgnorePatterns: ['<rootDir>/scripts'],
  transformIgnorePatterns: [
    "/node_modules/(?!@auroratide/nimcard)"
  ]
}
