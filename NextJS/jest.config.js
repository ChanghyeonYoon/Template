// jest.config.js

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "src",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^(pages|components)/(.*)": "<rootDir>/src/$1/$2",
  },
  testResultsProcessor: "jest-sonar-reporter",
};

module.exports = createJestConfig(customJestConfig);
