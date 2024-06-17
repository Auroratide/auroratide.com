---
id: sifetti
title: "Sifetti"
category: websites
tags:
  - notetaking
  - organization
  - website
  - authentication
  - sveltekit
icon: folder-minus
color: purple
cover:
  alt: ""
summary: "A note-taking app where instead of putting things into folders, you filter by tags you create."
summaryDisp: "Sort your notes by tags"
publishedAt: 2022-01-21T12:00:00.000Z
order: 120
links:
  - title: Visit
    href: https://sifetti.netlify.app
    icon: folder-minus
    color: purple
  - title: Source
    href: https://github.com/Auroratide/sifetti
    icon: github-alt
    color: github
gallery:
  - src: "./all.png"
    alt: "Many notes for different characters and places are arranged in a grid."
    caption: "Create notes for whatever it is you're building."
    width: 2828
    height: 1216
  - src: "./filtered.png"
    alt: "Notes are filtered, showing only those tagged \"Mimba Isle\" and \"NPC\"."
    caption: "Filter by tags to see different ways in which your notes are related."
    width: 2828
    height: 670
---

> [!CAUTION]
> The website is no longer allows creating accounts. Still, because I'm a clever developer, it's possible to see how it would have worked using the **[Demo](https://sifetti.netlify.app/demo)**.

**Sifetti** is a full-stack web application for organizing a variety of notes without the use of folders. The idea is that folders can actually get in the way of organization; how many times have you found yourself wishing you could put one file into more than one folder?

Instead, Sifetti lets people use **tags** to organize documents. Tags aren't revolutionary, though Sifetti makes them _the_ first-class way of getting different views of your work, optimizing the user interface around this concept.

## Features

Sifetti is currently supporting a small number of people, though the app is currently in _closed beta_ meaning sign-ups of new people is not available until some core feedback is accumulated and acted on.

Sifetti currently supports:

* Authoring notes in markdown with a quick double-click-to-edit interface
* Adding and removing tags on notes
* Immediately filtering notes by toggling certain tags
* Quickly filtering large sets of tags by text

## Technology

Sifetti relies on [SvelteKit](https://kit.svelte.dev/) for the frontend framework and [Supabase](https://supabase.com/) for authentication, database, and file storage. It is designed with security and accessibility in chief importance, and robustness is ensured with an extensive suite of tests.

Additionally, as an open source product, my hope is that Sifetti could grow beyond the web, perhaps even serving as an abstraction over a folder on a computer filesystem.
