var cloudml = {};

$(function() {
    $.getJSON('profile.json', function(data) {
        cloudml.menu.init(data);
        cloudml.diagram.init(data);
    });
});

