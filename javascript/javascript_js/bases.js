//syntaxe de base

//commentaires sur une seule ligne

/* commentaires en plusieurs lignes */

// --1 : declarer une variable en js:

var prenom;

// --2 : affecter une valeur à une variable:
prenom = "Mag";
//var prenom = "Mag";

// --3 : une instruction se termine toujours par un point virgule, aussi il est possible d'écrire plusieurs instructions 
//sur une seule ligne :
 //inst_1;
 //inst_2; inst_3;

// --4 : afficher une boîte de dialogues :
//deux façons possibles: 
//alert(" super tu es sur mon site");
//window.alert("super tu es sur mon site");

// --5 : afficher dans la console (ici, la valeur de ma variable prenom):
//console.log(prenom);

// --6 : afficher dans la page web:
//document.write("à la pause vous aurez des haribos pik");

// --7 : demander à l'utilisateur une valeur (2 façons):
// window.prompt("Question : on est quel jour ?" , "jour de la semaine");
//prompt("Question : on est quel jour ?" , "jour de la semaine");

//--et pour manipuler cette valeur, je n'oublie pas de stocker:
//var jour=prompt("Question: quel jour sommes-nous ?" , "jour de la semaine");
//console.log(jour);

// --8 : attention le js est sensible à la casse
//mavariable =/= maVariable =/= ma_variable
                //  camel case      snake case

// --9 : une variable ne peut pas commencer par un chiffre, ne doit contenir que des caractères alphanumériques et ne peut pas être un mot réservé (= mots natifs du langage js tels que var, for ...)  

// --10 : une variable peut être déclarée de façon explicite :
// var fruit;
// var fruit=" fraise";
// ou implicite :
// var fruit_2 ="coco";
// haribo = "tagada";

/*-------------TYPES DE VARIABLES ------------*/

// --1 : chaîne de caractères (STRING)
var vacances = "2018";
var destination = "Murol";

//  --2 : un nombre entier (integer ou int)
var annee = 2018;

// --3 : un nombre décimal (float)
var nombre_a_virgule = 5.35;

// --4 : un booléen (boolean = Vrai / faux = TRUE / FALSE)
var unbooleen = false; // --true;

// --5 : les constantes :

/* la déclaration const permet de créer une constante accessible uniquement en lecture. Contrairement à une variable sa valeur ne peut pas être modifiée par réaffectation plus bas dans le code. Une constante ne peut pas être déclarée à nouveau dans le même script*/

// par convention les constantes sont en majuscules:
const PAYS ="France"; // string
const AN ="2020"; // string
const BIRTH = 2020; // nombre

// --6 : typeof permet de connaître le type de ma variable:
console.log(vacances);
console.log(typeof vacances);
console.log(annee);
console.log(typeof annee);

// en js les variables sont auto-typées
// on peut convertir une variable de type number en string et aussi string en number avec les fonctions natives de js
// -- la fonction parseInt() renvoie un entier à partir d'une chaine de caractères
var unChiffre = "12";
console.log(unChiffre);
console.log(typeof unChiffre)

//STRING => NUMBER
unChiffre = parseInt(unChiffre);// malgré les quotes, ma fonction parseInt change ma variable en number et plus en string
console.log(unChiffre);
console.log(typeof unChiffre);

// je réaffecte une valeur à ma variable:
unChiffre ="12.22";
console.log(unChiffre);
console.log(typeof unChiffre); // ca affiche string à cause des guillemets, ou quote, qui entourent mon nombre

//STRING => FLOAT
unChiffre = parseFloat(unChiffre);
console.log(unChiffre);
console.log(typeof unChiffre);// affiche bien mon nombre en number dans ma console en dépit des quotes

// NUMBER => STRING
var nb_en_lettres = 258; //ici, il n'y a pas de quote, donc c'est un number
console.log(nb_en_lettres);
console.log(typeof  nb_en_lettres);

var nb_en_lettres = nb_en_lettres.toString() ;// en indiquant .toString, j'attribue à ma variable un type string en dépit de l'absence de quote
console.log(nb_en_lettres);
console.log(typeof  nb_en_lettres);

// --FIN--//