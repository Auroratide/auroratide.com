So you're writing a React app. Great! I dig React because it splits a complex website into many bite-sized pieces. Those pieces can be easy to conceptualize and modify, but more importantly they're easier to test than trying to test the entire website at once.

We test React components because we want to predict what our website will look like. Testing a React component can be a little tricky, though. How much is too much or too little? What if I have multiple components working together? What if I'm using external state management like Mobx?

If you're not careful, your test code can become unintentionally chaotic. Personally, I find that classifying the tests into two types can help clarify all those nasty questions above. I call them **render tests** and **behaviour tests**.

* Render tests are for how a component should _look_
* Behaviour tests are for how a component should _act_

,,,
This post assumes you are familiar with React, Enzyme, and basic testing in Javascript. Enzyme is a framework used to test components, so feel free to read up on [Enzyme basics](*https://medium.com/codeclan/testing-react-with-jest-and-enzyme-20505fec4675) first.
,,,

## Render Tests

A **render test** is used to ensure that a component displays the right stuff given its props.

* **Given** a set of props for the component
* **When** the component is rendered
* **Then** the result is displayed correctly

The most basic example of a render test is a simple sanity check. That is, given the default props, the component does not crash.

```jsx
describe('<ColoredBox />', () => {
  it('renders', () => {
    expect(shallow(<ColoredBox />)).toHaveLength(1);
  });
});
```

Notice how simple this sanity test is. We attempt to render a component in its most basic form (all default props) and see whether it renders or crashes. A test like this serves as an excellent safety net when modifying the component, ensuring that no mistakes were made or that undefined props were not accessed. Indeed, for sufficiently simple components, this sanity test is often the only test you'll need!

Wait, the _only_ test I'll need? Indeed, it can be very tempting to test _too many_ things with render tests. Having too many specific tests leads to brittle components, and brittle components are hard to modify.

Since components tend to change a lot, we actually want the tests to _reflect_ that need for change. Therefore, we only need to test the following key factors:

* A sanity check for ensuring the component works given its most basic usage
* Conditional logic that may render one thing or a different thing depending on a prop's value
* Extremely important text values show up in the component somewhere

Notice what we're **not** testing for! Render tests do not cover the component's structure or that the class names are correct. Structure is very volatile, so we don't want tests locking that structure in place. In other words, we want to _avoid_ tests that look like this:

-```jsx
// Avoid! This test is too opinionated about structure.

it('renders the title', () => {
  const wrapper = shallow(<Header title='Hello' />);
  expect(wrapper.find('.header h1').text()).toEqual('Hello');
});
```

Instead we want to keep our test more flexible to change:

+```jsx
// Better! We only actually care that the title is somewhere in the component.

it('renders the title', () => {
  const wrapper = shallow(<Header title='Hello' />);
  expect(wrapper.text()).toContain('Hello');
});
```

Rendering is a function, and like all Javascript functions needs to be tested. But we only want to test the _logic_ and not the _structure_ of the component! Remember to keep these tests small and few in order to keep the component flexible.

~,,,
Although a component may do more than simply render, we are only concerned about rendering for render tests. We simply want to know: Does this component display correctly? Will it look correct on the page?
,,,

## Behaviour Tests

A **behaviour test** is used to ensure a component does the right things. I call them "behaviour" tests since we're assessing how components behave when subjected to user input.

* **Given** an initial state
* **When** the user performs an action
* **Then** the component displays the expected result

The "user" bit above is particularly important. Ultimately, we want users to be able to interact with our apps. So, why not write our tests from the perspective of the user? This gets us as close as possible to knowing how the app will behave when put in front of a real human.

Here's an example of a behaviour test for this website which ensures the top bar works correctly:

```jsx
const clickHamburger = () =>
  wrapper.find('.main-links > .hamburger').simulate('click');
const areNavLinksVisible = () =>
  wrapper.find('div.nav-links').instance().style.height !== '';

it('should toggle the nav links when the hamburger is clicked', () => {
  wrapper = mount(<TopBar />);

  clickHamburger();
  expect(areNavLinksVisible()).toBe(true);

  clickHamburger();
  expect(areNavLinksVisible()).toBe(false);
});
```

There's a natural question to ask here. When do you need a behaviour test? When is a render test no longer sufficient?

Behaviour tests are needed where rendering and Javascript intersect. In other words, if your component does more than render, it is probably a good time to write some behaviour tests to guarantee the interactions occur as expected. Here are some common times when you'll want a test like this:

* The user is able to interact with the component, meaning handlers are probably used in the component
* The component has special behaviour on certain lifecycle methods, like `componentDidMount()`
* The component has state or interacts with external state management (like Redux or MobX)

~,,,
It is important to note that behaviour tests are _not_ unit tests! Behaviour tests cover all the methods used in a particular user interaction rather than any one method in isolation. This is actually a boon because it means we can cover multiple modules with a single suite of user-centric, expressive tests.
,,,

Emulating user behaviour is key to writing expressive behaviour tests. Thankfully, Enzyme provides methods that can simulate actions users may take, such as clicking a button or typing in some text. This is done through the `simulate()` method:

```javascript
wrapper.find('button').simulate('click');
wrapper.find('input').simulate('change', {
  target: {
    value: 'hello'
  }
});
```

And once you've simulated a user event, then you can assert that the component did the correct thing in response!

In my experience, user-centric tests like behaviour tests grant large confidence that the application will behave as intended. They comprehensively check that all the pieces (state management, rendering, and business logic) work together, correctly and accurately.

## Motivation

So why think of React tests in two categories like this?

One of the things we React devs like doing is keeping behaviour separate from presentation. That is, we write a bunch of components which are purely presentational and have zero state, and we keep the state management at a different level of abstraction. Decoupling behaviour from presentation like this allows the code to be more extensible and our components to be more reusable.

Having a paradigm of two types of tests indirectly encourages decoupling the presentation from the behaviour. Render tests are extremely useful for pure presentation components, whereas behaviour tests come in anytime we have state and user interaction.

Finally, thinking of React tests like this clarifies, even if slightly, what ought to be tested in a component and how. The two things we care about are rendering and behaviour, how it looks and how it acts. So let's write our tests to reflect that!

Ultimately, though, every codebase is different, and therefore so are the needs. Thinking of my tests in terms of rendering and behaviour has helped me on past projects, so who knows? Maybe it can be useful to you!

Feel free to explore the **[Auroral Laboratory](*https://github.com/Auroratide/auroral-laboratory/tree/master/two-ways-to-test-react-components)** for an example project using both render and behaviour tests!
