<?php
//Define your host here.
$HostName = "localhost";
 
//Define your database name here.
$DatabaseName = "id12429571_formpersona";
 
//Define your database username here.
$HostUser = "id12429571_andres1255";
 
//Define your database password here.
$HostPass = "123456789";


$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 
 // Populate Student ID from JSON $obj array and store into $S_ID.
 $ID = $obj['id'];
 
 // Creating SQL query and Updating the current record into MySQL database table.
 $Sql_Query = "DELETE FROM users_asp WHERE id_aspi = '$ID'" ;
 
 
 if(mysqli_query($con,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'Record Deleted Successfully.' ;
 
// Converting the message into JSON format.
$json = json_encode($MSG);
 
// Echo the message.
 echo $json ;
 
 }
 else{
 
 echo 'Try Again';
 
 }
 mysqli_close($con);
?>