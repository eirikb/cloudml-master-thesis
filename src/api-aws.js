var https = require('https'),
qs = require('querystring'),
fs = require('fs'),
crypto = require('crypto');

function hmacSha256(key, toSign) {
    var hash = crypto.createHmac('sha256', key);
    return hash.update(toSign).digest('base64');
}

exports.createTemplate = function(template) {
    var req, now = new Date(),
    key = JSON.parse(fs.readFileSync('aws-key.json')),
    body = qs.stringify({
        Action: 'ListStacks'
    }),
    auth = 'AWS3-HTTPS ' + 'AWSAccessKeyId=' + key.id + ', ' + 'Algorithm=HmacSHA256, ' + 'Signature=' + hmacSha256(key.key, now.toUTCString()),
    options = {
        host: 'cloudformation.us-east-1.amazonaws.com',
        method: 'POST',
        headers: {
            Date: now.toUTCString(),
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
            'Content-Length': body.length,
            'x-amzn-authorization': auth
        }
    };

    req = https.request(options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
            console.log('BODY: ' + chunk);
        });
    });

    req.write(body);
};

