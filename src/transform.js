//
//  Transform entites for resources according to provider
//
exports.transform = function(type, resource) {
    switch (type) {
    case 'aws':
        return aws(resource);
    case 'racksace':
        return rackspace(resource);
    default:
        console.error('Unknown type', type);
        break;
    }
};

function aws(r) {
    var resource = {},
    properties = {},
    p = r.Properties;

    properties.ImageId = '' + p.imageId;
    properties.InstanceType = p.flavor;

    resource[p.name] = {
        Type: 'AWS::EC2::Instance',
        Properties: properties
    };
    return resource;
}

