---
id: categorizing-ai-memory
title: "Categorizing AI Memory"
category: Artificial Intelligence
tags:
  - ai
  - memory
  - rag
  - psychology
  - paper
icon: brain
color: purple
summary: "Visualizes a way in which some scholars categorized different AI memory mechanisms."
longSummary: "I took a look at a paper surveying the different ways people are implementing different kinds of memory in AI systems, and I put them into a visualization."
publishedAt: 2026-07-20T12:00:00.000Z
createdAt: 2026-07-20T12:00:00.000Z
---

> [!CAUTION]
> So, um, while writing an example of memory retrieval for this post, I realized the toy problem was probably far simpler to solve than I originally expected, and I want to run more experiments before concluding such. I'll present the puzzle at the bottom of the post for you to ponder.

I've been trying to code up my own AI agent from "scratch" in order to learn how they work and what problems people have solved or still have to solve. Long-term memory turned out to be tricky. Like, I want the AI to remember things I've talked about in the past, things it researched independently, and stuff like that.

RAG (retrieval-augmented generation) is what is usually used for things like long-term memory, and while I have had success in getting RAG to find things like factual documents, it hasn't been very precise picking out **episodic memories** or **personal facts**.

Which is certainly a skill issue, and one I'm learning to resolve via experimentation, though it did put me down a rabbit hole to see how people have been trying to enhance the memory of AI systems.

> [!TIP]
> Retrieval Augmented Generation is a technique that helps ground AI in known facts so it does not hallucinate. Imagine a cookbook. When you are asked about how you would know a baked potato is considered done, you'd thumb through pages looking for recipes involving baked potatoes before answering.
> 
> That's loosely what RAG does, but very quickly.


## The AI Memory Landscape

Inspired by the paper [A Survey on Memory Mechanisms in the Era of LLMs](/reading/a-survey-on-memory-mechanisms-in-the-era-of-llms/) by Yaxiong Wu et al, I created a visualization of the most prominent examples of AI memory systems being developed in the wild.

<octrant-viewer></octrant-viewer>

<details>
	<summary>Diagram Transcript</summary>
	<ol>
		<li>
			<span>Quadrant I: Conversational Memory</span>
			<ul>
				<li><strong>ChatGPT (CG)</strong>: Dialogue stored as "user" and "assistant". The conversation transcript IS the short-term memory.</li>
				<li><strong>DeepSeek (DS)</strong>: Dialogue stored as "user" and "assistant". The conversation transcript IS the short-term memory.</li>
				<li><strong>Claude (Cl)</strong>: Dialogue stored as "user" and "assistant". The conversation transcript IS the short-term memory.</li>
			</ul>
		</li>
		<li>
			<span>Quadrant II: Episodic Memory</span>
			<ul>
				<li><strong>MemoryBank (MB)</strong>: Builds a profile of a user based on conversation history, and uses the Ebbinghaus Forgetting Curve to reinforce memories by recency and importance.</li>
				<li><strong>A-MEM (AM)</strong>: Uses the Zettelkasten notetaking method to create knowledge networks, associating memories with each other.</li>
				<li><strong>HippoRAG (HR)</strong>: A RAG-based system that constructs knowledge graphs over entities and phrases, as well as concepts.</li>
				<li><strong>RMM (RM)</strong>: Reflective Memory Management: combines Prospective Reflection for summarization with Retrospective Reflection for retrieval.</li>
				<li><strong>RET-LLM (RL)</strong>: Monitors and updates its factual knowledge of the world in real-time.</li>
				<li><strong>LD-Agent (LD)</strong>: Uses persona modeling to build profiles of users and agents.</li>
			</ul>
		</li>
		<li>
			<span>Quadrant III: Contextual Memory</span>
			<ul>
				<li><strong>Prompt Cache (PC)</strong>: Precomputes frequently requested conversation history to save time.</li>
				<li><strong>Contextual Retrieval (CR)</strong>: Applies prompt caching to RAG to reduce the overhead of generating contextualized chunks.</li>
			</ul>
		</li>
		<li>
			<span>Quadrant IV: Identity Memory</span>
			<ul>
				<li><strong>Character-LLM (Ch)</strong>: Trains LLMs to role-play historical figures (such as Cleopatra) using records of their experiences.</li>
				<li><strong>AI-Native Memory (AN)</strong>: Argues that each person should have a personal LLM model (called LPM, or large personal model) as opposed to long text for memory.</li>
				<li><strong>MemoRAG (MR)</strong>: Compresses a user's entire body of knowledge into a parametric KV cache that the LLM uses to enhance a normal RAG query.</li>
				<li><strong>Echo (Ec)</strong>: An LLM fine-tuned to reason temporally, using primarily episodic data.</li>
			</ul>
		</li>
		<li>
			<span>Quadrant V: Working Memory</span>
			<ul>
				<li><strong>ReAct (RA)</strong>: Reasons by verifying thoughts with actions (searches, calculations), grounding the thoughts in reality.</li>
				<li><strong>Reflexion (Rx)</strong>: When it fails, it assesses the failure and reattempts using the assessment as additional context.</li>
			</ul>
		</li>
		<li>
			<span>Quadrant VI: Procedural Memory</span>
			<ul>
				<li><strong>Voyager (Vy)</strong>: Creates a reusable skill library over time based on external feedback.</li>
				<li><strong>Buffer of Thoughts (BT)</strong>: Stores thought patterns into a memory repository that it later recalls in order to enhance chain-of-thought reasoning.</li>
				<li><strong>Agent Workflow Memory (AW)</strong>: Chooses one of several reusable workflows to guide reasoning on a task based on the task's goals.</li>
				<li><strong>Think-in-Memory (TM)</strong>: Generates new thoughts after thinking (post-thinking) that it later recalls when relevant.</li>
				<li><strong>Retroformer (Rt)</strong>: Keeps reflections of failures as long-term memory that it uses as context for future queries.</li>
			</ul>
		</li>
		<li>
			<span>Quadrant VII: Attention Memory</span>
			<ul>
				<li><strong>vLLM (vL)</strong>: A high-efficiency serving system built on PagedAttention, a virtual-memory-inspired mechanism enabling flexible sharing across requests.</li>
				<li><strong>ChunkKV (CK)</strong>: Compresses the KV cache by grouping tokens into semantic chunks, keeping the most informative ones and enabling layer-wise index reuse.</li>
				<li><strong>LLM.int8() (L8)</strong>: Dynamically chooses how precisely to represent semantics internally to improve memory efficiency.</li>
				<li><strong>KV Cache (KV)</strong>: Stores attention keys and values generated during sequence generation so they can be reused in later inference steps.</li>
				<li><strong>RAGCache (RC)</strong>: A multilevel dynamic caching system for RAG that caches intermediate knowledge states and overlaps retrieval with inference.</li>
			</ul>
		</li>
		<li>
			<span>Quadrant VIII: Semantic Memory</span>
			<ul>
				<li><strong>MemoryLLM (ML)</strong>: A mechanism for editing a model directly with new knowledge so it integrates with old knowledge.</li>
				<li><strong>WISE (Wi)</strong>: Retains pretrained knowledge, but keeps an editable side memory model that the LLM can choose when relevant.</li>
			</ul>
		</li>
	</ol>
