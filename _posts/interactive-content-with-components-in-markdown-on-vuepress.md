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

<img :src="imgSrc + '130'" style="float:right" />

<label><input type="radio" v-model="pic" value="box" checked /> Gray boxes</label>

<label><input type="radio" v-model="pic" value="stock" /> Stock photos</label>

<label><input type="radio" v-model="pic" value="kitten" /> Kittens</label>

## 1. Reusable blocks
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

<style scoped>
    /* Customise your the style of your form here */
</style>
```

Components in `.vuepress/components` are automatically available to use in your .md files, so now you can drop this component anywhere in your content:

``` md
<SubscribeForm />
``` 
Here's mine. Feel free to try it out :wink:

<TinyLetter />

## 2. Slotted layouts

A great feature of the markdown-it conversion in VuePress is that you can write markdown inside html elements by leaving empty lines between the html tags and your markdown like so:

``` md
<div>

## Markdown content
> Will be rendered correctly

</div>
```

This means you can use slots inside your Vue components and fill them with content from your markdown. This is great if you want parts of your content to have a different layout. Here's an example of a responsive 2-column component, `TwoCol.vue`:

``` vue
<template>
<section class="grid">
    <div>
        <slot name="col1"></slot>
    </div>
    <div>
        <slot name="col2"></slot>
    </div>
</section>
</template>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1em;
}
</style>
```

Which you would use like this:

``` md
<TwoCol>
<div #col1>

![alt text](https://yourvuepresssite.com/media/image.jpg)

</div>
<div #col2>

### Layout example
> Any markdown can go here.

</div>
</TwoCol>
```

<TwoCol>
<div #col1>

![alt text]({{ this.imgSrc }}/400)

</div>
<div #col2>

### Layout example
> Any markdown can go here.

</div>
</TwoCol>

This simple example could just as well have been down with a css class on the containing element in markdown, but as soon as you want a more complex layout this technique comes into its own.


## Interactive content
## Build entire apps!

<script>
module.exports = {
  data() {
    return {
      pic: "box"
    }
  },
  computed: {
    imgSrc() {
      return this.pic === "kitten" ? "http://placekitten.com/"
        : this.pic === "stock" ? "https://picsum.photos/"
        : "https://via.placeholder.com/"
    }
  }
};
</script>