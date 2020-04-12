---
title: Fun things you can do in VuePress markdown
date: Sun Apr 12 2020 07:10:49 GMT+0100 (British Summer Time)
thumbnail: /media/vue.js_logo.png
tags: ["VuePress", "Netlify", "Netlify CMS"]
---

In VuePress, markdown files are not limited to static content. You have all the power of Vue at your fingertips!

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

Harry Potter is {{ Math.abs(new Date(Date.now() - new Date('July 31, 1980')).getUTCFullYear() - 1970) }} year old.

# Count down

```
Internet Explorer will die in less than {{ Math.abs(new Date(new Date('October 14, 2025') - Date.now()).getUTCFullYear() - 1970) }} years!
```

Internet Explorer will die in less than {{ Math.abs(new Date(new Date('October 14, 2025') - Date.now()).getUTCFullYear() - 1970) }} years!


## Randomness
<p :style="{ backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16) }" @click="">I'm so random</p>

<input v-model="$route.meta.color" />

## Using frontmatter as props