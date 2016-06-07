$(document).ready(function() {
    var wid = $(window).width();
    var touch = $('#touch_menu');
    var menu = $('nav');

    $(touch).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle(400);
    });
    $(window).resize(function() {
        if (wid >= 768 && menu.is(':hidden')) {
            menu.removeAttr('style')
        }
    });
    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".main-mnu").slideToggle();
        return false;
    });

    if (wid <= 980) {
        document.getElementById('min_nav1').innerHTML = 'Перевозки';
        document.getElementById('min_nav2').innerHTML = 'Cотрудничество';
    }

    var running = document.getElementById('showReview');

    function runText(elem, t) {
        var textBlosk = elem.innerHTML;
        var arr = textBlosk.split('');
        var k = 0;
        elem.innerHTML = '';
        stop = setInterval(function() {
            if (true) {
                elem.innerHTML = elem.innerHTML + arr[k];
                k++;
            }
            if (k >= arr.length) clearInterval(stop);
        }, t);
    }
    runText(running, 27);


    var searchBl = $('#search_bl');
    var modField = $('#mod_field');

    $(searchBl).on('click', function(e) {
        e.preventDefault();
        modField.slideToggle(150);
        // $(searchBl).toggleClass("search_active")
    });

    $(window).resize(function() {
        if (modField.is(':hidden')) {
            modField.removeAttr('style');
        }
    });
    $(".search_active").click(function() {
        $(this).toggleClass("on");
        return false;
    });

    $('.carousel_items').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000
    });


});
