function d(arg){
	document.write(arg + "<br>");
}


/*  
-- 01 -- Commentaire, Affichage, Concaténation
-- 02 -- Variables, Constantes, type de donnée

-- 03 -- Opérateurs (logiques et arithmétiques)
-- 04 -- Les conditions

-- 05 -- Les boucles
-- 06 -- Fonctions (utilisateurs et prédéfinies)

-- 07 -- Array (tableaux)
-- 08 -- Object (Objets)
*/

// commentaire sur une ligne

//alert("j'affiches quelque chose");
console.log("bonjour je suis dans la console");

document.write("<h2>Commentaire, Affichage, Concaténation</h2>");

document.write("bonjour" + " " + "je m'appelles " + "yassine");

document.write("<h2>Variables, Constantes, type de donnée</h2>");

/*
	Definition : variable est un espace nomée, appelé mémoire,
	qui permet de conserver une valeur le temps d'execution 
	du script.
 */

 // MAVARIABLE Mavariable ma variable ma-variable ma/variable*
 // é è ï â 01maVariable, attention aux noms de variables déjà
 // réservées.

  var maVariable = 1;
  var monTexte = "du texte";
  var monTableau = [1,2,3];
  var monTableau2 = ["a","b","c"];

  var maVariable2;
  maVariable2 = 3;

  var nom = "Dupont", prenom = "Pierre";

  document.write(monTexte + maVariable);

  //exercice : déclarer une variable qui a pour valeur 15
  //et l'afficher

var nombre = 15;
var valeur = 'valeur';
document.write(valeur + nombre);

	//reprendre la variable que vous avez déclaré, et lui donner
	//une nouvelle valeur (8 par exemple) et l'afficher que ce 
	// passe-t-il ?. 

nombre = 8;
d(nombre);

var fruits = "pomme"; //pomme fraise
d(fruits);

//pomme = pomme + fraise
fruits  = fruits + "fraise";
d(fruits);

fruits += "banane";
d(fruits);

const MA_VARIABLE = 20;
d(MA_VARIABLE);

d(typeof MA_VARIABLE + " " + typeof maVariable + " " + typeof monTableau);
d(typeof monTexte);

//exercice : déclarer 3 variables (nom, prenom, age) et afficher
//une belle presentation "je m'appelles...." ensuite afficher
//le type de vos variables.

var nom = "dupont";
var prenom = "pierre";
var age2 = 19;
d("je m'appelles " + nom + " " + prenom + "j'ai " + age2 + " ans");
d(typeof nom + typeof prenom + typeof age2);


d("<h2>Opérateurs (logiques et arithmétiques)</h2>");

var nbr1 = 2, nbr2 = 3, resultat;
resultat = nbr1 + nbr2;
//2 = 2 + 3 
nbr1 += nbr2;

// 0 = 5
resultat = nbr1;

d(resultat)

resultat = nbr1 - nbr2;
d(resultat);

resultat = nbr1 / nbr2;
d(resultat);

resultat = nbr1 * nbr2;
d(resultat);


//-= /= *= %

/*
> strictement superieur
< strictement inférieur
>= supérieur ou égal
<= infé ou égal
= affectation
== comparaison de valeur
=== comparaison de valeur ET type
!= différent de.
*/

d("<h2>Les conditions</h2>");

var a = 4 , b = 4, c = 8;

if (a == b) {
	d("oui a est égal à b");
}

if(a > c){
	d("oui a est plus grand que c");
} else{
	d("non a n'est pas plus grand que c");
}

// &&
if(a == b && c > b){
	d("true");
} else {
	d("false");
}

// ||
if(a == b || c < b){
	d("true");
} else {
	d("false");
}


/* exercice : j'ai 3 variables 78,45,103 vérifier si 103
est plus grand que 78 ? si c'est le cas afficher la valeur
de la variable la plus grande. Ensuite verifier Si 45 est 
plus grand que 78 ou Si 103 est plus grand que 78 et afficher
la valeur la plus grande. 
*/

