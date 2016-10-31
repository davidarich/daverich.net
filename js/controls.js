// This file is for JS used for interacting with control elements

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