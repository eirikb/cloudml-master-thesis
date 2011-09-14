var fs = require('fs');

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
        processResources(JSON.parse(data));
    } catch(err) {
        console.error(err.message);
    }
}

function mapParameters(data) {
    var parameters = {},
    argvParameters = Object.keys(data.Parameters);
    if (argvParameters.length === process.argv.length - 3) {
        argvParameters.forEach(function(key, i) {
            parameters[key] = process.argv[i + 3];
        });
        return parameters;
    } else {
        console.error('Must specify these parameters:', argvParameters);
    }
}

function processResources(data) {
    var parameters = mapParameters(data);
    data.Resources.forEach(function(resource) {
        processParameters(resource.Properties, parameters);
    });
    console.log(require('util').inspect(data, true, null));
}

function processParameters(properties, parameters) {
    Object.keys(properties).forEach(function(key) {
        if (typeof properties[key] === 'object' && typeof properties[key].Ref !== 'undefined') {
            properties[key] = parameters[properties[key].Ref];
        }
    });
}

