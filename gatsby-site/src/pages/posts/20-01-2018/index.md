---
path: "/blog/css-in-js"
date: "2018-01-20"
title: "CSS-in-JS"
---

Writing JavaScript with React today we are used to thinking in tiny reusable component when we structure our applications. These components can be thought of as lego blocks and should be small and focused.

To style our components and make them look the way we want using regular CSS stylesheets, we must map components and styles via CSS class name. But why? We have React and components.

> “If you’re writing React, you have access to a more powerful styling construct than CSS class names. You have components.” - Michael Chan, [@chantastic](https://twitter.com/chantastic?lang=en)

As we erase the mapping between components and styles we also unlock the full power of JavaScript. 

With CSS-in-JS, any potential style collision and leakage between components will be removed. Updating the styles for a components will not cause ripple effects. We get predictable and consistent components.