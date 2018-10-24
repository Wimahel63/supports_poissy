/* les boucles*/
//-- la boucle FOR

// for /*(3 arguments){
    /*code*/
//}

/* 1. initialise un compteur à partir de combien je compte (par défaut le compteur a la variable i)
2. la condition à vérifier qui doit être VRAIE (TRUE)
3. le 'pas' d'incrémentation (combien j'ajoute à chaque tour, le 1 donc i++)*/

for (var i=1; i<= 10; i+2){// cette condition me dit de rajouter +2 a chaque tour
    document.write("<p>Instruction éxécutée : " + i + "</p>");
}

// la boucle WHILE (tant que)
// tres utilisée quand on ne connait pas le nombre de tours de la boucle à l'avance
var j = 1;
while (j <=10){
    document.write("<hr/> <p>Instruction éxécutée : " + j + "</p>");
    j++ /*tant que j est inferieur ou egal a 10, la boucle tourne. elle s'arrete a 10*/
} 
/* -------------------------------
            EXERCICE
j'ai 1000€ sur mon compte
chaque mois j'ajoute 50€
combien de temps me faut-il pour avoir 2000€ sur mon compte ?
-------------------------------- */

var monCompte =1000;
var temps = 0;
while(monCompte < 2000){
	monCompte += 50;
	temps++;
}
document.write("<h3>Sous sur mon compte : " + monCompte + "</h3>");
document.write("<h3>Jusqu'à 2000€, il me faut : " + temps + " mois</h3>");
// document.write("<h3>Jusqu'à 2000€, il me faut : " + (temps/12) + " années</h3>");

//avec la boule FOR

var tps = 0;
for (var mesSous = 1000; mesSous < 2000; mesSous += 50){
	document.write("<h3>Le mois suivant j'ai : " + mesSous + "</h3>");
    tps++;
}

document.write("<h3>Il aura fallu " + tps + " mois.</h3>");