</details>

### The Types of Memory

They categorize memory into 8 categories:

1. **Conversational Memory**: Short-term conversational memory. This is what most people think of when they think of chatbots: chatbots are (now) pretty good at keeping up with the gist of a conversation and referring to things said earlier.
2. **Episodic Memory**: Long-term event-based memory. This includes past conversations, personalization, newly established facts, and anything time-related. Normally, this is where RAG systems live.
3. **Contextual Memory**: Loosely, the context of a current conversation. According to the paper, very little research has been done in this area; conversational context is generally tracked with words, not in model weights.
4. **Identity Memory**: A fuzzy mental model of who the AI is, who it interacts with, and facts about those people. Research here is focused around potentially modifying the AI weights themselves to encode new memories, beyond just fine-tuning or LoRA.
5. **Working Memory**: Steps in reasoning that help AI solve a current complex problem. This is basically chain of thought reasoning, where AI talks to itself to work through complexity.
6. **Procedural Memory**: Reflections of previously attempted problems that help AI to do better on future problems. This is like, reasoning after the reasoning, the idea being that AI can learn how to do logic better.
7. **Attention Memory**: A working space for what parts of the conversation are relevant. Most efforts here are performance-based, tricks used to optimize the internal working memory of the algorithm so it is cheaper and faster to run.
8. **Semantic Memory**: A fuzzy mental model of all the world's facts and how they relate to each other. For all intents and purposes, this _is_ what an AI model is. There is some research in making AI model weights dynamic so it can learn.

### Why is this important?

In my opinion, there are two reasons, the first practical and the second philosophical.

**Proper encoding and retrieval of memories helps ground the truth.** That AI hallucinates falsehoods or bad code is a very valid criticism. Besides simply misinforming people, an AI with a wrong model of the world can make some horribly bad decisions, in biology and medicine for example. All the research being poured into memory are indirectly tackling all the ways in which AI can hallucinate.

**Our sense of self is likely intertwined with our memories.** Part of who we are is rooted in the connected stream of events that we have witnessed and remember. LLMs don't have that, they don't normally have episodic memories, or if they do it behaves very different from ours. But what if we erode that difference? If we're worried about the ethics of AI consciousness, then monitoring strides in AI memory is vastly important.

> [!NOTE]
> I happen to be very interested in the potential for AI consciousness. Humanity hasn't been kind to animals, and I don't want a repeat to happen to future AI. See: [Moral Status of Digital Minds](/reading/moral-status-of-digital-minds/).

## An AI Memory Puzzle

Imagine that you have a database of facts. In this database, you have:

- The birthdays of 10,000 individuals.
- Documents for how these individuals are related to each other (family, friends, etc).
- Trips that these individuals have taken, or will take in the future.

It's a lot of data, but now we ask the AI:

> **Is my sister's birthday before or after my trip?**

If you were building an AI system, how would you solve this problem?

You can't just use naive RAG; a semantic search cannot isolate the specifically needed facts, resulting in forcing the AI to "find a needle in a haystack" and reason over hundreds of thousands of permutations.

I'll try to make a follow-up post this week, since while writing this article I realized RAG probably _does_ work for this exact problem, just not regular RAG. In other words, you probably don't need any of the alternative memory methods brought up in the AI memory survey discussed above.

