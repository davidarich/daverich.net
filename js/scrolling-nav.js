// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");

        // This applies color changes to nav bar when the page scrolls
        // TODO: Cleanup to a single class
        $(".navbar-brand").css("color","#777");
        $(".navbar-text").css("color","#777");
        $(".navbar-default .navbar-nav > li > a").css("color","#777");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".navbar-brand").css("color","#ddd");
        $(".navbar-text").css("color","#ddd");
        $(".navbar-default .navbar-nav > li > a").css("color","#ddd");
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
        $("#intro").css("background-image","url("+$(this).attr("src")+")").fadeIn("slow", "swing");
    });

});
