<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Astra
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

?>
<?php astra_content_bottom(); ?>
	</div> <!-- ast-container -->
	</div><!-- #content -->
	</div><!-- #page -->

	<footer class="site-footer">
	<a href="mentions-legales">Mentions légales</a>
</footer>

<?php 
	astra_body_bottom();    
	wp_footer(); 
?>
	</body>
</html>

<?php 
	astra_body_bottom();    
	wp_footer(); 
?>
	</body>
</html>
