<?php

    $conexaoNeg = new PDO("mysql:host=localhost;dbname=porcornando","root","");

    $obj = $conexaoNeg->query("select * from recomendacoes where TipAnun=3");

    $dadosNeg = $obj->fetchAll(PDO::FETCH_ASSOC);

    $resultado = json_encode($dadosNeg);

    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");

    echo($resultado);

?>