**[Tap to Roll](https://auroratide.github.io/tap-to-roll/)** is "yet another dice roller" made great by simplifying its UI to just the things needed in a typical roleplaying game like Dungeons and Dragons. It works offline and can even be installed as if it were a native mobile app.

Just tap the dice and let the app aggregate the results. Need to roll 8d6 of fireball damage? Tap the "d6" die eight times!

I made this because nearly all apps I've tried have the same basic idea: let the player specify the number of dice, then the number of sides, then roll. However, that turns out to be inconvenient, as it means either typing into a keyboard or tapping up/down arrows many many times in a game. In reality, you can specify how many dice you want just by tapping the die that many times.

## Technology

Tap to Roll is made as a [Progressive Web App](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps) with [React](https://reactjs.org/), the most popular frontend framework. Although I tend to gravitate toward Svelte or native web components for most things, I used React for this app to keep my React skills up.

## Accessibility

As usual, accessibility is very important, and so Tap to Roll is made with that in mind.

* Fully keyboard usable, tabbing to access different dice
* Headings define each section for quick navigation with screen readers
* Screen readers announce the result of each roll as they happen
* And visible instructions! This is useful for everybody.
