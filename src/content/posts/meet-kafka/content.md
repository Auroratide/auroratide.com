---
id: meet-kafka
title: "Meet Kafka"
category: Software Engineering
tags:
  - kafka
  - data engineering
  - presentation
  - architecture
icon: kafka
color: yellow
summary: "Kafka is a piece of technology that facilitates event-driven architectures. Let's see how it works through the eyes of Pat, Carol, and Kirk!"
longSummary: "If you've worked with event-driven architectures, you might have heard of this thing called Kafka. Let's explore how Kafka uses topics, partitions, and consumer groups to facilitate events between producers and consumers, through the narrative of Pat, Carol, and Kirk!"
publishedAt: 2019-10-07T12:00:00.000Z
createdAt: 2019-10-07T12:00:00.000Z
---

<style>
	#pats-problems, [using="pats-problems"] { --t-primary-a: #c5c6d7; }
	#carols-problems, [using="carols-problems"] { --t-primary-a: #bb9d53; }
	#carols-and-cathys-problems, [using="carols-and-cathys-problems"] { --t-primary-a: #578edf; }
	#kirks-goals, [using="kirks-goals"] { --t-primary-a: #694937; }
	#kafkas-goals, [using="kafkas-goals"] { --t-primary-a: #333333; }
</style>

<point-compilation id="pats-problems" style="--point-compilation-color: #c5c6d7;" hidden>
	<span slot="title">Pat's Problems</span>
	<ul slot="items">
		<li>What if Carol lives far away?</li>
		<li>What if Pat has many kinds of messages she wants to send?</li>
	</ul>
	<img slot="image" src="./pat.png" alt="Pat" />
</point-compilation>

<point-compilation id="carols-problems" hidden>
	<span slot="title">Carol's Problems</span>
	<ul slot="items">
		<li>What if Carol only wants to listen to certain kinds of messages?</li>
		<li>Carol wants to save time by processing LOTS of messages in parallel.</li>
	</ul>
	<img slot="image" src="./carol.png" alt="Carol" />
</point-compilation>

<point-compilation id="kirks-goals" hidden>
	<span slot="title">Kirk's Goals</span>
	<ul slot="items">
		<li>Mediate messages between producers and consumers.</li>
		<li>Allow users to choose what topics matter to them.</li>
		<li>Facilitate scalability through parallel processing.</li>
		<li>Continue service even in the face of failures and downtime.</li>
		<li>Support multiple ways of consuming data.</li>
	</ul>
	<img slot="image" src="./kirk.png" alt="Kirk" />
</point-compilation>

> [!NOTE]
> **By the way**: This article is an adaptation from a presentation I gave while working on a data engineering project.

If you're working in a system that deals in either data or events, then you might have heard of this thing called **Kafka**.

There are already a myriad of articles describing Kafka, how it works, and how to use it. They do a splendid job explaining at both an abstract and technical level stuff you'd want to know about Kafka, so instead I'm going to take a more _narrative_ approach.

My goal is to create a mental model for _why_ Kafka is designed the way it is, with Topics and Paritions and Consumer Groups and whatnot, because understanding the _why_ is often more important than understanding the _how_ when it comes to designing system architecture.

## Messages

To start, meet Pat and Carol!

<figure class="h-15">
	<img-zoom>
		<img src="./pat-and-carol.png" alt="Pat has a black hat, and Carol has a flower bow." loading="lazy" width="512" height="271" />
	</img-zoom>
	<figcaption>Pat and Carol</figcaption>
</figure>

Pat and Carol are friends who often exchange messages with each other. Let's say Pat has a message that she wants Carol to read. How can she get that message to Carol?

Well, one thing she might try is simply walk over to Carol and hand over the message in person.

<figure class="h-10">
	<img-zoom>
		<img src="./pat-hands-message.png" alt="Pat hands an envelope to Carol" loading="lazy" width="480" height="224" />
	</img-zoom>
	<figcaption>Pat hands the message directly to Carol</figcaption>
</figure>

But unfortunately, that will not work! You see, Pat has a pressing problem.

<point-compilation using="pats-problems" highlight="0"></point-compilation>

Pat cannot just _walk_ over to Carol because she lives too far away. Instead, maybe she hands her message to a mediator of some sort, someone who would be responsible for ensuring Carol receives the message.

So, meet Kirk, the mail guy! His main job is to deliver messages between different people, kind of like so:

