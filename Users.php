<?PHP
$hostname_localhost = "localhost";
$database_localhost = "id12429571_formpersona";
$username_localhost = "id12429571_andres1255";
$password_localhost = "123456789";
$datauser = array();

$conexion = mysqli_connect($hostname_localhost, $username_localhost, $password_localhost, $database_localhost);

  
        

        $consulta = "SELECT * FROM admin_users";
        $resultados = mysqli_query($conexion, $consulta);
           
        while ($registros = mysqli_fetch_array($resultados)) {
            $datauser[] = $registros;
        }
        mysqli_close($conexion);
        echo json_encode($datauser);