---
title: Why not VuePress?
date: 2020-05-30T02:20:57.044Z
thumbnail: /media/vuepress-logo.png
tags:
  - VuePress
permalink: /:slug
---

I've chosen [VuePress](https://vuepress.vuejs.org) to build this blog and my other side-projects, but it wouldn't be the right choice for every website.

In this post I'll cover 5 reasons why you might *not* choose to build your website with VuePress. Answer the questions as you go to reach the right conclusion.

## 1. You don't want to see the code

VuePress is easy to [get started](/how-to-create-a-vuepress-site-and-deploy-it-to-netlify/) with, even if you are a beginner web developer. To get the most out of VuePress, you just need a basic understanding of HTML, CSS, JS and Git.

However, if you are completely code-phobic you'll want to use a [no-code website builder](https://www.nocode.tech/category/website-builders). Just beware of getting locked into something where you don't have control of the cost, the code or the data.

___

#### Are you afraid of code?

<label><input type="radio" v-model="code" value="yes"> Yes</label>

<label><input type="radio" v-model="code" value="no"> No</label>

___

## 2. You don't like Vue

I would recommend VuePress even if you have never used Vue before. Learning Vue is not a prerequisite to using VuePress. If you want to learn Vue, a VuePress site makes a good playground.

If you have tried Vue and decided it's not for you, VuePress is not going to be your first choice. If you prefer not to have a JS framework involved in your static site, try [Eleventy](https://www.11ty.dev/). 

However, VuePress is more than just a static site generator. Once a page is loaded it [hydrates to a Single Page App (SPA)](https://vuepress.vuejs.org/guide/#how-it-works), giving you the best of both worlds. Having Vue baked-in also makes it easy to create [interactive content](/fun-things-you-can-do-in-vuepress-markdown/), like the questions in this blog post.

___

#### Would you really hate using Vue?

<label><input type="radio" v-model="vue" value="yes"> Yes</label>

<label><input type="radio" v-model="vue" value="no"> No</label>

___

## 3. You want a large choice of readymade themes

One of the great strengths of VuePress is that the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html) is perfect for technical documentation sites. The trouble is, this theme is so nicely designed that relatively few developers have gone to the trouble of developing alternatives. 

There is also a default [blog theme](https://vuepress-theme-blog.ulivz.com/), which is what I'm currently using for this site. You can easily change the colour palette of the default themes (as I have done here), but to customise further or develop your own theme you will have to be fairly confident in your own design and front-end development skills.

There is a community of VuePress developers sharing their own open-source themes, but you will not find a vast selection of well-used themes. For me, this isn't a problem because creating themes is the fun part and I'm hoping to start publishing themes of my own soon.

___

#### Do you need to find just the right readymade theme?

<label><input type="radio" v-model="themes" value="yes"> Yes</label>

<label><input type="radio" v-model="themes" value="no"> No</label>

___

## 4. You have complex content management requirements

The main way to create VuePress site content is with Markdown files saved in your Git repository. You manage drafts and publish content using your normal Git workflow. To make content authoring easy for people who don't use Git, you can add a Git-based Content Management System (CMS) like [Netlify CMS](/add-netlify-cms-to-vuepress/) or [Forestry](https://forestry.io/).

There are huge advantages to this Markdown + Git approach to content:

- Full version control with easy rollback
- Fast builds and easy local development
- No back-end, database or third-party integrations to maintain

This approach only becomes a problem if you have a huge, complicated website or if you're content is across multiple sources or channels. In these cases, I would suggest pairing a headless CMS like [Contentful](https://www.contentful.com/) with a Static Site Generator that is designed to compile content from APIs like [Gridsome](https://gridsome.org/).

___

#### Do you really need a database-backed/API-based CMS?

<label><input type="radio" v-model="enterprise" value="yes"> Yes</label>

<label><input type="radio" v-model="enterprise" value="no"> No</label>

___

## 5. You're building a data-driven web app

One of the big selling points of VuePress is that there is no need for a database. Like any website, you can fetch data from APIs dynamically in a VuePress site if you want to. However, VuePress is best when the majority of the content you display will be fairly static.

If you are building an app where the main content is constantly updating or highly personalised, why would you generate a static site? Instead you could try adding [Vue Apollo](https://apollo.vuejs.org/) to a Vue app or starting with [Nuxt](https://nuxtjs.org/). I'll leave the database research up to you!

___

#### Are you building a dynamic, data-driven app?

<label><input type="radio" v-model="data" value="yes"> Yes</label>

<label><input type="radio" v-model="data" value="no"> No</label>

___

## Conclusion

<div v-if="vuepress === 'yes'">

- You want to be in control of your code :+1:
- You want the benefits of a static site *and* a Vue SPA :+1:
- You want to use a default theme *or* create your own theme :+1:
- You want content in Markdown, managed with Git :+1:
- You want a website, not a data-driven app :+1:

VuePress is the perfect choice :smile:

Here's how you can get up-and-running quickly with [VuePress](/how-to-create-a-vuepress-site-and-deploy-it-to-netlify/) and [add Netlify CMS](/add-netlify-cms-to-vuepress/).

</div>
<div v-else-if="vuepress === 'no'">

Based on your answers, VuePress is probably not the right fit for your current project.

Take another look at VuePress if...

- you want to be in control of your code,
- you want the benefits of a static site *and* a Vue SPA,
- you want to use a default theme *or* create your own theme,
- you want content in Markdown, managed with Git,
- you want a website, *not* a data-driven app.

If you're still curious - here's how you can get up-and-running quickly with [VuePress](/how-to-create-a-vuepress-site-and-deploy-it-to-netlify/) and [add Netlify CMS](/add-netlify-cms-to-vuepress/).

</div>
<div v-else>

Answer the 5 questions above to get your conclusion :wink:
___

</div>

<TinyLetter />

<script>
module.exports = {
  data() {
    return {
      code: null,
      vue: null,
      themes: null,
      enterprise: null,
      data: null
    }
  },
  computed: {
    vuepress() {
      if (this.code === 'yes' || this.vue === 'yes' || this.themes === 'yes' || this.enterprise === 'yes' || this.data === 'yes') {
        return 'no';
      } else if (this.code === 'no' && this.vue === 'no' && this.themes === 'no' && this.enterprise === 'no' && this.data === 'no') {
        return 'yes';
      }
    }
  }
};
</script>