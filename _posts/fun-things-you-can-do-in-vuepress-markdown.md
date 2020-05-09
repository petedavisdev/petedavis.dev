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

As the [docs](https://vuepress.vuejs.org/guide/#how-it-works) say:

> Each Markdown file is compiled into HTML with markdown-it and then processed as the template of a Vue component. This allows you to directly use Vue inside your Markdown files and is great when you need to embed dynamic content.

So, when you are writing content in markdown, you have almost* all the power of Vue templating at your fingertips!

## Let's try something random

To prove this is working, I'll add this to the markdown file:

```
{{ Math.ceil( Math.random() * 10 ) }}
```

{{ Math.ceil( Math.random() * 10 ) }}

Refresh the browser and you'll get a different number each time. 

## Use class and style bindings

While markdown syntax is the cleanest way to write your content, you can also write HTML code in your .md files. This gives you the opportunity to add [Vue class and style bindings](https://v1.vuejs.org/guide/class-and-style.html) to elements like so:

```
<div :style="{ backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16) }" style="height: 5em">I'm so random</div>
```

<div :style="{ backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16) }" style="height: 5em">I'm so random</div>

Reload the page to see the style binding at work.

## Fun with dates

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

It's {{ new Date().toLocaleString('en-GB',{ hour: '2-digit', minute: '2-digit', weekday: 'long', month:'long', year:'numeric', day:'numeric'}) }}

### How old is Harry Potter?

```
Harry Potter is {{ Math.abs(new Date(Date.now() - new Date('July 31, 1980')).getUTCFullYear() - 1970) }} years old.
```

Harry Potter is {{ Math.abs(new Date(Date.now() - new Date('July 31, 1980')).getUTCFullYear() - 1970) }} years old.

### When will IE die?

```
Internet Explorer will die in less than {{ Math.abs(new Date(new Date('October 14, 2025') - Date.now()).getUTCFullYear() - 1970) }} years!
```

Internet Explorer will die in less than {{ Math.abs(new Date(new Date('October 14, 2025') - Date.now()).getUTCFullYear() - 1970) }} years!

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



## Things you can't do

If you're used to writing Vue templates you'll be familiar with using calling function from events in your html - things like:

<button>Hello</button>

<button @click="alert('You clicked me!')">Click me</button>

However, there is no way to create methods that you can use in your template, so you can't do:

<button @click="myMethod">Make something happen</button>

The other thing you can't use is v-model to two-way databind your inputs. This is because there is no way to define component data. The props provided by frontmatter, for example, are static.

<input v-model="myValue">
<p>{{ myValue }}</p>

## Components to the rescue!

The best thing about your markdown being converted into a Vue template is that you can include other components! Just add single-file components to your `.vuepress/components` folder and they are automatically available to add to your markdown like so:

```
<MyComponent />
```

There is really no limit to what you can do with this. You literally have all of the power of Vue apps within a statically generated page. More on this in my my next blog post, but for now, check out the [VuePress docs](https://vuepress.vuejs.org/guide/using-vue.html#using-components).

<TinyLetter />