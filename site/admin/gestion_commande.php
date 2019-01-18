<?php  
require_once('../inc/init.inc.php');
require_once('../inc/haut.inc.php');
if(!internauteEstConnecteEtEstAdmin()) header("location:../connexion.php");

//l'accès à cette page est limité a l'admin
//afficher le détail des commandes passées, avec les details suivants: n° de commande(id_commande), date, montant,infos sur l'article commandé (id_produit), titre, photo, quantité demandée, n° du membre (id_membre), pseudo,adresse,ville, code_postal, etat de la commande, chiffre d'affaire 
//trier les commandes par date, etat de la commande, montant
?>
<div class="choix">
<a href="?action=tri_montant">Afficher par montant</a><br>
<a href="?action=tri_etat">Afficher par etat de livraison</a><br>
<a href="?action=tri_date">Afficher par date</a><br>
<a href="?action=tri_membre">Afficher par membre</a>
  </div>
  
 <div class="chiffre_affaire">
 <p>Chiffre d'affaire : <?php $chiffreAffaire=$bdd->query("SELECT SUM(montant) as total_chiffre_affaire FROM commande"); //je calcule le montant total des achats
 while ($total=$chiffreAffaire->fetch(PDO::FETCH_ASSOC)){
 echo $total['total_chiffre_affaire'];}//attention, il faut que je supprime les commandes des clients qui ne sont plus dans la bdd
 ?></p>
 <p>Nombre de commandes effectuées : <?php $nombreCommandes=$bdd->query("SELECT COUNT(quantite) as total_nombre_commande FROM details_commande ORDER BY id_details_commande"); //j'indique  le nb de commandes reçues. Attention cependant les commandes effacées sont incluses également, elles apparaissent dans la bdd mais ne sont pas affichées sur ma page gestion_commandes
 while ($totComm=$nombreCommandes->fetch(PDO::FETCH_ASSOC)){
 echo $totComm['total_nombre_commande'];}//attention, il faut que je supprime les commandes des clients qui ne sont plus dans la bdd
 ?></p>
 </div>

