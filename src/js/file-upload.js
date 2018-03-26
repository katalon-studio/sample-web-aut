if (window.pageId === "file-upload.html") {
    var upload = document.querySelector('#file-upload');
    var fileDetails = document.querySelector('#file-details');
    var content = '';

    upload.addEventListener("change", function() {
            if ('files' in upload) {
                var files = upload.files;
                for (var i = 0; i < files.length; i++) {
                    var file = files[i];
                    content += `<br><strong>${i + 1}. ${file.name}</strong> (${file.size} bytes) <br>`;
                }
                fileDetails.innerHTML = content;
        }   
    }, false);
}
