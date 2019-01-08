<?php   

require_once("inc/init.inc.php");
require_once("inc/haut.inc.php");


// if($_POST){
//    if($_POST['pseudo'] && $_POST['mdp'] != )
// }
?>

<div class="card" style="width: 18rem;">
  
  <div class="card-body">
    <h5 class="card-title">Connexion</h5>

    <form method="post" action="">
      <div class="form-group">
       <label for="exampleInputPseudo1">Pseudo </label>
       <input type="text" class="form-control" id="exampleInputPseudo1" aria-describedby="pseudoHelp" placeholder="Entrer pseudo">
      </div>
      <div class="form-group">
       <label for="exampleInputPassword1">Password</label>
       <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="mdp">
      </div>
      <div class="form-group form-check">
    
       <button type="submit" class="btn btn-primary" >Se connecter</button>
      </div>
    </form>
  </div>
</div>
<?php require_once("inc/bas.inc.php");  ?>
