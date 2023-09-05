<style>
  .quiz-question {
    margin-bottom: 1.5em;
  }

  .side-by-side {
    display: inline-flex;
    gap: 1em;
    max-width: 100%;
  }

  .two-columns {
    display: inline-grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.5em 1em;
  }

  .color-box {
    background-color: var(--color);
    width: 200px;
    height: 124px;
    max-width: 100%;
    margin: auto;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 0.333em;
    align-items: center;
    justify-content: center;
  }

  .color-box.thin {
    height: 62px;
  }

  .color-box code {
    background: none;
  }
</style>

<point-compilation id="color-notations" title="Color Notations" style="--point-compilation-color: var(--skin-aurorablue-banner);">
  <ul slot="items">
    <li><strong>RGB</strong>: <code>rgb(171 179 114)</code></li>
    <li><strong>Hex</strong>: <code>#ABB372</code></li>
    <li><strong>Color</strong>: <code>color(display-p3 0.67 0.7 0.45)</code></li>
    <li><strong>HSL</strong>: <code>hsl(75 37% 60%)</code></li>
    <li><strong>OKLCH</strong>: <code>oklch(74% 0.087 115)</code></li>
  </ul>
</point-compilation>

<side-text>
   <p>This article is an adaptation from a presentation I gave.</p>
</side-text>

Here are some different shades of **<span style="color: var(--skin-autumnred-text);">red</span>** and **<span style="color: var(--skin-aurorablue-text);">blue</span>**:

<figure>
  <div class="two-columns">
    <div role="img" aria-label="A light shade of red." class="color-box thin" style="--color: hsl(5.61 81% 64%);"></div>
    <div role="img" aria-label="A light shade of blue." class="color-box thin" style="--color: hsl(225.86 81% 67%);"></div>
    <div role="img" aria-label="A medium shade of red." class="color-box thin" style="--color: hsl(3.14 68% 51%);"></div>
    <div role="img" aria-label="A medium shade of blue." class="color-box thin" style="--color: hsl(229 59% 51%);"></div>
    <div role="img" aria-label="A dark shade of red." class="color-box thin" style="--color: hsl(0.59 82% 35%);"></div>
    <div role="img" aria-label="A dark shade of blue." class="color-box thin" style="--color: hsl(230.18 64% 32%);"></div>
  </div>
</figure>

We're gonna answer a seemingly simple question! Are there more shades of red? Or are there more shades of blue?

But before we can answer that, we need to answer a different question first... how do you measure temperature?

<side-text success>
  <p>And, if you're a web developer like me, I'm gonna try and convince you why we should move away from using RGB and Hex notation for colors!</p>
</side-text>

