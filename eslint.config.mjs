import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import withNuxt from './.nuxt/eslint.config.mjs'


export default withNuxt(
    {
      rules: {
        "prefer-const": "warn",
        "no-constant-binary-expression": "error",
          "vue/attribute-hyphenation" : "error"

      },
    },
  { ignores: ['./.nuxt', './node_modules'] },
  {files: ["**/*.{js,mjs,cjs,ts,vue}"]},
  {languageOptions: { globals: {...globals.browser, ...globals.node} }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {files: ["**/*.vue"], languageOptions: {parserOptions: {parser: tseslint.parser}}},
);
