// --1 : additions
// info: je peux déclarer plusieurs variables à la suite:
var nb1, nb2, resultat;
nb1 = 10;
nb2 = 5;

// -- addition de nb1 et nb2 avec l'opérateur + 
resultat = nb1 + nb2;
console.log(resultat);

// --2 : soustraction de nb1 - nb2 avec -
resultat = nb1 - nb2;
console.log(resultat);

// --3 : multiplication de nb1 * nb2
resultat = nb1 * nb2;
console.log(resultat);

// --4 : division avec / 
resultat = nb1 * nb2;
console.log(resultat);

// --5 : modulo ,soit le reste d'une division avec l'opérateur %
resultat = nb1 % nb2;
console.log(resultat);

// --6 : je réaffecte une valeur à nb1
nb1 = 11;
resultat = nb1 % nb2;
console.log("le reste de ma division de " + nb1 + " par " + nb2 + " est égal à : " + resultat);

/* les écritures simplifiées */

nb1 = 15;
nb1 = nb1 + 5;
console.log(nb1);

nb1 += 10; // nb1 lui-même + qqchose
console.log(nb1);
// le raccourci est le même avec les autres opérateurs +, -, /, *, %