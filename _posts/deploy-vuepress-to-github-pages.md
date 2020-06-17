---
title: The easy way to deploy a VuePress site to GitHub Pages
date: 2020-06-17T19:57:13.209Z
thumbnail: /media/vuepress-logo.png
tags:
  - VuePress
permalink: /:slug
---
VuePress is most commonly used to build for documentation sites and GitHub Pages is most commonly used to host documentation sites, so it makes sense to use them together.

Unfortunately this seems to be something that people struggle with.

The first thing to realise is that GitHub won't automatically build your site for you. You have to build it and then deploy the content of the **.vuepress/dist** folder.

The second thing is that you don't want to have your dist files in your codebase. You should only be committing development code to your master branch. 

The solution to this is to deploy to a branch called **gh-pages**. This is a special branch name reserved for this purpose. GitHub recognises is and automatically deploys the content of this branch for you.

The VuePress docs include [instructions on how to add a deploy.sh file to your repo](https://vuepress.vuejs.org/guide/deploy.html#github-pages) which is great, especially if you want to set up automatic deployment as part of a CI process.

If that looks intimidating, this [npm package](https://www.npmjs.com/package/gh-pages) means you can deploy with a single command.

```
npm run build && npx gh-pages docs/.vuepress/dist
```

So you don't have to remember this, you'll want to add this to your scripts in your **package.json** file...

```
    "deploy": "npm run build && npx gh-pages docs/.vuepress/dist"
```
... and then run `npm run deploy` to deploy.

Set the right base, e.g. `"/name-of-your-repository/"`

> Using `npx` is optional. It means that you grab the package from npm when you need it. This adds about 5 seconds to each deployment, which isn't a big deal as you're not deploying constantly. If you prefer run `npm install -D gh-pages` and then remove `npx` from the deploy script.

One more thing you need to know. In order for links to work properly in your app you'll need to set the correct base in your .vuepress/config.js file.