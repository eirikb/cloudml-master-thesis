cloudml.menu = (function() {
    function buildTree(data) {
        var root = [];
        _(data).chain().keys().each(function(key) {
            var types = key.split('::'),
            obj = _(root).chain().select(function(o) {
                return o.data === types[0];
            }).first().value();

            if (_(obj).isUndefined()) {
                obj = {
                    data: _(types).first()
                };
                root.push(obj);
            }

            _(types.slice(1)).chain().each(function(type, i) {
                var child;
                if (!obj.children) {
                    obj.children = [];
                }
                child = _(obj.children).chain().select(function(c) {
                    return c.data === type;
                }).first().value();
                if (_(child).isUndefined()) {
                    child = {
                        data: type
                    };
                    if (type === _(types).last()) {
                        child.metadata = {
                            draggable: true
                        };
                    }
                    obj.children.push(child);
                }
                obj = child;
            });

        });
        console.log(root)
        return root;

    }

    var init = function(data) {
        $('#application strong').hide();

        $('#menu').jstree({
            json_data: {
                data: buildTree(data)
            },
            dnd: {
                drop_check: function(data) {
                    console.log(arguments);
                    _(arguments[0]).each(function(a, i) {
                        console.log(i, $(a).data('draggable'));
                    });
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

