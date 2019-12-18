if (window.pageId === "page-load.html") {
  var messageContainer = $('#message-container')
  
  document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
      messageContainer.text("The page has finished loading!")
    }
  }
}