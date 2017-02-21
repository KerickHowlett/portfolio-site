/**
 * This JavaScript/jQuery file is to make any external link open in a new tab.
 *
 * @author Kerick Howlett
 **/
( function( $ ) {
	$( document ).ready( function() {
		var links = $( '.related_links' ).find( 'a' );
		for( var i = 0; i < links.length; i++ ) {
			var link = links[i];
			var url = $( link ).attr( 'href' );
			if ( !url.includes( window.location.hostname ) ) {
				$( link ).attr( 'target', '_blank' );
			}
		}
	} );
} )( jQuery );
