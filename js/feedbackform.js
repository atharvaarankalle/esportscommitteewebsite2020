let formValidator = new Validator("feedbackForm");
formValidator.addValidation("name", "req", "Please provide your name");
formValidator.addValidation("email", "req", "Please provide your email");
formValidator.addValidation("email", "email", "Please enter a valid email address");