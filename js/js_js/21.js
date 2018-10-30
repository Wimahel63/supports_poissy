'use strict';
//declaration d'une variable
var nombre;

/* la boucle doit s'executer au moins une fois pour que la comparaison puisse s'effectuer; il faut donc utiliser DO...WHILE
*/

do
{
nombre = parseFloat(window.prompt('veuillez saisir un nombre: '));
}
while(isNaN(nombre)==true);

document.write('<p>merci, vous avez saisi <strong>' + nombre + '</strong>.</p>');