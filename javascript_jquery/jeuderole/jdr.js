function d(arg){
	document.write(arg + "<br>");
}

function Player(pseudo,sante,niveau,experience,classe,race,arme,degats,potionsante, potionforce,attaque,cible,remonte,restaure){      
	this.pseudo=pseudo,
	this.sante=sante,
	this.niveau=niveau,
	this.experience=experience,
	this.classe=classe,
	this.race=race,
	this.arme=arme,
	this.degats=degats,
	
	this.attaque=function(attaque){//fonctions definies dans la fonction generale Player
		this.attaque=attaque;
	}
	cible=function(cible){
		this.cible=cible;
	}
	remonte=function(remonte){
           this.remonte=sante+0.2;
	}
	restaure=function(restaure){
		this.restaure=sante+0.15;
	}
		
}

var elfe= new Player("Whitebat",100, 1, 0,"chassou", "elfe", "arc", 30 );

var troll = new Player("Gourk",100, 1, 0,"monstre", "troll","gourdin", 25);

var dragon= new Player("Luciole", 100, 1, 0,"incendiaire", "dragon","feu",40);

var harpie= new Player("Mona", 100, 1, 0, "mage", "harpie", "hurlements",20);

var humain= new Player("Ankou", 100, 1, 0, "guerrier", "humain", "hache",35);

d(elfe.pseudo+" " +"est une "+" " + elfe.race+" "+elfe.classe +" "+"de niveau :"+ elfe.niveau+ " "+ "avec "+ "  " +elfe.sante +" "+ "de PV" +", "+ elfe.experience + " "+" % d'experience"+ " "+ "qui manie fort bien l'" + " "+ elfe.arme+" "+" infligeant " +" "+ elfe.degats +" "+ "points de degat");


d(troll.pseudo+" " +"est un "+" " + troll.race+" "+troll.classe +" "+"de niveau :"+ troll.niveau+ " "+ "avec "+ "  " +troll.sante +" "+ "de PV" +", "+ troll.experience +" "+ "% d'experience"+ " "+ "qui aime faire mumuse avec son" + " "+ troll.arme + " :"+"occasionnant"+" "+troll.degats+" "+ "attention aux degats!!!");


d(dragon.pseudo+" " +"est un "+" " + dragon.race+" "+ "feroce"+" "+ "d'un temperament tres "+ " " +dragon.classe +" "+"de niveau :"+ dragon.niveau+ " "+ "avec "+ "  " +dragon.sante +" "+ "de PV" +", "+ dragon.experience + " "+" % d'experience"+ " "+ "qui assure une ambiance toujours chaleureuse grâce à son arme: le " + " "+ dragon.arme + " "+ "et ses " +" "+dragon.degats +" "+ "points de degat" );

d(harpie.pseudo+" " +"est une "+" " +"charmante"+" "+ harpie.race+" "+harpie.classe +" "+" de son état,"+ " "+"de niveau :"+ harpie.niveau+ " "+ "avec "+ "  " +harpie.sante +" "+ "de PV" +", "+ harpie.experience +" "+ "% d'experience"+ " "+ "et dont les" + " "+ harpie.arme + " " + " à "+ harpie.degats+" "+"points de degat" +" "+"sauront vous glacer le sang juste comme il faut!!");

d(humain.pseudo+" " +"est un "+" " + humain.race+" "+humain.classe +" "+"de niveau :"+ humain.niveau+ " "+ "avec "+ "  " +humain.sante +" "+ "de PV" +", "+ humain.experience +" "+ " % d'experience."+ " "+" Les"+" "+humain.degats+" "+"points de degat de sa double" + " "+ humain.arme + " "+"auront raison de tous vos doutes... et de votre tête");

d("<h2>Prêts?...Action</h2>");

/*
actions a faire: attaquer, soigner, sesoigner.
conditions prealables: *le vainqueur d'un combat gagne 50xp, atteint un nouveau level chaque 100xp mais l'xp augmente de 25% a chaque nouveau lvl
					   *les pv baissent en fonction des pdeg.Arrivé à
0 pv, le perso meurt
					   *les mages peuvent soigner et  se soigner et 
redonnent 50%pv;les perso peuvent utiliser des popo qui restaurent 20%pv ou 15%force
					   
Les actions
 
if un perso attaque , alors la cible perd n pv, n representant le nb de degats occasionnés

je definis mes actions pour chaque perso*/


function Player(attaque){   //mon player attaque, sante et degats sont                                                                impactés
	attaque(this.cible);   // this represente le perso en question et                            attaque l'action qu'il doit mener contre                            la cible

	                        //chaque fois qu'un perso est attaqué, sa    vie baisse du nb de degats infligés
	 cible.sante=cible.sante-attaque.degats;
	    d(this.attaque + "a attaqué " + this.cible+" ."+"\nla vie de "+this.cible +" "+"a baisse à " +" "+ cible.sante );
	}

	if(cible.sante==0){
		d(this.cible +" "+ "est mort");
	}
	else if (cible.sante>0){
		d(this.cible +"peut encore se battre ou prendre une potion qui lui rendra des pv ou des forces");
		if(this.cible && this.remonte){
			d(this.remonte +" "+"rend des pv a "+" "+ this.cible)
		}
		else if(this.cible && this.restaure){
			d(this.restaure + " "+ "rend des forces a "+ " "+this.cible)
		}
	}



d(elfe+" "+ "attaque"+ troll);
elfe.attaque(troll);

/*function appliquerTVA2(prixHT,TVA){
	var prixTTC = prixHT * (1+TVA/100);
	return prixTTC.toFixed(2);
}

d(appliquerTVA2(155,5.5));*/