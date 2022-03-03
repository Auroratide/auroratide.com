Welcome to Stackazon, your one-stop shop for great solutions to tricky coding problems! Your search query, "**How do I style a label when its input is focused?**", has returned five results.

Our ratings for this query consider browser compatibility, accessibility, and complexity. Be sure to read our reviewers' opinions for additional resources and justification for the rating.

The best part about Stackazon? Everything is free, and delivery is instant! No prime subscription needed either!

<side-text warning>

**Disclaimer:** The people, ratings, and reviews are fictional and based on my opinion and knowledge of key factors. What solution is best always depends on context and your use case!

This is mostly my wacky way of demonstrating how to evaluate important factors when coding for the web 😊

</side-text>

* [The Problem](#the-problem)
* [Solutions](#solutions)
  * [Using Adjacent Siblings](#using-adjacent-siblings) (<moon-rating rating="3.5"></moon-rating>)
  * [Using Javascript](#using-javascript) (<moon-rating rating="3.25"></moon-rating>)
  * [Using Explicit :focus-within](#using-explicit-focus-within) (<moon-rating rating="4.25"></moon-rating>)
  * [Using Implicit :focus-within](#using-implicit-focus-within) (<moon-rating rating="4"></moon-rating>)
  * [Using :has](#using-has) (<moon-rating rating="0.75"></moon-rating>)
* [Codepen](#codepen)

<side-text>
    <details>
        <summary>Why do you use moons instead of stars?</summary>
        <p>Here at Stackazon, we rate using moons instead of stars because emoji sets support different moon phases, which can indicate fractional rating! Thank you, Moon, for having such convenient phases ❤️</p>
    </details>
</side-text>

## The Problem

Most of the time, an [HTML input element should be properly labeled](https://css-tricks.com/html-inputs-and-labels-a-love-story/).

```html
<label for="name">Name</label>
<input id="name" type="text" />
```

But let's say you want to highlight the "Name" label if someone is typing stuff into its text field. As web developers, we can use <abbr title="Cascading Style Sheets">CSS</abbr> to customize how the input looks when focused:

```css
input:focus {
    border-color: red;
}
```

But... how do you do the same for the label? Turns out it's tricky!

## Solutions

For each solution, we provide a rating and some reviews. Our Stackazon reviewers consider a variety of factors when analyzing solutions, including complexity, accessibility, compatibility, performance, and so on. They reference the following resources (and we recommend that you do too when evaluating possible solutions!):

* [Can I Use](https://caniuse.com/) - Tracks the browser compatibility of various web features
* [Accessibility Support](https://a11ysupport.io/) - Tracks to what degree assistive technologies implement accessibility specifications
* [Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG21/) - Essentially a specification for maximizing web accessibility
* [MDN Web Docs](https://developer.mozilla.org/en-US/) - Curated documentation of web features including best practices (and recently got an upgrade!)

### Using Adjacent Siblings

**Rating:** <moon-rating rating="3.5"></moon-rating>

CSS provides an [adjacent sibling combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator) which lets you match an element that is _directly after_ another element.

If you structure your HTML such that the label is _directly after_ the input:

```html
<div class="input-container">
    <input id="name" type="text" />
    <label for="name">Name</label>
</div>
```

Then you can style the label with the adjacent sibling combinator:

```css
input:focus + label {
    color: red;
}
```

However, for a text field, conventionally the label is supposed to come _before_ the input.

<article-image nopopout src="/assets/posts/coloring-an-input-label/input-then-label.png" alt="A text input field is followed by a label, 'First Name'.">
  <span slot="caption">When the label comes after the text input field, it looks strange.</span>
</article-image>

Unfortunately, the fancy adjacent sibling plus sign only works top-to-bottom! If you try to use `label + input:focus`, then the styles will only apply to the input directly and _not_ the label. If the label comes first in the markup, then you can't use this combinator to select the label when the input is focused.

That said, CSS to the rescue again! CSS can visually reorder elements on the page:

```css
.input-container {
    display: flex;
}

input { order: 2; }
label { order: 1; }
```

#### Reviews

Our reviewers gave this solution 3.5 out of 5 moons, citing excellent browser compatibility but with some accessibility concerns.

**Ivan Eaton** says:

> Of the solutions presented, this has the best browser compatibility, as the adjacent sibling combinator has been implemented in all major browsers, included Internet Explorer, for many years.
> 
> Flexbox, though newer, is also widely supported.
>
> See: [W3C Selectors Level 4](https://drafts.csswg.org/selectors/#adjacent-sibling-combinators)

**Serena Redmon** says:

> I am concerned about how **[screen readers](https://webaim.org/techniques/screenreader/)** announce the text field and its label. Visually, it looks like the label comes first since we used the `order` property, but the screen reader announces the input first instead since it is first in the HTML code.
> 
> The Web Content Accessibility Guidelines (<abbr>WCAG</abbr>) stipulate that <q>order of content in the source code [should be] the same as the visual presentation of the content</q> in order to minimize confusion when using accessibility tools. Therefore, I've rated this solution lower as the adjacency combinator requires the elements be in unconventional order.
> 
> See: [WCAG on Making the DOM order match the visual order](https://www.w3.org/TR/WCAG20-TECHS/C27.html)

### Using Javascript

**Rating:** <moon-rating rating="3.25"></moon-rating>

When an input is focused or unfocused, it emits an **event** which we can listen to with Javascript. Additionally, the element has a reference to all of its labels via the [labels property](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/labels). Therefore, we can leverage Javascript with the following strategy:

1. When the input receives focus, add a `focused` class to its label.
2. When the input loses focus (called [blurring](https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event)), remove the `focused` class.

```javascript
document.querySelectorAll('input').forEach(input => {
  input.addEventListener('focus', () => {
    input.labels.forEach(label => {
      label.classList.add('focused')
    })
  })

  input.addEventListener('blur', () => {
    input.labels.forEach(label => {
      label.classList.remove('focused')
    })
  })
})
```

And now with CSS, you just need to apply styles to the `focused` class!

```css
.focused {
    color: red;
}
```

#### Reviews

Our reviewers gave this solution 3.25 out of 5 moons, citing some browser compatibility issues and complexity as a result of using Javascript.

**Ivan Eaton** says:

> The strategy of leveraging Javascript bypasses all the potential problems with browser compatibility for CSS features, but exchanges that for problems in Javascript feature support.
> 
> More specifically, the `labels` property with this solution uses is not supported in IE 11 and can result in errors if not handled. To maximize compatibility while still using this general approach, I recommend reading [how to find an input's associated label](https://stackoverflow.com/questions/285522/find-html-label-associated-with-a-given-input).
> 
> See: [Can I Use HTMLInputElement labels](https://caniuse.com/mdn-api_htmlinputelement_labels)

**Jose Scott** says:

> Introducing Javascript when there are decent CSS-only solutions can feel like overkill. The Javascript here introduces the need to properly manage when and how listeners are added to inputs, which requires some care for sufficiently dynamic pages and forms.
> 
> That said, this solution may be preferred if an input has many labels or the input and its label are far apart in the HTML hierarchy such that it is difficult to use CSS selectors to style them.

### Using Explicit :focus-within

**Rating:** <moon-rating rating="4.25"></moon-rating>

CSS offers a relatively new pseudo-class called `:focus-within` which matches an element if it _or any of its descendants_ have focus. Therefore, as long as the label and its input share a common parent element in HTML, we can use this to style the label:

```html
<div class="input-container">
    <label for="name-field">Name</label>
    <input id="name-field" type="text" />
</div>
```

```css
.input-container:focus-within label {
    color: red;
}
```

This works since the focused input is _within_ the `input-container` div. The selector is essentially saying, "find an input container with focus somewhere inside of it, then find all its child labels."

<side-text success>

Of note, we are using the label's `for` attribute to associate it to an input. If the input has an `id` defined, setting `for` to equal that id creates the relationship. Notice that in the HTML code above, both `for` and `id` are "name-field". This is often called an <dfn>explicit label</dfn>.

For more on explicit labels and their counterpart, implicit labels, read **[Labeling Controls](https://www.w3.org/WAI/tutorials/forms/labels/)**.

</side-text>

#### Reviews

Our reviewers gave this solution 4.25 out of 5 moons, citing lack of support in old browsers but having the best accessibility of solutions present.

**Ivan Eaton** says:

> Although a simple solution, `:focus-within` is not supported in IE 11. In a world that is moving away from that old browser, this solution becomes better and better, but unfortunately I cannot recommend it to everyone.
> 
> See: [Can I use :focus-within](https://caniuse.com/css-focus-within)

**Serena Redmon** says:

> Of solutions presented, this supports accessibility tools the best: it properly assigns a label to an input and keeps code-order and visual-order the same, both being WCAG requirements.

### Using Implicit :focus-within

**Rating:** <moon-rating rating="4"></moon-rating>

Instead of having a containing div, the label is able to contain its associated input directly.

```html
<label>Name
    <input type="text" />
</label>
```

With this structure, the `:focus-within` pseudo-class, which matches an element if it _or any of its descendants_ have focus, can be applied directly on the label. When the input inside of it has focus, then the label receives the styling we want.

```css
label:focus-within {
    color: red;
}
```

Associating a label and input via hierarchy like this, as opposed to using the input's `id`, creates what's called an <dfn>implicit label</dfn>, in contrast to explicit labels in the other solutions.

#### Reviews

Our reviewers gave this solution 4 out of 5 moons, citing minor accessibility issues and lack of support in old browsers.

**Serena Redmon** says:

> Implicit labels are best used when the id of the input is not known and hence an explicit label cannot be created. This is because, generally, <q cite="https://www.w3.org/WAI/tutorials/forms/labels/">explicit labels are better supported by assistive technology</q> (Ref: [Labeling Controls](https://www.w3.org/WAI/tutorials/forms/labels/)). That said, support has gotten better with time.
> 
> For example, as of today, most screen readers now support implicit labels as well as explicit labels. However, **[voice control](https://webaim.org/articles/motor/assistive#voicerecognition)** software, which can be used by people with movement disabilities preventing them from using a keyboard or mouse, does not always adequately support implicit labels.
> 
> See: [Accessibility Support for labels](https://a11ysupport.io/tech/html/label_element)

**Ivan Eaton** says:

> Although a simple solution, `:focus-within` is not supported in IE 11. In a world that is moving away from that old browser, this solution becomes better and better, but unfortunately I cannot recommend it to everyone.
> 
> See: [Can I use :focus-within](https://caniuse.com/css-focus-within)

### Using :has

**Rating:** <moon-rating rating="0.75"></moon-rating>

A notorious fact about CSS is there is no way to style an element based on elements after it in HTML. So for example, you can't style a quote that contains a link differently than a quote that doesn't, and more relevantly you can't style a label whose input directly after it is focused.

At least, that's true for now: Introducing the [:has() pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)!

This pseudo-class matches the element if the selector provided as a parameter also matches. The inner selector is relative to the element with the `:has` on it.

```css
label:has(+ input:focus) {
    color: red;
}
```

This says "select labels _that have_ an adjacent sibling which is a focused input". Unlike the [Using Adjacent Siblings](#using-adjacent-siblings) solution, this does not style the input. This styles the label, exactly what we want.

What's neat about this solution is that the label gets to come before its input _and_ it doesn't require a containing div.

```html
<label for="name">Name</label>
<input id="name" type="text" />
```

#### Reviews

Our reviewers gave this solution 0.75 out of 5 moons, citing its experimental status as rendering it unusable for now.

**Ivan Eaton** says:

> Currently, nothing except the newest version of Safari supports this selector, making it impossible to use. Thankfully, Chrome has a [proposal](https://chromestatus.com/feature/5794378545102848) out, so maybe someday in the future we'll see this added more universally!
> 
> See: [Can I Use :has](https://caniuse.com/css-has)

## Codepen

<iframe height="550" scrolling="no" title="Codepen: Styling a Focused Label" src="https://codepen.io/auroratide/embed/LYOMNov?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/auroratide/pen/LYOMNov">
  Styling a Focused Label</a> by Timothy Foster (<a href="https://codepen.io/auroratide">@auroratide</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>