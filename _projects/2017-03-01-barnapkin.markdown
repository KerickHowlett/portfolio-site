---
layout: posts
title:  "The BarNapkin"
author: "Kerick Howlett"
feature_image: barnapkin
excerpt_separator: <!-- more -->
date:   2017-03-01 15:20:00 -0400
technologies:
  - name: "AngularJS"
    image: "angular.png"
    link: "https://angularjs.org/"
  - name: "Ionic"
    image: "ionic.png"
    link: "https://ionicframework.com/"
  - name: "Laravel"
    image: "laravel.png"
    link: "https://laravel.com"
  - name: "MySQL"
    image: "mysql.png"
    link: "https://www.mysql.com/"
related_links:
  - title: "Putting Pen to Napkin"
    href: "http://domtarblueline.com/2016/04/putting-pen-napkin-write-inspiration-strikes/"
---
Some of the greatest ideas in literature have started out on the closest thing that the creator could find, whether that'd be on the back of a paper bag, a thrown away piece of paper, or even a bar napkin. These are often the type of ideas that he or she believes to be so great, that they absolutely need to write it down before they forget it. Many people nowadays have smartphones that usually come with a pre-installed notepad app of some kind, which are fine. But what if there was a better way to organize one's thoughts for all their writing projects? Something that could be considered as the perfect app for the creative writer with an explosive mind.

<!-- more -->

### The Inspiration

Aside from my professional aspirations of being a career developer, I also carry a passion for creative writing, and my head is always generating more and more ideas that I believe could make for great story elements. Now, I like to consider myself as having a fairly decent memory, but even I tend to let stuff fall through the cracks every once in a while. Plus, there's nothing that truly beats being able to visually view an organized layout of notes for me to reference to every now and then. However, I too had tried to start writing down my notes in notebooks and the like, but I would some how wind up losing them. Eventually, I took to writing them down in the notepad app on my smartphone, but I always had to spend a few minutes searching through countless pages of them in order to find what I was looking for every time I tried to reference back to something.

Soon I came up with an idea to utilize my talents of programming, app development, and databases to create a Web and mobile app to better assist me in my other interest. I had also recalled a time when I read an article about how the famous author of the Harry Potter series, J.K.Rowling, wrote almost all of her ideas for her global phenomenon on a bunch of bar napkins over the years. Hence, how I conceived the name for this app, and called it **The BarNapkin**.

### The Concept

Ideally, this app will be available both as a mobile app they can use to write down and organize their thoughts anywhere, and online where they can also do so at home with a full keyboard and mouse. The latter may also be helpful so that the writer doesn't always have to pull out his or her phone while they're actually writing on their piece.

The key cornerstone to this app is the advance methods of organizing the notes for any aspect of any writer's creative piece. They can create a number of projects of any type, such as fictional novels or short stories, screenplays, and so on, that they would be organized under. Basically, these would serve as a sort of "root directory" for each of the user's writing projects. Each type of project or genre can provide the user with an ideal set of tools to best serve them. For example, say a writer used the app to collect and organize their thoughts on a science fiction story, and they wanted to write down notes on a place or setting they thought up. The app would offer the means of filling out fields on what planet it's located on, the planet's astronomical location, a field to describe its culture or politics, and so on. It will even offer the means of linking relationships to other settings, like how this city is located within this country, or a plot critical character was born there.

While the mobile app will indeed store the notes within their device's local storage; ideally, it will also be able to sync up to an online database, so that their notes will be backed up, and they can easily transfer the data between multiple mobile devices and their computers.

The possibilities for this app is just about limitless, and I am very eager in exploring each and every one of them.

### Ideas for Development

Since I plan to make this available both online and as a Mobile app, I believe the best approach would be to make this a decoupled project. Basically, what I mean by that is the Back-end and Front-end side of things will be completely separate from one another. The back-end being implemented through a single API that can be called upon from either source.

For the Back-end API, I plan to develop it using Laravel, as not only do I have experience with using it before for a project where I work, but I strongly believe that this will be best suited. Laravel has very simple and intuitive means of processing very intricate tasks that would be required to store data objects that can be very complex. Not to mention, Laravel has built-in tools to easily make this into an API.

As I mentioned before, I plan on giving this a database for users to be able to back-up their notes, as well as sync them up with multiple devices. So in order to do this, I plan on using MySQL to store and manage the data that will be stored. However, while this will seem like a traditional two-dimensional relationship database, many of its fields will contain JSON objects to allow for far greater scalability. That would be ideal since I plan to allow for plenty of optional *-- and maybe even custom --* fields. I had thought about using NoSQL with MongoDB, but that didn't pan to work out too well with Laravel. And based on my experience with Magento, an EAV *(Entity-Attribute-Value)* database can take much longer to store and process data than I'd like it to.

Now for the Front-end, as I've said before, will be taken on two fronts, which will each require their own views and controls. This is so that they can both optimally handle the data, as well as have user-interfaces that is best suited for their platforms. For the mobile app, I will most likely go with Ionic, or more specifically, Ionic 2. The best way I can think to describe Ionic is that it's a *"framework of frameworks"* that not only has its own library of HTML tags and attributes, as well as CSS, but it also utilizes AngularJS and Apache Cordova. Ionic uses Angular to handle the bulk of the app's primary MVC *(Models-Views-Controllers)*, while also using Cordova to basically translate the HTML, CSS, and JavaScript into languages that can be recognized by the Android and iOS platforms, which would be Java and Objective-C, respectively.

I feel most comfortable with this framework, as I have a great wealth of professional experience in using this to develop mobile apps for my company's clients. Admittedly, though, I only have experience with Ionic 1 and not Ionic 2. The biggest difference with Ionic 2 is that it uses Angular 2, while Ionic 1 *-- as you may imagine  --* uses Angular1. Reportedly, Ionic 2 is a lot more *"native"* than its predecessor, which basically means that it's more responsive, and I've heard that Angular 2 is a much more intuitive language to learn. And based on my experience with learning how to program in Angular 1, I can certainly believe it. However, Angular 2 is now based on TypeScript rather than JavaScript, which I imagine will provide quite the enjoyable challenge.

This project may very well be the perfect excuse for me to actually put Ionic 2 and Angular 2 into practice, which is something I very much want to learn. So I will very likely go with that framework for the mobile front-end.

With that said, I will most likely go with Angular 2 for the Web app front-end as it will keep me from having to repeat too much of the same work twice. At the very least, I shouldn't have to recode too much of the controls, and mainly stick to drafting up a series of Web pages and user-interfaces that would be most ideal for a desktop environment.

### The Future

This will undoubtedly be a long and arduous project, but it's one that I look forward to exploring for as long as I am able. And I am just as sure that it will provide me with a lot to talk about as I continue to learn along the way, so make sure to keep an eye out on my blog for updates on my progress.
