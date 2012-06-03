$(function () {
    $('a').click(function () {
        var $this = $(this);

        slidehack[$this.data('command')]();

        return false;
    });
});

