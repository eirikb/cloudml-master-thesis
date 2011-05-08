var _ = require('underscore');

var Template = function(profile, template) {
	var self = this,
	k, i, l;
	self.meta = {
		warnings: []
	};

	function merge(obj, data) {
		_.keys(data, function(key) {
			if (!obj[key]) {
				self.meta.warnings.push('Profile does not have property ' + prop + ' for object ' + obj.toString());
			}
			obj[key] = data[key];
		});
		return obj;
	}

	function create(name, data) {
		var constructor = profile,
		obj;
		_.each(data.Type.split('::'), function(ns) {
			constructor = constructor[ns];
		});
		obj = new constructor();
		obj.meta && _.each(obj.meta.required, function(required) {
			if (!obj[required]) {
				self.meta.warnings.push('Requied property ' + obj.meta.required[i] + ' is not set in ' + obj.toString());
			}
		});
		return obj;
	}

	_.extend(self, template);
    _.each(self.Resources, function(resource, key) {
        self.Resources[key] = create(key, resource);
    });

	this.serialize = function() {
		removeAllMeta(self.Parameters);
		removeAllMeta(self.Mappings);
		var t = {
			AWSTemplateFormatVersion: self.AWSTemplateFormatVersion,
			Descriptoin: self.Description,
			Parameters: self.Parameters,
			Mappings: self.Mappings,
			Outputs: self.Outputs
		};
		return t;
	};

	return self;
};

var Ref = function(ref) {
	this.ref = ref;
};

if (typeof module !== 'undefined' && module.exports) {
	module.exports.Template = Template;
}

