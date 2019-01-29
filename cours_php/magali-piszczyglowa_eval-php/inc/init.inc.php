<?php    

try{

    $bdd = new PDO('mysql:host=localhost;dbname=immobilier;charset=utf8','root','');
} catch(Exception $e){
    die('Erreur : ' .$e->getMessage());
}

define("RACINE_LOGEMENT", "/supports_poissy/cours_php/magali-piszczyglowa_eval-php/");
//j'inclus mon fichier foncyions
require_once("fonctions.inc.php");


?>