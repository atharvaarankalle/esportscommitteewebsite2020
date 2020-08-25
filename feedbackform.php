<?php

$name_error = "";

if(empty($_POST["name"])) {
    $name_error = "Your name must be entered!";
} else {
    $user_name = $_POST["name"];
    echo "Your name is " .$user_name. "<br>";
}

if(empty($_POST["email"])) {
    $email_error = "Your email must be entered!";
} else {
    $user_email = $_POST["email"];
    echo "Your email address is " .$user_email;
}

?>