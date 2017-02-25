/**
 * This JavaScript/jQuery file is to operate the validation for the contact/connect
 * form, as well as the effect for the label.
 *
 * @author Kerick Howlett
 **/
( function( $ ) {
	$( document ).ready( function() {
		$( '#name, #email, #your_email, #subject, #message' ).val( '' ); // Empty fields.
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
				 * Returns error status message after submitting form.
				 *
				 * @param {Array}  fields  The list of the invalid field types.
				 **/
				function returnMessage( fields ) {
					$( '.form__block' ).removeClass( 'missing_field' );
					$( '.form__block' ).find( 'span' ).remove();
					for ( var i = 0; i < fields.length; i++ ) {
						if ( fields[i] === 'name' ) {
							if ( !$( '#name' ).parent().hasClass( 'missing_field' ) ) {
								$( '#name' ).parent().addClass( 'missing_field' );
								$( '#name' ).parent().append( '<span>Your name is required.</span>' );
							}
						}
						if ( fields[i] === 'email' ) {
							if ( !$( '#your_email' ).parent().hasClass( 'missing_field' ) ) {
								$( '#your_email' ).parent().addClass( 'missing_field' );
								$( '#your_email' ).parent().append( '<span>Your email is required.</span>' );
							} else {
								var span = $( '#your_email' ).parent().find( 'span' ).html();
								if ( span ) {
									$( '#your_email' ).parent().find( 'span' ).html( 'Your email is required.' );
								}
							}
						}
						if ( fields[i] === 'invalid_email' ) {
							if ( !$( '#your_email' ).parent().hasClass( 'missing_field' ) ) {
								$( '#your_email' ).parent().addClass( 'missing_field' );
								$( '#your_email' ).parent().append( '<span>Please enter a valid email address.</span>' );
							} else {
								var span = $( '#your_email' ).parent().find( 'span' ).html();
								if ( span ) {
									$( '#your_email' ).parent().find( 'span' ).html( 'Please enter a valid email address.' );
								}
							}
						}
						if ( fields[i] === 'message' ) {
							if ( !$( '#message' ).parent().hasClass( 'missing_field' ) ) {
								$( '#message' ).parent().addClass( 'missing_field' );
								$( '#message' ).parent().append( '<span>A message is obviously required.</span>' );
							}
						}
					}
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
					/**
					 * Submits the data of the form to the mail.php file, and
					 * then redirects to the confirmation page upon success.
					 **/
					$.ajax( {
						url: 'https://formspree.io/kahowlett1989@gmail.com',
						method: 'POST',
						data: {
							name: name,
							email: email,
							subject: subject,
							date: new Date(),
							message: message
						},
						dataType: 'json',
						success: successCallback,
						error: errorCallback
					} );
					function successCallback() {
						window.location = '/confirmation';
					};
					function errorCallback( e ) {
						console.error( 'There was a problem with trying to submit this form.\n' + e );
					};
				} else {
					var fields = [];
					if ( !name ) {
						fields.push( 'name' );
					}
					if ( !email ) {
						fields.push( 'email' );
					} else {
						if ( !isEmailValid( email ) ) {
							fields.push( 'invalid_email' );
						}
					}
					if ( !message ) {
						fields.push( 'message' );
					}
					returnMessage( fields.sort() );
				}
			} else {
				console.info( 'NO SPAM ALLOWED!' );
			}
		} );
	} );
} )( jQuery );
