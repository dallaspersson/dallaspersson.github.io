# My blog

Live on [http://dallaspersson.github.io/](http://dallaspersson.github.io/).

## Install
1. **Ruby** - Jekyll requires the Ruby language. If you have a Mac, you've most likely already got Ruby. If you open up the Terminal application, and run the command ruby --version you can confirm this. Your Ruby version should be at least `2.0.0`. If you've got that, you're all set. Skip to step #2. Otherwise, follow these instructions to install Ruby.

2. **Bundler** - Bundler is a package manager that makes versioning Ruby software like Jekyll a lot easier if you're going to be building GitHub Pages sites locally. If you don't already have Bundler installed, you can install it by running the command `gem install bundler`.

3. **Jekyll** - The main event. You'll want to create a file in your site's repository called Gemfile and add the line `gem 'github-pages'`. After that, simply run the command, `bundle install` and you're good to go. If you decided to skip step #2, you can still install Jekyll with the command `gem install github-pages`, but you may run into trouble down the line. Here’s an example of a Gemfile you can use (placed in the root directory of your repository):

```
source 'https://rubygems.org'
gem 'github-pages'
```

## Running Jekyll
To run Jekyll in a way that matches the GitHub Pages build server, run Jekyll with Bundler. Use the command `bundle exec jekyll serve --watch` in the root of your repository (after switching to the gh-pages branch for project repositories), and your site should be available at [http://localhost:4000](http://localhost:4000). For a full list of Jekyll commands, see the [Jekyll documentation](http://jekyllrb.com/docs/usage/).

## Keeping Jekyll up to date
Jekyll is an active [open source project](https://github.com/jekyll/jekyll), and is updated frequently. As the GitHub Pages server is updated, the software on your computer may become out of date, resulting in your site appearing different locally from how it looks when published on GitHub. To keep Jekyll up to date, you can run the command `bundle update` (or if you opted out of step 2, run `gem update github-pages`).
