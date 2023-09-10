---
sidebar_position: 5
---

# Presets
If you want to quickly apply animations to a design you can make use of the presets functionality. The "Apply preset" button can be found on each layer.  

![Apply preset button](./img/apply-preset-button.jpg)

## Selecting and configuring a preset
Once you select a preset from the modal you will be able to configure it.
You will find basic options like when to start the preset as well as the duration.
Additionally you will also be able to adjust specific parameters of certain presets, such as the distance of the "fade in up" preset.

![Configure preset modal](./img/configure-preset-modal.jpg)

### Using the stagger children option
Figmotion can also apply the preset to the children of a frame instead of the frame itself.
This can be useful to animate in a list of items for example.

Once enabled you can adjust how the children should be staggered.

![Apply to children](./img/apply-to-children.jpg)

**Note** If the frame you are animating has auto layout enabled, the children won't be able to move. For this reason Figmotion will attempt to apply the preset to the inner child of the auto layout items. This way you can apply presets whilst keeping auto layout enabled.

### Adjusting the children selector
For advanced use cases you can also use a CSS like selector to adjust Figmotion's child dicsovery behavior.
For more information aboutt the supported syntax, please refer to the [following page](https://www.npmjs.com/package/figma-node-selector).

A few examples to get you started:  

1. Select only direct children of Frame type  
`> Frame`

2. Select all direct children  
`> *`

3. Select all rectangles with a name starting with "rect"  
`Rectangle[name^="rect"]`
