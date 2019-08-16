
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

        var nav = $('.js--main-nav');
        var icon = $('.js--mobile-nav-icon ion-icon');

        nav.slideToggle(200);

        if (icon.has('[name="menu"]')) {

            icon.replaceWith("<ion-icon name=\"close\"></ion-icon>");

        } else if (icon.has('[name="close"]')) {

            icon.replaceWith("<ion-icon name=\"menu\"></ion-icon>");

        };

    });

});