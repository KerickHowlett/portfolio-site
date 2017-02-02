/**
 * The purpose of this Gulp File is to compile all the SASS into a CSS master
 * sheet, and all the JavaScript files into a single uglified JavaScript file.
 *
 * @author Kerick Howlett
 * @since January 23, 2017
 *
 * @see https://css-tricks.com/gulp-for-beginners/
 * @see https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md
 * @see https://github.com/gulpjs/gulp/blob/master/docs/API.md
 * @see https://github.com/osscafe/gulp-cheatsheet
 *
 **/

( function() {

	'use strict'; // Establish "Strict Mode".

	/* Dependencies. */
	const gulp = require( 'gulp' );
	const sass = require( 'gulp-sass' );
	const minifyCss = require( 'gulp-minify-css' );
	const rename = require( 'gulp-rename' );
	const concat = require( 'gulp-concat' );
	const uglify = require( 'gulp-uglify' );
	const browserSync = require( 'browser-sync' ).create();

	/* Filepath Locations for Watch Tasks. */
	const paths = {
		sass: [ './library/scss/**/*.scss' ],
		scripts: [ './library/js/**/*.js' ]
	};

	/* Default task to compile both SASS and JavaScript. */
	gulp.task( 'default', ['sass', 'script'] );

	/* Compiling SASS to produce minified CSS Master Sheet. */
	gulp.task( 'sass', function( done ) {
		gulp.src( './library/scss/portfolio.app.scss' )
			.pipe( sass( {
				errLogToConsole: true
			} ) )
			.pipe( gulp.dest( './library/dist/' ) )
			.pipe( minifyCss( {
				keepSpecialComments: 0
			} ) )
			.pipe( rename( { extname: '.min.css' } ) )
			.pipe( gulp.dest( './library/dist/' ) )
		.on( 'end', done );
	} );

	/* Compiling JavaScript to produce primary uglified JavaScript file. */
	gulp.task( 'script', function( done ) {
		gulp.src( './library/js/**/*' )
			.pipe( concat( 'script.min.js' ) )
			.pipe( uglify() )
			.pipe( gulp.dest( './library/dist/' ) )
		.on( 'end', done );
	} );

	/**
	 *  Watches file paths for any changes so that the browser will automatically
	 *  rebuild the master style sheet and the uglified script when a file change
	 *  has been detected.
	 **/
	gulp.task( 'watch', function() {
		gulp.watch( paths.sass, [ 'sass' ] );
		gulp.watch( paths.scripts, [ 'script' ] );
	} );

} )();
