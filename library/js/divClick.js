/**
 * This JavaScript/jQuery file is to make an entire <div> clickable.
 *
 * @author Kerick Howlett
 **/
( function( $ ) {
	$( document ).ready( function() {
		$( '.technologies__row' ).click( function() {
			window.open( $( this ).find( 'a' ).attr( 'href' ) );
			return false;
		} );
	} );
} )( jQuery );
