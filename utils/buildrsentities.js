//
//  This script will scrape all entities from Rackspace documentaion
//  Usage: node <this file>
//
var $ = require('jquery'),
http = require('http'),
fs = require('fs'),
path = require('path'),
get = function(p, callback) {
    var data = '';
    http.get({
        host: 'docs.rackspace.com',
        path: '/servers/api/v1.0/' + p
    },
    function(res) {
        res.on('data', function(c) {
            data += c;
        });
        res.on('end', function() {
            if (data.match(/404/)) {
                console.warn('Might be 404d', p);
            }
            callback(data);
        });
    });
},
save = function(p) {
    get(p, function(r) {
        var name = path.basename(p);
        console.log('Saving', name);
        fs.writeFileSync('r/' + name, r);
    });
},
donelist = [];

function rec(p) {
    if (donelist.indexOf(p) < 0) {
        donelist.push(p);
        get(p, function(r) {
            $(r).find('[href!=]').each(function() {
                var href = $(this).attr('href');
                if (href.match(/\.xsd$/)) {
                    rec(href);
                } else if (href.match(/\.json/)) {
                    save(href.replace(/^\.\.\//, ''));
                }
            });
        });
    }
}

rec('');

