**Storyshots** is an open-source developer tool for automatic visual regression testing on any project that uses [Storybook](https://storybook.js.org/) and [Playwright](https://playwright.dev/).

Basically, this tool takes pictures of all the different parts of a website. When you make a change to the website, it retakes all those pictures and compares them, giving you a chance to review and ensure everything that changed was intended. This avoids that awkward scenario where you change one thing and it completely breaks the layout of a totally different page! This process is called <dfn>visual regression testing</dfn>.

I have contributed to this project created by [Compoze Labs](https://www.compozelabs.com/). It uses:

* Docker for creating an environment within which screenshots can be guaranteed to be the same across different computers
* Storybook for visualizing all the different components of a website
* Playwright for taking a screenshot of each individual component and comparing them to previous versions
