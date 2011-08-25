var http = require('http'),
    fs = require('fs'),
$ = require('jquery'),
userGuideHost = 'docs.amazonwebservices.com',
userGuideUrl = '/AWSCloudFormation/latest/UserGuide/',
resources = {};

console.log('Building profile from %s', userGuideHost + userGuideUrl);

function get(path, callback) {
    http.get({
        host: userGuideHost,
        path: userGuideUrl + path
    },
    function(res) {
        var result = '';

        res.on('data', function(chunk) {
            result += chunk;
        });

        res.on('end', function() {
            callback(result);
        });
    });
}

get('_toc.html', function(result) {
    var i = 0;
    console.log('Got list of resources');
    var total = $(result).find('#aws-product-property-reference a').each(function() {
        var href = $(this).attr('href');
        console.log('Fetching %s', href);
        get(href, function(result) {
            var $r = $(result),
            props = [],
            obj = {};

            $r.find('.informaltable thead th').each(function() {
                props.push($(this).text());
            });

            $r.find('.informaltable tbody tr').each(function() {
                $(this).find('td').each(function(i) {
                    obj[props[i]] = $(this).text().trim();
                });
            });

            resources[$r.find('h1').text().replace(/ \w*/, '')] = obj;

            i++;
            console.log(Math.floor((i / total) * 100) + '%');
            if (i === total) {
                fs.writeFileSync('profile.json', JSON.stringify(resources));
                console.log('DONE');
            }
        });
    }).size();
});

