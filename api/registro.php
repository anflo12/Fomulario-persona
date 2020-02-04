<?PHP
//Define your host here.
$HostName = "localhost";
 
//Define your database name here.
$DatabaseName = "id12429571_formpersona";
 
//Define your database username here.
$HostUser = "id12429571_andres1255";
 
//Define your database password here.
$HostPass = "123456789";


$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 // Getting the received JSON into $Received_JSON variable.
 $Received_JSON = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($Received_JSON,true);

 $identificacion = $obj['identificacion'];
 
 // Populate User name from JSON $obj array and store into $user_name variable.
 $user_name = $obj['name'];
 
 // Populate User email from JSON $obj array and store into $user_email variable.
 $sexo = $obj['sexo'];
 

 $fecha = $obj['fecha'];
 
 $time = strtotime( $fecha );
 $myDate = date( 'Y-m-d', $time );
 
 $correo = $obj['correo'];
 
 $telefono = $obj['telefono'];
 
 $cargo = $obj['cargo'];
 
 $competencias = $obj['competencias'];

$ano=date("Y");
$año= explode('-', $fecha);
$año_nac = (int) $año[0];
$año_act = (int) $ano;
$edadp = $año_act-$año_nac;
 
 //Checking User entered Email is already exist or not in MySQL database using SQL query.
 $CheckSQL = "SELECT * FROM `users_asp` WHERE name='$user_name'";
 
 // Executing SQL Query.
 $check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));
 
if(isset($check)){
 
 $Duplicate_email = 'Ya estas registrado';
 
 // Converting the message into JSON format.
 $Duplicate_email_Json = json_encode($Duplicate_email);
 
 // Echo, Printing the message on screen.
 echo $Duplicate_email_Json ; 
 
 }
 else{


 $Sql_Query = "insert into users_asp (identificacion,name,edad,sexo,fecha,correo,telefono,cargo,competencias) values ('$identificacion','$user_name','$edadp','$sexo','$myDate','$correo','$telefono','$cargo','$competencias')";
 
 
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
 }
 mysqli_close($con);
?>