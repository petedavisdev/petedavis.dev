---
title: VuePress layouts
date: 2020-06-06T05:44:29.957Z
thumbnail: /media/vuepress-logo.png
tags:
  - VuePress
  - Tips and tricks
  - Tutorial
permalink: /:slug
---
In VuePress themes, layouts are used to 

When you design a I'm currently designing a VuePress theme which will have a bunch of different layouts for different types of page, like so:

- 404.vue
- Collection.vue
- Doc.vue
- Home.vue
- Layout.vue (this one is the default)
- Post.vue

For each page, I can specify the layout it uses in the Frontmatter at the top of your markdown:

``` md
---
layout: Home
---
```

There will always be some common features, like the site Header, Menu and Footer that you want to appear in the same place in all of your layouts. So how do you share common features across your layouts?

## Avoid overriding GlobalLayout.vue

If you're looking for a solution for this in the VuePress docs, you will come across something called [globalLayout](https://vuepress.vuejs.org/theme/option-api.html#globallayout). You can configure this in your theme's `index.js` to point at your own GlobalLayout.vue file.

**Don't do this!**

You'll notice the docs has "Danger Zone" badge on this technique. That's because using this config overwrites the GlobalLayout.vue that comes with VuePress. This component has one specific purpose - to determine which is the correct layout for the current page.

Replacing this with a multipurpose component that also handles common layout features is just giving yourself an opportunity to break a core bit of VuePress functionality.

There is a better way.

## 1. Create a master layout

Let's say you want the following features on every page:

- Header
- Main
- Footer