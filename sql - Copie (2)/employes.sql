INSERT INTO employes (id_employes, prenom, nom, sexe, service, date_embauche, salaire) VALUES
(350, 'Jean-pierre', 'Laborde', 'm', 'direction', '1999-12-09', 5000),
(388, 'Clement', 'Gallet', 'm', 'commercial', '2000-01-15', 2300),
(415, 'Thomas', 'Winter', 'm', 'commercial', '2000-05-03', 3550),
(417, 'Chloe', 'Dubar', 'f', 'production', '2001-09-05', 1900),
(491, 'Elodie', 'Fellier', 'f', 'secretariat', '2002-02-22', 1600),
(509, 'Fabrice', 'Grand', 'm', 'comptabilite', '2003-02-20', 1900),
(547, 'Melanie', 'Collier', 'f', 'commercial', '2004-09-08', 3100),
(592, 'Laura', 'Blanchet', 'f', 'direction', '2005-06-09', 4500),
(627, 'Guillaume', 'Miller', 'm', 'commercial', '2006-07-02', 1900),
(655, 'Celine', 'Perrin', 'f', 'commercial', '2006-09-10', 2700),
(699, 'Julien', 'Cottet', 'm', 'secretariat', '2007-01-18', 1390),
(701, 'Mathieu', 'Vignal', 'm', 'informatique', '2008-12-03', 2000),
(739, 'Thierry', 'Desprez', 'm', 'secretariat', '2009-11-17', 1500),
(780, 'Amandine', 'Thoyer', 'f', 'communication', '2010-01-23', 1500),
(802, 'Damien', 'Durand', 'm', 'informatique', '2010-07-05', 2250),
(854, 'Daniel', 'Chevel', 'm', 'informatique', '2011-09-28', 1700),
(876, 'Nathalie', 'Martin', 'f', 'juridique', '2012-01-12', 3200),
(900, 'Benoit', 'Lagarde', 'm', 'production', '2013-01-03', 2550),
(933, 'Emilie', 'Sennard', 'f', 'commercial', '2014-09-11', 1800),
(990, 'Stephanie', 'Lafaye', 'f', 'assistant', '2015-06-02', 1775);

