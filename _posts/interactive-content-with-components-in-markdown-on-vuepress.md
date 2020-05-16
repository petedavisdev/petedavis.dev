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

<label><input type="radio" v-model="pic" value="box" checked /> Boring grey boxes</label>

<label><input type="radio" v-model="pic" value="stock" /> Tasteful stock photos</label>

<label><input type="radio" v-model="pic" value="kitten" /> Kittens</label>

## Reusable blocks
Perhaps the most 
## Slotted layouts
## Interactive content
## Build apps within tour content

<script>
module.exports = {
  data() {
    return {
      pic: null
    }
  }
  computed: {
    imageSrc() {
      return this.pic === "kitten" ? "http://placekitten.com/"
        : this.pic === "stock" ? "https://picsum.photos/"
        : "https://via.placeholder.com/"
    }
  }
};
</script>