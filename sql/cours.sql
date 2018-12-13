--Une base de données (DataBase) est utile dans le cadre d'un projet informatique pour conserver des informations en memoire. A l'intérieur de la base de données (BDD), les informations sont classées, structurées et généralement regroupées par sujet. Dans la grande majorité des cas, une BDD est gérée par un logiciel moteur qui la manipule: un SGBD (Système de Gestion de Base de Données).

--MCD : Modèle Conceptuel de Données. 
--Le MCD permet de nous fournir un plan de notre base de données avant de la créer.

--SGBD : Système de Gestion de Base de Données
--Le SGBD permet d'accueillir, d'exploiter et de faire fonctionner les bases de données (moteur)
--Nous utilisons Mysql (d'autres SGBD existent: Oracle, SQL server, PostSQL etc).

--BDD : Base de Données
-- La BDD représente l'emplacement des données sauvegardées.

--SQL : Structured Query Language 
--Le langage  de requête sql nous permet d'échanger des informations avec la BDD. 
--Une fois que les informations ont été enregistrées, il est important de pouvoir les gérer (ajout, modifications, suppression, consultation)
--/!\ toutes ces actions de gestion et manipulation passeront par une requête SQL.


--MODELE MCD
--Avant de créer une BDD, il est essentiel de se poser et de réflechir sur la modélisation.
--En effet, une base de données va servir de support à une application informatique.
--Comment modéliser une BDD?
--nous pouvons modéliser sur papier si celle-ci n'est pas complexe mais dans la plupart des cas nous aurons besoin d'un logiciel pour nous accompagner et avoir une vue d'ensemble.
--Un logiciel connu permet de modéliser une BDD : Mysql Workbench.

--La modélisation se compose de différents tables (table= sujet).
--Par ex, si nous vendons des produits de notre site, nouss aurons 1 table produits et 1 table commande.


--LES TABLES
--1 sujet représente 1 table dans une BDD. Une table est un emplacement de sauvegarde. 
--Il faut réfléchir au sujet et à ses conséquences. Si nous vendons des produits nous aurons certainement une table membres (clients de mon site).Une table membres sera donc nécessaire.


--TYPES de COLONNES/ CHAMPS
--VARCHAR: type chaine de caractères, jusqu'à 256 caractères possibles. Ce type de champ est utilisé pour enregistrer un pseudo, un email, le titre d'un produit ou d'un article de blog etc.
--TEXT : chaîne de caractères illimitée, utilisée pour enregistrer le texte d'un article de blog
--INT : Numérique , permet d'enregistrer les numéros d'un champ servant d'identifiant, un prix, un code postal, le nombre d'un produit en stock etc.
--DATE: date, permet d'enregistrer la date d'enregistrement d'une commande, d'un article de blog etc.


--les IDENTIFIANTS (clé Primaire - PK Primary Key) 
--Les identifiants sont des champs systématiquement présents dans chaque table et ce, en PREMIERE POSITION  ------->>> clé primaire (PK)
--Pour éviter de choisir le numéro et faire des erreurs nous demanderons à le générer automatiquement avec l'Auto-Increment


--AUTO-INCREMENT
--C'est une option permettant de générer un numéro unique dans une colonne (champ) de type de clé primaire (identifiant)
--/!\ le 1er champ de chaque table sera systématiquement un 'id' qui sera PK (Primary Key) et AI (Auto-Increment).


--NULL / NOT NULL
--Dans chaque champ nous pourrons indiquer si nous acceptons les valeurs Null ou non (Not Null)
--NULL est un type de valeur en informatique évitant de laisser un champ vide si nous n'avons pas d'information à y déposer.

--LES RELATIONS
--exemple: un membre commande un produit (ou un produit est commandé par un membre) 
--Nous devrons enregistrer l'information dans une table commande
--pour cela, intéressons-nous aux cardinalités

--CARDINALITES
--elles permettent de connaitre le chiffre minimum et maximum d'enregistrement pour une relation. (cf voir exemple de la femme et de l'homme: un homme a une mere et une seule, mais une femme peut avoir plusieurs enfants) . la cardinalité se met dans la table où il y a plus de choix (0,n, cf exemple)

--TABLE De JOINTURE
--une table de jointure permet de faire le lien entre deux tables.
--exemple: une société de taxi qui possèdent des conducteurs (table conducteurs) et des vehicules (tables vehicules).
--1 conducteur peut conduire 0 ou plusieurs vehicules: relation (0, n)
--1 vehicule peut etre conduit par 0 ou plusieurs conducteurs : relation (0,n)
--comment savoir quel conducteur conduit quel vehicule? ou dans l'autre sens, quel vehicule est conduit par quel conducteur?

--une table de jointure nommée : conducteur_vehicule sera donc créée avec les champs suivants :
--id_conducteur_vehicule   (c'est dans cette table que l'on crée la relation, on la met donc en premier)
--id_conducteur (table conducteur)
--id_vehicule (table vehicule)

--REQUETES
--comment formuler une requête sql? en trois étapes:
--formulation
--execution
--résultat

--Il y a quatre grands types de requêtes possibles :
-- requête de sélection ( requête question-réponse: nous faisons une demande via une question et nous obtenons une réponse)
--requête d'insertion ( requête d'action, impact sur les données)
--requête de modification ( comme insertion)
--requête de suppression ( comme insertion et modification)
--Toujours finir les instructions par un ; sinon la requête ne sera pas prise en compte


