// for (var i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//     console.log(i + " est pair");
//     }

//     else if(i % 2 === 1){
//         console.log(i + "est impair");
//     }
// }


for(var i = 1 ; i <= 10; i++) {
    if (i % 2 === 0) {
        document.write("<h4>" + i + " est pair</h4>");   
    }
    else {
        document.write("<h4>" + i + "est impair</h4>");
    }
}
document.write("<hr />");

var chiffre = parseInt(prompt("choisir un nombre entier"));
var chiffremax = (chiffre + 10);
while (chiffre <= chiffremax) {
    if (chiffre % 2 ===0){
        document.write("<h4> "+ chiffre + " est pair</h4>");
    }else{
        document.write("<h4> "+ chiffre + " est impair</h4>");
    }
chiffre++;
}
document.write("<hr />");

var nbUser = parseInt(prompt("Ton chiffre ?"));
var nbUsermax= (nbUser + 10);
for (var tour = nbUser; tour< nbUsermax ; tour++){
    if(tour % 2 === 0){
        document.write("<h4> "+ tour+ " est pair</h4>");
    }else{
        document.write("<h4> "+ tour + " est impair</h4>");
    }
}