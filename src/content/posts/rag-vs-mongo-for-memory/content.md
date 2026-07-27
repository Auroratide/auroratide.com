---
id: rag-vs-mongo-for-memory
title: "Brief Exploration of RAG vs Mongo for Memory"
category: Artificial Intelligence
tags:
  - rag
  - mongo
  - sql
  - memory
  - ollama
  - tools
  - reasoning
icon: database
color: red
summary: "I explore how AI can answer the question brought up last week, \"Is my sister's birthday before or after my trip?\""
longSummary: "I explore how AI can answer the question brought up last week, \"Is my sister's birthday before or after my trip?\" At first I tried simply using a multi-step RAG process, but then tried allowing AI to generate its own query code and structure its own database."
publishedAt: 2026-07-27T12:00:00.000Z
createdAt: 2026-07-27T12:00:00.000Z
---

Last week, [I brought up a bit of an AI memory puzzle](/posts/categorizing-ai-memory/#an-ai-memory-puzzle).

Imagine, for a moment, that you have a sister, and that you're taking a trip somewhere soon. Now consider the following exceptionally simple question you could ask:

> Is my sister's birthday before or after my trip?

Except, it's _not_ simple. There's a lot going on here!

1. "My" needs to get resolved to who the speaker is.
2. We're not actually talking about the speaker; we're talking about their sister.
3. The first fact we need is the birthday.
4. Wait, we _are_ talking about the speaker, specifically a trip they're taking.
5. We need not just any trip, but one that is upcoming.
6. And when we compare dates, we shouldn't use the sister's _actual_ birthday, but rather the anniversary of that birthday this year.

This got me thinking about the problem of getting AI systems to answer this kind of question reliably. This sort of fuzzy reasoning and memory recall sounds like the kind of thing LLMs were built to be good at.

For now, I want to focus on the approach to **memory**. That is, how do you get the AI to recall the correct facts? After all, your sister's birthday is (very hopefully) _not_ in the AI's training data, so how we make an agent that can recall that specific date out of thousands of possibilities?

<major-point>

How do we teach AI to remember?

</major-point>

I tried two different approaches.

> [!CAUTION]
> Both approaches below ultimately get **step 6** wrong in that they think about the dates incorrectly. For this experiment, my focus was on memory retrieval, so I haven't tried solving that problem in earnest yet.

## Multistep RAG

<abbr>RAG</abbr> (Retrieval-Augmented Generation) is often tied together with long-term memory in LLMs. It is a technique used to help AI remember relevant facts before responding to a user's query.

For example, if I asked you, "What do cuttlefish eat?", you shouldn't try to guess off the top of your head. The better approach would be to search the Wikipedia page for Cuttlefish, find what it eats, and only then respond.

Searching Wikipedia first helps you be _factual_ and _grounded_.

The AI does the same thing:

1. Use the question to find relevant documents in its memory.
2. Stick only those documents into its context (short-term memory).
3. Use the facts in the documents to generate a grounded answer.

### Why "Multistep"?

RAG works based on similarity. If I ask it to find all documents similar to "my sister's birthday", well, a lot of documents might come up. You will get lots of things mentioning "sister", every document with "birthday", and so on. That's too many irrelevant documents!

You have to split it up into its **component questions**:

1. Who is Florenne's sister? This should find the one document containing the User's name and the concept of either sibling or sister. Let's say it finds that the sister's name is Rebecca.
2. When is Rebecca's birthday? Now this will specifically find the birthday document with Rebecca's name in it.

To code up an agent to do this, I used a combination of a system prompt instructing the LLM how to break things down, along with code that loops through multiple steps.

```python
response = client.chat(model=model, messages=messages, tools=search_tools)
steps = 0

# Keep going until the AI no longer wants to keep invoking tools
while response.message.tool_calls and steps < max_steps:
  messages.append({
    "role": "assistant",
    "content": response.message.content or "",
    "tool_calls": response.message.tool_calls
  })

  for call in response.message.tool_calls:
    steps += 1
    tool_result = run_search(**call.function.arguments)
    messages.append({"role": "tool", "content": tool_result, "name": call.function.name})

  response = client.chat(model=model, messages=messages, tools=search_tools)
```

And a snippet of the system prompt:

```text
Search matches meaning, not structure, so a single search rarely produces a
whole answer. Work in steps, and let each result decide the next search:

1. Identify the smallest single fact you need first. Search for that alone.
2. Read what comes back. Notes name people in full, so a result usually
   hands you a name or a detail you did not have before.
3. Write the next search using what you just learned. Repeat until you can
   answer.
```

### Example Output

Here, I used the multistep RAG approach to answer the question.

The AI (Qwen 3 14b in this case) actually broke down the question into the right parts, and looped until it had everything it needed. However, its final answer referenced the wrong trip at first (as the current date was in July 2026).

Also, it is worth noting that sometimes the RAG approach will pull useless data because the text happens to be similar enough.

```text
You: Hello, my name is Florenne Trigg.
Assistant: Hello, Florenne Trigg. How can I assist you today?

You: Is my sister's birthday before or after my trip?

> Invoking RAG tool: When is Florenne Trigg's sister's birthday?
> Searching for: Who is Florenne Trigg's sister?
> FOUND:
> - Candesse Trigg and Florenne Trigg are siblings. Candesse Trigg is a
    sibling of Florenne Trigg. Florenne Trigg is a sibling of Candesse Trigg.

> Searching for: What is Candesse Trigg's birthday?
> FOUND:
> - Candesse Trigg is female. Candesse Trigg's birthday is September 7.
    Candesse Trigg was born on September 7, 1999.

> Invoking RAG tool: When is Florenne Trigg's trip?
> Searching for: When is Florenne Trigg's trip?
> FOUND:
> - Florenne Trigg will take a trip to Outer Ward. The trip to Outer Ward
    starts on November 14, 2025 and ends on November 20, 2025.
> - Parie Ellis and Florenne Trigg will take a trip to Central Academy.
    The trip to Central Academy starts on August 7, 2026 and ends on August
    17, 2026.

Assistant: The birthday of your sister, Candesse Trigg, is on **September 7**
(in 2026, as we’re currently in 2026). The trip to Outer Ward occurred in
**November 2025**, which is earlier in the year. Therefore, your sister’s
birthday is **after** that trip. 

There is also a mention of a trip to Central Academy with Parie Ellis in
**August 2026**, which would be **before** your sister’s birthday in September
2026. However, the closest-matching trip in the notes is the one in November
2025.
```


## Structured Data

Instead of RAG, there's an argument to be made that the data in question is **structured** and should not be represented with loosely written sentences. Rather than a document like "Candesse Trigg is female. Candesse Trigg's birthday is September 7," which squishes too many semantic concepts together, it would have been better to think of people more deterministically:

- Candesse
  - Birthday: 07 September 1999
  - Gender: Female
- Florenne
  - Birthday: 07 October 2002
  - Gender: Female

Traditionally, databases have been structured as giant tables of data, where each column represents a discrete concept. Tables can reference each other, allowing us to form relationships across concepts.

When the data is structured, it becomes trivially easy to ask the database for what's in it. For example, this somewhat readable SQL code will give me Candesse's birthday:

```sql
SELECT birthday FROM people WHERE name = 'Candesse';
```

### AI can write code

AI can write code now. Therefore, it can create code on the fly to ask the database for specific pieces of information! In other words, AI is capable of turning "When is Candesse's birthday" into code, and when looped as a multistep process like before, it can gradually find all the pieces of data it needs.

> [!NOTE]
> In my example, I actually used Mongo (NoSQL) because I was contemplating ways to allow the AI to evolve the schema over time without dedicated table changes needed.

```python
def query_tools(self):
  return [ {
    "type": "function",
    "function": {
      "name": "run_query",
      "description": "Run a MongoDB find() filter against a collection",
      "parameters": {
        "type": "object",
        "properties": {
          "collection": {"type": "string"},
          "filter": {"type": "object"},
        },
        "required": ["collection", "filter"],
      },
    },
  } ]

def run_query(self, collection: str, filter: dict, limit: int = 20):
  db = mongo["mem"]

  docs = list(db[collection].find(filter).limit(limit))
  return json.dumps(docs, default=_json_default, ensure_ascii=False)
```

### But how do you know what structure to use?

At the moment, I simply have the schema of the database loaded into the tool's **system prompt**. That is, I've told it exactly what kind of data exists and how it is stored, but NOT how to find the correct data. That's the LLM's job.

My idea is that since AI can write its own code, it can also evolve its own schema over time. If you give it a new kind of fact, such as "Florenne's favorite color is blue", then it should evolve what a person's data looks like to include favorite color.


### Example Output

The AI builds the query one step at a time until it collects all the information it needs. In the end, it was struggling with the date comparison because the data includes the year. I think the fix for this is to either use a more powerful model, or to include a more generally math-accurate tool it can invoke.

```text
You: Hello, my name is Florenne Trigg.
Assistant: Hello, Florenne Trigg. How can I assist you today?

You: Is my sister's birthday before or after my trip?

> Invoking MONGO tool: When is Florenne Trigg's sister's birthday?
> Collection: people; filter: {'name': 'Florenne Trigg'}
> FOUND:
> - {"_id": "florenne-trigg", "name": "Florenne Trigg", "gender": "female", "birthday": "2002-10-07"}
> Collection: relationships; filter: {'person_a_id': 'florenne-trigg', 'type': 'sibling_of'}
> No results.
> Collection: relationships; filter: {'person_b_id': 'florenne-trigg', 'type': 'sibling_of'}
> FOUND:
> - {"person_a_id": "candesse-trigg", "type": "sibling_of", "person_b_id": "florenne-trigg"}
> Collection: people; filter: {'name': 'Candesse Trigg'}
> FOUND:
> - {"_id": "candesse-trigg", "name": "Candesse Trigg", "gender": "female", "birthday": "1999-09-07"}

> Invoking MONGO tool: When is Florenne Trigg's trip?
> Collection: people; filter: {'name': 'Florenne Trigg'}
> FOUND:
> - {"_id": "florenne-trigg", "name": "Florenne Trigg", "gender": "female", "birthday": "2002-10-07"}
> Collection: trips; filter: {'people_ids': 'florenne-trigg'}
> FOUND:
> - {"people_ids": ["parie-ellis", "florenne-trigg"], "where": "Central Academy", "start": "2026-08-07", "end": "2026-08-17"}
> - {"people_ids": ["florenne-trigg"], "where": "Outer Ward", "start": "2025-11-14", "end": "2025-11-20"}

Assistant: The birthday of your sister, Candesse Trigg (**1999-09-07**), is **before** both of your trips:  
- **Outer Ward** (November 14–20, 2025)  
- **Central Academy** (August 7–17, 2026)  

Let me know if you need further clarification!
```

## Which approach is better?

I have not yet evaluated this objectively, if there even is an objective way to do so.

But having played with each, my hypothesis is as follows:

**Multistep RAG** actually works surprisingly well and is conceptually easier to understand and evolve. However, it is more prone to false retrieval, either finding too many irrelevant documents or failing to find relevant ones due to not being written flexibly enough.

**Structured Data** is more deterministic and will only find the data you are looking for. However, I'm hesitant on AI's ability to manage and evolve its own schema; seems like a good way to create a cluttered memory that manages to store data, but is impossible to query. Well, at least for locally runnable models.