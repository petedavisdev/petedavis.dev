# Part 2: Connect to Netlify CMS

If you completed [part 1](./blogging-with-vuepress-part-1.md) you should have your initial VuePress files setup and pushed to GitHub.

Now we're going to add content management and write our first blog post with Netlify CMS.

## Deploy your site to Netlify
1. Login to [Netlify](https://app.netlify.com/start) and follow the stape to creat a new 'Continuous Deployment' site from your GitHub
2. Netlify will automatically pick up the build command and deployment path for VuePress, so go ahead and click 'Deploy'
3. After a short wait Netlify will deploy your site to a randomly generated url. You can change the name of your site in 'Site settings' or add your own domain name via 'Domain settings'

Once Netlify has finished building and deploying your site, click the link that it provides. Your blog is now live!

'Continuous Deployment' means that Netlify will detect changes to your Master branch and deploy without you having to lift a finger.

## Add Netlify CMS admin files to your project
In your `.vuepress` folder, add a `public` folder and within that, add an `admin` folder where you will add two files:
1. `index.html`
```
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Netlify CMS</title>
</head>
<body>
  <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
</body>
</html>
```
2. `config.yml`
```
backend:
  name: github
media_folder: ".vuepress/public/"
```

## Login to your CMS admin