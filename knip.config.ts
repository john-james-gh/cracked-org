import type { KnipConfig } from "knip";

const config: KnipConfig = {
  workspaces: {
    ".": {
      ignoreDependencies: ["tailwindcss"],
    },
    "packages/typescript-config": {
      ignoreUnresolved: ["next"],
    },
    "packages/tailwind-config": {
      ignoreDependencies: ["tailwindcss", "postcss", "@tailwindcss/postcss"],
    },
  },
};

export default config;
