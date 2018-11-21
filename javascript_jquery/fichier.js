function d(arg){
    document.write(arg + "<br>");
}

/*
--1-- Commentaires, Affichage, Concaténation
--2-- Variables, Constantes, types de données
--3-- Opérateurs (logiques et arithmétiques)
--4-- Conditions
--5-- Boucles
--6-- Fonctions (utilisateurs et prédéfinies)
--7-- Array (tableaux)
--8-- Object (objets)
*/

/*   commentaires multilignes*/
// commentaires sur une seule ligne

/*affichage:
alert("j'affiche qqchose");
console.log("bonjour je suis dans la console");*/
document.write("<h2>Commentaires, affichage, concaténation</h2>"); /* je fais appel a l'objet: document*/

/* Concaténation: mettre les objets les uns a la suite des autres. Pour concatener, j'utilise +
document.write("bonjour" + "je m'appelle" + "Magali");*/
/* pour rajouter un espace, je mets +""+ entre mes elements*/
document.write("bonjour" +""+ "je m'appelle" + ""+"Magali");

/*Constantes:*/
document.write("<h2>variables, constantes , types de données</h2>");

/* Definition : Variable: espace nommé 'mémoire' qui conserve une valeur le temps d'execution du script.


pour declarer une variable, on utilise le mot-cle var*/

// on n'ecrit jamais une variable ainsi: MAVARIABLE, Mavariable, ma variable, ma-variable, ma/variable, avec des é è ï à â... ,01maVariable, avec un mot-cle ou un nom de variable déjà réservé

var maVariable = 1;
var monTexte = "du texte";
var monTableau =[1,2,3];
var monTableau2 = ["a","b","c","d"];

var maVariable2= ""; /*je peux la declarer plus tard
mavariable2= 3;

var nom: "Dupont", prenom= "Pierre";/*je peux mettre plusieurs variables à la suite en mettant une , 

document.write(monTexte + maVariable); // concatenation, donc je suis obligée de mettre +

//exercice1 : Declarer une variable qui a pour valeur 15 et l'afficher

var nombre=15;

alert(nombre); //pas de guillemts car il n'y a qu'une variable et pas plusieurs auquel cas on mettrait des guillemets et + 
console.log("nombre");
document.write(nombre);*/

//exercice 2 : reprendre la variable que l'on vient de declarer et lui donner une nouvelle valeur (8 par exemple) et l'afficher. Que se passe-t-il?

var nombre= 8;

d(nombre);// j'affiche en appelant ma fonction

var fruits="pomme"; //mais je veux afficher pomme fraise
d(fruits);
//pour ajouter une variable, je fais

fruits = fruits + "fraise";//fruits de depart= pomme, auquel j'ajoute fraise j'obtiens alors pomme fraise, donc fruits= pomme fraise et plus seulement pomme
d(fruits);

fruits += "banane";//même principe que précédemment, avec fruits = pomme fraise (resultat de ma premiere addition ) auquel j'ajoute banane, ce qui me donne fruits= pomme fraise banane.
d(fruits);


/****constantes****/

//Pour declarer une Constante, on la declare en majuscules. Une constante ne varie pas

const MA_VARIABLE = 20;
d(MA_VARIABLE);

/***** type de données**** */

d(typeof MA_VARIABLE + " " + typeof maVariable + " " +typeof monTableau);
// en js, un tableau est un objet
d(typeof monTexte);//untypeof recupere le style de données, a savoir number, object, string...

//exercice 3: declarer 3 variables (texte, nombre et tableau) et une constante (texte) et afficher ensuite le rendu avec une belle presentation (je m'appelle...) puis avec le type de données

var moi= "Mag";
const MON_NOM = "Piszczyglowa";
var chiffre= 34;
var tableau= [65,63,59];

d("je m'appelle" + " " + moi + " " + MON_NOM + " " + "j'ai " + " " + chiffre + " " + "ans" + " " + tableau );

d(typeof moi + " " + typeof chiffre + " " + typeof tableau + " " + typeof  MON_NOM);

/******operateurs logiques et arithmétiques*****/

