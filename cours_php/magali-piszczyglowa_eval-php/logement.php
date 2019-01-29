<?php   
//require_once('../inc/init.inc.php');j'inclus mon fichier init qui cree le lien a ma bdd

//je me connecte a ma base de donnees immobilier, et je capte les eventuelles erreurs
try{

    $bdd = new PDO('mysql:host=localhost;dbname=immobilier;charset=utf8','root','');
} catch(Exception $e){
    die('Erreur : ' .$e->getMessage());
}

//fonction pour indiquer la requete a executer
function executeRequete($req){
    global $bdd;

    $result = $bdd->query($req);
    if(!$result){
        die('Erreur sur la requete sql.<br>Message : ' . $bdd->error() . '<br>Code : ' . $req);
    }

    return $result;
}

define("RACINE_LOGEMENT", "/supports_poissy/cours_php/magali-piszczyglowa_eval-php/");
$ecri="";
$photo_bdd="";
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Logements</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    
</head>
<body>
<header>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Mon immobilier.com</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Enregistrer son logement </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="catalogue.php">Voir les logements disponibles</a>
      </li>
    </ul>
  </div>
</nav>
</header>
<div class="container-fluid">
<form method="post" action="" enctype="multipart/form-data">
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputTitre4">Titre</label>
      <input type="text" class="form-control" id="inputTitre4" placeholder="Titre" name="titre">
    </div>
    <div class="form-group col-md-6">
      <label for="inputAdresse4">Adresse</label>
      <input type="text" class="form-control" id="inputAdresse4" placeholder="1234 Malo-les-bains" name="adresse">
    </div>
  </div>
  <div class="form-group">
    <label for="inputVille">Ville</label>
    <input type="text" class="form-control" id="inputVille" placeholder="Ville" name="ville">
  </div>
  <div class="form-group col-md-2">
      <label for="inputZip">Code postal</label>
      <input type="text" class="form-control" id="inputZip" name="cp">
    </div>
  <div class="form-group">
    <label for="inputAddress2">Surface</label>
    <input type="text" class="form-control" id="inputSurface2" placeholder="xm²" name="surface">
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputPrix">Prix</label>
      <input type="text" class="form-control" id="inputPrix" name="prix">
    </div>
    <div class="form-group col-md-4">
      <label for="inputPhoto">Photo</label>
      <input type="hidden" name="MAX_FILE_SIZE" value="80000"><!--je precise la taille max de ma photo, avec des valeurs en octet-->
      <input type="file" class="form-control" id="inputPhoto" name="photo">
     
    </div>
    </div>
    <div class="form-group col-md-4">
      <label for="inputType">Type</label>
      <input type="radio" name="type" value="location" checked>Location
      <input type="radio" name="type" value="vente" checked>Vente
    </div>
    <div class="form-group col-md-6">
      <label for="inputDescription">Description</label>
      <textarea class="form-control" id="inputDescription" name="description"></textarea>
    </div>
  
  <button type="submit" class="btn btn-primary">Enregistrer</button>
</form>
<footer>
</footer>
</div><!--fin container-->






<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
</body>
</html>

<?php  
echo $ecri;
if($_POST){
    // $zip=preg_match('#^[0-9]#', $_POST['cp']);
    // if(!$zip || (strlen($_POST['cp']) !==5)){
    //     $ecri .= '<div class="alert alert-danger" role="alert"> Le code postal doit contenir 5 chiffres </div>';
    // }
    // if (empty($_POST['titre'])|| (empty($_POST['adresse'])) || (empty($_POST['ville'])) ||(empty($_POST['cp'])) ||  (empty($_POST['surface'])) ||  (empty($_POST['prix'])) ||  (!isset($_POST['type']))) {
    //     $ecri.= 'veuillez remplir les champs vides';
    // }
//  }else{
    if(!empty($_FILES['photos']['name'])){//si $_FILES n'est pas vide alors:
        //  debug($_FILES);
         $nom_photo = $_POST['id_logement'] . '_' . $_FILES['photos']['name'];//on modifie le nom de la photo lorsque qu'on la charge
         $photo_bdd = RACINE_LOGEMENT . "photos/$nom_photo";//j'enregistre le chemin du dossier contenant les photos dans cette variable $photo_bdd
         $photo_dossier = $_SERVER['DOCUMENT_ROOT']. RACINE_LOGEMENT . "photos/$nom_photo";
         copy($_FILES['photos']['tmp_name'], $photo_dossier);
     }
    foreach($_POST as $key=>$value){
        $_POST[$key] = htmlspecialchars(addslashes($value));//je securise mes valeurs
    }
    $logement=executeRequete("INSERT INTO logement (titre, adresse, ville, cp, surface, prix, photo, type, description) VALUES ('$_POST[titre]', '$_POST[adresse]', '$_POST[ville]', '$_POST[cp]', '$_POST[surface]', '$_POST[prix]','$_POST[photo]', '$_POST[type]', '$_POST[description]') ");
}


//gestion photos
// $photo=basename($_FILES['photo']['name']);

?>







