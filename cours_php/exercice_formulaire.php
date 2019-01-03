<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Formulaire</title>
</head>
<body>
<!-- creer un formulaire de contact qui permet à l'utilisateur d'enregistrer ses contacts dans un fichier :

nom, prenom, adresse, cp, ville et e-mail.

!!!!!!!! Sécuriser votre code !!!!!!!!
!!!!!!!! la doc PHP sera votre meilleure amie !!!!!!!!!
!!!!!!!! Controler les saisies (chaine vide, balises etc.)!!!!!!!!!!!


Valeur de retour :

Nom : JAAGOUB
Prenom : Yassine
Adresse : mon adresse
CP : 78300
Ville : Poissy
E-mail : monemail@gmail.com -->

<form action="" method="post">
      <p><label>nom : <input type="text" name="nom"></label></p>
      <p><label>prenom : <input type="text" name="prenom"></label></p>
      <p><label>adresse : <input type="text" name="adresse"></label></p>
      <p><label>code postal : <input type="text" name="zipcode"></label></p>
      <p><label>ville : <input type="text" name="ville"></label></p>
      <p><label>email : <input type="email" name="email"></label></p>
      <input type="submit" value="valider">
</form>
<!--strpos($email, "@") pour s"assurer que l'adresse mail comporte bien un @-->
<?php  
$nom = (htmlspecialchars($_POST['nom']);
$prenom=(htmlspecialchars($_POST['prenom']);
$adresse=(htmlspecialchars($_POST['adresse']);
$code_postal=(htmlspecialchars($_POST['zipcode']);
$ville=(htmlspecialchars($_POST['ville']);
$email=$_POST['email'];
$mail=strpos($email,"@");

$content="";
if($_POST){
    if((empty($nom)) || (empty($prenom)) || (empty($adresse)) || (empty($adresse)) || (empty($code_postal)) || (empty($ville))||){
        echo "veuillez remplir le champ";
    }
}
// $mot_de_passe="";
// if($_POST){
//     if(htmlspecialchars($_POST['mdp'])!="lepoles"){
//         $mot_de_passe .=  "c'est pas bon";
//     }else{
//         $mot_de_passe .= "oki vous pouvez passer" . htmlspecialchars($_POST['pseudo']);
//     }
// }
  

?>


</body>
</html>