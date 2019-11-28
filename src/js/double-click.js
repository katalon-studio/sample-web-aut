if (window.pageId === 'double-click.html') {
  var dblclickBtn = $('#dblclick');
  var messageContainer = $('#message-container');
  messageContainer.hide();

  dblclickBtn.on("dblclick", (e) => {
      messageContainer.removeClass();
      messageContainer.text("You have double clicked!");
      messageContainer.addClass("alert alert-info");
      messageContainer.show();
  });
}