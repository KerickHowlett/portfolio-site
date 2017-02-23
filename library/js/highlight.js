/**
 * This file is to better initiate the Highlight.js functions to highlight code
 * blocks.
 *
 * @dependency worker.js
 * @author Kerick Howlett
 **/
( function( $ ) {
	$( document ).ready( function() {
		$( 'pre code, p code' ).each( function( i, block ) {
			hljs.highlightBlock( block );
		} );
	} );
	addEventListener( 'load', function() {
		var code = document.querySelector( '.highlight code' );
		var worker = new Worker( '/library/js/worker.js' );
		worker.onmessage = function( event ) { code.innerHTML = event.data; }
		if ( code ) {
			worker.postMessage( code.textContent );
		}
	} );
} )( jQuery );
