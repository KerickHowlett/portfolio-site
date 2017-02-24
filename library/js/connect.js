/**
 * This JavaScript/jQuery file is to operate the validation for the contact/connect
 * form, as well as the effect for the label.
 *
 * @author Kerick Howlett
 **/
( function( $ ) {
	$( document ).ready( function() {
		$( '.form__block input, .form__block textarea' ).focus( function() {
			$( this ).parent().find( 'label' ).addClass( 'selected_input' );
		} );
		$( '.form__block input, .form__block textarea' ).focusout( function() {
			if ( !$( this ).val() ) {
				$( this ).parent().find( 'label' ).removeClass( 'selected_input' );
			}
		} );
		$( '#submit' ).click( function() {
			if ( !$( '#email' ).val() ) {

				/**
				 * Returns status message after submitting form.
				 *
				 * @return {[type]} [description]
				 **/
				function returnMessage( status, fields ) {



				};

				/**
				 * Checks to see if the email address is valid.
				 * @param  {string}  address Entered email address.
				 * @return {Boolean}         Is the email address valid?
				 **/
				function isEmailValid( address ) {
					var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
					return pattern.test( address );
				};

				var name = $( '#name' ).val();
				var email = $( '#your_email' ).val();
				var subject = $( '#subject' ).val();
				var message = $( '#message' ).val();

				if ( name && email && message ) {

					// TODO: Create post function to email PHP file.

				} else {
					var fields = [];
					if ( !name ) {
						fields[ fields.length ] = 'name';
					}
					if ( !email ) {
						fields[ fields.length ] = 'email';
					} else {
						if ( isEmailValid( email ) ) {
							fields[ fields.length ] = 'valid_email';
						}
					}
					if ( !message ) {
						fields[ fields.length ] = 'message';
					}
				}

				returnMessage( 'fail', fields );

			} else {
				console.info( 'NO SPAM ALLOWED!' );
			}
		} );
	} );
} )( jQuery );
