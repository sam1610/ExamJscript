<?php

define('DIR_WRITE', './trace/');
    
/// Calcul du nom du fichier de trace

$utilisation = DIR_WRITE . 'IP' . $_SERVER['REMOTE_ADDR'] . '.trace';
echo "<script> console.log(' here am i ' ); </script>";

/// si pas de Query-String,
/// c'est une demande de lecture du fichier puis destruction
if (!$_GET) {
    if (is_readable($utilisation)) {
        header('Content-Type: text/plain');
        readfile($utilisation);
	    unlink($utilisation);
    } else header('HTTP/1.1 204 No Content');
} else {
    /// Si Query-String présente, on enregistre ses valeurs dans le fichier
    if ($f = fopen($utilisation, 'a')) {
        fwrite($f, join(" ", $_GET) . "\n");
        fclose($f);
        header('HTTP/1.1 204 No Content');
    } else {
        header('HTTP/1.1 403 Forbidden');
        header('Content-Type: text/plain; charset=utf-8');
        echo "Fichier $utilisation inaccessible en écriture";
    }
}
?>
