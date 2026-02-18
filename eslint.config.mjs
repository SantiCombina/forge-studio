import typescriptParser from "@typescript-eslint/parser";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import globals from "globals";

const eslintConfig = [
  // Ignorar archivos que no deben ser linteados
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "dist/**",
      "public/**",
      "*.config.js",
      "*.config.mjs",
      "*.config.ts",
    ],
  },

  // Configuración para archivos TypeScript y JavaScript
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        React: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
      prettier: prettier,
      "jsx-a11y": jsxA11y,
      import: importPlugin,
    },
    rules: {
      // Prettier rules
      "prettier/prettier": [
        "warn",
        {
          endOfLine: "auto",
          printWidth: 120,
          tabWidth: 2,
          useTabs: false,
          semi: true,
          singleQuote: true,
          trailingComma: "all",
        },
      ],

      // General JavaScript rules
      "no-unused-expressions": [
        "error",
        {
          allowShortCircuit: true,
        },
      ],
      "no-param-reassign": "off",
      "no-console": "off",
      "no-debugger": "off",
      "no-alert": "off",
      "no-use-before-define": "off",
      "no-underscore-dangle": "off",
      "func-names": "off",
      "no-nested-ternary": "off",
      "no-unused-vars": "off",

      // JSX A11y rules
      "jsx-a11y/control-has-associated-label": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/anchor-is-valid": "off",
      "jsx-a11y/label-has-associated-control": "off",

      // Import rules
      "import/no-cycle": "off",
      "import/prefer-default-export": "off",
      "import/no-unresolved": "off",
      "import/no-anonymous-default-export": "off",
      "import/extensions": "off",
      "import/order": [
        "warn",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
              position: "before",
            },
            {
              pattern: "./**",
              group: "sibling",
              position: "after",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],

      // TypeScript rules
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-empty-function": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-use-before-define": "off",
    },
  },
];

export default eslintConfig;
