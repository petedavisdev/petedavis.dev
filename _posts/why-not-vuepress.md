---
title: Why not VuePress?
date: 2020-05-25T06:20:57.044Z
thumbnail: /media/vuepress-logo.png
tags:
  - VuePress
  - Opinion
permalink: /:slug
---
This has been created in, and has so far been all about, VuePress. VuePress is awesome, but it is not the right fit for every website. This blog post will help you decide if VuePress is right for your website.

Here are 8 reasons why you might not choose VuePress:

## 1. You don't want to see the code

VuePress is relatively easy to get started with even if you are a beginner developer. To get the most out of VuePress, you will need to understand the basics if HTML, CSS, JS and Git. These are the most essential skills for any work on the web, and you can learn what you need as you go along.

However, if you are completely code-phobic you'll want to use a [no-code website builder](https://www.nocode.tech/category/website-builders). Just beware of getting locked into something where you can't control the cost, code or data.

## 2. You don't like Vue

If you've never used Vue, I would still recommend VuePress. Vue is easy to learn and has many benefits. I particularly like that you can write vanilla HTML, JS and CSS in neatly packaged components. If you want to use JSX, TypeScript and SCSS you can, but there's no need to stray beyond the native languages of the web.

If you have tried Vue and you don't like it, or if you are busy mastering another JS framework and reluctant to switch, VuePress is not going to be your first choice.

## 3. You want a choice of off-the-shelf themes or starters

The default VuePress is the perfect theme for producing a technical documentation site and the main reason why a lot of people use VuePress. There is also a default blog theme, which is what I'm currently using for this blog.

You can easily change the colour palette of the default themes (as I have done here), but to customise further or develop your own theme you'll have to be fairly confident in your own design and front-end development skills.

There is a small community of developers sharing their own open-source themes, but you will not find a great selection of battle-tested themes


## 4. You're building a large enterprise website

The default way to create VuePress site content is with one Markdown file per page, with drafts and versioning controlled using a Git workflow. To make content authoring easier, you can easily add Git-based Content Management System CMS like [Netlify CMS] or [Forestry]. Managing your code and content in one place is an ideal for solo-projects and small teams.

In a large enterprise it makes sense to separate your content from your codebase and use a more fully-featured CMS. I would suggest pairing a headless CMS with a GraphQl API like [Contentful] with either [Nuxt] or [Gridsome].

## 5. You're building a data-driven web app

One of the big selling points of VuePress is that there is no need for a database. Like any website, you can fetch data from APIs within VuePress, but the expectation is that most of the content you display will be fairly static. 

If you are building an app where the main content is constantly updating or highly personalised, a Static Site Generator like VuePress doesn't make sense. I would suggest adding [Vue Apollo] to a Vue app, or starting with [Nuxt]. I'll leave the database research up to you!

## 6. 