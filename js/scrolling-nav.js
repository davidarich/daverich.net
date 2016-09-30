var $color_primary = "#191e2b";
$color_secondary = "#5bc0de";
$color_mono_primary = "#fff";
$color_mono_secondary = "#333";
$color_mono_tertiary = "#ccc";

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        // Collapsed
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".navbar-brand").css("color",$color_mono_secondary);
        $(".navbar-text").css("color",$color_mono_secondary);
        $(".navbar-default .navbar-nav > li > a").css("color",$color_mono_secondary);
        $(".navbar-default .navbar-nav>.active>a").css("color",$color_mono_primary);
        $(".navbar-default").css("background-color","rgba(255,255,255,255)");
    } else {
        // Not Collapsed
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-brand").css("color",$color_mono_tertiary);
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
        $("#intro").fadeIn("slow", "swing");
    });

    // Fancy Background Zoom on load
    // TODO: FIX - Right now this breaks the cover property intended for smaller devices.
    // Custom bezier for easing: http://cubic-bezier.com
    var $intro = $("#intro");
        $intro.velocity({"background-size" : "140%"}, 20000, [ 0.45, 0.50, 0.75, 0.75 ]);
    //$("#intro").css();

});



