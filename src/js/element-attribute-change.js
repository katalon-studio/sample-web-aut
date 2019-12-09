if (window.pageId === 'element-attribute-change.html') {
  console.log("1");
  var changeColorButton = $('#change-color');
  var addColorButton = $('#add-color');
  var removeColorButton = $('#remove-color');

  changeColorButton.on('click', (e) => {
    setTimeout(
      function() {
        console.log("2");
        changeColorButton.removeClass('btn-primary').addClass('btn-success');
      },
      5000
    );
  });

  addColorButton.on('click', (e) => {
    setTimeout(
      function() {
        addColorButton.attr('class', 'btn btn-primary');
      },
      5000
    );
  });

  removeColorButton.on('click', (e) => {
    setTimeout(
      function() {
        removeColorButton.removeAttr('class');
      },
      5000
    );
  })
}