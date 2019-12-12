# Part 2: Connect to Netlify CMS

If you completed [part 1](./blogging-with-vuepress-part-1.md) you should have your initial VuePress files setup and pushed to GitHub.

Now we're going to add content management and write our first blog post with Netlify CMS.

## Deploy your site to Netlify
1. Login to [Netlify](https://app.netlify.com/start) and follow the stape to creat a new 'Continuous Deployment' site from your GitHub
2. Netlify will automatically pick up the build command and deployment path for VuePress, so go ahead and deploy
3. After a short wait Netlify will deploy your site to a randomly generated url. You can change the name of your site in 'Site settings' or add your own domain name via 'Domain settings'

Once Netlify has finished building and deploying your site, click the link that it provides. Your blog is now live!
Every time you push new code to your Master branch, Netlify will build and redeploy your VuePress site automatically.
