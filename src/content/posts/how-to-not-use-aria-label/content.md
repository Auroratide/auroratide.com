---
id: how-to-not-use-aria-label
title: "How to NOT use aria-label"
category: Accessibility
tags:
  - accessibility
  - html
  - aria-label
  - wai-aria
  - naming
icon: tag
color: purple
summary: "The aria-label attribute is useful for assigning an accessible name to something, but it's also easy to overuse."
longSummary: "The aria-label attribute is useful for assigning an accessible name to something, but it's also easy to overuse. Let's look at three ways NOT use aria-label to improve website accessibility."
publishedAt: 2022-05-23T19:00:00.000Z
createdAt: 2022-05-23T18:48:41.302Z
---

The `aria-label` attribute gives a textual name to an HTML element. A close button is a classic example:

```html
<button aria-label="Close">×</button>
```

Visually, you would see a "×", which indicates a window will be closed. Meanwhile, someone who uses a [screen reader](https://webaim.org/techniques/screenreader/) will hear "Close, button", which conveys the same thing. Without the `aria-label`, they would hear "Times, button" instead, which is rather confusing.

So, `aria-label` is very useful! However, generally speaking, it isn't the first tool you should reach for when providing a [textual representation](https://webaim.org/techniques/alttext/) for an element.

* [Many elements can't use aria-label](#elements-that-can39t-use-aria-label)
* [Native HTML should be preferred when possible](#use-native-html-instead)
* [Sometimes, the text you want to use is actually for everyone](#some-text-is-for-everyone)

So, let's explore when **not** to use `aria-label`!

## Elements that can't use aria-label

<major-point>
	Don't use aria-label for roles where it isn't allowed!
</major-point>

You can't put `aria-label` on a `span`:

```html
<!-- Don't do this! -->
<span aria-label="Apple">Orange</span>
```

It might _look like_ visual readers get an orange, while screen readers get an apple, but that's not really what happens here. In fact, what happens is [not well-defined nor consistent across browsers and assistive tools](https://www.tpgi.com/short-note-on-aria-label-aria-labelledby-and-aria-describedby/).

The `span` is just one example. The [aria-label definition](https://w3c.github.io/aria/#aria-label) lists many roles for which it is forbidden.

The general rule is that `aria-label` can only be used on [name-assignable roles](https://w3c.github.io/html-aria/#docconformance-naming), which includes [interactive elements](https://html.spec.whatwg.org/#interactive-content-2) and not static elements.

Instead, you have a couple of choices:

* Explicitly assign an interactive role
* Make the screen reader text [visually hidden](https://webaim.org/techniques/css/invisiblecontent/) with CSS

```html
<!-- Assign a role, but also just use a normal button...? -->
<span role="button" aria-label="close">×</span>

<!-- Make the text visually hidden -->
<span class="visually-hidden">Apples</span>
<span aria-hidden="true">Oranges</span>
```

## Use native HTML instead

<major-point>
	Avoid aria-label where regular HTML can be used instead!
</major-point>

HTML is already [designed to provide textual representation for virtually anything](https://www.accessibility-developer-guide.com/examples/sensible-aria-usage/label-labelledby/#real-world-use). As such, you will almost always rely on these mechanisms rather than needing `aria-label`.

* The text content of a button is its textual representation (`<button>Submit</button>`).
* Images are supplied an [alt attribute](https://auroratide.com/posts/image-alt-text) which is its textual label.
* Form controls have a corresponding [label element](https://webaim.org/techniques/forms/#labels) to describe them.
* Figures and tables have [figcaption](https://webaim.org/techniques/alttext/#figure) and [caption](https://webaim.org/techniques/tables/data#caption) respectively.
* Even page sections are generally described by their [page headings](https://www.accessibility-developer-guide.com/examples/headings/alternative-techniques/) (`<h2>`, `<h3>`, etc).

Notably, most of these mechanisms (by default) provide the same text to sighted and non-sighted people alike. So, `aria-label` is best reserved for when these _shouldn't_ be the same, or for when the sighted representation conveys meaning without text (such as using the "×" symbol to represent "close").

```html
<!-- Avoid this... -->
<table aria-label="Quarterly Earnings">

<!-- ...when you can use native HTML -->
<table><caption>Quarterly Earnings</caption></table>
```

## Some text is for everyone

<major-point>
	Avoid aria-label for text that is valuable to everyone!
</major-point>

Most textual representations provided by HTML are both visible and available for screen readers simultaneously. And that's for good reason:

* If the context/instructions is important for screen readers, it is likely important for everyone.
* [People who use screen readers are not necessarily blind](https://webaim.org/projects/screenreadersurvey9/#disabilitytypes), and it can be confusing if what is announced by the tool differs from what is read on the page.
* Content in `aria-label` [cannot be searched](https://www.accessibility-developer-guide.com/examples/sensible-aria-usage/label-labelledby/#text-not-searchable).

For example, perhaps there are keyboard shortcuts you want people using screen readers to be aware of (e.g. "Press <kbd>Esc</kbd> to exit the modal"). Yet, that text is just as useful to sighted people using a mouse, as they may prefer the alacrity of pressing <kbd>Esc</kbd> over moving a mouse to a button.

To hide info like this by default, consider using [tooltips](https://www.accessibility-developer-guide.com/examples/widgets/tooltips/) or the [details HTML element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details).

## So when do I use aria-label?

I wrote about this because I had developed a tendency to overuse `aria-label` anytime I needed something "for screen readers", and doing so led to web pages that were either non-compliant (failing [axe accessibility testing](https://dequeuniversity.com/rules/axe/4.4/aria-allowed-attr)) or less accessible than I thought they were.

As usual, the first rule of using ARIA is to [not use ARIA](https://www.w3.org/TR/using-aria/#rule1):

* Don't use aria-label for roles where it isn't allowed!
* Avoid aria-label where regular HTML can be used instead!
* Avoid aria-label for text that is valuable to everyone!
