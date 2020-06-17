---
title: Deploy VuePress to GitHub Pages
date: 2020-06-17T19:57:13.209Z
thumbnail: /media/vuepress-logo.png
tags:
  - VuePress
permalink: /:slug
---
Deploy your VuePress site to GitHub Pages the easy way!

* VuePress is great for creating documentation sites and it makes sense to deploy docs on GitHub pages because that's where your code lives
* There seems to be lots of confusion and frustration about it
* Neither the VuePress or GitHub docs are very clear
* GitHub will use Jekyll by default

1. Set the right base, e.g. `"/name-of-your-repository/"`
2. Run `npm i -D gh-pages`
3. Add this to your `"scripts"` in your `package.json` file: `"deploy": "npm run build && gh-pages docs/.vuepress/dist"`
4. Run `npm run deploy`

What gh-pages does

* create/update a branch called **gh-pages** which includes only the content of your `dist` folder and pushes it to GitHub
* GitHub recognises this branch name and the presence of index.html and automatically deploys your static site to GitHub pages \[!screenshot]