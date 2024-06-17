---
id: storyshots
title: "Storyshots"
category: Tool
tags:
  - storybook
  - open source
  - testing
  - react
  - visual regression
icon: book-open
color: purple
cover:
  alt: "A list of visual regression tests that have just run."
summary: "Storyshots takes screenshots of a website's components before and after a change to avoid unintended breaks in the website."
summaryDisp: "Visual Regression Testing"
publishedAt: 2023-02-28T12:00:00.000Z
order: 100
links:
  - title: Try it
    href: https://github.com/compoze-labs/storyshots
    icon: github-alt
    color: github
gallery:
  - src: "./tests.png"
    alt: "A list of visual regression tests that have just run."
    caption: "Storyshots takes a picture of every single component in your codebase."
    width: 1200
    height: 645
  - src: "./comparison.png"
    alt: "Side-by-side comparison of two screenshots of a button, before and after being edited."
    caption: "If something does not match, you can preview the difference and troubleshoot."
    width: 1200
    height: 577
---

**Storyshots** is an open-source developer tool for automatic visual regression testing on any project that uses [Storybook](https://storybook.js.org/) and [Playwright](https://playwright.dev/).

Basically, this tool takes pictures of all the different parts of a website. When you make a change to the website, it retakes all those pictures and compares them, giving you a chance to review and ensure everything that changed was intended. This avoids that awkward scenario where you change one thing and it completely breaks the layout of a totally different page! This process is called <dfn>visual regression testing</dfn>.

I have contributed to this project created by [Compoze Labs](https://www.compozelabs.com/). It uses:

* Docker for creating an environment within which screenshots can be guaranteed to be the same across different computers
* Storybook for visualizing all the different components of a website
* Playwright for taking a screenshot of each individual component and comparing them to previous versions
