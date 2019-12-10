if (window.pageId === 'element-clickable.html') {
  var willBeDisabledButton = $('#will-be-disabled');
  var willBeEnabledButton = $('#will-be-enabled');
  willBeDisabledButton.prop('disabled', false);
  willBeEnabledButton.prop('disabled', true);

  setTimeout(
    function() {
      willBeDisabledButton.prop('disabled', true);
      willBeEnabledButton.prop('disabled', false);
    },
    10000
  )
}