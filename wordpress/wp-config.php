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
define('DB_NAME', 'mhp');

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
define('AUTH_KEY',         '$9Iv>wv/9^-;a-Xd4wP#g)G]TzV44?3n.+_z.MilhW8%7dts{Y,D`flX3{i0[k.%');
define('SECURE_AUTH_KEY',  'iDUQ/e`i@FWqM1(i$@I`>8d=X%>lBv$:H$Q{ 5!3N~u:%iSl,YUo0cT$I:zl>zU5');
define('LOGGED_IN_KEY',    'VZf;;Xq;S8OcD&nQT6c56>^2];jBlp$)V:)ef0_,V5Ek7`dFyl@h~NS=ee[b{R/P');
define('NONCE_KEY',        'KiGsXwOd0Xa%/V]tC-rLf=oLJ-1c6mI9mhkh<rH* r~S.H)=]oT;<;6>~3@wJ8MW');
define('AUTH_SALT',        '[K>{]mfQz5J`FTJ<8Wx7yUP(E_M6b#+fW0s{M(`h:j7Vg{zJg1v`m.CO8t![!6+^');
define('SECURE_AUTH_SALT', 'a 9uBk96P,QD~h[U{L@h}tys$h|PYtZJ1x4EvV=+*@Qt:,#ESA5B*=_i]z*9xgx#');
define('LOGGED_IN_SALT',   'h[F56@(bWx-kY>R[bhW;os J/79[OAvf7hsE-}Ia~!-&.e8kI4ZdIcVQKSpFXd 4');
define('NONCE_SALT',       'jfiZF(:|wvF;2vx%Il96oV5 zH{%PIOXM.Et.w7oJ%/?e}HqfZ9koWouVk`;>u}]');
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