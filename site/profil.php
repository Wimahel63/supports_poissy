<?php  

//afficher les informations du membre à travers les infos enregistrées dans le fichier session, attention: si l'utilisateur n'est pas connecté, le rediriger vers la page connexion

require_once("inc/init.inc.php");
require_once("inc/haut.inc.php");

if(!internauteEstConnecte()) header('location:connexion.php');

?>

<div class="card border-info mb-3" style="max-width: 18rem;">
  <div class="card-header"><?php echo $_SESSION['membre']['pseudo']?></div>
  <div class="card-body text-dark">
    <h5 class="card-title"><?php echo $_SESSION['membre']['nom']?></h5>
    <p class="card-text"><?php echo $_SESSION['membre']['prenom']?></p>
    <p class="card-text"><?php echo $_SESSION['membre']['email']?></p>
    <p class="card-text"><?php echo $_SESSION['membre']['ville']?></p>
    <p class="card-text"><?php echo $_SESSION['membre']['code_postal']?></p>
    <p class="card-text"><?php echo $_SESSION['membre']['adresse']?></p>
  </div>
</div>
<a href="?action=modifier&id_membre=<?= $_SESSION['membre']['id_membre']?>">Modifier mon profil</a><br>
<a href="?action=supprimer&id_membre=<?= $_SESSION['membre']['id_membre']?>">Supprimer mon profil</a><br>

<?php 
// if(isset($_GET['action'] && $_GET['action']=="supprimer")){
//   executeRequete("DELETE FROM membre WHERE id_membre= '$_SESSION[membre][id_membre]'");
// }


// if(isset($_GET['action'] && $_GET['action']=="modifier")){?>
<div class="card border-info mb-3" style="max-width: 18rem;">
 <form method="post" action="">

  <div class="card-header">
 <label for="pseudo">Nouveau pseudo</label>
 <input type="text" name="newPseudo" ></div>

 <div class="card-body text-dark">
    <h5 class="card-title">
 <label for="nom">Nouveau nom</label>
 <input type="text" name="newNom" >
 
 <label for="prenom">Nouveau prenom</label>
 <input type="text" name="newPrenom">
 <label for="email">Nouvel email</label>
 <input type="email" name="newEmail" >
 <label for="ville">Nouvelle ville</label>
 <input type="text" name="newVille" >
 <label for="newZip">Nouveau code postal</label>
 <input type="text" name="newZip" >
 <label for="adresse">Nouvelle adresse</label>
 <input type="text" name="newAdresse" >
 <label for="newPassword">Nouveau mot de passe</label>
 <input type="password" name="newPassword" >
 <input type="submit" name="changer" value="changer">
</form>
</div>
  <?php

  if(isset($_POST['']))
  // executeRequete("UPDATE membre SET pseudo='$_POST["newPseudo"]', nom='$_POST["newName"]', prenom='$_POST["newPrenom"]', email='$_POST["newEmail"]', ville='$_POST["newVille"]', code_postal='$_POST["newZip"]', adresse='$_POST["newAdresse"]',  mdp='$_POST["newPassword"]'  WHERE  id_membre= '$_SESSION[membre][id_membre]'");
//}?> 



<form method="post" action="">
<p>Laissez nous un message</p>
<textarea name="message" clos="60" rows="10"></textarea>
<input type="submit" name="poster" value="Poster">
</form>
<?php 
//postez un message pour signifier que la commande est bien reçue, par ex.avec ce message de confirmation, je peux modifier le statut de ma livraison
$message="";
if(!empty($_POST['message'])){
   $message .= "votre message a bien ete poste";
}
require_once("inc/bas.inc.php"); ?>


<!-- if($_POST){
    debug($_POST);
    $verif_caractere= preg_match('#^[a-zA-Z0-9._]+$#', $_POST['newPseudo']);//le pattern prend 2 param: les caracteres autorisés dans la valeur:( tout ce qui est entre les # est accepté), et la variable qui reçoit lesdits caracteres, ici $_POST['newPseudo']
    if(!$verif_caractere || (strlen($_POST['newPseudo']) < 1 || strlen($_POST['newPseudo']) > 20)){//!verif_caractere renvoie false, (strlen($_post...)) renvoie true, or il attend que les deux soient true, du coup il n'execute pas la condition si l'operateur est &&. on met donc ||
        $content .= '<div class="alert alert-danger" role="alert"> Le pseudo doit contenir entre 1 et 20 caracteres. <br> Caracteres acceptés: lettres a-z, A-Z, chiffres 0-9</div>';
    } else {
        $membre = executeRequete("SELECT * FROM membre WHERE pseudo = '$_POST[newPseudo]'");
        if($membre->rowCount() > 0){//rowcount() compte le nb de lignes , si le nb est sup a 0, alors affiche :
            $content .= '<div class="alert alert-danger" role="alert">Pseudo indisponible, veuillez en choisir un autre.</div>';
        } else {
            foreach($_POST as $key => $value){
                if($key === 'mdp'){
                   $_POST['mdp'] = password_hash($value, PASSWORD_DEFAULT);
                   echo $_POST['mdp'];
                }
                $_POST[$key] = htmlspecialchars(addslashes($value));
            }

             executeRequete("UPDATE membre SET pseudo='$_POST["newPseudo"]', nom='$_POST["newName"]', prenom='$_POST["newPrenom"]', email='$_POST["newEmail"]', ville='$_POST["newVille"]', code_postal='$_POST["newZip"]', adresse='$_POST["newAdresse"]',  mdp='$_POST["newPassword"]'  WHERE  id_membre= '$_SESSION[membre][id_membre]'");

            $content .='<div class="alert alert-success" role="alert">Felicitations vous êtes bien inscrit ! <a href="connexion.php">Cliquez ici pour vous connecter</a> </div>';   
            }
    }
}
?> -->