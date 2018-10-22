var moyenne=Number(prompt("Quelle est votre moyenne au baccalauréat?"));
if(moyenne<10){
    alert("Recalé ( Même joueur joue encore!!)");
} 

else if(moyenne >=10 && moyenne <=12){
    alert("Reçu mais peut mieux faire :-( ");
}

else if(moyenne >=12 && moyenne <=20){
    alert("Reçu avec mention : ne t'\endors pas sur tes lauriers!!");
}

else{
    alert("c'\est pas une note ça!!")
}