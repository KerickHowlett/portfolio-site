---
layout: posts
title:  "Ionic View LifeCycle"
author: "Kerick Howlett"
feature_image: ionic_views
date:   2017-04-26 08:00:00 -0400
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
  href: "https://ionicframework.com/docs/v1/api/directive/ionView/"
- title: "$emit, $broadcast & $on"
  href: "http://jefdewitt.com/archive/$emit-$broadcast-&-$on/"
---
Controllers in an Ionic Hybrid Mobile App normally load only once whenever their Views are cached, but what if you could have more control over when certain parts of a controller fire during a View's LifeCycle? Well, there is an extremely useful method to run functions and assign scope values only when they are needed for any given view.

<!-- more -->

## Events / $on

During the life cycle of an Ionic View, it **emits** or **broadcasts** a series of Events that can be picked up from any controller. In AngularJS, **$scope** has a function called **$on**, which is used to watch for these Events. Consequently, this is something that can be used app-wide, in case you should ever desire to have a function run from a completely separate controller.

```javascript
$scope.$on( 'myEvent' ), function( event, data ) {
	console.log( 'Event fired!' );
}
```

To learn more about it, read the blog of my good friend, Jef DeWitt, by [clicking here](http://jefdewitt.com/archive/$emit-$broadcast-&-$on/). He offers great insight on the subject that is very concise and easy to follow. I highly recommend checking it out, as it'll help you better understand how Ionic View LifeCycles work if you don't already.

## Types of View LifeCycle Events

First of all, there are far too many to check them all, so I'll just give a broad summary of what they do and talk about the type that I utilize the most. If you wish to learn more about each View LifeCycle Event, I recommend checking out [Ionic's v1 Documentation](https://ionicframework.com/docs/v1/api/directive/ionView/).

There are a decent number of events that will fire based on what happens to a view. It happens whenever a User is **entering** a View and whenever a User is **leaving** a View. For those that are in the habit of making practical use out of **nesting views**, there are even similar events that'll affect the **Parent View**. Only real significant difference is that the Parent View LifeCycle Events **$broadcast** downward, while the others **$emit** upward.

In the terms that I find the most use out of, they would have to be **$ionicView.beforeEnter** and **$ionicView.enter**.

##### $ionicView.beforeEnter

I especially love utilizing this to preload images or other variables before the view appears, because otherwise it'll take a brief moment for it to appear in the view. And if you're like me, then you prefer to have everything all ready to go before the view even fully appears for the End-User.

##### $ionicView.enter

Now, I tend to mostly use this to store functions that trigger whenever a button within a given View is clicked or whenever it requires any interaction with the View's GUI at all. I personally find that it helps better organize your controller, especially when you're utilizing the View LifeCycle into your app's controls. But ideally, you mainly use this for whenever you only want something to initiate once the View has completely entered and has fully appeared to the End-User.

##### Code Example

The best example to demonstrate the best practical use of implementing these View LifeCycle events into a controller is for showing and hiding a **"Load Progression"**. I found this was particularly helpful for me because I once needed to call upon a list of items through a REST API, and I needed to show that the phone was in fact working even though there were no items loaded on the screen yet.

So here's a very simplified example on how to do just that!

```javascript
angular.module( 'app.controller', [ ] )
.controller( 'ExampleCtrl', [ '$scope', '$ionicLoading', function( $scope, $ionicLoading ) {
	$scope.$on( '$ionicView.beforeEnter', function() {
		$ionicLoading.show( {
			template: "<ion-spinner></ion-spinner>",
			hideOnStageChange: true
		} );
	} );
	$scope.$on( '$ionicView.enter', function() {
		$ionicLoading.hide();
	} );
} ] );
```