<slide-show style="max-width: 960px; --slide-show-transition-duration: 0s;">
	<img slot="slide" src="./messages-01.png" alt="Pat says, 'Hey Kirk here's a message!'" />
	<img slot="slide" src="./messages-02.png" alt="Kirk says, 'Thanks Pat, I'll hold onto this.'" />
	<img slot="slide" src="./messages-03.png" alt="Carol asks, 'Hey Kirk, got a message for me yet?'" />
	<img slot="slide" src="./messages-04.png" alt="Kirk replies, 'Sure do! Here's a copy.'" />
</slide-show>

Turns out, this is a useful way of thinking about what Kafka can do! In this analogy:

* Pat is a **producer**, a service that creates messages or events
* Carol is a **consumer**, a service that processes messages or events generated elsewhere in a system
* Kirk is **Kafka**, facilitating the flow of events from producers to consumers

As we continue the analogy, we can learn a lot about Kafka by enumerating Kirk's _goals_.

<point-compilation using="kirks-goals" highlight="0"></point-compilation>

## What is Kafka?

Before we go deeper into Analogyland, let's take a quick step back and consider what Kafka really _is_ technologically.

Funnily enough, depending on what you read, you may rather diverse definitions. At the time I wrote this:

* Wikipedia calls Kafka a <q cite="https://en.wikipedia.org/wiki/Apache_Kafka">software bus using stream processing</q>
* AWS says Kafka is a <q cite="https://aws.amazon.com/msk/what-is-kafka/">distributed data store</q> for streaming in real-time
* And Apache (the creators) calls it an <q cite="https://kafka.apache.org/">event streaming platform</q>

The key words here are **event**, **store**, and **stream**. In a software system, when an event happens, Kafka stores the event and streams it to consumers that care about that event.

Keep **event**, **store**, and **stream** in mind as we explore Kafka deeper. Those three key words will help illustrate why Kafka works the way it does!

## Topics

Ok, let's get back to Pat and Carol! Let's say Pat now has two different kinds of messages. Casual messages are for her friends to read, and Business messages are for her coworkers.

<point-compilation using="pats-problems" highlight="1"></point-compilation>

Meanwhile, Carol is just Pat's friend, not a coworker; therefore, Carol only cares about the casual messages.

<point-compilation using="carols-problems" highlight="0"></point-compilation>

And to make this more complicated, Pat's messages may not be addressed to any particular person. Rather, her casual messages could be read by _any_ of her friends, and likewise the business messages could be read by _any_ of her coworkers.

This seems to make Kirk's job as the mediator a bit more complicated! If Kirk is going to deliver casual messages to Pat's friends, does this mean Kirk now has to know who Pat's friends are?

Or, maybe that means Pat has to now address each of her letters to the individuals meant to receive them. However, while she may know who all her friends are, maybe she does not know who all her coworkers are! After all, Pat works for a big company who gets new employees quite often.

* Kirk does not want to force himself to know who all of Pat's friends are.
* Pat does not want to force herself to know who all her coworkers are.

That's fine! Kirk has a clever idea.

He can set up _mailboxes_ for different kinds of messages! Casual messages will go into the Casual mailbox, and Business messages will go into the Business mailbox. Carol can then _subscribe_ to only the Casual mailbox and therefore only receive casual messages.

<slide-show style="max-width: 960px; --slide-show-transition-duration: 0s;">
	<img slot="slide" src="./topics-01.png" alt="Pat says, 'Hey Kirk, here's some messages!' One envelope is white, and the other is pink." />
	<img slot="slide" src="./topics-02.png" alt="Kirk is confused." />
	<img slot="slide" src="./topics-03.png" alt="Two boxes appear below Kirk. One is white, and the other is pink." />
	<img slot="slide" src="./topics-04.png" alt="The white message goes into the white box, and the pink messages go into the pink box." />
	<img slot="slide" src="./topics-05.png" alt="Carol accepts a message from the white box." />
</slide-show>

Notice what this mailbox strategy accomplishes:

* Kirk does not need to know who is consuming the messages, which is quite a bit simpler for him.
* Pat only needs to publish her messages to the correct mailboxes and doesn't have to worry about every individual person consuming her messages.
* In fact, Carol does not technically even need to know who originally published the message! Maybe Pat, Carol, and the rest of their friends can all share the same Casual box amongst themselves.

> [!IMPORTANT]
> A key insight is that messages are **stored** in the topics for a while so that different consumers can read the same message. Later when we talk about consumer groups, we will explore this storage concept further.

In Kafka's world, these "mailboxes" are called **topics**. Each topic is essentially an event stream; one topic could be used for customer purchases, a different topic for account creations, and so forth.

Rather than talk to the producers directly, consumers **subscribe** to topics in order to process the events within them. A big benefit of this model is that it facilitates the _decoupling_ of the producers and consumers. Since the communication happens via Kafka, the mediator, producers and consumers can evolve independently, and new producers and consumers can be introduced to the system without requiring direct modification of any other system.