--creation de ma table employés.Les majuscules ne sont pas obligatoires mais elles sont la norme
CREATE TABLE IF NOT EXISTS employes(
    id_employes int(3) NOT NULL AUTO_INCREMENT,
    prenom varchar(20) DEFAULT NULL,
    nom varchar(20) DEFAULT NULL,
    sexe enum('m','f') NOT NULL,
    service varchar(30) DEFAULT NULL,
    data_embauche date DEFAULT NULL,
    salaire float DEFAULT NULL,
    PRIMARY KEY (id_employes)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO employes(id_employes, prenom, nom, sexe, service, data_embauche, salaire)VALUES 
(350, 'jean-pierre','Laborde','m','direction','1999-12-09',5000),
(380,'Clement','Gallet','m','commercial','2000-01-15',2300),
(415,'Thomas','Winter','m','commercial','2000-05-03',3350),
(417,'Cloe','Dubar','f','production','2001-09-05',1900),
(491,'Elodie','Fellier','f','secretariat','2002-02-22',1600),
(509,'Celine','Perrin','f','commercial','2006-09-10',2700),
(690,'Matthieu','Vignal','m','informatique','2008-11-17',1500),
(739,'Thierry','Deprez','m','secretariat','2009-11-17',1900),
(900,'Benoit','Lagarde','m','production','2013-01-03',2550),
(933,'Emilie','Sennard','f','commercial','2001-09-05',1800),
(990,'Stephanie','Demonaco','f','assistante','2015-06-02',1775);


--Récapitulatif:

--creer une base de données
--CREATE DATABASE nomdelabase;

--utiliser une base de données:
--USE nomdelabase;

--Lister les bases de données
--SHOW DATABASES;

--Supprimer une BDD
--DROP nomdelabase;

--supprimer une table:
--DROP nomdelatable;

--Vider le contenu d'une table d'une base de données:
--TRUNCATE nomdelabase;

--Observer la structure d'une table:
--DESC nomdelatable;

--requete de selection:
--SELECT nomdechampdematable;  (FROM nomdechampdematable)

--pour afficher le nom et le prenom des employes travaillant dans l'entreprise
--SELECT nom, prenom FROM employes;
MariaDB [entreprise]> SELECT DISTINCT(service) FROM employes
    -> ;
+--------------+
| service      |
+--------------+
| direction    |
| commercial   |
| production   |
| secretariat  |
| informatique |
| assistante   |
| Formation    |
+--------------+

--pour afficher les services occupés dans l'entreprise en evitant les doublons
--SELECT DISTINCT(service)

--pour afficher TOUTES les colonnes:
--SELECT * FROM nomdelatable;   * prend en compte toutes mes colonnes


MariaDB [entreprise]> SELECT * FROM employes;
+-------------+-------------+----------+------+--------------+---------------+---------+
| id_employes | prenom      | nom      | sexe | service      | data_embauche | salaire |
+-------------+-------------+----------+------+--------------+---------------+---------+
|         350 | jean-pierre | Laborde  | m    | direction    | 1999-12-09    |    5000 |
|         380 | Clement     | Gallet   | m    | commercial   | 2000-01-15    |    2300 |
|         415 | Thomas      | Winter   | m    | commercial   | 2000-05-03    |    3350 |
|         417 | Cloe        | Dubar    | f    | production   | 2001-09-05    |    1900 |
|         491 | Elodie      | Fellier  | f    | secretariat  | 2002-02-22    |    1600 |
|         509 | Celine      | Perrin   | f    | commercial   | 2006-09-10    |    2700 |
|         690 | Matthieu    | Vignal   | m    | informatique | 2008-11-17    |    1500 |
|         739 | Thierry     | Deprez   | m    | secretariat  | 2009-11-17    |    1900 |
|         900 | Benoit      | Lagarde  | m    | production   | 2013-01-03    |    2550 |
|         933 | Emilie      | Sennard  | f    | commercial   | 2001-09-05    |    1800 |
|         990 | Stephanie   | Demonaco | f    | assistante   | 2015-06-02    |    1775 |
|         991 | Sandra      | Herisson | f    | Formation    | 2018-05-01    |    2500 |
|         992 | Houda       | Jardaar  | f    | Formation    | 2016-10-12    |    2500 |
+-------------+-------------+----------+------+--------------+---



--afficher le nom et le prenom des employes dun service informatique uniquement
--SELECT nom, prenom FROM employes WHERE service='informatique';

MariaDB [entreprise]> SELECT nom, prenom FROM employes WHERE service='informatique';
+--------+----------+
| nom    | prenom   |
+--------+----------+
| Vignal | Matthieu |
+--------+----------+
--dans le contexte sql, where signifie qui 'vient de' 

--afficher les salaries embauchés entre 2006 et 2010: 

MariaDB [entreprise]> SELECT nom, prenom FROM employes WHERE data_embauche BETWEEN '2006-09-10' AND '2010-01-01';
+--------+----------+
| nom    | prenom   |
+--------+----------+
| Perrin | Celine   |
| Vignal | Matthieu |
| Deprez | Thierry  |
+--------+----------+
3 rows in set (0.00 sec)

--avec la date courante:     


MariaDB [entreprise]>  SELECT nom, prenom FROM employes WHERE data_embauche BETWEEN '2006-09-10' AND CURDATE();
+----------+-----------+
| nom      | prenom    |
+----------+-----------+
| Perrin   | Celine    |
| Vignal   | Matthieu  |
| Deprez   | Thierry   |
| Lagarde  | Benoit    |
| Demonaco | Stephanie |
| Herisson | Sandra    |
| Jardaar  | Houda     |
| igoudgil | idir      |
+----------+-----------+

--afficher la liste des employés dont le prenom commence par c
--LIKE  et 'c%'
MariaDB [entreprise]> SELECT prenom FROM employes WHERE prenom LIKE 'c%';
+---------+
| prenom  |
+---------+
| Clement |
| Cloe    |
| Celine  |
+---------+

--pareil avec la lettre finale, ici le e 
--SELECT prenom FROM employes WHERE prenom LIKE '%e';

--ici, LIKE signifie "s'approchant de". Il nous permet d'annoncer une valeur approchant sans avoir pour autant la valeur exacte.
--Le % permet d'annoncer une suite de caractères quelconques.
--Dans note exemple, 'c%' signifie 'qui commence par la lettre c'.
--Dans le cas où on voudrait recuperer la liste des prenoms dont la derniere lettre est e, nous aurions '%e'

MariaDB [entreprise]> SELECT prenom FROM employes WHERE prenom LIKE '%e';
+-------------+
| prenom      |
+-------------+
| jean-pierre |
| Cloe        |
| Elodie      |
| Celine      |
| Emilie      |
| Stephanie   |
+-------------+


--OPERATEURS DE COMPARAISON
-- = 'est égal a' : ne permet de recuperer qu'un seul resultat
-- > 'strictement supérieur à'
-- < 'strictement infrieur à'
-- >= 'sup ou egal'
-- <= 'inf ou egal'
-- <> ou != 'est different de'

--afficher tous les employés qui ne font pas partis du serveice informatique

MariaDB [entreprise]> SELECT nom, prenom, service FROM employes WHERE service <>'informatique';
+----------+-------------+-------------+
| nom      | prenom      | service     |
+----------+-------------+-------------+
| Laborde  | jean-pierre | direction   |
| Gallet   | Clement     | commercial  |
| Winter   | Thomas      | commercial  |
| Dubar    | Cloe        | production  |
| Fellier  | Elodie      | secretariat |
| Perrin   | Celine      | commercial  |
| Deprez   | Thierry     | secretariat |
| Lagarde  | Benoit      | production  |
| Sennard  | Emilie      | commercial  |
| Demonaco | Stephanie   | assistante  |
| Herisson | Sandra      | Formation   |
| Jardaar  | Houda       | Formation   |
| igoudgil | idir        | formation   |
+----------+-------------+-------------+

--afficher tous les employés dont le salaire est sup a 3000 €

MariaDB [entreprise]> SELECT nom, prenom FROM employes WHERE salaire >= '3000';
+----------+-------------+
| nom      | prenom      |
+----------+-------------+
| Laborde  | jean-pierre |
| Winter   | Thomas      |
| igoudgil | idir        |
+----------+-------------+
--je peux bien sur ajoute salaire, sexe ou autre apres SELECT si je veux afficher toutes ces données relatives aux employés
--SELECT nom, prenom, salaire, service FROM employes WHERE salaire >= '3000';   dans ces cas la, les colonees incluant ces données s'afficheront également

MariaDB [entreprise]> SELECT nom, prenom, service, salaire FROM employes WHERE salaire >= '3000';
+----------+-------------+------------+---------+
| nom      | prenom      | service    | salaire |
+----------+-------------+------------+---------+
| Laborde  | jean-pierre | direction  |    5000 |
| Winter   | Thomas      | commercial |    3350 |
| igoudgil | idir        | formation  |    5000 |
+----------+-------------+------------+---------+

--afficher par ordre alphabétique par prenom:
MariaDB [entreprise]> SELECT prenom FROM employes ORDER BY prenom;
+-------------+
| prenom      |
+-------------+
| Benoit      |
| Celine      |
| Clement     |
| Cloe        |
| Elodie      |
| Emilie      |
| Houda       |
| idir        |
| jean-pierre |
| Matthieu    |
| Sandra      |
| Stephanie   |
| Thierry     |
| Thomas      |
+-------------+
--ou par nom:

MariaDB [entreprise]> SELECT nom FROM employes ORDER BY nom;
+----------+
| nom      |
+----------+
| Demonaco |
| Deprez   |
| Dubar    |
| Fellier  |
| Gallet   |
| Herisson |
| igoudgil |
| Jardaar  |
| Laborde  |
| Lagarde  |
| Perrin   |
| Sennard  |
| Vignal   |
| Winter   |
+----------+
--par defaut, c'est dans cet ordre, avec eventuellement ASC
--dans l'autre sens, je rajoute DESC pour descendant
--SELECT nom FROM employes ORDER BY nom DESC;
--SELECT nom FROM employes ORDER BY nom ASC;
MariaDB [entreprise]> SELECT nom,prenom, service,salaire FROM employes ORDER BY salaire DESC LIMIT 0,3;

--LIMIT (x,y) permet de limiter l'affichage; le premier chiffre indique que tu m'affiches a partir de la premiere ligne jusqu'a la troisieme

--MariaDB [entreprise]>  SELECT nom,prenom, service,salaire FROM employes ORDER BY salaire DESC LIMIT 3,3;
--ici le premier chiffre indique que je veux qu'il m'affiche trois lignes a partir de la troisieme ligne


--afficher le salaire annuel:
MariaDB [entreprise]> SELECT nom,prenom, salaire*12 FROM employes;
+----------+-------------+------------+
| nom      | prenom      | salaire*12 |
+----------+-------------+------------+
| Laborde  | jean-pierre |      60000 |
| Gallet   | Clement     |      27600 |
| Winter   | Thomas      |      40200 |
| Dubar    | Cloe        |      22800 |
| Fellier  | Elodie      |      19200 |
| Perrin   | Celine      |      32400 |
| Vignal   | Matthieu    |      18000 |
| Deprez   | Thierry     |      22800 |
| Lagarde  | Benoit      |      30600 |
| Sennard  | Emilie      |      21600 |
| Demonaco | Stephanie   |      21300 |
| Herisson | Sandra      |      30000 |
| Jardaar  | Houda       |      30000 |
| igoudgil | idir        |      60000 |
+----------+-------------+------------+

--si je ne veux pas afficher mon calcul dans ma colonne:

MariaDB [entreprise]> SELECT nom,prenom, salaire*12 AS salaire_annuel FROM employes;
+----------+-------------+----------------+
| nom      | prenom      | salaire_annuel |
+----------+-------------+----------------+
| Laborde  | jean-pierre |          60000 |
| Gallet   | Clement     |          27600 |
| Winter   | Thomas      |          40200 |
| Dubar    | Cloe        |          22800 |
| Fellier  | Elodie      |          19200 |
| Perrin   | Celine      |          32400 |
| Vignal   | Matthieu    |          18000 |
| Deprez   | Thierry     |          22800 |
| Lagarde  | Benoit      |          30600 |
| Sennard  | Emilie      |          21600 |
| Demonaco | Stephanie   |          21300 |
| Herisson | Sandra      |          30000 |
| Jardaar  | Houda       |          30000 |
| igoudgil | idir        |          60000 |
+----------+-------------+----------------+

--calculer la somme totale des salaires:

MariaDB [entreprise]> SELECT SUM(salaire*12) FROM employes;
+-----------------+
| SUM(salaire*12) |
+-----------------+
|          436500 |
+-----------------+

--calculer la moyenne des salaires:

MariaDB [entreprise]> SELECT AVG(salaire) FROM employes;
+-------------------+
| AVG(salaire)      |
+-------------------+
| 2598.214285714286 |
+-------------------+

--la cle AVG est une foncttion predefinie prenant comme argument entre parentheses () le nom de la colonne sur laquelle nous souhaitons calculer une moyenne 
--pour arrondir on utilise round()
 SELECT ROUND(AVG(salaire)) FROM employes;
+---------------------+
| ROUND(AVG(salaire)) |
+---------------------+
|                2598 |
+---------------------+

--ROUND est une fonction predefinie prenant comme argument entre parenthese() le nombre a arrondir

--COUNT 
-- SELECT COUNT(*) FROM employes WHERE sexe='f';
+----------+
| COUNT(*) |
+----------+
|        7 |
+----------+
--dans cet exemple je compte le nombre de femmes qu'il y a dans l'entreprise


--Isoler les valeurs les plus basses et hautes avec MIN / MAX

MariaDB [entreprise]> SELECT MIN(salaire) FROM employes;
+--------------+
| MIN(salaire) |
+--------------+
|         1500 |
+--------------+
1 row in set (0.00 sec)

MariaDB [entreprise]>  SELECT MAX(salaire) FROM employes;
+--------------+
| MAX(salaire) |
+--------------+
|         5000 |
+--------------+
--on ne peut cependant pas en l'état lui demander le prenom de la personne en question. Pour ce faire il faudra ecrire la requête de cette façon:

MariaDB [entreprise]> SELECT prenom, nom, salaire FROM employes WHERE salaire=(SELECT MIN(salaire) FROM employes);
+----------+--------+---------+
| prenom   | nom    | salaire |
+----------+--------+---------+
| Matthieu | Vignal |    1500 |
+----------+--------+---------+
--afficher le nom de la des employes qui touchent le plus:
MariaDB [entreprise]> SELECT prenom, nom, salaire FROM employes WHERE salaire=5000;
+-------------+----------+---------+
| prenom      | nom      | salaire |
+-------------+----------+---------+
| jean-pierre | Laborde  |    5000 |
| idir        | igoudgil |    5000 |
+-------------+----------+---------

--IN: affiche les elemlents qui contiennent les données specifiées entre parentheses

MariaDB [entreprise]> SELECT prenom, nom, service FROM employes WHERE service IN('informatique','direction');
+-------------+---------+--------------+
| prenom      | nom     | service      |
+-------------+---------+--------------+
| jean-pierre | Laborde | direction    |
| Matthieu    | Vignal  | informatique |
+-------------+---------+--------------+

--NOT IN : affichent tous les elemnts dont les valeurs ne comprennent pas les valeurs comprises entre les parentheses

MariaDB [entreprise]>  SELECT prenom, nom, service FROM employes WHERE service NOT IN('informatique','direction');
+-----------+----------+-------------+
| prenom    | nom      | service     |
+-----------+----------+-------------+
| Clement   | Gallet   | commercial  |
| Thomas    | Winter   | commercial  |
| Cloe      | Dubar    | production  |
| Elodie    | Fellier  | secretariat |
| Celine    | Perrin   | commercial  |
| Thierry   | Deprez   | secretariat |
| Benoit    | Lagarde  | production  |
| Emilie    | Sennard  | commercial  |
| Stephanie | Demonaco | assistante  |
| Sandra    | Herisson | Formation   |
| Houda     | Jardaar  | Formation   |
| idir      | igoudgil | formation   |
+-----------+----------+-------------+



--selection non specifiée prend en compte le service prod et aussi le salaire des gens de 1900 ou de 2300 or service prod
MariaDB [entreprise]> SELECT prenom, nom, service, salaire FROM employes WHERE service='production' AND salaire=1900 OR salaire=2300;
+---------+--------+------------+---------+
| prenom  | nom    | service    | salaire |
+---------+--------+------------+---------+
| Clement | Gallet | commercial |    2300 |
| Cloe    | Dubar  | production |    1900 |
+---------+--------+------------+---------+
--hors (), le systeme lit la condition de la droite vers la gauche. Pour qu'il lise de la gauche vers la droite, il faut ajouter des parentheses
MariaDB [entreprise]> SELECT prenom, nom, service, salaire FROM employes WHERE service='production' AND (salaire=1900 OR salaire=2300);
+--------+-------+------------+---------+
| prenom | nom   | service    | salaire |
+--------+-------+------------+---------+
| Cloe   | Dubar | production |    1900 |
+--------+-------+------------+


--je veux afficher les services, compter les employes en nombre dans la table employés, grouper par service
MariaDB [entreprise]> SELECT service, COUNT(*) AS nombre FROM employes GROUP BY service;
+--------------+--------+
| service      | nombre |
+--------------+--------+
| assistante   |      1 |
| commercial   |      4 |
| direction    |      1 |
| Formation    |      3 |
| informatique |      1 |
| production   |      2 |
| secretariat  |      2 |
+--------------+--------+

--count compte les elements et by permet de les grouper


--HAVING:
MariaDB [entreprise]> SELECT service, COUNT(*) AS nombre FROM employes GROUP BY service HAVING COUNT(*)>1;
+-------------+--------+
| service     | nombre |
+-------------+--------+
| commercial  |      4 |
| Formation   |      3 |
| production  |      2 |
| secretariat |      2 |
+-------------+--------+
--ici je selectionne les services dans lesquels il y a plus de 1 employé



--REQUETES INSERTION:

--j'insere des nouvelles données dans ma BDD: plusieurs methodes:

--INSERT INTO employes(nom,prenom,sexe,service,data_embauche,salaire) VALUES('houda','JAADAR','f','informatique','2018-12-12','3500');

--INSERT INTO employes VALUES('','Assa','TRAORE','f','informatique','2016-12-12','2700');

--SELECT * FROM employes; pour afficher dans ma ligne de commande la table et verifier que mes nouvelles données ont bien ete ajoutées

--Si je veux changer une données, par ex le salaire d'Assa, je fais:

MariaDB [entreprise]> UPDATE employes SET salaire=3000 WHERE prenom='Assa';

--je veux supprimer une ligne: je selectionne par id:
 delete from employes where id_employes ='994';


 --je veux supprimer tous mes employés du service informatique
  delete from employes where service ='informatique';

  --MEMO sur les REQUETES de SELECTION
     --SELECT / FROM / DISTINCT / WHERE / BETWEEN / CURDATE / LIKE / % / OPERATEURS DE COMPARAISON / ORDER BY / ASC / DESC / LIMIT / AS pour l'alias / SUM / AVG / ROUND / COUNT / MIN / MAX / IN / NOT IN / CONDITIONS MULTIPLES / HAVING 

-- MEMO SUR LES REQUETES DE SELECTION D'INSERTION
 --INSERT   IN... VALUES

 --MEMO SUR LES REQUETES DE SELECTION UPDATE
 --UPDATE.....SET....WHERE

 --MEMO SUR LES REQUETES DE SELECTION DELETE
  --DELETE ...FROM....WHERE...


  --jamais d'espace entre count et () sinon il y aura un message d'erreur


  --EXERCICE REQUETES IMBRIQUEES
  --bibliotheque, trois tables: livres, abonnés, emprunt
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




CREATE DATABASE IF NOT EXISTS  bibliotheque ;

USE bibliotheque ;

CREATE TABLE abonne (
 id_abonne INT(3) NOT NULL AUTO_INCREMENT,
 prenom VARCHAR(20) NOT NULL,
 PRIMARY KEY (id_abonne)
) ENGINE=InnoDB ;

CREATE TABLE emprunt (
 id_emprunt INT(3) NOT NULL AUTO_INCREMENT,
 id_livre INT(3) DEFAULT NULL,
 id_abonne INT(3) DEFAULT NULL,
 date_sortie DATE NOT NULL,
 date_rendu DATE DEFAULT NULL,
 PRIMARY KEY  (id_emprunt)
) ENGINE=InnoDB ;

CREATE TABLE livre (
 id_livre INT(3) NOT NULL AUTO_INCREMENT,
 auteur VARCHAR(30) NOT NULL,
 titre VARCHAR(30) NOT NULL,
 PRIMARY KEY (id_livre)
) ENGINE=InnoDB ;
INSERT INTO abonnes (id_abonnes,nom, prenom, age) VALUES
(5,'Petit', 'Guillaume',27),
(6, 'Pepere','Benoit',15),
(7, 'Poisson','Chloe',21),
(8, 'Parrioux','Laura',70);

INSERT INTO livres (id_livres, titre, auteur, tome, reference) VALUES
(107, 'GUY DE MAUPASSANT', 'Une vie',1,6),
(108, 'GUY DE MAUPASSANT', 'Bel-Ami ',3,7),
(109, 'HONORE DE BALZAC', 'Le père Goriot',9,10),
(110, 'ALPHONSE DAUDET', 'Le Petit chose',11,20),
(111, 'ALEXANDRE DUMAS', 'La Reine Margot',2,12),
(112, 'ALEXANDRE DUMAS', 'Les Trois Mousquetaires',2,14);

INSERT INTO emprunt (id_emprunt, id_livre, id_abonne, date_sortie, date_rendu) VALUES
(5, 100, 1, '2014-12-17', '2014-12-18'),
(6, 101, 2, '2014-12-18', '2014-12-20'),
(7, 100, 3, '2014-12-19', '2014-12-22'),
(8, 103, 4, '2014-12-19', '2014-12-22'),
(9, 104, 1, '2014-12-19', '2014-12-28'),
(10, 105, 2, '2015-03-20', '2015-03-26'),
(11, 110, 3, '2015-06-13', NULL),
(12, 100, 2, '2015-06-15', NULL);

--JOINTURES SQL
-- Tout comme les requêtes imbriquées, les jointures sql permettent d'effectuer des requetes sur plusieurs tables.
--L'avantage des jointures est que l'on peut obtenir le resultat final des colonnes /champ issus de plusieurs tables differentes

SELECT a.prenom, e.date_sortie, e.date_rendu
FROM abonnes a, emprunt e
WHERE a.id_abonnes=e.id_abonnes
AND a.prenom="guillaume";

 SELECT date_sortie, date_rendu from emprunt where id_abonnes =(select id_abonnes from abonnes where prenom="william");
--nous pouvons tout faire avec une jointure, ce qui n'est pas le cas de la requete imbriquée.
-- nous utiliserons  quand même la requête imbriquée si nous visons uniquement des colonnes d'une seule table dans le tableau final (plus optimisé)



--jointure
SELECT e.date_sortie, e.date_rendu
FROM emprunt e, livre l
WHERE l.id_livres=e.id_livres
AND l.auteur='JRR Tolkien';
MariaDB [bibliotheque]> SELECT e.date_sortie, e.date_rendu FROM emprunt e, livres l WHERE l.id_livres=e.id_livres AND l.auteur='JRR Tolkien';
+-------------+------------+
| date_sortie | date_rendu |
+-------------+------------+
| 2014-12-18  | 2014-12-20 |
| 2015-06-13  | NULL       |
+-------------+------------+
--version requete imbriquee:
SELECT date_sortie, date_rendu FROM emprunt WHERE id_livres=(select id_livres FROM livres WHERE auteur='JRR Tolkien');
+-------------+------------+
| date_sortie | date_rendu |
+-------------+------------+
| 2014-12-18  | 2014-12-20 |
| 2015-06-13  | NULL       |
+-------------+------------+

--je veux afficher date de sortie et dates d'entree qui se trouvent dans la table emprunt où  l'id_livres serait = a ,tu vas me chercher l'id_livres de ma table livres (pour les joindre), où l'auteur est tolkien.

--qui a emprunté le livre une vie en 2014?
SELECT e.date_sortie , a.prenom, l.titre
FROM emprunt e, abonnes a, livres l
WHERE l.id_livres=e.id_livres
AND a.id_abonnes=e.id_abonnes
AND l.titre='une vie'
AND e.date_sortie>"2014-01-01"
AND e.date_sortie<'2014-12-31';



-- Qui a emprunté le livre 'Une Vie' sur l'année 2014 ?
SELECT a.prenom, e.date_sortie, l.titre
FROM abonnes a, livres l, emprunt e
WHERE l.id_livres=e.id_livres
AND a.id_abonnes=e.id_abonnes
AND l.titre="Une Vie"
AND e.date_sortie>"2014-01-01"
AND e.date_sortie<"2014-12-31";
+-----------+-------------+---------+
| prenom    | date_sortie | titre   |
+-----------+-------------+---------+
| Guillaume | 2014-12-17  | Une vie |
| Chloe     | 2014-12-19  | Une vie |
+-----------+-------------+---------+

--  SELECT date_sortie FROM emprunt where id_livres=(select id_livres from livres where titre='une vie') AND where id_abonnes=(select prenom from abonnes);

SELECT a.prenom
FROM abonne a, emprunt e, livre l
WHERE l.id_livre = e.id_livre
AND e.id_abonne = a.id_abonne
AND l.titre = 'Une vie'
AND e.date_sortie LIKE '2014%';
+-----------+
| prenom    |
+-----------+
| Guillaume |
| Chloe     |
+-----------+
--Ligne 1 - SELECT - Nous selectionnons les champs que nous souhaitons obtenir dans le résultat : prenom (nous utilisons des préfixes)
--Ligne 2 - FROM - Nous annonçons les tables dont nous aurons besoin pour réussir notre requête, dans notre cas : abonne, livre, emprunt. (nous définissons les préfixes)
--Ligne 3 - WHERE - La condition WHERE permet d'assurer le croisement des données entre la table livre et la table emprunt. Nous passons par notre champ commun id_livre.
--Ligne 4 - AND - La condition AND permet également d'effectuer une jointure, cette fois-ci entre la table abonne et la table emprunt. Nous passons par notre champ commun id_abonne.
--Ligne 5 - AND - La condition AND permet de cibler le livre ayant pour titre "Une vie" (conformément à la demande de départ).
--Ligne 6 - AND - La condition AND permet de cibler la date de sortie à l'année 2014 (conformément à la demande de départ).

--qui a emprunte le livre une vie en 2014 

SELECT prenom FROM abonnes WHERE id_abonnes IN(SELECT id_abonnes FROM emprunt WHERE date_sortie like '2014%' and id_livres=(select id_livres from livres where titre="une vie"));

SELECT  a.prenom , count(e.id_livres) as 'nombre de livres empruntes'
FROM abonnes a, emprunt e
WHERE a.id_abonnes=e.id_abonnes
GROUP BY e.id_abonnes;
---------+----------------------------+
| prenom  | nombre de livres empruntes |
+---------+----------------------------+
| William |                          2 |
| Elora   |                          2 |
| Helene  |                          3 |
| Rose    |                          2 |
+---------+----------------------------+
--Explications :
----
--Ligne 1 - SELECT - Nous selectionnons le champ prenom et comptons le nombre de références id_livre dans la table emprunt (nous aurions pu choisir n'importe quel champ de la table emprunt pour ce calcul, du moment oùu le champ choisi est issu de la table emprunt). Nous utilisons des préfixes. (prefixes= a., e. ...)

--Ligne 2 - FROM - Nous annonçons les tables dont nous aurons besoin pour réussir notre requête, dans notre cas : abonne, emprunt. (nous définissons les préfixes: a correspond a abonnes, e correspond a emprunt...)

--Ligne 3 - WHERE - La condition WHERE permet d'assurer le croisement des données entre la table abonne et la table emprunt. Nous passons par notre champ commun id_abonne.( je dois me demander quel est l"elemnt commun entre mes tables abonnes et emprunt, en l'occurence ici il s'agit de l'id_abonnes, qui est present dans les deux tables)

--Ligne 4 - GROUP BY - Cette ligne nous permet de faire des regroupements pour répartir le calcul pour chacun des abonnés.

--je veux afficher les prenoms et les id des livres empruntes

MariaDB [bibliotheque]> SELECT a.prenom, e.id_livres
    -> FROM abonnes a, emprunt e
    -> WHERE a.id_abonnes=e.id_abonnes;
+---------+-----------+
| prenom  | id_livres |
+---------+-----------+
| William |       100 |
| Elora   |       101 |
| Helene  |       100 |
| Rose    |       103 |
| William |       102 |
| Rose    |       100 |
| Helene  |       101 |
| Elora   |       103 |
| Laura   |       107 |
+---------+-----------+


--jointures externes
--afficher le prenom des abonnes avec le numero des livres qu'ils ont empruntés

MariaDB [bibliotheque]> SELECT abonnes.prenom, emprunt.id_livres
    -> FROM abonnes LEFT JOIN emprunt
    -> ON abonnes.id_abonnes=emprunt.id_abonnes;
+-----------+-----------+
| prenom    | id_livres |
+-----------+-----------+
| William   |       100 |
| Elora     |       101 |
| Helene    |       100 |
| Rose      |       103 |
| William   |       102 |
| Rose      |       100 |
| Helene    |       101 |
| Elora     |       103 |
| Laura     |       107 |
| Guillaume |      NULL |
| Benoit    |      NULL |
| Chloe     |      NULL |
| Jean      |      NULL |
| Mag       |      NULL |
| alex      |      NULL |
+-----------+-----------+

--from-left join: la table placée a gauche de l'expression left join sera la table dont tous les resultats seront rapatries (sans correspondance exigée dans l'autre table)  
--on : la condition se fait par les mots cles on et non plus par WHERE dans le cadre d'une requete externe type left join, right join, (full n'etant pas valable sous mysql)
--ex boutique, avec une table membre, si un membre efface son compte, le left join conserve quand meme son historique, meme si son nom n'apparait plus son historique existe toujours)

