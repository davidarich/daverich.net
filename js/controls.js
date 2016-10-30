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
    $("#exp_expedient").slideToggle("fast");

});

$("#exp_staples_btn").click(function() {

    if ($("#exp_staples").css("display") == "none") {
        $("#exp_staples_btn").html('<span class="glyphicon glyphicon-menu-up"></span>&nbsp;&nbsp;Less');
    } else {
        $("#exp_staples_btn").html('<span class="glyphicon glyphicon-menu-down"></span>&nbsp;&nbsp;More');
    }

    // Expand the control
    $("#exp_staples").slideToggle("fast");
});

$("#exp_adi_btn").click(function() {

    if ($("#exp_adi").css("display") == "none") {
        $("#exp_adi_btn").html('<span class="glyphicon glyphicon-menu-up"></span>&nbsp;&nbsp;Less');
    } else {
        $("#exp_adi_btn").html('<span class="glyphicon glyphicon-menu-down"></span>&nbsp;&nbsp;More');
    }

    // Expand the control
    $("#exp_adi").slideToggle("fast");
});


// Project Cards

// Modals
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
        var dialogId = this.id.substring(this.id.indexOf('-') + 1);
        // Show dialog
        document.querySelector('#' + dialogId).showModal();
    });

    // Add handler to the close button for closing the dialog
    projectDialogCloseButton.on('click', function() {
        // Select the dialog since scope is limited to this anonymous function
        var dialogId = this.id.substring(this.id.indexOf('-') + 1);
        // Close dialog
        document.querySelector('#' + dialogId).close();
    });
});