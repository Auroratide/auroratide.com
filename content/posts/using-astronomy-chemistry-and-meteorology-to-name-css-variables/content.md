Sometimes I use [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) to give names to specific font sizes and spacings. It might look like this:

```css
:root {
    --font-small: 0.75em;
    --font-medium: 1em;
    --font-large: 1.5em;
}
```

I call this small-medium-large pattern **t-shirt sizing**, as it closely resembles clothing alpha-sizing convention. It's a pretty common pattern, usually making use of the <abbr>sm</abbr>, <abbr>md</abbr>, and <abbr>lg</abbr> abbreviations as well.

But maybe it's _too_ common... is there a way **science** can provide an alternate way of thinking about design concepts like relative size? How about:

* **[Astronomy and planets](#planetary-sizes)** to denote relative font sizes? 🪐
* **[Chemistry and atoms](#atomic-spacing)** for proportioned margin and padding? ⚛️
* **[Meteorology and clouds](#cloudy-elevation)** for shadows and elevation? ☁️

## Planetary Sizes

Our solar system has eight planets including Earth (or, it has [tons of planets](https://www.sciencedirect.com/science/article/pii/S0019103521004206), but for this let's stick with eight!).

<article-image src="/assets/posts/using-astronomy-chemistry-and-meteorology-to-name-css-variables/planet-sizes.png" width="1600" height="523" alt="The planets of the solar system are lined up and are of various sizes." size="fit">
    <span slot="caption">Planets of the solar system to scale. And Pluto. Source: <a href="https://solarsystem.nasa.gov/resources/686/solar-system-sizes/">NASA/Lunar and Planetary Institute</a></span>
</article-image>

Each planet is a different size, so by listing the planets in order of their size, we can get a totally-not-t-shirt-size system for naming CSS variables!

1. Mercury (smallest)
1. Mars
1. Venus
1. Earth
1. Neptune
1. Uranus
1. Saturn
1. Jupiter (largest)

Just pick a baseline (I like Earth), then let the smaller planets represent smaller sizes, and the larger planets represent larger sizes.

```css
:root {
    --font-size-venus: 0.9em;
    --font-size-earth: 1em;
    --font-size-neptune: 1.25em;
    --font-size-uranus: 1.5em;
}
```

With t-shirt sizes, you get five standard sizes (xs, sm, md, lg, xl) before you start needing more x's, plus assuming you choose md as the baseline, you only get two size tiers above it for all your different headings and whatnot. But with planets, you get _eight_ sizes, four of which are bigger than Earth!

<side-text>

Need more? You could always introduce Pluto or the Sun 😉

</side-text>

## Atomic Spacing

Sometimes, it's nice to know the ratio between different values. For example, on a button I might want the left-right padding to be three times larger than the top-bottom padding.

Literal numbers naturally accomplish this:

```css
:root {
    --spacing-1: 0.125em;
    --spacing-2: 0.25em;
    --spacing-3: 0.375em;
}
```

Crucially, the numbers are not the same as the actual values used! They merely help define a ratio so that you know `--spacing-3` is three times larger than the baseline. This happens to be [Tailwind's philosophy](https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale).

This works, but it's boring! Instead, let's use **atoms**!

<article-image src="/assets/posts/using-astronomy-chemistry-and-meteorology-to-name-css-variables/atom.png" width="600" height="683" alt="An atom depicted with spheres." size="lg">
    <span slot="caption">A Lithium atom, which has three red protons. Source: <a href="https://commons.wikimedia.org/wiki/File:Stylised_atom_with_three_Bohr_model_orbits_and_stylised_nucleus.svg">Indolences</a></span>
</article-image>

The [Periodic Table of Elements](https://pubchem.ncbi.nlm.nih.gov/periodic-table/) lists 118 different kinds of atoms, such as carbon, oxygen, and more. The thing to note is that the **identity of an atom is directly tied to the number of protons it has**.

* Hydrogen atoms always have 1 proton.
* Carbon atoms always have 6 protons.
* Oxygen atoms always have 8 protons.

This is known as an atom's <dfn>atomic number</dfn>, and conveniently, this gives us a numeric scale like we were using above! Instead of the number, we can use the corresponding atom's symbol:

```css
:root {
    --spacing-h: 0.0625em; /* hydrogen (1) */
    --spacing-he: 0.125em; /* helium (2) */
    --spacing-c: 0.375em;  /* carbon (6) */
    --spacing-o: 0.5em;    /* oxygen (8) */
}
```

Sorry IBM, but _this_ is how you really make a [carbon design system](https://www.carbondesignsystem.com/).

## Cloudy Elevation

Material UI has this concept of [elevation](https://mui.com/components/paper/#elevation) that simulates how "high" off the screen something is by using a shadow.

You know what else is elevated off the ground? Clouds! And importantly, different _types_ of clouds generally live at different altitudes.

<article-image src="/assets/posts/using-astronomy-chemistry-and-meteorology-to-name-css-variables/clouds.png" width="1600" height="981" alt="Different kinds of clouds are positioned on a chart by altitude." size="xl">
    <span slot="caption">Different types of clouds are found at different altitudes. Source: <a href="https://commons.wikimedia.org/wiki/File:Cloud_types_en.svg">Valentin de Bruyn / Coton</a></span>
</article-image>

So, cirrus clouds are above altocumulus clouds, which are above stratus clouds. This helps establish a pattern for how much shadow an element may have:

```css
:root {
    --shadow-ground: none;
    --shadow-stratus: 0 0.125em 0.125em hsla(0, 0%, 0%, 0.25);
    --shadow-altocumulus: 0 0.25em 0.25em hsla(0, 0%, 0%, 0.25);
    --shadow-cirrus: 0 0.375em 0.375em hsla(0, 0%, 0%, 0.25);
}

.dialog {
    box-shadow: var(--shadow-cirrus);
}
```

I know what we're all thinking though... what about that cumulonimbus cloud stretching through all the layers? 🙃

```css
:root {
    --shadow-cumulonimbus:
      var(--shadow-stratus),
      var(--shadow-altocumulus),
      var(--shadow-cirrus);
}
```

<side-text warning>

Z-index is another elevation-like concept that comes to mind and is [notorious for being mishandled](https://medium.com/hackernoon/my-approach-to-using-z-index-eca67feb079c).

</side-text>

## Is this actually useful?

I've started using this scheme on small personal projects because I think it's more fun, but I'd hesitate before introducing this specific scheme to a team.

Universality is very important in team and long-maintenance contexts. Nothing's more annoying than having to constantly reference a periodic table just to pad a button if you don't happen to have the table memorized (I certainly don't!).

The real key point of all this is that there isn't one-true-paradigm when it comes to creating abstractions for design concepts. Find what works for you or your team, and if it happens to be a little creative, all the power to you!

## References

* [The Dilemma of Naming Font Size Variables](https://css-tricks.com/the-dilemma-of-naming-font-size-variables/)
* [Creating Your Design System](https://medium.com/codyhouse/create-your-design-system-part-1-typography-7c630d9092bd)
* [Creating Themeable Design Systems](https://bradfrost.com/blog/post/creating-themeable-design-systems/)
