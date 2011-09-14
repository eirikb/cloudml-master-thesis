exports.postprocess = function(type, data) {
    switch (type) {
    case 'aws':
        aws(data);
        break;
    case 'racksace':
        rackspace(data);
        break;
    default:
        console.error('Unknown type', type);
        break;
    }
    return data;
};

function aws(data) {
    var template = {
        Resources: {}
    };
    data.Resources.forEach(function(resource) {
    });
}

