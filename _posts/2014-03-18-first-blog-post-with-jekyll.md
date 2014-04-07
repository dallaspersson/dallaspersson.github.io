---
layout: posts
title: First Blog Post with Jekyll
tags: [jekyll, web, github]
---

{% include post_header.html title=page.title %}

A Second Level Header
---------------------

So as the title explains, this is my first blog post with [Jekyll](http://jekyllrb.com/).
My first impression so far is really good. This is an awesome tool for generating
a blog, and it&#39;s really easy to deploy with [Github Pages](http://pages.github.com/).
This is just my &quot;Hello World!&quot; post, so in a while I will create a post of how I
set up Jekyll with Github Pages.

### Tags
<ul>
  {% for tag in page.tags %}
    <li>{{ tag }}</li>
  {% endfor %}
</ul>

<a href="/">Back</a>