<point-compilation using="kirks-goals" highlight="1"></point-compilation>

<figure class="h-15">
	<img-zoom>
		<img src="./topics-diagram.png" alt="Pat is a producer, Kirk is Kafka, and Carol is a consumer. Boxes underneath Kirk represent topics." loading="lazy" width="960" height="540" />
	</img-zoom>
	<figcaption>Diagram of topics in Kafka</figcaption>
</figure>

## Partitions

Ok, time to create a _pretty weird_ problem for Kirk. Let's say Carol has somehow learned how to clone herself...

<figure class="h-15">
	<img-zoom>
		<img src="./many-carols.png" alt="There are five Carols now, and Kirk is visibly shocked." loading="lazy" width="960" height="540" />
	</img-zoom>
	<figcaption>What will Kirk do now?</figcaption>
</figure>

<point-compilation using="carols-problems" highlight="1"></point-compilation>

Team Carol wants to save time by reading multiple messages simultaneously, rather than always one at a time. This poses an interesting dilemma for Kirk and his topic pattern. The topics are designed so that multiple consumers can read the same messages from the same topics. In other words, if Pat publishes a message to the Casual topic, then all of her friends can read that message.

That's a problem if there are multiple Carols, because it means each individual Carol will read the same messages. That defeats the purpose of Carol cloning herself: the goal was to save time by _collectively_ reading all the messages rather than _each individual_ Carol reading each message.

> [!NOTE]
> To further illustrate, imagine there are three members on Team Carol. Now, let's say Pat publishes three messages to Kirk. Ideally, each member of Team Carol will read exactly one message; by doing so, they will have collectively read all the messages in just one-third the time. Pretty efficient!
> 
> Unfortunately, unless something about the topic model changes, what will actually happen is each Carol will read all three messages. That's a lot of wasted time.

This might sound like Carol's own problem, but actually there's a clever trick Kirk can do to help!

Kirk will actually divide the topic into mini-mailboxes. Each member of Team Carol can then be put in charge of one or more of the mini-mailboxes. When messages enter the topic, they can be distributed into the mini-mailboxes so that the work is effectively divided as evenly as possible across the different consumers.

As you might have guessed, these "mini-mailboxes" are what Kafka calls **partitions**.

<slide-show style="max-width: 960px; --slide-show-transition-duration: 0s;">
	<img slot="slide" src="./partitions-01.png" alt="Kirk is on the left with three Carols on the right. Between them is a white box labeled 'Casual Topic'." />
	<img slot="slide" src="./partitions-02.png" alt="The white box now contains three smaller boxes, with each box pointing to one of the three Carols." />
	<img slot="slide" src="./partitions-03.png" alt="Kirk puts his three messages into the casual topic, with one message going into each of the three inner-boxes." />
</slide-show>

So in this illustration, three events enter the Casual Topic, but are divided evenly across three partitions. Since each Carol is responsible for one partition, each message will be read exactly once, and in parallel.

Partitions are one of Kafka's main mechanisms for facilitating parallel processing, which can dramatically improve the performance of high-throughput architectures.

<point-compilation using="kirks-goals" highlight="2"></point-compilation>

### Are Partitions Necessary?

When I was first reading about Kafka partitions, it felt like a somewhat convulted and perplexing solution to the parallel processing problem. Why doesn't Kafka just stuff all the messages into the topic and distribute the messages evenly to the consumers?

<figure class="h-15">
	<img-zoom>
		<img src="./no-partitions.png" alt="A white box delivers messages to three Carols. The box currently contains a blue message in front, followed by a yellow image." loading="lazy" width="960" height="540" />
	</img-zoom>
	<figcaption>Without partitions, the yellow event may be delivered before the blue event.</figcaption>
</figure>

Recall one of our key words: each envelope is an **event**. Events are _ordered_, and that order matters. If I make a purchase and then cancel my purchase, it doesn't make sense for the system to first process the cancellation and then process the purchase; it would be backwards!

Looking at the illustration above, we have two envelopes:

* The blue envelope was published first
* The yellow envelope was published second

It may seem like the blue envelope will in fact get delivered to one of the Carol's first. Unfortunately, in software that can't be guaranteed. There are a number of reasons why the blue envelope might get delayed in transit, and if it gets delayed at all, there's a chance the yellow event will get delivered before blue.

The fundamental insight is this:

<major-point>
	To <em>guarantee</em> ordering, a partition can only serve <em>exactly one</em> consumer.
</major-point>

