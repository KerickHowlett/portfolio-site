/**
 * This JavaScript/jQuery file is to create the transition affects for the sidenav
 * menu.
 *
 * @author Kerick Howlett
 **/

( function( $ ) {
	$( document ).ready( function() {
		var resizeTimer;
		$( window ).on( 'resize', function( e ) {
			clearTimeout( resizeTimer );
			resizeTimer = setTimeout( function() {
				/* Makes sure that the dropdown list and the menu icon are in sync. */
				if ( $( '.menu-icon' ).hasClass( 'clicked-icon' ) && ! $( '.nav_links' ).hasClass( 'show_links' ) ) {
					$( '.menu-icon' ).removeClass( 'clicked-icon' );
				}
				if ( ! $( '.menu-icon' ).hasClass( 'clicked-icon' ) && $( '.nav_links' ).hasClass( 'show_links' ) ) {
					$( '.nav_links' ).removeClass( 'show_links' );
				}
			}, 250 );
		} );
		/**
		 * Opens/Closes Menu & Triggers Menu Icon Animation when clicked upon
		 * for Mobile View.
		 **/
		$( '.menu-icon' ).click( function() { // Mobile
			$( this ).toggleClass( 'clicked-icon' );
			$( '.nav_links' ).toggleClass( 'show_links' );
		} );
	} );
} )( jQuery );
