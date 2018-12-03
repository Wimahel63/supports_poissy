//if(window.matchMedia("(min-width: 480px")).matches){
//}else{
//}
// function redimensionnement(){
//     var redimension=document.getElementsByTagName("section");
//     if("matchMedia" in window){
        
//     } else{

//     }
// }
// window.addEventListener('resize',redimensionnement,false);
//       test code mediaquery en js



//pour choisir la date, je cree un tableau
var date=[[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]];
//je mets la date par defaut, mais je cree par la suite une boucle for qui me permettra de la changer si besoin
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

//pour selectionner une année, je fais une boucle qui me permet de choisir parmi plusieurs options.Je pars du constat que je veux recuperer une annee parmi une centaine de dates, c-a-d 100 ans avant et 100 ans apres.Je decremente apres avoir stocker mes valeurs dans une varaible
var precedente;
var suivante;
 for(var i=100; i>0; i--){
    precedente=dateParDefaut.getFullYear()-i;
    document.getElementById("annee").innerHTML += "<option>"+ precedente+ "</option>";
 }//si je veux revenir jusqu'a 100 ans en arriere

 for(var i=0; i<100; i++){
   suivante=dateParDefaut.getFullYear()+i;
    document.getElementById("annee").innerHTML += "<option>"+ suivante+ "</option>";
 }//si je veux aller jusqu'a 100 ans apres


/***** zone client***** */

//je me cree une fonction client pour pouvoir inserer tous mes parametres et les appeler plus tard pour les afficher quand j'agirai sur l'evenement
function Client(nomS,nom,rue,adresse,telephone){
    this.nomS=nomS;
    this.nom= nom;
    this.rue=rue;
    this.adresse=adresse;
    this.telephone=telephone;
}

//je transforme ces parametres en arguments, specifiques a chaque client
var client1 = new Client("Savon","alain","1 rue des bois"," 75500,Paris ","03 02 06 08 07");

var client2 = new Client("Purée","yvette","8 rue des ferrites","95400, cergy","03 02 06 08 10");

var client3 = new Client("Patate","alfred","8 rue des cormeille","78700, Poissy ","03 02 06 08 10");

var tab = [client1,client2,client3];//je recupere les données completes de mes clients pour pouvoir m'en resservir plus tard


document.getElementById("nomClientD").innerHTML+="<Option> Nouveau client </Option>";
document.getElementById("nomClientE").innerHTML+="<Option>Nouveau client </Option>";

//function afficher(){
//  var d=document.querySelectorAll(#nomClientD option)[0].innerHTML;
//switch(d){  //var d pour destinataire
//   case client1.nomS:
//document.getE(nsociete).value=client1.nomS;
//document.getE(nom).value=client1.nom;
// document.getE(rue).value=client1.rue;
//document.getE(adresse).value=client1.adresse;
//document.getE(telephone).value=client1.telephone;
// break;
//   case client2.nomS:
//document.getE(nsociete).value=client2.nomS;
//document.getE(nom).value=client2.nom;
// document.getE(rue).value=client2.rue;
//document.getE(adresse).value=client2.adresse;
//document.getE(telephone).value=client2.telephone;
// break;
//   case client3.nomS:
//document.getE(nsociete).value=client3.nomS;
//document.getE(nom).value=clien31.nom;
// document.getE(rue).value=client3.rue;
//document.getE(adresse).value=client3.adresse;
//document.getE(telephone).value=client3.telephone;
// break;
// case client4.nomS:
//document.getE(nsociete).value=client4.nomS;
//document.getE(nom).value=client4.nom;
// document.getE(rue).value=client4.rue;
//document.getE(adresse).value=client4.adresse;
//document.getE(telephone).value=client4.telephone;
// break;
//}
//}


// remplissage de la liste deroulante  des clients sur la partie destinataire(clientD) et expediteur (clientE)

for(var i = 0; i< tab.length; i++){

    document.getElementById("nomClientD").innerHTML+="<Option>"+tab[i].nomS+ "</Option>";
    document.getElementById("nomClientE").innerHTML+="<Option>"+tab[i].nomS+ "</Option>";

}

