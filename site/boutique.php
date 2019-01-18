
<?php
//afficher les produits,les titres, les stocks, les references des articles
require_once("inc/init.inc.php");
require_once("inc/haut.inc.php");

//je recupere mes categories
$habit=executeRequete("SELECT DISTINCT categorie from produit");

$content .='<div class="categories">';
$content .='<ul>';

while($affichage=$habit->fetch(PDO::FETCH_ASSOC)) { 
    $content .='<li><a href="?categorie='.$affichage['categorie'].'">'. $affichage['categorie']. '</a></li>';//j'affiche mes categories disponibles 
}
$content .='</ul>';
$content .='</div>';

//affichage des produits
$content .='<div class="produits">';
if(isset($_GET['categorie'])){
    $donnees=executeRequete("SELECT id_produit, reference, titre, photo, prix FROM produit WHERE categorie='$_GET[categorie]'");

    while($produit=$donnees->fetch(PDO::FETCH_ASSOC)){
   
$content .='<div class="product">';
$content .="<h2>" .$produit['titre'] ."</h2>"; 
$content .='<a href="fiche_produit.php?id_produit=' .$produit['id_produit'].'"><img src="'.$produit['photo'].'"width="130" height="100"></a>';
$content .="<p>" .$produit['prix']. "€</p>";
$content .="<p>REF:" .$produit['reference']. "</p>";
$content .='<a href="fiche_produit.php?id_produit=' .$produit['id_produit'].'">Voir la fiche</a>';
$content .="</div>";


    }
}
?>
<!--exercice:effectuer un moteur de recherche par mots-cle avec suggestion de saisie
//effectuer une zone de recherche permettant de trier par tranche de prix


 // <label for="prix">prix : </label>';
// <select id="prix" name="prix">';
// $prix=executeRequete("SELECT * FROM produit WHERE prix BETWEEN 0 AND 20")
// if(isset($_POST['prix'])) 

 input: pour chercher avec des termes particuliers: SELECT * FROM produit WHERE ... LIKE '%'. Je me cree un input, avec une requete qui recupere des donnees particulieres en partant de l'initiale tapée par exemple-->

<form method="post" action="">
 <label for="recherche">Rechercher un article </label>
<input type="text" name="keywords">
 <input type="submit" value="rechercher">
</form>
<?php 
//essai:
// if(isset($_POST['keywords'])){
//  $keywords=executeRequete("SELECT  titre, description  FROM produit WHERE titre OR description LIKE '$_POST[keywords]%'");

// while($recuperationProduit=$keywords->fetch(PDO::FETCH_ASSOC)) { 
//     $content .=$recuperationProduit['keywords'];//j'affiche mes categories disponibles 
// }
// }
 if($_POST){
     $keywords=executeRequete("SELECT titre, description FROM produit WHERE titre, description LIKE %$_POST[$value]%");
     while($value=$keywords->fetch(PDO::FETCH_ASSOC)){
     foreach($_POST as $key=>$value){
         if(!empty($value)){
             echo $key;
         }
     }
 }
}
?>

<?php
 echo $content;
require_once("inc/bas.inc.php");
?>