<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link https://fr.wordpress.org/support/article/editing-wp-config-php/ Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'plantyprojet' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'root' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'bRH1yPf8#M<bI_@ 3gi[dJ*@xfgV=aIo~Yl2$t=qD65!4lB{R_6^1hJ,x<|ont?c' );
define( 'SECURE_AUTH_KEY',  'u<n9G[_L)41[``p8zRvk_OIU-iz8vLBM1tr{1u{>}4UKnQ48r96!(oF4q|_RNx|L' );
define( 'LOGGED_IN_KEY',    'd6S qI!`j8/OLQ=xy~ DQ[)R{/4IwsF^a1f~w>Kx8LAN{dPu~n4<2TBi3DYw/vhC' );
define( 'NONCE_KEY',        'P%J0|T(*?;ZLd)l8YnqRYzUD})AWp|PZe1FY {aZ:QpXs%G2C7wf;:@BaQ%GM~>F' );
define( 'AUTH_SALT',        'Y0-FnY}*tp4bI )jPRP#W5{*O*n(cVu{Fv|D=l6K>mXVea2/pzoA|}88&mbG=Oy8' );
define( 'SECURE_AUTH_SALT', 'M{vc?nH=?YGAp<R]q;nz&Z14FRzI]X;k z;om+/m![Fj1s;k~NX%h|<OB$aMO/#Q' );
define( 'LOGGED_IN_SALT',   ')&OuiUDkGm1}MOx(G>@~;t#E8`!9<7WOx%G~VA5~nhs 2L.+:g VVg<R+p6MQ1qA' );
define( 'NONCE_SALT',       'db2}q6xE[P51m^6FR*D+>pZOjn#51He^H?lK*BjTpJ{udr+gKPvvA7Q^ziV6-#a(' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs et développeuses : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs et développeuses d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur la documentation.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