--UNION
MariaDB [bibliotheque]> SELECT auteur as 'liste personne physique' FROM livres UNION select prenom from abonnes;
+-------------------------+
| liste personne physique |
+-------------------------+
| J K Rowling             |
| JRR Tolkien             |
| E Brisou                |
| R Riordan               |
| Picca et erroc          |
| Mum                     |
| Une vie                 |
| Bel-Ami                 |
| Le père Goriot          |
| Le Petit chose          |
| La Reine Margot         |
| Les Trois Mousquetaires |
| Guillaume               |
| Benoit                  |
| Chloe                   |
| Laura                   |
| William                 |
| Elora                   |
| Helene                  |
| Rose                    |
| Jean                    |
| Mag                     |
| alex                    |
+-------------------------+

--LES FONCTIONS
--fonctions predefinies : 
--SELECT CURDATE();  affiche la date courante  exemple: reserver une chambre d'hotel
--SELECT CURDATE()+0; affiche la date courante sans tiret
--SELECT CURTIME();  affiche l'heure courante
--SELECT NOW(); affiche la date et l'heure courante
--SELECT DATE_ADD('2018-12-12', INTERVAL 31 DAY);  affiche 31 jours apres la date donnee.on peut mettre le nombre de jours voulu
--SELECT DATE_FORMAT('2018-12-13 17:01:59', '%d/%m/%Y -  %H:%i:%s');  redefinit la date au format francais . attention aux majuscules:)
--SELECT * , DATE_FORMAT(date_rendu, 'le %d/%m/%Y') FROM emprunt; dans cet exemple j'ai change la presentation des dates dans ma table emprunt en ligne de commande dans ma bdd bibliotheque
--SELECT CONCAT('a','b', 'c');  concatene les donnees entre les parentheses
--SELECT CONCAT_WS('-','a','b', 'c');  ici j'ai definis mes elements a concatener en separant avec - et pas , .
--SELECT LENGTH('magali'); compte la longueur d'une chaine de caracteres
--SELECT SUBSTRING('bonjour', 4);  affiche a partir de la 4e lettre
--SELECT TRIM('     bonjour');  supptrime les espaces en debut ou fin de chaine de caracteres
--SELECT DATABASE(); indique quelle base de données est en cours d'utilisation
--SELECT LAST_INSERT_ID();  indique quel est le dernier identifiant genere par une base de donnees apres une requete insert
--SELECT PASSWORD('mypassword'); permet de hacher le mdp

