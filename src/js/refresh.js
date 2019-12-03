if (window.pageId === 'refresh.html') {
  var instructionDiv = $('#instruction');
  var messageContainer = $('#message-container');
  messageContainer.hide();

  // handle page refresh
  if (performance.navigation.type == 1) {
    instructionDiv.hide();
    messageContainer.text("You have refreshed the page!");
    messageContainer.show();
  }
}