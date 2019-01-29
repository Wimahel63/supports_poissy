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
define('DB_NAME', 'site-porte-folio');

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
define('AUTH_KEY',         'P#p;qXgg=x]{u<~>7n)6PqUxR_~qDv,6vU&EGs`.)d/i:FkoQs5vnDQUbpdN*C!s');
define('SECURE_AUTH_KEY',  ']&!k qaiG&s0c-d@R!=S*2~Bi/]hX}V-p!$IB/*BE7dtN-_LTd4>M-c~f-2lpxK3');
define('LOGGED_IN_KEY',    'e]i8a<$!1l0i6N/#vl?%w$%V6IpN]MkL~8&)B{=DN{udBcEQoR7AXDRqw<sV%ZC|');
define('NONCE_KEY',        ' ,Z},eA:i}Y`[s^-yr43YJA(f{&7dq:7jzK}L%j`I#8k^`nY3E6GnGB:zDf[&z2f');
define('AUTH_SALT',        'l,/TD:j|S(K4g!Cd2t|FRJM=(Iwn5UM8*)NH%0;ZF~?!J>[fUOwP#9aJ.piqz8Yx');
define('SECURE_AUTH_SALT', '|?~33}hRV35e8h/dyxL?oIR%?v8Hn0Tx#f&U=kC m^/f(V}!HW.O2RcD(XeR/}:@');
define('LOGGED_IN_SALT',   'M2WlX=EM@mv)lZ5:+tAm0aiY~P#YydDi#s_l4&A M*oq^`M1Vjy+2:(tN%VrnHLh');
define('NONCE_SALT',       'V5VMxAly2F3S/s?kDA_Ki^P~5Yfs3h| /h4/Eg>mLB.(uD}p>-nO@o8QO/d5A$yz');
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