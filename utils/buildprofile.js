var http = require('http'),
fs = require('fs'),
scraper = require('scraper'),
pref = 'http://docs.amazonwebservices.com/AWSCloudFormation/latest/UserGuide/',
resources = {};

console.log('Building profile from %s', pref);

scraper(pref + '_toc.html', function(err, $) {
    var i = 0,
    total;
    console.log('Got list of resources');
    total = $('#aws-product-property-reference a').each(function() {
        var href = $(this).attr('href');
        console.log('Fetching %s', href);
        scraper(pref + href, function(err, $) {
            var type = $('h1').text().replace(/ .+$/, ''),
            names = type.split('::'),
            resource;

            if (!resources[names[0]]) {
                resources[names[0]] = {};
            }

            resource = resources[names[0]];

            names.slice(1).forEach(function(name) {
                if (!resource[name]) {
                    resource[name] = {};
                }
                resource = resource[name];
            });

            $('.informaltable tbody tr').each(function() {
                var properties = [];

                $(this).find('td').each(function() {
                    var property = $(this).text();
                    property = property.split('\n').map(function(p) {
                        return p.trim();
                    }).join(' ');
                    properties.push(property);
                });

                resource[properties[0]] = {
                    type: properties[1],
                    required: properties[2],
                    notes: properties[3]
                };
            });

            i++;
            console.log(Math.floor((i / total) * 100) + '%');
            if (i === total) {
                fs.writeFileSync('profile.json', JSON.stringify(resources));
                console.log('DONE');
            }
        });
    }).size();
});

