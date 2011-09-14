//
//  Read template file from file system and orchestrate
//
var fs = require('fs');

var preprocessor = require('./preprocessor.js'),
entityTransformator = require('./entitytransformator.js');

var targets = ['aws', 'rackspace'];

if (process.argv.length >= 4 && targets.indexOf(process.argv[3]) >= 0) {
    var templateFile = process.argv[2];
    readFile(templateFile);
} else {
    console.log('Usage: templatefile target <parameters>');
    console.log('Available targets:', targets.join(' '));
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
    var target = process.argv[3];
    data = preprocessor.preprocess(data);
    data.Resources.forEach(function(resource) {
        resource = entityTransformator.entityTransformation(target, resource);
        console.log(resource);
    });
}

