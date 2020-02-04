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



$CheckSQL = "SELECT * FROM `users_asp`";
$resultados = mysqli_query($con, $CheckSQL);

while ($registros = mysqli_fetch_array($resultados)) {
    $datauser[] = $registros;
}
mysqli_close($con);
echo json_encode($datauser);

