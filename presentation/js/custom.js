$(function() {
    $('a').click(function() {
        var $this = $(this);

        slidehack[$this.data('command')]();

        return false;
    });

    var $slides = $('.slide');
    var total = $slides.size();
    $slides.each(function (i) {
        var $counter = $('<div>').addClass('pagecount').text((i + 1) + '/' + total);
        $(this).append($counter);
    }).size();
});