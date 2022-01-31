# auroratide.com

Welcome to the source code of my website, **[auroratide.com](https://auroratide.com)**! I love the potential for people to learn from open-source projects. Feel free to learn how things work around here or even offer suggestions of improvement.

Some of the things I strive for in a good frontend codebase include:

* **Simplicity** (me 10 years from now might want to edit something)
* **Accessibility** (the resultant website should work for almost everyone)
* **Testability** (tests improve confidence and longevity)

## Tech Stack

auroratide.com is built with [Svelte](https://svelte.dev/), [Typescript](https://www.typescriptlang.org/), [Jest](https://jestjs.io/) with [Testing Library](https://testing-library.com/), and [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components).

### Svelte

Svelte is responsible for rendering the website's HTML and providing most of the interactivity. I chose Svelte for two primary reasons:

* I knew React and wanted to try one of the other competing frontend paradigms, and Svelte's style felt natural to me (and a little like how I wished web components worked)
* Svelte's runtime was smaller as well, meaning less code sent to the client and hence faster loading times

### Typescript

Typescript provides static typing to Javascript, which is otherwise a dynamically typed language. Static types offer a number of developer experience benefits, such as:

* Catching potential errors at compile-time instead of run-time
* Explicitly documenting inputs, outputs, and data types, and enforcing use of those types
* Creating discoverable APIs, improving intellisense in code editors
* And those things combined make it easier to maintain the codebase in the long term, where I'm apt to forget what chunks of code do

### Jest

Jest is a testing framework with in-built support for testing frontend components. Testing Library provides some useful abstractions, meaning overall less boilerplate code in the tests.

Testing code in general is important, as improves the longevity of the code and increases confidence in changes that are made. In a world without automated tests, a change to the code could accidentally break something and you would never know until encountered in production. With (well-written) tests, there's at least a good chance of catching such bugs beforehand!

I've written on testing components in [The What, How, and Why of Nicely Testing React Components](https://auroratide.com/posts/nicely-testing-react-components). Yeah I know it says React, but the core principles apply universally.

A good example is [DarkModeSwitch.spec.ts](/test/lib/design/DarkModeSwitch.spec.ts).

### Web Components

I like web components since they are a browser-native way of encapsulating styles and behaviour and hence do not rely on the maintenance of any framework. My website makes use of web components primarily for adding interactivity or invented semantics to posts.

Since posts are written in markdown, and HTML is valid markdown syntax, _and_ web components are valid HTML, web components are perfect for this. For example, to declare that some text is essentially the thesis of the post, I use my custom-made `major-point` component:

```html
<major-point>
    <p>This is very important to read!</p>
</major-point>
```

Web components can be found in [/src/components](/src/components). There's a mix of Svelte-style components and vanilla web components in there; I started moving toward vanilla components because I kept running into weird limitations trying to force Svelte to compile web components.

### Static Site Generation

All of the content is written in markdown. However, browsers cannot render markdown; they render HTML. Therefore, a process must exist to convert markdown into HTML.

SvelteKit is used to statically generate each page, while a small custom engine converts markdown into HTML. The code in [/content/_build](/content/_build) is responsible for doing this, basically just looking for content files and parsing them with [Marked](https://www.npmjs.com/package/marked).

## Commands

| Action           | Command               |
| ---------------- | --------------------- |
| Build Project    | `npm run build`       |
| Clean Output     | `npm run clean`       |
| Start Server     | `npm start`           |
| Run All Tests    | `npm test`            |
| Developer Start  | `npm run dev`         |
| Create Post      | `npm run posts:create -- slug-path` |
| Create Component | `npm run components:create -- NameOfComponent` |

## Accessibility

The Internet is for all people, not just some people. As such, it is both my aspiration and my duty to make this website and all my products as accessible to to everyone as possible, regardless of ability.

To that end, I devote time to studying and applying good accessibility practices. Some of the things I do include:

* Reading established guidelines and standards, and evaluating my content against them
* Testing every widget and article in a variety of conditions (for example, using a screen reader or foregoing a mouse)
* Ensuring good color contrast
* Providing at least two ways of accessing content (what I call the principle of engaging two senses)
* Only utilizing third-party components which themselves consider accessibility
