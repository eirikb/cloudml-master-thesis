exports.preprocess = function(data) {
    var parameters = mapParameters(data);
    data.Resources.forEach(function(resource) {
        processParameters(resource.Properties, parameters);
    });
    delete data.Parameters;
    return data;
};

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

function processParameters(properties, parameters) {
    Object.keys(properties).forEach(function(key) {
        if (typeof properties[key] === 'object' && typeof properties[key].Ref !== 'undefined') {
            properties[key] = parameters[properties[key].Ref];
        }
    });
}

