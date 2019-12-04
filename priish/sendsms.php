<?php
$message=(string)$_REQUEST['otp'];
$mobile=$_REQUEST['phone'];
$json=json_encode(file_get_contents("http://api.msg91.com/api/sendotp.php?authkey=YOUR_API_KEY&mobile=".$mobile."&message=Your%20otp%20is%20".$message."&sender=PRIISH&otp=".$message));
if ($json["status"]==="success") {
    echo $json["msg"];
}else{
    echo $json["msg"];
}
?>
