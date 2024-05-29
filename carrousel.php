<?php
/**
 * Plugin Name: Carousel
 * Author: Minji Ardanuy-Jetté
 * Description: Affiche lecaroussel associé à une galerie de Wordpress
 * Version: 1.0.0
 * Plugin uri: https://github.com/MinjiArdanuy-Jette
 */

function enqueue_style_script()
{
  $version_css = filemtime(plugin_dir_path(__FILE__) . "style.css");
  $version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");

  wp_enqueue_style(
    'em_plugin_carrousel_css',
    plugin_dir_url(__FILE__) . "style.css",
    array(),
    $version_css
  );

  wp_enqueue_script(
    'em_plugin_carrousel_js',
    plugin_dir_url(__FILE__) . "js/carrousel.js",
    array(),
    $version_js,
    true
  );
}
// Il faut que wp_head(); sooit ajouté juste avant la bbalise </head>
//et que wp_footer; soit ajouté juste avant la balise </body>
add_action('wp_enqueue_scripts', 'enqueue_style_script');
function genere_html()
{

  $html = '
  <div class="carrousel">
  <button class="carrousel__x">X</button>
  <figure class="carrousel__figure">
  <button class="prev-fleche"><img src="https://s2.svgbox.net/hero-outline.svg?ic=arrow-left&color=000" width="28" height="28"></button>
  <button class="next-fleche"><img src="https://s2.svgbox.net/hero-solid.svg?ic=arrow-right&amp;color=000" width="28" height="28"></button>
  </figure>
  
  <form action="" class = "carrousel__form"></form>
  </div>';
  return $html;
}
//[carrousel] juste après la galerie dans votre article ou page
//Quand la finction the_content() rencontrera [carrousel] c'est à ce moment 
//que le carrousel sera initialisé
add_shortcode("carrousel", "genere_html");