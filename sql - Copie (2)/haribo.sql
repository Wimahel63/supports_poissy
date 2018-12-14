/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
* Objectif : Créer dans PHPMyAdmin une base de données haribo dont la modélisation est ci-dessous, les étapes sont détaillées ensuite.
*/

/**
+---------------+----------------+------+------+---------+----------------+
| Field         | Type           | Null | Key  | Default | Extra          |
+---------------+----------------+------+------+---------+----------------+
| id_stagiaire  | int(11)        | NO   | PRI  | NULL    | auto_increment |
| prenom        | varchar(100)   | NO   |      | NULL    |                |
| yeux          | varchar(30)    | NO   |      | NULL    |                |
| genre         | enum('h','f')  | NO   |      | NULL    |                |
+---------------+----------------+------+------+---------+----------------+

+---------------+----------------+------+------+---------+----------------+
| Field         | Type           | Null | Key  | Default | Extra          |
+---------------+----------------+------+------+---------+----------------+
| id_bonbon     | int(11)        | NO   | PRI  | NULL    | auto_increment |
| nom           | varchar(100)   | NO   |      | NULL    |                |
| saveur        | varchar(100)   | NO   |      | NULL    |                |
+---------------+----------------+------+------+---------+----------------+
 
+---------------+----------------+------+------+---------+----------------+
| Field         | Type           | Null | Key  | Default | Extra          |
+---------------+----------------+------+------+---------+----------------+
| id_manger     | int(11)        | NO   | PRI  | NULL    | auto_increment |
| id_bonbon     | int(11)        | YES  |      | NULL    |                |
| id_stagiaire  | int(11)        | YES  |      | NULL    |                |
| date_manger   | date           | NO   |      | NULL    |                |
| quantite      | int(11)        | NO   |      | NULL    |                |
+---------------+----------------+------+------+---------+----------------+

*/

/**
* REQUETES A EFFECTUER dans PHPMyAdmin
*/

--1-- lister toutes les BDD de PHPMyAdmin
MariaDB [haribo]> show databases;
+--------------------+
| Database           |
+--------------------+
| bibliotheque       |
| entreprise         |
| haribo             |
| hotel              |
| information_schema |
| magalipi           |
| mhp                |
| mysql              |
| performance_schema |
| phpmyadmin         |
| test               |
+--------------------+

--2-- Créer une base de données SQL nommée HARIBO

MariaDB [hotel]> CREATE DATABASE IF NOT EXISTS haribo;
Query OK, 1 row affected (0.00 sec)

--3--
/**
* créer une table stagiaire
* qui comporte 3 champs :
* - id_stagiaire => nombre qui s'auto-incrémente, requis et clé primaire
* - prenom => 100 caractères, requis
* - couleur des yeux => 30 caractères, requis
* - genre => homme ou femme, requis
*/


CREATE TABLE IF NOT EXISTS stagiaire(
    id_stagiaire INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    prenom VARCHAR (100) NOT NULL,
    yeux VARCHAR (30) NOT NULL,
    genre enum('h','f') NOT NULL
);

INSERT INTO stagiaire (prenom, yeux, genre) VALUES 
('jhordan', 'marron','h'),
('marie','bleu','f'),
('louis','vert','h'),
('willow','vert','f'),
('wael','marron','h'),
('elora','gris','f'),
('alois','bleu','h'),
('amina','marron','f'),
('jorge','bleu','h'),
('william','gris','h'),
('rose','vert','f'),
('malik','marron','h');


MariaDB [haribo]> SELECT * FROM stagiaire;
+--------------+---------+--------+-------+
| id_stagiaire | prenom  | yeux   | genre |
+--------------+---------+--------+-------+
|            1 | jhordan | marron | h     |
|            2 | marie   | bleu   | f     |
|            3 | louis   | vert   | h     |
|            4 | willow  | vert   | f     |
|            5 | wael    | marron | h     |
|            6 | elora   | gris   | f     |
|            7 | alois   | bleu   | h     |
|            8 | amina   | marron | f     |
|            9 | jorge   | bleu   | h     |
|           10 | william | gris   | h     |
|           11 | rose    | vert   | f     |
|           12 | malik   | marron | h     |
+--------------+---------+--------+-------+
12 rows in set (0.00 sec)

