# Part 3: Creating blog posts with and editorial workflow

In [part 2](./blogging-with-vuepress-part-2.md) you got as far as editing your home page content in Netlify CMS. 

Now we're going to make blogging possible.

## Configure Netlify CMS
We need to add a new collection called "Posts" within your admin config. This will include information about the content of posts and the folder they will be saved in.

Now is also a goot time to add `publish_mode: editorial_workflow`. This means that you will be able to save draft posts before publishing them.

Here is the resulting `docs/.vuepress/public/admin/config.yml`
```
backend:
  name: github
  repo: p440davis/vuepress-netlify-blog
media_folder: "docs/.vuepress/public/media"
public_folder: "/media"
publish_mode: editorial_workflow
collections:
  - label: "Pages"
    name: "pages"
    files:
      - label: "Home"
        name: "home"
        file: "docs/index.md"
        fields:
          - {label: Body, name: body, widget: markdown}
  - label: "Posts"
    name: "posts"
    folder: "docs/_posts"
    create: true
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Publish Date", name: "date", widget: "datetime"}
      - {label: "Featured Image", name: "thumbnail", widget: "image"}
      - {label: "Body", name: "body", widget: "markdown"}
```
Commit and push this change. After it has deployed you will be able to see Posts in your CMS below Pages.

## Setup VuePress posts frontmatter

## [Part 4: Pages and navigation &rarr;](./blogging-with-vuepress-part-4.md)