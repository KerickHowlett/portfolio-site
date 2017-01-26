/**
 * This JavaScript/jQuery file is to create the transition affects for the sidenav
 * menu.
 *
 * @author Kerick Howlett
 **/

( function( $ ) {
	$( document ).ready( function() {
		if ( $( window ).width() > 767 ) { // Desktop
			$( '.nav_links li' ).hover( function() {
				$( '.nav_links li' ).not( this ).toggleClass( 'unselected_link' );
			} );
		} else {
			$( '.menu-icon' ).click( function() { // Mobile
				$( this ).toggleClass( 'clicked-icon' );
				$( '.nav_links' ).toggleClass( 'show_links' );
			} );
		}
	} );
} )( jQuery );
