if (window.pageId === 'image.html') {
  var image = $('#katalon-logo');
  var messageContainer = $('#message-container');
  messageContainer.hide();

  $(document).click(function(e) {
    console.log("clicked");
  });
  image.on("click", (e) => {
    messageContainer.text("The image is clicked!");
    messageContainer.show();
  });

  image.on("mouseout", (e) => {
    messageContainer.hide();
  })
}