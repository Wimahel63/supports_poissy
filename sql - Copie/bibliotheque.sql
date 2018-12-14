--EXERCICE REQUETES IMBRIQUEES
  --Je crée une database bibliotheque, avec trois tables: livres, abonnés, emprunt
  CREATE DATABASE IF NOT EXISTS bibliotheque
  CREATE TABLE IF NOT EXISTS livres(
id_livres int(3)  NOT NULL AUTO_INCREMENT,
titre varchar (30) DEFAULT NULL,
auteur varchar (30) DEFAULT NULL, 
tome float DEFAULT NULL,
reference float DEFAULT NULL,
PRIMARY KEY (id_livres)
)ENGINE =InnoDB DEFAULT CHARSET=latin1;


INSERT INTO livres(id_livres, titre, auteur, tome, reference)VALUES
(100, ‘Harry Potter ’, ‘J K Rowling’, 1, 1),
(101,’Le seigneur des anneaux’, ‘JRR Tolkien’, 3, 2),
(102,’Le manoir’, ‘E Brisou’, 2, 3),
(103,’Percy Jackson’, ‘R Riordan’, 5, 4);


CREATE TABLE IF NOT EXISTS abonnes(
id_abonnes int(2)  NOT NULL AUTO_INCREMENT,
nom varchar (30) DEFAULT NULL,
prenom varchar (30) DEFAULT NULL, 
age float DEFAULT NULL,
PRIMARY KEY (id_abonnes)
)ENGINE =InnoDB DEFAULT CHARSET=latin1;

INSERT INTO abonnes(id_abonnes, nom, prenom, age)VALUES
(20, ‘Serge ’, ‘William’, 10),
(21,’Willelo’, ‘Elora’, 7),
(22,’Detroi’, ‘Helene’, 35),
(23,’Pollack’, ‘Rose’, 54);

CREATE TABLE IF NOT EXISTS emprunt(
id_emprunt int(2)  NOT NULL AUTO_INCREMENT,
id_livres int(3)  DEFAULT NULL,
id_abonnes int(2) DEFAULT NULL,
date_sortie DATE NOT NULL,
date_rendu DATE DEFAULT NULL,
PRIMARY KEY (id_emprunt)
)ENGINE =InnoDB ;


INSERT INTO emprunt(id_emprunt, id_livres, id_abonnes, date_sortie, date_rendu)VALUES
(1, 100, 20, '2014-12-17', '2014-12-18'),
(2, 101, 21, '2014-12-18', '2014-12-20'),
(3, 100, 22, '2014-12-19', '2014-12-22'),
(4, 103, 23, '2014-12-19', '2014-12-22');
(5, 102, 20, '2014-12-19', '2014-12-28'),
(6, 100, 23, '2015-03-20', '2015-03-26'),
(7, 101, 22, '2015-06-13', NULL),
(8, 103, 21, '2015-06-15', NULL);


--afficher mes livres
SELECT * FROM livres;
+-----------+-------------------------+-------------+------+-----------+
| id_livres | titre                   | auteur      | tome | reference |
+-----------+-------------------------+-------------+------+-----------+
|       100 | Harry Potter            | J K Rowling |    1 |         1 |
|       101 | Le seigneur des anneaux | JRR Tolkien |    3 |         2 |
|       102 | Le manoir               | E Brisou    |    2 |         3 |
|       103 | Percy Jackson           | R Riordan   |    5 |         4 |
+-----------+-------------------------+-------------+------+-----------+
4 rows in set (0.00 sec)

--le NULL ne prend pas =, uniquement is
SELECT * FROM emprunt WHERE date_rendu is NULL;
+------------+-----------+------------+-------------+------------+
| id_emprunt | id_livres | id_abonnes | date_sortie | date_rendu |
+------------+-----------+------------+-------------+------------+
|          7 |       101 |         22 | 2015-06-13  | NULL       |
|          8 |       103 |         21 | 2015-06-15  | NULL       |
+------------+-----------+------------+-------------+------------+

--afficher le titre des livres pas encore rendus

MariaDB [bibliotheque]> SELECT titre FROM livres WHERE id_livres IN (select id_livres from emprunt where date_rendu is NULL);
+-------------------------+
| titre                   |
+-------------------------+
| Le seigneur des anneaux |
| Percy Jackson           |
+-------------------------+

--afficher le titre des livres empruntés par Elora
MariaDB [bibliotheque]> select titre from livres where id_livres in (select id_livres from emprunt where id_abonnes=21);
+-------------------------+
| titre                   |
+-------------------------+
| Le seigneur des anneaux |
| Percy Jackson           |
+-------------------------+

--afficher le nb d'ouvrages empruntés par William
MariaDB [bibliotheque]> SELECT COUNT(*) AS 'nombre' FROM emprunt where id_abonnes=(select id_abonnes from abonnes where prenom='William');
+--------+
| nombre |
+--------+
|      2 |
+--------+


