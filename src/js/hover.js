if (window.pageId === 'hover.html') {
  var hoverableDiv = $('#hoverable');
  var messageContainer = $('#message-container');
  messageContainer.hide();

  hoverableDiv.on("mouseover", (e) => {
      messageContainer.text("The div is hovered!");
      messageContainer.show();
  });

  hoverableDiv.on("mouseout", (e) => {
    messageContainer.hide();
  })
}