// //pour un caroussel, je pars de mon image de base.A chaque clic sur le bouton, je passe a l'image suivante jusqu'a la derniere où je reviens à mon point de depart
// // je cree ma fonction
 var bouton =  document.querySelector("#changerImage");
if(typeof button != null)
 bouton.addEventListener('click', carroussel);

 function carroussel(){
     var monImage =  document.querySelector("#monImage");//je recupere la source de mon image
     var monImageSource = monImage.getAttribute("src");

    switch(monImageSource){
         case 'img/1.jpg':
         monImage.src = "../img/2.jpg";
         break;
         case '../img/2.jpg':
         monImage.src = "../img/3.jpg";
        break;
         case '../img/3.jpg':
         monImage.src = "../img/4.jpg";
         break;
         case '../img/4.jpg':
         monImage.src = "../img/1.jpg";
         break;
         

    }
 }

