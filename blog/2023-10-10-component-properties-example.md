---
title: A brief introduction to the new component properties option
description: This post is a short introduction on using the new component properties option and what can be done with it.
slug: brief-introduction-component-properties
authors: liam
tags: []
image: /img/2023-10-04-major-update/figmotion-3.0.0.jpg
hide_table_of_contents: false
---

## Introduction

Recently, we introduced the option to animate component properties. You may be confused as to why this can be useful, since switching between properties and variants happens immediately without any transition. Well, there is one big use case for this: Sprite animations!

In this guide we will create a short looping sprite aninmation using the component variants.

## Setting up the components
For this tutorial, we will be using the walking sprite sheet from the following [ADA Fruit Tutorial](https://learn.adafruit.com/makecode-arcade-pixel-animation/sprite-animation-fundamentals).  

![Sprite Sheet](https://cdn-learn.adafruit.com/assets/assets/000/075/265/medium640/gaming_DinoSprites_walk.png?1556918968)

We'll start by downloading the image and placing it in Figma.

![Start](./img/2023-10-10-component-properties-example/1-sprite-sheet-import.jpg)  

We can see the sheet is `640px` wide, `107px` high and contains 6 states.  We can divide the width by the 6 states (`106.67px` each) and create 6 frames for each state with those dimensions (`106.67px * 106px`)  

![Frames](./img/2023-10-10-component-properties-example/2-frames.jpg)  

To easily fit each character into each frame we will simply overlay all the frames over the original sheet, edge-to-edge. Doing this we can simply copy the original sprite sheet into each frame and Figma will keep the original position of the image - automatically placing each character correctly inside each frame.

![Copy images](./img/2023-10-10-component-properties-example/3-copy-images.jpg)  

Next, we can turn each frame into it's own component and we will rename the resulting `Frame 1` component to `Dinosaur`. We will also use the component properties section to add a `Variant` to our `Dinosaur` component.  

![Dinosaur!](./img/2023-10-10-component-properties-example/4-dinosaur-component.jpg)  

We now have our component with a property called `Property 1` and a default state. For clarity we will name the property `State` and set it's value to `Frame 01`  

![Rename property](./img/2023-10-10-component-properties-example/5-rename-property.jpg)  

Next, we can select all the other components we just created and place them inside our `Dinosaur` component. Figma will automatically turn each component into a variant.  

![Rename property](./img/2023-10-10-component-properties-example/6-all-variants.jpg)  

Lastly, we will update each variant's `State` property to reflect our original formatting of `Frame 0x`. This means we will have `Frame 02`, `Frame 03`, etc...  

![Rename property](./img/2023-10-10-component-properties-example/7-rename-states.jpg)  

With all our components created, we can create a small Frame which we will place an instance of our `Dinosaur` component in. (I also went ahead and added some clouds, of course that's optional)  

![Animation frame](./img/2023-10-10-component-properties-example/8-create-animation-frame.jpg)  

## Creating the animation
That's all for Figma, now we can open Figmotion. Go ahead and select your newly created Frame and select Figmotion from your plugins list.  

You should see something like below. (you will see I have the Figma preview window open, you can toggle this using the Figma icon in the top right or with the shortcut `CTRL/CMD+ALT+P`)  

![Figmotion window](./img/2023-10-10-component-properties-example/9-figmotion-window.jpg)  

Creating the actual sprite animation only takes a few clicks. Just expand, the `Dinosaur` layer, move your time handle to `400ms` and add a keyframe for the `Component properties` property.  

![Figmotion window](./img/2023-10-10-component-properties-example/10-add-keyframe.jpg)  

Figmotion will have created 2 keyframes for you, one at the start and one at the `400ms` mark. You can select the latter and change it's `State` value to `Frame 06`. If you saved this property as-is Figmotion will just animate from `Frame 01` to `Frame 06`, skipping all frames in between. For this reason, the `Enable variant sequence` flag was added. When you enable this and save the keyframe, Figmotion will automatically interpolate the frames inbetween by their sequence number. This can also be eased to control the speed of the sprite.  

![Sequence](./img/2023-10-10-component-properties-example/11-sequence.jpg)  

That's it - we can render it out and behold the result!  

![Result](./img/2023-10-10-component-properties-example/12-result.gif)  
