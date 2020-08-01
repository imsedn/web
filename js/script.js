"use strict";
//BURGER MENU
$(document).ready(function () {
    "use strict";

    $("#mob").click(function () {
        $(this).toggleClass("active");
        $(".header__link").toggleClass('active');
    });

});
//BURGER MENU

//WATER RIPPLE
    $(document).ready(function() {
        try {
            $('body').ripples({
                resolution: 512,
                dropRadius: 20, //px
                perturbance: 0.04,
            });
            $('main').ripples({
                resolution: 128,
                dropRadius: 10, //px
                perturbance: 0.04,
                interactive: true
            });
        }
        catch (e) {
            $('.error').show().text(e);
        }
    
        $('.js-ripples-disable').on('click', function() {
            $('body, main').ripples('destroy');
            $(this).hide();
        });
    
        $('.js-ripples-play').on('click', function() {
            $('body, main').ripples('play');
        });
    
        $('.js-ripples-pause').on('click', function() {
            $('body, main').ripples('pause');
        });
    
        // Automatic drops
        setInterval(function() {
            var $el = $('main');
            var x = Math.random() * $el.outerWidth();
            var y = Math.random() * $el.outerHeight();
            var dropRadius = 20;
            var strength = 0.04 + Math.random() * 0.04;
    
            $el.ripples('drop', x, y, dropRadius, strength);
        }, 400);
    });
    //WATER RIPPLE