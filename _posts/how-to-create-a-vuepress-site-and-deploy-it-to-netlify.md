---
title: How to create a VuePress site and deploy it to Netlify
date: 2020-01-18T16:49:07.895Z
thumbnail: /media/vue.js_logo.png
---
You already know [why VuePress and Netlify](/why-vuepress-and-netlify-cms) are the perfect combination for building fast JAMstack websites. Let's build!

## Before you start

You will need the usual front-end development tools installed on your computer - [Git](https://git-scm.com/), [Node](https://nodejs.org/) and [your favourite code editor](https://code.visualstudio.com/).

Grab yourself a fresh [GitHub](https://github.com/) repo and [clone it](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) on your computer.

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
}
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

![VuePress files](/media/VuePress files.png "VuePress files")

You are all set for a first look at your VuePress site locally.  `npm run dev` launches a live server so that you can see changes in your browser as you develop your site.

All good? Commit and push your changes to GitHub.

## Deploy your site on Netlify

1. Login to [Netlify](https://app.netlify.com/start) and follow the steps to create a new 'Continuous Deployment' site from your GitHub
2. Netlify will automatically pick up the build command and deployment path for VuePress, so go ahead and click 'Deploy' <!-- IMAGE NEEDED -->
3. After a short wait while Netlify runs your VuePress build, Netlify will deploy your site to a randomly generated url. You can change the name of your site in 'Site settings' or add your own domain name via 'Domain settings'
