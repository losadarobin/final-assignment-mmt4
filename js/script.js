$(document).ready(function () {
    var switchDark = $('.switch-logo');
    var allesSwitch = $('body,nav,#logo-blauw,#logo-wit,.switch-icon1,.switch-icon2,li a,h2,h4,h5,.kader-main,.video-js,.contact button,.ui-accordion-header,.acco-dicht-dark,.acco-dicht,.ui-accordion-header,h3,.ui-accordion-header-active,#popup,video')

    $(function () {
        $("#accordion").accordion({
            animate: 600,
            heightStyle: "content" //hoever de balk openschuift, content bepaalt hoe hoog
        });
    });

    $("video").each(function () {
        var player = videojs(this);

        // play en pauze knoppen
        $(this).parents(".kader-video").find("#play").click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                player.pause();
            } else {
                $(this).addClass('active');
                player.play();
            }
        });

        // rewind knop
        $(this).parents(".kader-video").find("#rewind").click(function () {
            player.currentTime(player.currentTime() - 10);
        });

        // vink knop
        $(this).parents(".kader-video").find(".vinkje1").click(function () {
            $('.vink1').css({ 'display': 'inline-block' });
        });

        $(this).parents(".kader-video").find(".vinkje2").click(function () {
            $('.vink2').css({ 'display': 'inline-block' });
        });

        $(this).parents(".kader-video").find(".vinkje3").click(function () {
            $('.vink3').css({ 'display': 'inline-block' });
        });

        $(this).parents(".kader-video").find(".vinkje4").click(function () {
            $('.vink4').css({ 'display': 'inline-block' });
        });

        $(this).parents(".kader-video").find(".vinkje5").click(function () {
            $('.vink5').css({ 'display': 'inline-block' });
        });

        // modal
        $(this).parents(".kader-video").find(".button-vinkje").click(function () {    
            // $('#popup,#popup-blok').css({ 'display': 'block' });
            $('#popup,#popup-blok').fadeIn(1500);

        });
    });

    $('#close').click(function () {
        event.preventDefault();
        $('#popup,#popup-blok').fadeOut(1500);
    });

    // dark modus 
    switchDark.click(function () {
        if (switchDark.hasClass("active")) {
            switchDark.removeClass("active");
            allesSwitch.addClass('dark');
            console.log(this);
        } else {
            switchDark.addClass("active");
            allesSwitch.removeClass('dark');
        }
    });
});
