<?php
	/**
	 * This is the back-end functionality for the connect/contact form of the site.
	 *
	 * @author Kerick Howlett
	 **/
	extract( json_decode( $_POST[ 'data' ], true ) );
	$msg = '<p><b>Name:</b> ' . filter_var( $name, FILTER_SANITIZE_EMAIL ) . '</p>';
	$msg += '<p><b>Email:</b> ' . filter_var( $email, FILTER_SANITIZE_EMAIL ) . '</p>';
	$msg += '<p>' . filter_var( $message, FILTER_SANITIZE_EMAIL ) . '</p>';
	mail( 'bigk5000@gmail.com', filter_var( $subject, FILTER_SANITIZE_EMAIL ), $msg );
?>
