var mois=Number(prompt("Indiquez un mois en chiffre"));
switch(mois){
    case 1: case 3: case 5: case 7: case 8: case 10: case 12: 
  j=31; break;

    case 4: case 6: case 9: case 11: j=30; break;

    case 2: j=28; break;

    default:alert("Erreur");
}
alert("Ce mois compte " + j + " jours");
 
