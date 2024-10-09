module.exports = {
  transform: {
    // Add JSX support with esbuild-jest by setting the loader option to "jsx"
    "^.+\\.(js|jsx)$": [
      "esbuild-jest",
      {
        loaders: {
          ".js": "jsx", // Ensure esbuild treats JS files as JSX
          ".jsx": "jsx", // Explicitly set JSX files as well
        },
      },
    ],
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx}"], // Include files to collect coverage from
  coverageDirectory: "coverage", // Specify output directory for coverage
  coverageReporters: ["json", "lcov", "text", "clover"], // Specify coverage report formats
  testEnvironment: "jsdom", // Use jsdom for React component testing
};

// module.exports = {
//   transform: {
//     "^.+\\.[jt]sx?$": "esbuild-jest",
//   },
//   testEnvironment: "node", // Change from 'jsdom' to 'node'
//   moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
//   setupFilesAfterEnv: ["@testing-library/jest-dom"],
// };
