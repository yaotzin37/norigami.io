module.exports = {
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  collectCoverageFrom: [
    'scripts/**/*.js',
    'src/**/*.js',
    '!node_modules/**'
  ],
  testMatch: ['**/tests/**/*.test.js']
};
