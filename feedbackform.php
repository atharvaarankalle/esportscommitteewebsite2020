<?php 
$errors = "";

$email = 'stu18005@ashs.school.nz';

if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['comments'])) {

    $errors .="\n Error: All Fields are Required.";
}

$name = $_POST['name'];

$email_address = $_POST['email'];

$comments = $_POST['comments'];

if(!preg_match(
    "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", $email_address)) {

        $errors .= "\n Error: Invalid email address";
    }

if( empty($errors)) {
    $to = $email;

    $email_subject = "Feedback from: $name";
    $email_body = "Esports Committee 2020 Feedback". "Details:\n Name: $name \n". "Email: $email_address\n Feedback: \n $comments";
    $headers = "From: $email\n";
    $headers .= "Reply-To: $email_address";

    header('Location: contact-form.html');
}







?>