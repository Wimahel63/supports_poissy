/*<script>
       function multiplication(x, y){
           //code de la tache a effectuer
           alert(x*y);
           return x * y;
       }
       var resultat=multiplication(5, 10);
       resultat +=2; //exemple donné en cours: achats en boutique, plus ajout de la TVA. Le + indique que je demande au navigateur de ne pas écraser les valeurs du dessus mais de les ajouter.
       alert(resultat);
       </script>*/

       var choix = prompt("choisis un nombre :");
       if ((choix >= 2) && (choix <= 9)){
           for(var i = 1; i<=10 ; i++){
               var res = choix*i;
               document.write(choix + "x" +i + "=" + res + "<br />");
           }
       }else{
           document.write("<h4>le chiffre doit être entre 2 et 9 !</h4>");
       }
           
       