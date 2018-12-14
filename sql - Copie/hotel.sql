--depuis votre terminal shell vous créez une database nommée 'hotel'.
--le modèle des tables est le suivant:
--CREATE table chambres(id int(3) primary key auto_increment not null, num_chambre int(3), prix float, nb_lit int, nb-pers int(3), confort  varchar(255),equipement varchar(255));

--CREATE TABLE clients(id int(3) , primary key auto_increment not null, num_client int(3), nom varchar(200), prenom varchar(200), adresse varchar(150));

--CREATE TABLE reservations(id int(3) primary key auto_increment not null, num_client int(5), num_chambre int(3), date_arrivee DATETIME, date_depart DATETIME);

-- Dans ces 3 tables inserer les infos suivantes:
  --5 chambres numerotées de 10 en 10, prix (80,100,150,180,250), nb_lit de 1 a 3 (aleatoire), confort(wc/douche/bain/etc), equipement(tv/wifi/etc)

  --INSERT INTO chambres (num_chambre, prix, nb_lit, nb_pers, confort, equipement)VALUES (20,115.00,3,4, 'salle de bain,wc', 'TV, WIFI,mini bar,sauna');

  --INSERT INTO chambres (num_chambre, prix, nb_lit, nb_pers, confort, equipement)VALUES (50,39.00,1,1,'douche,wc','TV, WIFI');

  --INSERT INTO chambres(num_chambre, prix, nb_lit, nb_pers, confort, equipement)VALUES (40,70.00,3,6,'douche,wc','TV, WIFI,mini bar');


--CREATE table chambres(id int(3) primary key auto_increment not null, num_chambre int(3), prix float, nb_lit int, nb-pers int(3), confort  varchar(255),equipement varchar(255));

--formule de base
CREATE TABLE chambres(
    id int(3)  PRIMARY KEY AUTO_INCREMENT NOT NULL,
    num_chambre int(3),
    prix FLOAT,
    nb_lit int, 
    nb_pers int(3),
    confort VARCHAR(255),
    equipement VARCHAR(255),
    (id_chambres)
)

INSERT INTO chambres(num_chambre, prix, nb_lit, nb_pers, confort, equipement)VALUES
(20,115.00,3,4, 'salle de bain,wc', 'TV, WIFI,mini bar,sauna'),
(50,39.00,1,1,'douche,wc','TV, WIFI'),
(40,70.00,3,6,'douche,wc','TV, WIFI,mini bar');

INSERT INTO chambres(num_chambre, prix, nb_lit, nb_pers, confort, equipement)VALUES
(60,120.00,2,4,'douche, wc','WIFI,TV, sauna'),
(30,85.00,2,1,'salle de bain, wc','wifi, mini bar, sauna');

CREATE TABLE IF NOT EXISTS chambres(
    id_chambres int(3) NOT NULL AUTO_INCREMENT,
    num_chambre int(3),
    prix FLOAT,
    nb_lit int(3), 
    nb_pers int(3),
    confort VARCHAR(255),
    equipement VARCHAR(255),
    PRIMARY KEY(id_chambres)
)ENGINE =InnoDB CHARSET=latin1;


INSERT INTO chambres(id_chambres,num_chambre, prix, nb_lit, nb_pers, confort, equipement)VALUES
(1,20,115.00,3,4, 'salle de bain,wc', 'TV, WIFI,mini bar,sauna');
(2,50,39.00,1,1,'douche,wc','TV, WIFI');
(3,40,70.00,3,6,'douche,wc','TV, WIFI,mini bar');


--enregistrer 5 clients avec des numeros clients a 4 chiffres(0001/1001), le reste des infos est a votre bon vouloir
CREATE TABLE clients(
    id INT(3) PRIMARY KEY auto_increment NOT NULL, 
    num_client INT(3), 
    nom VARCHAR(200), 
    prenom VARCHAR(200), 
    adresse VARCHAR(150)
    );

INSERT INTO clients(num_client,nom, prenom, adresse)VALUES
(001,'Murol','Pitt','113 rue des volcans, Puy-de-dome'),
(002,'Durocher','Willow','12 allée de la montagne, Pyrenées'),
(003,'Laflotte','Oceane','59 square de la mer, Biscarrosse'),
(004,'Duvent','Malo','1 boulevard Des vents, La Rochelle'),
(005,'Dynamo','Jeanne','63 impasse des imprimeurs, Paris');


