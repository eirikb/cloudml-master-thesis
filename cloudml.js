var fs = require('fs');

var preprocessor = require('./preprocessor.js'),
postprocessor = require('./postprocessor.js');

if (process.argv.length >= 3) {
    var templateFile = process.argv[2];
    readFile(templateFile);
} else {
    console.log('Please provide template file as argument');
}

function readFile(templateFile) {
    fs.readFile(templateFile, function(err, data) {
        if (!err) {
            parseData(data);
        } else {
            console.error(err.message);
        }
    });
}

function parseData(data) {
    try {
        data = preprocessor.preprocess(JSON.parse(data));
        data = postprocessor.postprocess('aws', data);
        console.log(require('util').inspect(data, true, null));
    } catch(err) {
        console.error(err.message);
    }
}

