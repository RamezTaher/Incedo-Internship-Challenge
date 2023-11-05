module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/__tests__"],
  collectCoverageFrom: ["<rootDir>/src/**/*.ts", "!**/node_modules/**"],
  testPathIgnorePatterns: ["<rootDir>/__tests__/mocks/"],
  modulePathIgnorePatterns: ["<rootDir>/__tests__/setup.ts"],
}
