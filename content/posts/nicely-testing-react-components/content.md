So I guess [hooks](*https://reactjs.org/docs/hooks-intro.html) are the new hip thing in the React ecosphere. And I gotta admit, they're pretty terse and rather nifty, so nifty in fact that I decided to try my hand at refactoring my entire website into using hooks and React's context api rather than MobX. Y'know, for practice and stuff.

Now, I _could_ talk about all the things I had to change (...it was a lot), but first I want to talk about the things I _didn't_ change. Somewhat to my surprise, as I was performing state management surgery, I barely needed to change the tests. And yet, the tests were properly failing when the components were broken and passing when they was working.

I almost cried, because it made the refactoring _so much easier_.

No time was wasted debugging the tests, and I got to spend more effort doing the part that mattered, evolving from MobX to hooks. But even better, the tests gave me legitimate _confidence_ that I had done the job right once they were all passing, without ever turning on my browser.

Upon reflection, I wanted to share what I learnt as a result of my refactoring experiment in the form of a single, terse statement (a **hook** if you will):

<major-point text="Test what your component does, not how it works.">
</major-point>

Let's take a look at what that means, how to make it work, and why we should follow it as much as we can! Oh yeah, and if you're patient enough, I have an obligatory sample Github repo to share which demonstrates this principle as well. Yay! Code!

<side-text>
<p>Note: This is by no means a new, revolutionary principle. Developers everywhere, React and beyond, have been echoing these words for years. See Kent C. Dodds's article <a href="https://kentcdodds.com/blog/testing-implementation-details">Testing Implementation Details</a> for an example. However, it can be difficult to know whether we've strayed into testing implementation, which is why I wanted to write about the what, how, and why of nicely testing React components.</p>
</side-text>

## What's the principle?

> Test what your component does, not how it works.

Ok, those are some fancy words, but what do they really _mean_?

To help gain an intuition for what this principle means, let's leave the realm of programming and instead substitute the word "component" with some common nouns...

* Test what your **keyboard** does, not how it works.
* Test what your **coffee machine** does, not how it works.
* Test what your **faucet** does, not how it works.

<article-image src="/assets/posts/nicely-testing-react-components/faucet.png" alt="Faucet" caption="A faucet, photo by Sasikan Ulevik on Unsplash" size="md">
</article-image>

Think for a moment how you would go about testing whether your faucet works and does what is intended. Well, when you turn the knob, water is supposed to come out of the tubey thing. So if it were me, I'd turn the knob, then see if water comes out (and not some other gross fluid).

In other words, you...

* ...see if the object does the thing it's supposed to do...
* ...using only the interface it provided.

Notice what you _don't_ do. You wouldn't take the faucet apart to see if the knobs are hooked to the right mechanism, or dig into the tubey thing to see if the valve is there or not. You'd only take it apart to _debug_ the faucet, in the case that it _isn't_ working as expected. Well, unless you're a mechanical engineer and you take apart _everything_ just to prove me wrong.

Ok, enough analogy, back to programming.

It turns out it's _very useful_ to think of testing components in exactly the same way.

* See if the component does the thing it's supposed to do...
* ...using only the interface provided.

If your component is a button that increments a number, then the interface provided is just that single button, and the thing it's supposed to do is make a number you see go up by one. So you test that, not if the internal state changes or if the button possesses a callback of some kind.

That's what _"test what your component does, not how it works"_ really means.

<side-text success>
<p>One last way of thinking about this principle is to think of how you would _measure_ whether you are meeting it. For me, that litmus test is "my tests should pass even if I replace the way I manage state, without ever editing the tests". If I can do that, then I know my tests are solid.</p>
</side-text>

## How do I do this?

All right, code time.

~~Let's say you want a super simple component that increments a number~~ Just kidding, that example's overused. Let's say you want a completely different component that upon a button press _decrements_ a number instead. By 2, because why not.

<decrementor-widget initialvalue="100" increment="2">
</decrementor-widget>

```jsx
const Decrementor = () => {};
```

Ha ha, tricked you! Instead of an implemented component, we're starting off with a skeleton. That's because we're gonna build this thing using _Test Driven Development_. Oooooh yeah!

Remember our mantra. "Test what your component does, not how it works." To do that, we need to know two things:

1. What is the interface the user can interact with?
2. And what does the user see when they interact with that thing?

Notice the magic word: **user**. We are thinking from the perspective of the _user_ in order to write our test. In a sense, we're thinking of _example usages_. The input is a user interaction, and the output is something the user sees.

To answer our questions...

1. The user can press a button.
2. When they do, a number on the screen goes down by 2.

That's a test right there! To write it in code, let's use [React Testing Library](*https://github.com/testing-library/react-testing-library), though you can achieve the same kind of test with Enzyme as well:

```jsx
import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Decrementor from './Decrementor';

describe('Decrementor', () => {
  let wrapper;
  const clickDecrement = () => fireEvent.click(wrapper.getByText(/decrement/i));
  const getNumber = () => wrapper.getByText(/-?\d+/).textContent;
  
  it('should decrement the number by 2 when the button is pressed', () => {
    wrapper = render(<Decrementor initialValue={10} />);
    expect(getNumber()).toEqual('10');

    clickDecrement();
    expect(getNumber()).toEqual('8');
  });

  afterEach(cleanup);
});
```

Let's pause to notice a few things:

* The test looks like human-readable instructions. First render the component, then click decrement, then see if the number is the expected value.
* The test knows _nothing_ about how the decrement button is implemented or how it is storing state. Will the component use hooks? MobX? A reducer? It doesn't care!
* We select elements using text values _that the user sees_. The user sees the literal text "Decrement", so that's the thing we click on. Alternatively, we could have employed the use of a CSS class selector, but those things are invisible to the end user.

<side-text>
<p>Actually, that's the nice thing about the React Testing Library. Unlike Enzyme, React Testing Library's API _prevents_ you from digging into the implementation details of your components. It's built to be user-centric.</p>
</side-text>

Now that we have a test, we can write a nice little component like so:

<sub-theme success>

```jsx
import React, { useState } from 'react';

const Decrementor = ({ initialValue }) => {
  const [ value, setValue ] = useState(initialValue);
  const decrement = () => setValue(prev => prev - 2);

  return <>
    <p>{value}</p>
    <button onClick={decrement}>Decrement</button>
  </>;
};

export default Decrementor;
```

</sub-theme>

We decided to use hooks because, y'know, they're the new thing and all, but we didn't have to. Nicely, the following implementation using a MobX class also passes despite being _completely different_:

<sub-theme success>

```jsx
import React, { useState } from 'react';
import { decorate, observable, action } from 'mobx';
import { observer } from 'mobx-react-lite';

const Number = decorate(class {
  constructor(initialValue) {
    this.value = initialValue;
  }

  decrementBy(n) {
    this.value -= n;
  }
}, {
  value: observable,
  decrementBy: action
});

const Decrementor = observer(({ initialValue }) => {
  const [ number ] = useState(() => new Number(initialValue));

  return <>
    <p>{number.value}</p>
    <button onClick={() => number.decrementBy(2)}>Decrement</button>
  </>;
});

export default Decrementor;
```

</sub-theme>

Even though the state management paradigm is completely different, the test passes all the same. That's because the test only concerned itself with the _surface_ of the component. In the end, what the component does is what the user really cares about, not how it works.

Pretty neat, right?

We can summarize the key points like so:

* Adopt the paradigm of a **real user** using your component to drive how the test reads.
* Only expose the component's **surface** in the test's actions and assertions. Deliberately ask yourself what knobs a user can manipulate and what the user should visibly see.
* **Refrain from digging** into the component's state and directly manipulating values. Otherwise, there's no guarantee what you're doing is achievable from a user's point of view.

And a bonus tip:

* If the test is hard to write, **pause** and double check your approach!

<side-text warning>
<p>Now admittedly, real components in large-scale applications might be a little more wild than our simple decrementor. In the end, it's up to you how you determine the user's surface to your components.</p>
</side-text>

## Why does this matter?

Tests are very good because they provide us confidence that our code works. However, that's only true if we actually trust our tests. If they pass or break when they shouldn't, then we might stop believing in our tests, and we lose the confidence we wanted to have in the first place.

Similarly, we automate our tests so we don't have to fire up the app manually and verify things with our eyes. The key benefit here is time. The less we need to turn on the app just to verify some small behaviour, the better. A single unit test can run in milliseconds, but a manual check can take up to a minute at best, hundreds of times longer.

In other words, we write automated tests because...

* ...they provide confidence our code works
* ...and save us a lot of time.

Unfortunately, many of us (myself included) have probably experienced times when our tests failed to meet one or both of those value propositions. If tests fail when they shouldn't, then we stop having confidence, and if we have to babysit such broken tests, then we end up wasting the time we hoped to be saving.

UI components are particularly volatile, so it's doubly important that we avoid any pitfalls if we can help it. This means testing _exactly_ the things we care about, because anything extraneous means more code to maintain. And when you really think about it, as product developers the primary thing we care about is that the user can do the thing the product was built for.

Test what the component does, not how it works. By doing so, your tests will be more reliable, less brittle, and closer to reality, thereby providing confidence and saving time.

## An Example: React Tac Toe

As an experiment, I decided to try my hand at implementing the classic Tic Tac Toe game with three different state management paradigms: hook-based, object-based, and reducer-based.

The catch? _The exact same set of tests must pass for each version of the Tic Tac Toe component._

**[Click here to go to the Github repo](*https://github.com/Auroratide/react-tac-toe)**!

<side-text danger>
<p>By the way, I also tried to do this with web components, just to prove that the tests will pass even without React. Unfortunately, I hit a dead end when I realized JSDOM doesn't support custom elements yet. If you're feeling adventurous, feel free to make a pull request proving this can indeed be done!</p>
</side-text>

## Closing Thoughts

In the end, this isn't a new concept, and it's applicable to all aspects of coding beyond frontend React. Sometimes, though, you really acquire an appreciation for something when it hits you in the face, and my site-wide refactoring journey was one such instance.

* Test what the component _does_, not how it _works_
* Write tests from the perspective of the _user_
* Only expose the component's _surface_ in the test

And (hopefully) your tests will be very reliable without being brittle. Let me know your thoughts in the comments below!
