---
title: "Vue 3: the best bits"
date: 2020-12-14T10:57:33.018Z
thumbnail: /media/vue.js_logo.png
tags:
  - Vue
permalink: /:slug
---
## Multiple root elements

There is no need for wrapper elements in your component template. This just works:

```html
<template>
  <header>Lots</header>
  <aside>of</aside>
  <main>root</main>
  <footer>elements!</footer>
</template>
```

## Teleporting elements

Vue 3 lets you move elements to different places in the DOM.

First decide on a target you would like your elements to teleport into:

```html
<header id="page-header"></header>
```

Then use the build-in 'Teleport' component and tell it where to teleport to:

```html
<Teleport to="#page-header">
  <button>The button magically appears in the target div!</button>
  <p>So will this paragraph!</p>
<Teleport>
```

The teleported elements are still part of the component and respond and render according to the functionality of the component, but they are appended inside the target element in the DOM. This is great for UI features like popups or sidebars that display separately from the component that controls them.

## Suspense fallbacks
Suspense is used to render fallback content while the default is unavailble, for example:

```html
<Suspense>
  <template #default>
    <p>Your order number is {{ ordernum }}</p>
  </template>

  <template #fallback>
    <p>Loading order...</p>
  </template>
</Suspense>
```

## The `emits` option

Used to define the events that a component is capable of emitting:

```js
export default {
  props: ['acceptText'],
  emits: ['accepted']
}
```

You still emit events in the same way:

```html
<button @click="$emit('accepted')">{{ acceptText }}</button>
```

The benefits are all in the dev experience, with better IDE support and more readable code.

## Multiple `v-model`s

You now write v-model like this:

```html
<input v-model:name="username" />
```

This means you can add multiple v-models to a component:

```html
<ContactForm
  v-model:name="username"
  v-model:email="useremail"
/>
```
## Reacting to changes inside arrays and objects

Vue 3 reacts to changes to items within arrays and properties inside objects. It just works! You can do:

```js
this.vegetables[0] = "Artichoke"
this.user.name = "Pete"
```
Vue 3 will react to these changes automatically!

## The Composition API

Last, but definitely not least, this is the most talked-about feature of Vue 3. 

The composition API is an alternative to the Options API, but they can be used together. It can be used for splitting and sharing functionality between components and it also works great with TypeScript.

If you're using the composition API, it's worth trying `<script setup>` experimental syntax.

```html
<script setup>
  import { ref } from 'vue'

  export const count = ref(0)
  export const inc = () => count.value++
</script>
```

I'll be looking at Vue 3 and TypeScript in my next post.