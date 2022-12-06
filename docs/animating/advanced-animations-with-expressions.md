---
sidebar_position: 5
---

# Advanced animations with expressions
When using the keyframe editor you may notice a checkbox called `Is expression`. If you enable this checkbox you will turn the keyframe into an expression, allowing you to use custom logic to animate your layer.

Once enabled, the editor will show a `Edit expression` button which will open the code editor. Expressions generally support moth basic functions such as `Math.round`, `Math.ceil`, etc.. and a few custom variables are also available (more on these below by example). One thing to keep in mind is `functions` and other complex control logic is not supported. An error will be shown if the expression can not be processed before saving.

## Rotating a layer by time
You can use the provided `time` variable to access the current time information (in `ms`). For example, if you wanted to rotate a layer along with the time you could simply write, `time`. If you wanted to rotate the layer at half the time you could write `time * 0.5` or `time / 2`

## Rotating a layer by general progress
Another option is to use the `progress` variable to animate your layer. This will be a value between 0 and 1 and will already have easing applied (based on the easing of your keyframe). So to rotate your layer a full 360 degrees by the end of the keyframe you could write `360 * progress`

## Accessing other layers
The most powerful functionality of expressions is the ability to reference other layers in your animation using the `layer` function. A simple example would be to move `layer B` at twice the speed of `layer A`. This could be achieved as follows (assuming `layer A` already has an animation applied):

```js
layer(Layers['id:Layer A']).property('x') * 2
```

Notice the `Layers` object, this is a map of all the available layers. No worries though, `IntelliSense` will help you find the right layer by it's name.