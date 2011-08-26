$(function() {

    $(['EC2WebSiteSample-1.0.0.template']).each(function() {
        $.get('aws/' + aws, function(data) {
            var template = new Template($.parseJSON(data), new Profile());
            console.log(template, $.parseJSON(data));
        });
    });

});

