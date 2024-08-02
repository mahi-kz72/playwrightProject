import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    ignores: ['node_modules', '.env'], 
},
{
    files: ['**/*.js'],
    languageOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    plugins: {
        playwright: require('eslint-plugin-playwright'),
    },
    rules: {
      "no-console": 0,
      "no-restricted-syntax": [
        "error",
        {
          selector: "CallExpression[callee.property.name='only']",
          message: "We don't want to leave .only on our tests 😱",
        },
      ],
  
    },
},
];

