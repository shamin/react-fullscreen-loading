module.exports = {
  "extends": "airbnb",
  "parserOptions": {
      "ecmaVersion": 8,
      "ecmaFeatures": {
        "experimentalObjectRestSpread": true
      }
    },
  "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "comma-dangle": ["error", "never"],
      "semi": [2, "never"],
      "import/no-named-as-default": 0,
      "import/no-named-as-default-member": 0,
      "react/prefer-stateless-function": 0,
      "indent": ["error", 4],
      "indent": ["warn", 2],
    },
  "env": {
      "browser": true,
      "node": true
    }
};
