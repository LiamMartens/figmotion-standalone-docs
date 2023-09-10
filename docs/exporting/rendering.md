---
sidebar_position: 2
---

# Rendering
Clicking `Render` will open the render options modal. Here you can choose whether you want to render your animation as `mp4`, `gif`, `webm` or `webp`. This could take a while depending on the resolution of your frames. After the rendering is done a new link to the rendered video will appear. Keep in mind the render is only kept on the Figmotion server for 24 hours and will be completely removed afterwards. If you want to send the video to a client or a developer you need to save it locally first.  

**Note** GIFs will always be downscaled to `720p` due to the format's very inefficient size (previously resulting in GIFs over 100MB in size). This is also the recommendation of other platforms such as [Giphy](https://support.giphy.com/hc/en-us/articles/360019914771-GIF-Creation-Best-Practices)

## The effect of in and out points
Keep in mind Figmotion will only render your selected in/out window. If you want to render the complete animation make sure to reset your in/out points using the `CTRL/CMD+K` and `CTRL/CMD+M` shortcuts. The in/out points can be useful however to render small parts of your animation to verify your changes.
