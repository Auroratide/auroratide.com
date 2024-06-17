---
id: pt-database-app
title: "PT Database App"
category: Tool
tags:
  - college
  - haxe
  - application
  - desktop
  - database
  - planner
  - organization
  - teaching
icon: project-diagram
color: red
cover:
  alt: "An interface for assigning students to classes."
summary: "A small desktop application made to help organize peer teachers at Texas A&M University. I was an aide at the time, and to alleviate the tediosity made this utility."
summaryDisp: "Assigns teachers to classes"
publishedAt: 2016-04-01T00:00:00.000Z
order: 190
links:
  - title: Source
    href: https://github.com/Ardeol/PTDatabaseApp
    icon: github
    color: github
gallery:
  - src: "./manager.png"
    alt: "An interface for assigning students to classes."
    caption: "Managers can add students to courses or courses to students."
    width: 679
    height: 360
  - src: "./list.png"
    alt: "A list view of students and their schedules."
    caption: "A list of all the current schedules can be quickly compiled."
    width: 679
    height: 360
---

The PT Database App is an application for the Texas A&M computer science department to manage schedules for its peer teacher program. Peer teachers help students in class labs by answering questions and offering advice, but with over 50 PTs in the program, managing all of their schedules and updating the website can be a pain. This app serves as a one-way stop for assigning classes, managing office hours, and generating web content.

The PT Database App offers:

* The ability to manage multiple databases, presumably for multiple academic semesters
* The ability to actually assign labs to peer teachers based on a master list of all available courses
* The ability to assign office hours to peer teachers
* Automatic detection of conflicts between assigned labs, office hours, and the peer teachers' personal course schedules
* The ability to import course schedules in bulk
* The ability to export CSV files of the current assignments
* The ability to generate the web page to an HTML file

This project was created in Haxe using the OpenFL, HaxeUI, and systools libraries.
