if (window.pageId === 'js-dialog.html') {
    var promptBtn = $('#prompt');
    var messageContainer = $('#message-container');
    messageContainer.hide();

    promptBtn.on("click", (e) => {
        var person = prompt("Please enter your name");
        var message = '';
        
        
        if (person !== null) {
            messageContainer.removeClass();
            if (person.trim().length === 0) {
                message = "You haven't entered your name";
                messageContainer.text(message);
                messageContainer.addClass("alert alert-warning");
            } else {
                message = "Hello " + person + "!";
                messageContainer.text(message);
                messageContainer.addClass("alert alert-info");
            }
            messageContainer.show();
        } 
    });
}