--ON peut meme creer nos propres fonctions
MariaDB [bibliotheque]> SELECT auteur as 'liste personne physique' FROM livres UNION select prenom from abonnes;
+-------------------------+
| liste personne physique |
+-------------------------+
| J K Rowling             |
| JRR Tolkien             |
| E Brisou                |
| R Riordan               |
| Picca et erroc          |
| Mum                     |
| Une vie                 |
| Bel-Ami                 |
| Le père Goriot          |
| Le Petit chose          |
| La Reine Margot         |
| Les Trois Mousquetaires |
| Guillaume               |
| Benoit                  |
| Chloe                   |
| Laura                   |
| William                 |
| Elora                   |
| Helene                  |
| Rose                    |
| Jean                    |
| Mag                     |
| alex                    |
+-------------------------+
23 rows in set (0.00 sec)

MariaDB [bibliotheque]> SELECT CURDATE();
+------------+
| CURDATE()  |
+------------+
| 2018-12-13 |
+------------+
1 row in set (0.00 sec)

MariaDB [bibliotheque]> SELECT NOW();
+---------------------+
| NOW()               |
+---------------------+
| 2018-12-13 16:57:58 |
+---------------------+
1 row in set (0.00 sec)

MariaDB [bibliotheque]> SELECT CURDATE()+0;
+-------------+
| CURDATE()+0 |
+-------------+
|    20181213 |
+-------------+
1 row in set (0.00 sec)

