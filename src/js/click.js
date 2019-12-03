if (window.pageId === 'click.html') {
  var clickBtn = $('#click');
  var messageContainer = $('#message-container');
  messageContainer.hide();

  clickBtn.on("click", (e) => {
      messageContainer.text("You have clicked the button!");
      messageContainer.show();
  });

  clickBtn.on("dblclick", (e) => {
    messageContainer.text("You have double-clicked the button!");
    messageContainer.show();
  });

  clickBtn.on("mousedown", (e) => {
    if (event.which && event.which == 3) {
      messageContainer.text("You have right clicked the button!");
      messageContainer.show();
    }
  })
}