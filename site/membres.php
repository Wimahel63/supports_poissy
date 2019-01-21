<?php 
require_once("inc/init.inc.php");
require_once("inc/haut.inc.php");
if(!internauteEstConnecte()) header('location:connexion.php');



if($_POST){
    debug($_POST);
    // $verif_caractere= preg_match('#^[a-zA-Z0-9._]+$#', $_POST['newPseudo']);//le pattern prend 2 param: les caracteres autorisés dans la valeur:( tout ce qui est entre les # est accepté), et la variable qui reçoit lesdits caracteres, ici $_POST['pseudo']
    // if(!$verif_caractere || (strlen($_POST['newPseudo']) < 1 || strlen($_POST['newPseudo']) > 20)){//!verif_caractere renvoie false, (strlen($_post...)) renvoie true, or il attent que les deux soient true, du coup il n'execute pas la condition si l'operateur est &&. on met donc ||
    //     $content .= '<div class="alert alert-danger" role="alert"> Le pseudo doit contenir entre 1 et 20 caracteres. <br> Caracteres acceptés: lettres a-z, A-Z, chiffres 0-9</div>';
    // } else {
    //     $membre = executeRequete("SELECT * FROM membre WHERE pseudo = '$_POST[newPseudo]'");
    //     if($membre->rowCount() > 0){//rowcount() compte le nb de lignes , si le nb est sup a 0, alors affiche :
    //         $content .= '<div class="alert alert-danger" role="alert">Pseudo indisponible, veuillez en choisir un autre.</div>';
    //     } else {
    //         foreach($_POST as $key => $value){
    //             if($key === 'newPassword'){
    //                 $_POST['newPassword'] = password_hash($value, PASSWORD_DEFAULT);
    //                 echo $_POST['newPassword'];
    //             }
    //             $_POST[$key] = htmlspecialchars(addslashes($value));
    //         }
    
            executeRequete("UPDATE membre SET pseudo='$_POST[newPseudo]', nom='$_POST[newNom]', prenom='$_POST[newPrenom]', email='$_POST[newEmail]', ville='$_POST[newVille]', code_postal='$_POST[newZip]', adresse='$_POST[newAdresse]',  mdp=password_hash('$_POST[newPassword]')  WHERE  id_membre= '$_GET[id_membre]'");

            $hash=$_POST['newPassword']
            if(password)
                $content .='<div class="alert alert-success" role="alert">Felicitations votre profil a bien été modifié ! <a href="connexion.php">Cliquez ici pour vous connecter</a> </div>';   
                }
    //     }
    // }

?>


<div class="card border-info mb-3" style="max-width: 18rem;">
 <form method="post" action="" enctype="multipart/form-data">

  <div class="card-header">
  
 <label for="pseudo">Nouveau pseudo</label>
 <input type="text" name="newPseudo" placeholder="<?php echo $_SESSION['membre']['pseudo']?>" ></div>

 <div class="card-body text-dark">
    <h5 class="card-title">
 <label for="nom">Nouveau nom</label>
 <input type="text" name="newNom" placeholder="<?php echo $_SESSION['membre']['nom']?>">
 
 <label for="prenom">Nouveau prenom</label>
 <input type="text" name="newPrenom" placeholder="<?php echo $_SESSION['membre']['prenom']?>">
 <label for="email">Nouvel email</label>
 <input type="email" name="newEmail" placeholder="<?php echo $_SESSION['membre']['email']?>" >
 <label for="ville">Nouvelle ville</label>
 <input type="text" name="newVille" placeholder="<?php echo $_SESSION['membre']['ville']?>">
 <label for="newZip">Nouveau code postal</label>
 <input type="text" name="newZip" placeholder="<?php echo $_SESSION['membre']['code_postal']?>">
 <label for="adresse">Nouvelle adresse</label>
 <input type="text" name="newAdresse" placeholder="<?php echo $_SESSION['membre']['adresse']?>" >
 <label for="newPassword">Nouveau mot de passe</label>
 <input type="password" name="newPassword" >
 <input type="submit" name="changer" value="changer">
</form>
</div>

<?php
echo $content;

require_once("inc/bas.inc.php"); ?>