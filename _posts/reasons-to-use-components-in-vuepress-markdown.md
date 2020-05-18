---
title: 3 Reasons to use components in VuePress markdown
date: 2020-05-18T18:41:50.865Z
thumbnail: /media/vue.js_logo.png
tags:
  - VuePress
  - Tips and tricks
permalink: /:slug
---
In my last post, I covered some of the [fun things you can do in markdown](https://petedavis.dev/fun-things-you-can-do-in-vuepress-markdown/) that take advantage the way VuePress converts content into Vue templates, but I saved the best for this post. In VuePress, you can [use Vue components directly inside your .md files](https://v1.vuepress.vuejs.org/guide/using-vue.html#using-components), like so:

```md
<MyComponent />
```

In this post I will demo 3 use cases for components in markdown, but first, what would you rather see in my examples?

<img :src="imgSrc + '130'" style="float:right" />

<label><input type="radio" v-model="pic" value="box" checked /> Boring boxes</label>

<label><input type="radio" v-model="pic" value="stock" /> Stock photos</label>

<label><input type="radio" v-model="pic" value="kitten" /> Kittens</label>

## 1. Reusing content

The most common reason for using components in your content is simply reusability. 

For example, you have a newsletter subscription form that you want to be able to place anywhere in your content, you don't want to have to paste the entire embed code into your .md file every time.

Here's how I do it. In my `.vuepress/components` folder I have a `SubscribeForm.vue` file which looks a bit like this:

```vue
<template>
    <!-- Form html from your newsletter service, for example: -->
    <form method="post" action="...">
        <h3>Join my mailing list</h3>
        <label>Email <input type="email" /></label>
        <button>Subscribe</button>
    </form>
</template>

<style scoped>
    /* Customise the style of your form here */
</style>
```

Components in `.vuepress/components` are automatically available to use in your .md files, so now you can drop this component anywhere in your content:

```md
<SubscribeForm />
```

Here's mine. Feel free to try it out :wink:

<TinyLetter />

## 2. Styling content

A great feature of the markdown-to-html conversion in VuePress is that you can write markdown inside html elements by leaving empty lines between the html tags and your markdown like so:

```md
<div>

## Markdown content
> Will be rendered correctly

</div>
```

This means you can use slots inside your Vue components and fill them with content from your markdown. This is great if you want parts of your content to have a different style. Here's an example of a profile card component, `ProfileCard.vue`:

```vue
<template>
<section class="profile-card">
    <img class="profile-img" :src="$attrs.imgSrc" />
    <div>
        <slot /> <!-- This is where your markdown content will be inserted -->
    </div>
</section>
</template>

<style scoped>
.profile-card {
    display: grid;
    /* ... more styles ...*/
}

.profile-img {
    border-radius: 50%;
    /* ... more styles ...*/
}
</style>
```

Which you would use like this:

```md
<ProfileCard :imgSrc="https://yourvuepresssite.com/media/image.jpg">

### Profile card example
- Any markdown
- you put here
> will be slotted in 

</ProfileCard>
```

<ProfileCard :imgSrc="imgSrc + '500'">

### Profile card example

* Any markdown
* you put here

  > will be slotted in

</ProfileCard>

This gives you the freedom to design more interesting content within your pages.

## 3. Adding interactivity

The examples so far have shown how useful components can be without even using the `<script>` part of your single file components. Here's an example of how you can add some interactivity to your content with a simple quiz component.

```vue
<template>
    <section>
        <div>
            <slot />

            <label><input type="radio" v-model="choice" value="true"> True</label>
            <label><input type="radio" v-model="choice" value="false"> False</label>

            <p v-if="choice && choice == answer" class="correct">CORRECT</p>
            <p v-else-if="choice && choice != answer" class="wrong">WRONG!!!</p>
        </div>
        <div>
            <img :src="imgSrc" />
        </div>
    </section>
</template>

<script>
export default {
    props: {
        answer: String,
        imgSrc: String
    },
    data() {
        return {
            choice: null
        }
    }
}
</script>

<style scoped>
/* your styles here */
</style>
```

With this saved as `.vuepress/components/TrueFalseQuiz.vue` add the component anywhere in your .md like this:

```md
<TrueFalseQuiz answer="false" imgSrc="https://yourvuepresssite.com/media/image.jpg">

### True or false...
Quiz question text goes here

</TrueFalseQuiz>
```

<TrueFalseQuiz :imgSrc="imgSrc + '200/400'" :answer="(pic == 'kitten').toString()">

### True or false...

This is a picture of a kitten

</TrueFalseQuiz>

You selected {{ pic }} images at the start of this post. Try changing your selection. I've used [trick 6 from my previous post](https://petedavis.dev/fun-things-you-can-do-in-vuepress-markdown/#_6-get-interactive-with-a-script-tag) to set up the .md file as a single file component, complete with its own data :smile:

Any component you add can have child components of its own, so you easily can build web apps into your pages. I'll be sharing my experiments with this in future. Now though, just to reinforce that point about reusability, here's that `<SubscribeForm />` component again :wink:

<TinyLetter />

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
