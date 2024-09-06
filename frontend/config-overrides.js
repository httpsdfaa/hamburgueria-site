// config-overrides.js
const webpack = require('webpack');

module.exports = function override(config) {
  // Adiciona os fallbacks para polyfills
  config.resolve.fallback = {
    "path": require.resolve("path-browserify"),
    "crypto": require.resolve("crypto-browserify"),
    "os": require.resolve("os-browserify/browser"),
    "process": require.resolve("process/browser"),
    "buffer": require.resolve("buffer/"),
    "stream": require.resolve("stream-browserify"),
    "vm": require.resolve('vm-browserify')
  };

  // Adiciona o ProvidePlugin para fornecer process e Buffer globalmente
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer']
    })
  ]);

  return config;
};
