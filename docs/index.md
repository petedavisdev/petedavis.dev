# Blogging with VuePress - Part 1

## Create your initial project files
1. Create a new folder for your project and open it in VS code
2. Create `docs/.vuepress/config.js` and add
```
module.exports = {
    title: "My First Vuepress Site", 
    description: "Welcome to my first VuePress site"
}
```
3. Create `docs/index.md` (this is your homepage) and add
```
# Home
Welcome to my VuePress site
```
4. Open the terminal and run `git init`
5. Create a `.gitignore` file and add
```
/node_modules
```
6. In the terminal run `npm init -y`
7. In the terminal run `npm i vuepress -D`
8. Edit `scripts` in packagee.json file like so and save everything
```
"scripts": {
    "build": "vuepress build docs",
    "dev": "vuepress dev docs"
},
```
## Take a first look at your homepage
You are all set for a first look at your VuePress site. Open the terminal (`Ctrl+'` in VS Code) and run `npm run dev`, wait for the success message and open the link shown in the terminal.

You should see your homepage. `npm run dev` launches a live server, so every time you save a .md files you will instantly see changes in your browser.