var nbr3 = 78, nbr4 = 45, nbr5 = 103;
if(nbr5 > nbr3){
	d(nbr5 + " est plus grand que " + nbr3);
}

if(nbr4 > nbr3 || nbr5 > nbr3){
	d(nbr5 + " est la valeur la plus grande");
}

var nbr6 = 10;

if(nbr6 > 10){
	d("fait quelque chose");
} else if (nbr6 != 10){
	d("fait autre chose");
} else if (nbr6 == 10){
	d("oui 10 est égal à 10");
} else {
	d("aucunes des conditions n'est vérifiés");
}

switch(nbr6){
	case nbr6 > 10:
		d(nbr6 + " est sup à 10");
	break;
	case nbr6 != 10:
		d(nbr6 + " est différent de 10");
	break;
	case nbr6 == 10:
		d(nbr6 + " est égal à 10");
	break;
	default:
		d("instruction par défaut");
	break;
}

var couleur = "jaune";

switch(couleur){
	case "bleu":
		d("j'aime le bleu");
		break;
	case "rouge":
		d("j'aime le rouge");
		break;
	case "jaune":
		d("j'aime le jaune");
		break;
	default:
		d("j'aime aucune de ces couleurs")
		break;
}

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




var dutext = "un text";
if(typeof dutext == "string"){
	d("true");
}else {
	d("false");
}

//Si ce n'est pas !
if(!isNaN(nbr6)){
	d("true");
}else{
	d("false");
}

//is not a number
if(isNaN(nbr6)){
	d("true");
}else {
	d("false");
}

//condition ternaire

var voiture = "bmw";

//(voiture == 'bmw') ? 'oui' : 'non'
d((voiture == 'bmw') ? 'oui' : 'non');

//prompt()
//prompt("veuillez saisir votre nom :");

//exercice, demandez l'age de l'utilisateur et ensuite afficher un
// si il est mineur ou majeur. ATTENTION : si l'utilisateur saisi
// autre chose qu'un nombre afficher un message d'erreur.
// parseInt()

/*var x = parseInt(prompt("veuillez entrer votre age "));

if(x >= 18){
	alert("bienvenu vous etes majeur");
 } else if(isNaN(x)){
 	alert("merci de rentrer un nombre");
 } else{
 	alert("tu es mineur");
 }*/

d("<h2>Boucles</h2>");

//incrémentation
for (var i = 0; i <= 10 ; i++) {
	d("je suis le message numero " + i);
}

//décrémentation
for(var i = 10 ; i >= 0 ; i--){
	d("je suis le message numero " + i);
}


var j = 0;

//boucle while
while(j <= 10){
	d("je suis le message " + j);
	j++;
}


//do while

var k = 0;

do{
	d("je suis le message " + k);
	k++;
} while(k >= 10)


//exercice : demander à l'utilisateur d'entrer son age, 
//tant que la valeur entrée par l'utilisateur est bien un nombre.

/*var age;

console.log(typeof age);

do{
	age = parseInt(prompt("veuillez saisir un age "));

	console.log(typeof age);

	if(age >= 18){
		d("vous etes majeur");
	} 

	if(age < 18 ) {
		d("vous etes mineur");
	}

}while(isNaN(age))*/

d("<h2>Fonctions prédéfinies et utilisateurs</h2>");

