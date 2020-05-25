---
title: Why not VuePress?
date: 2020-05-25T06:20:57.044Z
thumbnail: /media/vuepress-logo.png
tags:
  - VuePress
  - Opinions!
permalink: /:slug
---
I've chosen \[VuePress] to build this blog and my other side-projects, but it wouldn't be the right choice for every project.

Here are 5 reasons why you would not use VuePress:

## 1. You don't want to see the code

VuePress is easy to \[get started] with, even if you are a beginner web developer. To get the most out of VuePress, you just need a basic understanding of HTML, CSS, JS and Git.

However, if you are completely code-phobic you'll want to use a [no-code website builder](https://www.nocode.tech/category/website-builders). Just beware of getting locked into something where you don't have control of the cost, the code or the data.

### Are you afraid of code?

<label><input type="radio" name="code" value="minus"> Yes</label>

<label><input type="radio" name="code" value="plus"> No</label>

## 2. You don't like Vue

I would recommend VuePress even if you have never used Vue before. Learning Vue is not a prerequisite to using VuePress. If you want to learn Vue, a VuePress site makes a good playground.

However, if you have tried Vue and decided it's not for you, VuePress is not going to be your first choice. If you prefer not to have a JS framework involved in your static site, try \[Eleventy]. However, generating a static site with Vue does make it super easy to create interactive content like this:

### Would you hate using Vue?

<label><input type="radio" name="vue" value="minus"> Yes</label>

<label><input type="radio" name="vue" value="plus"> No</label>

## 3. You want a large choice of readymade themes

One of the great strengths of VuePress is that the default theme is perfect for technical documentation site. Perhaps its greatest weakness is that few developers look past this theme to see what else VuePress is good for. 

There is also a \[default blog theme], which is what I'm currently using for this blog. You can easily change the colour palette of the default themes (as I have done here), but to customise further or develop your own theme you'll have to be fairly confident in your own design and front-end development skills.

There is a community of VuePress developers sharing their own open-source themes, but you will not find a vast selection of battle-tested themes to suite every kind of website.

### Do you need to find just the right readymade theme?

<label><input type="radio" name="themes" value="minus"> Yes</label>

<label><input type="radio" name="themes" value="plus"> No</label>

## 4. You're building a large enterprise website

The default way to create VuePress site content is with Markdown files saved in your Git repository. You manage drafts, publishing and versioning content using your normal Git workflow. To make content authoring easy for people who don't use Git, you can add a Git-based Content Management System like \[Netlify CMS] or \[Forestry]. Managing your code and content in one place is an ideal for solo-projects and smaller teams.

For a large enterprise website it makes sense to separate your content from your codebase and use a more fully-featured CMS. I would suggest pairing a headless CMS like [Contentful] with a Static Site Generator that is designed to compile content from APIs like [Gridsome].

### Are you building a large enterprise website?

<label><input type="radio" name="enterprise" value="minus"> Yes</label>

<label><input type="radio" name="enterprise" value="plus"> No</label>

## 5. You're building a data-driven web app

One of the big selling points of VuePress is that there is no need for a database. Like any website, you can fetch data from APIs within VuePress, but the expectation is that the majority of the content you display will be fairly static.

If you are building an app where the main content is constantly updating or highly personalised, a Static Site Generator like VuePress doesn't make sense. Instead you could try adding [Vue Apollo] to a Vue app or starting with [Nuxt]. I'll leave the database research up to you!

### Are you building a data-driven web app?

<label><input type="radio" name="data" value="minus"> Yes</label>

<label><input type="radio" name="data" value="plus"> No</label>

## Is VuePress a good fit for your next project?

<div v-if="positive === 5">

Yes! VuePress is theHere are are couple of templates to get you started:

- [VuePress with the default theme and Netlify CMS]
- [VuePress with the default **blog** theme and Netlify CMS]

</div>
<div v-else-if="negative">

VuePress is probably not the right fit.

</div>
<div v-else>

Answer the questions to find out...

</div>

<script>

</script>