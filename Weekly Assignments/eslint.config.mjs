import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      ...pluginJs.configs.recommended.rules, // ESLint recommended JS rules
      ...pluginReact.configs.recommended.rules, // React recommended rules

      // Variable-related rules
      camelcase: ["error", { properties: "always" }], // Enforce camelCase
      "no-undef": "error", // Disallow use of undeclared variables
      "no-unused-vars": ["warn", { vars: "all", args: "after-used" }], // Warn on unused vars
      "no-redeclare": "error", // Disallow redeclaration of variables

      // Style-related rules
      semi: ["error", "always"], // Require semicolons at the end of statements
      quotes: ["error", "double"], // Enforce single quotes
      indent: ["error", 2], // Enforce 2-space indentation
      "no-trailing-spaces": "error", // Disallow trailing spaces
      "eol-last": ["error", "always"], // Enforce newline at the end of files
      "object-curly-spacing": ["error", "always"], // Enforce spacing in curly braces
      "array-bracket-spacing": ["error", "never"], // Disallow spaces in array brackets
      "max-len": ["warn", { code: 80 }], // Warn if lines exceed 80 characters

      // Best practices
      eqeqeq: ["error", "always"], // Require strict equality (===)
      "no-var": "error", // Disallow var (use let or const)
      "prefer-const": ["error", { destructuring: "all" }], // Prefer const if not reassigned
      "no-console": "warn", // Warn on console.log usage
      "no-alert": "error", // Disallow use of alert
      curly: ["error", "multi-line"], // Require curly braces for multi-line statements
      "no-multi-spaces": "error", // Disallow multiple spaces
      "consistent-return": "error", // Ensure return statements are consistent

      // React-specific rules
      "react/prop-types": "off", // Disable prop-types validation
      "react/jsx-uses-react": "off", // Disable importing React for JSX (React 17+)
      "react/jsx-uses-vars": "error", // Prevent unused React components
    },
  },
];
