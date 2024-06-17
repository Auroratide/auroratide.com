---
id: looponly
title: "LoopOnly Discord Bot"
category: Tool
tags:
  - discord
  - bot
  - music
  - loop
  - roleplaying
  - typescript
icon: music
color: blue
cover:
  alt: "The LoopOnly bot says, \"Playing your song!\""
summary: "LoopOnly is a Discord Bot I made to loop one song continuously."
summaryDisp: "Loop just a single song"
publishedAt: 2021-11-11T12:00:00.000Z
order: 140
links:
  - title: Source
    href: https://github.com/Auroratide/LoopOnly
    icon: github-alt
    color: github
gallery:
  - src: "./loop.png"
    alt: "The LoopOnly bot says, \"Playing your song!\""
    caption: "The bot is quite friendly!"
    width: 685
    height: 172
---

In September, [music Discord bots were slain by YouTube](https://www.theverge.com/2021/9/12/22669502/youtube-discord-rythm-music-bot-closure) for legal reasons. Some friends and I were using one of the bots on a roleplaying server, so this was a sad moment of us.

I had some spare time, so I rapidly crafted **LoopOnly**, the simplest way to loop some music without YouTube! All it does is loop a song file continuously until told to stop.

## Simplicity

Most music bots are general purpose and feature complex queueing mechanisms that allow people to take turns sharing music. While great in general, it tends to make the commands clunky if your only goal is to loop a single song.

Therefore, LoopOnly was designed with just one main command: `/loop`, which loops the same song until called again on a different song.

## How can I use this?

I did not go through the rigamarole of fully deploying the bot for public use since I meant it to be a quick project for personal use. Therefore, at the moment it can only be self-hosted. Visit the [github repo](https://github.com/Auroratide/LoopOnly) for instructions on how to host the bot yourself.

Also, leave a **star** on the repo! This will tell me that there's interest in the bot, and I may consider deploying it properly.

## Technology Used

The project uses Typescript and demonstrates use of the Discord API.
