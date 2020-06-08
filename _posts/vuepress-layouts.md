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
I'm currently working on a base theme for VuePress theme designers. This theme will come with a bunch of different layouts for different types of page.

- layouts
  - 404.vue
  - Collection.vue
  - Doc.vue
  - Home.vue
  - Layout.vue (this one is the required default)
  - Post.vue
  - Product.vue

Most websites have a consistent header, main menu and footer on all pages, so you need a way to wrap all your layouts in a common HTML structure. So how do you share common features across your layouts?

## Avoid overriding GlobalLayout.vue

I looked for a solution in the VuePress docs andfound something called [globalLayout](https://vuepress.vuejs.org/theme/option-api.html#globallayout). This is a core part of VuePress that you can override by configuring your theme's `index.js` to point at your own GlobalLayout.vue file.

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

On some layouts you will want to insert additional features in different places within this structure. For example, on your posts you may want to include post info (data, author, tags...) at the start of the main section and some social media sharing buttons just after your content.

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
    </template>
  </Layout>
</template>

<script>
import PostInfo from '@theme/components/PostInfo.vue'
import ShareButtons from '@theme/components/ShareButtons.vue'

export default {
  components: {
    PostInfo,
    ShareButtons,
  }
}
</script>
```

> Note: Layout.vue is globally available in VuePress, so you don't need to import it to use it in your other layouts.

