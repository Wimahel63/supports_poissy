var prix=Number(prompt("Saisissez un montant"));
var ht=Number(prix*20/100);
var tva=Number(prix+ht);
alert("le prix ttc est de" +tva);
console.log(tva);


/*function multiplication(x, y){
    //code de la tache a effectuer
    alert(x*y);
    return x * y;
}
var resultat=multiplication(5, 10);
resultat +=2; //exemple donné en cours: achats en boutique, plus ajout de la TVA. Le + indique que je demande au navigateur de ne pas écraser les valeurs du dessus mais de les ajouter.
alert(resultat);*/