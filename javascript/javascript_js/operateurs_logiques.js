/* l'opérateur ET : && ou AND */

// si je cumule 2 conditions :
// => prenom === prenomLogin
// => age === ageLogin
// pour que les 2 correspondent pour être validés il faut les associer

if ((prenomlogin === prenom) && (ageLogin === age)) {
     /*----code----*/
     /* je ne rentre ici que si les 2 conditions sont vraies*/
}

/*if ((A) && (B)){...}
=> si A est FAUX et B est VRAI => FAUX
=> si A est VRAI et B est FAUX => FAUX
=> si A est FAUX et B est FAUX => FAUX
=> si A est VRAI et B est VRAI => VRAI*/

/* l'opérateur OU : || ou OR ( | pipe => alt gr + 6)*/

var utilisateurLog = true;
if(!utilisateurLog){
    //si l'utilisateur n'est pas loggé
}
// ce qui revient à écrire:
if (utilisateurLog == false){
    //si l'utilisateur n'est pas loggé
}