--4--
/**
* insérer dans cette table les informations de votre groupe (faites un copier-coller des lignes ci-dessous) :
*/

--5--
/**
* créer une table bonbon
* qui comporte 3 champs :
* - id_bonbon => nombre qui s'auto-incrémente, requis et clé primaire
* - nom => 100 caractères, requis
* - saveur => 100 caractères, requis
*/

CREATE TABLE IF NOT EXISTS bonbons(
    id_bonbon INT(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nom VARCHAR(100) NOT NULL,
    saveur VARCHAR(100) NOT NULL
);

--6--
/**
* insérer dans cette table des bonbons haribo (faites un copier-coller des lignes ci-dessous) :
*/

INSERT INTO bonbons (nom, saveur) VALUES 
('dragibus', 'cola'),
('tagada', 'fraise'),
('tagada', 'purpule'),
('carensac', 'reglisse');


--7--
/**
* créer une table manger
* qui comporte 5 champs :
* - id_manger => nombre qui s'auto-incrémente, requis et clé primaire
* - id_stagiaire => champs de la table stagiaire
* - id_bonbon => champs de la table bonbon
* - date_manger => type date, requis
* - quantite => nombre, requis
*/


CREATE TABLE manger(
    id_manger int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    id_stagiaire INT(11) DEFAULT NULL,
    id_bonbon INT(11) DEFAULT NULL,
    date_manger DATE NOT NULL,
    quantite INT(11) NOT NULL
);
--8--
/**
* insérer dans la table manger des informations sur qui a consommé quel bonbon, quand et dans quelles quantités (faites un copier-coller des lignes ci-dessous) :
*/
INSERT INTO manger (id_bonbon, id_stagiaire, date_manger, quantite) VALUES
 (4,7,'2018-09-20', 5),
 (2,1,'2018-09-15', 2),
 (3,3,'2018-09-18', 1),
 (1,8,'2018-09-17', 9),
 (2,6,'2018-09-21', 6),
 (3,2,'2018-09-21', 4),
 (1,10,'2018-09-02', 0),
 (4,11,'2018-09-30', 3),
 (4,13,'2018-09-01', 6),
 (3,4,'2018-09-01', 7),
 (1,9,'2018-09-13', 12),
 (2,5,'2018-09-07', 8),
 (3,14,'2018-09-12', 1);

--9-- Lister les tables de la BDD *haribo*

MariaDB [haribo]> SHOW tables FROM haribo;
+------------------+
| Tables_in_haribo |
+------------------+
| bonbons          |
| manger           |
| stagiaire        |
+------------------+
3 rows in set (0.00 sec)

--10-- voir les paramètres de la table *bonbon*
MariaDB [haribo]> desc bonbons;
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| id_bonbon | int(11)      | NO   | PRI | NULL    | auto_increment |
| nom       | varchar(100) | NO   |     | NULL    |                |
| saveur    | varchar(100) | NO   |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
3 rows in set (0.01 sec)
--11-- Sélectionner tous les champs de tous les enregistrements de la table *stagiaire*
MariaDB [haribo]> SELECT * FROM stagiaire;
+--------------+---------+--------+-------+
| id_stagiaire | prenom  | yeux   | genre |
+--------------+---------+--------+-------+
|            1 | jhordan | marron | h     |
|            2 | marie   | bleu   | f     |
|            3 | louis   | vert   | h     |
|            4 | willow  | vert   | f     |
|            5 | wael    | marron | h     |
|            6 | elora   | gris   | f     |
|            7 | alois   | bleu   | h     |
|            8 | amina   | marron | f     |
|            9 | jorge   | bleu   | h     |
|           10 | william | gris   | h     |
|           11 | rose    | vert   | f     |
|           12 | malik   | marron | h     |
+--------------+---------+--------+-------+
12 rows in set (0.00 sec)
--12-- Rajouter un nouveau stagiaire *Patriiiick* en forçant la numérotation de l'id
INSERT INTO stagiaire (id_stagiaire, prenom, yeux, genre) VALUES 
(100,'Patriiiick','bleu','h');

MariaDB [haribo]> SELECT * FROM stagiaire;
+--------------+------------+--------+-------+
| id_stagiaire | prenom     | yeux   | genre |
+--------------+------------+--------+-------+
|            1 | jhordan    | marron | h     |
|            2 | marie      | bleu   | f     |
|            3 | louis      | vert   | h     |
|            4 | willow     | vert   | f     |
|            5 | wael       | marron | h     |
|            6 | elora      | gris   | f     |
|            7 | alois      | bleu   | h     |
|            8 | amina      | marron | f     |
|            9 | jorge      | bleu   | h     |
|           10 | william    | gris   | h     |
|           11 | rose       | vert   | f     |
|           12 | malik      | marron | h     |
|          100 | Patriiiick | bleu   | h     |
+--------------+------------+--------+-------+
--13-- Rajouter un nouveau stagiaire *Mila* SANS forcer la numérotation de l'id
INSERT INTO stagiaire(prenom, yeux, genre) VALUES('Mila','vert','f');

MariaDB [haribo]> SELECT * FROM stagiaire;
+--------------+------------+--------+-------+
| id_stagiaire | prenom     | yeux   | genre |
+--------------+------------+--------+-------+
|            1 | jhordan    | marron | h     |
|            2 | marie      | bleu   | f     |
|            3 | louis      | vert   | h     |
|            4 | willow     | vert   | f     |
|            5 | wael       | marron | h     |
|            6 | elora      | gris   | f     |
|            7 | alois      | bleu   | h     |
|            8 | amina      | marron | f     |
|            9 | jorge      | bleu   | h     |
|           10 | william    | gris   | h     |
|           11 | rose       | vert   | f     |
|           12 | malik      | marron | h     |
|          100 | Patriiiick | bleu   | h     |
|          101 | Mila       | vert   | f     |
+--------------+------------+--------+-------+
--14-- Changer le prénom du stagiaire qui a l'id 100 de *Patriiiick* à *Patrick*
UPDATE stagiaire SET prenom='Patrick' WHERE prenom='Patriiiick';
MariaDB [haribo]> SELECT * FROM stagiaire;
+--------------+---------+--------+-------+
| id_stagiaire | prenom  | yeux   | genre |
+--------------+---------+--------+-------+
|            1 | jhordan | marron | h     |
|            2 | marie   | bleu   | f     |
|            3 | louis   | vert   | h     |
|            4 | willow  | vert   | f     |
|            5 | wael    | marron | h     |
|            6 | elora   | gris   | f     |
|            7 | alois   | bleu   | h     |
|            8 | amina   | marron | f     |
|            9 | jorge   | bleu   | h     |
|           10 | william | gris   | h     |
|           11 | rose    | vert   | f     |
|           12 | malik   | marron | h     |
|          100 | Patrick | bleu   | h     |
|          101 | Mila    | vert   | f     |
+--------------+---------+--------+-------+
--15-- Rajouter dans la table manger que Patrick a mangé 5 Tagada purpule le 15 septembre
INSERT INTO manger (id_bonbon, id_stagiaire, date_manger, quantite)VALUES(3,100,'2018-09-15', 5);
--16-- Sélectionner tous les noms des bonbons

MariaDB [haribo]> SELECT nom FROM bonbons;
+----------+
| nom      |
+----------+
| dragibus |
| tagada   |
| tagada   |
| carensac |
+----------+
--17-- Sélectionner tous les noms des bonbons en enlevant les doublons
SELECT nom FROM bonbons GROUP BY nom;
MariaDB [haribo]> SELECT nom FROM bonbons GROUP BY nom;
+----------+
| nom      |
+----------+
| carensac |
| dragibus |
| tagada   |
+----------+
--18-- Récupérer les couleurs des yeux des stagiaires (Sélectionner plusieurs champs dans une table)
SELECT prenom,yeux FROM stagiaire;
MariaDB [haribo]> SELECT prenom,yeux FROM stagiaire;
+---------+--------+
| prenom  | yeux   |
+---------+--------+
| jhordan | marron |
| marie   | bleu   |
| louis   | vert   |
| willow  | vert   |
| wael    | marron |
| elora   | gris   |
| alois   | bleu   |
| amina   | marron |
| jorge   | bleu   |
| william | gris   |
| rose    | vert   |
| malik   | marron |
| Patrick | bleu   |
| Mila    | vert   |
+---------+--------+
--19-- Dédoublonner un résultat sur plusieurs champs

--20-- Sélectionner le stagiaire qui a l'id 5

MariaDB [haribo]> SELECT prenom FROM stagiaire WHERE id_stagiaire='5';
+--------+
| prenom |
+--------+
| wael   |
+--------+
1 row in set (0.00 sec)
--21-- Sélectionner tous les stagiaires qui ont les yeux marrons
SELECT id_stagiaire,prenom,yeux FROM stagiaire WHERE yeux='marron';

MariaDB [haribo]> SELECT id_stagiaire,prenom,yeux FROM stagiaire WHERE yeux='marron';
+--------------+---------+--------+
| id_stagiaire | prenom  | yeux   |
+--------------+---------+--------+
|            1 | jhordan | marron |
|            5 | wael    | marron |
|            8 | amina   | marron |
|           12 | malik   | marron |
+--------------+---------+--------+
--22-- Sélectionner tous les stagiaires dont l'id est plus grand que 9
select id_stagiaire,prenom FROM stagiaire WHERE id_stagiaire>9;

MariaDB [haribo]> select id_stagiaire,prenom FROM stagiaire WHERE id_stagiaire>9;
+--------------+---------+
| id_stagiaire | prenom  |
+--------------+---------+
|           10 | william |
|           11 | rose    |
|           12 | malik   |
|          100 | Patrick |
|          101 | Mila    |
+--------------+---------+
--23-- Sélectionner tous les stagiaires SAUF celui dont l'id est 13 (soyons supersticieux !) :!\ il y a 2 façons de faire
SELECT prenom, id_stagiaire FROM stagiaire WHERE id_stagiaire <>'13';

MariaDB [haribo]> SELECT prenom, id_stagiaire FROM stagiaire WHERE id_stagiaire <>'13';
+---------+--------------+
| prenom  | id_stagiaire |
+---------+--------------+
| jhordan |            1 |
| marie   |            2 |
| louis   |            3 |
| willow  |            4 |
| wael    |            5 |
| elora   |            6 |
| alois   |            7 |
| amina   |            8 |
| jorge   |            9 |
| william |           10 |
| rose    |           11 |
| malik   |           12 |
| Patrick |          100 |
| Mila    |          101 |
+---------+--------------+

--ou:
MariaDB [haribo]> SELECT prenom, id_stagiaire FROM stagiaire WHERE id_stagiaire !='13';
+---------+--------------+
| prenom  | id_stagiaire |
+---------+--------------+
| jhordan |            1 |
| marie   |            2 |
| louis   |            3 |
| willow  |            4 |
| wael    |            5 |
| elora   |            6 |
| alois   |            7 |
| amina   |            8 |
| jorge   |            9 |
| william |           10 |
| rose    |           11 |
| malik   |           12 |
| Patrick |          100 |
| Mila    |          101 |
+---------+--------------+
--24-- Sélectionner tous les stagiaires qui ont un id inférieur ou égal à 10
SELECT prenom, id_stagiaire FROM stagiaire WHERE id_stagiaire<='10';
MariaDB [haribo]> SELECT prenom, id_stagiaire FROM stagiaire WHERE id_stagiaire<='10';
+---------+--------------+
| prenom  | id_stagiaire |
+---------+--------------+
| jhordan |            1 |
| marie   |            2 |
| louis   |            3 |
| willow  |            4 |
| wael    |            5 |
| elora   |            6 |
| alois   |            7 |
| amina   |            8 |
| jorge   |            9 |
| william |           10 |
+---------+--------------+

--25-- Sélectionner tous les stagiaires dont l'id est compris entre 7 et 11
SELECT id_stagiaire, prenom FROM stagiaire WHERE id_stagiaire BETWEEN '7' AND '11';

MariaDB [haribo]> SELECT id_stagiaire, prenom FROM stagiaire WHERE id_stagiaire BETWEEN '7' AND '11';
+--------------+---------+
| id_stagiaire | prenom  |
+--------------+---------+
|            7 | alois   |
|            8 | amina   |
|            9 | jorge   |
|           10 | william |
|           11 | rose    |
+--------------+---------+
5 rows in set (0.00 sec)

--26-- Sélectionner les stagiaires dont le prénom commence par un *S*
SELECT prenom, id_stagiaire FROM stagiaire WHERE prenom LIKE 's%';
MariaDB [haribo]> SELECT prenom, id_stagiaire FROM stagiaire WHERE prenom LIKE 's%';
Empty set (0.00 sec)
-- il n'y a aucun stagiaire dans ma table dont le prenom commence par s

--27-- Trier les stagiaires femmes par id décroissant
SELECT prenom, id_stagiaire, genre FROM stagiaire WHERE genre IN('f') ORDER BY id_stagiaire desc;

MariaDB [haribo]> SELECT prenom, id_stagiaire, genre FROM stagiaire WHERE genre IN('f') ORDER BY id_stagiaire desc;
+--------+--------------+-------+
| prenom | id_stagiaire | genre |
+--------+--------------+-------+
| Mila   |          101 | f     |
| rose   |           11 | f     |
| amina  |            8 | f     |
| elora  |            6 | f     |
| willow |            4 | f     |
| marie  |            2 | f     |
+--------+--------------+-------+


--28-- Trier les stagiaires hommes par prénom dans l'ordre alphabétique
SELECT prenom, id_stagiaire,genre FROM stagiaire WHERE genre IN('h') ORDER BY prenom asc; 

MariaDB [haribo]> SELECT prenom, id_stagiaire,genre FROM stagiaire WHERE genre IN('h') ORDER BY prenom asc;
+---------+--------------+-------+
| prenom  | id_stagiaire | genre |
+---------+--------------+-------+
| alois   |            7 | h     |
| jhordan |            1 | h     |
| jorge   |            9 | h     |
| louis   |            3 | h     |
| malik   |           12 | h     |
| Patrick |          100 | h     |
| wael    |            5 | h     |
| william |           10 | h     |
+---------+--------------+-------+
--29-- Trier les stagiaires en affichant les femmes en premier et en classant les couleurs des yeux dans l'ordre alphabétique
SELECT prenom,id_stagiaire FROM stagiaire ORDER BY genre DESC, yeux ASC;

--30-- Limiter l'affichage d'une requête de sélection de tous les stagiaires aux 3 premires résultats

MariaDB [haribo]> SELECT prenom FROM stagiaire  LIMIT 0,3;
+---------+
| prenom  |
+---------+
| jhordan |
| marie   |
| louis   |
+---------+
3 rows in set (0.00 sec)
--31-- Limiter l'affichage d'une requête de sélection de tous les stagiaires à partir du 3ème résultat et des 5 suivants

 SELECT prenom FROM stagiaire LIMIT 3,5;
 
MariaDB [haribo]> SELECT prenom FROM stagiaire  LIMIT 3,5;
+--------+
| prenom |
+--------+
| willow |
| wael   |
| elora  |
| alois  |
| amina  |
+--------+
--32-- Afficher les 4 premiers stagiaires qui ont les yeux marron
SELECT prenom FROM stagiaire WHERE yeux IN('marron') limit 0,4;

MariaDB [haribo]> SELECT prenom FROM stagiaire WHERE yeux IN('marron') limit 0,4;
+---------+
| prenom  |
+---------+
| jhordan |
| wael    |
| amina   |
| malik   |
+---------+
--33-- Pareil mais en triant les prénoms dans l'ordre alphabétique

MariaDB [haribo]> SELECT prenom FROM stagiaire WHERE yeux IN('marron') ORDER BY prenom ASC limit 0,4;
+---------+
| prenom  |
+---------+
| amina   |
| jhordan |
| malik   |
| wael    |
+---------+
--34-- Compter le nombre de stagiaires
SELECT COUNT(*) FROM stagiaire;
MariaDB [haribo]> SELECT COUNT(*) FROM stagiaire;
+----------+
| COUNT(*) |
+----------+
|       14 |
+----------+
--35-- Compter le nombre de stagiaires hommes mais en changeant le nom de la colonne de résultat par *nb_stagiaires_H*
SELECT COUNT(*) AS 'nb_stagiaire_H' FROM stagiaire WHERE genre='h';
MariaDB [haribo]> SELECT COUNT(*) AS 'nb_stagiaire_H' FROM stagiaire WHERE genre='h';
+----------------+
| nb_stagiaire_H |
+----------------+
|              8 |
+----------------+
--36-- Compter le nombre de couleurs d'yeux différentes

SELECT COUNT(yeux) AS 'nb_couleurs_differentes' FROM stagiaire;
MariaDB [haribo]> SELECT COUNT(yeux) AS 'nb_couleurs_differentes' FROM stagiaire;
+-------------------------+
| nb_couleurs_differentes |
+-------------------------+
|                      14 |
+-------------------------+
--37-- Afficher le prénom et les yeux du stagiaire qui a l'id le plus petit
SELECT prenom, yeux FROM stagiaire WHERE id_stagiaire=(SELECT MIN(id_stagiaire) FROM stagiaire);

MariaDB [haribo]> SELECT prenom, yeux FROM stagiaire WHERE id_stagiaire=(SELECT MIN(id_stagiaire) FROM stagiaire);
+---------+--------+
| prenom  | yeux   |
+---------+--------+
| jhordan | marron |
+---------+--------+
--38-- Afficher le prénom et les yeux du stagiaire qui a l'id le plus grand /!\ c'est une requête imbriquée qu'il faut faire (requête sur le résultat d'une autre requête)
SELECT prenom, yeux FROM stagiaire WHERE id_stagiaire=(SELECT MAX(id_stagiaire) FROM stagiaire);