d("<h2>operateurs (logiques et arithmetiques)</h2>");

var nb1=2, nb2=3, resultat;
resultat= nb1 + nb2;
nb1 += nb2;// soit 2 =  2+ 3
resultat= nb1;// soit nb1 = 5
d(resultat);

resultat = nb1 - nb2;
d(resultat);

resultat = nb1 / nb2;
d(resultat);
 
resultat = nb1 * nb2;
d(resultat);

//je peux faire pareil avec -= , /= , *=  . on peyt utiliser ces operateurs pour les factures, calculs de TVA...

/***operateurs logiques****/

/*
< strictement supérieur
> strictement inférieur
>= supérieur ou égal
<= inférieur ou égal
= affectation
== comparaison de valeur
=== comparaison de type ET de valeur
!= différent de

ATTENTION, le = ne donne pas le resultat mais est une affectation*/

/*****conditions *****/

var a= 4 , b= 4, c=8;

/*if (condition) {
    instruction à executer
}*/
d("<h2>Conditions</h2>");

// soit

if (a==b) {
    d("oui a est égal à b");
}

 if (a>c){
    d("oui a est plus grand que c");
 } else {
     d("non a n'est pas plus grand que c");
 }

//&&
 if(a == b && c > b){
     d("true");
 } else {
     d("false");
 }

 //mais:
 if(a == b && c < b){
    d("true");
} else {
    d("false");
}

// ||
if (a == b || c < b){
    d("true");
} else {
    d("false");
}

//exercice 4: j'ai 3 variables 78, 45, 103.Verifier si 103 est plus grand que 78. Si c'est le cas, afficher la valeur de la variable la plus grande. Verifier ensuite si 45 est plus grand que 78 ou si 103 est plus grand que 78 et afficher la valeur la plus grande.

var ch1=78, ch2=45, ch3=103;

if (ch3 > ch1){
    d( ch3+ " "+ "est plus grand que " + " "+ ch1);
}

if(ch1 < ch2 || ch3 > ch1) {
    d(ch3 + " est la valeur la grande");
} 

//on peut aussi avoir un if dans un if mais dans notrer exercice selon revient à faire deux fois la condition:

if(ch1 < ch2 || ch3 > ch1) {
    if( ch1 < ch2 ){ // on reprend la condition deja indiquée dans le premier if
        d( ch2 );
    } else if( ch3 > ch1 ){ // idem, on reprend la condition indiquée dans le premier if
        d( ch3 );
    }
}

var nb6 = 10;

if(nb6 > 10){
    d("fais quelque chose");
} else if (nb6 != 10){
    d("fais autre chose");
} else if (nb6 == 10){
    d( "oui," + " " + nb6 + " est égal à 10");
} else {
    d("aucune des conditions n'est vérifiée");
}

var couleur = "jaune";
switch(couleur){
    case "bleu":
      d("j'aime le bleu");
      break; // break stoppe l'execution en cas de condition avérée. Si on ne le met pas l'execution execute tous les cases
    case "rouge":
      d("j'aime le rouge");
      break;
    case "jaune":
      d("j'aime le jaune");
      break;
    default:
      d("j'aime aucune de ces couleurs");
      break;
}

//exercice 5: reproduire l'exemple ci-dessus (var nb6=10) avec des switch cases a la place du else if

var nb6=10;

switch(nb6){
    case 5:
      d("5 est egal a 10");
      break; // break stoppe l'execution en cas de condition avérée. Si on ne le met pas l'execution execute tous les cases
    case 20:
      d("20 est egal à 10");
      break;
    case 10:
      d("10 est egal à 10");
      break;
    default:
      d("aucune de ces conditions n'est vraie");
      break;
}

// switch ne peut tester que les egalites

// ===

if("1" == 1){
    d("true");
} else {
    d("false");
}

if("1" === 1){
    d("true");
} else {
    d("false");
}

if(isNaN(nb6)){// cette condition signifie: 'si nb6 n'est pas un nombre alors le message affiché sera...'
    d("true");
} else {
    d("false");
}

var dutext= "un texte";
if (typeof dutext== "string"){
    d("true");
} else {
    d("false");
}


