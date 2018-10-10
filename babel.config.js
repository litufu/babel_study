module.exports = function (api) {
  api.cache.forever()
  const presets = [
    [
      "@babel/env",
      {
        useBuiltIns: "usage",
      },
    ],
    [
      "@babel/preset-react",
      {
        useBuiltIns: false,
      },
    ],
  ];
  const plugins = [  ];

  return {
    presets,
    plugins
  };
}
