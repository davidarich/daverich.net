// This file is for JS used for interacting with control elements


// Experience Blocks
// TODO: make a single, reusable event handler
$("#exp_expedient_btn").click(function(){

    if ($("#exp_expedient").css("display") == "none") {
        $("#exp_expedient_btn").html('<span class="glyphicon glyphicon-menu-up"></span>&nbsp;&nbsp;Less');
    } else {
        $("#exp_expedient_btn").html('<span class="glyphicon glyphicon-menu-down"></span>&nbsp;&nbsp;More');
    }

    // Expand the control
    $("#exp_expedient").slideToggle("slow");

});

$("#exp_staples_btn").click(function() {

    if ($("#exp_staples").css("display") == "none") {
        $("#exp_staples_btn").html('<span class="glyphicon glyphicon-menu-up"></span>&nbsp;&nbsp;Less');
    } else {
        $("#exp_staples_btn").html('<span class="glyphicon glyphicon-menu-down"></span>&nbsp;&nbsp;More');
    }

    // Expand the control
    $("#exp_staples").slideToggle("slow");
});

$("#exp_adi_btn").click(function() {

    if ($("#exp_adi").css("display") == "none") {
        $("#exp_adi_btn").html('<span class="glyphicon glyphicon-menu-up"></span>&nbsp;&nbsp;Less');
    } else {
        $("#exp_adi_btn").html('<span class="glyphicon glyphicon-menu-down"></span>&nbsp;&nbsp;More');
    }

    // Expand the control
    $("#exp_adi").slideToggle("slow");
});