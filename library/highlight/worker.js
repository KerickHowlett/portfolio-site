/**
 * This file is to support the Highlight JS so that it can potentially support
 * very large code blocks.
 *
 * @author Kerick Howlett
 **/
( function( $ ) {
	onmessage = function( event ) {
		importScripts( '/library/highlight/highlight.pack.js' );
		var result = self.hljs.highlightAuto( event.data );
		postMessage( result.value );
	};
} )();