--5 reservations de dates arbitraires
CREATE TABLE reservations(id int(3) primary key auto_increment not null, num_client int(5), num_chambre int(3), date_arrivee DATETIME, date_depart DATETIME);

INSERT INTO reservations(num_client, num_chambre, date_arrivee, date_depart)VALUES
(001,20,'2005-06-06','2005-06-20'),
(002,50,'2004-09-02','2004-09-18'),
(004,30,'2004-10-07','2004-10-30'),
(003,60,'2006-09-02',NULL),
(005,40,'2005-03-12',NULL);
--prix par pers des chambres avec tv
--numeros de chambre avec tv
--num de chambres et leur capacite
--capacite theorique d'accueil de l-hotel
--num des chamnbres et num des clients ayant reserve des chambres pour le 09/02/2004
--num des chambres coutant au max 80 € ou ayant un bain et vallant au max 120€
--noms,prenoms et adresses des clients dont le nom commence par D
--nb des chambres dont le prix est entre 85 et 120e
--noms des clients n'ayant pas fixe la date de leur depart

--SELECT prix
--FROM chambres 
--WHERE equipement='tv';

--SELECT num_chambre FROM chambres WHERE equipement='TV';
SELECT num_chambre FROM chambres WHERE equipement IN ('tv');

--correction

CREATE DATABASE hotel;

use hotel;

create table chambres(
id_chambres INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
num_chambre INT(4),
prix float,
nb_lit int(3),
nb_pers int(3),
confort VARCHAR(255),
equipement VARCHAR(255)
);

create table clients(
    id_clients INT(3) PRIMARY KEY auto_increment NOT NULL, 
    num_client INT(4), 
    nom VARCHAR(200), 
    prenom VARCHAR(200), 
    adresse VARCHAR(150)
);

CREATE TABLE reservations(
    id_reservations int(3) primary key auto_increment not null, 
    num_client int(5), 
    num_chambre int(3), 
    date_arrivee DATETIME, 
    date_depart DATETIME
    );

INSERT INTO chambres(num_chambre, prix, nb_lit, nb_pers, confort, equipement) VALUES (100, 80.00, 01,01, 'Aucun', 'TV'), (110, 100.00, 01, 01, 'Douche', 'TV'), (120, 150, 02, 02, 'Douche/WC', 'TV/WIFI'),(130, 180.00, 02, 03, 'WC/Bain', 'TV/WIFI/Frigo'), (140, 250.00, 03, 04, 'WC/Bain/Jacuzzi/Massage', 'TV/WIFI/Frigo/Cuisine/Bar');

INSERT INTO clients(num_client,nom, prenom, adresse)VALUES
(001,'Murol','Pitt','113 rue des volcans, Puy-de-dome'),
(002,'Durocher','Willow','12 allée de la montagne, Pyrenées'),
(003,'Laflotte','Oceane','59 square de la mer, Biscarrosse'),
(004,'Duvent','Malo','1 boulevard Des vents, La Rochelle'),
(005,'Dynamo','Jeanne','63 impasse des imprimeurs, Paris');

INSERT INTO reservations(num_client, num_chambre, date_arrivee, date_depart)VALUES
(001,20,'2005-06-06','2005-06-20'),
(002,50,'2004-09-02','2004-09-18'),
(004,30,'2004-10-07','2004-10-30'),
(003,60,'2006-09-02',NULL),
(005,40,'2005-03-12',NULL);

--1: prix par personne des chambres avec tv
SELECT prix/nb_pers FROM chambres WHERE equipement LIKE '%tv';

--2 
select num_chambre FROM chambres WHERE equipement like '%tv';

--3 num des chambres et capacite
SELECT num_chambre, nb_pers FROM chambres;

--4 capacite theorique de l'accueil
SELECT sum(nb_pers) FROM chambres;

--5 num des chamnbres et num des clients ayant reserve des chambres pour le 09/02/2004
 SELECT num_chambre, num_client FROM reservation WHERE date_arrivee = '2004-02-09 00:00:00';

--6 
SELECT num_chambre FROM chambres WHERE confort like'%bain%' AND prix BETWEEN 80 AND 120;

--7noms,prenoms et adresses des clients dont le nom commence par D
SELECT nom , prenom, adresse FROM clients WHERE nom like'%d';


--8 noms des clients n'ayant pas fixe la date de leur depart
SELECT nom FROM clients AS c, reservations AS r WHERE date_depart IS NULL and c.num_client=r.num_client;