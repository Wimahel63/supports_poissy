/*definir un tableau de prenom (5 min) et remplir un "select option" avec les prenoms*/

//je definis mon tableau:
//  var choixprenom= ["William","Elora","Lincoln","Ryan","Myrddin","Zeus"];

// //-->definir d'abord le select et je l'affiche dans ma page avec le nom de ma balise. Je n'oublie pas de la fermer a la fin
// //je pense a la façon dont je peux automatiser la selection avec une boucle
// document.write("<select>");
// for (var i=0 ; i < choixprenom.length; i++){
//     document.write("<option>" + choixprenom[i] + "</option>")
// }
// document.write("</select>");// ce document.write("<select>") ainsi que celle du haut servent a ecrire les balises select dans mon html, je n'ai donc pas besoin de les ecrire en html si je le fais en js

// var liste_contact= [["jean","pierre","rachid","william"],[14,18,15,63]];

// console.log(liste_contact);

// d(liste_contact[0][2]);//tableau indice 0 = celui avec les noms

// //boucle imbriquée

// for(var i=0; i < liste_contact.length; i++ ){//tableau general, indice 0
 
//     for(var j=0; j < liste_contact[i].length; j++ ){
//        d("tableau numero :" +i+"indice numero: "+j + ":"+list_contact[i][j]);//ma boucle cherche d'abord tous les elements de mon tableau indice 0, puis , dès qu'il a parcouru tous les elements du premier tableau, il cherche les elements du deuxieme tableau. Il continuerait de la même facon s'il y avait d'autres tableaux dans mon tableau general

//    }

// }
// liste_contact[i][j]
// liste_contact[0][1];//le premier chiffre represente le tableau general et le deuxieme chiffre represente le tableau correspondant a l'interieur du grand tableau, ainsi, [1] correspond au tableau des nombres*/



/* <label for=""></label></br>
        <select id="" name="">
            <!--liste déroulante avec SELECT et non INPUT-->
            <optgroup label="">
                <!--option groupe = sous-catégorie dans la liste-->
                <option value=""></option>
                <option value=""></option>
            </optgroup>
            <optgroup label="">
                <!--option groupe = sous-catégorie dans la liste-->
                <option value=""></option>
                <option value=""></option>
            </optgroup>
        </select>
        <br> */


var jour=document.getElementById('jour');
console.log(jour.innerHTML);
var mois=document.getElementById('mois');
var annee=document.getElementById('annee');

var jour=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
//je peux choisir la date qui me convient

var mois=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var annee=[2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];


for(var j=0; j < j.length; j++){
   document.write("<option>" + jour[j] + "</option>");
   console.log()
}//ce document.write m'indique que je veux ecrire <option></option> dans mon html cependant je l'ecris ici et PAS dans mon html directement


for(var m=0; m < mois.length; m++){

}


for(var a=0; a< annee.length; a++){

}

        
    

