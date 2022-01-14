"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Sync object
const config = {
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
exports.default = config;
