
//onkeyup,onkeydown,onkeypress: evenements se produisant lorsque l'utilisateur presse une touche du clavier (onkeypress), appuie sur une touche du clavier jusqu'a retirer son doigt de la touche(onkeydown en association avec onkeyup)
//while...  : tant que j'ai des données, affiche-les dans mon tableau


/*****correction********/

/****methode 1*******/

document.querySelector("button").addEventListener('click',envoi);//je selectionne mon bouton et je lui applique un evenement et une fonction: selection avec doument.queryS, evenement avec addEventListener('click') et fonction envoi

//je cree ma fonction envoi en recuperant les elements du formulaire et les class du tableau html où je veux qu'ils apparaissent
function envoi(e){
    document.querySelectorAll(".ligne")[0].innerHTML=document.getElementById("name").value;
    document.querySelectorAll(".ligne")[1].innerHTML=document.getElementById("firstName").value;
    document.querySelectorAll(".ligne")[2].innerHTML=document.getElementById("email").value;
    document.querySelectorAll(".ligne")[3].innerHTML=document.getElementById("phone").value;
    e.preventDefault();//empeche le rafraichissement auto de ma page, ce qui enleve mes données
};
// class=ligne dans mes td


/******methode 2*******/

//avec ce code, je n'inscris pas mes td dans mon html, ils seront inclus dans mon js lorsque j'ecrirai le contenu de ma fonction
//je recupere et stocke mes boutons et inputs
var infoContact=document.querySelectorAll('input');
var bouton= document.querySelector('button');
var ligne= document.querySelector('tbody');

bouton.addEventListener("click",function(e){
    ligne.innerHTML += "<tr><td>"+infoContact[0].value + "</td><td>" +infoContact[1].value + "</td><td>" + infoContact[2].value + "</td><td>" + infoContact[3].value + "</td></tr>" ;
    e.preventDefault();
});
//lorsque je mets  += , j'indique que je veux ajouter tous les elements qui sont apres = a celui qui est avant le += dans mon html.Par ex ici, j'indique: "dans mes elements du tbody (representé par la var ligne, et qui correspondent aux td inclus dans mon tbody), je veux que tu ajoutes des <tr>, des "td" et les valeurs de mes infoContact"

/***methode 3*****/

//je recupere d'abord les elements sur lesquels je veux avoir une incidence, c-a-d les inputs dans lesquels je rentre mes données, mes td, dans lesquels je veux afficher mes données entrées en input, et le bouton, par lequel je fais l'action
var input=document.getElementsByTagName('input');
var td=document.getElementsByTagName('td');
var button=document.getElementsByTagName('button');

button[0].onclick =function(e){//ici, le e ne correspond qu'a l'event preventDefault
    e.preventDefault();
    td[4].innerHTML=input[0].value;  //td[4] correspond a ma 1ere case du tableau a remplir, input[0].value correspond a la valeur que je rentre dans mon premier input du formulaire, et ainsi de suite
    td[5].innerHTML=input[1].value;
    td[6].innerHTML=input[2].value;
    td[7].innerHTML=input[3].value;
}


/****methode 4*****/

var tb =document.querySelector("tbody");
var b = document.querySelector('button');
var inp= document.querySelectorAll('form input');// ici le form n'est pas obligatoire car il n'y a pas d'input ailleurs, mais je devrais specifier si j'ai, par ex., plusieurs form dans ma page

b.onclick = function (event){
    event.preventDefault();
    if(
        inp[0].value !="" //je regarde si mes input sont vides ou non, et j'indique a ma condition quoi faire si ils ne sont pas vides
        && inp[1].value !="" 
        && inp[2].value !=""
        && inp[3].value !="" 
    )
    {
        tb.innerHTML +="<tr>";
        tb.innerHTML +=
        "<td>"+ inp[0].value +"</td>"+
        "<td>"+ inp[1].value +"</td>"+
        "<td>"+ inp[2].value +"</td>"+
        "<td>"+ inp[3].value +"</td>";
        tb.innerHTML +="</tr>";
    }
}


/******meme methode en plus simple******* **/

var tb =document.querySelector("tbody");
var b = document.querySelector('button');
var inp= document.querySelectorAll('form input');
b.onclick = function (event){
    event.preventDefault();
    if(
        inp[0].value !="" //je regarde si mes input sont vides ou non, et j'indique a ma condition quoi faire si ils ne sont pas vides
        && inp[1].value !="" 
        && inp[2].value !=""
        && inp[3].value !="" 
    )
    {
        tb.innerHTML +="<tr>";
        tb.innerHTML +=remplir (0) + remplir (1) + remplir (2) + remplir (3);
        tb.innerHTML +="</tr>";
    }
}

function remplir(i){
    console.log(i); // pour connaitre sa longueur d'array
    return "<td>"+ inp[i].value + "</td>";
}


/******jquery********/


