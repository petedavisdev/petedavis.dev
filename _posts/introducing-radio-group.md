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

## 1. columns

It's 2020, so let's be having CSS grid!

The best default for readability in most cases is going to be single column with a nice 0.5em gap to stop it getting cramped.

So, `<radio-group>` would be the same as `<radio-group columns="1"> and give you this:

<radio-group toggle="false">
  <label><input type="radio" name="options"> Option 1</label>
  <label><input type="radio" name="options"> Option 2</label>
  <label><input type="radio" name="options"> Option 3</label>
</radio-group>

How about 2 columns. A sensible default for this type of content would be to use grid-auto-flow: column, so `<radio-group columns="2">` gives you this:

<radio-group columns="2" toggle="false">
  <label><input type="radio" name="options"> Option 1</label>
  <label><input type="radio" name="options"> Option 2</label>
  <label><input type="radio" name="options"> Option 3</label>
  <label><input type="radio" name="options"> Option 4</label>
  <label><input type="radio" name="options"> Option 5</label>
</radio-group>

But you should get an attribute for the flow direction, like `<radio-group columns="2" flow="row">`:

<radio-group columns="2" flow="row" toggle="false">
  <label><input type="radio" name="options"> Option 1</label>
  <label><input type="radio" name="options"> Option 2</label>
  <label><input type="radio" name="options"> Option 3</label>
  <label><input type="radio" name="options"> Option 4</label>
  <label><input type="radio" name="options"> Option 5</label>
</radio-group>

How about automatically fitting as many columns as the width allows. Grid makes it possible `<radio-group columns="auto">`:

<radio-group columns="auto" toggle="false">
  <label><input type="radio" name="options"> Option 1</label>
  <label><input type="radio" name="options"> Option 2</label>
  <label><input type="radio" name="options"> Option 3</label>
  <label><input type="radio" name="options"> Option 4</label>
  <label><input type="radio" name="options"> Option 5</label>
</radio-group>

This element is looking pretty useful already! What's next...

## 2. maxheight

One major drawback of using a radio group is that it can take up a lot of the page if you have a long list. A sensible default would be to ensure the group takes up no more than 80vh, with an automatic overflow if it gets too long. So `<radio-group>` would be the same as `<radio-group maxheight="80vh">`:

> Example

And if you want to be specific about the height, `<radio-group maxheight="6em">` would give you:

> Example

## 3. toggle

This is my favourite attribute :smile:

We all know `<select>` dropdowns suck, right?

They are hard to style, options display differently on every device and they start by hiding options from the user :rage:

But there is a legit reason why we still use them. `<select>` nice and compact *after* the user has made their selection, or when there is a sensible default value.

With `<radio-group toggle>` you get the best of both worlds!

<radio-group>
  <label><input type="radio" name="options"> Option 1</label>
  <label><input type="radio" name="options"> Option 2</label>
  <label><input type="radio" name="options"> Option 3</label>
</radio-group>

Crucially, this adds the ability to toggle between checked and unchecked states, which is a nice usability enhancement over regular radio inputs which cannot be unchecked. This is such win-win, let's make it the default. If you don't want it, you'll need `<radio-group toggle="false">`.

When there is a sensible default value for a radio group, just use the `checked` attribute in the radio input as you usually would.

```
<radio-group>
  <label><input type="radio" name="options" checked> Option 1</label>
  <label><input type="radio" name="options"> Option 2</label>
  <label><input type="radio" name="options"> Option 3</label>
</radio-group>
```

<radio-group>
  <label><input type="radio" name="options" checked> Option 1</label>
  <label><input type="radio" name="options"> Option 2</label>
  <label><input type="radio" name="options"> Option 3</label>
</radio-group>

Behind the scenes, this is adding a `hidden` to the labels around all of the inputs that are not checked, which you can easily select with your own CSS, which brings us on to the fun part...

## 4. Freestyle!

Everything about the `<radio-group>` element should be stylable. We don't want the `<options>` styling nightmare here!



## Do you still need `<select>` dropdowns?
## Try `radio-group` today