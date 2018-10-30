


alert("hello et bienvenue !");

// cette ligne genere aleatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random()*100) +1;

//test pour mieux vérifier le programme
console.log("(la solution est " + solution + ")");

for(var i = 1; i <= 6; i++) {
    nbjoueur = parseInt(prompt("le but du jeu est simple.je pense à un nombre entre 0 et 100. A ton avis quel est ce nombre? notes-le dans la zone ci-dessous, tu as 6 essais"));
    if(!isNaN(nbjoueur)){
        if(solution === nbjoueur){
            alert("bravo tu as trouvé!");
            i=6;
        }else{
            if (solution < nbjoueur){
                alert("le nombre est plus petit, essai " +i + "sur 6");
            }else{
                alert("le nombre est plus grand, essai " +i + "sur 6");
            }
        }
    }else{
        alert("tu n'as pas saisi de nombre");
    }
}
alert("la bonne réponse est " + solution + ".");