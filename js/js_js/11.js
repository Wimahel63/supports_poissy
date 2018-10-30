var heure=Number(prompt("entrer une heure entre 00 et 23")),
    minute=Number(prompt("Indiquez une minute entre 0 et 59")),
    seconde=Number(prompt("Saisissez une seconde entre 0 et 59"));


if ((heure >= 0) && (heure<=23) && (minute >=0) && (minute <=59) && (seconde >=0) && (seconde <= 59)) {
     //&& 
     seconde++;
     if(seconde === 60) {
         seconde = 0;
         minute++;
         if(minute ===60){
             //a suivre sur slack
         }
     }
}



