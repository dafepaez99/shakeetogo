<?php

$archivo = "registros.csv";

$nombre = $_POST["nombre"];
$email = $_POST["email"];
$telefono = $_POST["telefono"];
$razon = $_POST["razon"];

$fecha = date("Y-m-d H:i:s");

// Si el archivo no existe, crea encabezados
if(!file_exists($archivo)){
    $fp = fopen($archivo,"w");
    fputcsv($fp,[
        "Fecha",
        "Nombre",
        "Email",
        "Telefono",
        "Razon"
    ]);
    fclose($fp);
}

$fp = fopen($archivo,"a");

fputcsv($fp,[
    $fecha,
    $nombre,
    $email,
    $telefono,
    $razon
]);

fclose($fp);

header("Location: contacto.html?ok=1");
exit();

?>