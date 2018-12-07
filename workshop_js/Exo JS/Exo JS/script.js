
//Yvette
document.querySelector("button").addEventListener("click",envoi);
function envoi(e){
	document.querySelectorAll(".ligne")[0].innerHTML=
	document.getElementById("Name").value;

	document.querySelectorAll(".ligne")[1].innerHTML=
	document.getElementById("surname").value;

	document.querySelectorAll(".ligne")[2].innerHTML=
	document.getElementById("mail").value;

	document.querySelectorAll(".ligne")[3].innerHTML=
	document.getElementById("telephone").value;
	e.preventDefault();

};

//Sonia
var infoContact = document.querySelectorAll("input");
var bouton = document.querySelector("button");
var ligne = document.querySelector("tbody");

bouton.addEventListener("click", function(e){
	ligne.innerHTML += "<tr><td>" + infoContact[0].value + "</td><td>" + infoContact[1].value  + "</td><td>" + infoContact[2].value  +"</td><td>" + infoContact[3].value  + "</td></tr>";
	e.preventDefault();
});

// anas
var input =document.getElementsByTagName('input');
var td =document.getElementsByTagName('td');
var button=document.getElementsByTagName('button');

button[0].onclick = function(e){
	e.preventDefault();
	td[4].innerHTML=input[0].value;
	td[5].innerHTML=input[1].value;
	td[6].innerHTML=input[2].value;
	td[7].innerHTML=input[3].value;
}



// Mohamed Arrous 
var tb = document.querySelector("tbody");

var b = document.querySelector("button");

var inp = document.querySelectorAll("form input");

b.onclick = function (event) {
	event.preventDefault();
	if(
		   inp[0].value != "" 
		&& inp[1].value != "" 
		&& inp[2].value != "" 
		&& inp[3].value != "")
	{
 
		tb.innerHTML += "<tr>";

		tb.innerHTML += 
		 "<td>" +  inp[0].value + "</td>" +
		 "<td>" +  inp[1].value + "</td>" +
		 "<td>" +  inp[2].value + "</td>" +
		 "<td>" +  inp[3].value + "</td>";

		tb.innerHTML += "</tr>";

	}
}

//  **************ou plus simple********************
var tb = document.querySelector("tbody");

var b = document.querySelector("button");

var inp = document.querySelectorAll("form input");

b.onclick = function (e) {
	e.preventDefault();
	if(
		   inp[0].value != "" 
		&& inp[1].value != "" 
		&& inp[2].value != "" 
		&& inp[3].value != "")
	{
 
		tb.innerHTML += "<tr>";

		tb.innerHTML += remplir (0) + remplir (1) + remplir (2) + remplir (3);

		tb.innerHTML += "</tr>";

	}
}

function remplir (i) {
	console.log(i);
	return "<td>" +  inp[i].value + "</td>";
}