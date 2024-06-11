---
id: folderized-react-components
title: "Folderized React Components"
category: Web Dev
tags:
  - react
  - tip
  - javascript
  - organization
  - folder
  - domain
icon: folder
color: purple
summary: "Many of web developers organize their code based on type (CSS, state, view). However, we can avoid drawbacks if we instead \"folderize\" our React components."
longSummary: "A React component can be made of different files, and it can be tempting to organize these files into individual folders based on their type (CSS, state, presentation). However, this approach has some drawbacks that can be avoided if we \"folderize\" the entire React component instead."
publishedAt: 2018-10-02T14:35:54.600Z
createdAt: 2018-10-02T14:35:54.600Z
---

A component on a web page, like a button, is composed of structure (html), styling (css), and behaviour (javascript). React gives us a very convenient way of packaging this complexity into a single, nice reusable Component. Cool!

Or does it?

Mess around with React enough and you'll soon learn that in order to keep files small and responsibilities separate, you'll want to split components into multiple files. But where do you put these files? How do you organize a React component?

Separating files into different folders based on responsibility is a decent, intuitive approach. However, this approach comes with some nasty drawbacks that can be avoided by packaging all related files into a single folder. Let's dig deeper!

## Using Separate Folders

In its simplest form, a React component is just a javascript file, perhaps like the below ClosableAlert component:

```jsx
const ClosableAlert = ({ text }) =>
	<div>{text}</div>;

export default Alert;
```

But this component is super boring! It's just a div with text. Components usually also have styling so they look pretty. Some components are very complex and might be split up into smaller components. And even more components may allow for user interaction and therefore contain state.

So where do you put all of this extra code in your codebase? Where do you put the CSS file needed for styling? Where do you put subcomponent files?

The most natural approach might be to try and separate the files by _type_.

```
/components
	ClosableAlert.jsx
	ClosableAlertHeader.jsx
/containers
	ClosableAlert.js
/styles
	ClosableAlert.css
```

So, all of the CSS files go in one place. All the state-related stuff goes in another place. So on and so forth. Seems pretty organized!

However, this folder structure comes with a very big drawback that isn't obvious at first glance. All this code which deals with exactly one thing is very _spread out_.

What does this mean?

1. I have to go to multiple, disparate folders just to make simple changes, like renaming the class name. This costs valuable time.
2. To reuse the component in another project, I have to go collect all the different pieces, making it less reusable. But React was designed with reusability in mind, so...
3. I only know that code is related via a naming convention. As soon as that convention is accidentally violated, things get messy.

That last point is perhaps the most important, especially for newcomers on a project that do not necessarily know the naming convention. The convention is perhaps most confusing for strict subcomponents, like `ClosableAlertHeader.jsx`. We only have a hint that it's a subcomponent by the "ClosableAlert" prefix.

I don't know about you, but it feels like we can organize our code better.

> [!NOTE]
> Separating code into its "types" is very intuitive because we tend to organize our possessions in the same way. We separate socks from shirts, forks from spoons, and so forth. So why not separate styles from behaviour in code?
> Well, we separate socks from shirts because we want to mix-and-match them. But we don't mix-and-match with code. The CloseableAlert CSS will only ever go with the ClosableAlert component. Therefore, those two pieces of code should be as close together as possible.

## Folderizing the Component

As a general rule of thumb, **closely related code should be located close to each other in the code base**. So given that principle, how _should_ we organize this mythical ClosableAlert component?

Time for folderization!

You can actually package your entire component as a _folder_. Something like this:

```
/ClosableAlert
	component.jsx
	container.js
	style.css
	index.js
	/Header
		component.jsx
		style.css
		index.js
```

Wow, look at that! Everything is inside of a single folder, the "ClosableAlert" folder!

So how does it work? Simply put, different responsibilities live in different files; so all CSS is in `style.css`, state management is in `container.js`, etc. But the real magic is in that `index.js` file.

The `index.js` file serves as a kind of entry point for the entire folder. So let's say you wanted to import your ClosableAlert component like so:

```javascript
import ClosableAlert from 'MyComponents/ClosableAlert';
```

Normally, you'd have to import a specific file. But here, we're importing a folder. When the reader encounters a folder import instead of a file, it will try to import the `index` file inside that folder.

So, what if we made our `index.js` file like so?

```javascript
import container from './container';
import ClosableAlert from './component';

export default container(ClosableAlert);
```

Now when you import ClosableAlert, you get the entire containerized, stylized component! It's kind of like a single, neat little package.

Notice that this strategy mitigates all of the problems we had when attempting separate folders.

1. If I'm making a small change, that change will most likely be confined to a single place in the codebase. Nice!
2. If I want to reuse the component in a different project, I basically just need to copy the component folder into my new project. Neat!
3. Code is not bound by a naming convention. In fact, every component could have it's own naming convention if it wanted; each component is independent of the codebase it's living in. Beautiful!

As an added bonus, look at the Header subcomponent. Because our component is now a folder, we can _put subcomponents in the folder too_! This makes it super obvious that the Header is meant _only_ for ClosableAlert and not for other components.

## Summary

Ultimately, there's no one right way to organize a codebase. It's all dependent on your personal preference or the convention of the team. The point of this post is to showcase an interesting way of organizing React components in case you've never seen it before.

When I first started learning React, I separated everything into different folders because it made the most sense to me at the time, plus I had a "javascripts" folder and "styles" folder on former Ruby on Rails projects. But once I learned component-folder method of organizing code from other brilliant minds, I never turned back. It just made the code so much easier to navigate and understand.
