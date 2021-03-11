jQuery(document).ready(function ($) {

    window.onscroll = function () {
        if (window.pageYOffset > 140) {
            $("#header").addClass("active");
        } else {
            $("#header").removeClass("active");
        }
    };

    $(".popup-link").magnificPopup ({
        type: "image",
        gallery: {
            enabled: true,
            tPrev: "Anterior",
            tNext: "Próxima",
            tCounter: "%curr% de %total%",
        }
    })
});