/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import {  InspectorControls, ColorPalette, RichText, URLInputButton } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props] Properties passed from the editor.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes, className } ) {
	
	const {
		bgColor,
		content,
		url,
		text
	} = attributes;

	function onBgColorChange(newbgColor) {
		setAttributes( { bgColor: newbgColor } );
	}

	return ([

		<InspectorControls>

			<PanelBody title={ 'Background Color' }>
				<ColorPalette
					value={ bgColor }
					onChange={ onBgColorChange }
					/>
			</PanelBody>

		</InspectorControls>,

		
		<div className={ className + ' btn-group' } role="group">
			<a href="#" type="button" className="btn" style={ { backgroundColor: bgColor } }>
				<span className="glyphicon glyphicon-search find-fuels" aria-hidden="true"></span> <URLInputButton
url={ url }
onChange={ ( url, post ) => setAttributes( { url, text: (post && post.title) || 'Click here' } ) }
/>
			</a>
		</div>

	]);
}