//si ce n'est pas !
if(!isNaN(nb6)){ // ici ! signifie "n'est pas", cumulé a "is NaN" qui signifie "n'est pas un nombre", donc n'est pas + n'est pas= est, donc cela signifie si (nb6 est un nombre)
    d("true");
} else {
    d("false");
}

//condition ternaire

/*var voiture= "viper";

d((voiture == 'viper') ? 'oui' : 'non');//si voiture ==viper, alors affiche oui , sinon affiche non

//prompt()
prompt("veuillez saisir votre nom :");
//demande a l'utilisateur de saisir son nom

//exercice 6 : demander l'age de l'utilisateur puis afficher s'il est mineur ou majeur. Si l'utilisateur saisit autre chose, afficher un message d'erreur (
//parseInt())

var age=prompt("veuillez saisir votre âge :");

if (age <= 18){
    d("vous êtes mineur");
} else if(age >= 18){
    d("vous êtes majeur");
} else if (isNaN(age)){
    d("veuillez saisir votre âge en chiffre");
}*/

var age=parseInt(prompt("veuillez indiquer votre âge"));
if (age <= 18){
    d("vous êtes mineur");
} else if(age >= 18){
    d("vous êtes majeur");
} else if (isNaN(age)){
    d("veuillez saisir votre âge en chiffre");
    console.log(typeof age);
}


/*******boucles*******/
d("<h2>Boucles</h2>");

for (var i=0; i <=10; i++){
//indice de départ, puis condition, puis incrémentation, c-à-d j'ajoute 1 à chaque tour à mon indice de départ
    d("je suis le message numero" + i);//la boucle part de mon indice de départ et arrive jusqu'à la fin de ma condition , en incrémentant i++ ou en décrémentant i--
}

for (var i=10; i >=0; i--){
    d("je suis le message numero" + i);
}

var j = 0;

//boucle while
while (j<=10){
    d("je suis le message" + j);
    j++;
}

//do while

var k=0;
do{
    d("je suis le message" + k);
    k++;
}while (k >= 10)

/* différence entre while et do while:il y a obligatoirement une exécution et la vérification vient après pour do while alors que for et while vérifient avant d'exécuter la condition*/

//exercice 7:demander a l'utilisateur d'entrer son âge , tant que la valeur entrée par l'utilisateur n'est pas un nombre (ex s'il ecrit '20 ans' 'ans n'est pas un nombre, il reçoit donc un message)
var y=parseInt(prompt("entrez votre âge"));
console.log(typeof y);
if (y <= 18){
    alert("vous êtes mineur");
} else if(y >= 18){
    alert("vous êtes majeur");
}/* else if (isNaN(age)){
    d("veuillez saisir votre âge en chiffre");
}*/

while (isNaN(y)){
    alert("entrez votre âge en chiffre");
}

// correction avec do while
var year;
console.log(typeof year);
do{
    year=parseInt(prompt("veuillez saisir un age"));
    console.log(typeof year);

    if (year >=18){
        d("vous etes majeur");
}
    if (year < 18){
        d("vous etes mineur");
    }
}while (isNaN(year))

var text2="du texte";
console.log(isNaN(text2));
console.log(isNaN(nb6));

/*****fonctions****/
d("<h2>fonctions prédefinies et utilisateurs</h2>");

//les fonctions predefinies existaient déjà dans mon code et il suffit que je les appellent dans mon code quand j'en ai besoin

document.write("du texte");

 var unePhrase= "bonjour comment vas-tu?";
 d(unePhrase.toUpperCase());

 function addition(valeur1, valeur2){
     d("j'appelle la fonction addition");
     var resultat= valeur1 + valeur2;
    //le return empeche la prise en compte des elements qui le suivent
     return resultat;
 }
 
d(addition(1,6));

//exercice 8: faire une fonction qui calcule la TVA d'un prix (tva à 19.6)

d(appliquerTVA(155));//le prix avec la TVA

function appliquerTVA(prixHT){
    var prixTTC= prixHT * ( 1+0.196);
    return prixTTC;
}