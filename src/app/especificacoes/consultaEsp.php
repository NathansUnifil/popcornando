<?php

    $conexaoEsp = new PDO("mysql:host=localhost;dbname=porcornando","root","");

    $obj = $conexaoEsp->query("select * from especificacoes");

    $dadosEsp = $obj->fetchAll(PDO::FETCH_ASSOC);

    $resultado = json_encode($dadosEsp);

    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");

    echo($resultado);

?>