/**
 * @see https://github.com/lint-staged/lint-staged?tab=readme-ov-file#configuration
 * @type {import('lint-staged').Configuration}
 */
const config = {
  "**/*": "prettier --write --ignore-unknown",
  "**/package.json": "sort-package-json",
};

export default config;
