import { config } from "./base.js";

/** @type {import('jest').Config} */
export const browserConfig = {
  ...config,
  testEnvironment: "jsdom",
};
