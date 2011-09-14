//
//  Transform entites for resources according to provider
//
exports.entityTransformation = function(type, data) {
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
    data.Resources.forEach(function(resource) {
    });
}

