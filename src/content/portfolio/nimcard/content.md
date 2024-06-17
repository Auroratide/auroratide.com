---
id: nimcard
title: "Nimcard"
category: Game
tags:
  - typescript
  - ai
  - casino
  - roleplaying
  - strategy
  - turns
icon: spades
color: red
cover:
  alt: "A matrix of several cards laid out in a grid."
summary: "A turn-based strategy game based on playing cards with a difficult, yet beatable, AI to play against."
summaryDisp: "Card game against an AI"
publishedAt: 2021-12-11T02:00:00.000Z
order: 130
links:
  - title: Play!
    href: /nimcard
    icon: diamonds
    color: red
  - title: Source
    href: https://github.com/Auroratide/nimcard
    icon: github-alt
    color: github
gallery:
  - src: "./board.png"
    alt: "A matrix of several cards laid out in a grid."
    caption: "Score the most points to win, avoiding the Queen of Hearts."
    width: 843
    height: 600
  - src: "./ai-turn.png"
    alt: "A matrix of cards in a grid, with two cards in the player's pile and a thinking indicator for the AI."
    caption: "The AI is perfect, but that does not mean it will always win!"
    width: 920
    height: 718
---

Nimcard is a two-player strategy game involving standard playing cards! The game is programmed with an optimal (yet beatable) AI.

* The **goal** of the game is to collect cards totalling the higher score
* Any number of cards are arranged into rows face up so the value is showing
* The **Queen of Diamonds** is always the last card on the last row
* Players take turns taking either one card or two cards from a single row
* The game ends once all cards have been claimed

For scoring, add up the values of all the cards you claimed.

* Numerical cards are worth their value
* Jacks, Queens, and Kings are worth 10 points
* Aces are worth 11 points
* The **Queen of Diamonds**, however, is worth -10 points!

## Why I Made This

Nimcard was a game I made as a puzzle for friends in our [Dungeons and Dragons](https://dnd.wizards.com/) campaign. They were in a casino-based city and could only earn an audience with the so-called "King of Clubs" by winning this game.

In the meantime, from a skills point of view, I also used Nimcard to practice an immutable functional style and learn how to use [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers).
