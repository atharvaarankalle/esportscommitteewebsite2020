/*let formValidator = new Validator("feedbackForm");
formValidator.addValidation("name", "req", "Please provide your name");
formValidator.addValidation("email", "req", "Please provide your email");
formValidator.addValidation("email", "email", "Please enter a valid email address");*/

function confirm() {
    Swal.fire({
        title: "Are you sure?",
        text: "Once submitted, you cannot change the details in the form!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Submit",
        cancelButtonText: "Cancel"
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                title: "Success",
                text: "Form Submitted",
                icon: "success"
            }).then((result) => {
                if (result.value) {
                    location.reload();
                }
            })
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
                "Cancelled",
                "Form has not been submitted",
                "error"
            )
        }
    })
}