MariaDB [bibliotheque]> SELECT DATE_ADD(2018-12-12, INTERVAL 31 DAY);
+---------------------------------------+
| DATE_ADD(2018-12-12, INTERVAL 31 DAY) |
+---------------------------------------+
| NULL                                  |
+---------------------------------------+
1 row in set, 1 warning (0.00 sec)

MariaDB [bibliotheque]> SELECT DATE_ADD('2018-12-12', INTERVAL 31 DAY);
+-----------------------------------------+
| DATE_ADD('2018-12-12', INTERVAL 31 DAY) |
+-----------------------------------------+
| 2019-01-12                              |
+-----------------------------------------+
1 row in set (0.00 sec)

MariaDB [bibliotheque]> SELECT DATE_ADD('2018-12-12', INTERVAL 120 DAY);
+------------------------------------------+
| DATE_ADD('2018-12-12', INTERVAL 120 DAY) |
+------------------------------------------+
| 2019-04-11                               |
+------------------------------------------+
1 row in set (0.00 sec)

MariaDB [bibliotheque]> SELECT DATE_FORMAT('2018-12-13 17:01:59', '%d/%m/%y -  %h:%i:%s');
+------------------------------------------------------------+
| DATE_FORMAT('2018-12-13 17:01:59', '%d/%m/%y -  %h:%i:%s') |
+------------------------------------------------------------+
| 13/12/18 -  05:01:59                                       |
+------------------------------------------------------------+
1 row in set (0.00 sec)

