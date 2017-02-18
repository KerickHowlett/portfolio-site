/**
 * This JavaScript/jQuery file is to help create the title animation for the Site.
 *
 * @author Jef DeWitt
 **/
( function( $ ) {
	$( document ).ready( function() {
		function move() {
			$( '.home_page .initial h1' ).addClass( 'shift' );
		}
		setTimeout( move, 5000 );
		$( '.other-page .title__sequence' ).hover(
			function() {
				var timer = setTimeout( function() {
					$( '.initial h1' ).addClass( 'shift' );
				}, 100 );
			},
			function( timer ) {
				$( '.initial h1' ).removeClass( 'shift' );
				clearTimeout( timer );
			}
		);
		
		setInterval( function() {
			var title = $( '.other-page .title__sequence:not( :hover ) .initial h1' );
			if ( title.hasClass( 'shift' ) ) {
				title.removeClass( 'shift' );
			}
		}, 100 );
	} );
} )( jQuery );
