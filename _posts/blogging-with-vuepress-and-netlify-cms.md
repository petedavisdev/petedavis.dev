---
title: Blogging with VuePress and Netlify CMS
date: 2019-12-14T15:49:09.818Z
thumbnail: /media/workflow.png
tags: ["VuePress", "Netlify", "Netlify CMS"]
---

Before you start, you'll need to create a VuePress site and connect it to Netlify CMS.

Now we're going to make blogging possible.

## Configure Netlify CMS

We need to add a new collection called "Posts" within your admin config. This will include information about the content of posts and the folder they will be saved in.

Now is also a goot time to add `publish_mode: editorial_workflow`. This means that you will be able to save draft posts before publishing them.

Here is the resulting `.vuepress/public/admin/config.yml`

<<< @/.vuepress/public/snippets/admin.config.2.yml{6,16-24}

Commit and push this change. After it has deployed you will be able to see Posts in your CMS below Pages.

Try creating a post. You will now find that you have to fill in all the fields before saving and that you must set the status to 'Ready' before publishing.

![Netlify CMS workflow](/media/workflow.png)

You also have a 'Workflow' tab a the top which gives you an overview of saved posts which you can drag between different states before publishing.

## Latest posts component

We are now going to create our first custom Vue component in order to display a list out links to recent posts.

In the .vuepress folder add a components folder and create a file called `LatestPosts.vue`

<<< @/.vuepress/public/snippets/components.latestposts.vue

## [Part 4: Pages and navigation &rarr;](./blogging-with-vuepress-part-4.md)
