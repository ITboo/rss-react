export default {
  "*": "prettier --write .",
  "*.{cjs,js,mjs,jsx,ts,tsx}": "eslint --fix .",
  "*.css": "stylelint --max-warnings 0",
};
