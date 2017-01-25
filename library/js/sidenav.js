/**
 * This JavaScript/jQuery file is to create the transition affects for the sidenav
 * menu.
 *
 * @author Kerick Howlett
 **/

( function( $ ) {
	$( document ).ready( function() {
		$( '.nav_links li' ).hover( function() {
			$( '.nav_links li' ).not( this ).toggleClass( 'unselected_link' );
		} );
	} );
} )( jQuery );
