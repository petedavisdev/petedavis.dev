---
title: Blog post 1
date: 2019-12-12T15:45:10.662Z
thumbnail: /media/vue.js_logo.png
---
# Part 1: Setup VuePress

## Prerequisites

Beginners should be able to follow along with these tutorials successfully. However, you will be able to do much more with your blog if you have some experience with CSS, JS and Git.

Before you start, you will need the standard set of front-end development tools installed on your computer - [Node](<>), [Git](<>) and a code editor like [VS Code](<>).

## 10 steps (approx 15 minutes)

By the end of this tutorial you will have a git repository for your blog with VuePress installed and a basic homepage to look at in your browser.

1. Login to your [GitHub](https://github.com/) account and create a new repository for your blog.
2. Clone your repository on your computer and open the folder in [VS Code](https://code.visualstudio.com/) (or your preferred code editor).
3. Create `docs/.vuepress/config.js` and add
``` js
module.exports = {
    title: "My First Vuepress Site", 
    description: "Welcome to my first VuePress site"
}
```
4. Create `docs/index.md` (this is your homepage) and add the
``` md
# Home
Welcome to my VuePress blog
```
6. Create a `.gitignore` file and add
```
/node_modules
**/dist
```
7. In the terminal run `npm init -y`.
8. In the terminal run `npm i vuepress -D`.
9. Edit `scripts` in packagee.json file like so and save everything

<<< @/docs/.vuepress/public/snippets/.package.json{6-9}

10. Take a first look at your homepage
You are all set for a first look at your VuePress site. Open the terminal (`Ctrl+'` in VS Code) and run `npm run dev`, wait for the success message and open the link shown in the terminal.\
\
You should see your homepage. `npm run dev` launches a live server, so every time you save a .md files you will instantly see changes in your browser.

All good? Commit and push your changes to GitHub.

## [Part 2: Connect Netlify CMS &rarr;](./blogging-with-vuepress-part-2.md)
