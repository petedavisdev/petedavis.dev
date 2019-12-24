---
title: Blog post 2
date: 2019-12-13T15:46:47.996Z
thumbnail: /media/vue.js_logo.png
---
# Part 2: Connect to Netlify CMS

If you completed [part 1](./blogging-with-vuepress-part-1.md) you should have your initial VuePress files setup and pushed to GitHub.

Now we're going to add content management and write our first blog post with Netlify CMS.

## Deploy your site to Netlify
1. Login to [Netlify](https://app.netlify.com/start) and follow the stape to creat a new 'Continuous Deployment' site from your GitHub
2. Netlify will automatically pick up the build command and deployment path for VuePress, so go ahead and click 'Deploy' <!-- IMAGE NEEDED -->
3. After a short wait while Netlify rund your VuePress build, Netlify will deploy your site to a randomly generated url. You can change the name of your site in 'Site settings' or add your own domain name via 'Domain settings'

## Setup OAuth on GitHub
To keep it simple for now, we are going to set up access to the CMS with GitHub

1. Go to your [developer settings on GitHub](https://github.com/settings/developers) and add a new OAuth app.
2. Enter the name and full URL of your Netlify site.\
   Authorization callback URL callback URL:
```
https://api.netlify.com/auth/done
```
3. Click Register application to get your Client ID and Client Secret. You will need these in a moment.
4. In your site Settings, open 'Access control'. Under OAuth, click 'Install provider' and copy in the Client ID and Secret from [GitHub](https://github.com/settings/developers).

## Add Netlify CMS admin files to your project
In your `.vuepress` folder, add a `public` folder and within that, add an `admin` folder where you will add two files:
1. `index.html`

<<< @/docs/.vuepress/public/admin/index.html

2. `config.yml`

<<< @/docs/.vuepress/public/snippets/admin.config.yml

Commit and push your changes. 'Continuous Deployment' means that Netlify will detect changes to your GitHub Master branch, build the site and deploy it without you having to lift a finger.

## Login to your CMS admin
You can now access your CMS. Simply add /admin to the end of your website url in the browser and you will be invited to login with GitHub. 
Once logged in you will see a collection called Pages and inside it an item called Home. Now you can start using the CMS to edit the homepage and add images. We're almost ready to start blogging!

## [Part 3: Creating blog posts &rarr;](./blogging-with-vuepress-part-3.md)
