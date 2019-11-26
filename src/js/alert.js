if (window.pageId === 'alert.html') {
  var alertBtn = $('#alert');

  alertBtn.on("click", (e) => {
    alert("This is an alert box")
  });
}