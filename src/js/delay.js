if (window.pageId === "delay.html") {
    $(function() {
        setTimeout(
            function() {
                $('#container').append('<div id="waitedForElement">Hello, World!</div>');
                $('#will-disappear').remove();
            },
            10000
        );
    });
}