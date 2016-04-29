var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: '',
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    files: [
      './test/**/*_spec.js'
    ],
    preprocessors: {
      './test/**/*_spec.js': ['webpack', 'sourcemap']
    },
    reporters: ['dots', 'osx'],
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    },
    webpackMiddleware: {
      stats: {
        colors: true
      }
    },
  });
};
