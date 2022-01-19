module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
      "mocha"
    ],
    "rules": {
    },
    "extends": [
        "plugin:mocha/recommended"
    ]
}
