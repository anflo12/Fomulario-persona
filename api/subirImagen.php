<?php
//Define your host here.
$HostName = "localhost";
 
//Define your database name here.
$DatabaseName = "id12461082_formpersona";
 
//Define your database username here.
$HostUser = "id12461082_andres1255";
 
//Define your database password here.
$HostPass = "123456789";
// Getting the received JSON into $Received_JSON variable.
$Received_JSON = file_get_contents('php://input');
 
// decoding the received JSON and store into $obj variable.
$obj = json_decode($Received_JSON,true);

$id = $obj['id'];
$image= $obj['imagen'];

$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
$datauser=array();


$CheckSQL = "SELECT * FROM `users_asp` where id_aspi='$id'";
$resultados = mysqli_query($con, $CheckSQL);

while ($registros = mysqli_fetch_array($resultados)) {
    $datauser[] = $registros;
}
$id_aspi= $datauser[0];
$Sql_Query = "insert users_image (id_aspi,image) values ('$id_aspi','$imagen')"; 
 
 if(mysqli_query($con,$Sql_Query)){
 
 // Show the success message.
 $MSG = 'Registro Exitoso' ;

 // Converting the message into JSON format.
 $json = json_encode($MSG);
 
 // Echo, Print the message on screen.
 echo $json ;
 
 }
 else{
 
 echo 'Vuelve a intentar ';

 }
mysqli_close($con);
echo json_encode($datauser);
