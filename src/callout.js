//
//  Calling out to targets
//  
var apiaws = require('./api-aws.js');

exports.callout = function(target, resources) {
    switch (target) {
    case 'aws':
        aws(resources);
        break;
    case 'rackspace':
        rackspace(resources);
        break;
    }
};

function aws(resources) {
    var template, r = {};

    resources.forEach(function(resource) {
        var name = Object.keys(resource)[0];
        r[name] = resource[name];
    });

    template = {
        AWSTemplateFormatVersion: '2010-09-09',
        Description: 'Generated by CloudML',
        Resources: r
    };

    apiaws.createTemplate(template);
}

function rackspace(resources) {
    console.log(require('util').inspect(resources, false, null));
}
