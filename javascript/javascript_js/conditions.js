//alert('hi');

 // --1: structure de base IF
 if (true){
      /* par défaut la condition à vérifier;le if verifie si elle est vraie*/
      /* votre condition*/
  }

  var nb1 = 10;
   
  if (nb1 < 50){
      console.log("nb1 est bien inférieur à 50");
  }

  if (true){
      /* ... code si vrai...*/
  }
    else{
        /* ... code si faux...*/
    }

    if (nb1 > 50){
        console.log("nb1 est bien supérieur à 50");
    } else {
        console.log("nb1 n'est pas supérieur à 50");
    }

    var majorite = 18;
// demander l'âge en s'assurant que nous avons bien un number 
    var age = parseInt(prompt("Indiquez votre âge"));

    if (age >= majorite){
        alert("vous êtes majeur, vous pouvez circuler");
    } else {
        //s'il est mineur je lui signale
        alert("vous ne passerez pas, voyez plutôt sur ");
        document.location.href = "http:// www.darty.com/"
    }

