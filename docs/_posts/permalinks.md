---
title: Permalinks
---
# Permalinks
There are a variety of ways to configure [permalinks in Vuepress](https://vuepress.vuejs.org/guide/permalinks.html#configure-permalinks), but to keep urls simple we're going to add `permalink: '/:slug'` to your .vuepress/config.js
```
module.exports = {
    title: 'Blogging with VuePress and Netlify CMS',
    description: 'Step-by-step guid to create your blog',
    permalink: '/:slug'
}
```
With this config, the links to posts on your blog will simply be `yourblog.netlify.com/post-title`