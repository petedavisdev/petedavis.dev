---
title: Introducing <radio-group>
date: 2020-06-25T00:19:12.574Z
thumbnail: /media/vuepress-logo.png
tags:
  - UI Design
  - HTML
  - CSS
permalink: /:slug
---
*Could this be the end of `<select>` dropdowns?*

If you've ever made HTML forms you'll know what a radio group is. Whenever you use radio buttons, the `name` attribute make them work together as a group so that the user can only choose one, like so:

``` html
<label><input type="radio" name="options"> Option 1</label>
<label><input type="radio" name="options"> Option 2</label>
<label><input type="radio" name="options"> Option 3</label>
```

<label><input type="radio" name="options"> Option 1</label>
<label><input type="radio" name="options"> Option 2</label>
<label><input type="radio" name="options"> Option 3</label>

Until now, a radio group itself has not been a thing, it is just the way we talk about radio inputs connected by name. But what if there was a radio-group element?

``` html
<radio-group>
  <label><input type="radio" name="options"> Option 1</label>
  <label><input type="radio" name="options"> Option 2</label>
  <label><input type="radio" name="options"> Option 3</label>
</radio-group>
```

What attributes might we want this element to have?

## 1. `<radio-group>` columns

It's 2020, so let's be having CSS grid!

The best default for readability in most cases is going to be single column with a nice 0.5em gap to stop it getting cramped.

So, `<radio-group>` would be the same as `<radio-group columns="1"> and give you this:

<radio-group collapse="false">
  <label><input type="radio" name="options"> Option 1</label>
  <label><input type="radio" name="options"> Option 2</label>
  <label><input type="radio" name="options"> Option 3</label>
</radio-group>

How about 2 columns. A sensible default for this type of content would be to use grid-auto-flow: column, so `<radio-group columns="2">` gives you this:

<radio-group columns="2" collapse="false">
  <label><input type="radio" name="options"> Option 1</label>
  <label><input type="radio" name="options"> Option 2</label>
  <label><input type="radio" name="options"> Option 3</label>
  <label><input type="radio" name="options"> Option 4</label>
  <label><input type="radio" name="options"> Option 5</label>
</radio-group>

But you should get an attribute for the flow direction, like `<radio-group columns="2" flow="row">`:

<radio-group columns="2" flow="row" collapse="false">
  <label><input type="radio" name="options"> Option 1</label>
  <label><input type="radio" name="options"> Option 2</label>
  <label><input type="radio" name="options"> Option 3</label>
  <label><input type="radio" name="options"> Option 4</label>
  <label><input type="radio" name="options"> Option 5</label>
</radio-group>

How about automatically fitting as many columns as the width allows. Grid makes it easy `<radio-group columns="auto">`:

<radio-group columns="auto" collapse="false">
  <label><input type="radio" name="options"> Option 1</label>
  <label><input type="radio" name="options"> Option 2</label>
  <label><input type="radio" name="options"> Option 3</label>
  <label><input type="radio" name="options"> Option 4</label>
  <label><input type="radio" name="options"> Option 5</label>
</radio-group>

## 2. `<radio-group>` maxheight
## 3. `<radio-group>` collapse
## 4. '<radio-group>` freestyle!
## Do you still need `<select>` dropdowns?
## Try `radio-group` today