* [How do you measure temperature?](#how-do-you-measure-temperature)
* [Is it possible to measure "shade"?](#is-it-possible-to-measure-quotshadequot)
  * [According to physics](#according-to-physics)
  * [Why physics can't help us](#why-physics-can39t-help-us)
  * [According to vision](#according-to-vision)
  * [According to code](#according-to-code)
* [Different Ways to Notate Color](#different-ways-to-notate-color)
  * [Shortcomings of RGB and Hex](#shortcomings-of-rgb-and-hex)
  * [More colors with P3](#more-colors-with-p3)
  * [Hue, Saturation, and Lightness](#hue-saturation-and-lightness)
  * [Perceptual Uniformity with OKLCH](#perceptual-uniformity-with-oklch)
* [Are there more shades of red or blue?](#are-there-more-shades-of-red-or-blue)
* [References](#references)

## How do you measure temperature?

July 2023 was a very hot summer for everyone. Well, perhaps except for our southern hemisphere friends. How do we actually know how hot it was?

<article-image src="/assets/posts/more-shades-of-red-or-blue/temperatures.png" alt="Three consecutive days of temperatures over 100 degrees fahrenheit." size="md" width="1100" height="584">
  <span slot="caption">It was hot when I made this presentation.</span>
</article-image>

Thermometers are able to measure temperature. Perhaps we can just get one, toss it in the grass, and wait for it to settle! Right?

Nope!

We're interested in the temperature of the air, and unfortunately heat can come from different places.

* The ground gives off heat. If the thermometer sits on the ground, then we're accidentally picking up that heat.
* The Sun also gives off heat<sup>[citation needed]</sup>. If the thermometer sits in the sun, it gets biased by the sun's radiation.

To _accurately_ measure the temperature outside, you have to measure the temperature in the **shade**! This is officially done using what are called Maximum-Minimum Temperature Systems.

<article-image src="/assets/posts/more-shades-of-red-or-blue/mmts.png" alt="An enclosure suspended above the ground." size="xl" width="1200" height="887">
  <span slot="caption">Reference: <a href="https://www.nist.gov/how-do-you-measure-it/how-do-you-measure-air-temperature-accurately">National Institute of Standards and Technology</a></span>
</article-image>

So we measure temperature in the shade.

Can we measure **shade** itself?

## Is it possible to measure "shade"?

Here is a random picture of my yard with a cute animal in it.

<slide-show width="640px" height="479px" mode="blink">
  <img-popout>
    <img src="/assets/posts/more-shades-of-red-or-blue/puppy-1.png" alt="Grass, some shaded and some not. Also a cute puppy." width="960" height="719" />
  </img-popout>
  <img-popout>
    <img src="/assets/posts/more-shades-of-red-or-blue/puppy-2.png" alt="Grass in the shade and grass in the sun are emphasized." width="960" height="719" />
  </img-popout>
</slide-show>

We know that the grass in the shade and the grass in the sun are the same green color, yet they appear different to us when viewed in isolation. What we are seeing are different **<span style="color: var(--skin-aellagreen-text);">shades of green</span>**.

To measure shade, you need a way to measure differences in color. What can science tell us about how to measure colors?

### According to Physics

Physics tells us:

1. Color comes from light.
2. Light is a wave.
3. And waves can be measured!

<article-image src="/assets/posts/more-shades-of-red-or-blue/electromagnetic-spectrum.png" alt="Red, orange, yellow, green, blue, and violet make up the visible part of light's spectrum." size="xl" width="1274" height="768">
  <span slot="caption">Reference: <a href="https://www.nasa.gov/directorates/heo/scan/spectrum/overview/index.html">National Aeronautics and Space Administration</a></span>
</article-image>

Since light it a wave, it has a <dfn>wavelength</dfn>, a measure of length from one valley to the next valley. Different wavelengths of light represent different colors. For example, here are the ranges of wavelengths for red, green, and blue light:

<article-image src="/assets/posts/more-shades-of-red-or-blue/waves.png" alt="Red is between 625-750 nanometers; green is between 500-565 nanometers; blue is between 450-485 nanometers." size="xl" width="1200" height="852">
  <span slot="caption">The wavelengths of red, green, and blue light.</a></span>
</article-image>

Oh hey, let's just focus on red and blue for a sec. After all, we're on the vainglorious quest to discover which color has more shades!

* **<span style="color: var(--skin-autumnred-text);">Red</span>** spans 125 wavelengths.
* **<span style="color: var(--skin-aurorablue-text);">Blue</span>** spans 35 wavelengths.

Therefore, red wins! Right?

**Nope!**

### Why physics can't help us

Just looking at wavelengths does not tell the whole story. Turns out, color is more complicated than that!

* **What about darkness?** Two shades of green may have the exact same wavelength, and yet one will appear darker than the other.
* **What about saturation?** A single wavelength cannot describe how saturated a color appears.
* **Is purple more red or more blue?** When does a color stop being considered "blue"?

And furthermore, if we zoom in on the electromagnetic spectrum, we notice an interesting omission. **Where is <span style="color: var(--skin-fablepink-text);">pink</span>??**

<article-image src="/assets/posts/more-shades-of-red-or-blue/zoomed-spectrum.png" alt="Zoomed in image of visible light spectrum, revealing absence of pink." size="lg" width="1074" height="598">
  <span slot="caption">There is only red, orange, yellow, green, blue, and violet.</span>
</article-image>

These questions teach us a very important lesson about color.

<major-point>
   <p>Color is not light.</p>
   <p>Color is how we <strong>perceive</strong> light.</p>
</major-point>

### According to Vision

At the back of our eyes are special cells that are responsible for detecting different colors of light. These are called <dfn>cone cells</dfn>, and there are three types sensitive to red, green, and blue light.

<article-image src="/assets/posts/more-shades-of-red-or-blue/eye.png" alt="Red, green, and blue cone cells in the back of the eye." size="lg" width="1124" height="656">
  <span slot="caption">Reference: <a href="https://www.aao.org/eye-health/anatomy/cones">American Academy of Ophthalmology</a></span>
</article-image>

1. When light enters the eye, the cone cells react differently depending on the light they receive.
2. Light that is more red, for instance, triggers the red cone cell more than it triggers the green cone cell.
3. The brain interprets the relative strengths of these cellular signals as a specific color!

<slide-show width="960px" height="543px" mode="blink">
  <img-popout>
    <img src="/assets/posts/more-shades-of-red-or-blue/vision-1.png" alt="Red, green, and blue cones in front of a brain." width="960" height="543" />
  </img-popout>
  <img-popout>
    <img src="/assets/posts/more-shades-of-red-or-blue/vision-2.png" alt="Purple rays enter the red, green, and blue cones." width="960" height="543" />
  </img-popout>
  <img-popout>
    <img src="/assets/posts/more-shades-of-red-or-blue/vision-3.png" alt="Rays go from the cones to the brain. The thinnest ray comes from the green cone, and the other rays are thick." width="960" height="543" />
  </img-popout>
  <img-popout>
    <img src="/assets/posts/more-shades-of-red-or-blue/vision-4.png" alt="The brain says, 'Purple!'" width="960" height="543" />
  </img-popout>
</slide-show>

So, knowing all this, where _does_ **<span style="color: var(--skin-fablepink-text);">pink</span>** come from? **[Pink is an invention of the brain!](https://www.youtube.com/watch?v=DRuPF6JtWdw)** It's just how we perceive a relatively equal amount of red and blue light.

Understanding that color is how we perceive light gets us very close to a mechanism for quantifying color. And once we can quantify colors, we can finally determine who wins the red versus blue battle!

### According to Code

As a programmer, in order display the right colors on your computer screen, we need a way to _quantify_ that color. How we've been representing color in code relates to how computer screens are designed, and how screens are designed relates to how our eyes work.

Just as our eyes _detect_ red, green, and blue light, screens vary the relative amounts of red, green, and blue light they _emit_.

Your screen is actually compozed of very tiny red, green, and blue lights called <dfn>subpixels</dfn>. For pink light, the screen maximizes the brightness of the red and blue subpixels and minimizes the brightness of the green subpixels.

<article-image src="/assets/posts/more-shades-of-red-or-blue/subpixels.png" alt="Many red, green, and blue dots on a zoomed-in tv screen." size="xl" width="960" height="772">
  <span slot="caption">Reference: <a href="https://commons.wikimedia.org/w/index.php?curid=3430548">Subpixels by Pengo</a></span>
</article-image>

In code, we can therefore represent colors as a percentage of brightness for each of red, green, and blue. For example, this **<span style="color: var(--skin-fablepink-text);">pink</span>** is:

* **<span style="color: rgb(200 0 0);">Red</span>**: 78%
* **<span style="color: rgb(0 50 0);">Green</span>**: 20%
* **<span style="color: rgb(0 0 125);">Blue</span>**: 49%

Changing these numbers around gives us a **color space** of many millions of possible colors. Now, we just need to figure out how many of these are "red" and how many are "blue"!

But now the issue is... how do we know whether one combination of percentages is "red" or "orange"?

## Different Ways to Notate Color

To get to the bottom of what codes count as "red" and what codes count as "blue", let's do a deep dive into different color notations, starting with the two most popular: RGB and Hexadecimal.

Treating the brightness of each of red, green, and blue as a number gives us our first way color is notated in code, called **RGB**.

<point-compilation-view using="color-notations" highlight="0"></point-compilation-view>

In RGB, each number represents the absolute brightness of each of red, green, and blue subpixels respectively. Some examples:

* `rgb(66 145 224)` is blue; the "blue" number is the largest
* `rgb(208 168 6)` is yellow; the "red" and "green" are both large, which we perceive as yellow
* `rgb(255 255 255)` is white; white is essentially every color all at once

<side-text>
  <p>Each number goes from 0 to 255, rather than being a percentage. 255 is maximum brightness.</p>
</side-text>

<article-image src="/assets/posts/more-shades-of-red-or-blue/grass-compare.png" alt="Bright grass is rgb(171 179 114), shaded grass is rgb(45 73 41)." size="lg" width="1024" height="431">
  <span slot="caption">The RGB values for the grass, shaded and unshaded.</span>
</article-image>

As a web developer, I do not often see RGB notation in the wild. I almost always see its sister, **Hexadecimal** notation.

<point-compilation-view using="color-notations" highlight="1"></point-compilation-view>

These two notations represent the exact same concept, just with Hex being less long to write. The first two characters represent red; the second two characters represent green; and the last two characters represent blue. And instead of being normal numbers, the characters can also be any of the letters A-F. Here are the same colors from the previous examples, but now in hex notation:

* `#4291E0` is blue
* `#D0A806` is yellow
* `#FFFFFF` is white

It's not important for us to understand why letters are used. What's important is now you at least get to know what the color of a **facade** is.

<figure>
  <div role="img" aria-label="A light shade of pink." class="color-box" style="--color: #facade;"></div>
  <figcaption>#FACADE</figcaption>
</figure>

Awesome, I've always wanted to know what `#FACADE` looked like 🙃 Except, what if instead of asking, "What does `#FACADE` look like?", we had asked: "How could I _guess_ at what `#FACADE` looks like?"

And this is a hint that despite RGB and Hex being the two most popular ways to notate color with code, they have some rather glaring shortcomings that make it hard to determine whether red or blue wins...

<side-text success>
  <p>Did that upside-down smiley emoji sound sarcastic? I wrote about different ways to <a href="/posts/making-sarcastic-text">denote sarcasm with text</a>!</p>
</side-text>

### Shortcomings of RGB and Hex

So I _could_ just give you a bulleted list of the shortcomings, but that's no fun. Instead, it's **quiz time**! Click on the question to reveal the answer.

<details class="quiz-question">
  <summary><strong>What color is this? <code>#995215</code></strong></summary>
  <figure>
    <div role="img" aria-label="Brown." class="color-box" style="--color: #995215;"></div>
    <figcaption>#995215 is brown.</figcaption>
  </figure>
</details>

<details class="quiz-question">
  <summary><strong>Which is darker? <code>#5EDBAB</code> or <code>#4D6B8E</code></strong></summary>
  <figure>
    <div class="side-by-side">
      <div role="img" aria-label="Light Cyan." class="color-box" style="--color: #5EDBAB;"></div>
      <div role="img" aria-label="Dark Blue." class="color-box" style="--color: #4D6B8E;"></div>
    </div>
    <figcaption>#4D6B8E is darker.</figcaption>
  </figure>
</details>

<details class="quiz-question">
  <summary><strong>How do I make this more saturated? <code>#D3AB7A</code></strong></summary>
  <figure>
    <div style="display: inline-flex; gap: 1em;">
      <div role="img" aria-label="Desaturated orange." class="color-box" style="--color: #D3AB7A;"></div>
      <div role="img" aria-label="Saturated orange." class="color-box" style="--color: #D37F19;"></div>
    </div>
    <figcaption>#D3AB7A becomes #D37F19.</figcaption>
  </figure>
</details>

The point is, these hex numbers are rather... _mystical_.

Even for someone like me who has been trained since the beginning to use and understand hex color codes, it's still never obvious looking at a code what flavor of color I'm gonna get. And it's far less obvious on how to _transform_ colors, by making them darker, more or less saturated, or hue-shifted, all very common things we wanna do as developers or designers.

<major-point>
  <p>RGB and Hex are great for computers, but bad for humans.</p>
</major-point>

Except, this isn't even true.

<major-point>
  <p>Actually they’re bad for computers too.</p>
</major-point>

### More colors with P3

Hexadecimal allows you to specify exactly 16,777,216 different colors. Which is a lot. But it isn't _every_ color.

Take a look at the following green colors. Depending on your computer screen and browser, you might perceive a difference between them, however subtle:

<article-image src="/assets/posts/more-shades-of-red-or-blue/green.png" alt="Two shades of green side by side." size="md" width="314" height="224">
  <span slot="caption">The greens on the left and right are very subtly different.</span>
</article-image>

<side-text warning>
  <p>It's possible you can't see the difference between the greens because your monitor or browser literally can't show it. I was able to see the difference on Chrome using a Macbook.</p>
</side-text>

As it turns out, the green on the right is the maximum possible green you can express with Hex notation: `#00FF00`. Despite this, our eyes are capable of perceiving greens that are even _greener_.

With improved technology came monitors capable of showing us more and more colors, but it's impossible to take advantage of these new colors by using RGB or Hex to represent them, because these new colors are simply out of bounds.

The set of all possible colors a monitor can physically display is called its <dfn>color space</dfn>. In the past, the best monitors were capable of the **sRGB color space**, which contains the aforementioned 16 million colors. Nowadays, many monitors are capable of the **Display P3** color space, which includes all the colors in sRGB and more.

<article-image src="/assets/posts/more-shades-of-red-or-blue/p3.png" alt="Shape of all possible colors. One triangle sits inside the other, the smaller labeled sRGB and the larger labeled P3." size="lg" width="720" height="526">
  <span slot="caption">P3 includes all the colors of sRGB and more.</span>
</article-image>

In order to express these colors in code, a new generic notation was created.

<point-compilation-view using="color-notations" highlight="2"></point-compilation-view>

Each of the three numbers here, again, represent red, green, and blue respectively, this time being decimal numbers from 0 to 1. So it expresses the brightness of red, green, and blue subpixels explicitly, but this time specifies what color space to use.

This is _better_ but still suffers from all the problems discussed with RGB and Hex: how do I make `color(display-p3 0.67 0.7 0.45)` more saturated or darker? We need a different paradigm altogether...

### Hue, Saturation, and Lightness

By describing a color with words, we get hints for a different way to notate color that's different, and better than, RGB. For example:

<figure>
  <div role="img" aria-label="Light orange." class="color-box" style="--color: #D3AB7A;"></div>
  <figcaption>How might we describe this color?</figcaption>
</figure>

This is a somewhat **light**, very **desaturated** shade of **orange**.

<major-point>
  <p>Humans communicate colors with <strong>hue</strong>, <strong>saturation</strong>, and <strong>lightness</strong>.</p>
</major-point>

And so, we have the **HSL notation**, describing colors with three numbers that represent hue, saturation, and lightness respectively.

<point-compilation-view using="color-notations" highlight="3"></point-compilation-view>

Breaking down `hsl(75 37% 60%)`:

* **Hue**: The first number is the hue, ranging from 0 to 359. It's essentially a circular spectrum, with 0 being red, 120 being green, 240 being blue, and 359 being red again.
* **Saturation**: The second number is saturation, with 0% being no saturation and 100% being max saturation.
* **Lightness**: The last number is lightness, also ranging from 0% to 100%.

<article-image src="/assets/posts/more-shades-of-red-or-blue/hsl.png" alt="Cylinder of colors where the hue changes as you go around the circle." size="lg" width="720" height="533">
  <span slot="caption">A color is a point in an HSL cylinder.</span>
</article-image>

If we revist our quiz from before, the questions actually become much simpler to answer!

1. <strong>What color is this? <code>hsl(28 76% 34%)</code></strong>
    * Hue 28 is orange, and 34% is pretty dark. So this is brown.
2. <strong>Which is darker? <code>hsl(157 63% 61%)</code> or <code>hsl(212 30% 43%)</code></strong>
    * Since 43% is darker than 61%, <code>hsl(212 30% 43%)</code> must be darker.
3. <strong>How do I make this more saturated? <code>hsl(33 50% 65%)</code></strong>
    * All we have to do is increase the saturation percentage.

HSL is great, but there's still one problem that will lead us to our final color notation...

### Perceptual Uniformity with OKLCH

Remember: color is all about our _perception_. Interestingly, we perceive different colors as having different brightnesses, like yellow and blue.

<figure>
  <div class="side-by-side">
    <div role="img" aria-label="Yellow, hsl(60 100% 50%)" class="color-box" style="--color: hsl(60 100% 50%);">
      <code style="color: black;">hsl(60 100% 50%)</code>
      <code style="color: white;">hsl(60 100% 50%)</code>
    </div>
    <div role="img" aria-label="Blue, hsl(240 100% 50%)" class="color-box" style="--color: hsl(240 100% 50%);">
      <code style="color: black;">hsl(240 100% 50%)</code>
      <code style="color: white;">hsl(240 100% 50%)</code>
    </div>
  </div>
  <figcaption>Notice the lightness for each is 50%.</figcaption>
</figure>

Using HSL notation, lightness is set to 50% for each color, and yet the yellow looks way brighter! In fact, it's so bright you can't see the white text on it, whereas you can see the white text better on the blue.

The ideal color notation should be **perceptually uniform**, meaning that the same "lightness" value for two different hues appear similarly light, and the same "saturation" value likewise results in two similarly saturated colors.

<figure>
  <div class="side-by-side">
    <div role="img" aria-label="Yellow, 70% 0.15 102" class="color-box" style="--color: hsl(54 100% 35%);">
      <code style="color: black;">???(70% 0.15 102)</code>
    </div>
    <div role="img" aria-label="Blue, 70% 0.15 260" class="color-box" style="--color: hsl(217 94% 69%);">
      <code style="color: black;">???(70% 0.15 260)</code>
    </div>
  </div>
  <figcaption>The lightness for each is 70%.</figcaption>
</figure>

Introducing the **Oklch notation**:

<point-compilation-view using="color-notations" highlight="4"></point-compilation-view>

Like HSL, Oklch is based on three numbers, this time called Lightness, Chroma, and Hue.

<article-image src="/assets/posts/more-shades-of-red-or-blue/oklch.png" alt="First number is lightness, second is chroma, third is hue." size="md" width="1024" height="373">
  <span slot="caption">P3 includes all the colors of sRGB and more.</span>
</article-image>

* **Lightness**: How light a color appears, from 0% to 100%.
* **Chroma**: How vivid the color appears, from 0 to Infinity.
  * At least, <em>theoretically</em> Infinity. The highest possible chroma depends on the color space used. For P3, the highest possible chroma is 0.37.
  * Additionally, the highest available chroma is different for each hue, corresponding to how sensitive we are to differences between shades of that hue.
* **Hue**: A number from 0 to 360, except this time 0 and 360 are magenta instead of red.

<side-text success>
  <details>
    <summary>Click here for some examples of the oklch notation based on previous colors we've seen.</summary>
    <ul>
      <li>Bright yellow is <code>oklch(97% 0.21 110)</code>, and the deep blue is <code>oklch(45% 0.31 264)</code>. Notice how different the lightness values are now, indicating that the yellow will appear much brighter.</li>
      <li>The greenest green possible with RGB and Hex is <code>oklch(87% 0.29 142)</code>, and Display P3 allows us to specify the more vivid green <code>oklch(87% 0.33 142)</code>. Note that the chroma is higher.</li>
      <li>In the original grass example, our two shades of green were <code>oklch(74% 0.087 114)</code> and <code>oklch(37% 0.062 141)</code>. Just by looking at the numbers, can you guess which is the brigher shade and which is the darker?</li>
    </ul>
  </details>
</side-text>

The Oklch notation finally gives us everything we want in order to describe color in as close to human terms as possible, and it finally gives us a way to quantify once and for all whether red or blue has more shades!

<side-text>
  <p>If you're a developer looking for more practical guidance on how to use the oklch notation, here are some resources.</p>
  <ul>
    <li><a href="https://keithjgrant.com/posts/2023/04/its-time-to-learn-oklch-color/">It's time to learn oklch color</a></li>
    <li><a href="https://lea.verou.me/blog/2020/04/lch-colors-in-css-what-why-and-how/">LCH colors in CSS: what, why, and how?</a></li>
  </ul>
</side-text>

## Are there more shades of red or blue?

In order to answer this question, we needed to find a way to quantify color that most closely matches how we _perceive_ color. The **oklch** notation does this best by:

* Defining colors in terms of three concepts we intuitively use to communicate differences in colors: hue (what color it is), chroma (how vivid it is), and lightness (how light or dark it is).
* Maintaining perceptual uniformity of its values, meaning the same lightness and chroma values is perceived to be the same across different hues.
* Allowing us to define as many colors as possible, even moreso than the 16 million provided by RGB.

To help us, I'm going to use an **[Oklch Color Picker](https://oklch.com/)**! It provides useful diagrams that illustrate what the color space _looks like_ so we can see how big the red and blue sections are.

<article-image src="/assets/posts/more-shades-of-red-or-blue/color-picker.png" alt="Various sliders for lightness, chroma, and hue." size="lg" width="1200" height="595">
  <span slot="caption">Specify color by lightness, chroma, and hue.</span>
</article-image>

The first question: **How many hues do we perceive as red, and how many do we perceive as blue?**

Hue is a number from 0 to 360, so some of those will be "red" and some will be "blue".

<article-image src="/assets/posts/more-shades-of-red-or-blue/hue-compare.png" alt="The red section on the hue slider is smaller than the blue section." size="lg" width="882" height="676">
  <span slot="caption">Red takes less space on the hue slider than blue.</span>
</article-image>

* Red is approximately from 22 to 33, or about 11 possible hues.
* Blue is approximately from 230 to 270, or about 40 possible hues.

By this metric, we seem to be able to perceive more differences in blues than reds.

And the second question: **For each color, what is the highest chroma available?**

One of the interesting things about the oklch notation is that the maximum chroma value differs per hue. By finding the peak chroma values for red and blue, we can find for which color we can perceive more vivid shades.

<article-image src="/assets/posts/more-shades-of-red-or-blue/chroma-compare.png" alt="Side-by-side chroma sliders for red and blue." size="lg" width="1398" height="528">
  <span slot="caption">Blue has a higher chroma peak than red.</span>
</article-image>

* Red peaks at 0.295 chroma.
* Blue peaks at 0.318 chroma.

So even by chroma, blue seems to edge out red.

<icon-divider icon="palette" aria-hidden="true"></icon-divider>

And so, given that we can identify more hues as being "blue", and within the hues we can perceive a higher chroma for blue, we _should_ be able to conclude that **blue** has more shades than red!

<figure>
  <div role="img" aria-label="Blue with a medal." class="color-box" style="--color: var(--skin-aurorablue-banner);">
    <vector-icon icon="medal" style="color: white; font-size: 3em;"></vector-icon>
  </div>
  <figcaption><strong>Blue wins!!</strong></figcaption>
</figure>

I say that, but as this is all based on human perception, who's to say that what I call "blue" you don't call "cyan"? Or perhaps for some people, "red" and "orange" are indistinguishable, and so all the hues of orange are also hues of red?

The question is, at a fundamental level, unanswerable because it is based on _human_ perception, and humans are diverse!

Really, the point is that color research is _fascinating_ and surprisingly deep. And if you're a developer, consider using the **OKLCH notation** for colors as a human-friendly alternative to the classic RGB or Hex notations!

<point-compilation-view using="color-notations"></point-compilation-view>

## References

* [OKLCH in CSS: Why we moved from RGB and HSL](https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl)
* [LCH colors in CSS: what, why, and how?](https://lea.verou.me/blog/2020/04/lch-colors-in-css-what-why-and-how/)
* [What is DCI-P3 Color? A Basic Definition](https://www.tomshardware.com/reference/what-is-dci-p3-color-a-basic-definition)
* [OKLCH Color Picker](https://oklch.com/)
