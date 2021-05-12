<point-compilation id="pats-problems" title="Pat's Problems" style="--point-compilation-color: #c5c6d7;">
  <ul slot="items">
    <li>What if Carol lives far away?</li>
    <li>What if Pat has many kinds of messages she wants to send?</li>
  </ul>
</point-compilation>

<point-compilation id="carols-problems" title="Carol's Problems" style="--point-compilation-color: #bb9d53;">
  <ul slot="items">
    <li>What if Carol only wants to listen to certain kinds of messages?</li>
    <li>Carol wants to save time by processing LOTS of messages in parallel.</li>
  </ul>
</point-compilation>

<point-compilation id="kirks-goals" title="Kirk's Goals" style="--point-compilation-color: #694937;">
  <ul slot="items">
    <li>Mediate messages between producers and consumers.</li>
    <li>Allow users to choose what topics matter to them.</li>
    <li>Facilitate scalability through parallel processing.</li>
  </ul>
</point-compilation>

<side-text>

**By the way**: This article is an adaptation from a presentation I gave while working on a data engineering project.

</side-text>

If you're working in a system that deals in either data or events, then you might have heard of this thing called **Kafka**.

There are already a myriad of articles describing Kafka, how it works, and how to use it. They do a splendid job explaining at both an abstract and technical level stuff you'd want to know about Kafka, so instead I'm going to take a more _narrative_ approach.

My goal is to create a mental model for _why_ Kafka is designed the way it is, with Topics and Paritions and Consumer Groups and whatnot, because understanding the _why_ is often more important than understanding the _how_ when it comes to designing system architecture.

## Messages

To start, meet Pat and Carol!

<article-image src="/assets/posts/meet-kafka/pat-and-carol.png" alt="Pat and Carol" caption="Pat and Carol" size="lg"></article-image>

Pat and Carol are friends who often exchange messages with each other. Let's say Pat has a message that she wants Carol to read. How can she get that message to Carol?

Well, one thing she might try is simply walk over to Carol and hand over the message in person.

<article-image src="/assets/posts/meet-kafka/pat-hands-message.png" alt="Pat hands message" caption="Pat hands the message directly to Carol" size="md"></article-image>

But unfortunately, that will not work! You see, Pat has a pressing problem.

<point-compilation-view using="pats-problems" highlight="0"></point-compilation-view>

Pat cannot just _walk_ over to Carol because she lives too far away. Instead, maybe she hand her message to a mediator of some sort, someone who would be responsible for ensuring Carol receives the message.

So, meet Kirk, the mail guy! His main job is to deliver messages between different people, kind of like so:

<slide-show width="960px" height="540px" mode="blink">
  <popout-image src="/assets/posts/meet-kafka/messages-01.png" alt="Message Example Slide 1"></popout-image>
  <popout-image src="/assets/posts/meet-kafka/messages-02.png" alt="Message Example Slide 2"></popout-image>
  <popout-image src="/assets/posts/meet-kafka/messages-03.png" alt="Message Example Slide 3"></popout-image>
  <popout-image src="/assets/posts/meet-kafka/messages-04.png" alt="Message Example Slide 4"></popout-image>
</slide-show>

Turns out, this is a useful way of thinking about what Kafka can do! In this analogy:

* Pat is a **producer**, a service that creates messages or events
* Carol is a **consumer**, a service that processes messages or events generated elsewhere in a system
* Kirk is **Kafka**, facilitating the flow of events from producers to consumers

As we continue the analogy, we can learn a lot about Kafka by enumerating Kirk's _goals_.

<point-compilation-view using="kirks-goals" highlight="0"></point-compilation-view>

## What is Kafka?

Before we go deeper into Analogyland, let's take a quick step back and consider what Kafka really _is_ technologically.

Funnily enough, depending on what you read, you may get seemingly different definitions. At the time I wrote this:

* Wikipedia calls Kafka a <q cite="https://en.wikipedia.org/wiki/Apache_Kafka">software bus using stream processing</q>
* AWS says Kafka is a <q cite="https://aws.amazon.com/msk/what-is-kafka/">distributed data store</q> for streaming in real-time
* And Apache (the creators) calls it an <q cite="https://kafka.apache.org/">event streaming platform</q>

