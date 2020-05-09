---
title: Fun things you can do in VuePress markdown
date: 2020-04-11T06:10:49.000Z
thumbnail: /media/vue.js_logo.png
tags:
  - VuePress
  - Tutorials
items:
  - Item1
  - Item2
  - Item3
---
In VuePress, markdown files are not limited to static content. 

As the docs say:

> Each Markdown file is compiled into HTML with [markdown-it](https://github.com/markdown-it/markdown-it) and then processed as the template of a Vue component. This allows you to directly use Vue inside your Markdown files and is great when you need to embed dynamic content.

So, when you are writing content in markdown, you have almost* all the power of Vue templating at your fingertips!

## Let's try something random

To prove this is working, I'll add this to the markdown file:

\`\``

{{ Math.random() }}

\`\``

{{ Math.random() }}

Refresh the browser and you'll get a different number each time. 

## Use class and style bindings

While markdown syntax is the cleanest way to write your content, you can also write HTML code in your .md files. This gives you the opportunity to add Vue class and style bindings to elements like so:

\`\``

<h3 :style="{ backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16) }" style="height: 5em">I'm so random</h3>

\`\``

<strong :style="{ color: '#' + Math.floor(Math.random()*16777215).toString(16) }" style="height: 5em">I'm so random</strong>

Each time you load the page the JS in the :style attribute runs and changes the colour of the text.

## What day is it?

Let's start by displaying the current date:

```
{{ Date() }}
```

{{ Date() }}

It works! Now let's format that nicely.

```
Today is {{ new Date().toLocaleString('en-GB',{ weekday: 'long', month:'long', year:'numeric', day:'numeric'}) }}
```

It's {{ new Date().toLocaleString('en-GB',{ hour: '2-digit', minute: '2-digit', weekday: 'long', month:'long', year:'numeric', day:'numeric'}) }}

## How old is Harry Potter?

```
Harry Potter is {{ Math.abs(new Date(Date.now() - new Date('July 31, 1980')).getUTCFullYear() - 1970) }} years old.
```

Harry Potter is {{ Math.abs(new Date(Date.now() - new Date('July 31, 1980')).getUTCFullYear() - 1970) }} years old.

## Count down

```
Internet Explorer will die in less than {{ Math.abs(new Date(new Date('October 14, 2025') - Date.now()).getUTCFullYear() - 1970) }} years!
```

Internet Explorer will die in less than {{ Math.abs(new Date(new Date('October 14, 2025') - Date.now()).getUTCFullYear() - 1970) }} years!

## Randomness

<p :style="{ backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16) }" @click="">I'm so random</p>

## Using frontmatter as props

[Frontmatter](https://v1.vuepress.vuejs.org/guide/frontmatter.html) is a way to define meta-data about your page at the top of your markdown file, like so:

```
---
title: Blog post title
date: 2020-04-25T15:49:07.895Z
tags:
  - VuePress
  - Tutorials
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
This post was published {{ Math.floor((new Date() - new Date($frontmatter.date)) / (1000 * 60 * 60 * 24)) }} days ago.
```

This post was published {{ Math.floor((new Date() - new Date($frontmatter.date)) / (1000  *60*  60 * 24)) }} days ago.

## Lists with v-for

VuePress also gives you v-for, which you can use with frontmatter data to content from format arrays or objects like so:

```
<ol>
    <li v-for="tag in $frontmatter.tags">{{tag}}</li>
</ol>
```

<ol>
    <li v-for="tag in $frontmatter.tags">{{tag}}</li>
</ol>

<TinyLetter />