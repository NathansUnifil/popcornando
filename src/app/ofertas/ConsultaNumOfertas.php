<?php

    $conexaoOf = new PDO("mysql:host=localhost;dbname=porcornando","root","");

    $obj = $conexaoOf->query("select NumAnun, NomeAnun, PreAnun from ofertas");

    $dados = $obj->fetchAll(PDO::FETCH_ASSOC);

    $resultado = json_encode($dados);

    header("Content-Type: application/json");
    header("Access-Control-Allow-Origin: *");

    echo($resultado);

?>