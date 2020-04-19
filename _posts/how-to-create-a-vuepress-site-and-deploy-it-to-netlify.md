---
title: How to create a VuePress website and deploy it to Netlify
date: 2020-01-20T16:49:07.895Z
thumbnail: /media/VuePress-about-page.png
tags:
  - VuePress
  - Netlify
  - Tutorials
---
[VuePress](https://vuepress.vuejs.org/) and [Netlify](https://www.netlify.com/) make it easy to generate and deploy static sites. Here's how you get your first VuePress site installed and online in just a few minutes.

## Before you start

You will need the usual front-end dev tools installed on your computer - [Git](https://git-scm.com/), [Node](https://nodejs.org/) and [your favourite code editor](https://code.visualstudio.com/). 

Grab a fresh [GitHub](https://github.com/) repo for your site and [clone it](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) on your computer.

## VuePress in 5 steps

1. Add this to your `.gitignore` file

```
/node_modules
**/dist
```

2. Create a `.vuepress` folder with a `config.js` file and add

```js
module.exports = {
  title: "My First Vuepress Site",
  description: "Welcome to my first VuePress site"
};
```

3. Create `index.md` and add something like

```md
# Homepage

Welcome to my VuePress site
```

4. In the terminal run `npm init -y` and then `npm i vuepress -D`
5. Add `build` and `dev` scripts to your `package.json` file

<<< @/.vuepress/public/snippets/.package.json{7-8}

You should now have all of these files:

![VuePress files](/media/VuePress-files.png "VuePress files")

You are all set for a first look at your VuePress site locally. `npm run dev` launches a live server so that you can see changes in your browser as you develop your site.

All good? Commit and push your changes to GitHub.

## Deploy your site on Netlify

Login to [Netlify](https://app.netlify.com/) and follow the steps to create a new site from your GitHub repo.

Change the build command to `npm run build` and publish directory to `.vuepress/dist`.

![Netlify VuePress build settings](/media/Netlify-VuePress-build-settings.png "Netlify VuePress build settings")

Hit "Deploy site"!

After a short wait while Netlify runs your build, your site will deploy your site to a randomly generated url. You can change the name of your site or add your own domain name via 'Domain settings'.

Voilà! Not only is your website deployed, it will magically redeploy with every change to master on GitHub.

## Adding pages and navigation

To demonstrate the Netlify CI process and make the site feel a bit more real, let's add another page and a menu.

Create a folder called `_pages` and add `about.md` with some markdown content like so:

```
---
title: About me
permalink: '/:slug'
---

# My life story
I was born on a rainy Tuesday in...
```

The bit between `---`'s is known as [front matter](https://vuepress.vuejs.org/guide/frontmatter.html) and its purpose is to add data that is used when VuePress generates your site. In this case, the `title` is what gets displayed in the browser tab and setting `permalink: /:slug` means that _pages will be removed from the path in the page url.

Now that you have a new page, you need a way to navigate to it.

Edit your `.vuepress/config.js` file like so:

```js{4-9}
module.exports = {
  title: "My First Vuepress Site",
  description: "Welcome to my first VuePress site",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" }
    ]
  }
};
```

Netlify will immediately notice when these changes reach your master branch on GitHub. As soon as it's done building, your site will be updated.

![About page in browser](/media/VuePress-about-page.png "About page in browser")

## Next...

[Official VuePress guide](https://vuepress.vuejs.org/guide/)

[VuePress default theme config](https://vuepress.vuejs.org/theme/default-theme-config.html)

[Netlify docs](https://docs.netlify.com/)