---
id: disney-bounding
title: "Disney Bounding Catalog"
category: Website
tags:
  - disney
  - colors
  - ai
  - claude
  - sveltekit
  - pocketbase
icon: palette
color: red
cover:
  alt: "Website showing a grid of disney characters."
summary: "A website where Disney fans can share their character-themed outfits with each other."
summaryDisp: "Dress like Disney characters"
publishedAt: 2026-04-25T12:00:00.000Z
order: 23
links:
  - title: "Visit"
    href: "https://disneybounding.com"
    icon: palette
    color: red
  - title: "Code"
    href: "https://github.com/Auroratide/disneybound"
    icon: github-alt
    color: github
gallery:
  - src: "./characters.webp"
    alt: "A grid of Disney characters."
    caption: "Many Disney characters are available"
    width: 1374
    height: 938
  - src: "./colors.webp"
    alt: "Anna, alongside a palette of three colors."
    caption: "Colors are suggested for each character"
    width: 1374
    height: 938
  - src: "./outfits.webp"
    alt: "An area showing how to upload images, and an image someone uploaded of themself dressed as Anna."
    caption: "Upload your outfits to inspire others"
    width: 1374
    height: 938
  - src: "./green.webp"
    alt: "Green selected in a filter, and a grid of green characters."
    caption: "Find characters of a certain color"
    width: 1374
    height: 938
---

The **Disney Bounding Catalog** is a website dedicated to the hobby of dressing in the same colors as famous characters. For example, "Disney Bounding" as Ariel from the Little Mermaid would mean wearing lavender and sea green clothing.

I made this website for two reasons:

1. I love my mom ♥
2. I wanted to practice AI-first development with something I know I can build myself.

## Some Technical Details

* Made with Claude Code
* Pocketbase for auth/database, running on a Virtual Private Server
* React and Tailwind <small>(though I perhaps regret allowing Claude to use Tailwind)</small>
* Mailpit for testing email integration
