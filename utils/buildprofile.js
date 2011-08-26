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
            var props = [],
            obj = {};

            $('.informaltable thead th').each(function() {
                props.push($(this).text());
            });

            $('.informaltable tbody tr').each(function() {
                $(this).find('td').each(function(i) {
                    obj[props[i]] = $(this).text().trim().split('\n').join('-');
                });
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

