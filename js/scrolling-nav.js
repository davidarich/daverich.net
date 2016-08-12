// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
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
