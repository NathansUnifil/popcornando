<?php

    $conexaoBrin = new PDO("mysql:host=localhost;dbname=porcornando","root","");

    $obj = $conexaoBrin->query("select * from recomendacoes where TipAnun=1");

    $dadosBrin = $obj->fetchAll(PDO::FETCH_ASSOC);

    $resultado = json_encode($dadosBrin);

    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");

    echo($resultado);

?>