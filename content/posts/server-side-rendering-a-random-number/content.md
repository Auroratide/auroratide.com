Have you ever tried rendering a random number with [Svelte](https://svelte.dev/) before? Here's a rather quick implementation:

```html
<script>
	const n = Math.random()
</script>

<p>{n}</p>
```

Seems like nothing can go wrong, right? It even works if you plug it into the [REPL](https://svelte.dev/repl/b7a6b10307254f83afc900661b980974?version=3.46.3). But as soon you plug it into [SvelteKit](https://kit.svelte.dev/), Svelte's website framework, oh dear what's happening?

<article-image nopopout src="/assets/posts/server-side-rendering-a-random-number/refresh.webp" alt="When 'Reload' is clicked, two random numbers flash on the screen instead of one." size="lg" width="470" height="233">
    <span slot="caption">When the page is refreshed, a number shows briefly before being replaced</span>
</article-image>

The footage here is slowed down, but for some reason _two_ random numbers get shown when the page loads, the second one rapidly replacing the first 😥. What's going on, and how do we fix this?

<side-text>
    <details>
        <summary>A similar issue occurs when using <a href="https://nextjs.org/">NextJS</a>.</summary>
        <p>You won't get two flashing numbers. Instead, the console displays a nasty red error stating, "Warning: Text content did not match." This is definitely better since the site visitor won't see that, but it's still an issue, and it can lead to further problems if not addressed.</p>
    </details>
</side-text>

* [I want to understand the problem.](#where-do-the-numbers-come-from)
* [Take me to the solution!](#ensuring-the-same-random-numbers)

## Where do the numbers come from?

Essentially, the random number is being generated twice: once on the **server**, and once on the **client** computer. This is because some frontend frameworks, SvelteKit included, practice something called <dfn>server-side rendering</dfn> (<abbr>SSR</abbr>):

1. The server runs the framework's Javascript code to generate nice juicy <abbr title="Hypertext Markup Language">HTML</abbr>, and the result is sent to the browser to render.
2. The browser renders the result, and begins downloading the Javascript code.
3. Once downloaded, the framework **hydrates** the existing HTML with the Javascript, making the page interactive.

<article-image src="/assets/posts/server-side-rendering-a-random-number/ssr-flow.png" alt="Step 1: JS on server becomes HTML; Step 2: HTML goes to client; Step 3: JS hydrates on client" size="xl" width="900" height="642">
  <span slot="caption">Flow diagram illustrating server-side rendering</span>
</article-image>

### Hydration

The hydration step is key to understanding the problem with randomness.

Imagine for a moment that you just purchased a new flashlight. Dang, it sure is nice that you don't have to build one yourself! Unfortunately, the flashlight does not come with batteries, so you have to install those before you can light up your day. To help you out, the shipment provides instructions on where the batteries should go:

<article-image src="/assets/posts/server-side-rendering-a-random-number/flashlight-analogy.png" alt="A flashlight on the left contrasted with a different kind of flashlight on the right, the right demonstrating where the battery goes" size="lg" width="1000" height="554">
  <span slot="caption">What you got does not match the provided instructions</span>
</article-image>

What gives?! The instructions don't match the flashlight, so where am I supposed to put the batteries? How do I **hydrate** my flashlight?

<small style="display: block; text-align: center;"><code>&lt;/analogy&gt;</code></small>

When HTML is rendered server-side, it is not yet interactive; it only becomes interactive once Javascript has been applied. The process of applying interaction to server-rendered content is called <dfn>hydration</dfn>, and it relies on one key assumption:

<major-point>

The results of rendering on the server and the client should match.

</major-point>

In our flashlight analogy, when the instructions don't match the product, we get confused. Similarly, if client-side Svelte expects there to be a button on which to attach an event, and the server failed to render that button, then Svelte has to make a decision.

In the case of our random number, Svelte decides to replace whatever's there with what it _thinks_ should be there. Since hydration takes time to do, we get a flash of two numbers.

<article-image src="/assets/posts/server-side-rendering-a-random-number/ssr-example.png" alt="Step 1: JS on server converts a random number 2 into HTML; Step 2: HTML goes to client; Step 3: JS on client replaces HTML with a newly random number 7" size="xl" width="900" height="652">
  <span slot="caption">How the random number scenario results from SSR</span>
</article-image>

## Ensuring the same random numbers

If the problem is that the server and client are generating different numbers, then we need a way for them to generate the same numbers instead. In other words:

<major-point>

The server must send enough info for the client to generate the same numbers.

</major-point>

In particular, we can take advantage of the fact that random number generators are not actually random. In fact, they are _pseudo_-random, relying on well-defined algorithms to generate a pattern that is so chaotic that it's generally good enough.

Many such pseudo-random number generators take a **seed** as an input and use that seed to deterministically create an entire sequence of numbers. The key insight is that using the same seed always results in the same sequence of numbers.

<side-text>

Imagine if by saying a word out loud like "apple", you could cause your dice to always roll the numbers 4, 6, 3, 1, 6... in that order, every time. Seeding a random number generator is like that, and each seed produces a different sequence of numbers.

</side-text>

So step by step:

1. The server generates a single **random seed** and uses that to generate HTML
2. That seed is sent to the client along with the HTML
3. The client initializes its own random number generator with the seed, ensuring the exact same sequence of random numbers are generated
4. 💰💰💰

Step 2 differs in implementation from framework to framework, but let's see an example in SvelteKit (since that's what I was using when I ran into this issue).

### A SvelteKit Example

In order to send the seed to the client consistently, we can rely on one of the properties of SvelteKit's [special `fetch` function](https://kit.svelte.dev/docs#loading-input-fetch):

> It makes a copy of the response when you use it, and then <mark>sends it embedded</mark> in the initial page load for hydration

In other words, when Svelte makes a `fetch` on the server, rather than forcing the client to do the same `fetch`, it caches the result and sends it to the client, saving a lot of time.

Which means, if we have an endpoint that generates a random seed, we can guarantee the client sees the same seed!

<side-text success>

Even though this example is for SvelteKit, a similar context-based strategy can be used with React's NextJS, except it's perhaps easier since an endpoint does not need to be set up.

</side-text>

#### 1. Endpoint for a random seed

```js
// random-seeds.js
export const get = async () => ({
  body: {
    // use your favorite algorithm for this
    seed: generateRandomString(),
  },
})
```

#### 2. Get the seed in a layout

We want the seed to be available on all pages, so we can fetch it within the primary [layout](https://kit.svelte.dev/docs#layouts).

```html
<!-- __layout.svelte -->
<script context="module">
  export const load = async ({ fetch }) => {
    // fetch's result will be cached for the client
    const seed = await fetch('/random-seeds')
      .then(res => res.json())
      .then(json => json.seed)
      .catch(() => '') // this shouldn't break the app

    return {
      props: {
          seed,
      },
    }
  }
</script>
```

<side-text warning>

You'll notice a `catch` is used to ensure that any possible failure that might occur doesn't result in a crash. Proper error handling is always important to remember!

</side-text>

#### 3. Create a seedable random number generator

Interestingly, Javascript's native `random()` function cannot be seeded. Therefore, we have to find or roll out our own random number generator which _can_ be seeded.

The [seedrandom](https://www.npmjs.com/package/seedrandom) library by David Bau is very good for this, or if you want more control over what's bundled, feel free to choose from this [list of pseudorandom number generators](https://github.com/bryc/code/blob/master/jshash/PRNGs.md).

```js
// lib/random.js
import seedrandom from 'seedrandom'

export const seeded = (seed) => seedrandom(seed)

export const usingMath = () => Math.random
```

#### 4. Create a context for the generator to live in

We want the random number generator to be available everywhere in the app that it's needed without having to send it several layers deep via props. Svelte's [context api](https://svelte.dev/tutorial/context-api) is very useful here, since the `__layout.svelte` is the root of every page.

```js
// also lib/random.js
import { getContext, setContext } from 'svelte'

const key = Symbol()
export const generator = () => (getContext(key) ?? usingMath())()
export const setGenerator = (generator) => setContext(key, generator)
```

#### 5. Initialize the generator in layout

We can now initialize the generator in the layout where we had previously fetched the seed to use.

```html
<!-- __layout.svelte -->
<script>
  import { setGenerator, seeded, usingMath } from '$lib/random'

  export let seed = ''

  setGenerator(seed.length > 0 ? seeded(seed) : usingMath())
</script>

<slot></slot>
```

#### 6. Invoke the generator to get a consistent number!

And _finally_, we can use all this infrastructure to get a random number that is the same on both the server and client!

```html
<!-- index.svelte -->
<script>
  import { nextRandom } from '$lib/random'

  const n = nextRandom()
</script>

<p>{n}</p>
```

### Some Considerations

The approach I took above was perfect for my use case in which the random numbers were used solely for aesthetics. If, however, you need random numbers for something security-related, definitely double check whether this approach fits within your constraints!

Additionally, the solution presented here works iff the server and client generate content _in the same order_. You could imagine that if the client built the page backward, the same sequence of random numbers would be generated but they'd be applied to different pieces of the page. I'm not sure why this would happen, but if this is a significant factor for you, then it requires a more nuanced approach.

### Github Repo

As usual, here's a repo to explore the raw solution. Hopefully it is helpful!

<major-point>

<a href="https://github.com/Auroratide/sveltekit-ssr-with-randomness" class="as-button" style="--btn-color: var(--palette-github);">SvelteKit SSR Repo <vector-icon icon="github-alt"></vector-icon></a>

</major-point>

## Key Takeaways

* If you are using a framework with server-side rendering, thoroughly examine and test places where it is possible for the server and client results to differ, such as with random numbers or login state.
* Where consistency is desired, the server must send enough info for the client to replicate the results exactly.

And a bonus tip:

* When you get stuck, ask for help! I was scratching my head for a while before asking the folks at [Stack Overflow](https://stackoverflow.com/questions/70714461/sveltekit-rendering-a-random-prop-is-different-between-server-and-client/70776238), and as a result I learned something new about how SvelteKit works.
