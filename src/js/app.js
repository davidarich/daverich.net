////////////////////////////////////
// Global Variables
////////////////////////////////////

var $color_primary = "#191e2b";
$color_secondary = "#40C4FF";
$color_mono_primary = "#fff";
$color_mono_secondary = "#333";
$color_mono_tertiary = "#ccc";


////////////////////////////////////
// Intro Background
////////////////////////////////////

var bgimage = new Image();
var widthChanging = true;

// Optimizes page load speed by loading the background image last & loading appropriate size
$( document ).ready(function() {

    // Check the screen width to determine loaded background
    if ($(window).width() < 600) {
        // Mobile
        bgimage.src = "images/pgh_bg_dark_mobile_optimized.jpg";
    }
    else {
        // Everything Else
        bgimage.src = "images/pgh_bg_dark_optimized.jpg";
    }

    $(bgimage).load(function(){
        $("#intro").css("background-image","url("+$(this).attr("src")+")");
        $("#intro").addClass("animate");
    });
    widthChanging = false;
});

// Reload background image
$(window).on('resize', function() {
    if (!widthChanging) {

        widthChanging = true;
        var newbg = '';
        // Check the screen width to determine loaded background
        if ($(window).width() < 600) {
            // Mobile
            newbg = "images/pgh_bg_dark_mobile_optimized.jpg";
        } else {
            // Everything Else
            newbg = "images/pgh_bg_dark_optimized.jpg";
        }

        // Load the background image if it's different
        if (bgimage.src != newbg){
            bgimage.src = newbg;
            $(bgimage).load(function(){
                $("#intro").css("background-image","url("+$(this).attr("src")+")");
            });
        }
    }
    widthChanging = false;
});


////////////////////////////////////
// Navigation Bar & Scroll Effect
////////////////////////////////////

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
        $(".navbar-brand").fadeIn(500);
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


////////////////////////////////////
// Controls
////////////////////////////////////

// Experience Blocks
$("#exp-more").click(function() {

    if ($("#exp_adi").css("display") == "none") {
        $("#exp-more").html('Less information');
    } else {
        $("#exp-more").html('More information');
    }

    // Expand the control
    $("#exp_expedient").slideToggle("fast");
    $("#exp_staples").slideToggle("fast");
    $("#exp_adi").slideToggle("fast");

});


// Project Cards Modals
var projectDialog = $('.project-dialog').each(function(){
    // Select the button tied to the selected dialog
    // This works because the dialog button id attributes are the same as the
    // dialog, but prefixed with "btn-'
    var projectDialogButton = $('#btn-' + this.id);
    var projectDialogCloseButton = $('#btnclose-' + this.id);


    if (! document.querySelector('#' + this.id).showModal) {
        dialogPolyfill.registerDialog(this);
    }
    // Add handler to the button for showing the dialog
    projectDialogButton.on('click', function() {
        // Select the dialog since scope is limited to this anonymous function
        var dialogId = this.id.substring(this.id.toString().indexOf('-') + 1);
        // Show dialog
        document.querySelector('#' + dialogId).showModal();
    });

    // Add handler to the close button for closing the dialog
    projectDialogCloseButton.on('click', function() {
        // Select the dialog since scope is limited to this anonymous function
        var dialogId = this.id.substring(this.id.toString().indexOf('-') + 1);
        // Close dialog
        document.querySelector('#' + dialogId).close();
    });
});