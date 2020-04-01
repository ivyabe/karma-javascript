## Prerequisite
Node is installed

## Setup
```bash
git clone https://github.com/ivyabe/karma-javascript.git
npm install *optional since node_module is already included on clone*
```

## Run Test
```bash
npm test
```

## Additional Note :)
If necessary, update karma.conf.js for the files you want to test.

<b>karma.conf.js</b>
```bash
module.exports = function(config) {
    config.set({
        ...
        files: [
            { pattern: "src/*.js" }, //Update
        ],
        preprocessors: {
            "./src/*.js": ["coverage"] //Update
        },
        htmlReporter: {
            outputFile: "./test/test-results.html" //Update
        },
        ...
    });
};
```
