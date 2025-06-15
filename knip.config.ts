import type { KnipConfig } from "knip";

const config: KnipConfig = {
  workspaces: {
    ".": {
      ignoreDependencies: ["tailwindcss", "@jest/globals"],
      ignoreUnresolved: [
        "@jest/globals",
        "ts-jest/jest-preset",
        "jest-environment-jsdom",
        "ts-jest",
      ],
    },
    "packages/typescript-config": {
      ignoreUnresolved: ["next"],
    },
    "packages/tailwind-config": {
      ignoreDependencies: ["tailwindcss", "postcss", "@tailwindcss/postcss"],
    },
    "packages/jest-config": {
      ignoreDependencies: ["ts-jest", "jest-environment-jsdom"],
    },
  },
};

export default config;
