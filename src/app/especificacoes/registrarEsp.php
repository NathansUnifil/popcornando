<?php

$conexaoEsp = new PDO("mysql:host=localhost;dbname=porcornando","root","");

$obj = $conexaoEsp ->prepare("INSERT INTO especificacoes (categoria, marca, anunciante) values (?, ?, ?)");

$cat = $_GET["cat"];
$marca = $_GET["marca"];
$anun = $_GET["anun"];

$obj ->execute([$cat, $marca, $anun]);


header("Content-Type: application/json");
header("Acess-Control-Allow-Origin: *");

?>