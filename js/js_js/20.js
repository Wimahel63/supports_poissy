'use strict'; // mode strict du js

//declaration de 3 variablesvar computer;
        var player;
        var random;
        //Récuperation du choix du joueur
        player = window.prompt("Que choisissez-vous : pierre, feuille ou ciseau ?");
        //Récupération d'un nombre aleatoire entre 0 et 1 inclus
        random = Math.random();
        //Test du random
        console.log(random);
        if (random <= 0.33) {
            computer = 'pierre';
        }
        else if (random <= 0.66) {
            computer = 'feuille';
        }
        else {
            computer = 'ciseau'
        }
        document.write("<p>Choix de l'ordinateur : " + computer + '</p>');
        if (computer == player) {
            document.write('<p>Vous avez choisi la même chose : égalité !</p>');
        }
        else {
            // le joueur et l'ordinateur n'ont pas choisi la même chose la bataille commence !
            switch (computer) {
                case 'ciseau':
                    if (player == 'pierre') {
                        document.write("<p> La pierre écrase le ciseau : vous gagnez !</p>")
                    }
                    else // player == 'feuille'
                    {
                        document.write("<p> La feuille est découpée par le ciseau : vous perdez !</p>")
                    }
                    break;
                case 'pierre':
                    if (player == 'feuille') {
                        document.write("<p> La feuille envellope la pierre : vous gagnez !</p>")
                    }
                    else // player == 'ciseau'
                    {
                        document.write("<p> le ciseau est écrasé par la pierre : vous perdez !</p>")
                    }
                    break;
                case 'feuille':
                    if (player == 'pierre') {
                        document.write("<p> La pierre est envellopée par la feuille : vous perdez ! !</p>")
                    }
                    else // player == 'ciseau'
                    {
                        document.write("<p> le ciseau découpe la feuille : vous gagnez !</p>")
                    }
                    break;
            }
        }
    