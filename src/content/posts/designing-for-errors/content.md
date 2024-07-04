---
id: designing-for-errors
title: "Don't forget to design for errors"
category: Software Engineering
tags:
  - errors
  - aws
  - api
  - ui
  - game dev
icon: bug
color: red
summary: "When you code, account for error scenarios and show the right message to the user."
longSummary: "When you code, accounting for the different kinds of errors that can happen will save a lot of future time debugging, as stabilize your program significantly, and result in fewer unhappy end users when things don't go as planned."
publishedAt: 2024-07-04T12:00:00.000Z
createdAt: 2024-07-04T12:00:00.000Z
---

Imagine for a moment that you visit the doctor for a general health checkup, and at the end the doctor says:

* **Doctor**: Well, _something_ is wrong. Don't forget to pay your $50 co-pay at the front desk!
* **You**: Thanks! ...wait, something is wrong? _What_ is wrong??
* **Doctor**: Oh, that's for you to figure out!

Well, recently, I was trying to deploy an infrastructure change to <abbr title="Amazon Web Services">AWS</abbr> via CloudFormation, and I ran into this error:

```
Resource handler returned message: "null"
```

Which, in non-coder speak, is the same as saying "Something is wrong, good luck!" Unfortunately, it took over 30 minutes to identify an ultimately incredibly simple bug.

When we write code, it is important to **design for error scenarios**: doing so saves debugging time _when_ (not if) things go wrong, and it can squash bugs ahead of time by forcing us to think about the code in many different ways.

> [!NOTE]
> If you are curious what the actual error was and how it was resolved, I answered my own question on Stack Overflow: [AWS CloudFormation returning "null" error message](https://stackoverflow.com/questions/78707157/aws-cloudformation-returning-null-error-message/78707158).

## For User Interfaces

This includes websites, apps, anything exposed to an everyday user.

### Messaging

* **Always** show _something_, even if it's just a generic error page. In my opinion, there is just no excuse to an app crash or blank white page (aka, "White Screen of Death").
* Tell the user what their next step should be. It might be to fill in a blank form field, to file a report, to just go to the home page, etc.
* It's also good to say what happened, but don't be too specific about it unless it's something the user themself can fix.
* **NEVER** expose stack traces, or errors readable to coders (not even in a debugging console). This leaks implementation details about your code which gives malicious agents knowledge about how to attack it.

I want to call out some accessibility practices too:

* **Do not** rely on only color! Some people are color blind, and red and green look similar to them. It is important accessibility practice to use words on top of colors.
* **Do not** rely on just an icon! Symbology is not universal across cultures. Again, use words as well as icons.
* Be careful with pop up errors, as they can distract the user from what they are actively doing. Reserve pop up errors for things the user must know _now_.

### Kinds of errors

* The user fills in a form wrong. Includes missing required fields, or putting an invalid value such as a word in a numeric field.
* The user visits a page that does not exist. Especially common when someone visits a link from a different site to a page that no longer exists.
  * Note that in general it's best to never move articles once they've been published publicly. But if you must, the old location should redirect to the new location.
* The user visits a page that requires authorization, but they are not authorized.
* A request to an API fails. It may or may not be the user's fault, so the API should clearly indicate the error so the UI can accurately tell the user what to do.
* Data is invalid. Even though the backend should always give good data, the frontend should adapt to _just in case_ there's a bug in the backend.
* Logic bug in the frontend code. Bugs are almost by definition unexpected, but don't crash the app just because there's a bug! Catch anything unexpected and give the user a generic error page.

## For APIs

Different pieces of software communicate to each other via APIs. The audience of these errors include coders, but also _code_. In other words, if System Apple asks System Banana for something and Banana fails, a good well-formatted error can tell Apple what to do about it.

> [!IMPORTANT]
> I'm going to focus on HTTP APIs here since that's the lion share of my experience.

### Messaging

* Use the right HTTP status code!
  * A 400-type error is something the _API client_ did wrong and can potentially fix on their end.
  * A 500-type error is something the _API server itself_ did wrong, and the client generally can't do anything about it.
  * [HTTP Cats](https://http.cat/) is a cute way to visualize the different codes.
* There are more HTTP status codes than these, but these are the ones I most commonly find myself using:
  * 400: Something is wrong in the request body.
  * 401: The client is not authenticated.
  * 403: The client is not authorized.
  * 404: The server cannot find the requested thing.
  * 409: An update is invalid, probably because the client is out of date.
  * 500: Something unexpected went wrong on the server.
* For 400-type errors, the response body should include a description of what was wrong so the client can potentially fix the issue.
* If there are multiple things wrong (such as, multiple fields in the request body are missing), indicate all of these failures in a single response so the client.
* Like with UIs, avoid stack traces or anything that exposes how the server works. Many APIs are exposed to the public, and you don't want to leak any server details to malicious agents.

### Kinds of errors

* The request body is invalid, having a number where a string should go, being in the wrong format, or simply missing.
* The client calls an HTTP endpoint or method that is not known by the server.
* The client is not authenticated or authorized to access something. Or, the client is using an expired auth token.
* The client calls the API too many times in a short span of time. You don't want this scenario to bog down your API.
  * This doesn't just happen because a malicious user is trying to bring down the API. It can easily happen due to a bug in the frontend code that calls an API in a loop.
* The server makes its own API/Database calls, and those fail. Generally, you should translate that error to the client in a way the client can resolve.
* The server receives ordered events out of order.


## For Games

Games share a lot in common with [User Interfaces](#for-user-interfaces), so everything in that list applies here too.

> [!WARNING]
> I don't have a lot of experience in game development, so take these ideas with a grain of salt!

* In platformers, the player character can get stuck. If its the kind of game where the player can't load a save state (a live multiplayer game, for instance), then there needs to be a way for the player to get themselves unstuck. One way to do this is with a self-kill command.
* It's always possible for the player character to end up out of bounds. The game should detect when this happens and deal with it somehow, for instance by teleporting the player to the room's start.
* Softlocks are by definition unintentional, but some games can have rudimentary softlock detection, such as detecting if key items disappear or fall out of bounds.
  * A <dfn>softlock</dfn> is an unexpected game state where it is impossible to make progress, even though the game seems to be running just fine.
  * I like [Portal's softlock easter egg](https://www.youtube.com/watch?v=AetJjMPyMuI) as an example.
* In online multiplayer games, it is imperative to deal with bad connections and lost information packets. I don't have advice here; this is a notoriously difficult problem you don't usually want to solve yourself, but the various approaches used are generally referred to as [Netcode](https://en.wikipedia.org/wiki/Netcode).