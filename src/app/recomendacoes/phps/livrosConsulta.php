<?php

    $conexaoLiv = new PDO("mysql:host=localhost;dbname=porcornando","root","");

    $obj = $conexaoLiv->query("select * from recomendacoes where TipAnun=2");

    $dadosLiv = $obj->fetchAll(PDO::FETCH_ASSOC);

    $resultado = json_encode($dadosLiv);

    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");

    echo($resultado);

?>