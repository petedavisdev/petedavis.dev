---
title: Add Netlify CMS to a VuePress site
date: 2019-12-13T15:46:47.996Z
thumbnail: /media/vue.js_logo.png
tags: ["VuePress", "Netlify", "Netlify CMS"]
---

Before you start, you'll need a VuePress site deployed to Netlify.

Now we're going to add content management and write our first blog post with Netlify CMS.

## Setup OAuth on GitHub

To keep it simple for now, we are going to set up access to the CMS with GitHub

1. Go to your [developer settings on GitHub](https://github.com/settings/developers) and add a new OAuth app.
2. Enter the name and full URL of your Netlify site.\
   Authorization callback URL:

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

This config will enable you to edit your homepage, but not delete it. It will also give you the ability to create, edit and delete pages.

Commit and push your changes. 'Continuous Deployment' means that Netlify will detect changes to your GitHub Master branch, build the site and deploy it without you having to lift a finger.

## Login to your CMS and create pages

You can now access your CMS. Simply add /admin to the end of your website url in the browser and you will be invited to login with GitHub. Once logged in you will see a collection called Home, which contains your homepage and a collection called Pages, which will be empty.

Now you can start using the CMS to edit and add pages.

Netlify CMS comes with workflow. New pages do not appear in the pages list or on your website until they have been published, and they cannot be published until they have been marked as "Ready".

Create some new pages (e.g. About and Contact) and publish them. Now go back to your website and navigate to /about and /contact. You're starting to grow your website, but you'll need some navigation to get around.

## Configure VuePress navigation

Open up your `.vuepress/congif.js` file and add the following theme config:

<<< @/.vuepress/public/snippets/vuepress.config.js{4-10}

That's all you need to add items to the navbar of your site.
