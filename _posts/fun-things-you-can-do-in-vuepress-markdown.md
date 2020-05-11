---
title: 6 Fun things you can do in markdown with VuePress
date: 2020-05-10T06:10:49.000Z
thumbnail: /media/vuepress-logo.png
tags:
  - VuePress
  - Tips and tricks
permalink: /:slug
---
___
*Updated 11 May 2020: This was originally "5 Fun things..." until [Evan You told me about a 6<sup>th</sup>](https://twitter.com/youyuxi/status/1259493630059909120?s=20) that I hadn't even thought of trying...*
___

In VuePress, markdown files are not limited to static content. 

As the [docs](https://vuepress.vuejs.org/guide/#how-it-works) say:

> Each Markdown file is compiled into HTML with markdown-it and then processed as the template of a Vue component. This allows you to directly use Vue inside your Markdown files and is great when you need to embed dynamic content.

So, when you are writing content in markdown, you have all the power of Vue at your fingertips!

## 1. Something random

To prove this is working, I'll add this to the markdown file:

```
{{ Math.ceil( Math.random() * 10 ) }}
```

{{ Math.ceil( Math.random() * 10 ) }}

Refresh the browser and you'll get a different number each time. 

## 2. Class and style bindings

While markdown syntax is the cleanest way to write your content, you can also write HTML code in your .md files. This gives you the opportunity to add [Vue class and style bindings](https://v1.vuejs.org/guide/class-and-style.html) to elements like so:

```
<div :style="{ backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16) }">I'm so random</div>
```

<div :style="{ backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16) }">I'm so random</div>

Reload the page to see the style binding at work.

## 3. Play with dates

### What day is this?

Let's start by displaying the current date:

```
{{ Date() }}
```

{{ Date() }}

It works! Now let's format that nicely.

```
Today is {{ new Date().toLocaleString('en-GB',{ weekday: 'long', month:'long', year:'numeric', day:'numeric'}) }}
```

Today is {{ new Date().toLocaleString('en-GB',{ hour: '2-digit', minute: '2-digit', weekday: 'long', month:'long', year:'numeric', day:'numeric'}) }}

### How old is Harry Potter?

```
Harry Potter is {{ Math.abs(new Date(Date.now() - new Date('July 31, 1980')).getUTCFullYear() - 1970) }} years old.
```

Harry Potter is {{ Math.abs(new Date(Date.now() - new Date('July 31, 1980')).getUTCFullYear() - 1970) }} years old.

Come back next year and you'll find this is always correct. Magic :sparkles:

### When will IE die?

Here's an example of a countdown

```
Internet Explorer will die in less than {{ Math.abs(new Date(new Date('October 14, 2025') - Date.now()).getUTCFullYear() - 1970) }} years!
```

Internet Explorer will die in less than {{ Math.abs(new Date(new Date('October 14, 2025') - Date.now()).getUTCFullYear() - 1970) }} years!

IE is already dead to me, but sadly I still have to support it in my day job :sob:

## 4. Frontmatter as props

[Frontmatter](https://v1.vuepress.vuejs.org/guide/frontmatter.html) is a way to define meta-data about your page at the top of your markdown file, like so:

```
---
title: 5 Fun things you can do in markdown with VuePress
date: 2020-05-10T06:10:49.000Z
tags:
  - VuePress
  - Tips and tricks
permalink: /:slug
---
```

VuePress gives you access to frontmatter (and some other [global computed properties](https://v1.vuepress.vuejs.org/guide/global-computed.html)) inside your markdown.

For example, on this page, 

```
{{ $frontmatter.date }}
```

outputs:

{{ $frontmatter.date }}

You could add a bit of JS to show how many days ago the post was published, like so:

```
This post was published {{ Math.floor((new Date() - new Date($frontmatter.date)) / 86400000) }} days ago.
```

This post was published {{ Math.floor((new Date() - new Date($frontmatter.date)) / 86400000) }} days ago.

## 5. Lists with v-for

VuePress also gives you v-for, which you can use with frontmatter generate formatted lists like so:

```html
<ol>
    <li v-for="tag in $frontmatter.tags">{{tag}}</li>
</ol>
```

<ol>
    <li v-for="tag in $frontmatter.tags">{{tag}}</li>
</ol>

## 6. Get interactive with a script tag

Thanks to [Evan You for this via Twitter](https://twitter.com/youyuxi/status/1259493630059909120?s=20):

> you can define a script block in md files (which works like the script tag in an SFC)

I gave it a try and it works!

``` html
<script>
module.exports = {
  data: function () {
    return {
      count: 0
    }
  }
</script>

<button v-on:click="count++">Click {{ count }}</button>
```

<button v-on:click="count++">Click {{ count }}</button>

Unlike the `$frontmatter` example, this gives you the ability to mutate data within your content!

### What generation are you?

Here's a fun example of how you can add a script to your .md to generate personalised content.

``` html
<script>
module.exports = {
  data: function () {
    return {
      year: null
    }
  },
  computed: {
    myGeneration: function () {
      return !parseInt(this.year) || this.year < 1900 || this.year > 2020 ? null
        : this.year < 1925 ? 'G.I. Generationer'
        : this.year < 1946 ? 'Silent Generationer'
        : this.year < 1965 ? 'Baby Boomer'
        : this.year < 1980 ? 'Generation Xer'
        : this.year < 2000 ? 'Millennial'
        : 'New Silent Generationer';
    }
  }
}
</script>

<label>What year were you born?
  <input v-model="year" type="text" inputmode="numeric" />
</label>
<blockquote>
  <span v-if="myGeneration">You are a {{ myGeneration }}</span>
  <span v-else>Enter a valid year</span>
</blockquote>
```

<script>
module.exports = {
  data: function () {
    return {
      year: null,
      count: 0
    }
  },
  computed: {
    myGeneration: function () {
      return !parseInt(this.year) || this.year < 1900 || this.year > 2020 ? null
        : this.year < 1925 ? 'G.I. Generationer'
        : this.year < 1946 ? 'Silent Generationer'
        : this.year < 1965 ? 'Baby Boomer'
        : this.year < 1980 ? 'Generation Xer'
        : this.year < 2000 ? 'Millennial'
        : 'New Silent Generationer';
    }
  }
}
</script>

### What generation are you?
<label>What year were you born?
  <input v-model="year" type="text" inputmode="numeric" />
</label>
<blockquote>
  <span v-if="myGeneration">You are a {{ myGeneration }}</span>
  <span v-else>Enter a valid year</span>
</blockquote>

And because you are a {{ myGeneration || 'creative developer' }}, I'm sure you can think of lots of ways you can use this to make your web content way more engaging.

## Components FTW :smile:

These 6 tricks are fun ways to make one-off bits of dynamic content, but they are not reusable and as soon as your scripts get more complex{{ myGeneration && ', ' + myGeneration.toLowerCase() + 's like' }} you will want to get out of the markdown file.

The best thing about your markdown being converted into a Vue template is that you can include other components! Just add single-file components to your `.vuepress/components` folder and they are automatically available to add to your markdown like so:

```
<MyComponent />
```

There is really no limit to what you can do with this. Adding components to your markdown gives you all of the power of Vue apps within a statically generated site. 

More on this in a future blog post, but for now, check out the [VuePress docs](https://vuepress.vuejs.org/guide/using-vue.html#using-components).

<TinyLetter />
