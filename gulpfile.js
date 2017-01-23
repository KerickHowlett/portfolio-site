var gulp = require( 'gulp' );
var gutil = require( 'gulp-util' );
var bower = require( 'bower' );
var concat = require( 'gulp-concat' );
var sass = require( 'gulp-sass' );
var minifyCss = require( 'gulp-minify-css' );
var rename = require( 'gulp-rename' );
var sh = require( 'shelljs' );

var paths = {
	sass: [ './library/scss/**/*.scss' ],
	scripts: [ './library/js/*.js' ]
};

gulp.task( 'default', [ 'sass' ] );

gulp.task( 'sass', function( done ) {
	gulp.src( './library/scss/portfolio.app.scss' )
		.pipe( sass( {
			errLogToConsole: true
		} ) )
		.pipe( gulp.dest( './library/css/' ) )
		.pipe( minifyCss( {
			keepSpecialComments: 0
		} ) )
		.pipe( rename( { extname: '.min.css' } ) )
		.pipe( gulp.dest( './library/css/' ) )
	.on( 'end', done );
} );

gulp.task( 'watch', function() {
	gulp.watch( paths.sass, [ 'sass' ] );
} );
