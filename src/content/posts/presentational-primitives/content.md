---
id: presentational-primitives
title: "An CSS Idea: Presentational Primitives"
category: Web Dev
tags:
  - css
  - web development
  - web design
  - classes
  - readability
  - atomic design
  - experiment
  - idea
  - reusability
icon: dot-circle
color: purple
summary: "On a personal project, I attempted to use a concept called a \"presentational primitive\", which is basically a configurable CSS class."
longSummary: "On a personal project, I attempted to use a concept called a \"presentational primitive\", which is basically a configurable CSS class, rather than all components and props. It turns out to be a nice way to codify readable, reusable, and discoverable styles."
publishedAt: 2023-04-20T12:00:00.000Z
createdAt: 2023-04-20T12:00:00.000Z
links:
  - title: "Example"
    href: "https://github.com/Auroratide/monadorecipes/blob/main/src/lib/design/TriangleCorners/TriangleCorners.ts"
    icon: github-alt
    color: github
---

On one of my mini projects called [Monado Recipes](/portfolio/monado-recipes), I attempted a reusable styling pattern that I haven't really seen before I'm sorta calling the "**presentational primitive**". It's basically just a _configurable CSS class_, where the end goal is to have code that looks like the following:

```svelte
<h2 class="{Font.size.stars(3)} {TriangleCorners({ type: "right" })}">
```

## Presentational Semantics

There's something nice and, dare I say, _readable_ about the following markup:

```html
<h2 class="font-size-3-star triangle-corners-right color-bg-shiny">
```

Without even looking at CSS, I can understand that this element probably has a medium-sized font, a triangular corner on the right side, and a gradient background of some kind. What's more, the presentation is decoupled from the actual tag used. The following might render nearly exactly the same thing, but with a different accessible semantic. Notice the `p` instead of `h2`:

```html
<p class="font-size-3-star triangle-corners-right color-bg-shiny">
```

This is a core principle of utility-first design: document semantics and presentation semantics are _different_, and therefore we have different tools to express each:

* We use HTML tags (`h1`, `p`, `blockquote`) for document semantics.
* We use CSS class names (`font-size-3-star`, `color-text-regular`) for presentation semantics.

## Presentational Primitives

A <dfn>presentational primitive</dfn> is a configurable CSS class.

```svelte
<h2 class="{Font.size.stars(3)} {TriangleCorners({ type: "right" })}">
```

For instance, `Font.size.stars(3)` becomes `font-size-3-star`, which is defined in CSS as:

```css
.font-size-3-star {
	font-size: clamp(1.125rem, 2.25vw, 1.29375rem);
}
```

Using typescript as the surface area for the CSS classes allows the design system to be both discoverable and finite. And since we're using CSS classes, a single HTML tag can be decorated with multiple primitives.

## Why is this useful?

I often find myself conflicted by design systems which try to create components out of every concept. There are just some things, such as font size, font color, spacing, and so on that I prefer to mix and match onto elements with definitively known accessible semantics.

That's the fancy way of saying I don't like this code:

```svelte
<Spacing type="around" amount="3">
   <Font size="3" color="primary">
      <Heading level="2">Hello</Heading>
   </Font>
</Spacing>
```

HTML eliminated the [font tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font) a long time ago. Let's not bring it back.

So here's code that's better by applying the presentational ideas to the heading directly:

```svelte
<Heading level="2" size="3" color="primary" spacing="around 3">
   Hello
</Heading>
```

Problem is, now I have to actually create a custom `Header` component with all these presentational props. And I have to do that for _every accessible semantic_ for which each the ideas of font size, color, and spacing apply. This means creating a custom `Paragraph`, `Link`, `Section`, `ListItem`, and the list goes on.

Why can't we just use regular, bonafide HTML elements directly? HTML elements automatically carry accessible semantics, and they provide exactly the mechanism for this kind of mix-and-match of styling ideas: _CSS classes_.

```html
<h2 class="color-primary font-size-3 spacing-around-3">
   Hello
</h2>
```

### Making CSS Classes Discoverable

The one issue I have with just using CSS classes is **discoverability**. Coding environments usually give you hints on how to use a function or piece of code where its interface is clearly defined. On the other hand, CSS classes are just a list of names for which there may be variations.

* `color-primary`
* `color-secondary`
* `color-dark`

It would be cool if I typed `color-`, and then the code editor automatically suggested one of `primary`, `secondary`, or `dark`, but so far I haven't seen editors do this.

Hence, wrapping class names in Typescript functions gives a strongly typed interface by which the correct CSS class can be generated.

```typescript
export const Color = {
   Primary: () => 'color-primary',
   Secondary: () => 'color-secondary',
   Dark: () => 'color-dark',
}
```

Now when I type `<h2 class="{Color.`, the code editor gives me suggestions because it knows what `Color` is.

## What about components?

Components are not just useful, but necessary!

After all, if I have a title that is composed of four different classes, it would be annoying (not just annoying, but _wrong_) to repeat them everywhere I need that kind of title. Components do a few things:

* They create _reusability_ out of a composition of presentational primitives.
* They create _new document semantics_ that represent your design better than individual HTML tags do.
* They create _interactivity_ for when you need something more than static stuff on a page.

The idea is to follow the principles of [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/): a design system is a set of atoms, and atoms compose molecules, and molecules compose organisms.

The atoms are the presentation primitives, and components are molecules.

## Future Follow-up

When I have time, I'll write up something formal about how understanding that there are multiple types of "semantic HTML" helps with creating readable and reusable styling code.
