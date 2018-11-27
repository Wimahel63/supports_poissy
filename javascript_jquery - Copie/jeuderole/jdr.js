function d(arg){
	document.write(arg + "<br>");
}

/*function Player(pseudo,sante,niveau,experience,classe,race,arme,degats,){      
	this.pseudo=pseudo,
	this.sante=sante,
	this.niveau=niveau,
	this.experience=experience,
	this.classe=classe,
	this.race=race,
	this.arme=arme,
	this.degats=degats,
	
	this.attaque=function(){//fonctions definies dans la fonction                                                    generale Player
			this.sante=this.sante-this.degats;
		}
	}
	// remonte=function(remonte){
    //        this.remonte=sante+0.2;
	// }
	// restaure=function(restaure){
	// 	this.restaure=sante+0.15;
	// }
			
var elfe= new Player("Whitebat",110, 1, 0,"chassou", "elfe", "arc", 30 );

var troll = new Player("Gourk",80, 1, 0,"monstre", "troll","gourdin", 25);

var dragon= new Player("Luciole", 160, 1, 0,"incendiaire", "dragon","feu",40);

var harpie= new Player("Mona", 75, 1, 0, "mage", "harpie", "hurlements",20);

var humain= new Player("Ankou", 90, 1, 0, "guerrier", "humain", "hache",35);


d(elfe.pseudo+" " +"est une "+" " + elfe.race+" "+elfe.classe +" "+"de niveau :"+ elfe.niveau+ " "+ "avec "+ "  " +elfe.sante +" "+ "de PV" +", "+ elfe.experience + " "+" % d'experience"+ " "+ "qui manie fort bien l'" + " "+ elfe.arme+" "+" infligeant " +" "+ elfe.degats +" "+ "points de degat"+"<br>");


d(troll.pseudo+" " +"est un "+" " + troll.race+" "+troll.classe +" "+"de niveau :"+ troll.niveau+ " "+ "avec "+ "  " +troll.sante +" "+ "de PV" +", "+ troll.experience +" "+ "% d'experience"+ " "+ "qui aime faire mumuse avec son" + " "+ troll.arme + " :"+"occasionnant"+" "+troll.degats+"points de degats: "+" "+ "attention aux degats!!!"+"<br>");


d(dragon.pseudo+" " +"est un "+" " + dragon.race+" "+ "feroce"+" "+ "d'un temperament tres "+ " " +dragon.classe +" "+"de niveau :"+ dragon.niveau+ " "+ "avec "+ "  " +dragon.sante +" "+ "de PV" +", "+ dragon.experience + " "+" % d'experience"+ " "+ "qui assure une ambiance toujours chaleureuse grâce à son arme: le " + " "+ dragon.arme + " "+ "et ses " +" "+dragon.degats +" "+ "points de degat" +"<br>");

d(harpie.pseudo+" " +"est une "+" " +"charmante"+" "+ harpie.race+" "+harpie.classe +" "+" de son état,"+ " "+"de niveau :"+ harpie.niveau+ " "+ "avec "+ "  " +harpie.sante +" "+ "de PV" +", "+ harpie.experience +" "+ "% d'experience"+ " "+ "et dont les" + " "+ harpie.arme + " " + " à "+ harpie.degats+" "+"points de degat" +" "+"sauront vous glacer le sang juste comme il faut!!"+"<br>");

d(humain.pseudo+" " +"est un "+" " + humain.race+" "+humain.classe +" "+"de niveau :"+ humain.niveau+ " "+ "avec "+ "  " +humain.sante +" "+ "de PV" +", "+ humain.experience +" "+ " % d'experience."+ " "+" Les"+" "+humain.degats+" "+"points de degat de sa double" + " "+ humain.arme + " "+"auront raison de tous vos doutes... et de votre tête"+"<br>");

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
 /*var sante=sante-degats;
elfe.attaque(troll);
 
d(elfe.pseudo + " "+ "attaque "+ " "+troll.pseudo + " "+ "et lui inflige" + " "+ elfe.degats+" "+"points de degats" +"<br>"+
"La sante de "+ " "+ troll.pseudo+ " "+ "  baisse  à"+ "  "+ sante+"<br>");

// var resultat=elfe.sante-troll.degats;

troll.attaque(elfe);
d(troll.pseudo + " "+ "se défend contre "+ " "+elfe.pseudo + " "+ "et lui inflige" + " "+ troll.degats+" "+"points de degats" +"<br>"+
"La sante de "+ " "+ elfe.pseudo+ " "+ "  baisse  à"+ "  "+ vie+"<br>");


elfe.attaque(troll);
var resultat=troll.sante-elfe.degats;
d(elfe.pseudo + " "+ "attaque "+ " "+troll.pseudo + " "+ "et lui inflige" + " "+ elfe.degats+" "+"points de degats");
d("La sante de "+ " "+ troll.pseudo+ " "+ "  baisse  à"+ "  "+ resultat+"<br>");

humain.attaque(troll);
var resultat=troll.sante-humain.degats;
d(humain.pseudo + " "+ "attaque "+ " "+troll.pseudo + " "+ "et lui inflige" + " "+ humain.degats+" "+"points de degats" +"<br>"+
"La sante de "+ " "+ troll.pseudo+ " "+ "  baisse  à"+ "  "+ resultat+"<br>");


troll.attaque(humain);
var resultat= humain.sante - troll.degats;
d(troll.pseudo + " "+ "se défend contre "+ " "+humain.pseudo + " "+ "et lui inflige" + " "+ troll.degats+" "+"points de degats" +"<br>"+
"La sante de "+ " "+ humain.pseudo+ " "+ "  baisse  à"+ "  "+ humain.sante+"<br>");
 

humain.attaque(troll);
 vie=troll.sante-humain.degats;
d(humain.pseudo + " "+ "attaque "+ " "+troll.pseudo + " "+ "et lui inflige" + " "+ humain.degats+" "+"points de degats" +"<br>"+
"La sante de "+ " "+ troll.pseudo+ " "+ "  baisse  à"+ "  "+ vie+"<br>");


dragon.attaque(harpie);
var vie=harpie.sante - dragon.degats;
	resultat=harpie.sante-dragon.degats;
	d(dragon.pseudo+" "+"a blesse"+" "+harpie.pseudo+""+", lui infligeant "+" "+dragon.degats+" "+"points de degats,lui baissant sa vie à"+" "+vie);*/



	/********************Correction*********************/