The key words here are **event**, **store**, and **stream**. In a software system, when an event happens, Kafka stores the event and streams it to consumers that care about that event.

Keep **event**, **store**, and **stream** in mind as we explore Kafka deeper. Those three key words will help illustrate why Kafka works the way it does!

## Topics

Ok, let's get back to Pat and Carol! Let's say Pat now has two different kinds of messages. Casual messages are for her friends to read, and Business messages are for her coworkers.

<point-compilation-view using="pats-problems" highlight="1"></point-compilation-view>

Meanwhile, Carol is just Pat's friend, not a coworker; therefore, Carol only cares about the casual messages.

<point-compilation-view using="carols-problems" highlight="0"></point-compilation-view>

And to make this more complicated, Pat's messages may not be addressed to any particular person. Rather, her casual messages could be read by any of her friends, and likewise the business messages could be read by any of her coworkers.

This seems to make Kirk's job as the mediator a bit more complicated! If Kirk is going to deliver casual messages to Pat's friends, does this mean Kirk now has to know who Pat's friends are?

Or, maybe that means Pat has to now address each of her letters to the individuals meant to receive them. However, while she may know who all her friends are, maybe she does not know who all her coworkers are! After all, Pat works for a big company who gets new employees quite often.

* Kirk does not want to force himself to know who all of Pat's friends are.
* Pat does not want to force herself to know who all her coworkers are.

That's fine! Kirk has a clever idea.

He can set up _mailboxes_ for different kinds of messages! Casual messages will go into the Casual mailbox, and Business messages will go into the Business mailbox. Carol can then _subscribe_ to only the Casual mailbox and therefore only receive casual messages.

<slide-show width="960px" height="540px" mode="blink">
  <popout-image src="/assets/posts/meet-kafka/topics-01.png" alt="Topics Example Slide 1"></popout-image>
  <popout-image src="/assets/posts/meet-kafka/topics-02.png" alt="Topics Example Slide 2"></popout-image>
  <popout-image src="/assets/posts/meet-kafka/topics-03.png" alt="Topics Example Slide 3"></popout-image>
  <popout-image src="/assets/posts/meet-kafka/topics-04.png" alt="Topics Example Slide 4"></popout-image>
  <popout-image src="/assets/posts/meet-kafka/topics-05.png" alt="Topics Example Slide 5"></popout-image>
</slide-show>

Notice what this mailbox strategy accomplishes:

* Kirk does not need to know who is consuming the messages, which is quite a bit simpler for him.
* Pat only needs to publish her messages to the correct mailboxes and doesn't have to worry about every individual person consuming her messages.
* In fact, Carol does not technically even need to know who originally published the message! Maybe Pat, Carol, and the rest of their friends can all share the same Casual box amongst themselves.

<side-text success>

A key insight is that messages are **stored** in the topics for a while so that different consumers can read the same message. Later when we talk about consumer groups, we will explore this storage concept further.

</side-text>

In Kafka's world, these "mailboxes" are called **topics**. Each topic is essentially an event stream; one topic could be used for customer purchases, a different topic for account creations, and so forth.

TODO REDO THE PARAGRAPHS HERE
A big benefit of topics is that it facilitates the _decoupling_ of the producers and consumers from each other and from Kafka. Software systems must evolve all the time to meet the ever-shifting demands of the market; systems where the producers have to know their consumers or vice versa are very troublesome to evolve.

Imagine if every time a company introduces a new app with which customers could make purchases that every single downstream system had to accomodate that app. It would be a nightmare! Kafka and topics help avoid

<point-compilation-view using="kirks-goals" highlight="1"></point-compilation-view>

TODO Diagram of Kafka and TOpics

## Partitions

Ok, time to create a _pretty weird_ problem for Kirk. Let's say Carol has somehow learned how to clone herself...

TODO PIC OF MANY CAROLS

<point-compilation-view using="carols-problems" highlight="1"></point-compilation-view>

Team Carol wants to save time by reading multiple messages simultaneously, rather than always one at a time. This poses an interesting dilemma for Kirk and his topic pattern. The topics are designed so that multiple consumers can read the same messages from the same topics. In other words, if Pat publishes a message to the Casual topic, then all of her friends can read that message.

