// This file is for JS used for interacting with control elements


// Experience Blocks
$("#exp_expedient_btn").click(function() {
    var visibility = $("#exp_expedient").css("visibility");

    if (visibility == "hidden") {
        $("#exp_expedient").css("visibility","visible");
    } else {
        $("#exp_expedient").css("visibility","hidden");
    }
});