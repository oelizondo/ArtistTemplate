<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$message =$_POST['message'];
	$from='From: ';
	$to = 'oscarmarcelo95@gmail.com';
	$subject = 'Interested'
	$body = "From: $name \n E-mail: $mail\n Message: $message";

	if($_POST['submit'])
	{
		if(mail($to, $subject, $body, $form))
		{
			echo "Your message has been sent!";
		}
	}
?>