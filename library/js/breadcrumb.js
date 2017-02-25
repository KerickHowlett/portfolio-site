/**
 * This JavaScript/jQuery file is to URI decodes and removes all of the special
 * characters from the breadcrumbs, as the breadcrumbs are created from the
 * page's URI.
 *
 * @author Kerick Howlett
 **/

( function( $ ) {
	$( document ).ready( function() {
		$.each( $( '.breadcrumb__link a' ), function( index, value ) {
			var breadcrumb = $( value ).html();
			if ( breadcrumb !== 'Home' ) {
				breadcrumb = decodeURI( breadcrumb );
				breadcrumb = breadcrumb.replace( /[^a-zA-Z ]/g,' ' );
				breadcrumb = breadcrumb.replace( /\s\s+/g, ' ' );
				$( value ).html( breadcrumb );
			}
			if ( breadcrumb === 'Connect' && $( value ).attr( 'href' ) === '/confirmation' ) {
				$( value ).attr( 'href', '/connect' );
			}
		} );
	} );
} )( jQuery );
