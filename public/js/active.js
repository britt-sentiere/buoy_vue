(function ($) {
    'use strict';

    // :: 1.0 Nav Active Code
    if ($.fn.classyNav) {
        $('#educampNav').classyNav();
    }

    // :: 2.0 All Slides Active Code
    if ($.fn.owlCarousel) {
        var welcomeSlide = $(".welcome_slides");

        welcomeSlide.owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 1000,
            autoplayHoverPause: false
        });

        welcomeSlide.on('translate.owl.carousel', function () {
            var slideLayer = $("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        welcomeSlide.on('translated.owl.carousel', function () {
            var slideLayer = welcomeSlide.find('.owl-item.active').find("[data-animation]");
            slideLayer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });


        // Testimonial Slides Active Code
        $(".testimonial_slides").owlCarousel({
            items: 3,
            margin: 30,
            loop: true,
            nav: false,
            dots: true,
            center: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 3
                }
            }
        });

        // Popular Courses Slides Active Code
        $(".popular_coureses_slides").owlCarousel({
            items: 2,
            margin: 30,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                }
            }
        });

        // Upcoming Events Slides Active Code
        $(".upcoming_events_slides").owlCarousel({
            items: 2,
            margin: 30,
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            dots: false,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 2
                }
            }
        });
    }

    // :: 3.0 Magnific Popup Active Code 
    if ($.fn.magnificPopup) {
        // Gallery Active Code
        $('.magnific-popup').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
        // Video Btn Code
        $('.video_btn').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
    }

    // :: 4.0 counterup active code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 3000
        });
    }

    // :: 5.0 ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 2000,
            easingType: 'easeInOutQuart',
            scrollText: '<i class="fa fa-angle-up" aria-hidden="true"></i>'
        });
    }

    // :: 6.0 MatchHeight Active Code
    if ($.fn.matchHeight) {
        $('.item').matchHeight();
    }

    // :: 7.0 countdown active code
    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $(this).find(".days").html(event.strftime("%D"));
            $(this).find(".hours").html(event.strftime("%H"));
            $(this).find(".minutes").html(event.strftime("%M"));
            $(this).find(".seconds").html(event.strftime("%S"));
        });
    });

    // :: 8.0 Fullscreen Code

    var educamp_window = $(window);

    educamp_window.on('resizeEnd', function () {
        $(".window-height").height(educamp_window.height());
    });

    educamp_window.on('resize', function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 300);
    }).trigger("resize");

    // :: 9.0 Preloader Active Code
    educamp_window.load(function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // :: 10.0 wow active code
    new WOW().init();

    // :: 11.0 PreventDefault a click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

})(jQuery);
