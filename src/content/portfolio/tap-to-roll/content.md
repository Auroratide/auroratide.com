---
id: tap-to-roll
title: "Tap to Roll"
category: Tool
tags:
  - dice
  - roleplaying
  - progressive web app
  - app
  - react
icon: dice-d20
color: yellow
cover:
  alt: ""
summary: "A dice roller app with a super simple UI, making it easy to roll some dice quickly."
summaryDisp: "Easiest way to roll dice"
publishedAt: 2022-02-01T02:00:00.000Z
order: 50
links:
  - title: Roll!
    href: https://auroratide.github.io/tap-to-roll/
    icon: dice-d20
    color: red
  - title: Source
    href: https://github.com/Auroratide/tap-to-roll
    icon: github-alt
    color: github
gallery:
  - src: "./dice.png"
    alt: "A d4, d6, d8, d10, d20, d100, and d2."
    caption: "The app supports the most commonly used dice in tabletop games"
    width: 844
    height: 610
  - src: "./results.png"
    alt: "The min, sum, and max of three dice rolls."
    caption: "The stats screen quickly summarizes a series of rolls."
    width: 532
    height: 308
---

**[Tap to Roll](https://auroratide.github.io/tap-to-roll/)** is "yet another dice roller" made great by simplifying its UI to just the things needed in a typical roleplaying game like Dungeons and Dragons. It works offline and can even be installed as if it were a native mobile app.

Just tap the dice and let the app aggregate the results. Need to roll 8d6 of fireball damage? Tap the "d6" die eight times!

* Minimizes number of interactions needed to get results.
  * Traditional rollers want you to specify number of dice and number of sides with input fields before you can roll. And if you need to roll different sized dice you're out of luck.
  * Tapping the dice you want is a far faster experience and works in 99% of tabletop scenarios (who needs a d7 anyway?)
* Made using [React](https://reactjs.org/), and that was mostly for practice.
* Fully accessible too!
  * Fully keyboard usable, tabbing to access different dice
  * Headings define each section for quick navigation with screen readers
  * Screen readers announce the result of each roll as they happen
  * And visible instructions! This is useful for everybody.