// je remplis les champs au clic sur l'option destinataire
function  remplissage (x){
    for(var i=0; i<tab.length; i++){

        if(x==tab[i].nomS){
            document.getElementById("nsociete").value =tab[i].nomS;
            document.getElementById("client").value=tab[i].nom;
            document.getElementById("rue").value=tab[i].rue;
            document.getElementById("ville").value=tab[i].adresse;
            document.getElementById("telephone").value=tab[i].telephone;
        }
    }
}

// je remplis les champs au clic sur l'option expediteur
function  remplissage1 (x){
    for(var i=0;i<tab.length;i++){//je parcours ma boucle pour trouver l'element que je cherche et effectuer l'action liée

        if(x==tab[i].nomS){
            document.getElementById("nsocieteE").value =tab[i].nomS;
            document.getElementById("clientE").value=tab[i].nom;
            document.getElementById("rueE").value=tab[i].rue;
            document.getElementById("villeE").value=tab[i].adresse;
            document.getElementById("telephoneE").value=tab[i].telephone;
        }
    }
}

// reinitialise les champs au clic sur nouveau client

//destinataire
document.querySelectorAll("#nomClientD option")[0].addEventListener("click",function (){
    document.getElementById("nsociete").value ="";
    document.getElementById("client").value="";
    document.getElementById("rue").value="";
    document.getElementById("ville").value="";
    document.getElementById("telephone").value="";     
    });

//expediteur
document.querySelectorAll("#nomClientE option")[0].addEventListener("click",function (){
    document.getElementById("nsocieteE").value ="";
    document.getElementById("clientE").value="";
    document.getElementById("rueE").value="";
    document.getElementById("villeE").value="";
    document.getElementById("telephoneE").value="";     
    });


// j'applique l'evenement click à chaque option :il declenche le remplissage automatique des champs.Je n'oublie pas de preciser l'index pour lequel je cree l'evenement

// for(var i=1;i<document.querySelectorAll("#nomClientE option").length;i++){
//       document.querySelectorAll("#nomClientE option")[i].addEventListener("click",
//      function(){
//       var j =document.querySelectorAll("#nomClientE option")[i].innerHTML;
//       remplissage1(j);
//      } );
// }

   document.querySelectorAll("#nomClientD option")[1].addEventListener("click",change);

  function change(){
    var j =document.querySelectorAll("#nomClientD option")[1].innerHTML;
   remplissage(j);
   };

   document.querySelectorAll("#nomClientD option")[2].addEventListener("click",function (){
    var j =document.querySelectorAll("#nomClientD option")[2].innerHTML;
    remplissage(j);  
   });  

     document.querySelectorAll("#nomClientD option")[3].addEventListener("click",function(){
      var j =document.querySelectorAll("#nomClientD option")[3].innerHTML;
    remplissage(j);   
    }); 
    
   document.querySelectorAll("#nomClientE option")[1].addEventListener("click",function (){
    var j =document.querySelectorAll("#nomClientE option")[1].innerHTML;
   remplissage1(j);
  });  


   document.querySelectorAll("#nomClientE option")[2].addEventListener("click",function (){
     var j =document.querySelectorAll("#nomClientE option")[2].innerHTML;
    remplissage1(j);           
  });


   document.querySelectorAll("#nomClientE option")[3].addEventListener("click",

   function (){
     var j =document.querySelectorAll("#nomClientE option")[3].innerHTML;
    remplissage1(j);
    });

     //partie sur les produits
           
    function Produit(codepdt,libelle,prixU){
      this.codepdt=codepdt;
      this.libelle=libelle;
      this.prixU=prixU;
    }

    // creation de mes produits

    var produit1 = new Produit("0000","batavia",19.5);
    var produit2 = new Produit ("1111","mac",85);
    var produit3 = new Produit("2222","romaine",122);
    
    var tabpdt=[produit1,produit2,produit3];//j'inclus dans un seul tableau toutes mes propriétés pour pouvoir les appeler plus rapidement

     // remplissage de mes select 

       var code1=document.getElementById("codepdt1");
       code1.innerHTML+= "<option></option>";
       var code2=document.getElementById("codepdt2");
       code2.innerHTML+= "<option></option>";
       var code3=document.getElementById("codepdt3");
       code3.innerHTML+= "<option></option>";
       var code4=document.getElementById("codepdt4");
       code4.innerHTML+= "<option></option>";
      
     for(var i=0;i<tabpdt.length;i++){
        code1.innerHTML+= "<option>"+tabpdt[i].codepdt+"</option>";
        code2.innerHTML+= "<option>"+tabpdt[i].codepdt+"</option>";
        code3.innerHTML+= "<option>"+tabpdt[i].codepdt+"</option>";
        code4.innerHTML+= "<option>"+tabpdt[i].codepdt+"</option>";
        }

    // remplissage automatique libelle et prix unitaire
        function remplir(x){
          for(var i=0; i<tabpdt.length;i++){
            if(x==tabpdt[i].codepdt){
                document.getElementById("lib1").innerHTML=tabpdt[i].libelle;
                document.getElementById("prix1").innerHTML=tabpdt[i].prixU; 
            }
        }
    }

    function remplir1(x){
        for(var i=0; i<tabpdt.length;i++){
            if(x==tabpdt[i].codepdt){
                document.getElementById("lib2").innerHTML=tabpdt[i].libelle;
                document.getElementById("prix2").innerHTML=tabpdt[i].prixU; 
            }
        }
    }

    function remplir2(x){
        for(var i=0; i<tabpdt.length;i++){
            if(x==tabpdt[i].codepdt){
                document.getElementById("lib3").innerHTML=tabpdt[i].libelle;
                document.getElementById("prix3").innerHTML=tabpdt[i].prixU; 
            }
        }
    }

    function remplir3(x){
        for(var i=0; i<tabpdt.length;i++){
            if(x==tabpdt[i].codepdt){
                document.getElementById("lib4").innerHTML=tabpdt[i].libelle;
                document.getElementById("prix4").innerHTML=tabpdt[i].prixU; 
            }
        }
    }
   
      