<?php
//en arrivant sur ma page, j'affiche directement mes commandes par date, sinon un message d'erreur s'affiche(variable commande indefinie). Je force donc l'affichage dès l'arrivee sur la page
$commande=$bdd->query("SELECT dc.id_commande, c.date_enregistrement, c.montant, c.etat, m.id_membre, m.nom, m.prenom, m.pseudo, m.adresse, m.ville, m.code_postal, p.photo, p.id_produit, dc.quantite, p.titre FROM produit p, membre m, details_commande dc, commande c 
WHERE p.id_produit=dc.id_produit 
AND m.id_membre=c.id_membre 
AND dc.id_commande=c.id_commande 
ORDER BY date_enregistrement DESC");
//recuperation des valeurs des commandes par membre (jointure tables commande et membre, triees par date, etat de livraison ou montant, puis je linke les tableaux entre eux en fonction des champs identiques. S'il n'y en a pas, je les connecte via une troisieme table où les données seraient concomitantes )
if(isset($_GET['action']) && $_GET['action'] == "tri_montant"){
    $commande=executeRequete("SELECT dc.id_commande, c.date_enregistrement, c.montant, c.etat, m.id_membre, m.nom, m.prenom, m.pseudo, m.adresse, m.ville, m.code_postal, p.photo, p.id_produit, dc.quantite, p.titre FROM produit p, membre m, details_commande dc, commande c 
    WHERE p.id_produit=dc.id_produit 
    AND m.id_membre=c.id_membre 
    AND dc.id_commande=c.id_commande 
    ORDER BY montant DESC");
    
} elseif(isset($_GET['action']) && $_GET['action'] == "tri_etat"){
    $commande=executeRequete("SELECT dc.id_commande, c.date_enregistrement, c.montant, c.etat, m.id_membre, m.nom, m.prenom, m.pseudo, m.adresse, m.ville, m.code_postal, p.photo, p.id_produit, dc.quantite, p.titre FROM produit p, membre m, details_commande dc, commande c 
    WHERE p.id_produit=dc.id_produit 
    AND m.id_membre=c.id_membre 
    AND dc.id_commande=c.id_commande 
    ORDER BY etat DESC");

} elseif(isset($_GET['action']) && $_GET['action'] == "tri_date"){
  $commande=executeRequete("SELECT dc.id_commande, c.date_enregistrement, c.montant, c.etat, m.id_membre, m.nom, m.prenom, m.pseudo, m.adresse, m.ville, m.code_postal, p.photo, p.id_produit, dc.quantite, p.titre FROM produit p, membre m, details_commande dc, commande c 
  WHERE p.id_produit=dc.id_produit 
  AND m.id_membre=c.id_membre 
  AND dc.id_commande=c.id_commande 
  ORDER BY date_enregistrement DESC");

} elseif(isset($_GET['action']) && $_GET['action'] == "tri_membre"){
  $commande=executeRequete("SELECT  dc.id_commande, c.date_enregistrement, c.montant, c.etat, m.id_membre, m.nom, m.prenom, m.pseudo, m.adresse, m.ville, m.code_postal, p.photo, p.id_produit, dc.quantite, p.titre FROM produit p, membre m, details_commande dc, commande c 
  WHERE p.id_produit=dc.id_produit 
  AND m.id_membre=c.id_membre 
  AND dc.id_commande=c.id_commande 
  ORDER BY id_membre ");
}
 
  while ($commandesPassees=$commande->fetch(PDO::FETCH_ASSOC)){//tant qu'il y a des concordances, recupere-les, puis je les appelles dans ma table pour les afficher

    ?>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Numero de commande</th>
        <th scope="col">date_enregistrement</th>
        <th scope="col">montant</th>
        <th scope="col">etat</th>
        <th scope="col">id_membre</th>
        <th scope="col">nom</th>
        <th scope="col">prenom</th>
        <th scope="col">pseudo</th>
        <th scope="col">adresse</th>
        <th scope="col">ville</th>
        <th scope="col">code_postal</th>
        <th scope="col">photo</th>
        <th scope="col">id_produit</th>
        <th scope="col">quantite</th>
        <th scope="col">titre</th>
      </tr>
    </thead>
    
    <tbody>
      <tr>
        <th scope="row"><?php echo $commandesPassees['id_commande'];//et affiche-les dans un tableau ?></th>
        <td><?php echo $commandesPassees['date_enregistrement']; ?></td>
        <td><?php echo $commandesPassees['montant']; ?></td>
        <td><?php echo $commandesPassees['etat']; ?></td>
        <td><?php echo $commandesPassees['id_membre']; ?></td>
        <td><?php echo $commandesPassees['nom']; ?></td>
        <td><?php echo $commandesPassees['prenom']; ?></td>
        <td><?php echo $commandesPassees['pseudo']; ?></td>
        <td><?php echo $commandesPassees['adresse']; ?></td>
        <td><?php echo $commandesPassees['ville']; ?></td>
        <td><?php echo $commandesPassees['code_postal']; ?></td>


        <td><img src="<?php echo $commandesPassees['photo'] ; ?>" alt="habits" width=90 height=90></td>
        <td><?php echo $commandesPassees['id_produit']; ?></td>
        <td><?php echo $commandesPassees['quantite']; ?></td>
        <td><?php echo $commandesPassees['titre']; ?></td>
        

         <td>
         <!--/!\code non valide: vide la colonne etat de la table commande?php if(isset($_POST['etatLivraison'])){
          $etatLivraison=$_POST['etatLivraison'];
          switch($etatLivraison){
            case 'en_cours':
            $change=executeRequete("UPDATE commande SET etat='en_cours' WHERE id_commande='$commandesPassees[id_commande]'" );
            break;
            case 'envoi':
            $change=executeRequete("UPDATE commande SET etat='envoye' WHERE id_commande='$commandesPassees[id_commande]'" );
            break;
            case 'livre':
            $change=executeRequete("UPDATE commande SET etat='livre' WHERE id_commande='$commandesPassees[id_commande]'" );
            break;
          }
        }?> -->
       <form method="post" action="">
        <select id="etatLivraison" name="etatLivraison">
        <option value="en_cours">En cours de traitement</option>
        <option value="envoi">Envoyé</option>
        <option value="livre">Livré</option>
       </select>
       <input type="submit" name="modifier" value="changer_etat">
       </form>
       </td>
      </tr>
    </tbody>
    </table>
   
<?php
  }



 require_once("../inc/bas.inc.php");
?>

