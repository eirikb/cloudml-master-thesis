cloudml.diagram = (function() {
    var uml = Joint.dia.uml;

    var init = function(data) {
        Joint.paper('diagram', 800, 450);
    };

    var addClass = function(x, y, label, properties) {
        var keys = _(properties).keys();
        uml.Class.create({
            rect: {
                x: x,
                y: y,
                width: 130,
                height: 40 + keys.length * 15
            },
            label: label,
            shadow: true,
            attrs: {
                fill: '#00D8FF',
                opacity: 0.9
            },
            attributes: keys
        });
    };

    return {
        init: init,
        addClass: addClass
    };
} ());

