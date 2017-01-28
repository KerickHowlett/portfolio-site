/**
 * This JavaScript/jQuery file is to create the transition affects for the sidenav
 * menu.
 *
 * @author Kerick Howlett
 **/

( function( $ ) {
	/* Shrinks all other menu items when one of them is hovered. */
	function menuHoverEffect() {
		$( '.nav_links li' ).hover( function() {
			$( '.nav_links li' ).not( this ).toggleClass( 'unselected_link' );
		} );
	}
	$( document ).ready( function() {
		if ( $( window ).width() > 1024 ) menuHoverEffect(); // Initiate hover effect if Deskop.
		/* Hover Effect for Side Navigation Menu on Desktop Views */
		var resizeTimer;
		$( window ).on( 'resize', function( e ) {
			clearTimeout( resizeTimer );
			resizeTimer = setTimeout( function() {
				console.log('TEST');
				if ( $( window ).width() > 1024 ) { // Desktop
					menuHoverEffect(); // Initiate hover effect.
					/* Closes Mobile Menu which switched to Desktop View. */
					$( '.nav_links' ).toggleClass( 'show_links' );
				}
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
