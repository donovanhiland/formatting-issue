module.exports = {
  extends: [
    "kentcdodds",
    "kentcdodds/react",
    "kentcdodds/jest",
    "kentcdodds/prettier"
  ],
  rules: {
    "max-len": "off",
    "max-lines": "off",
    "func-style": "off",
    "no-eq-null": "off",
    eqeqeq: "off",
    "no-nested-ternary": "off",
    "no-console": ["error", { allow: ["error"] }],
    semi: ["error", "never"],
    quotes: ["error", "single"],
    "object-curly-spacing": ["error", "always"],
    "babel/object-curly-spacing": ["error", "always"],
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".js"] }],
    "react/jsx-max-props-per-line": [2, { maximum: 1 }]
  },
};