/*document.write("du texte");

var unePhrase = "bonjour comment vas-tu ?";
d(unePhrase.toUpperCase());

function addition(valeur1, valeur2){
	d("j'appelles la fonction addition");
	var resultat = valeur1 + valeur2;
	return resultat;
}

d(addition(1,6));

//exercice faire une fonction qui calcule la TVA d'un prix. (19.6)

function appliquerTVA(prixHT){
	
	var prixTTC = prixHT * (1+0.196);
	return prixTTC;
}

d(appliquerTVA(155));//le prix avec la TVA

//creer une fonction appliquerTVA2 qui permet de calculer le prix TTC
// avec une TVA définie par l'utilisateur par exemple
//appliquerTVA2(155,19.6)

function appliquerTVA2(prixHT,TVA){
	var prixTTC = prixHT * (1+TVA/100);
	return prixTTC.toFixed(2);
}

d(appliquerTVA2(155,5.5));

//amélioration possible, afficher seulement 2 chiffres après la
//virgule :) toFixed()

//function maFuntion(){}

var maFonction = function(){
	document.write("je suis maFonction <br>");
}

maFonction();


//IIFE = Immediatly Invoked Function Expression
(function(){
	d("bonjour je suis la fonction anonyme");
})();

//ecrire une fonction qui verifie l'age de l'utilisateur

function verifierAge(age){
		
		if(age >= 18){
			d("vous etes majeur");
		} 

		if(age < 18 ) {
			d("vous etes mineur");
		}
}

//faire une fonction qui demande l'age de l'utilisateur et qui verifie son age

function demanderAge(){
	
	do{
		age = parseInt(prompt("veuillez saisir un age "));

	}while(isNaN(age))
}

//ecrire une fonction qui demande le nom et prenom de l'utilisateur, ensuite
//afficher une présentation de celui-ci.

function informations(){
	var nom, prenom;

	nom = prompt("Veuillez saisir votre nom : ");
	prenom = prompt("Veuillez saisir votre prenom : ");

	d("Bonjour " + nom +" "+ prenom);
}

//ecrire une fonction qui affiche un "Hello world" x fois défini par
//l'utilisateur par exemple afficherPhrase(100);


function afficherPhrase(nombre){
	for (var i = 1; i <= nombre ;  i++) {
			d("Hello world " + i);
	}
}

afficherPhrase(10);

//fonction presentationFinale(), vous demandez l'age de l'utilisateur,
//son nom son prenom, et vous verifier aussi son age (mineur ou majeur)
//ensuite vous afficher une presentation de celui-ci

function presentationFinale(){
	demanderAge();
	informations();
	verifierAge(age)
}

presentationFinale();

//ecrire une fonction qui verifie le type de donnée
//d'une variable par exemple verifie(maVariable)

function verifie(x){//peu importe le nom de ma variable ici, c'est comme une generalite, en effet, c'est l'affichage du bas qui importe c-a-d que je dois definir la variable que je veux tester dans mon affichage sous ma fonction :  verifie(nom_de_ma_variable_a_verifier);
    console.log(typeof x);
}
var ma_variable="10";
var ma_variable2=10;
var ma_variable3=[10];
 verifie(ma_variable);
 verifie(ma_variable2);
 verifie(ma_variable3);
 verifie(nom);
 verifie(age);

 //exercice 14: ecrire une fonction qui affiche un message pour informer l'utilisateur si la variable qu'il teste est de type 'string', 'number', par exemple verifier(maVariable) ---> "votre variable est de type:")

 function verifier(maVariable){
     
     console.log(typeof maVariable);
 
 if(typeof maVariable === "string"){
     d( "votre variable est de type : " + typeof maVariable);
 }
 else{
     d( "votre variable est de type : "+ typeof maVariable);
 }
}

 verifier(age);//j'appelle ma fonction

 //autre possibilité:
 function verifier(maVariable){
     if(typeof maVariable == "string"){
        d( "votre variable est de type : " + typeof maVariable);
    }
    else if(typeof maVariable == "number"){
        d( "votre variable est de type : "+ typeof maVariable);
    }
    else{
        d( "votre variable est de type : "+ typeof maVariable);
    }
   }

   verifier("du texte");
   verifier(15);
   verifier([1,2,3]);

   //portée globale et locale d'une variable

   var animal= "un chat";//ma var est en dehors de ma fonction, elle est alors globale

   function test(){
       d(animal);
   }

   test();//j'appelle ma fonction
   /* ici ma variable a une portée globale, je peux l'appeler de n'importe où dans mon code*/

   /*function test2(){
        animal2= "un hibou";
   }

   d(animal2);
   test2();// la portée de cette variable est locale, elle n'est disponible que dans cette fonction
   //si j'enleve le mot-clé var dans cette fonction, ma portée devient globale*/

   d("<h2>Array : les tableaux</h2>");

   //conserve plusieurs valeurs dans une variable

   var liste_fruits = ["fraise", "pomme" , "banane","fraise", "pomme" , "banane","fraise", "banane" ,"pomme" ,"fraise", "pomme" , "banane"];

   d(liste_fruits);
   console.log(liste_fruits);//ma console affichera ma liste, le nombre d'elements dans ma liste, la taille de mon tableau (nb d'elements ,c'est une propriete que je peux utiliser dans une boucle).
   /*je peux afficher un seul element de mon tableau
   --> d(liste_fruits[2]); //affichera uniquement pomme...*/

   /*si je veux afficher chaque element un à un, je peux le faire avec une boucle
   for(var i=0; condition; i++ ){
       d(liste_fruits[i]);
   }
   for(var i=0; i < liste_fruits.length; i++ ){
    d(liste_fruits[i]);
}

//afficher seulement un type d'element, par exemple les bananes:

 for(var i=0; i < liste_fruits.length; i++ ){

     if(liste_fruits[i] == "banane"){
    d(liste_fruits[i]);
     }
}

for(var i=0; i < liste_fruits.length; i++ ){

    if(liste_fruits[i] == "fraise"){
   d(liste_fruits[i]);
    }
}

for(var indice in liste_fruits ){// l'indice correspond a la ligne ou se situe mon element dans ma liste
  if (liste_fruits[indice]== "fraise")//ma condition cherche a quelles lignes se situent mes elements a recuperer, ici fraise
    {
   d(indice + " : "+ liste_fruits[indice]);
    }
}

var liste_contact= [["jean","pierre","rachid","william"],[14,18,15,63]];

console.log(liste_contact);

d(liste_contact[0][2]);//tableau indice 0 = celui avec les noms

//boucle imbriquée

for(var i=0; i < liste_contact.length; i++ ){//tableau general, indice 0
 
    for(var j=0; j < liste_contact[i].length; j++ ){
       d("tableau numero :" +i+"indice numero: "+j + ":"+list_contact[i][j]);//ma boucle cherche d'abord tous les elements de mon tableau indice 0, puis , dès qu'il a parcouru tous les elementqss du premier tableau, il cherche les elem"nts du deuxieme tableau. Il continuerait de la même facon s'il y avait d'autres tableaux dans mon tableau general

   }

}
liste_contact[i][j]
liste_contact[0][1];//le premier chiffre represente le tableau general et le deuxieme chiffre represente le tableau correspondant a l'interieur du grand tableau, ainsi, [1] correspond au tableau des nombres*/

