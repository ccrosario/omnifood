
$(document).ready(function () {

    $('.js--section-features').waypoint(function (direction) {

        if (direction == "down") {

            $('nav').addClass('sticky');

        } else {

            $('nav').removeClass('sticky');

        }

    }, {

            offset: '60px;'

        });

    /*------------------Animations on Scroll--------------------*/

    $('.js--wp-1').waypoint(function (direction) {

        $('.js--wp-1').addClass('animated fadeIn');

    }, {
            offset: '50%'
    })

    $('.js--wp-2').waypoint(function (direction) {

        $('.js--wp-2').addClass('animated fadeInUp');

    }, {
            offset: '50%'
    })

    $('.js--wp-3').waypoint(function (direction) {

        $('.js--wp-3').addClass('animated fadeIn');

    }, {
            offset: '50%'
    })

    $('.js--wp-4').waypoint(function (direction) {

        $('.js--wp-4').addClass('animated pulse');

    }, {
            offset: '50%'
    })

    /*------------------Mobile on Nav--------------------*/

    $('.js--mobile-nav-icon').click(function () {
                
        var closeIcon = $('.js--close-icon');
        var menuIcon = $('.js--menu-icon');

        var nav = $('.js--main-nav');
        nav.slideToggle(200);

        if (closeIcon.hasClass("nav-icon-invisible")) {

            closeIcon.removeClass("nav-icon-invisible");
            menuIcon.addClass("nav-icon-invisible");

        } else {

            closeIcon.addClass("nav-icon-invisible");
            menuIcon.removeClass("nav-icon-invisible");

        }

    });

});