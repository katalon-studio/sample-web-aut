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