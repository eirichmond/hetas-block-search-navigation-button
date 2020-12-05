<?php
/**
 * Plugin Name:     Hetas Block Search Navigation Button
 * Description:     The buttons required for the Search Naviation buttons.
 * Version:         0.1.0
 * Author:          Elliott Richmond
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     create-block
 *
 * @package         create-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function create_block_hetas_block_search_navigation_button_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "create-block/hetas-block-search-navigation-button" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'create-block-hetas-block-search-navigation-button-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);

	$editor_css = 'editor.css';
	wp_register_style(
		'create-block-hetas-block-search-navigation-button-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'style.css';
	wp_register_style(
		'create-block-hetas-block-search-navigation-button-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'create-block/hetas-block-search-navigation-button', array(
		'editor_script' => 'create-block-hetas-block-search-navigation-button-block-editor',
		'editor_style'  => 'create-block-hetas-block-search-navigation-button-block-editor',
		'style'         => 'create-block-hetas-block-search-navigation-button-block',
	) );
}
add_action( 'init', 'create_block_hetas_block_search_navigation_button_block_init' );
