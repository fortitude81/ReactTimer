var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
      browsers: ['Chrome'],
      singleRun: true,
      frameworks: ['mocha'],
      files: ['app/tests/**/*.test.jsx'],
      preprocessors: {   //this is what we wanna do with test files
        'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
      },
      reporters: ['mocha'],
      client: {
        mocha: {
          timeout: '5000'
        }
      },
      webpack: webpackConfig,
      webpackServer: {
        noInfo: true
      }
  });
};
