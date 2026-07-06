---
id: measuring-creativity-of-large-language-models
title: "Measuring the Creativity of Large Language Models"
author: Anirudh Atmakuru et al.
publisher: Arxiv
href: https://arxiv.org/html/2410.04197
category: Artificial Intelligence
type: article
tags:
  - ai
  - creativity
  - paper
  - science
icon: pencil-alt
color: green
summary: "This study attempts to measure the creativity of LLMs in story writing"
longSummary: "This study attempts to measure the creativity of LLMs in story writing. When more and more constraints are added to the prompt, then more and more creativity is needed to write a story that adheres to all of the constraints."
originalPublishedAt: 2024-10-05T12:00:00.000Z
publishedAt: 2026-07-06T12:00:00.000Z
---

This study attempts to measure the creativity of LLMs in story writing by introducing a method called CS4 (Comparing the Skill of Creating Stories by Controlling the Synthesized Constraint Specificity). That is, when more and more constraints are added to the prompt, then more and more creativity is needed to write a story that adheres to all of the constraints. Additionally, the combinations of contraints makes it exceedingly unlikely for LLMs to simply find a similiar enough story in their training data, and therefore they must write original content.


## Takeaways

- In general, as more constraints are added to the story, quality of the story declines, though it declines less for some models than it does others.
- Learning from human feedback helps LLMs select better stories from their training data, but does not seem to help with writing original stories.
- The less LLMs can rely on their training data, the less _coherent_ they become. That is, they emit words but the sentences don't always follow each other naturally, or fit in a larger whole.
- The study measures creativity via adherence to the constraints given, coherence of the story, diversity of the passage, and likeability.
- I'm somewhat critical of the evaluation metrics used here. For example, I think adherence to constraints can be achieved in non-creative ways.


## Quotes

> [Creativity is] the ability to produce original, unseen, and high-quality stories in this study.

Obviously creativity is in general more than this, but this is what they were measuring directly. Specifically, they were looking for originality via textual diversity, and quality via prompt adherence and "likeability".


> LLMs could (or might often) output text that is semantically similar to but lexically different from a training text piece, the training corpora are usually huge, and searching these for identifying LLM-generated text could be expensive, and the training data used for training many popular LLMs are not publicly available.

The authors suggest that evaluating the originality of text is really hard, because the body of text is extremely huge, and the LLM will never produce literal copy/pastes of training data, just text that might be so similar as to be "borrowed" so to speak.

They get around this by actually _not_ having AI write stories, but by having them edit stories instead. That makes it easier to compare the outputs of different models against each other.


> Understanding the extent to which LLMs can replicate this process will not only help us deep dive into their behavior but could also be essential for determining their applicability in these creative domains.

The purpose of the study is to put LLMs into environments that are _similar to_ the number of constraints human writers face. Like in the study, they subject LLMs to 39 constraints, but writers may face many many more than that in the form of worldbuilding constraints, editor feedback, publisher feedback, reader feedback, etc.

Now granted, I think these types of constraints are not equivalent. But I get the idea.


> It is difficult to find a metric that can objectively compare the quality of two stories from two different genres. For example, incoherence or logical flaws might be acceptable in an adventure story but disastrous in a detective story.

It is important to note the scientific approach here. In order to isolate the variables they care about, they have models _revise_ stories rather than write from scratch. That way, the stories will be mostly the same, making it easier to test, for example, constraint adherence.


> Adding more constraints tends to make the stories incoherent. Further, coherence is a more objective metric than likability, so we use coherence as our main metric to evaluate the generated story.

Indeed, one of my main criticisms is that AI can't really be used to judge likeability. Coherence is a much better metric, though still sort of hard to empirically judge.

The authors state that they tested their evaluation against human evaluators and found the results to be consistent, thereby justifying the use of AI to judge.


> We use two methods to measure the generation diversity of the testing LLMs: self perplexity and dist-n diversity. Self perplexities are calculated using the same LLM that generates the story. A higher self perplexity means the testing LLM also assigns probabilities to other tokens, which implies high generation diversity. Dist-n is the ratio of distinct n-grams to the total number of n-grams and we compute the products of dist-2, dist-3, and dist-4.

