/**
 * This JavaScript/jQuery file is to help create the title animation for the Site.
 *
 * @author Jef DeWitt
 **/
( function( $ ) {
	$( document ).ready( function() {
		function move() {
			$('.initial h1').addClass('shift');
		}
		setTimeout(move, 5000);
	} );
} )( jQuery );
