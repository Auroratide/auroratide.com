---
id: pixel-art-animation-reinvented
title: "Pixel Art Animation Reinvented"
author: aarthificial
publisher: Youtube
href: https://www.youtube.com/watch?v=HsOKwUwL1bE
category: Art
type: video
tags:
  - pixelart
  - unity
  - game dev
  - rendering
icon: th
color: yellow
summary: "For his game, aarthificial uses a different approach that separates the animation from the appearance."
longSummary: "For his game, aarthificial uses a different approach that separates the animation from the appearance. The animation is still a classic spritesheet. However, instead of each pixel representing to color to display, each pixel actually represents the coordinates of a pixel in a different image."
originalPublishedAt: 2022-04-26T12:00:00.000Z
publishedAt: 2022-05-06T12:00:00.000Z
---

## Spritesheets

<p>When making a 2D game with characters and animations, a classic approach is to create a <dfn>spritesheet</dfn>. An animation can be thought of as a series of rapidly displayed frames each showing a snapshot of the animation. A spritesheet is a grid of such frames, and a game will reference each frame in the sheet when showing the animation.</p>

There is a problem with this approach: What if you want _variations_? For example, let's say a character dresses differently depending on the season. Normally, you would have to clone the _entire spritesheet_ and alter it to fit the new variation.

This results in a lot of duplicated sprites. Heaven forbid you need to tweak the _animation itself_ and therefore need to change every single spritesheet.

## UV Mapping

For his game, aarthificial uses a different approach that separates the animation from the appearance.

The animation is still a classic spritesheet. However, instead of each pixel representing to color to display, each pixel _actually_ represents the coordinates of a pixel in a different image; let's call this special image the **lookup image**.

A [shader](https://docs.unity3d.com/Manual/shader-introduction.html) is used to render the lookup pixel to the view.

<figure class="h-15">
	<img-zoom>
		<img src="./example.png" alt="The Source image shows an animation frame with oddly colored pixels. The Lookup image shows a flattened character sprite. The Result image shows the animation frame, but colored according to the sprite." width="1644" height="632" />
	</img-zoom>
	<figcaption>This approach decouples the animation of a character from her appearance.</figcaption>
</figure>

Now, there is only ever a single animation spritesheet. If you want different variations of the character, you only need to supply many different lookup images, each of which is drastically cheaper to make than an entire animation sheet.

In fact, this technique is not entirely novel. 3D animations, for instance, animate using "bones" and allow changes in appearance via models and meshes. aarthificial has taken that wisdom and applied it to pixelart.