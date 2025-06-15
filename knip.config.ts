import type { KnipConfig } from "knip";

const config: KnipConfig = {
  workspaces: {
    ".": {
      ignoreDependencies: [],
    },
    "packages/typescript-config": {
      ignoreUnresolved: ["next"],
    },
  },
};

export default config;
