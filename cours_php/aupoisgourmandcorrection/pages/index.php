<?php
require_once "head.php";

$produits = array(

    "menu1" => array(), 
    "menu2" => array(), 
    "menu3" => array(), 
    "menu4" => array() 

);

$produits['menu1']['titre'] = "Formule Rome";
$produits['menu1']['description'] = "Tomates buratina. Rizotte aux asperges. Panna cotta";
$produits['menu1']['image'] = "../img/rome.jpg";
$produits['menu1']['url'] = "?commande=menu1";

$produits['menu2']['titre'] = "Formule New-York";
$produits['menu2']['description'] = "César salade. Cheese burger. Cheesecake";
$produits['menu2']['image'] = "../img/nyork.jpg";
$produits['menu2']['url'] = "?commande=menu2";

$produits['menu3']['titre'] = "Formule Delhi";
$produits['menu3']['description'] = "Poppadoms. Agneau byriani. Lassi mangue";
$produits['menu3']['image'] = "../img/delhi.jpg";
$produits['menu3']['url'] = "?commande=menu3";

$produits['menu4']['titre'] = "Formule Rome";
$produits['menu4']['description'] = "Nems aux crevettes. Poulet saté. Perles de coco";
$produits['menu4']['image'] = "../img/hanoi.jpg";
$produits['menu4']['url'] = "?commande=menu4";

echo "<div class='col-8 m-auto' style=\"background:url('../img/bg.jpg')\">";
echo '
    <header class=\'my-5 ml-3 pt-5\'>
        <h1><i class="fas fa-kiwi-bird" style="color: #6c9986"></i> au pois gourmand</h1>
    </header>
';
if(!isset($_GET['commande'])) {
    echo "<div class='row justify-content-between d-flex'>";
    foreach($produits as $key => $value) {
        if($produits[$key] == "description") {
            str_replace(".", "<br>", $value);
        }
        echo '
            <div class="card p-0 mx-5 my-5 d-flex col-5" style="width: 18rem;">
                <img src="'.$produits[$key]['image'].'" class="card-img-top" height="250px" alt="...">
                <div class="card-body">
                    <h5 class="card-title">'.$produits[$key]['titre'].'</h5>
                    <p class="card-text">'.str_replace(".", "<br>", $produits[$key]['description']).'</p>
                    <a href="'.$produits[$key]['url'].'" class="btn btn-primary col-12">Choisir</a>
                </div>
            </div>
        ';
    }
    echo "
    <script>
        let buttons = document.querySelectorAll(\".card a\");
        let palette = [\"info\", \"danger\", \"warning\", \"primary\"];

        for(b in buttons) {
            let cls = 'col-12 btn btn-' + palette[b];
            buttons[b].setAttribute(\"class\", cls);
        }
    </script>
    ";
} else {
    echo '
    <div class="alert alert-success" role="alert">
        Merci pour votre commande!
    </div>  
    <div class="d-flex p-3 w-100 bg-light">
        <div class="col-3">    
            <img width="100%" src="'.$produits[$_GET['commande']]['image'].'">
        </div>
        <div class="col-9">
            <h5 class="card-title">Votre formule '.$produits[$_GET['commande']]['titre'].' arrive dans quelques instants... <i class="fas fa-kiwi-bird"></i></h5>
            <p class="card-text">'.$produits[$_GET['commande']]['titre'].'</p>
            <a href="index.php" class="btn btn-success col-12">Choisir un autre menu</a>
        </div>
    </div>
    ';
}
echo "</div>";
echo $produits[$_GET['commande']]['image'];
var_dump($produits);