<?php
//get data from form
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$to = "joaocastro2002@gmail.com";
$subject = "Mail From Website";
$txt ="Name" = ". $name . "\r\n" . "Email" = ". $email . "\n\n" . "Message" = ". $message;
$headers =