---
sidebar_position: 3
---

# Animation caveats
A few things are important to note to understand the behavior of Figmotion's "in canvas animation".

## Help, what happened to my design

Be aware that Figmotion animates your elements in the Figma canvas. This means your elements will be shifted and transformed as the plugin animates. When closing Figmotion, the plugin will reset your frame either to the start or end of your animation (depending on the selected reset mode. See [Animation Options](../animating/animation-options) for more info).

## Node position with anchor point

Due to the way Figma positions it's elements, your position values in Figmotion might not correspond to the values in Figma itself. This is simply because the position in Figma is top/left based whereas the position in Figmotion can be based on any of the 9 anchor points. This is simply something to keep in mind while animating, but should not negatively affect your animations in any way.