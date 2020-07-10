module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false,
        "targets": {
          "browsers": [
            "> 1%",
            "last 2 versions",
            "ie >= 9"
          ],
        },
        "useBuiltIns": "usage",
        "corejs": 3
      }
    ]
  ],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }],
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-modules-commonjs"
  ],
  "env": {
    "test": {
      "presets": [
        "@babel/preset-env",
      ],
      "plugins": []
    }
  }
}
