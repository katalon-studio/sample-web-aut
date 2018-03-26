if (window.pageId === 'form.html') {
    var form = $("#infoForm");

    form.submit((e) => {
        e.preventDefault();
        if (form.valid()) {
            $("#submit-msg").removeClass("submit-msg-hidden");
        } else {
            $("#submit-msg").addClass("submit-msg-hidden");
        }
    });

    form.validate({
        rules: {
            firstName: "required",
            lastName: "required",
            gender: "required",
            dob: {
                required: true,
                date: true
            },
            address: "required",
            email: {
                required: true,
                email: true
            },
            password: "required",
            company: "required",
            role: "required"
        },
        errorPlacement: (error, element) => {
            if ( element.is(":radio") ) {
                error.appendTo( element.parents('.radio-container') );
            }
            else {
                error.insertAfter( element );
            }
        }
    });

    $('#dob').datepicker({
        format: "mm/dd/yyyy"
    });
}