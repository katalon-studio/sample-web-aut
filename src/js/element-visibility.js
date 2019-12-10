if (window.pageId === 'element-visibility.html') {
  var showElementButton = $('#show-element');
  var willShowUpImage = $('#will-show-up');
  var hideElementButton = $('#hide-element');
  var willBeHiddenImage = $('#will-be-hidden');

  showElementButton.on('click', (e) => {
    setTimeout(
      function() {
        willShowUpImage.show();
      },
      10000
    )
  });

  hideElementButton.on('click', (e) => {
    setTimeout(
      function() {
        willBeHiddenImage.hide();
      },
      10000
    )
  });
}