if (window.pageId === 'image.html') {
  var image = $('#katalon-logo');
  var messageContainer = $('#message-container');
  messageContainer.hide();

  $(document).on("click", (e) => {
    messageContainer.text("The div is hovered!");
    messageContainer.show();
  })

  image.on("click", (e) => {
    messageContainer.text("The image is clicked!");
    messageContainer.show();
  });

  image.on("mouseout", (e) => {
    messageContainer.hide();
  })
}