//une fonction est propre a l'objet qui lui est fixee

	var level_up= 100;//var destinee a augmenter le lvl lorsque les conditions sont reunies

	function Player(pseudo,classe,race,arme){      
		this.pseudo=pseudo,
		this.force=0,
		this.sante=0,
		this.classe=classe,
		this.race=race,
		this.arme=arme,
		this.xp=0,
		this.level=1,
		
		this.decrire=function(){//fonctions definies dans la fonction generale de Player, je cree une fonction decrire que je pourrais appeler par la suite 
			 switch(this.arme) {//j'attribue a chaque arme un montant de degats
				 case "hache":this.force=35;
				 break;
				 case "arc":this.force=30;
				 break;
				 case "feu":this.force=40;
				 break;
				 case "gourdin":this.force=20;
				 break;
				 case "hurlements":this.force=15;
				 break;
			 }                                              
		}
		switch(this.classe) {
			case "mage":
		} 

		this.attaquer=function(cible){//ma cible est definie ici
			if(cible.sante>0){
				var degats=this.force;//je cree une var qui permet de modifier
				d(this.pseudo+" "+" attaque...");//affiche l'action 
				cible.sante=cible.sante-degats;
				if(this.xp <= 0){
					d(this.pseudo )
				}
			}
		}
	 }//tout ce code doit etre dans la function player pour pouvoir etre pris en compte, sinon il sera undefined
// apres la presentation, je peux appeler les fonctions dont j'ai besoin
 elfe.attaquer(troll);//j'appelle ici ma fonction attaquer avec mon attaquant, elfe. et ma cible (troll)


 
/**
 * Created by yassine on 1/12/18.
 */
var level_up = 100;

