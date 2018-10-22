var heure=Number(prompt("entrer une heure entre 00 et 24"));


if(heure >= 0 && heure <= 24){
   var minute=Number(prompt("entrer des minutes 0 et 60"));

   if (minute >= 0 && minute <= 59) {
       var seconde=Number(prompt("entrer des secondes 0 et 60"));

       if (seconde >= 0 && seconde <= 59) {
           seconde1=seconde+1;
           alert(heure +"H" +minute+ "m" +seconde1 +"s");
       } else {
           alert("entrer des secondes entre 00 et 59");
       }

   } else {
       alert("entrer des minutes entre 00 et 59");
   }

} else {
   alert("entrer une heure entre 00 et 24");
}