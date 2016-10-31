var $color_primary = "#191e2b";
$color_secondary = "#40C4FF";
$color_mono_primary = "#fff";
$color_mono_secondary = "#333";
$color_mono_tertiary = "#ccc";

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        // Collapsed
        $(".navbar-brand").clearQueue(); // Prevent queued fade in animation from occurring at the wrong time
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-brand").css("color",$color_mono_secondary);
        $(".navbar-text").css("color",$color_mono_secondary);
        $(".navbar-default .navbar-nav > li > a").css("color",$color_mono_secondary);
        $(".navbar-default").css("background-color","rgba(255,255,255,255)");
        $(".navbar-brand").fadeIn(1200);
    } else {
        // Not Collapsed
        $(".navbar-brand").clearQueue(); // Prevent queued fade in animation from occurring at the wrong time

        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-brand").css("display","none");
        $(".navbar-text").css("color",$color_mono_tertiary);
        $(".navbar-default .navbar-nav > li > a").css("color",$color_mono_tertiary);
        $(".navbar-default").css("background-color","rgba(255,255,255,0)");

    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Optimizes page load speed by loading the background image last
$( document ).ready(function() {
    var bgimage = new Image();
    bgimage.src="images/pgh_bg_dark_optimized.jpg";

    $(bgimage).load(function(){
        $("#intro").css("background-image","url("+$(this).attr("src")+")");
    });

});



