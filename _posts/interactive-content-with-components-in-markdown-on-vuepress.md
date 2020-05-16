---
title: Improve your content with custom components in VuePress
date: 2020-05-15T18:13:50.865Z
thumbnail: /media/vue.js_logo.png
tags:
  - VuePress
permalink: /:slug
---
VuePress converts all of your markdown files into Vue templates. In my last post I covered some of the fun things your can do in markdown that take advantage of this and touched on the fact that you can use your own Vue components directly inside your .md files. 

``` md
<MyComponent />
```

In this post I will give 4 ways you can improve your content with components, but first, what would you rather see in my examples:

<img :src="imageSrc + '130'" style="float:right" />

<label><input type="radio" v-model="pic" value="box" checked /> Gray boxes</label>

<label><input type="radio" v-model="pic" value="stock" /> Stock photos</label>

<label><input type="radio" v-model="pic" value="kitten" /> Kittens</label>

## Reusable blocks
The most common reason for using components in your content is simply reusability. 

For example, you have a newsletter subscription form that you want to be able to place anywhere in your content, you don't want to have to paste the entire embed code into your .md file every time.

Here's how I do it. In my `.vuepress/components` folder I have a `SubscribeForm.vue` file which looks a bit like this:

``` vue
<template>
    <!-- Form html from your newsletter service, for example: -->
    <form method="post" action="...">
        <h3>Join my mailing list</h3>
        <label>Email <input type="email" /></label>
        <button>Subscribe</button>
    </form>
</template>

<script>
    // If required, add any script provided by your here for newsletter service here</script>

<style scoped>
    /* Customise your the style of your form here */
</style>
```

Components in `.vuepress/components` are automatically available to use in your .md files, so all you have to do is include:

``` md
<SubscribeForm />
``` 
Here's mine. Feel free to try it out :wink:

<TinyLetter />

## Slotted layouts
## Interactive content
## Build apps within tour content

<script>
module.exports = {
  data() {
    return {
      pic: "box"
    }
  },
  computed: {
    imageSrc() {
      return this.pic === "kitten" ? "http://placekitten.com/"
        : this.pic === "stock" ? "https://picsum.photos/"
        : "https://via.placeholder.com/"
    }
  }
};
</script>