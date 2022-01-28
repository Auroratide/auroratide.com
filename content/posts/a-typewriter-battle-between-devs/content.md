<external-resource type="css" src="https://unpkg.com/@auroratide/typewritten-text@0.1.4/lib/style.css"></external-resource>
<external-resource type="js-module" src="https://unpkg.com/@auroratide/typewritten-text@0.1.4/lib/define.js"></external-resource>

A couple weeks ago, an interesting battle of sorts spontaneously erupted between a few developers on a site a frequent, [dev.to](https://dev.to). It was pretty simple: make a classic **typewriter animation** using your favorite web technologies!

<p style="text-align: center;">This is a <typewritten-text repeat><strong>typewriter animation!</strong></typewritten-text></p>

<side-text>
<details>
<summary>What are <strong>web technologies</strong>?</summary>
<p>All websites are built using HTML, CSS, and Javascript.</p>
<ul>
  <li>Hypertext Markup Language (<abbr>HTML</abbr>) gives web pages their skeletal structure, telling your computer what things are headings, paragraphs, and images.</li>
  <li>Cascading Style Sheets (<abbr>CSS</abbr>) make websites pretty, defining the look, feel, layout, and colors.</li>
  <li>Javascript (<abbr>JS</abbr>) makes pages dynamic, enabling advanced interactivity.</li>
</ul>
</details>
</side-text>

The typewriter animation types one letter at a type to a screen, and usually this means at minimum Javascript is needed, since neither HTML nor CSS are complex enough to allow that level of custom animation. However, some people were coming up with solutions that used no Javascript, relying only on HTML and CSS:

* [Alvaro Montoro](https://twitter.com/alvaro_montoro) started with a [Typewriter Effect with CSS](https://dev.to/alvaromontoro/typewriter-effect-with-css-38im)
* [Temani Afif](https://twitter.com/ChallengesCss) followed up with a [Scalable CSS-only Typewriter Effect](https://dev.to/afif/a-scalable-css-only-typewriter-effect-2opn)

Seeing those, I remembered something I had learned just a week prior, and realized I could enter the unspoken war with a solution of my own, require no Javascript, no CSS, and not even HTML...

## A Typewriter with no HTML, CSS, nor Javascript

It turns out it is possible to make a typewriter animation using just [Scalable Vector Graphics](https://developer.mozilla.org/en-US/docs/Web/SVG) (<abbr>SVG</abbr>)!

<iframe height="300" scrolling="no" title="Codepen: Typerwriter with SVG?" src="https://codepen.io/auroratide/embed/ExXVdZG?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/auroratide/pen/ExXVdZG">
  Typerwriter with SVG?</a> by Timothy Foster (<a href="https://codepen.io/auroratide">@auroratide</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

Unlike HTML, CSS, and JS, SVG is mostly used for creating mathematical imagery; you might see them most commonly in the form of logos or icons on websites.

<side-text>

My logo at the top of this website is made using SVG.

</side-text>

SVG actually allows for something called [Synchronized Multimedia Integration Language](https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL) (<abbr>SMIL</abbr>), enabling defining animations without the need of an advanced programming language like Javascript.

However, while it does in fact work, there are a number of limitations which makes this more of a funny submission than a serious one! In other words, developers shouldn't copy the code for this because it probably won't fit most people's use cases.

That said, my post on dev.to, [A Typewriter, but with no HTML, CSS, or JS](https://dev.to/auroratide/a-typewriter-but-with-no-html-css-or-js-1bgd) did pretty well and raked in a few thousand views! To me, that was enough encouragement to try something more ambitious...

## A Typewriter with ALL of HTML, CSS, and Javascript

This is basically the polar opposite of my last idea: instead of using _nothing_, let's use _everything_! And by doing so, let's make it so as many people as possible can reuse it.

The result was an easy-to-install `typewritten-text`, providing the basic typewriter animation while allowing different sorts of customization!

<iframe height="380" title="Codepen: Typewriter Component" src="https://codepen.io/auroratide/embed/MWoJdda?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/auroratide/pen/MWoJdda">Typewriter Component</a> by Timothy Foster (<a href="https://codepen.io/auroratide">@auroratide</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

A [web component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) basically defines a new HTML element that developers can use, making the code quite literally as simple as this:

```html
I like <typewritten-text repeat>the typewriter effect!</typewritten-text>
```

I talk a bit more about its features on my original dev.to post, [A Typewriter, but using a New HTML Tag](https://dev.to/auroratide/a-typewriter-but-using-a-new-html-tag-60i). In total, that page received over 20,000 views!

And, if you're a developer, you can find out how to actually use it on your site on the [typewritten-text Github](https://github.com/Auroratide/typewritten-text) page! It quickly became my most starred repo, with over 60 stars as of this post.

## Who won the battle?

A friendly battle of this sort has no winners or losers! It's just a nice opportunity for devs to stretch their muscles and challenge themselves along with people of similar interest. Here's a list of all the articles I could find by others on Dev!

* [Typewriter Effect with CSS](https://dev.to/alvaromontoro/typewriter-effect-with-css-38im) by [Alvaro Montoro](https://twitter.com/alvaro_montoro)
* [Scalable CSS-only Typewriter Effect](https://dev.to/afif/a-scalable-css-only-typewriter-effect-2opn) by [Temani Afif](https://twitter.com/ChallengesCss)
* [Animated no-element typewriter](https://dev.to/alvaromontoro/animated-no-element-typewriter-2835) by Alvaro Montoro
* [A Typewriter, but with no HTML, CSS, or JS?!](https://dev.to/auroratide/a-typewriter-but-with-no-html-css-or-js-1bgd) by me, Timothy Foster
* [The CSS Scrabble Writer](https://dev.to/afif/the-css-scrabble-writer-the-next-gen-typewriter-fbi) by Temani Afif
* [A Multi-line CSS-only Typewriter Effect](https://dev.to/afif/a-multi-line-css-only-typewriter-effect-3op3) by Temani Afif
* [A Typewriter, but using a New HTML Tag](https://dev.to/auroratide/a-typewriter-but-using-a-new-html-tag-60i) by me, Timothy Foster
* [An Actual Typewriter, that auto types and is interactive too](https://dev.to/inhuofficial/an-actual-interactive-typewriter-2hg9) by [InHuOfficial](https://twitter.com/InHuOfficial)
* [Type-Writer Component: Magic and Asynchronicity](https://dev.to/darkwiiplayer/building-an-html-type-writer-3hpj) by [DarkWiiPlayer](https://dev.to/darkwiiplayer)