As soon as a partion serves more than one consumer, there's a chance messages can get out of order. Therefore, Kafka allows for multiple partions so that there can be multiple consumers, at most one consumer per partion.

Some key points from this:

* There cannot be more consumers than partitions, meaning that the number of partitions should be chosen carefully to facilitate the desired parallelism. Do note that there can be more partitions than consumers though, since a consumer can pull from multiple partitions without breaking ordering constraints.
* Order is only guaranteed _within_ a partion, and not across partitions! This means it is important how the events are partitioned as well. For example, any updates I make to an order I placed should go into one partition, but a different person's order updates can go to a different partition since our orders are independent of each other.

### Replicas

Let's say Kirk decides to clone himself using Carol's machine so that each Kirk can be put in charge of one partition.

<figure class="h-15">
	<img-zoom>
		<img src="./no-replicas.png" alt="Three Kirks are on the left, and three Carols on the right. In between is a topic divided into three partitions, colored red, green, and blue." loading="lazy" width="960" height="540" />
	</img-zoom>
	<figcaption>Each Kirk is responsible for one partition</figcaption>
</figure>

Now that we have Team Kirk and Team Carol, work can truly be done in parallel! But there's a potential problem here. What would happen if one of the Kirk's, say the bottommost, gets sick and can no longer do his job? He was in charge of the bottom blue partition, which was being read by one of the members of Team Carol. If he is no longer managing that partition, then what happens to all the messages going to that partition?

> [!CAUTION]
> As someone who has worked in various products, I can tell you that servers just stop _all the time_, sometimes for seemingly no reason. Fault tolerance is one of our key concerns as software engineers; even in the face of downtime, things should either continue working or recover quickly and safely.

<figure class="h-15">
	<img-zoom>
		<img src="./kirk-crashes.png" alt="The bottommost Kirk is gone, with a red X drawn across the blue partition. The Carol who was reading from the blue partition is confused." loading="lazy" width="960" height="540" />
	</img-zoom>
	<figcaption>Uh oh! One of the Kirks was fired!</figcaption>
</figure>

Well, nobody said a partition _must_ be handled by only one Kirk. What if instead each partition could be owned by more than one Kirk? One Kirk would have the main responsibility over that partition, but another could serve as a backup in the worst case scenario!

<figure class="h-15">
	<img-zoom>
		<img src="./with-replicas.png" alt="The bottommost Kirk is gone, but this time, a small version of the blue partition is underneath the green partition. The bottommost Carol receives messages from the small blue partition." loading="lazy" width="960" height="540" />
	</img-zoom>
	<figcaption>If one Kirk vanishes, a different Kirk can take over.</figcaption>
</figure>

Here, the blue (bottommost) partition has a **replica** belonging to the middle Kirk. Replicas are Kafka's solution to resiliency and fault tolerance; even if one Kafka instance shuts down, other instances can take over the data streams without affecting the producers or consumers. They serve as backups to partitions, distributed across different Kafka servers (called **brokers**).

<point-compilation using="kirks-goals" highlight="3"></point-compilation>

<figure class="h-15">
	<img-zoom>
		<img src="./replicas.png" alt="A topic is divided into partitions. Smaller partitions under the main ones represent replicas." loading="lazy" width="960" height="540" />
	</img-zoom>
	<figcaption>Partitions and replicas in Kafka</figcaption>
</figure>

## Consumer Groups

Well, looks like Pat just got a new coworker! Meet Cathy.

<figure class="h-10">
	<img-zoom>
		<img src="./cathy.png" alt="Cathy, who has long blue hair." loading="lazy" width="400" height="460" />
	</img-zoom>
	<figcaption>This is Cathy!</figcaption>
</figure>

<point-compilation id="carols-and-cathys-problems" highlight="2">
	<span slot="title">Carol's and Cathy's Problems</span>
	<ul slot="items">
		<li>What if Carol only wants to listen to certain kinds of messages?</li>
		<li>Carol wants to save time by processing LOTS of messages in parallel.</li>
		<li>Both Carol AND Cathy want to read the same messages.</li>
	</ul>
</point-compilation>

Kirk now needs to ensure that both Carol and Cathy can read the same message. Note that this is different from before where he had to serve multiple Carols. In the Team Carol scenario, collectively the Carols want to read all the messages, and yet no two Carols should read the same message. With this new situation, however, both Carol and Cathy want to read the same messages, because they might want to do different things with them.

Let's recall one of our key words: **store**. It turns out, partitions actually persistently store events in them, allowing for events to be processed multiple times by different consumers. Kirk can take advantage of this to serve both Carol and Cathy!

