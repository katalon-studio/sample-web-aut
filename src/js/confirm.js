if (window.pageId === 'confirm.html') {
  var confirmBtn = $('#confirm');

  confirmBtn.on("click", (e) => {
    confirm("This is a confirm box")
  });
}