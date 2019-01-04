<?php 

//une session est un systeme mis en oeuvre dans le code php permettant de conserver sur le serveur, dans un fichier temporaire, des informations

//avantages: les données sont enregistrées dans un fichier sur le serveur disponible et consultable par toutes les pages durant la navigation de l'internaute.
// ex dans un site e-commerce, nous n'enregistrons pas les produits ajoutés au panier dans une base de données tant que l'achat n'est pas fait car cela surchargerait la base de données

//les sessions php permettent de conserver des infos sur un internaute côté serveur. Sans ce mecanisme on ne pourrait pas connecter un internaute à notre site web et maintenir sa connexion durant la navigation de page en page

//Il faut d'abord creer un fichier de session,puis lire un fichier de session existant. Pour cela, la méthode utilisée est la méthode predefinie session-start()  (cree ou lit un fichier s'il existe deja)

//creation d'un fichier de session
session_start();

//pour resumer, session_start() permet de creer un fichier de session (ou de l'ouvrir s'il existe deja) mais aussi de creer un cookie (ou s'il existe deja de le relier à un fichier de session deja existant).
//il faut toujours utiliser session_start() et le placer au plus haut dans la page.
$_SESSION['pseudo']="kirikou";
$_SESSION['mdp']="supercool";

echo "<pre>";
print_r($_SESSION) ; 
echo "</pre>";

unset($_SESSION['mdp']);

echo "<pre>";
print_r($_SESSION) ; 
echo "</pre>";

session_destroy();

echo "<pre>";
print_r($_SESSION) ; 
echo "</pre>";


//Pour vider une partie de session on utilise la fonction unset()
//pour supprimer  on utilise la fonction session_destroy();
?>
