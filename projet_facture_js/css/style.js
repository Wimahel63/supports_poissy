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





var date=[[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]];
//je peux choisir la date qui me convient

var dateParDefaut= new Date();

document.getElementById('jour').innerHTML="<option>" + dateParDefaut.getDate()+ "</option>";//je choisis d'afficher le jour par defaut en lui appliquant la fonction get.Date()
var t=dateParDefaut.getMonth()+1;//je ne peux pas changer sans avoir d'abord creer une variable
document.getElementById('mois').innerHTML="<option>" +t+ "</option>";//getDate recupere le jour, getMonth recupere le mois

document.getElementById('annee').innerHTML="<option>" + dateParDefaut.getFullYear()+ "</option>";

for(var i=0; i < date[0].length; i++){
    document.getElementById('jour').innerHTML+="<option>" + date[0][i] + "</option>";
}//document.getElementById cible l'id du html dans lequel je veux placer mon element option.Je rajoute .innerHTML pour indiquer que je cible dans mon HTML. <option></option> s'insere dans mon html cependant je l'ecris ici et PAS dans mon html directement. J'indique [0] pour indiquer que je cherche dans mon premer tableau, celui avec les jours, [i] sert a cibler le chiffre du jour que je veux, c-a-d que si je veux le jour 5, j'ecrirai [4].
for(var i=0; i < date[1].length; i++){
    document.getElementById('mois').innerHTML+="<option>" + date[1][i] + "</option>";
}

function changer(){
    var annee=dateParDefaut.getFullYear()+1;
   document.getElementById('annee').innerHTML=
    "<option>"+annee+ "</option>";
}

//pour selectionner une année, je fais une boucle qui me permet de choisir parmi plusieurs options.Je pars du constat que je veux recuperer une annee parmi une centaine de dates, c-a-d 100 ans avant et 100 ans apres.Je decremente 


var choixclient=["jean serien","ella assez","julie lanotice"];

for(var i=0; i < choixclient.length; i++){
    document.getElementsByClassName('client')[0].innerHTML+="<option>" + choixclient[i] + "</option>";
}//ici je ne prends en compte que le premier element appelé class client car je ne peux pas tous les prendre en meme temps
for(var i=0; i < choixclient.length; i++){
    document.getElementsByClassName('client')[1].innerHTML+="<option>" + choixclient[i] + "</option>";
}



var client=document.querySelector(".client");//je recupere l'element sur lequel je fais l'action
var adresse=document.querySelector(".adresse");
var telephone=document.querySelector(".telephone");
var societe=document.querySelector(".patronyme");
var ville=document.querySelector("zipcode_ville");


client.addEventListener("click",function(client, adresse){
    adresse.innerHTML="client";
})
//attribuer des details en fonction de mon choix client
//si l'utilisateur choisit client[1],alors remplissage automatique de l'adresse correspondante: switch, puis creer en fonction de l'action: onclick
  function Client(pseudo,patronyme,telephone,zipcode_ville,adresse){
    this.pseudo=pseudo;
   this.patronyme=patronyme;
   this.telephone=telephone;
   this.zipcode_ville=zipcode_ville;
   this.adresse=adresse;
 }

var client1= new Client("jean serien","Girouette","01 39 20 20 20","78100 saint germain","allee des allouettes");

var client2=new Client("ella assez", "voitureatoto","03 12 12 12 12","78630 orgeval","rue fleur bleue");

var client3=new Client("julie lanotice", "coupetif","06 30 30 30 30","78300 poissy", "bv des orangers" );

 var remplissageauto=document.getElementsByClassName('client');
 remplissageauto.onclick=function(){
 remplissageauto.addEventListener("click",remplir);
 function remplir (){
    
      switch(client.adresse){//attention, avec cette methode, je clicque sur un nom et pas sur la 'balise', et ma fonction se fait sur la 'balise', d'ou l'erreur
         case "jean serien":
         document.getElementsByClassName('adresse')[0].value=client1.adresse;
          break;
         case "ella assez":
         document.getElementsByClassName('adresse').value=client2.adresse;
          break;
         case "julie lanotice":
         document.getElementsByClassName('adresse').value=client3.adresse;
          default:
         document.getElementsByClassName('adresse').value="saisissez une adresse";
         break;
     }
 }}
//     switch(this.telephone){
//         case "jean serien":
//         document.getElementsByClassName('telephone').value="01";
//         break;
//         case "ella assez":
//         document.getElementsByClassName('telephone').value="03";
//         break;
//         case "julie lanotice":
//         document.getElementsByClassName('telephone').value="06";
//         default:
//         document.getElementsByClassName('telephone').value="saisissez une adresse";
//         break;
//     }

//     switch(this.zipcode_ville){
//         case "jean serien":
//         document.getElementsByClassName('zipcode_ville').value="78100 saint germain";
//         break;
//         case "ella assez":
//         document.getElementsByClassName('zipcode_ville').value="78630 orgeval";
//         break;
//         case "julie lanotice":
//         document.getElementsByClassName('zipcode_ville').value="78300 poissy";
//         default:
//         document.getElementsByClassName('zipcode_ville').value="saisissez un code postal et une ville";
//         break;
//     }

// var codep=[63,62,61,60];

// for(i=0; i<codep.length; i++){
//     document.getElementById
// }



