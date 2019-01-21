<?php  

//afficher les informations du membre à travers les infos enregistrées dans le fichier session, attention: si l'utilisateur n'est pas connecté, le rediriger vers la page connexion

require_once("inc/init.inc.php");
require_once("inc/haut.inc.php");

if(!internauteEstConnecte()) header('location:connexion.php');

?>

<div class="card border-info mb-3" style="max-width: 18rem;">
  <div class="card-header"><?php echo $_SESSION['membre']['pseudo']?>
  <img src="<?php echo $avatar_dossier['avatar']?>" width=90 height=90><br>
  </div>
  <div class="card-body text-dark">
    <h5 class="card-title"><?php echo $_SESSION['membre']['nom']?></h5>
    <p class="card-text"><?php echo $_SESSION['membre']['prenom']?></p>
    <p class="card-text"><?php echo $_SESSION['membre']['email']?></p>
    <p class="card-text"><?php echo $_SESSION['membre']['ville']?></p>
    <p class="card-text"><?php echo $_SESSION['membre']['code_postal']?></p>
    <p class="card-text"><?php echo $_SESSION['membre']['adresse']?></p>
  </div>
</div>
<a href="membres.php?action=modifier&id_membre=<?= $_SESSION['membre']['id_membre']?>&amp;pseudo=<?=$_SESSION['membre']['pseudo']?>">Modifier mon profil</a><br>
<a href="?action=supprimer&id_membre=<?= $_SESSION['membre']['id_membre']?>">Supprimer mon profil</a><br>

<?php 
if(isset($_GET['action']) && $_GET['action']=="supprimer"){
  executeRequete("DELETE FROM membre WHERE id_membre= '$_SESSION[membre][id_membre]'");
}
?>


<!--ajout avatar-->
<form method="post" action="" enctype="multipart/form-data">
<label for="avatar">Ajouter un avatar</label>
<input type="hidden" name="MAX_FILE_SIZE" value="50000"><!--valeur max en octet-->
 <input type="file" name="avatar">
 <input type="submit" name="valider" value="valider">
 <br><br>

 <!--zone correspondance-->
<p>Laissez nous un message</p>
<textarea name="message" cols="60" rows="10"></textarea>
<input type="submit" name="poster" value="Poster">
</form>
<?php 
//postez un message pour signifier que la commande est bien reçue, par ex.avec ce message de confirmation, je peux modifier le statut de ma livraison
$message="";
if(!empty($_POST['message'])){
   $message .= "votre message a bien ete poste";
}


//gestion avatar
var_dump($_FILES);
debug($_FILES);
if(!empty($_FILES['avatar']['name'])){
    $nom_avatar = $_FILES['avatar']['name'];
$avatar_bdd = RACINE_SITE . "photo/$nom_avatar";
$avatar_dossier = $_SERVER['DOCUMENT_ROOT']. RACINE_SITE . "photo/$nom_avatar";
         copy($_FILES['avatar']['tmp_name'], $avatar_dossier);
     }



require_once("inc/bas.inc.php"); ?>

