




Maybe... Accessible Names for Web Components?
Create New Semantics with Web Components


Accessible Names for Web Components (featuring: Star Ratings)

<star-rating value="3" max="5">3 out of 5 stars</star-rating>

- Internally, this becomes role="img" aria-label="3 out of 5 stars".

<star-rating value="3" max="5"></star-rating>

- a default label is created.

Think: are you implementing a role that does not have a native HTML element?


GOALS
- Custom Elements create new semantics - that's the entire point
- You are responsible for establishing its accessible role and name
- There's no "right answer"


***
Accessible Name
http://simplyaccessible.com/article/accessible-name/
https://w3c.github.io/aria/#dfn-accessible-name

Naming is prohibited on some things, including custom elements.
https://w3c.github.io/html-aria/#docconformance


***
What is the difference between the generic role, the presentation role, and the none role?
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/roles/generic_role
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/presentation_role

Presentation removes implicit semantics. The content is still in the accessibility tree.
https://www.w3.org/TR/wai-aria-1.2/#generic

Looks like div is generic. Anonymous Custom Elements are also generic by default.


***
How do you assign a role to a custom element?
https://w3c.github.io/html-aria/#el-autonomous-custom-element
Something ElementInternals. (https://caniuse.com/mdn-api_elementinternals) - SAFARI PLEASE.
https://css-tricks.com/creating-custom-form-controls-with-elementinternals/


***
By the way, how is shadow dom interpretted?
https://marcysutton.com/accessibility-and-the-shadow-dom

Essentially what I understand is the accessibility works off what is eventually rendered I suppose. 

What if you try and reference an id in a shadow tree?
It shouldn't work.


***
MDN considers star rating to have the img role, which may help with a star-rating component.
https://codepen.io/svinkle/pen/oYjoNE


***
There's also something about the Accessibility Object Model that will need to be addressed.
https://www.erikkroes.nl/blog/accessibility/the-guide-to-accessible-web-components-draft/
https://github.com/WICG/aom
https://wicg.github.io/aom/explainer.html

Where is role?


Some notes on using custom elements without JS: https://blog.jim-nielsen.com/2021/custom-elements-without-js/

There's a good example here of creating a list. If you have <my-list>, then you automatically lose the inherent list semantics of <ul> unless you provide role="list".

My understanding of the spec is that the shadow dom does not constitute an element's children. Therefore:

<div><img /></div>

is not the same as:

<div>
  #shadowroot <img />
</div>


-------------------------

Let's think about the purpose of HTML.
 HTML gives you elements
., and most of them are supposed to be semantic
They represent something
, so doesn't it stand to reason that 
custom elements are meant to do the same? We can look at hte definitions of semantics and of custom elements for this.

> Elements, attributes, and attribute values in HTML are defined (by this specification) to have certain meanings (semantics). For example, the ol element represents an ordered list, and the lang attribute represents the language of the content.

Instead of star rating, what about the flag icon provided by the spec? Can we enhance it to have good semantics?

"Creating semantics" has sort of two meanings:

* The element _represents something_ that is distinct from something provided by native HTML, or perhaps is more specific.
* Then there's "implementing semantics" in terms of what you have, the "extensibility points".


----------------------

Use Semantic HTML, Write Semantic Custom Elements

A possible start? Code off the bat? No, I really do want to summarize what I'm going to say immediately don't I? We could

Why are semantics important?
What are the default semantics for a web component? (assume only anonymous, maybe a small note for built-in)
What does it mean to imbue a custom element with semantics?
- Defining what it _represents_ holistically - to help determine how to approach the second way:
- Implementing the semantics using the browser's "extensibility points" (defining role and aria attributes, defining a content model that takes advantage of a custom element's transparent nature, progressive enhancement - no js, or as we wait for upgrade)

In the process, we make the component accessible.

There is no one right way or single formula for doing this. Web components are meant to service an extremely wide net of needs, and so the onus is on us as developers to imbue a custom element with semantic meaning and make it accessible to everyone.

The article needs to be short.

------------------

<abbr title="Hypertext Markup Language">HTML</abbr> is used to build websites by providing developers with many different building blocks, called <dfn>elements</dfn>, to play with. For example, put some words in a `<p>` element and you get a paragraph, or put them in a `<blockquote>` element to quote an external resource.

There are over a hundred different elements each with their own <dfn>semantics</dfn>, or distinct purpose. But sometimes, as a developer you find yourself wanting more, wanting something that just doesn't exist _by default_. For that, HTML allows developers to create their own **custom elements**.

Rather than talk about _how_ to make a custom element, I want to talk about _why_. Questioning the "why" can help create better, more accessible custom elements.

**Custom elements create new semantics, and imbuing a custom element with purpose drives accessibile development.**

<side-text>

??

</side-text>

## What is a Custom Element?



So I know I just said I don't want to talk about the "how", but a little bit of "how"


Role, using the transparency


-----------------


<abbr title="Hypertext Markup Language">HTML</abbr> elements are imbued with purpose. A `<p>` represents a paragraph. A `<img>` represents an image. Composing these elements on a web page gives the page structure that can be interpretted by both humans and machines. The "purpose" of an element is often referred to as its <dfn>semantics</dfn>.

HTML is finite. It cannot provide you an element for _every possible purpose_. However, developers can _extend_ the markup by creating **custom elements**. Need a `<blog-comment>`? You can make it! Or how about a `<flag-icon>`? You can make that too! Sooo... what's the catch?

**By default, custom elements do not have semantic purpose.** Maybe we humans can see `<flag-icon>` and reasonably know it's supposed to represent a small flag, but machines aren't as smart as us (yet).

With some familiarity of HTML, you might get the sense that the following code is a comment on a blog written by Marisa from Australia:

```html
<blog-comment>
    <p slot="author">Marisa K. <flag-icon country="au"></flag-icon></p>
    <p slot="content">I like web components!</p>
</blog-comment>
```

"imbue them with semantic value"

"semantics are used by tools for XYZ"

The thing is, HTML also lets developers create **custom elements**

## The Importance of Semantics

## Giving Purpose to Custom Elements

## Example: A flag-icon Element

"organized in a particular structure" "we can understand without even knowing everything about HTML code".

Semantics
https://html.spec.whatwg.org/#semantics-2
https://developer.mozilla.org/en-US/docs/Glossary/semantics
https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML

Built-in no apple wai
https://bugs.webkit.org/show_bug.cgi?id=182671
https://github.com/WICG/webcomponents/issues/509#issuecomment-230700060

Web components
https://dev.to/erikkroes/the-guide-to-accessible-web-components-1mkd

