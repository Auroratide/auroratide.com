# auroratide.com

Welcome to the source code of my website, **[auroratide.com](https://auroratide.com)**! I love the potential for people to learn from open-source projects. Feel free to learn how things work around here or even offer suggestions of improvement.

Some of the things I strive for in a good frontend codebase include:

* **Simplicity** (don't bring in big frameworks unless they actually make things simpler)
* **Accessibility** (the resultant website should work for almost everyone)
* **Testability** (tests improve confidence and longevity)

## Tech Stack

auroratide.com is built with [Svelte](https://svelte.dev/), [Typescript](https://www.typescriptlang.org/), and [Jest](https://jestjs.io/) with [Testing Library](https://testing-library.com/), and [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components), along with a custom static content generator.

### Svelte

Svelte is responsible for rendering the website's HTML and providing most of the interactivity. I chose Svelte for two primary reasons:

* I enjoyed the developer experience more than with React, as the svelte file format just felt very natural and much like how I wanted web components to work
* Svelte's runtime is much smaller than React's, meaning less code sent to the client and hence faster loading times

Most Svelte code can be found in [/src/client](/src/client).

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

In this codebase, tests live with the component they test. A good example is [DarkModeSwitch.spec.ts](/src/client/DarkModeSwitch/DarkModeSwitch.spec.ts).

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

The code in [/src/content](/src/content) is responsible for doing this. It's basically just a few lines of typescript that look for markdown files and parse them with [Marked](https://www.npmjs.com/package/marked).

Nowadays I might have just elected to use [11ty](https://www.11ty.dev/), but what I made works without issue, so I have no need to change or migrate it.

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
