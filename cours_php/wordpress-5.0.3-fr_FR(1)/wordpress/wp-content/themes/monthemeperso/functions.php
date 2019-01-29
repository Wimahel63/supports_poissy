<?php   

add_action('widgets_init', 'monthemeperso_init_sidebar');// j'ajoute une action, ici un widget, suivi du nom du widget

function monthemeperso_init_sidebar(){
    register_sidebar(array(
        'name' =>__('haut-gauche', 'monthemeperso'),
        'id' =>'haut-gauche',
        'description' =>__('Region en haut a gauche', 'monthemeperso')
    ));
    register_sidebar(array(
        'name' =>__('haut-droite', 'monthemeperso'),
        'id' =>'haut-droite',
        'description' =>__('Region en haut a droite', 'monthemeperso')
    ));
    register_sidebar(array(
        'name' =>__('entete', 'monthemeperso'),
        'id' =>'entete',
        'description' =>__('Region entete', 'monthemeperso')
    ));
    register_sidebar(array(
        'name' =>__('bas-gauche', 'monthemeperso'),
        'id' =>'bas-gauche',
        'description' =>__('Region bas gauche', 'monthemeperso')
    ));
    register_sidebar(array(
        'name' =>__('bas-droite', 'monthemeperso'),
        'id' =>'bas-droite',
        'description' =>__('Region bas droite', 'monthemeperso')
    ));
    //ici j'initialise mon widget avec son contenu : son nom, son id, sa description
}

add_action('widgets_init', 'monthemeperso_init_menu');

function monthemeperso_init_menu(){
    register_nav_menu('primary', __('Primary Menu','monthemeperso'));
}




?>