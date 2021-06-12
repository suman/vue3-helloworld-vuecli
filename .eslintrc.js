module.exports = {
  root: true,
  env: {
    jest: true,
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint",
  },

  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)", "**/__tests__/**/*.spec.{j,t}s?(x)"],
      env: {
        jest: true,
      },
    },
  ],
};