d("<h2>Objets</h2>");

/*var monObjet={};
monObjet.nom="SHAKESPEAR";//ici, j'appelle mon objet et je lui donne une propriété, ici, .nom
monObjet.prenom="William";
monObjet.age=45;

d(monObjet.prenom+" "+ monObjet.age);

var Humain={//je peux ici mettre une majuscule car c'est un objet, c'est a ça que je reconnais un objet en js, ainsi qu'aux {} qui declarent ma valeur d'objet, et mes propriétés sont separées  par des ,sauf la derniere qui ne prend RIEN
sexe:"male",
origine:"anglaise",
age:45
}

d(Humain.sexe);
Humain.couleur="blanc";
d(Humain.couleur);

var Voiture={
    marque:"Dodge",
    modele:"Viper",
    couleur:"bleue",
    changerCouleur: function(nouvelleCouleur){   //changercouleur=fonction, nouvelleCouleur= parametre
           //this represente l'objet
    return this.couleur = nouvelleCouleur;
    },  //dans un objet on peut avoir un tableau de valeurs
    optionsDeSerie:["clim","auto-radio","park-assist"],
    annee:2017,
    motorisation: {//je peux avoir un objet dans mon objet
        energie:"diesel",
        puissance:"110 cv"
    }
};

d(Voiture.modele);
d(Voiture./*couleur);
Voiture.changerCouleur("violet");
d(Voiture.couleur);
d(Voiture.optionsDeSerie[1]);
d(Voiture.motorisation.energie);

for(var elements in Voiture){
    d("proprieté :" + elements + "valeur : " + Voiture[elements]);
    
    if(typeof Voiture[elements]=="object"){
        for (var elemnts in Voiture.motorisation){
            d("propriete :" + elemnts + "valeur :" + Voiture.motorisation[elemnts]);//ce n'est pas une erreur, car ce n'est pas le même parametre
        }
    }
}

//creer un objet Joueur avec 3 caracteristiques (force, experience et race), puis les afficher.

/*var Joueur={
	force:80,
	experience:110,
	race:"elfe",
}

d(Joueur.force + ' ' +  Joueur.experience + ' ' + Joueur.race );*/

