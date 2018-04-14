$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });


    $(window).scroll(function () {
        console.log($(this).scrollTop());
        if ($(this).scrollTop() > 500) {
            $(".catalog").animate({
                width: "95%"
            }, 2000, function () {
                // Animation complete.
            });
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navigation').css({
                position: "fixed"
            })
        }else {
            $('.navigation').css({
                position: "static"
            })
        }
    });
     $(window).scroll(function () {
        console.log($(this).scrollTop());
        if ($(this).scrollTop() > 200) {
            $("#people").animate({
                width: "100%"
            }, 2000, function () {
                // Animation complete.
            });
        }
    });
    $(window).scroll(function () {
        console.log($(this).scrollTop());
        if ($(this).scrollTop() > 200) {
            $(".nameText").animate({
                width: "100%"
            }, 1000, function () {
                // Animation complete.
            });
        }
    }) 
    $(window).scroll(function () {
        console.log($(this).scrollTop());
        if ($(this).scrollTop() > 200) {
            $(".textPersonal").animate({
                width: "70%"
            }, 1000, function () {
                // Animation complete.
            });
        }
    });
    
});
