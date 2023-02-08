module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: ['**/*.spec.ts'],
  clearMocks: true,
  verbose: true,
};
