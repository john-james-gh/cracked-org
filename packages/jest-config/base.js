/** @type {import('jest').Config} */
export const config = {
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js"],
  modulePathIgnorePatterns: [
    "<rootDir>/node_modules",
    "<rootDir>/dist",
    "<rootDir>/.next",
    "<rootDir>/.turbo",
  ],
  preset: "ts-jest",
  collectCoverage: true, // This is set to false in watch mode via CLI.
  coverageReporters: ["lcov"],
  passWithNoTests: true,
  reporters: [["github-actions", { silent: false }], "summary"],
};
