var path = window.location.pathname;
var parts = path.split('/');
var pageId;
while ((pageId = parts.pop()) === '/') {
    continue;
}
window.pageId = pageId;
console.log(window.pageId);

require('jquery');
require('jquery-validation');
require('jquery-mockjax')(jQuery, window);
require('bootstrap-datepicker');
require('../js/form.js');
require('../js/dragdrop.js');
require('../js/grid.js');
require('../js/js-dialog.js');
require('../js/file-upload.js');
require('../js/shadow-dom.js');
require('../js/keypress.js');
require('../js/open-window.js');
require('../js/delay.js');
require('../js/alert.js');
require('../js/click.js');
require('../js/confirm.js');
require('../js/hover.js');
require('../js/refresh.js');
require('../js/element-attribute-change.js');
require('../js/element-clickable.js');
require('../js/element-visibility.js');
require('../js/jquery-async.js');