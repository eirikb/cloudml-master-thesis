cloudml.menu = (function() {
    function buildTree(data) {
        var root = [];
        _(data).chain().keys().each(function(key) {
            var types = key.split('::'),
            parent = root;

            _(types).each(function(type, i) {
                var obj = _(parent).chain().select(function(o) {
                    return o.data === type;
                }).first().value();
                if (_(obj).isUndefined()) {
                    obj = {
                        data: type,
                        children: []
                    };
                    parent.push(obj);
                    if (type === _(types).last()) {
                        obj.data = {
                            title: type,
                            icon: 'http://openiconlibrary.sourceforge.net/gallery2/open_icon_library-full/icons/png/16x16/categories/applications-internet-2.png'
                        };
                        obj.metadata = {
                            draggable: true,
                            properties: data[key]
                        };
                    }
                }
                parent = obj.children;
            });

        });
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
                    return $(data.o).data('draggable');
                },
                drop_finish: function(data) {
                    var $o = $(data.o),
                    e = data.e;

                    cloudml.diagram.addClass(e.offsetX, e.offsetY, $o.text(), $o.data('properties'));
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
    };

    return {
        init: init
    };
} ());
