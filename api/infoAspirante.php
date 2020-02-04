<?php
//Define your host here.
$HostName = "localhost";
 
//Define your database name here.
$DatabaseName = "id12429571_formpersona";
 
//Define your database username here.
$HostUser = "id12429571_andres1255";
 
//Define your database password here.
$HostPass = "123456789";
// Getting the received JSON into $Received_JSON variable.
$Received_JSON = file_get_contents('php://input');
 
// decoding the received JSON and store into $obj variable.
$obj = json_decode($Received_JSON,true);

$id = $obj['id_aspi'];

$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
$datauser=array();


$CheckSQL = "SELECT * FROM `users_asp` where id_aspi='$id'";
$resultados = mysqli_query($con, $CheckSQL);

while ($registros = mysqli_fetch_array($resultados)) {
    $datauser[] = $registros;
}
mysqli_close($con);
echo json_encode($datauser);
