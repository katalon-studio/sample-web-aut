if (window.pageId === "keypress.html") {

    var keyInput = $("#key-input");
    var result = $("#result");

    keyInput.on("keydown", function(event) {
        if (event.which == 13) {
            event.preventDefault();
        }

        var msg = "Key pressed: " + event.key;
        result.text(msg);
    });
}