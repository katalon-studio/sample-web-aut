$(function() {
    setTimeout(
        function() {
            $('#container').append('<div id="waitedForElement">Hello, World!</div>');
        },
        10000
    );
});