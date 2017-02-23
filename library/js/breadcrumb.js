/**
 * This JavaScript/jQuery file is to remove all the symbols and URL encode from
 * the Breadcrumbs, if there are any.
 *
 * @author Kerick Howlett
 **/

( function( $ ) {
	$( document ).ready( function() {
		var breadcrumb = $( '.breadcrumb__link > a' ).html();
		if ( breadcrumb !== 'Home' ) {
			breadcrumb = decodeURI( breadcrumb );
			breadcrumb = string.replace( /([^a-zA-Z0-9 ,*\u2019-]+)/g,' ' );
			breadcrumb = string.replace(/\s\s+/g, ' ');
			$( '.breadcrumb__link > a' ).html( breadcrumb );
		}
	} );
} )( jQuery );
