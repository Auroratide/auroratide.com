---
id: commentary-on-global-workspace-in-llms
title: "Commentary on Global Workspace in LLMs"
author: Stanislas Dehaene and Lionel Naccache
publisher: Anthropic
href: https://www-cdn.anthropic.com/files/4zrzovbb/website/cc4be2488d65e54a6ed06492f8968398ddc18ebe.pdf
category: Artificial Intelligence
type: article
tags:
  - ai
  - consciousness
  - global workspace
  - neuroscience
icon: inbox
color: purple
summary: "Neuroscientists comment on the discovery of a maybe-conscious concept discovered in Claude."
longSummary: "This is a response by neuroscientists Stanislas Dehaene and Lionel Naccache on the discovery of a section of Claude's internal structure, called the J-Space, and whether this structure demonstrates some level of consciousness in LLMs."
originalPublishedAt: 2026-07-06T12:00:00.000Z
publishedAt: 2026-07-08T12:00:00.000Z
---

This is a response by neuroscientists Stanislas Dehaene and Lionel Naccache on the discovery of a section of Claude's internal structure, called the <dfn>J-Space</dfn>, and whether this structure demonstrates some level of consciousness in LLMs.

## What is the J-Space?

Before going into takeaways of the neuroscience paper, it's useful to know what the J-Space is and why we're even talking about it.

- The J-Space is a relatively small portion of the neural network's activation that contains one or two concepts of things the AI is actively thinking about.
- Anthropic can craft prompts that get Claude to think about something other than it's doing. For example, this is like me telling you to think about how to bake a cake while you take a shower.
- Anthropic can influence how Claude answers questions by interfering with what is in the J-Space, for instance by swapping "spider" with "ant" to get a different answer to the question, "How many legs does the animal that spins webs have?" While contemplating this question, Claude starts thinking of spiders, but if you interfere and change it with ants, Claude will answer "6" instead of the correct "8".
- Anthropic can tell when Claude thinks it's being evaluated for safety by seeing what's in the J-Space.
- When the J-Space is destroyed, Claude can still chat normally, but it's reasoning capability decreases significantly.


## Takeaways

- Regardless of whether you call it consciousness, frontier LLMs possess emergent functional structures that demonstrate their complexity beyond "all they do is predict words".
- Scientists at Anthropic have identified a subset of activations (the J-Space) that meet the criteria for a "global workspace", which is used as an explanation for consciousness in humans.
- Properties that align with the same idea in humans include:
  - Reportability: LLMs can tell you what they are thinking about (in fact we can see the thoughts directly)
  - Limited Capacity: The LLM can only think about a couple of concepts at a time.
  - Broad Connectivity: What the LLM is thinking about affects most of the rest of how the LLM behaves.
  - Internal Reasoning: The LLM can think about things that are different from what it is actually doing.
- The biggest difference is that LLMs are not "recurrent" in the same way brains are. That is, we can constantly think, but LLMs think exactly once. The authors of the paper argue that's a bit semantic, though, for two reasons:
  - LLMs _do_ loop. They feed the output of their last run into input as the next. In this way, their J-Spaces are connected.
  - Even in a single run, each hidden layer of the network _acts like_ the next step of a recurrent model. For instance, it can do multi-step arithmetic in the J-Space, but only up until it runs out of layers.
- The authors make a distinction between "access consciousness" and "phenomenal consciousness". The J-space demonstrates access consciousness, but not phenomenal consciousness. However, phenomenal consciousness might be a meaningless concept.
  - Access consciousness: The ability to selectively think about something that gets used by the rest of the thinking system.
  - Phenomenal consciousness: Having a subjective experience, an answer to the question "What is it like to be Claude?"
- Some things make Claude's "consciousness" very alien to us.
  - Sense of time. Each pass through the model doesn't remember how long previous passes took.
  - No body. It doesn't have senses like sight like we do.
  - No episodic memory. It can't remember things actively.
  - Sense of self, tied to the fact that it has no episodic memory among other things.


## Questions

- How important are concepts such as "ignition" with regard to consciousness?
  - Ignition is the idea that our consciousness is so selective, ideas are either in it or not. There's no such thing as concept being "half-conscious" so to speak, but it seems this _is_ possible in the J-Space.
- What makes closing the true recurrent loop so elusive? Is it because back propagation becomes theoretically infinite?
- Does this mean that with each path of the LLM, it's like it experiences a brief "flit" of "aliveness"? And is the only reason why it's a "flit" because it cannot experience the passage of time?
- Something for me to maybe follow up on, the authors list a number of tests that have been used on people, but the tests were pretty technical for me to grasp on cursory reading.
- How important is phenomenal consciousness? My intuition says it might be quite important to consider with regard to regular ethics questions we might pose.
