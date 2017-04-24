/**
 * This JavaScript/jQuery file is to URI decodes and removes all of the special
 * characters from the breadcrumbs, as the breadcrumbs are created from the
 * page's URI.
 *
 * @author Kerick Howlett
 **/

( function( $ ) {
	$( document ).ready( function() {
		var total = $( '.breadcrumb__link a' ).length;
		$.each( $( '.breadcrumb__link a' ), function( index, value ) {
			var breadcrumb = $( value ).html();
			/**
			 * Ensures that the decodeURI and stripping of special characters
			 * functions do not affect the first or last Breadcrumb.
			 **/
			if ( index !== 0 && index !== total - 1 ) {
				breadcrumb = decodeURI( breadcrumb );
				breadcrumb = breadcrumb.replace( /[^a-zA-Z0-9 ]/g,' ' );
				breadcrumb = breadcrumb.replace( /\s\s+/g, ' ' );
				$( value ).html( breadcrumb );
			}
			/**
			 * Ensures that the "Connect" breadcrumb actually redirects to the
			 * ACTUAL breadcrumb page and NOT the Thank You page.
			 **/
			if ( breadcrumb === 'Connect' && $( value ).attr( 'href' ) === '/confirmation' ) {
				$( value ).attr( 'href', '/connect' );
			}
			/**
			 * Ensures that whenever "$q" appears in the breadcrumb title, it'll
			 * always remain lowercase, as it should be.
			 *
			 * NOTE: This will make it to where the entire breadcrumb will NOT be
			 * automatically capitalized, so make sure that every word you wished
			 * to be capitalized within this tag is, in fact, capitalized.
			 **/
			if ( breadcrumb.toLowerCase().indexOf( '$q' ) > -1 ) {
				$( this ).parent().addClass( 'no_capitalize' );
			}
		}, total );
	} );
} )( jQuery );
