---
layout: posts
title:  "Jekyll Breadcrumb"
author: "Kerick Howlett"
feature_image: breadcrumb
excerpt_separator: <!-- more -->
date:   2017-02-28 15:40:00 -0400
technologies:
  - name: "CSS"
    image: "css.png"
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  - name: "HTML"
    image: "html.png"
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  - name: "JavaScript"
    image: "js.png"
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  - name: "Jekyll"
    image: "jekyll.jpeg"
    link: "https://jekyllrb.com/"
  - name: "YAML"
    image: "yaml.jpg"
    link: "http://www.yaml.org/"
related_links:
  - title: "My GitHub Repo"
    href: "https://github.com/bigk5000/jekyll-breadcrumb"
---
While I was making this site, I really wanted to include some breadcrumbs so that my visitors could have easier navigation. Plus, it also doubles as a great border between the main content of my pages and their headers. Oddly enough, though, I was surprised that Jekyll had no pre-created plugins that someone could install to include such a simple *-- some would argue --* necessary component. I did manage to find other developers that shared their own ways of generating breadcrumbs, but I had trouble to get any of them to work. A big part of that was I didn't know anything about Ruby. So I realized that there was a need here for developers like me that wanted a simple and easy way to implement breadcrumbs to their static Jekyll sites, so I decided to do my best to fulfill that need.

<!-- more -->

## How It Works

One of the biggest components of Jekyll is that it uses a template engine called Twig, which is somewhat similar to Blade in Laravel or Razor in ASP.NET. Basically, what that means is that it allows the use of logic and variables in order to better generate more dynamic templates that can be used for several of your pages, regardless of content.

The first thing it will do is take the URL of the page that this code is implemented on and break it down to each URI component, which it does so by splitting it by the forward slashes *(/)*. It will automatically take the domain of the said URL, and immediately make that be the first breadcrumb to be labeled as "Home". Once that's done, it will loop through each URI component, and will turn each one of them into breadcrumbs.

Now it does something a little different on the last breadcrumb, however. But before I can elaborate on that, I have to explain what **Front Matter** is. Front Matter is a ruby friendly way of serializing data that needs to be passed into any given page or post that is needed for Jekyll to work. Within this Front Matter, is a standard data node named **"title"**, which can be called on at any time by referencing `{% raw %}{{ page.title }}{% endraw %}`{:.hljs .html .inline-code .raw}. Now on the last breadcrumb, it can use this data to give the full title of the page or post as the final breadcrumb. But if for whatever reason, it cannot find this data, it will just use the final URI component.

So to make a long story short, it will take `http://yourdomain.com/blog/lorem-ipsum`{:.hljs .html .inline-code}, and turn it into: `Home / Blog / Lorem Ipsum`{:.hljs .html .inline-code}.

This is all done in a single partial template, which can be called upon at any time by simply adding `{% raw %}{% include breadcrumbs.html %}{% endraw %}`{:.hljs .html .inline-code .raw} anywhere within their layout template.

While the primary functionality of this feature is in one file, it is not without its "backup singers". It of course uses CSS *(in the form of SASS that I compile using GULP)* to style it accordingly and make sure that it's always flushed with the page's header. The more notable thing about it is that the breadcrumbs utilizes a styling rule of `text-transform: capitalize;`{:.hljs .html .inline-code} to make sure that the breadcrumbs are always capitalized since they're almost always aren't in the URL.

Most importantly, there's the JavaScript file that uses jQuery to loop through each breadcrumb component to make sure that they are not URI encoded and that they are free of things like hyphens and underscores. So while the partial template file contains everything to make Jekyll generates the all the necessary breadcrumbs, the JavaScript and CSS files makes sure that everything looks as it should.

## Code Snippets

#### breadcrumbs.html

{% raw %}
```html
<div class="breadcrumb">
	<span class="breadcrumb__link">
		<a href="{{  site.baseurl  }}/">Home</a>
	</span>
	<span class="slash">/</span>
	{% capture page_urls %}{{  page.url | remove: "/index.html"  }}{% endcapture %}
	{% capture domain %}{{ site.baseurl }}{% endcapture %}
	{% assign splitted_url_parts = page_urls | split: '/' %}
	{% for url_part in splitted_url_parts %}
		{% if url_part == domain %}
			{% capture previous_url %}{{ site.baseurl }}{% endcapture %}
		{% else %}
			{% if forloop.last == false %}
				<span class="breadcrumb__link">
					<a href="{{ previous_url }}/{{ url_part }}">{{ url_part }}</a>
				</span>
				<span class="slash">/</span>
				{% capture previous_url %}{{ previous_url }}/{{ url_part }}{% endcapture %}
			{% else %}
				{% if page.title %}
					{% capture last_breadcrumb %}{{ page.title }}{% endcapture %}
				{% else %}
					{% capture last_breadcrumb %}{{ url_part | remove: ".html" }}{% endcapture %}
				{% endif %}
				<span class="breadcrumb__link">
					<a href="{{ previous_url }}/{{ url_part }}">{{ last_breadcrumb }}</a>
				</span>
			{% endif %}
		{% endif %}
	{% endfor %}
</div>
```
{% endraw %}

#### breadcrumbs.js

```javascript
( function( $ ) {
	$( document ).ready( function() {
		$.each( $( '.breadcrumb__link a' ), function( index, value ) {
			var breadcrumb = $( value ).html();
			if ( breadcrumb !== 'Home' ) {
				breadcrumb = decodeURI( breadcrumb );
				breadcrumb = breadcrumb.replace( /[^a-zA-Z0-9 ]/g,' ' );
				breadcrumb = breadcrumb.replace( /\s\s+/g, ' ' );
				$( value ).html( breadcrumb );
			}
		} );
	} );
} )( jQuery );
```

#### \_breadcrumb.scss

```scss

$dark-gray:         #555555;
$gray:              #CCCCCC;
$white:             #FFFFFF;

.breadcrumb {
	background: $gray;
	color: $darker-gray;
	display: inline-block;
	line-height: 3em;
	padding-left: 7%;
	width: 100%;
	span {
		display: table-cell;
		font-size: 1.1em;
		text-transform: capitalize;
		vertical-align: middle;
		a {
			color: $darker-gray;
			@include transition( 0.2s all ease-in-out );
			&:hover {
				color: $white;
			}
		}
	}
	.slash {
		font-size: 1.75em;
		padding: 0 0.75em;
	}
}
```

## GitHub Repo

If anyone would like to download these files for their own Jekyll site, or even contribute to making it better, then please [click here](https://github.com/bigk5000/jekyll-breadcrumb){:.no-break} to figure out how.

There will be a list of easy-to-follow instructions for both of those to wish to either use or contribute.
