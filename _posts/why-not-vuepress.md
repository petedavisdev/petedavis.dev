---
title: Why not VuePress?
date: 2020-05-25T06:20:57.044Z
thumbnail: /media/vuepress-logo.png
tags:
  - VuePress
permalink: /:slug
---

I've chosen [VuePress](https://vuepress.vuejs.org) to build this blog and my other side-projects, but it wouldn't be the right choice for every project.

In this post I'll give the 5 reasons why you might NOT choose to build your website with VuePress. Answer the questions as you go to get a personalised conclusion.

## 1. You don't want to see the code

VuePress is easy to [get started](/how-to-create-a-vuepress-site-and-deploy-it-to-netlify/) with, even if you are a beginner web developer. To get the most out of VuePress, you just need a basic understanding of HTML, CSS, JS and Git.

However, if you are completely code-phobic you'll want to use a [no-code website builder](https://www.nocode.tech/category/website-builders). Just beware of getting locked into something where you don't have control of the cost, the code or the data.

### Are you afraid of code?

<label><input type="radio" v-model="code" value="yes"> Yes</label>

<label><input type="radio" v-model="code" value="no"> No</label>

## 2. You don't like Vue

I would recommend VuePress even if you have never used Vue before. Learning Vue is not a prerequisite to using VuePress. If you want to learn Vue, a VuePress site makes a good playground.

If you have tried Vue and decided it's not for you, VuePress is not going to be your first choice. If you prefer not to have a JS framework involved in your static site, try [Eleventy](https://www.11ty.dev/). 

I'm sticking with VuePress because it generates static pages, but [hydrates to a Single Page App (SPA)](https://vuepress.vuejs.org/guide/#how-it-works), giving users the best of both worlds. Having Vue in the mix also makes it easy to [add interactivity](/fun-things-you-can-do-in-vuepress-markdown/) to my content.

Of course, if you are a dedicated React dev, you're probably already using [Gatsby](https://www.gatsbyjs.org/).

### Would you really hate using Vue?

<label><input type="radio" v-model="vue" value="yes"> Yes</label>

<label><input type="radio" v-model="vue" value="no"> No</label>

## 3. You want a large choice of readymade themes

One of the great strengths of VuePress is that the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html) is perfect for technical documentation site. The downside to this is that few developers look past this theme to see what else VuePress can do. 

There is also a default [blog theme](https://vuepress-theme-blog.ulivz.com/), which is what I'm currently using for this site. You can easily change the colour palette of the default themes (as I have done here), but to customise further or develop your own theme you'll have to be fairly confident in your own design and front-end development skills.

There is a community of VuePress developers sharing their own open-source themes, but you will not find a vast selection of battle-tested themes to suit every kind of website.

For me, this isn't a problem because creating themes is the fun part.

### Do you need to find just the right readymade theme?

<label><input type="radio" v-model="themes" value="yes"> Yes</label>

<label><input type="radio" v-model="themes" value="no"> No</label>

## 4. You're creating huge amounts of content for multiple channels

The main way to create VuePress site content is with Markdown files saved in your Git repository. You manage drafts and publish content using your normal Git workflow. To make content authoring easy for people who don't use Git, you can add a Git-based Content Management System (CMS) like [Netlify CMS](/add-netlify-cms-to-vuepress/) or [Forestry](https://forestry.io/).

There are huge advantages to this approach:

- Full version and control with easy rollback
- Fast builds adn easy local development
- No back-end, database or third-party integrations to maintain

This approach only becomes a problem if you need to serve content via a multitude of different apps or if you have a huge complicated site. In these cases, I would suggest pairing a headless CMS like [Contentful](https://www.contentful.com/) with Static Site Generator that is designed to compile content from APIs like [Gridsome](https://gridsome.org/).

### Do you really need the power and responsibility of a database-backed, API-based CMS?

<label><input type="radio" v-model="enterprise" value="yes"> Yes</label>

<label><input type="radio" v-model="enterprise" value="no"> No</label>

## 5. You're building a data-driven web app

One of the big selling points of VuePress is that there is no need for a database. Like any website, you can fetch data from APIs within VuePress, but the expectation is that the majority of the content you display will be fairly static.

If you are building an app where the main content is constantly updating or highly personalised, why would you generate a static site? Instead you could try adding [Vue Apollo](https://apollo.vuejs.org/) to a Vue app or starting with [Nuxt](https://nuxtjs.org/). I'll leave the database research up to you!

### Are you building a data-driven web app?

<label><input type="radio" v-model="data" value="yes"> Yes</label>

<label><input type="radio" v-model="data" value="no"> No</label>

## Conclusion

<div v-if="vuepress === 'yes'">

Try VuePress! Based on your answers, VuePress is a great fit for you. Here are are couple of templates to get you started:

- [VuePress with the default theme and Netlify CMS]
- [VuePress with the default **blog** theme and Netlify CMS]

</div>
<div v-else-if="vuepress === 'no'">

No. Based on your answers, VuePress is probably not the right fit this time.

</div>
<div v-else>

Answer the questions to find out...

</div>

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