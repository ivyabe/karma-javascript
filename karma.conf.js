module.exports = function (config) {
    config.set({
        frameworks: ['mocha', 'chai'],
        files: [
            './src/use-file-and-function.js',
            './test/use-file-and-function.js'
        ],
        preprocessors: {
            './src/*.js': 'coverage'
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