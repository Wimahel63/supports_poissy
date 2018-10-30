//boucle for
console.log("FOR");
var diese = "";

for (var i = 1; i < 8; i++){
    diese+="#";
    console.log(diese);
}

//boucle while
console.log("WHILE");
var ligne = "";
var i = 1;
while ( i <= 7){
    ligne = ligne + "#";
    //autre possibilité avec l'operateur +=
    //ligne += "#";
    console.log(ligne);
    i++;
}