MariaDB [haribo]> SELECT prenom, yeux FROM stagiaire WHERE id_stagiaire=(SELECT MAX(id_stagiaire) FROM stagiaire);
+--------+------+
| prenom | yeux |
+--------+------+
| Mila   | vert |
+--------+------+
--39-- Afficher les stagiaires qui ont les yeux bleu et vert
SELECT prenom, id_stagiaire, yeux FROM stagiaire WHERE yeux!='marron';

MariaDB [haribo]> SELECT prenom, id_stagiaire, yeux FROM stagiaire WHERE yeux!='marron';
+---------+--------------+------+
| prenom  | id_stagiaire | yeux |
+---------+--------------+------+
| marie   |            2 | bleu |
| louis   |            3 | vert |
| willow  |            4 | vert |
| elora   |            6 | gris |
| alois   |            7 | bleu |
| jorge   |            9 | bleu |
| william |           10 | gris |
| rose    |           11 | vert |
| Patrick |          100 | bleu |
| Mila    |          101 | vert |
+---------+--------------+------+
--40-- A l'inverse maintenant, afficher les stagiaires qui n'ont pas les yeux bleu ni vert
SELECT prenom, id_stagiaire, yeux FROM stagiaire WHERE yeux='marron';
MariaDB [haribo]> SELECT prenom, id_stagiaire, yeux FROM stagiaire WHERE yeux='marron';
+---------+--------------+--------+
| prenom  | id_stagiaire | yeux   |
+---------+--------------+--------+
| jhordan |            1 | marron |
| wael    |            5 | marron |
| amina   |            8 | marron |
| malik   |           12 | marron |
+---------+--------------+--------+
MariaDB [haribo]> SELECT prenom, id_stagiaire, yeux FROM stagiaire WHERE yeux LIKE '%marron';
+---------+--------------+--------+
| prenom  | id_stagiaire | yeux   |
+---------+--------------+--------+
| jhordan |            1 | marron |
| wael    |            5 | marron |
| amina   |            8 | marron |
| malik   |           12 | marron |
+---------+--------------+--------+

