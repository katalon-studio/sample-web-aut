if (window.pageId === "jquery-async.html") {
  var messageContainer = $('#message-container');
  messageContainer.text("Loading...");
  $.mockjax({
    url: 'www.example.com',
    responseText: 'This is async loaded text content',
    responseTime: 10000
  });
  $.ajax({
    url: 'www.example.com',
    success: function(result) {
      // delay to simulate lengthy content loading
      messageContainer.text("").html(result);
    }
  })
}