function Personnage(pseudo, classe, race, arme) {
    this.pseudo = pseudo;
    this.force = 0;
    this.sante = 0;
    this.classe = classe;
    this.race = race;
    this.arme = arme,
    this.xp = 0;
    this.level = 1;
	
	//var monHero = new Personnage("kirikou","chasseur","elfe","epee");
	//monHero.decrire()
    this.decrire = function () {
		
        switch(this.arme){
            case "epee":this.force = 35;
            break;
            case "baton":this.force = 15;
            break;
            case "arc":this.force = 25;
            break;
            default: this.force = 10;
            break;
        }

        switch(this.classe){
            case "Guerrier":this.sante = 135;
                break;
            case "Magicien":this.sante = 115;
                break;
            case "Chasseur":this.sante = 125;
                break;
            default: this.sante = 100;
                break;
        }

        document.write("je vous présentes : " + this.pseudo + ' un ' + this.classe + ' avec ' + this.sante + " points de vies" + " de la race des " + this.race + ' et une force de ' + this.force + " et son arme " + this.arme + " avec " + this.xp + " points d'experiences et au niveau " + this.level +'<br><br>');
        },

		//monHero.attaquer(monstre)
        this.attaquer = function (cible) {
            if(cible.sante > 0) {
                var degats = this.force;
                document.write(this.pseudo + " attaque " + cible.pseudo + " et lui fait " + degats + " points de dégâts" + '<br><br>');
                cible.sante= cible.sante - degats;
                if(cible.sante <= 0) {
                    cible.sante = 0;
                    document.write(cible.pseudo + " est mort !!<br><br>");
                    this.xp += 100*50/100;
                    if(this.xp >= level_up) {
                        this.level += 1;
                        document.write("Level Up !<br><br>");
                        this.xp = 0;
                        level_up += level_up*25/100;
                    }
                }
                document.write(cible.pseudo + " lui reste " + cible.sante + " points de vies<br><br>");
            }
        },

        this.soigner = function(cible){
            if(this.classe == 'Magicien'){
                cible.sante = cible.sante + (cible.sante * 50/100);
                document.write(this.pseudo + " : tu as soigné " + cible.pseudo + '<br><br>');
            } else {
                document.write(this.pseudo + " : tu n'as pas le pouvoir de soigner <br><br>");
            }
        },
		
        this.prendrePotionSoins = function(){
            if(this.sante == 0){
                document.write("tu es mort tu ne peux pas te soigner !<br><br>");
            }
            else{
                this.sante = this.sante + (this.sante * 20/100);
                document.write(this.pseudo + " a prit une potion de vie sa sante est maintenant de : "+ this.sante +"<br><br>");
            }

        },
        this.prendrePotionForce = function(){
            if(this.sante == 0){
                document.write("tu es mort tu ne peux pas prendre de potion de force !<br><br>");
            }else{
                this.force = this.force + (this.force * 15/100);
                document.write(this.pseudo + " a prit une potion de force sa force est maintenant de : " + this.force +"<br><br>");
            }

        }
}

var guerrier = new Personnage("Conan","Guerrier", "Humain", "epee");
var chasseur = new Personnage("Hunter","Chasseur", "Elfe", "arc");
var magicien = new Personnage("Gandalf","Magicien", "Nain", "baton");
var monstre = new Personnage("Monster","Guerrier", "Orc", "dague");
var monstre2 = new Personnage("Monster2","Guerrier", "Orc", "dague");
var monstre3 = new Personnage("Monster3","Guerrier", "Orc", "dague");
guerrier.decrire();
chasseur.decrire();
magicien.decrire();
monstre.decrire();
guerrier.attaquer(monstre);
guerrier.attaquer(monstre);
guerrier.attaquer(monstre);
guerrier.attaquer(monstre);
guerrier.decrire();
guerrier.attaquer(monstre2);
guerrier.attaquer(monstre2);
guerrier.attaquer(monstre2);
monstre3.decrire();
magicien.attaquer(monstre3);
chasseur.attaquer(monstre3);
monstre3.attaquer(magicien);
monstre3.attaquer(magicien);
monstre3.attaquer(magicien);
magicien.prendrePotionSoins();
magicien.prendrePotionForce();
magicien.soigner(guerrier);
guerrier.decrire();