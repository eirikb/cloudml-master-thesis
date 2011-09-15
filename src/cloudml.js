//
//  Read template file from file system and orchestrate
//
var fs = require('fs');

var preprocess = require('./preprocess.js'),
transform = require('./transform.js'),
callout = require('./callout.js');

var targets = ['aws', 'rackspace'];

if (process.argv.length >= 4 && targets.indexOf(process.argv[3]) >= 0) {
    var templateFile = process.argv[2],
    target = process.argv[3],
    resources;

    readFile(templateFile, function(data) {
        data = preprocess.preprocess(data);
        resources = transform.transformResources(target, data);
        callout.callout(target, resources);
    });
} else {
    console.log('Usage: templatefile target <parameters>');
    console.log('Available targets:', targets.join(' '));
}

function readFile(templateFile, callback) {
    fs.readFile(templateFile, function(err, data) {
        if (!err) {
            parseData(data, callback);
        } else {
            console.error(err.message);
        }
    });
}

function parseData(data, callback) {
    try {
        callback(JSON.parse(data));
    } catch(err) {
        console.error(err.message);
    }
}

