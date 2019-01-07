<?php 

//realiser un espace de dialogue, avec création de bdd et de la table assignée.

/*rendu: (affichage des messages avec la date du message):

Pseudo:
Message:
Bouton envoyer.

*/

// session_start();
// $f = fopen("tchat.txt", "a+");


// if($_POST){
//     fwrite($f, $_POST['pseudo'] . " " . date('d/m/Y H:i:s') . " : ". $_POST['message'] . PHP_EOL);
// }

// echo "<fieldset>";
// $afficher_messages = file("tchat.txt");
// echo implode($afficher_messages, "<br>");
// echo "</fieldset>";
//fieldset est la zone où s'affichent les messages
//implode() est une fonction qui converti un tableau en chaine de caracteres

if($_POST){
    try {
        $bdd = new PDO('mysql:host=localhost;       dbname=dialogue;charset=utf8','root', '', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));// les :: representent un marqueur nominatif, et la ligne array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION) traque les erreurs et affiche les messages d'erreurs
    }catch (Exception $e){
        die('erreur : ' .$e->getMessage());

    }

        $query= $bdd->query("INSERT INTO membres(pseudo, date, message) VALUES ( :pseudo, NOW(), :message)");

        $query->execute(
            array(
                ':pseudo' => $_POST['pseudo'],
                ':message' => $_POST['message']
            ));  
            
        $query2 = $bdd->query("SELECT * FROM membres") ;
        

        while($reponses=$query2->fetch() ){
            $content .= $reponses['pseudo'] . $reponses['date'] . $reponses['message'];
        }

    }



?>

 <?php echo $content ?>   

<form action="" method="post">

<label>Pseudo : </label>
<input type="text" name="pseudo">

<label>message : </label>
<textarea name="message" rows="10" cols="30"></textarea>

<input type="submit" value="envoyer">


</form>  
