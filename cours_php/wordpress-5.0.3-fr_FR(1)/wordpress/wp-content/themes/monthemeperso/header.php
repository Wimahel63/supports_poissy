<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php bloginfo('name'); ?></title>
    <link rel="stylesheet" type="text/css" href="<?php bloginfo('template_directory') ?>/style.css">
    <link rel="stylesheet" type="text/css" href="<?php bloginfo('template_directory') ?>/css/bootstrap.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    
</head>

<body>

<!-- les fonctions utilisées en wordpress sont principalement des fonctions creees specifiquement pour wordpress -->
    <!-- language_attributes(); recupere la langue de wordpress
    bloginfo() recupere les donnees qui lui sont specifiées entre les parentheses : ex bloginfo('template_directory'); recupere les chemins voulus et les affiche  lorsqu'on verifie le code source avec control u --> 

    <!--?php body_class(); ?>  recupere toutes les class dispo pour notre site -->

    <!--?php echo "<pre>"; var_dump(get_defined_vars()); echo "</pre>"; ?>  recupere toutes les variables dispo dans mon wordpress-->

    <!--?php wp_head(); ?>   placé dans le head, nous affiche tous les elemnts ytilisés dans notre script. Il y a la même pour le footer : wp_footer(); Elles sont definies dans general-template.php -->

    <!--?php dynamic_sidebar('haut-gauche'); ?>-->

    <div class="container-fluid">
     <div class="row">
       <div class="col-md-6 haut-gauche">
        <?php dynamic_sidebar('haut-gauche'); ?>
       </div>

       <div class="col-md-6 haut-droite">
        <?php dynamic_sidebar('haut-droite'); ?>
       </div>
      </div>

       <nav class="navbar navbar-expand-lg navbar-light bg-light ma-navigation">
       <i class="fab fa-earlybirds"></i>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
      <?php wp_nav_menu(array('container_class'=>'menu-header','theme_location'=>'primary')); ?>
    
  </div>
</nav>

<div class="row">
    <div class="col-md-12 entete">
        <?php dynamic_sidebar('entete'); ?>
    </div>
</div>    
</div><!--fin container-fluid --> 
<div class="container">
    <section>