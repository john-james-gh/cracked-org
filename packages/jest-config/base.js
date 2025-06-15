/** @type {import('jest').Config} */
export const config = {
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx"],
  modulePathIgnorePatterns: [
    "<rootDir>/node_modules",
    "<rootDir>/dist",
    "<rootDir>/.next",
    "<rootDir>/.turbo",
  ],
  preset: "ts-jest",
};
