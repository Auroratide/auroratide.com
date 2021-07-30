CSS offers a nifty property called `image-rendering` which lets you influence how images scale. Normally, when you take a small image and make it bigger, the image becomes blurry. That's kinda ok for photos, but for pixelart, the effect is... rather devastating.

TODO IMAGE OF UPSCALED LEA I GUESS, ANIMATED BECAUSE WHY NOT

<side-text>
<details>
<summary>What is <strong>pixelart</strong>?</summary>
<p>Pixelart is a way of creating pictures. Rather than using brush strokes, each individual pixel is carefully colored. It's like if you were given just a few hundred square tiles and asked to make a mosaic out of them.</p>
</details>
</side-text>

However, thanks to `image-rendering`, it's possible to upscale images in a way that highlights their pixelated nature! Just a couple lines of code later and...

```css
.pixelart {
    image-rendering: crisp-edges;
    image-rendering: pixelated;
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="image-rendering Example" src="https://codepen.io/auroratide/embed/RwVywNK?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/auroratide/pen/RwVywNK">
  image-rendering Example</a> by Timothy Foster (<a href="https://codepen.io/auroratide">@auroratide</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

...hooray! It looks fantastic!

_Except, wait just a second._ Why on earth does the above example CSS specify `image-rendering` twice, and with two different values? Something's fishy!

<side-text warning>

TODO ORDER IMPORTANT LINK TO SECTION I GUESS?

</side-text>

## The Paradox

It turns out there's a bit of a **paradox** in the browser support for `image-rendering`. Waddle on over to [Can I Use](https://caniuse.com/css-crisp-edges) and we see the following weirdness.

TODO IMAGE OF FIREFOX AND CHROME SUPPORTING OPPOSITE THINGS

That's right! Chrome supports `pixelated` but not `crisp-edges`, and Firefox supports `crisp-edges` but not `pixelated`. In order to support both browsers, both values had to be specified in the example above, utilizing the fact of CSS that if one value is invalid then the other will be used.

What I learned, though, is that resolving this paradox is not as simple as "just specify both properties", because the properties have different _semantics_. Based on my reading, I actually have two different recommendations depending on what you want


* Why is there a paradox?
* What is the difference between `pixelated` and `crisp-edges`?
* What CSS should I use for pixelated images? What about for images with crisp edges?

## What's with the paradox?

Without being involved in the discussions directly, it's hard to find any one reason why `image-rendering` has the support it has. What I _did_ find is that the standards regarding this property have been changing since TODO 2014, and have actually changed as recently as July 2021, just a few weeks ago from when this article was written!

The specification for this property is currently in two states.

1. The Candidate Recommendation
2. The Editor's Draft

## Pixelated or Crisp Edges?

## ???




----------------------

goal: how to show a pixelated image intoday's environ,et I gess? why this way is the right way?

why is it this way?

difference between pixelated and crisp-edges

the spec is changing - why the spec is changing
* pixelated means PIXELATED