MariaDB [bibliotheque]> SELECT * , DATE_FORMAT(date_rendu, 'le %d/%m%Y') FROM emprunt;
+------------+-----------+------------+-------------+------------+---------------------------------------+
| id_emprunt | id_livres | id_abonnes | date_sortie | date_rendu | DATE_FORMAT(date_rendu, 'le %d/%m%Y') |
+------------+-----------+------------+-------------+------------+---------------------------------------+
|          1 |       100 |         20 | 2014-12-17  | 2014-12-18 | le 18/122014                          |
|          2 |       101 |         21 | 2014-12-18  | 2014-12-20 | le 20/122014                          |
|          3 |       100 |         22 | 2014-12-19  | 2014-12-22 | le 22/122014                          |
|          4 |       103 |         23 | 2014-12-19  | 2014-12-22 | le 22/122014                          |
|          5 |       102 |         20 | 2014-12-19  | 2014-12-28 | le 28/122014                          |
|          6 |       100 |         23 | 2015-03-20  | 2015-03-26 | le 26/032015                          |
|          7 |       101 |         22 | 2015-06-13  | NULL       | NULL                                  |
|          8 |       103 |         21 | 2015-06-15  | NULL       | NULL                                  |
|         10 |       107 |          8 | 2014-10-12  | 2014-12-31 | le 31/122014                          |
+------------+-----------+------------+-------------+------------+---------------------------------------+
9 rows in set (0.00 sec)

