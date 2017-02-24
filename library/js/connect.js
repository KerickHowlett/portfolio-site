/**
 * This JavaScript/jQuery file is to operate the validation for the contact/connect
 * form.
 *
 * @author Kerick Howlett
 **/
( function( $ ) {
	$( document ).ready( function() {
		$( '.form__block input, .form__block textarea' ).focus( function() {
			$( this ).parent().find( 'label' ).addClass( 'selected_input' );
		} );
		$( '.form__block input, .form__block textarea' ).focusout( function() {
			console.log($( this ).val());
			if ( !$( this ).val() ) {
				$( this ).parent().find( 'label' ).removeClass( 'selected_input' );
			}
		} );
	} );
} )( jQuery );
