//
//  Transform entites for resources according to provider
//
exports.transformResources = function(target, data) {
    var resources = [];
    data.Resources.forEach(function(resource) {
        resources.push(transform(target, resource));
    });
    return resources;
};

function transform(type, resource) {
    switch (type) {
    case 'aws':
        return aws(resource);
    case 'rackspace':
        return rackspace(resource);
    default:
        console.error('Unknown type', type);
        break;
    }
}

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

function rackspace(r) {
    var resource = {},
    p = r.Properties,
    flavors = ['small', 'medium', 'large'];

    ['imageId', 'name'].forEach(function(key) {
        resource[key] = p[key];
    });
    resource.flavorId = flavors.indexOf(p.flavor) + 1;

    return resource;
}

