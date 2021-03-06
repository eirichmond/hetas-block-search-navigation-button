/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( { className, attributes } ) {
	const {
		bgColor,
		content,
		url,
		text
	} = attributes;

	return (
		<div className={ className + ' btn-group' } role="group">
			<a href={ url } type="button" className="btn" style={ { backgroundColor: bgColor } }>
				<span className="glyphicon glyphicon-search find-fuels" aria-hidden="true"></span> { attributes.text }
			</a>
		</div>
	);
}
