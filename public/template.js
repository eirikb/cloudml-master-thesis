var Template = function(template) {
    var self = this, k, l;
    self.Resources = {};

    function merge(obj, data) {
        for (var prop in data) {
            if (Object.prototype.hasOwnProperty.call(data, prop)) {
                if (data[prop]) {
                    obj[prop] = data[prop];
                }
            }
        }
        return obj;
    }

    function create(name, data) {
        var a = data.Type.split('::'),
        objConstructor = Resources, i;
        for (i = 0; i < a.length; i++) {
            objConstructor = objConstructor[a[i]];
        }
        return merge(new objConstructor(name), data.Properties);
    }

    function findRef(ref) {
        var k;
        for (k in self.Parameters) {
            if (k === ref) {
                return self.Parameters[k]
            }
        }
        for (k in self.Resources) {
            if (k === ref) {
                return self.Resources[k];
            }
        }
        return null;
    }

    self.Parameters = template.Parameters;

    for (k in template.Resources) {
        self.Resources[k] = create(k, template.Resources[k]);
    }
    for (k in self.Resources) {
        for (l in self.Resources[k]) {
            if (self.Resources[k][l].constructor === Object) {
                console.log(k, l, self.Resources[k][l]);
                var ref = self.Resources[k][l]['Ref'];
                if (ref) {
                    self.Resources[k][l] = findRef(ref);
                }
            } 
        }
    }

    return self;
};

