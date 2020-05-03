---
title: Add Netlify CMS to your VuePress site
date: 2019-12-13T15:46:47.996Z
thumbnail: /media/vue.js_logo.png
tags:
  - VuePress
  - Netlify
  - Netlify CMS
---
If you're using VuePress, but you want to add a bit of content management to your markdown files, Netlify CMS is the perfect choice. 

It's a light-weight CMS hosted on your site that hooks directly into your Git repo, creating branches for drafts and merging your content into master when you click to publish.

Netlify CMS gives you:

* Rich text editing and preview for your markdown files
* Publishing workflow to manage content (draft, review, ready, publish and unpublish)
* The ability to confiture a user interface and defaults for your [frontmatter](https://v1.vuepress.vuejs.org/guide/frontmatter.html)
* Multiple author access (using Netlify Identity)

If you don't already have a VuePress site, or if you just want to play with Netlify CMS, I've made a [GitHub template](https://github.com/petedavisdev/VuePress-with-Netlify-CMS) for you which you can deploy using this magic button:

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/petedavisdev/VuePress-with-Netlify-CMS&amp;stack=cms"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

If you do already have a VuePress site and you want to add Netlify CMS, this tutorial is for you.

## Setup OAuth on GitHub

To keep it simple for now, we are going to set up access to the CMS with GitHub

1. Go to your [developer settings on GitHub](https://github.com/settings/developers) and add a new OAuth app.
2. Enter the name and full URL of your website and set the authorization callback URL:

```
https://api.netlify.com/auth/done
```

3. Click Register application to get your Client ID and Client Secret. You will need these in a moment.
4. In your site Settings, open 'Access control'. Under OAuth, click 'Install provider' and copy in the Client ID and Secret from [GitHub](https://github.com/settings/developers).

## Add Netlify CMS admin files to your project

In your `.vuepress` folder, add a `public` folder and within that, add an `admin` folder where you will add two files:

1. `index.html`

<<< @/.vuepress/public/snippets/admin.index.html

2. `config.yml`

<<< @/.vuepress/public/snippets/admin.config.yml

This config will enable you to edit your homepage, but not delete it. It will also give you the ability to create, edit and delete pages. It will manage pages in a `_pages` folder, so edit this if you have a different folder structure.

Commit and push your changes. 'Continuous Deployment' means that Netlify will detect changes to your GitHub Master branch, build the site and deploy it without you having to lift a finger.

## Login to your CMS and create pages

You can now access your CMS. Simply add /admin to the end of your website url in the browser and you will be invited to login with GitHub. Once logged in you will see a collection called Home, which contains your homepage and a collection called Pages, which will be empty.

Now you can start using the CMS to edit and add pages.

Netlify CMS comes with workflow. New pages do not appear in the pages list or on your website until they have been published, and they cannot be published until they have been marked as "Ready".

Create some new pages (e.g. About and Contact), set them as ready and then publish them. Now go back to your website and navigate to /about and /contact. You're starting to grow your website, but you'll need some navigation to get around.

Open up your `.vuepress/congif.js` file and add the following theme config:

<<< @/.vuepress/public/snippets/vuepress.config.js{4-10}

## Next...

[Netlify CMS docs](https://www.netlifycms.org/docs/intro/)

[Netlify Identity docs](https://docs.netlify.com/visitor-access/identity/)