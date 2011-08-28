cloudml.menu = (function() {
    function buildTree(obj) {
        var t = [],
        children;
        _(obj).chain().keys().each(function(key) {
            if (typeof obj[key] === 'object') {
                children = buildTree(obj[key]);
                t.push({
                    data: key,
                    children: children
                });
            }
        });
        return t;
    }

    var init = function(data) {
        console.log(data)
        $('#application strong').hide();

        $('#menu').jstree({
            json_data: {
                data: buildTree(data)
            },
            dnd: {
                drop_check: function(data) {
                    console.log(arguments);
                    return false;
                }
            },
            crrm: {
                move: {
                    check_move: function() {
                        return false;
                    }
                }
            },
            plugins: ['themes', 'search', 'json_data', 'ui', 'crrm', 'dnd']
        });

        $('#search').keyup(function() {
            $('#menu').jstree('close_all');
            $('#menu').jstree('search', $(this).val());
        });
    }

    return {
        init: init
    };
} ());

