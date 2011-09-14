//
//  Read template file from file system and orchestrate
//
var fs = require('fs');

var preprocessor = require('./preprocessor.js'),
entityTransformator = require('./entitytransformator.js');

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
        processData(JSON.parse(data));
    } catch(err) {
        console.error(err.message);
    }
}

function processData(data) {
    data = preprocessor.preprocess(data);
    data.Resources.forEach(function(resource) {
        resource = entityTransformator.entityTransformation('aws', resource);
        console.log(resource);
    });
}

