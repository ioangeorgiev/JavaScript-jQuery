$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $(".scrollup").fadeIn(400);
        } else {
            $(".scrollup").fadeOut(400);
        }
    });

    $(".scrollup").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 700);
        return false;
    });
});