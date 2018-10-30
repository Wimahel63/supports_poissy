var dismoi = "";
var i = 0;

while((dismoi !== "oui") && (dismoi !=="non")){
    dismoi = prompt("alors on joue au ni oui ni non ?");
    document.write(dismoi + "pour la " + i + "° fois dis moi oui ou non! <br />");
    i++
}
document.write("<h1 style=background-color:cyan; text-aalign:center;'>Fini ;-) !</h1>");