--41-- récupérer tous les stagiaires qui ont mangé des bonbons, avec le détail de leurs consommations
SELECT stagiaire.prenom,manger.quantite FROM stagiaire LEFT JOIN manger ON stagiaire.id_stagiaire=manger.id_stagiaire;
MariaDB [haribo]> SELECT stagiaire.prenom,manger.quantite FROM stagiaire LEFT JOIN manger ON stagiaire.id_stagiaire=manger.id_stagiaire;
+---------+----------+
| prenom  | quantite |
+---------+----------+
| alois   |        5 |
| jhordan |        2 |
| louis   |        1 |
| amina   |        9 |
| elora   |        6 |
| marie   |        4 |
| william |        0 |
| rose    |        3 |
| willow  |        7 |
| jorge   |       12 |
| wael    |        8 |
| Patrick |        5 |
| malik   |     NULL |
| Mila    |     NULL |
+---------+----------+
14 rows in set (0.00 sec)
--42-- récupérer que les stagiaires qui ont mangé des bonbons, avec le détail de leurs consommations
SELECT stagiaire.prenom,manger.quantite FROM stagiaire LEFT JOIN manger ON stagiaire.id_stagiaire=manger.id_stagiaire AND like quantite IS NOT 'NULL' ;
SELECT stagiaire.prenom,manger.quantite FROM stagiaire LEFT JOIN manger ON stagiaire.id_stagiaire=manger.id_stagiaire WHERE quantite ='0' ;

