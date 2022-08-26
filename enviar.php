<?php
$name = $_POST['name'];
$mail = $_POST['mail'];
$message = $_POST['message'];

$header = 'from: ' .$mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Enviado por: " . $name . " \r\n";
$message .= "Su mail: " . $mail . " \r\n";
$message .= "Mensage: " . $_POST['message'] . " \r\n";
$message .= "Enviado el: " . date('d/m/Y' , time());

$para = 'francoegr21@gmail.com';
$asunto = 'Asunto del mensaje';

mail($para, $asunto, utf8_decode($message), $header);

header("location:index.html")
?>