I found this facinating.

It's a bit dense so I'll break it down. Basically, they wanted to see how _diverse_ stories were, and they measure that empirically in two ways.

1. **Perplexity**: This is a measure of how "surprising" a sentence fragment is to the AI. If I say "Dogs go BLANK", its clear that "bark" completes the sentence. If I say "I have a pet BLANK", it could be filled with many different animals. The second example has more perplexity because it has more possible branches.
2. **N-Grams**: This is a measure of how often certain phrases are. A 3-gram is just a three-word phrase. If the same three-word phrase happens dozens of times, then the passage is not very diverse.

I think it's important to note that diversity is not the same as _originality_. Originality is statistical infrequency among the body of text, whereas diversity can be measured in isolation.


> As prompts become more specific, tasks could also become difficult for humans. Since we haven’t conducted human experiments, we are unable to compare LLMs’ performances with human performances as in West et al.

This is very important to me. Because no humans were tested with CS4, there is no real creative baseline. It is not possible to measure AI creativity relative to humans, only models relative to models.

Maybe that's fine? But it seems antithetical to the impact statement later in the paper, where they explicitly claim creativity is indicative of artificial general intelligence.

Here's that quote now:

> Creativity is a signature of human intelligence, so measuring the creativity gap between humans and AI models could help us predict if or when AI models could achieve artificial general intelligence.



## Criticism

Perhaps this measures a _dimension_ of creativity, but even then I am skeptical. The paper hinges on two main measures: constraint adherence and likeability.

### Constraint Adherence

Regarding constraint adherence, it is trivially easy to adhere to each constraint by literally writing it out in the story. For example, in one of the same stories in the study, the AI is prompted to write about an "uncontrollable intuition [for] emotions". And the resultant 500-word story, the AI uses the phrase "intuitive empathy" no less than like four or five times.

That is to say, there are uncreative ways to adhere to constraints. An AI that merely adheres to constraints is simply one that's good at following instructions. Which is ironically not indicative of creativity; creatives tend to _break_ rules rather than follow them!

In my opinion, creative constraint adherence looks like combining constraints in clever ways, or following them in unexpected manners.

For example, instead of writing a character with "uncontrollable intuition [for] emotions" by simply stating they have "intuitive empathy" four times, write a story about a character who has a cursed superpower where they know how everyone around them always feels all the time, so much so in fact that sometimes they find themselves _being_ people they've met, and how that's problematic for their life.

### Likeability

Regarding likeability, this measure is extremely subjective. It's made worse by the fact that the paper uses an LLM to judge this. I agree in a sense that "quality" is important, but vibes aren't very scientific.

Creative tests like the Torrance tests try to use things like statistical infrequency of answers to empirically measure originality. And, I think that it would be possible to measure something like this here.

### What about humans?

The study admits this itself, but the same CS4 experiments were not performed with people, just LLMs. That means we don't have a baseline _goal_ for what creativity looks like under their framework.

I mean, it might even be the case that humans are relatively worse even than Llama 2, at least under time constraint. If that turned out to be the case, I'd be far more likely to declare CS4 as an insufficient measure of creativity than I am to claim Llama 2 is more creative than people.


## Questions

- The paper cites worldbuilding as a large set of constraints placed on writing, but how do you know you have creative worldbuilding? In other words, what if the constraints themselves are common, like how so many fantasy novels basically take place in Tolkien's universe?
- This paper is _ancient_ (2024, 1.5 years old). I mean, it's using Llama 2. How much better have models gotten since then? And, how can we create "continuous papers" rather than static experiments?
- How long were the AIs given to write? Was chain of thought used? How would that improve results? What if AIs were given editing rounds? What if they were prompted to be creative or loose with interpretation? Can you teach AIs how to be creative just with system prompts?
- I think the idea of using constraints is interesting, but I think they need a better evaluation framework. What would make evaluation more convincing?
