<?php   

require_once("inc/init.inc.php");
require_once("inc/haut.inc.php");

$resultat=executeRequete("SELECT * FROM produit from produit");
 
while($produit =$resultat->fetch(PDO::FETCH_ASSOC)){
    $content .="<h2>" .$produit['titre'] ."</h2>";
    $content .="<p> Categorie : " .$produit['categorie'] ."</h2>";
    $content .="<p> Taille :" .$produit['taille'] ."</p>";
    $content .="<p> Couleur :" .$produit['couleur'] ."</p>";
    $content .="<p> <img src=" .$produit['photo'] . width="100" height="100" "</p>";
    $content .="<p> Description :" .$produit['description'] ."</p>";
    $content .="<p>" .$produit['reference'] ."</p>";
    $content .="<p><i>" .$produit['stock'] ."</i></p>";
    $content .="<select>";
    $quantite =$produit['stock'];
    for($i=1; $i<=$quantite;$i++){
    $content .="<option>" .$i ."</option>";
}
    $content .="</select>";
    $content .="<button>Ajouter au panier</button>";
    $content .='<a href="boutique.php?categorie='.$produit['categorie'].'">Retour au choix de '.$produit['categorie'].'</a>';
    
}

echo $content;
?>
<?php   
require_once("inc/bas.inc.php");
?>
