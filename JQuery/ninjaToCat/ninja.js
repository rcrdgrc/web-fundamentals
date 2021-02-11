$(document).ready(function () {

    $('img').click(function () {
        console.log('data-alt-src value is', $(this).attr('data-alt-src'));
        let swap = $(this).attr('src');
        $(this).attr('src', $(this).attr('data-alt-src'));
        $(this).attr('data-alt-src', swap);
    });


});