That's a problem if there are multiple Carols, because it means each individual Carol will read the same messages. That defeats the purpose of Carol cloning herself: the goal was to save time by _collectively_ reading all the messages rather than _each individual_ Carol reading each message.

<side-text>

To further illustrate, imagine there are three members on Team Carol. Now, let's say Pat publishes three messages to Kirk. Ideally, each member of Team Carol will read exactly one message; by doing so, they will have collectively read all the messages in just one-third the time. Pretty efficient!

Unfortunately, unless something about the topic model changes, what will actually happen is each Carol will read all three messages. That's a lot of wasted time.

</side-text>

This might sound like Carol's own problem, but actually there's a klever trick Kirk can do to help!

Kirk will actually divide the topic into mini-mailboxes. Each member of Team Carol can then be put in charge of one or more of the mini-mailboxes. When messages enter the topic, they can be divided into the mini-mailboxes so that the work is effectively divided as evenly as possible across the different consumers.

As you might have guessed, these "mini-mailboxes" are what Kafka calls **partitions**.

TODO PIC OF PARTIONS

So in this illustration, three events enter the Casual Topic, but are divided evenly across three partitions. Since each Carol is responsible for one partition, each message will be read exactly once, and in parallel.

Partitions are one of Kafka's main mechanisms for facilitating parallel processing, which can dramatically improve the performance of high-throughput architectures.

<point-compilation-view using="kirks-goals" highlight="2"></point-compilation-view>

### Are Partitions Necessary?

When I was first reading about Kafka partitions, it felt like a somewhat convulted and perplexing solution to the parallel processing problem. Why doesn't Kafka just stuff all the messages into the topic and distribute the messages evenly to the consumers?

TODO PIC OF YELLOW BLUE ENVELOPE THING

Recall one of our key words: each envelope is an **event**. Events are _ordered_, and that order matters. If I make a purchase and then cancel my purchase, it doesn't make sense for the system to first process the cancellation and then process the purchase; it would be backwards!

Looking at the illustration above, we have two envelopes:

* The blue envelope was published first
* The yellow envelope was published second

It may seem like the blue envelope will in fact get delivered to one of the Carol's first. Unfortunately, in software that can't be guaranteed. There are a number of reasons why the blue envelope might get delayed in transit, and if it gets delayed at all, there's a chance the yellow event will get delivered before blue.

The fundamental insight is this:

<major-point>

To _guarantee_ ordering, a partition can only serve _exactly one_ consumer.

</major-point>

As soon as a partion serves more than one consumer, there's a chance messages can get out of order. Therefore, Kafka allows for multiple partions so that there can be multiple consumers, at most one consumer per partion.

Some key points from this:

* There cannot be more consumers than partitions, meaning that the number of partitions should be chosen carefully to facilitate the desired parallelism. Do note that there can be more partitions than consumers though, since a consumer can pull from multiple partitions without breaking ordering constraints.
* Order is only guaranteed _within_ a partion, and not across partitions! This means it is important how the events are partitioned as well: any updates I make to an order I placed should go into one partition, but a different person's order updates can go to a different partition since our orders are independent of each other.

### Replicas

Let's say Kirk decides to clone himself using Carol's machine so that each Kirk can be put in charge of one partition.

TODO PIC OF PARTITION MODEL IN RAINBOW MODE OR WHATEVER

Now that we have Team Kirk and Team Carol, work can truly be done in parallel! But there's a potential problem here. What would happen if one of the Kirk's, say the bottommost, gets fired from his job? He was in charge of the bottom blue partition, which was being read by one of the members of Team Carol. If he is no longer managing that partition, then what happens to all the messages going to that partition?

<side-text danger>

As someone whose worked in various products, I can tell you that servers just stop _all the time_, sometimes for seemingly no reason. Fault tolerance is one of our key concerns as software engineers; even in the face of downtime, things should either continue working or recover quickly and safely.

</side-text>

TODO PIC OF KIRK CRASHING

Making each partition the responsibility of just one Kirk feels kind of like putting all his eggs in once basket. So perhaps the natural solution is for 


## Consumer Groups



## Resources