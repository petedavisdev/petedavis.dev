---
title: The easy way to deploy a VuePress site to GitHub Pages
date: 2020-06-17T19:57:13.209Z
thumbnail: /media/vuepress-logo.png
tags:
  - VuePress
permalink: /:slug
---
[VuePress](https://vuepress.vuejs.org/) is most commonly used to build documentation sites. 

[GitHub Pages](https://pages.github.com/) is most commonly used to host documentation sites.

### They should just work together, right?

The first thing to realise is that GitHub won't build your site for you. In fact, if you just set GitHub to use your **docs** folder, it will build you a Jekyll site :confused:

If you want your VuePress site on GitHub Pages, you first have to build it yourself and then deploy the content of the **.vuepress/dist** folder.

The second thing is that there is no way to tell GitHub to deploy the content of your **dist** folder. That's probably a good thing as it's best practice to `.gitignore` compiled files in your codebase. So where do you deploy to?

### The magic `gh-pages` branch :sparkles:

The solution to this is to deploy to a branch called **gh-pages**. This is a special branch name that GitHub recognises and deploys automatically.

The VuePress docs include [instructions on how to add a deploy.sh file](https://vuepress.vuejs.org/guide/deploy.html#github-pages) to your repo, which is especially useful if you want to set up automatic deployment as part of a CI process. 

However, if you're looking for the easiest way to start deploying to GitHub Pages, you can do it with one command:

```
npm run build && npx gh-pages docs/.vuepress/dist
```

That's all there is to it! :smile:

After you run this command, you will find a link to your deployed site in your GitHub repository settings, which will look something like this:  **https://username.github.io/repo-name/**

### A little config

Because your site is not hosted at the root of this subdomain, you'll need to add the following inside your **.vuepress/config.js** file to make sure your links work:

```
    base: "/repo-name/",
```

So you don't have to remember the command, add this to your scripts in your **package.json** file...

```
    "deploy": "npm run build && npx gh-pages docs/.vuepress/dist"
```
... and then run `npm run deploy`.

If you're wondering what the `npx` is about, that's a way to use an npm package without having to install it as a dependency. If you prefer, you can run `npm install -D gh-pages` and then remove `npx` from above script.

### Demo time

Finally, it's always nice to demo a working example:

[petedavisdev.github.io/VuePress-with-Netlify-CMS/](https://petedavisdev.github.io/VuePress-with-Netlify-CMS/)

Check out the code on the [master branch](https://github.com/petedavisdev/VuePress-with-Netlify-CMS) and the [gh-pages branch](https://github.com/petedavisdev/VuePress-with-Netlify-CMS/tree/gh-pages) to see how it works.

<TinyLetter />