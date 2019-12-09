if (window.pageId === 'element-attribute-change.html') {
  console.log("1");
  var changeColorButton = $('#change-color');
  var addImgSrcButton = $('#add-img-src');
  var removeImgSrcButton = $('#remove-img-src');
  var imgWithNoSource = $('#no-source-image');
  var imgWithSource = $('#image-with-source');

  changeColorButton.on('click', (e) => {
    setTimeout(
      function() {
        changeColorButton.removeClass('btn-primary').addClass('btn-success');
      },
      5000
    );
  });

  addImgSrcButton.on('click', (e) => {
    setTimeout(
      function() {
        imgWithNoSource.attr('src', "../image/katalon-logo.png");
      },
      5000
    );
  });

  removeImgSrcButton.on('click', (e) => {
    setTimeout(
      function() {
        imgWithSource.removeAttr('src');
      },
      5000
    );
  })
}