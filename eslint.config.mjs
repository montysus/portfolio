import path from "node:path";
import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import tailwindcss from "eslint-plugin-tailwindcss";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  {
    ignores: [
      ".claude/**",
      ".next/**",
      ".playwright-mcp/**",
      "node_modules/**",
      "site/**",
    ],
  },
  {
    extends: [
      ...nextCoreWebVitals,
      ...compat.extends("plugin:prettier/recommended"),
      ...compat.extends("plugin:tailwindcss/recommended"),
    ],

    plugins: {
      tailwindcss,
    },

    settings: {
      tailwindcss: {
        callees: ["cn", "cva"],
        config: path.join(__dirname, "tailwind.config.ts"),
      },
    },

    rules: {
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],

          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
          ],

          pathGroupsExcludedImportTypes: ["react"],
          "newlines-between": "always",

          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],

      "@next/next/no-html-link-for-pages": "off",
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/classnames-order": "error",
    },
  },
]);