//   produits de premiere ligne//l'evenement se fait au clic sur ma balise option de mon select id codepdt
 document.querySelectorAll("#codepdt1 option")[1].addEventListener("click",function (){
        var j = document.querySelectorAll("#codepdt1 option")[1].innerHTML; 
         remplir(j);        
   });

document.querySelectorAll("#codepdt1 option")[2].addEventListener("click",function (){
        var j = document.querySelectorAll("#codepdt1 option")[2].innerHTML;  
        remplir(j) ;  
});

document.querySelectorAll("#codepdt1 option")[3].addEventListener("click",function (){
        var j = document.querySelectorAll("#codepdt1 option")[3].innerHTML; 
        remplir(j) ;  
});
    
//  produits de la ligne 2

document.querySelectorAll("#codepdt2 option")[1].addEventListener("click",function (){
    var j = document.querySelectorAll("#codepdt2 option")[1].innerHTML;
    remplir1(j);          
});

document.querySelectorAll("#codepdt2 option")[2].addEventListener("click",function (){
    var j = document.querySelectorAll("#codepdt2 option")[2].innerHTML;     
    remplir1(j) ;  
});

document.querySelectorAll("#codepdt2 option")[3].addEventListener("click",function (){
    var j = document.querySelectorAll("#codepdt2 option")[3].innerHTML;
    remplir1(j) ;  
});

//  produits ligne 3

document.querySelectorAll("#codepdt3 option")[1].addEventListener("click",function (){
    var j = document.querySelectorAll("#codepdt3 option")[1].innerHTML;
    remplir2(j);          
});

document.querySelectorAll("#codepdt3 option")[2].addEventListener("click",function (){
    var j = document.querySelectorAll("#codepdt3 option")[2].innerHTML;
    remplir2(j) ;  
});

document.querySelectorAll("#codepdt3 option")[3].addEventListener("click",function (){
    var j = document.querySelectorAll("#codepdt3 option")[3].innerHTML;  
    remplir2(j) ;  
});


//  produits ligne 4

document.querySelectorAll("#codepdt4 option")[1].addEventListener("click",function (){
    var j = document.querySelectorAll("#codepdt4 option")[1].innerHTML;
    remplir3(j);   
});

document.querySelectorAll("#codepdt4 option")[2].addEventListener("click",function (){
    var j = document.querySelectorAll("#codepdt4 option")[2].innerHTML;
    remplir3(j) ;  
});