MariaDB [bibliotheque]> SELECT * , DATE_FORMAT(date_rendu, 'le %d/%m/%Y') FROM emprunt;
+------------+-----------+------------+-------------+------------+----------------------------------------+
| id_emprunt | id_livres | id_abonnes | date_sortie | date_rendu | DATE_FORMAT(date_rendu, 'le %d/%m/%Y') |
+------------+-----------+------------+-------------+------------+----------------------------------------+
|          1 |       100 |         20 | 2014-12-17  | 2014-12-18 | le 18/12/2014                          |
|          2 |       101 |         21 | 2014-12-18  | 2014-12-20 | le 20/12/2014                          |
|          3 |       100 |         22 | 2014-12-19  | 2014-12-22 | le 22/12/2014                          |
|          4 |       103 |         23 | 2014-12-19  | 2014-12-22 | le 22/12/2014                          |
|          5 |       102 |         20 | 2014-12-19  | 2014-12-28 | le 28/12/2014                          |
|          6 |       100 |         23 | 2015-03-20  | 2015-03-26 | le 26/03/2015                          |
|          7 |       101 |         22 | 2015-06-13  | NULL       | NULL                                   |
|          8 |       103 |         21 | 2015-06-15  | NULL       | NULL                                   |
|         10 |       107 |          8 | 2014-10-12  | 2014-12-31 | le 31/12/2014                          |
+------------+-----------+------------+-------------+------------+----------------------------------------+
9 rows in set (0.00 sec)

