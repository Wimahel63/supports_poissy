// l'opérateur de comparaison == signifie 'égal à'
// il permet de vérifier que les valeurs de 2 variables sont identiques
 var nb1 = 123;
 var nb2 = 123;
 console.log(nb1 == nb2);
 /* il est true car on ne lui demande que de verifier la valeur et non le type*/
 // l'operateur de comparaison === 'signifie strictement égal à' 
 // il permet de verifier la valeur et le type (string ou number)
 console.log(nb1 === nb2); // retourne false , car la valeur est la même mais pas le type

 // l'operateur != signifie 'different de ... en valeur
 console.log(nb1 != nb2);// false

 // l'operateur !== signifie 'strictement different de ... en valeur et en type

console.log(nb1 !== nb2);// true