document.querySelectorAll("#codepdt4 option")[3].addEventListener("click",function (){
    var j = document.querySelectorAll("#codepdt4 option")[3].innerHTML;
    remplir3(j) ;  
});


    //  mettre les champs à zero si rien n'est selectionner

    document.querySelectorAll("#codepdt1 option")[0].addEventListener("click",function (){
    document.getElementById("lib1").innerHTML="";
    document.getElementById("prix1").innerHTML="";        
   });

   document.querySelectorAll("#codepdt2 option")[0].addEventListener("click",function (){
    document.getElementById("lib2").innerHTML="";
    document.getElementById("prix2").innerHTML=""; 
      });

      document.querySelectorAll("#codepdt3 option")[0].addEventListener("click",function (){
          document.getElementById("lib3").innerHTML="";
          document.getElementById("prix3").innerHTML="";  
     
     });

     document.querySelectorAll("#codepdt4 option")[0].addEventListener("click",function (){
          document.getElementById("lib4").innerHTML="";
          document.getElementById("prix4").innerHTML="";  
     
     });

    
// affichage montant ,tva,frais de port et montant ttc

// fonction qui calcule la tva
//    les frais de ports et manutention et 5% du montant d'achat ttc

function calcultva(x){
    return x*0.2;// tva=prix*(1+20/100);
}

document.getElementById("quantite").addEventListener("input",qteproduit);

function qteproduit(){
   var i=document.getElementById("quantite").value;
   var j=document.getElementById("prix1").innerHTML;
        var  k=i*j; 
        document.getElementById("prixht").innerHTML=k;  
}

document.getElementById("quantite1").addEventListener("input",qteproduit1);

function qteproduit1(){
    var i=document.getElementById("quantite1").value;
    var j=document.getElementById("prix2").innerHTML;
        var k=i*j;
        document.getElementById("prixht1").innerHTML=k; 
}


 document.getElementById("quantite2").addEventListener("input",qteproduit2);

 function qteproduit2(){
    var i=document.getElementById("quantite2").value;
    var j=document.getElementById("prix3").innerHTML;
        var k=i*j;
        document.getElementById("prixht2").innerHTML=k;  
}

// lorsqu'on remplit la derniere case on a tout le tableau 2 qui s'affiche et le message alternatif
document.getElementById("quantite3").addEventListener("input",qteproduit3);

function qteproduit3(){
    var i=document.getElementById("quantite3").value;
    var j=document.getElementById("prix4").innerHTML;
        var k=i*j;
         document.getElementById("prixht3").innerHTML=k;

       document.getElementById("stotal").innerHTML=parseFloat(document.getElementById("prixht").innerHTML)+
       parseFloat(document.getElementById("prixht1").innerHTML)+
      parseFloat(document.getElementById("prixht2").innerHTML)+parseFloat(document.getElementById("prixht3").innerHTML);

       document.getElementById("tva").innerHTML=calcultva( document.getElementById("stotal").innerHTML).toFixed(2);//je fixe a 2 le nombre de decimaux
      

       document.getElementById("port").innerHTML=  document.getElementById("stotal").innerHTML*5/100;//les frais de port representent 5% du sous-total

    //    prixTTC= ss-total+ tva + frais de port, je recupere donc le montant de mon sous-total auquel j'ajoute la tva et les frais de port
       document.getElementById("prixttc").innerHTML=
       parseFloat(document.getElementById("stotal").innerHTML)+parseFloat( document.getElementById("tva").innerHTML)+parseFloat(document.getElementById("port").innerHTML);
   

    //    correspond au paragraphe qui apparait lorsque le montant total depasse 1000€
       var bonus= parseFloat( document.getElementById("prixttc").innerHTML).toFixed(2);//sur la console, considérée comme string, donc pour eviter la concatenation, on ajoute parseFloat

//    if(bonus<=1000){
//  document.getElementById("remise").visibility=hidden;
//    } else if (bonus>1000){
//        bonus*5/100;
// document.getElementById("remise").visibility=visible;
//     }

       if(bonus>1000){//calcul du bonus de 5% dès 1000€ d'achat
             document.getElementById("remise").visibility="visible";
       }else{
             document.querySelector("#remise span").innerHTML= bonus*5/100;
       }

}  
       document.querySelector("#cheque span").innerHTML=document.querySelectorAll(".identite input")[0].value;

     document.querySelectorAll("#contact span")[0].innerHTML=document.querySelectorAll(".identite input")[2].value;

     document.querySelectorAll("#contact span")[1].innerHTML=document.querySelectorAll(".identite input")[3].value;

 