--43-- prénom du stagiaire, le nom du bonbon, la date de consommation pour tous les stagiaires qui ont mangé au moins une fois

--44-- Afficher les quantités consommées par les stagiaires (uniquement ceux qui ont mangé !)

--45-- Calculer combien de bonbons ont été mangés au total par chaque stagiaire et afficher le nombre de fois où ils ont mangé

--46-- Afficher combien de bonbons ont été consommés au total
SELECT SUM(quantite) FROM manger;
MariaDB [haribo]> SELECT SUM(quantite) FROM manger;
+---------------+
| SUM(quantite) |
+---------------+
|            69 |
+---------------+

--47-- Afficher le total de *Tagada* consommées
-- SELECT SUM(quantite) FROM manger Where nom FROM bonbons like '%tagada';


--48-- Afficher les prénoms des stagiaires qui n'ont rien mangé
MariaDB [haribo]> SELECT stagiaire.prenom,manger.quantite FROM stagiaire LEFT JOIN manger ON stagiaire.id_stagiaire=manger.id_stagiaire WHERE quantite ='0' ;
+---------+----------+
| prenom  | quantite |
+---------+----------+
| william |        0 |
+---------+----------+
SELECT stagiaire.prenom,manger.quantite FROM stagiaire LEFT JOIN manger ON stagiaire.id_stagiaire=manger.id_stagiaire WHERE quantite is NULL ;
MariaDB [haribo]> SELECT stagiaire.prenom,manger.quantite FROM stagiaire LEFT JOIN manger ON stagiaire.id_stagiaire=manger.id_stagiaire WHERE quantite is NULL ;
+--------+----------+
| prenom | quantite |
+--------+----------+
| malik  |     NULL |
| Mila   |     NULL |
+--------+----------+
--dans mon tableau, 1 stagiaire avait mangé 0 bonbon et 2 ont une valeur null, d'ou la presence des deux requetes differentes
--49-- Afficher les saveurs des bonbons (sans doublons)
SELECT DISTINCT(saveur) FROM bonbons;

MariaDB [haribo]> SELECT DISTINCT(saveur) FROM bonbons;
+----------+
| saveur   |
+----------+
| cola     |
| fraise   |
| purpule  |
| reglisse |
+----------+
--50-- Afficher le prénom du stagiaire qui a mangé le plus de bonbons
SELECT prenom FROM stagiaire WHERE 