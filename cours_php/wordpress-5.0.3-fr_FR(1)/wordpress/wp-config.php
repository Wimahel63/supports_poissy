<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'wordpress');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'root');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', '');

/** Adresse de l’hébergement MySQL. */
define('DB_HOST', 'localhost');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');
define('FS_METHOD','direct');
/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'NAiMBE^td`#k8AeH&Y#!U|wwyc?Xm(0my=hpb%7yWSd~Mkt>Ca82s[$hcFCB~~[1');
define('SECURE_AUTH_KEY',  'fAj7v<T;aawHc.A^@A16P9d-a0/)b!|,*dFn/?jFXQ)=MY~l3[_n]3%gK(}| 2eX');
define('LOGGED_IN_KEY',    'htz>4K0!N!<l~9~Tnr2Kopk1:yELq2)pQ I^UkCmWWrY[nt$8_ (C1EplrQM#%}g');
define('NONCE_KEY',        ' olCs<c5}tqbr8_NaE++1xp$JWX94sEz/vjW8s?}]n[fQA)=3x;:Z1Z5UPUZKR6O');
define('AUTH_SALT',        '5ar#iwnUawaqkW,/PvxtW{6H/)3GVYlmo6#J/Ez9O$jC6G&bnvG+:eS=`jHQ<#D]');
define('SECURE_AUTH_SALT', '~LIBl`e5{Y~7Z6JF<I_? #pQGM[C<6^;mc{|m(8nDwORPBVzc(Rhz[Oj%,pEmQI%');
define('LOGGED_IN_SALT',   'ZE;98X $Yu[D+ODBWA}shhZ*e&`K!bu+x5SZ<I{#y$};B(-i,90,3bl(O_lgc7%x');
define('NONCE_SALT',       ')/$)fow]ckEQVMd0g+8-m<IbC{d*2xK.AdT;]ZTgaRta%RK|HQX~<,A=7.vYDvX,');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix  = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');