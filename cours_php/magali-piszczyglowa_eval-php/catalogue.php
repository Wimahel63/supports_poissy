<?php 

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
$affichage="";
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Logements: catalogue</title>
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
        <a class="nav-link" href="logement.php">Enregistrer son logement </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="catalogue.php">Voir les logements disponibles</a>
      </li>
    </ul>
  </div>
</nav>
</header>
<?php   
    $affichage=$bdd->query("SELECT * FROM logement");//je recupere les donnees de ma bdd
     while ($logementsDispos=$affichage->fetch(PDO::FETCH_ASSOC)){//tant qu'il y a des concordances, recupere-les, puis je les appelles dans ma table pour les afficher
        
?>

<div class="container-fluid">
<table class="table"> 

  <thead>
    <tr>
      <th scope="col">Id_logement</th>
      <th scope="col">Titre</th>
      <th scope="col">adresse</th>
      <th scope="col">ville</th>
      <th scope="col">code postal</th>
      <th scope="col">surface</th>
      <th scope="col">prix</th>
      <th scope="col">photo</th>
      <th scope="col">type</th>
      <th scope="col">description</th>
    </tr>
  </thead>
 
  <tbody>
    <tr>
      <th scope="row"><?php echo $logementsDispos['id_logement'];?></th>
      <td><?php echo $logementsDispos['titre'];?></td>
      <td><?php echo $logementsDispos['adresse'];?></td>
      <td><?php echo $logementsDispos['ville'];?></td>
      <td><?php echo $logementsDispos['cp'];?></td>
      <td><?php echo $logementsDispos['surface'];?></td>
      <td><?php echo $logementsDispos['prix'];?></td>
      <td><img src="<?php echo  $logementsDispos['photo'] ; ?>" alt="maisons" width=90 height=90></td>
      <td><?php echo $logementsDispos['type'];?></td>
      <td><?php echo $logementsDispos['description'];?></td>
     
    </tr>
    
  </tbody>
</table>
  <?php } ?>
</div>


<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
</body>
</html>

