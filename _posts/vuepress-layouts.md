---
title: Working with layouts in VuePress
date: 2020-06-06T05:44:29.957Z
thumbnail: /media/vuepress-logo.png
tags:
  - VuePress
  - Tips and tricks
  - Tutorial
permalink: /:slug
---
I'm currently working on a [base theme](https://github.com/petedavisdev/vuepress-theme-base) for VuePress theme designers. In the process I've figured out two nice tricks for working with multiple layouts in a VuePress.

## What are layouts in VuePress?

[Layouts](https://v1.vuepress.vuejs.org/theme/writing-a-theme.html#layout-component) in VuePress provide all of the features that surround the content of a given page, such as headers, navigation, sidebars and footers. 

In VuePress you can specify the layout you want for any given page in the [frontmatter](https://v1.vuepress.vuejs.org/guide/frontmatter.html) at the start of the .md file:

``` md
---
title: Awesome t-shirt
layout: Product
---
```
If you don't specify a layout, VuePress defaults to using Layout.vue for every page, so it's up to you to make sure every page in your shop has `layout: Product` specified in its Frontmatter :frowning:

## Set a default layout for each directory

Let's look a how VuePres

I quickly ran into two challenges:

1. I want to be able to choose a default layout for each content directory so that I don't have to specify the Layout in the frontmatter of every .md file.

2. I want to ensure a consistent HTML structure with some common features (e.g. header, nav, footer) in the same position on every layout, but I need to be able to add specific features in different positions on each layout.

# 1. Default layouts

Let's say you have a website with the following content structure:

- index.md
- blog
  - post1.md
  - post2.md
  - ...
- guide
  - doc1.md
  - doc2.md
  - ...
- shop/
  - product1.md
  - product2.md
  - ...

All pages in the **blog** directory should default to the **Post.vue** layout.

All pages in the **guide** directory should default to the **Doc.vue** layout.

All pages in the **shop** directory should default to the **Product.vue** layout.

To achieve this we need to look at how VuePress determines which layout to apply to each .md file as it generates your site. This happens in [GlobalLayout.vue](https://vuepress.vuejs.org/theme/option-api.html#globallayout), a core component in VuePress that you can override by including a GlobalLayout.vue file in your **theme/layouts** folder.

You'll notice this is flagged with "Danger Zone" in the docs ::open_mouth::! That's because by overriding this component, you are taking responsibility for a core bit of VuePress logic, so make sure you understand the js that you're adding.

First, in .vuepress/config.js we're going to set up our desired default layouts:

``` js
module.exports = {
  themeConfig: {
    defaultLayouts: [
      { directory: 'blog', layout: 'Post' },
      { directory: 'guide', layout: 'Doc' },
      { directory: 'shop', layout: 'Product' },
    ],
}
```

To use this, we need to add some logic that checks the directory of the current page. We still want any layout set in the frontmatter to take priority, then the defaults set in `themeConfig` should be applied if they exist before defaulting to Layout.vue.

That bit of logic will look something like this:

``` js
return this.isLayout(this.$frontmatter.layout) || this.hasDefaultLayout() || 'Layout';

```
For the complete code, take a look at [this file in my vuepress-theme-base](https://github.com/petedavisdev/vuepress-theme-base/blob/master/theme/layouts/GlobalLayout.vue) repo.

## Create a base layout

Let's say you want the following html structure on every page:

``` html
<header>
  <Logo />
  <Nav />
</header>

<main>
  <Content />
</main>

<footer>
  <CopyRight />
</footer>
```

On some layouts you will want to insert additional features in different places within this structure. For example, on your posts you may want to include post info (data, author, tags...) at the start of the main section and some social media sharing buttons and a newsletter subscription form just after your content.

To make this possible, simply add some named slots to the template. Layout.vue will look like this...

``` vue
<template>
  <div class="Layout">
    <header>
      <Logo />
      <Nav />
    </header>

    <main>
      <slot name="mainStart" />

      <Content />

      <slot name="mainEnd" />
    </main>

    <footer>
      <EndCredit />
    </footer>
  </div>
</template>

<script>
import Logo from '@theme/components/Logo.vue'
import Nav from '@theme/components/Nav.vue'
import EndCredit from '@theme/components/EndCredit.vue'

export default {
  components: {
    Logo,
    Nav,
    EndCredit
  }
}
</script>
```

... and your Post.vue layout will look like this:


``` vue
<template>
  <Layout>
    <template v-slot:mainStart>
      <PostInfo />
    <template>

    <template v-slot:mainEnd>
      <ShareButtons />
      <SubscriptionForm />
    </template>
  </Layout>
</template>

<script>
import PostInfo from '@theme/components/PostInfo.vue'
import ShareButtons from '@theme/components/ShareButtons.vue'
import SubscriptionForm from '@theme/components/SubscriptionForm.vue'

export default {
  components: {
    PostInfo,
    ShareButtons,
    SubscriptionForm
  }
}
</script>
```

> Note: Layout.vue is globally available in VuePress, so you don't need to import it to use it in your other layouts.

You are likely to need a few more slots in your Layout.vue file to make it work as a base for all your other layouts. Just add what you need and name appropriately.