> [!WARNING]
> This can be different from traditional messaging systems, wherein a message is removed from the queue once it is processed. In Kafka, messages stay in the partition for a set amount of time.

<slide-show style="max-width: 960px; --slide-show-transition-duration: 0s;">
	<img slot="slide" src="./consumer-groups-01.png" alt="Cathy is with Carol on the right. Pat says, 'Hey Kirk, here's a message!'" />
	<img slot="slide" src="./consumer-groups-02.png" alt="Kirk says, 'Thanks, Pat!'" />
	<img slot="slide" src="./consumer-groups-03.png" alt="Carol asks, 'Got a message for me?'" />
	<img slot="slide" src="./consumer-groups-04.png" alt="Kirk responds, 'Yep! Here's a copy.'" />
	<img slot="slide" src="./consumer-groups-05.png" alt="Cathy asks, 'What about me?'" />
	<img slot="slide" src="./consumer-groups-06.png" alt="Kirk replies, 'Don't worry, got you covered!' In the end, both Carol and Cathy have received the same message from Pat." />
</slide-show>

> [!NOTE]
> Events do not need to be stored in Kafka forever; indeed, in the world of big data storing events forever can become expensive! Kafka can be configured to remove messages after a certain amount of time, e.g. 24 hours.

As it turns out, in Kafka terminology, Cathy would be considered a different **consumer group** from Carol. One consumer group represents a set of instances wanting to read topic data in parallel; other consumer groups, then, represent different sets of instances wanting to read from, potentially, the same topics, but may process the data for a different purpose.

The idea of consumer groups, along with partitions, allows Kafka to support different ways of consuming data.

<point-compilation using="kirks-goals" highlight="4"></point-compilation>

With consumer groups, Kirk can:

* Distribute messages evenly to different members of a single consumer group
* Broadcast messages to all different consumer groups invested in the topic
* Or a combination of the two approaches above

<slide-show style="max-width: 960px; --slide-show-transition-duration: 0s;">
	<img slot="slide" src="./distribute-evenly.png" alt="Distribute Evenly: Two partitions each have messages. There are two Carols; one of them receives message from the first partition, and the other receives messages from the other partition." />
	<img slot="slide" src="./broadcast-to-all.png" alt="Broadcast To All: Two partitions each have messages. There is one Carol and one Cathy; both Carol and Cathy each receive all the messages from both partitions." />
	<img slot="slide" src="./combination.png" alt="Combination: Two partitions each have messages. There are two Carols and one Cathy; the first Carol receives the first partition messages, the second Carol receives the second partition messages, and Cathy receives all the messages." />
</slide-show>

Note that in all the above approaches, each consumer group sees all three messages in the topic. Therefore, both Carol and Cathy each see all three messages, though in Carol's case (because she's a cloner) she may divide the work between herself and other clones.

<figure class="h-15">
	<img-zoom>
		<img src="./consumer-group-summary.png" alt="Cathy and Carol represent different consumer groups, depicted by being in different boxes." loading="lazy" width="960" height="540" />
	</img-zoom>
	<figcaption>How consumer groups work in Kafka</figcaption>
</figure>

## To Summarize

Remember all of Kirk's goals we've been compiling? Turns out, Kafka has those exact same goals, along with a few others worth mentioning! <small>(surprising, I know)</small>

<point-compilation id="kafkas-goals">
	<span slot="title">Kafka's Goals</span>
	<ul slot="items">
		<li>Mediate messages between producers and consumers.</li>
		<li>Allow users to choose what topics matter to them.</li>
		<li>Facilitate scalability through parallel processing.</li>
		<li>Continue service even in the face of failures and downtime.</li>
		<li>Support multiple ways of consuming data.</li>
		<li>Guarantee messages from partitions are processed in proper order.</li>
		<li>Stream data real-time from producers to consumers.</li>
		<li>Allow for data to be reprocessed if needed.</li>
	</ul>
</point-compilation>

These goals are why Kafka is designed with topics, partitions, replicas, and consumer groups. Together, these facilities help accomplish the various needs of data engineering and event streaming.

Hopefully this has been helpful in understanding the _why_ behind Kafka's components. Of course, I did not go at all into _how_, practically, you would do any of this! For that, I recommend looking at some of the resources below to continue your Kafka journey.

## Resources

* [Getting started with Kafka](https://kafka.apache.org/quickstart)
* [Technical intro to partitions](https://codingharbour.com/apache-kafka/the-introduction-to-kafka-topics-and-partitions/)
* [On why partitions limit the number of consumers](https://stackoverflow.com/questions/25896109/in-apache-kafka-why-cant-there-be-more-consumer-instances-than-partitions)