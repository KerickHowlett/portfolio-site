---
layout: posts
title:  "Angular Providers"
author: "Kerick Howlett"
feature_image: factories
date:   2017-04-20 08:00:00 -0400
excerpt_separator: <!-- more -->
technologies:
- name: "AngularJS"
  image: "angular.png"
  link: "https://angularjs.org/"
- name: "Apache Cordova"
  image: "cordova.png"
  link: "https://cordova.apache.org/"
- name: "Ionic"
  image: "ionic.png"
  link: "https://ionicframework.com/"
related_links:
  - title: "Official Documentation"
    href: "https://docs.angularjs.org/guide/providers"
---
More often than not, there will be a need to call upon functions and objects throughout multiple controllers in your Angular or Ionic/Cordova app. So instead of just copying the same block of code in each of your controllers -- which is ALWAYS a bad idea! -- there are special modules that you can inject into any of your controllers with a dependency. Creating these will also do wonders in both cleaning up and simplifying your code, making it much easier to read and debug. These special modules are called: Values, Constants, Factories, Services, and Providers.

<!-- more -->

## Values

These are as useful as they are limited. Basically, this provider is only good for sharing a particular static value or object throughout the app. The best examples would probably be an API key or ClientID. However, these can only be injected into **Service** and **Controller** Modules.

```javascript
var app = angular.module( 'myValue', [] )
app.value( 'APIKey', 'abcde124jksod899601cdk' );
app.value( 'user', {
	id: 001,
	name: John Doe,
	age: 27
} );
```

Once created, this can be called upon from anywhere by simply injecting the **APIKey** dependency into your chosen controllers.

```javascript
angular.module( 'app.controller', [] )
.controller( 'ExampleCtrl', [ 'APIKey', 'user', function( APIKey, user ) {
	var key = APIKey;
	$scope.profile = user;
} ] );
```

## Constants ##

For those wondering how to create a static value that can only be injected into **Config** Modules, this is the special module type that you want. It works in a near identical matter to the Values method. Again, the only difference is that these CANNOT be injected into the **Service** or **Controller** Modules, ONLY the **Config** modules.

These can be useful for establishing, say the Base URL for your Angular App.

```javascript
var app = angular.module( 'myValue', [] )
app.constant( 'BASE_URL', 'http://fakesite.com/' );
```

Again, all you need to do at this point is just inject it into your **Config Module**.

```javascript
angular.module( 'app.controller', [] )
.config( [ 'BASE_URL', 'someRandomProvider', function( BASE_URL, someRandomProvider ) {
	someRandomProvider.setupHome( BASE_URL );
} ] );
```

## Factories

Angular Factories are a very powerful -- and arguably the most flexible -- special module type, as they allow you to generate multiple objects, adding properties to objects, running various functions, and so many other things. In fact, I rely on these the most as I use Factories very often to conduct many complex tasks in my mobile apps.

You can even create a list of functions for any given factory, which are all tied together by a common resource or need. For example, you can use these for creating intricate filters, but I tend to use them for ngStorage (local storage). This provides a quick and easy way to Get/Set data in local storage. This is particularly useful for creating hybrid mobile apps with Ionic and Cordova.

```javascript
angular.module( 'localstorage', [ ] )
.factory( '$localstorage', [ '$window', function( $window ) {
	return {
		/* Set string or int into local storage. */
		set: function( key, value ) {
			$window.localStorage[ key ] = value;
		},
		/* Get string or int from local storage. */
		get: function( key, defaultValue ) {
			return $window.localStorage[ key ] || defaultValue;
		},
		/* Set JSON Object into local storage. */
		setObject: function( key, value ) {
			$window.localStorage[ key ] = JSON.stringify( value );
		},
		/* Get JSON Object from local storage. */
		getObject: function( key ) {
			return JSON.parse( $window.localStorage[ key ] || '{}' );
		}
	}
} ] );
```

Again, once this factory is created, all that needs to be done now is add the dependency into the controllers and call for the factory methods when needed.

```javascript
angular.module( 'app.controller', [] )
.controller( 'ExampleCtrl', [ '$localstorage', function( $localstorage ) {

	/* Set string or int into local storage. */
	var data = 'bar';
	$localstorage.set( 'foo', data );

	/* Get string or int from local storage. */
	$scope.secret_key = $localstorage.get( 'secret_key', '' );

	/* Set JSON Object into local storage */
	var object = {
		name: John Smith,
		age: 21
	};
	$localstorage.setObject( 'user', object );

	/* Get JSON Object from local storage. */
	$scope.person = $localstorage.getObject( 'person' );

} ] );
```

Now, that primarily deals with the bare minimum methods of ngStorage (local storage). It's also possible to include your own "business logic" to these methods as well; though, I tend to put that in another factory and inject the **$localstorage** factory into that one to make things easier to code and debug in the long run.

## Services

For those that intimately familiarized themselves with Object-Oriented Programming (OOP), whether it'd be in PHP or JavaScript, will find this useful. For those more familiar with basic JavaScript may better understand it through the following example.

