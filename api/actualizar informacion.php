
<?php

// Importing DBConfig.php file.
include 'DBConfig.php';

// Connecting to MySQL Database.
$con = mysqli_connect($HostName, $HostUser, $HostPass, $DatabaseName);

// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($json, true);

// Populate Student ID from JSON $obj array and store into $S_Name.
$S_ID = $obj['identificacion'];

// Populate Student name from JSON $obj array and store into $S_Name.
$S_Name = $obj['name'];

// Populate Student Class from JSON $obj array and store into $S_Class.
$S_edad = $obj['edad'];

// Populate Student Phone Number from JSON $obj array and store into $S_Phone_Number.
$sexo = $obj['sexo'];

// Populate Email from JSON $obj array and store into $S_Email.
$fecha = $obj['fecha'];
$correo = $obj['fecha'];
// Creating SQL query and insert the record into MySQL database table.
$Sql_Query = "UPDATE StudentDetailsTable SET identificacion= '$S_Name', name = '$S_Name', sexo = '$sexo', fecha = '$fecha' correo = '$correo' WHERE student_id = $S_ID";

if (mysqli_query($con, $Sql_Query)) {

    // If the record inserted successfully then show the message.
    $MSG = 'Record Successfully Inserted Into MySQL Database.';

    // Converting the message into JSON format.
    $json = json_encode($MSG);

    // Echo the message.
    echo $json;
} else {

    echo 'Try Again';
}
mysqli_close($con);
?>