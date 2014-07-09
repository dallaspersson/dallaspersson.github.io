---
layout: posts
title: Building a Real-Time Chat App with Node.js
tags: [JavaScript, Node, Express, Handlebars]
---

So I have been wanting to get in to Node for some time now. This is my first
step towards learning Node. This tutorial will go through building a light web
server using Node and Express. Then I will implement Socket.io to build a
real-time chat application. For templating I like Handlebars, so I will add that
to the mix. This tutorial assumes you have Node installed on your computer
already. So if you don’t, the look up how to install it before continuing.

Express is a framework for Node and often misstaken for Node itself. A lot of
applications that use Node, also use Express.

"Express is a minimal and flexible node.js web application framework, providing
a robust set of features for building single and multi-page, and hybrid web
applications.” - expressjs.com

First off, we need a package.json file to specify our dependencies. This makes
it easy for other developers to quickly get your code running on their machines.
Either create it manually by typing 'touch package.json’ in your terminal. Or
use the Node Package Manager (nom) and run ’npm init’ in your terminal and one
is created with the basic skeleton of code. It should look something like this
when your done.

{
  "name": "node-chat",
  "description": "A simple chat app to try out node.",
  "version": "0.0.1",
  "dependencies": {
  }
}


So since this app is using Express, we should install it. Todo this we would
run 'npm install express’ and ’BAM!’ its on your computer. But it’s not in your
package.json file. So now you could add it there an specify the version you use
but the easiest way is to let nom help out. If you run
’nom install express —save’ it is automatically added to your dependency list
in your package.json file. It is no problem repeating these two.
