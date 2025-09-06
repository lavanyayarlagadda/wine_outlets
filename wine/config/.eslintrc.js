// eslint.config.js (ES Module version)
export default {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: [
    "node_modules",
    "build",
    "dist",
    "coverage",
    "public",
    "core",
    "**/*.js",
    "**/*.jsx",
  ],
  rules: {
    "no-console": "warn",
    "no-debugger": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
    "react/react-in-jsx-scope": "off",
    "react/jsx-key": "error",
  },
  overrides: [
    {
      files: ["**/*.{ts,tsx}"],
      rules: {
        "@typescript-eslint/no-non-null-assertion": "off",
      },
    },
    {
      files: ["**/*.{test,spec}.{ts,tsx}"],
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
  ],
};
