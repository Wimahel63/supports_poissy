 <?php 
require_once("inc/entete.inc.php");


$donnees=['formule','prix', 'img'];
var_dump($donnees);
print_r($donnees);
// if(!empty($_GET['formule'] && $_GET['prix'])){
//     $content .=$_GET['donnees'];
//     foreach($donnees as $key=$value)
// }     $content .= $value;

?>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  


<div class="container-fluid">
<div class="card">
<div class="card-header">
    Merci pour votre commande
  </div>
  <div class="card-body">
<img src="<?php echo $_GET['img'] ?>" class="card-img-left" alt="menu">
    <h5 class="card-title">Votre formule <?php echo $_GET['formule'] ?> arrive dans quelques instants....</h5>
    <p class="card-text">Un café gourmand vous est proposé pour terminer votre pause gourmande en douceur.</p>
    <p>- Votre facture sera de <?php echo $_GET['prix'] ?>
    <a href="atelier1.php" class="btn btn-primary">Choisir un autre menu</a>
  </div>
</div>
<p>Vous avez aimé? 
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="fas fa-star"></i>
<i class="far fa-star"></i>
</p>
<img src="consignes/pg.jpg" alt="pois gourmand">
</div>

</body>
</html>


<!-- // while($produit =$resultat->fetch(PDO::FETCH_ASSOC)){
//     $content .="<h2>" .$produit['titre'] ."</h2>";
//     $content .="<p> Categorie : " .$produit['categorie'] ."</p>";
//     $content .="<p> Taille :" .$produit['taille'] ."</p>";
//     $content .="<p> Couleur :" .$produit['couleur'] ."</p>";
//     $content .="<p> <img src=" .$produit['photo'] . width="100" height="100" "</p>";
//     $content .="<p> Description :" .$produit['description'] ."</p>";
//     $content .="<p>" .$produit['reference'] ."</p>";
//     $content .="<p><i>" .$produit['stock'] ."</i></p>";
//     $content .="<select>";
//     $quantite =$produit['stock'];
//     for($i=1; $i<=$quantite;$i++){
//     $content .="<option>" .$i ."</option>";
// }
//     $content .="</select>";
//     $content .="<button>Ajouter au panier</button>";
//     $content .='<a href="boutique.php?categorie='.$produit['categorie'].'">Retour au choix de '.$produit['categorie'].'</a>';
    
// } -->


  