---
title: How to create a VuePress site and deploy it to Netlify
date: 2020-01-18T16:49:07.895Z
thumbnail: /media/vue.js_logo.png
---
You already know [why VuePress and Netlify](/why-vuepress-and-netlify-cms) are the perfect combination for building modern websites. Let's get stuck in!

## Prerequisites

Before you start, you will need the standard set of front-end development tools installed on your computer - [Node](<>), [Git](<>) and a code editor like [VS Code](<>).

By the end of this tutorial you will have VuePress installed and a basic homepage for your site deployed to Netlify.

## VuePress setup in 10 simple steps

1. Login to your [GitHub](https://github.com/) account and create a new repository for your site.
2. Clone your repository on your computer and open the folder in [VS Code](https://code.visualstudio.com/) (or your preferred code editor).
3. Create `.vuepress/config.js` file and add

```js
module.exports = {
    title: "My First Vuepress Site", 
    description: "Welcome to my first VuePress site"
}
```

4. Create `index.md` (this is your homepage) and add the

```md
# Home
Welcome to my VuePress site
```

6. Create a `.gitignore` file and add

```
/node_modules
**/dist
```

7. In the terminal run `npm init -y`.
8. In the terminal run `npm i vuepress -D`.
9. Edit `scripts` in `package.json` file like so and save everything

<<< @/.vuepress/public/snippets/.package.json{6-9}

10. Take a first look at your homepage You are all set for a first look at your VuePress site. Open the terminal (`Ctrl+'` in VS Code) and run `npm run dev`, wait for the success message and open the link shown in the terminal.\
    \
    You should see your homepage. `npm run dev` launches a live server, so every time you save a `.md` files you will instantly see changes in your browser.

All good? Commit and push your changes to GitHub.

## Deploy your site on Netlify

1. Login to [Netlify](https://app.netlify.com/start) and follow the steps to create a new 'Continuous Deployment' site from your GitHub
2. Netlify will automatically pick up the build command and deployment path for VuePress, so go ahead and click 'Deploy' <!-- IMAGE NEEDED -->
3. After a short wait while Netlify runs your VuePress build, Netlify will deploy your site to a randomly generated url. You can change the name of your site in 'Site settings' or add your own domain name via 'Domain settings'