// creer une class 

function Animal(nom,espece,categorie,age){
	this.nom= nom,   //this represente l'objet, donc ici animal
	this.espece =espece,
	this.categorie =categorie,
	this.age =age
}

var lion = new Animal("simba", "lion", "felin", 10 );
var harfang=new Animal("hedwig", "chouette", "strigides", 4);

d(lion.nom);
d(harfang.nom);

//creer une class joueur avec experience, force et race.Puis creer un deuxieme joueur.

/*function Joueur(experience,force,race){
	this.experience=experience,
	this.force=force,
	this.race=race
}
var troll = new Joueur(50, 180, "troll");

var elfe= new Joueur(140, 120, "elfe");

var elfe2= new Joueur(20, 32, "mage");
d(troll.experience + ' ' + troll.force + ' '+ troll.race);
d(elfe.experience + ' ' + elfe.force + ' '+ elfe.race);

d(troll.force+ ' ' + elfe.force + ''+ elfe2.force);

	//c'est un constructeur, avec la notion de prototypage  qui rajoute une fonction à mon objet
	
	function Vehicule(marque){
		this.marque=marque;
	}
	var megan = new Vehicule("Renault");

	megan.demarrer=function(){
		d("vroum vroum la voiture demarre");
	}

	megan.demarrer();
	d(megan.marque);

	megan.freiner=function(){
		d("ma voiture freine");
	}
	megan.freiner();
	d(megan.marque);


	

------------ LAISSEZ LIBRE COURS A VOTRE IMAGINATION POUR LE TEXTE --------------- 
 
Exercice : Oyé Oyé ! Bienvenue dans votre JDR Javascript, vous etes capable
de creer divers Personnages (monstres, guerriers, mages, chasseurs, voleurs)
avec différentes caractéristiques (pseudo, sante,niveau,points d'experiences, classe, 
race, armes).
Une petite présentation de votre héros est nécéssaire.
Votre Héros se retrouve dans diverses situations telles que
le combat ! :-O Il est donc capable de se défendre en attaquant ses adversaires,
il inflige des dégats proportionnellement à sa force de combat qui elle dépendra de 
l'arme utilisée et donc les points de vie de l'adversaire baissent en conséquence ;-). 
A chaque fois que votre Champion sort vainqueur d'un combat ^_^ il gagne 50 points 
d'experiences, et prend un niveau chaque 100 points d'experiences. A chaque fois que votre
héros gagne un niveau, pour atteindre le niveau suivant l'experience est augmentée de 25%.

Par exemple si vous souhaitez creer un magicien, celui ci est capable de faire des attaques 
magiques qui ne font pas les mêmes dégats qu'un guerrier et son épée ou bien un chasseur 
et son arc. Un magicien possède également le pouvoir de se soigner et donc si il souhaite 
soigner un allié il le fera et lui rendra 50% de sa vie. Votre héros n'est pas immortel, 
il subit des dégats lors de ses périples, vous pouvez lui faire prendre des potions de vie 
qui lui redonne 20% de sa vie ou bien le booster avec des potions de force qui 
augmente sa force de 15%. Bonne chance :).

*/

	

