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
I'm recently started building on a [base theme](https://github.com/petedavisdev/vuepress-theme-base) for VuePress theme designers. This theme will come with a bunch of different [layouts](https://vuepress.vuejs.org/theme/writing-a-theme.html#layout-component) for different types of page.

- layouts
  - 404.vue
  - Collection.vue
  - Doc.vue
  - Home.vue
  - Layout.vue (this one is the required default)
  - Post.vue
  - Product.vue

I quickly ran into two challenges:

1. I want to be able to choose a default layout for each content directory so that I don't have to specify the Layout in the frontmatter of every .md file.

2. I want to ensure a consistent HTML structure with some common features (e.g. header, nav, footer) in the same position on every layout, but I need to be able to add specific features in different positions on each layout.

# 1. Default layouts

Let's say you have a website with the following content structure:

- index.md
- guide.md
- blog.md
- docs
  - doc1.md
  - doc2.md
- posts
  - post1.md
  - post2.md
  - post3.md

You want all of the pages in the **docs** directory to using the **Doc.vue** layout by default and you want all of the pages in the **posts** directory to use the **Post.vue** layout.

To achieve this you need to look at how VuePress determines which layout to apply to each .md file as it renders your site. This happens in GlobalLayout.vue, a core component in VuePress that you can override by including a GlobalLayout.vue file in your theme/layouts folder.

**Don't do this!**

You'll notice the docs has a "Danger Zone" flag. That's because the component you are overriding has one specific purpose - to determine which is the correct layout for each page. If you override it, you are taking responsibility for a core bit of VuePress logic and giving yourself the opportunity to break things.

There is a better way.

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
