//6 colonnes

/*var etoile="";

for(var i = 1; i <= 7; i++);
if (i % 2 === 1){
    etoile+="*";
}
document.write("*");*/

var choix = Number(prompt("entrez un nombre"));

document.write("<center>");// pour centrer les etoiles

for(var y =0; y <=choix; ++y)//pour repeter les pyramides
{
    for(var i = 0; i <= 3 + y * 2; i++)//une loop, qui compte de 0 à 4 (nb de rangées d'étoiles)
    {
        for(var x = 0; x <= i+y*2; x++)//loop qui compte de 0 jusqu'a la valeur de i
        {
            document.write("*o*"); //ecrit *o* sur la page
        }
        document.write("<br/>");//pour revenir à la ligne après chaque rangée d'etoiles
    }
}
document.write('||||'); //rajoute le tronc du sapin en bas des pyramides
document.write("</center>");//ferme le centrage du sapin, ouvert en haut de page