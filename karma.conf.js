// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-junit-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress', 'kjhtml','junit'],
    junitReporter: {
      outputDir:'HeadlessChrome_0.0.0_(Linux_0.0.0)',
      outputFile: 'test-results-karma.xml',
      suite: 'unit',
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    captureTimeout: 60000,
    browsers: ['ChromeHeadless'],
    flags: [
      '--disable-web-security',
      '--disable-gpu',
      '--no-sandbox'
    ],
    failOnEmptyTestSuite: false,
    singleRun: false
  });
};
