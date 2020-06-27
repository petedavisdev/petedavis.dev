---
title: Using Vue 3 via CDN
date: 2020-06-27T11:34:57.887Z
thumbnail: /media/vue.js_logo.png
tags:
  - Vue
permalink: /:slug
---
One of Vue's best features is that you can use if via CDN to sprinkle interactive enhancements on any website, no matter what your stack. I'm doing this in my day job with a big Sitecore .Net site.

Vue 3 is coming soon, so I'm keen to start trying it out via CDN. However, the API has changed and it took me a lot of Googling and trial and error to get it working. I thought I'd save you the trouble!

Here's a working example:



## What has changed from Vue 2 to Vue 3?

Here is a full explanation from the Vue core team about the [global API change](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0009-global-api-change.md).

TL;DR - Rather than registering a global `Vue` constructor, you can now import global methods that do specific jobs, the most important being `createApp`.

## Immediate benefits

### Consistent component syntax

### Multiple root nodes