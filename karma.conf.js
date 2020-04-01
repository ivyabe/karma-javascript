module.exports = function (config) {
    config.set({
        frameworks: ['mocha', 'chai'],
        files: [
            './src/getter-setter.js',
            './test/getter-setter.js'
        ],
        preprocessors: {
            './src/getter-setter.js': 'coverage'
        },
        reporters: ['progress', 'coverage', 'html'],
        htmlReporter: {
            outputFile: './test/test-results.html'
        },
        port: 9876,  // karma web server port
        colors: true,
        client: {
            clearContext: false
        },
        logLevel: config.LOG_INFO,
        browsers: ['Chrome'], //'IE'
        autoWatch: false,
        concurrency: Infinity,
        singleRun: true
    })
}