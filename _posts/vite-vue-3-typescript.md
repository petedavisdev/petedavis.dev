---
title: Experimenting with Vite + Vue 3 + TypeScript
date: 2020-12-14T15:19:34.314Z
thumbnail: /media/vue.js_logo.png
tags:
  - Vite
  - Vue
  - TypeScript
permalink: /:slug
---
## All the new toys!

I like shiny new things, so I'm tinkering with a Vue 3 app, written with TypeScript and built with Vite.

### Why Vue 3?

Like Vue 2, but with even more awesome! [Here are the best bits of Vue 3](/vue-3-the-best-bits/).

I'm also using two experimental features of Vue 3:

* Composition API with [`<script setup>`](https://github.com/vuejs/rfcs/blob/sfc-improvements/active-rfcs/0000-sfc-script-setup.md)
* Dynamic CSS variables with [`<style vars>`](https://github.com/vuejs/rfcs/blob/sfc-improvements/active-rfcs/0000-sfc-style-variables.md)

### Why TypeScript?

Because I'd like to know if I've broken something before I run the code in the browser.

### Why Vite?

Because it's so fast and doesn't come with the baggage of Webpack. Although Vite can be used for other things, it was built with Vue 3, TypeScript, and modern browsers in mind.

## Using `<script setup>` and `<style vars>`

Here's an example of how I'm writing my components:

```vue
<template>
  <p>{{ computedMsg }}</p>
</template>

<script setup="props" lang="ts">
import { computed } from 'vue'

declare const props: {
  text: string,
  color: string,
}

export const computedText = computed(() => props.text + '!!!')
</script>

<style scoped vars="{ color }">
p {
  color: var(--color);
}
</style>
```

Things I love about this:

1. Using TypeScript to `declare` the props that the component expects makes this easier to understand
2. It's the composition API, but neater. No need to return everything at the end, just export as you go along
3. We are using the dynamic power of CSS variables within the browser. Much nicer than binding `:style` attributes in your template.