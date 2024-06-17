---
id: vsts-monitor
title: "VSTS Monitor"
category: Tool
tags:
  - javascript
  - api
  - vsts
  - azure devops
  - pipeline
  - build
icon: traffic-light
color: green
cover:
  alt: "Two pipelines, with one of them currently running Journey Tests."
summary: "Tool for visualizing the state of a build from VSTS. At the time was used for my team to quickly and immediately know the state of our builds at any time."
summaryDisp: "Visualize an Azure pipeline"
publishedAt: 2017-10-01T00:00:00.000Z
order: 160
links:
  - title: Source
    href: https://github.com/Auroratide/vsts-monitor
    icon: github
    color: github
gallery:
  - src: "./running.png"
    alt: "Two pipelines, with one of them currently running Journey Tests."
    caption: "The pipeline indicates which stage is running."
    width: 699
    height: 360
  - src: "./failure.png"
    alt: "A big red box outlines that one of the tests failed."
    caption: "A big red box appears when a stage is failing."
    width: 710
    height: 360
  - src: "./vsts.png"
    alt: "Screenshot of the native VSTS monitor, showing just a small red X for a failed build."
    caption: "Microsoft's version looks thin by comparison."
    width: 690
    height: 360
---

While working for ThoughtWorks, one of my clients was using Microsoft's <abbr title="Visual Studio Team Services">VSTS</abbr> to manage running tests and deployments. At the time, the tool didn't have a very good visualization of this process, though, and this led to our team not knowing whether the build was succeeding, or if something failed, what failed. So in a few hours I hacked up my own monitor consuming VSTS's API, and soon enough the monitor saw use by other teams within the same client.

Unfortunately, VSTS Monitor was not designed for mass usage, so there are no instructions for setting it up, and the code is nigh unmaintainable. After all, it was hacked together very quickly to solve a very particular problem our team was facing.

In some sense, though, that's what made this product successful and by far one of the things I'm most proud of.

It doesn't matter if you have the most beautiful and extensible code in the world. If the product doesn't solve a problem or do its feat well, the code is useless. We write good code because we know products tend to need maintenance and extension afterward, and hence good code contributes to the end usefulness with respect to time. But that's not always the case; sometimes hacking a thing together is good enough.

Anyway, if your team uses VSTS (now Azure DevOps) and you want to use this, feel free to. But be warned that I no longer remember how to set it up, so that's up to you to figure out!
