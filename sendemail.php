<?php 
if(isset($_POST['submit'])){
    $to = "jacksonmeade@outlook.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $subject = "Form submission";
    $subject2 = "| Robinson for SBP";
    $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
//    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    header('Location: index.html');
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>