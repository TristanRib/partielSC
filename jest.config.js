/** @type {import('ts-jest').JestConfigWithTsJest} */
// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleDirectories: ['node_modules', 'domain/classes'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/domain/$1',
  },
};