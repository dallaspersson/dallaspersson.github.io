---
layout: posts
title: Use Web Fonts for Icons
tags: [icons]
---

Icons are used a lot in web applications. Most of the time I use icons from
Glyphicons or Font Awesome. They have free sets of icons that you can use and
Glyphicons Halflings are included with Bootstrap. These icons are wrapped as a
font which means that they are vector based. So compared to bitmap images they
scale to any size and still look pixel-perfect. And this also means that you
will not have to worry about different screen resolutions, such as retina displays.

At my job when I work in a development team and creating some sort of web
application there is most often a person that handles the graphical things. This
person might be a UX designer or a graphical designer that does the overall
design which then me and the other developer follows. The designer also does
custom icons. In my first project these icons were simple images, which meant
that we developers would have to do some work to ensure that the icons made the
best use of the medium that they are viewed on. By this, I mean the size and
resolution of the screen. One solution would be to ask the designer provide
these icons in different sizes. Then we could use CSS media queries to figure
out which to show. So great! But lets say that one week from
having implanted this the customer calls and asks us to change the icons color.
This would mean quite a lot of work from the designer who would need to change
color and re-save how ever many icons there are. So lets agree this is not optimal.

When we use web fonts, it is easy to change colors. It is the most basic CSS
syntax. Just do a `color: red;` and done. Having icons wrapped in a font would let
us change color just as easy and also let us size them to what ever size we
want. Last week I discovered that IcoMoon have a great tool for wrapping icon
SVG&#39;s as web font. So check it the IcoMoon App. Click _Import Icons_
and select your SVG files and then the rest is easy. When your done click
_Download_ and you get the fonts.

<a href="/">Back</a>
