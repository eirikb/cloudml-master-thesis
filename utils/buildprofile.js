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
            var obj = {};

            $('.informaltable tbody tr').each(function() {
                var names = [];
                $(this).find('td').each(function() {
                    names.push($(this).text().trim().split('\n').join('-'));
                });
                obj[names[0]] = {
                    type: names[1],
                    required: names[2],
                    notes: names[3]
                };
            });

            resources[$('h1').text().replace(/ \w*/, '')] = obj;

            i++;
            console.log(Math.floor((i / total) * 100) + '%');
            if (i === total) {
                fs.writeFileSync('profile.json', JSON.stringify(resources));
                console.log('DONE');
            }
        });
    }).size();
});

