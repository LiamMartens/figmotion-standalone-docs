---
sidebar_position: 3
---

# Using in/out points
One important aspect of the animation timeline to understand is the in/out points. These determine your current animation playback start and end as well as the render start and end position.

## Manually setting the in/out points
By default the in/out position will be set to the complete timeline (which is 5s by default). If your current animation is longer than 5s the out point will be equal to the last keyframe in your animation. You can adjust the in/out points at any time by dragging the handles (as shown in the image below) or by using the shortcuts `I` and `O` repsectively (no `CMD` or `CTRL`).
 
![In/out handles](./img/using-in-out-points-01.jpg)

## Resetting the in/out points
To reset either your in or out point you can use the shortcuts `CTRL/CMD+K` and `CTRL/CMD+M` respectively. The in point will always be reset to `0ms` whereas the out point will always be reset to the last keyframe of your animation (or to the end of the timeline if there are no keyframes).