```javascript
/* Object Constructor */
var Movie = function( title, director, genre ) {
	this.title = title;
	this.director = director;
	this.genre = genre;
};

// Adding methods to Movie Object so that the function will be available every
// time the instance of this object is called via Prototype.
Movie.prototype.logMovie = function() {
	console.log( 'The TITLE of this movie is ' + title );
	console.log( 'The DIRECTOR of this movie was ' + director );
	console.log( 'This movie is a ' + genre );
}

/* To create Movie object. */
var batman = new Movie( 'Batman', 'Tim Burton', 'Action' );

/* To initiate function associated with new movie object. */
Movie.logMovie(); // Logs movie properties.

```

To inject the dependency into a controller is basically the same as calling a **new** object. Effectively, making it to where all of the object's properties are now part of the controller by binding with the **this** keyword. Or in other words: `myService = this`{:.hljs .javascript .inline-code}.

Services are great for doing things like creating Shopping Carts for online stores, or even calling to an API for both Angular, Ionic, and Cordova apps. And while you can actually create private properties and helper functions in Factories, I find that I use them more often here, as those are often closely tied with Object-Oriented Programming (OOP).

```javascript
angular.module( 'app.movie', [ ] )
.service( 'movieService', function( $http ) {

	var _title = ''; // Establishing Private Variable.

	/* Establishing Private HTTP Header for Post Call. */
	var config = {
		headers : {
			'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
		}
	};

	/* Get Title from object. */
	this.getTitle = function() {
		return _title;
	}

	/* Set Title string value into object. */
	this.setTitle = function( title ) {
		_title = title;
	}

	/* Save movie title to an online database via API. */
	this.saveMovie = function() {
		$http.post( 'https://fake.site.com/save_movie/', config, _title )
		.success( function( _title ) {
			console.log( _title + 'was saved!' );
		} )
		.error( function( e ) {
			console.error( 'There was an unexpected error! Please try again!' );
		} );
	}

} );
```

All that's left to do now is inject the Service into the needed controllers and make the appropriate calls.

```javascript
angular.module( 'app.controller', [] )
.controller( 'ExampleCtrl', [ 'movieService', function( movieService ) {

	/* Set Movie Title. */
	movieService.setTitle( 'The Dark Knight' );

	/* Save Movie Title. */
	movieService.saveMovie();

} ] );
```

While Factories are great for creating multiple objects, Services are primarily used for creating and processing Singleton objects. What **Singleton Objects** mean is that you can't have multiple instances of any given service running at one time. As the name, Singleton, implies, it's only there for a **single** use. Now, that doesn't mean the object goes away immediately after you called it. It'll stick around for as long as you need it, and if you want changes made to it, you'll just have to overwrite its properties.

## Providers

Some apps may require functions to run throughout the entire app or module **before it even starts**, so this is where Providers come in. These are also the only ones out of the special module types that can exchange data with an app's **Config Module**.

While the Config Module has access to just about everything within the Provider, the controllers only has access to everything within the **$get** method, which acts as a built-in Factory method.

And just like with Services and Factories, you can create Private Properties and Helper Functions within your Providers.

For this example, say you want to call an API that gives you the title of their "Movie of the Day" as soon as the app launches, and that this is a setting that you can turn on or off through the Config Module.

```javascript
angular.module( 'app.provider', [ ] )
.provider( 'dailyMovieProvider', [ function () {

	/* Establishing Private Property. */
	var movie = null;

	/* Helper Function to Set Movie Property. */
	this.setMovie = function ( title ) {
		movie = title;
	};

	/* What the Controllers will retrieve. */
	this.$get = [ function () {
		return {
			/* Factory Function that the Controller will Call. */
			getMovieOfTheDay = function() {
				return movie;
			}
		};
	} ];

} ] );
```

You now just need to establish a Config Module that tells the provider what the Movie of the Day is.

```javascript
angular.module( 'app.controller', [] )
.config( [ 'dailyMovieProvider', function( dailyMovieProvider ) {

	dailyMovieProvider.setMovie( 'The Avengers' );

} ] );
```

Lastly, you'll just need to have it injected into your controller so that it may display in your view.

```javascript
angular.module( 'app.controller', [] )
.controller( 'ExampleCtrl', [ 'dailyMovieProvider', function( dailyMovieProvider ) {

	$scope.movieOfTheDay = dailyMovieProvider.getMovieOfTheDay();

} ] );
```

Of course, this was just a very basic example, as Providers can do so much more advanced tasks. For example, in Ionic's Framework, they use **$ionicConfigProvider** to establish many of their configuration settings before the app even starts. Such as things for the mobile app's navigation tabs, how to setup the keyboard, etc. Having your own provider that is setup to be application-wide could give you the means of establishing your own different settings for each of your app's modules. Implementing this may very well clean up your code GREATLY, as well as help locate where any possible bugs are coming from in the long run, especially if your application has many modules that each need particular functions to run before they initiate.
