---
id: textarea-markdown-component
title: Textarea Markdown Component
category: Accessibility
tags:
  - web components
  - textarea
  - markdown
  - toolbar
  - aria
icon: file-code
color: blue
summary: I created a new web component that provides a toolbar for formatting text in a textarea.
longSummary: I created a new web component that provides a toolbar for formatting text in a textarea. I did it for a site I am building, and am sharing it because why not. As usual, I build with accessibility in mind.
publishedAt: 2026-08-03T12:00:00.000Z
createdAt: 2026-08-03T12:00:00.000Z
links:
  - title: "Component"
    href: "https://components.auroratide.com/textarea-markdown"
    icon: code
---

I was very busy last week so I did not get as much time to experiment anything AI-related.

I've been tackling some feature requests for a site I maintain instead, and one of the things people wanted was the ability to format description fields, with bold text and whatnot. Makes a lot of sense, dunno why I didn't support that from the beginning!

And, because I'm obsessed with accessibility, learning, and sharing things I make, I created a shareable **web component** anyone can download and use!

<major-point>
	<a class="button" href="https://components.auroratide.com/textarea-markdown">&lt;textarea-markdown&gt;</a>
</major-point>

<label></label>
<textarea-markdown placeholder="Type some text here, and use the formatting buttons!" rows="6"></textarea-markdown>

> [!NOTE]
> To be honest, the functionality is extremely basic at the moment. Perhaps I will enhance it as needed.

## What is a web component?

Websites are created using **elements**. For example, `<strong>hello!<strong>` makes "**hello!**" bold.

HTML, the programming language used to structure websites, has many dozens of elements by default. However, it doesn't have an element for _every possible purpose_, just the most common ones.

A <dfn>web component</dfn> is a custom HTML element. Developers like me can author web components to enhance HTML with behaviours it does not come with by default. For example, the concept of arched text is not very common, so HTML doesn't have an element that archs text. But I'm able to make one myself!

<major-point>
  <arched-text amount="0.25">Hello there!</arched-text>
</major-point>

```html
<arched-text amount="0.25">Hello there!</arched-text>
```

Why make and use web components?

- They are _universal_. Websites can be build with React, Svelte, Vue, and a thousand <small>(perhaps literally)</small> other ways. Web components, however, will work in [every single framework](https://custom-elements-everywhere.com/).
- They are [fast and small](https://webcomponents.dev/blog/all-the-ways-to-make-a-web-component/) compared to the same functionality in other frameworks, since they have effectively zero library overhead.
- They facilitate [progressive enhancement](https://www.kryogenix.org/code/browser/everyonehasjs.html). It's extremely hard to create the same exact experience on the web because there are too many device/browser/version combinations to think about. Progressive enhancement promises _basic_ functionality for everyone, and optimal functionality for most.


## An Accessibility Lesson

While making the [textarea-markdown](https://components.auroratide.com/textarea-markdown) component, I found myself having to implement a toolbar. The toolbar held all the formatting buttons, such as for making text bold or italic.

Sounds like just a bunch of buttons that people could click when needed, perhaps. But let's think about the user experience for someone who doesn't have a mouse.

If a toolbar has 10+ buttons, and all they have is a keyboard, then they have to use <kbd>Tab</kbd> and <kbd>Shift</kbd>+<kbd>Tab</kbd> a ton in order to go back and forth between the buttons they want and the text field they are editing. How inconvenient!

### Follow Patterns

The [Web Accessibility Initiative](https://www.w3.org/WAI/) provides guidelines on a number of common web patterns that don't necessarily have associated HTML elements. This includes, you guessed it, [toolbars](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/)!

And the guidelines for toolbars are relatively simple, but they make the experience for keyboard-only users so much better.

- A toolbar has one focusable thing in it at a time.
- Use the Left and Right arrow keys to switch between which item in the toolbar has focus.
- If the user Tabs, then they tab out of the entire toolbar.

Now, in a toolbar of 10+ items, going in and out of the toolbar requires only a _single_ <kbd>Tab</kbd> or <kbd>Shift</kbd>+<kbd>Tab</kbd>. The arrow keys help choose which tool.

### Know the ARIA Roles

How did I know to use the toolbar pattern?

Essentially, through recognition, having read prior the list of [ARIA Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles). These are roles that may or may not have HTML elements associated with them, and where they do not, the developer can use the roles to enrich the document with meaning that browsers, assistive technology, and AI can understand.

> [!TIP]
> I maintain the position that you want to call yourself an _engineer_, you **must** read. If you're a web developer, reading the [HTML Standard](https://html.spec.whatwg.org/multipage/) is a _requirement_ for the job. Get familiar with the Standard, the [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) for accessibility, the [OWASP Top 10](https://owasp.org/Top10/2025/) for security, etc.

As such, I recommend going through the list yourself! Even if all you read is the top paragraph of every role, that will greatly enhance your overall awareness when building various widgets for the web.
