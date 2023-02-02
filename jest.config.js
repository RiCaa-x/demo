/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  roots: ["<rootDir>/src"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["/node_modules/", "\\.pnp\\.[^\\/]+$"],
  moduleNameMapper: {
    "^.+\\.(css|less|png|svg)$": "identity-obj-proxy"
  }
  // transform: {
  //   "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
  //   // '^.+\\.ts$': '<rootDir>/node_modules/ts-jest',
  // }
};
