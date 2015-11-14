$(window).ready(function () {
    $('.swicher').on('click', function () {
        a = $(this).parent().find('.description').css('display');
        if ($(this).parent().find('.description').css('display') == 'none') {
            $(this).parent().find('.description').slideDown('fast');
            $(this).html('Hide details');
        } else {
            $(this).parent().find('.description').slideUp(200);
            $(this).html('View more');
        }
    });
    $('#ShowMorePIC , .showMore-text').on('click', function () {
        if ($('.zaltoPart2').css('display') == 'none') {
            $('.showMore-text').html('Show less');
            $('#ShowMorePIC').addClass('rotate180')
            $('.zaltoPart2').slideDown(700);
        } else {
            $('.zaltoPart2').slideUp(700);
            $('.showMore-text').html('Show more');
            $('#ShowMorePIC').removeClass('rotate180')

        }
    })
});