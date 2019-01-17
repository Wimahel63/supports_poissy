<?php  
require_once('../inc/init.inc.php');
require_once('../inc/haut.inc.php');

if(!internauteEstConnecteEtEstAdmin()) header("location:../connexion.php");
//dans cette page ajouter la possibilite à l'administrateur de pouvoir supprimer un membre inscrit sur le site. lui donner aussi la possibilité d'ajouter d'autres comptes "administrateur".

$membres=$bdd->query("SELECT id_membre, pseudo,nom, prenom, statut FROM membre");
while ($membreInscrit=$membres->fetch(PDO::FETCH_ASSOC)){
  ?>

<table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">pseudo</th>
      <th scope="col">nom</th>
      <th scope="col">prenom</th>
      <th scope="col">statut</th>
      <th scope="col">Modifier le statut</th>
      <th scope="col">Supprimer le compte</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><?php echo $membreInscrit['id_membre']; ?></th>
      <td><?php echo $membreInscrit['pseudo']; ?></td>
      <td><?php echo $membreInscrit['nom']; ?></td>
      <td><?php echo $membreInscrit['prenom']; ?></td>
      <td><?php echo $membreInscrit['statut']; ?></td>
      <td><a href="?action=modification&id_membre=<?= $membreInscrit['id_membre'];?>">Modifier le statut</a></td>
      <td><a href="?action=suppression&id_membre=<?= $membreInscrit['id_membre'];?>">Supprimer le compte</a></td>
    </tr>
  </tbody>
</table>
<?php
}
// $membres->closeCursor();



   if(isset($_GET['action']) && $_GET['action']=="modification"){
      
        executeRequete("UPDATE membre SET statut=1 WHERE id_membre='$_GET[id_membre]'");
        
   }
  // header("location:gestion_membre.php");
// var_dump($statut_a_modifier);

   if(isset($_GET['action']) && $_GET['action']=="suppression"){
    $suppression=executeRequete("SELECT * FROM membre, commande WHERE id_membre=$_GET[id_membre]");
     $membre_a_supprimer=$suppression->fetch(PDO::FETCH_ASSOC);
      if(!empty( $membre_a_supprimer['id_membre'])){
      executeRequete("DELETE FROM membre, commande WHERE id_membre=$_GET[id_membre]");
      }
 }
//  header("location:gestion_membre.php");
 require_once('../inc/bas.inc.php');
?>
