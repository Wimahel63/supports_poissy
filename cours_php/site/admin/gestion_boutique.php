<?php 

 require_once('../inc/init.inc.php'); 
 require_once('../inc/haut.inc.php');
 
 if(!internauteEstConnecteEtEstAdmin()) header("location:../connexion.php");//je bloque l'accès à tous les utilisateurs qui ne sont pas admin en les redirigeant vers la page connexion


 //j'enregistre mes produits dans ma bdd et je gere les photos 
 if($_POST){
    //  debug($_POST);
     $photo_bdd="";
     if(!empty($_FILES['photo']['name'])){//si $_FILES n'est pas vide alors:
        //  debug($_FILES);
         $nom_photo = $_POST['reference'] . '_' . $_FILES['photo']['name'];
         $photo_bdd = RACINE_SITE . "photo/$nom_photo";//j'enregistre le chemin du dossier contenant les photos dans cette variable $photo_bdd
         $photo_dossier = $_SERVER['DOCUMENT_ROOT']. RACINE_SITE . "photo/$nom_photo";
         copy($_FILES['photo']['tmp_name'], $photo_dossier);
     }

     foreach($_POST as $key=>$value){
         $_POST[$key] = htmlspecialchars(addslashes($value));//je securise mes valeurs
     }

     executeRequete("INSERT INTO produit (reference, categorie, titre, description, couleur, taille, public, photo, prix, stock) VALUES ('$_POST[reference]', '$_POST[categorie]', '$_POST[titre]', '$_POST[description]', '$_POST[couleur]', '$_POST[taille]', '$_POST[public]', '$photo_bdd', '$_POST[prix]', '$_POST[stock]')");

     $content .='<div class="alert alert-success" role="alert">Félicitations votre produit a bien été ajouté ! </div>';
 }
//$_FILES permet de recuperer les infos d'un fichier
     $content .='<a href="?action=affichage">Afficher le produit</a>';
     $content .='<a href="?action=ajout">Afficher le produit</a>';

     if(isset($_GET['action']) && $_GET['action'] == "affichage"){
         $resultat =executeRequete("SELECT * FROM produit");

         $content .="<h2>Affichage des produits</h2>";
         $content .="Nombre de produit(s) dans la boutique" .$resultat->rowCount();
         $content .='<table class="table"><thead><tr>';

         for($i = 0; $i <$resultat->columnCount(); $i++){
             $colonne =$resultat->getColumnMeta($i);
             $content .='<th scope="col">' . $colonne['name'] . '</th>';//name correspond aux champs de la table produit
         }//je recupere les colonnes

         $content .='<th scope="col">Modification</th>';
         $content .='<th scope="col">Suppression</th>';
         $content .='</thead></tr>';


         $content .='<tbody>';
         while($ligne =$resultat->fetch(PDO::FETCH_ASSOC)){//je parcours chaque ligne de mon tableau avec fetch et en ayant le nom des index avec fetch_assoc
             $content .='<tbody><tr>';
             foreach($ligne as $key => $value) {
                 if($key == "photo"){
                     $content .= '<td><img src="' .$value . '"width="70" height="70"></td>';
                 }
                 else {
                     $content .='<td>' . $value . '</td>';
                 }
             }

             $content .= '<td><a href="?action=modification&id_produit=' .$ligne['id_produit'] . '">Modification</a></td>';
             $content .='<td><a href="?action=suppression&id_produit=' .$ligne['id_produit'] . '" onClick="return(confirm("Etes-vous certain ?"))">Suppression</a></td>';
         }
     }
?>


<form method="post" action="" enctype="multipart/form-data">
  <div class="form-group">
    <label for="reference">Référence produit</label>
    <input type="text" class="form-control" id="reference du produit" placeholder="reference" name="reference">
  </div>

  <div class="form-group">
  <label for="categorie">Catégorie</label>
    <input type="text" class="form-control" id="categorie du produit" placeholder="categorie" name="categorie">
  </div>

  <div class="form-group">
  <label for="titre">Titre</label>
    <input type="text" class="form-control" id="titre" placeholder="titre du produit" name="titre">
  </div>

  <div class="form-group">
  <label for="description">Description</label>
    <input type="text" class="form-control" id="description" placeholder="description du produit" name="description">
  </div>

  <div class="form-group">
  <label for="couleur">Couleur</label>
    <input type="text" class="form-control" id="couleur" placeholder="couleur du produit" name="couleur">
  </div>

  <div class="form-group">
    <label for="taille">Taille</label>
    <select class="form-control" id="taille" name="taille">
      <option value="s">S</option>
      <option value="m">M</option>
      <option value="l">L</option>
      <option value="xl">XL</option>
    </select>
  </div>

  <div class="form-group">
    <label for="public">Public :</label><br>
    <input type="radio" name="public" id="public" value="m">Homme<br>
    <input type="radio" name="public" id="public" value="f">Femme<br>
    <input type="radio" name="public" id="public" value="mixte">Mixte<br>
  </div>

  <div class="form-group">
    <label for="photo">Photos</label>
    <input type="file" name="photo" id="photo">
  </div> 

  <div class="form-group">
    <label for="prix">Prix</label>
    <input type="text" name="prix" id="prix" placeholder="prix du produit">
  </div>  

  <div class="form-group">
    <label for="stock">Stock</label>
    <input type="stock" name="stock" id="stock" placeholder="stock">
  </div>  
    <div class="form-group">
    <button type="submit" class="btn btn-primary">Enregistrer</button> 
</form>
<?php  echo $content; ?>
<?php require_once('../inc/bas.inc.php'); ?>