MariaDB [bibliotheque]> SELECT CONCAT('a','b', 'c');
+----------------------+
| CONCAT('a','b', 'c') |
+----------------------+
| abc                  |
+----------------------+
1 row in set (0.00 sec)

MariaDB [bibliotheque]> SELECT CONCAT_WS('-','a','b', 'c');
+-----------------------------+
| CONCAT_WS('-','a','b', 'c') |
+-----------------------------+
| a-b-c                       |
+-----------------------------+
1 row in set (0.00 sec)

MariaDB [bibliotheque]> SELECT LENGTH('magali');
+------------------+
| LENGTH('magali') |
+------------------+
|                6 |
+------------------+
1 row in set (0.00 sec)


MariaDB [bibliotheque]> SELECT SUBSTRING('bonjour', 4);
+-------------------------+
| SUBSTRING('bonjour', 4) |
+-------------------------+
| jour                    |
+-------------------------+
1 row in set (0.00 sec)



MariaDB [bibliotheque]> SELECT TRIM('     bonjour');
+----------------------+
| TRIM('     bonjour') |
+----------------------+
| bonjour              |
+----------------------+

MariaDB [bibliotheque]> SELECT LAST_INSERT_ID();
+------------------+
| LAST_INSERT_ID() |
+------------------+
|               26 |
+------------------+
1 row in set (0.00 sec)


MariaDB [bibliotheque]> SELECT PASSWORD('mypassword');
+-------------------------------------------+
| PASSWORD('mypassword')                    |
+-------------------------------------------+
| *FABE5482D5AADF36D028AC443D117BE1180B9725 |
+-------------------------------------------+


