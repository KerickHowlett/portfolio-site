---
layout: posts
title:  "Double Variables"
author: "Kerick Howlett"
feature_image: double_variable
date:   2017-02-27 11:32:00 -0400
excerpt_separator: <!-- more -->
technologies:
- name: "HTML"
  image: "html.png"
  link: "https://developer.mozilla.org/en-US/docs/Web/HTML"
- name: "PHP"
  image: "php.jpg"
  link: "http://php.net/manual/en/intro-whatis.php"
- name: "WordPress"
  image: "wordpress.png"
  link: "https://wordpress.com/"
related_links:
  - title: "Variable Variables"
    href: "http://php.net/manual/en/language.variables.variable.php"
---
Every once in a while, a programmer will come across one of those situations where he or she will find a very useful and practical programming method to resolve a problem, but will not be able to think of many other scenarios where that method would need to be called for again. But yet, I was very proud of myself when I came up with it, as it was something that neither my colleagues nor I get to use very often in a pragmatic way.

<!-- more -->

### The Use Case
My team and I were working on creating a special calendar for a client *-- who owned a nearby amusement park --* that was suppose to dynamically generate special markings on specific days based on a CSV file that they would provide. For those that don't know, a CSV *(Comma Separated Values)* file is basically converting a spreadsheet into pure text. In said file, each date would have a special event and/or type of day that was associated with their hours of operation. Now of course, this also included a set of Legends that would go to describe what everything on the calendar means for each month.

Normally, one might do this with a loop though the part of the CSV file that possessed the information that indicated what special event or rule was to be associated with the given date, filter them out so that only the unique values, and finally use a series of if-statements to determine which block of HTML code that needs to be echoed out accordingly. For example, if during a month, there were to be fireworks, then one might use an if-statement to show that specific legend *(or HTML block)*. That was what I though up originally, too, even though I had always thought that way sounded kind of messy, code-wise; however, there was a slight hiccup with that plan.

The client wanted the legends to show up in the order they appeared on the calendar -- not in alphabetic order or the like. Now, the thing with if-statements are that they always fire in the exact same order they appear in the code every single time. So if I were to have an if-statement for some music festival first and one for the fireworks later on down the code, the legends will always appear in that order, regardless of their order in the CSV file.

### The Solution
There is a means in PHP where you can actually assign a variable to a variable, which is called a "Double Variable". The simplest way to do this *-- and the way I did this --* is simply put two dollar signs in front of your variable.

**Example:** `echo $$foo;`{:.hljs .php .inline-code}

There is other means of going about this, such as processing variable names and tagging on additional bits to the final variable name and output, which can be found under [Variable Variables](http://php.net/manual/en/language.variables.variable.php) on the PHP site.

I've actually wanted to do something like this for a while now, but I could never think of a practical reason to use it, so I was naturally excited to finally put this into practice. So how I went about doing this was to first extract all the unique rule names and put them into an array. These would contain values, such as `legend_1`{:.hljs .php .inline-code} or `legend_fireworks`{:.hljs .php .inline-code}. Now, there will already be some pre-established variables containing HTML code that will be named the exact same as those values.

Say that I have a value in my array with the value of `bar`{:.hljs .php .inline-code} with a matching variable name that contains its own HTML code that needs to be echoes out, and I also have the double variable within a loop of `$$foo`{:.hljs .php .inline-code}. Now, how this works is something similar to basic high school algebra. When the code is processed, it will basically turn the Double Variable into this: `${$foo}`{:.hljs .php .inline-code}. And based on the rules of algebra, it will do the variable inside the parentheses *(or in this case, the curly braces)* first. Effectively, turning the code into this: `${bar}`{:.hljs .php .inline-code} before finally turning the final variable into this: `$bar`{:.hljs .php .inline-code}. Finally, it will then echo out the HTML block that was associated with the `$bar`{:.hljs .php .inline-code} variable.

That way, when the code loops through the array that essentially contains the variable names of the HTML blocks that will be echoed out. Only this time, they can be done so in any order, and the code is left looking much cleaner without having to map out a plethora of if-statements.

### Code Example

I did it in two files: one file containing several variables that are each associated with a different HTML block, and the WordPress template. This file contains the PHP code that runs the construction of the calendar and the legends, which contains the loops and double variables. But for this example, I'm just gonna show a simplification of it, especially since I can't show the actual code that I used for this project.

```php
// Array of legend variable names.
$collection = [ 'legend_1', 'legend_2', 'legend_fireworks' ];

// Legend Variables.
$legend_1 = "<h2>Legend One</h2>";
$legend_1 = "<h2>Legend Two</h2>";
$legend_1 = "<h2>Legend Fireworks</h2>";

// The loop & Double Variable.
foreach( $collection as $item ) echo $$item;
```