CREATE TABLE IF NOT EXISTS employes (
 id_employes int(3) NOT NULL AUTO_INCREMENT,
 prenom varchar(20) DEFAULT NULL,
 nom varchar(20) DEFAULT NULL,
 sexe enum('m','f') NOT NULL,
 service varchar(30) DEFAULT NULL,
 date_embauche date DEFAULT NULL,
 salaire float DEFAULT NULL,
 PRIMARY KEY (id_employes)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 ;

--exercice:
--Afficher la profession de l'employé 547
--afficher la date  d'embauche de : Amandine
--afficher le nombre de commerciaux
--afficher le cout des commerciaux sur une année 
--afficher le salaire moyen par service
--afficher le nombre de recrutements sur l'année 2010
--augmenter le salaire pour chaque employé de 100€
--afficher le nombre de services (differents)
--afficher les informations de l"employé du service commercial gagnant le salaire le plus elevé
--afficher l'employe ayant été embauché en dernier

--1 Afficher la profession de l'employé 547
MariaDB [entreprise]> SELECT service FROM employes WHERE id_employes='547';
+------------+
| service    |
+------------+
| commercial |
+------------+

--2 afficher la date  d'embauche de : Amandine

MariaDB [entreprise]> SELECT date_embauche FROM employes WHERE prenom='Amandine';
+---------------+
| date_embauche |
+---------------+
| 2010-01-23    |
+---------------+

--3 afficher le nombre de commerciaux

MariaDB [entreprise]> SELECT COUNT(*) FROM employes WHERE service='commercial';
+----------+
| COUNT(*) |
+----------+
|        6 |
+----------+

--je peux aussi ecrire SELECT COUNT(*) AS 'nombre' FROM employes WHERE service='commercial';  dans ce cas ma colonne s'appellera nombre et non count 

--4 afficher le cout des commerciaux sur une année 
MariaDB [entreprise]> SELECT SUM(salaire*12) FROM employes WHERE service='commercial';
+-----------------+
| SUM(salaire*12) |
+-----------------+
|          184200 |
+-----------------+

--5 afficher le salaire moyen par service

-- pour arrondir ,j'ecris : SELECT service, round (AVG(salaire)) FROM employes GROUP BY service;
MariaDB [entreprise]> SELECT AVG(salaire) FROM employes WHERE service='direction';
+--------------+
| AVG(salaire) |
+--------------+
|         4750 |
+--------------+
1 row in set (0.00 sec)

MariaDB [entreprise]> SELECT AVG(salaire) FROM employes WHERE service='commercial';
+--------------------+
| AVG(salaire)       |
+--------------------+
| 2558.3333333333335 |
+--------------------+
1 row in set (0.00 sec)

MariaDB [entreprise]> SELECT AVG(salaire) FROM employes WHERE service='production';
+--------------+
| AVG(salaire) |
+--------------+
|         2225 |
+--------------+
1 row in set (0.00 sec)

MariaDB [entreprise]> SELECT AVG(salaire) FROM employes WHERE service='secretariat';
+--------------------+
| AVG(salaire)       |
+--------------------+
| 1496.6666666666667 |
+--------------------+
1 row in set (0.00 sec)

MariaDB [entreprise]> SELECT AVG(salaire) FROM employes WHERE service='comptabilite';
+--------------+
| AVG(salaire) |
+--------------+
|         1900 |
+--------------+
1 row in set (0.00 sec)

MariaDB [entreprise]> SELECT service FROM employes ORDER BY service;
+---------------+
| service       |
+---------------+
| assistant     |
| commercial    |
| commercial    |
| commercial    |
| commercial    |
| commercial    |
| commercial    |
| communication |
| comptabilite  |
| direction     |
| direction     |
| informatique  |
| informatique  |
| informatique  |
| juridique     |
| production    |
| production    |
| secretariat   |
| secretariat   |
| secretariat   |
+---------------+
20 rows in set (0.00 sec)

MariaDB [entreprise]> SELECT DISTINCT(service);
ERROR 1054 (42S22): Unknown column 'service' in 'field list'
MariaDB [entreprise]>  SELECT DISTINCT(service) FROM employes;
+---------------+
| service       |
+---------------+
| direction     |
| commercial    |
| production    |
| secretariat   |
| comptabilite  |
| informatique  |
| communication |
| juridique     |
| assistant     |
+---------------+
9 rows in set (0.00 sec)

MariaDB [entreprise]>  SELECT AVG(salaire) FROM employes WHERE service='informatique';
+--------------------+
| AVG(salaire)       |
+--------------------+
| 1983.3333333333333 |
+--------------------+
1 row in set (0.00 sec)

MariaDB [entreprise]>  SELECT AVG(salaire) FROM employes WHERE service='communication;';
+--------------+
| AVG(salaire) |
+--------------+
|         NULL |
+--------------+
1 row in set (0.00 sec)

MariaDB [entreprise]>  SELECT AVG(salaire) FROM employes WHERE service='comptabilite';
+--------------+
| AVG(salaire) |
+--------------+
|         1900 |
+--------------+
1 row in set (0.00 sec)

MariaDB [entreprise]>  SELECT AVG(salaire) FROM employes WHERE service='juridique';
+--------------+
| AVG(salaire) |
+--------------+
|         3200 |
+--------------+
1 row in set (0.00 sec)

MariaDB [entreprise]>  SELECT AVG(salaire) FROM employes WHERE service='assistant';
+--------------+
| AVG(salaire) |
+--------------+
|         1775 |
+--------------+

--6 afficher le nombre de recrutements sur l'année 2010
--je peux aussi ecrire SELECT COUNT(*) AS 'nb de recrutement' FROM employes WHERE date_embauche BETWEEN '2010-01-01' AND '2010-12-31'; dans ce cas la colonne s'appelera nb de recrutement et non count(*)

-- autre possibilité: SELECT COUNT(*) FROM employes WHERE date_embauche LIKE '2010%';
--encore une possibilite:  SELECT COUNT(*) FROM employes WHERE date_embauche >= '2010-01-01' AND date_embauche <='2010-12-31';
--troisieme possibilité mais dans cet exemple la colonne s'appelera count(*)
MariaDB [entreprise]>  SELECT COUNT(*) FROM employes WHERE date_embauche BETWEEN '2010-01-01' AND '2010-12-12';
+----------+
| COUNT(*) |
+----------+
|        2 |
+----------+

--7 augmenter le salaire pour chaque employé de 100€

--/!\ Ne surtout pas oublier d'indiquer la valeur de base sinon la valeur qui sera affichée sera celle indiquée dans le update et non la somme du salaire de base + 100€
--ex: update employes set salaire=100; passera tous les salaires a 100. IL faut bien indiquer salaire=salaire+100 pour additionner

MariaDB [entreprise]> UPDATE employes SET salaire=salaire+100;
Query OK, 20 rows affected (0.01 sec)
Rows matched: 20  Changed: 20  Warnings: 0

--8 afficher le nombre de services (differents)
MariaDB [entreprise]>  SELECT COUNT(DISTINCT(service)) FROM employes;
+--------------------------+
| COUNT(DISTINCT(service)) |
+--------------------------+
|                        9 |
+--------------------------+

--9 afficher les informations de l"employé du service commercial gagnant le salaire le plus elevé
MariaDB [entreprise]> SELECT nom, prenom, salaire, service FROM employes WHERE service='commercial' AND  salaire=(SELECT MAX(salaire) FROM employes);

--ou, a tester en bonnes conditions (avec salaires corrects)
MariaDB [entreprise]> > SELECT nom, prenom, salaire, service FROM employes WHERE service='commercial' AND  salaire=(SELECT MAX(salaire) FROM employes WHERE service='commercial');

--10 afficher l'employe ayant été embauché en dernier
MariaDB [entreprise]> SELECT * FROM employes WHERE date_embauche=(SELECT MAX(date_embauche) FROM employes);
+-------------+-----------+--------+------+-----------+---------------+---------+
| id_employes | prenom    | nom    | sexe | service   | date_embauche | salaire |
+-------------+-----------+--------+------+-----------+---------------+---------+
|         990 | Stephanie | Lafaye | f    | assistant | 2015-06-02    |     200 |
+-------------+-----------+--------