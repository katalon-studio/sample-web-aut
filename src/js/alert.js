if (window.pageId === 'alert.html') {
  var alertBtn = $('#alert');
  var alertDelayBtn = $('#alert-delay');

  alertBtn.on("click", (e) => {
    alert("This is an alert box.")
  });

  alertDelayBtn.on("click", (e) => {
    setTimeout(
      function() {
        alert("This is an alert box that will show up after 10 seconds.")
      },
      10000
    );
  })
}