var parse = require('url-parse');

if (window.pageId === "open-window.html") {
    $(function() {
        $('#open-window').on('click', function() {
            var title = $('#window-title').val();
            if (title && title.trim().length > 0) {
                window.open('open-window.html?title=' + title, '_blank');
            }
        });
    });
    
    var url = parse(window.location.href, true);
    $('title').text(url.query.title);
}