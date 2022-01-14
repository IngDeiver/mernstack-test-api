import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  detectOpenHandles: true,
  testEnvironment: "node",
  coveragePathIgnorePatterns: ["/node_modules/"],
  setupFiles: ["<rootDir>/src/config/setup.ts"],
  moduleDirectories: [
    "node_modules"
  ]
};
export default config;
