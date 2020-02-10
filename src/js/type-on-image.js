if (window.pageId === 'type-on-image.html') {
  var image = $('#katalon-logo');
  var text = $('#text-on-image');

  image.on("click", (e) => {
    text.focus()
  });
}