function Player(pseudo,sante,niveau,experience,classe,race,arme,degats){        this.pseudo=pseudo,
	this.sante=sante,
	this.niveau=niveau,
	this.experience=experience,
	this.classe=classe,
	this.race=race,
	this.arme=arme,
	this.degats=degats,
		attaquer=function(attaquer){
			this.attaquer=attaquer;
		}
}

var elfe= new Player("whitebat",100, 1, 0,"chassou", "elfe", "arc", 30);

var troll = new Player("gourk",100, 1, 0,"monstre", "troll","gourdin", 25);

var dragon= new Player("luciole", 100, 1, 0,"incendiaire", "dragon","feu",40);

var harpie= new Player("mona", 100, 1, 0, "mage", "harpie", "hurlements",20);

var humain= new Player("ankou", 100, 1, 0, "guerrier", "humain", "hache",35);

d(elfe.pseudo+" " +"est une "+" " + elfe.race+" "+elfe.classe +" "+"de niveau :"+ elfe.niveau+ " "+ "avec "+ "  " +elfe.sante +" "+ "de PV" +", "+ elfe.experience + " "+" % d'experience"+ " "+ "qui manie fort bien l'" + " "+ elfe.arme+" "+" infligeant " +" "+ elfe.degats +" "+ "points de degat");


d(troll.pseudo+" " +"est un "+" " + troll.race+" "+troll.classe +" "+"de niveau :"+ troll.niveau+ " "+ "avec "+ "  " +troll.sante +" "+ "de PV" +", "+ troll.experience +" "+ "% d'experience"+ " "+ "qui aime faire mumuse avec son" + " "+ troll.arme + " :"+"occasionnant"+" "+troll.degats+" "+ "attention aux degats!!!");


d(dragon.pseudo+" " +"est un "+" " + dragon.race+" "+ "feroce"+" "+ "d'un temperament tres "+ " " +dragon.classe +" "+"de niveau :"+ dragon.niveau+ " "+ "avec "+ "  " +dragon.sante +" "+ "de PV" +", "+ dragon.experience + " "+" % d'experience"+ " "+ "qui assure une ambiance toujours chaleureuse grâce à son arme: le " + " "+ dragon.arme + " "+ "et ses " +" "+dragon.degats +" "+ "points de degat" );

d(harpie.pseudo+" " +"est une "+" " +"charmante"+" "+ harpie.race+" "+harpie.classe +" "+" de son état,"+ " "+"de niveau :"+ harpie.niveau+ " "+ "avec "+ "  " +harpie.sante +" "+ "de PV" +", "+ harpie.experience +" "+ "% d'experience"+ " "+ "et dont les" + " "+ harpie.arme + " " + " à "+ harpie.degats+" "+"points de degat" +" "+"sauront vous glacer le sang juste comme il faut!!");

d(humain.pseudo+" " +"est un "+" " + humain.race+" "+humain.classe +" "+"de niveau :"+ humain.niveau+ " "+ "avec "+ "  " +humain.sante +" "+ "de PV" +", "+ humain.experience +" "+ " % d'experience."+ " "+" Les"+" "+humain.degats+" "+"points de degat de sa double" + " "+ humain.arme + " "+"auront raison de tous vos doutes... et de votre tête");




/*var a = 4 , b = 4, c = 8;

if (a == b) {
	d("oui a est égal à b");
}

if(a > c){
	d("oui a est plus grand que c");
} else{
	d("non a n'est pas plus grand que c");
}

// &&
if(a == b && c > b){
	d("true");
} else {
	d("false");
}
*/