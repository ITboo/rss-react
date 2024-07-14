/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  env: { browser: true, es2023: true },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:perfectionist/recommended-natural",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  overrides: [
    {
      extends: ["plugin:@typescript-eslint/disable-type-checked"],
      files: ["./**/*.+(cjs|js|mjs)"],
    },
    {
      env: { node: true },
      files: ["./**/*.cjs"],
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.app.json", "tsconfig.node.json"],
    tsConfigRootDir: __dirname,
  },
  plugins: ["@typescript-eslint", "react-refresh", "react-compiler"],
  root: true,
  rules: {
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    curly: ["error", "all"],
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "perfectionist/sort-imports": [
      "error",
      {
        "custom-groups": {
          type: {
            react: ["react", "react-*", "react-*/*"],
          },
          value: {
            react: ["react", "react-*", "react-*/*"],
          },
        },
        groups: [
          "type",
          "react",
          ["builtin", "external"],
          "internal-type",
          "internal",
          ["parent-type", "sibling-type", "index-type"],
          ["parent", "sibling", "index"],
          "object",
          "style",
          "unknown",
        ],
        "internal-pattern": ["@/**"],
        "newlines-between": "always",
        order: "asc",
        type: "natural",
      },
    ],
    "react-compiler/react-compiler": "error",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: true,
    },
    react: {
      version: "detect",
    },
  },
};
