import html from "eslint-plugin-html";

const globals = {
  window: "readonly",
  document: "readonly",
  Math: "readonly",
  Date: "readonly",
  setTimeout: "readonly",
  requestAnimationFrame: "readonly",
  console: "readonly",
};

const rules = {
  "no-undef": "error",
  "no-unused-vars": "warn",
  "no-unreachable": "error",
  "eqeqeq": ["warn", "always"],
  "no-self-assign": "error",
  "no-const-assign": "error",
  "no-dupe-keys": "error",
};

export default [
  {
    files: ["**/*.html"],
    plugins: { html },
    rules,
    languageOptions: { globals },
  },
];
