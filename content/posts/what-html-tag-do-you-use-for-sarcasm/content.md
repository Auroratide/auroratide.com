Ah yes, sarcasm, the _pinnacle_ of human language. Life would be so _incredibly_ dull without it.

And yet, despite sarcasm's profound influence on both oral and written conversation, we don't have a way to denote it in text! I mean, at least in person you can roll your eyes or change your tone to indicate some witty derision. But text? It's just neutral words on a page. We can't even use code to properly mark something as sarcastic!

<b>Or <em>can</em> we?</b>

**Important sections**

* [Can't we use punctuation&#x2e2e;](#cant-we-use-punctuation)
* [Beyond the period 🧐](#beyond-the-period-🧐)
* [Huh, textual punctuation? &lt;/sarcasm&gt;](#huh-textual-punctuation-sarcasm)
* [&lt;/sarcasm&gt; is official?!](#sarcasm-is-official)
* [HTML Tags are like Knives](#html-tags-are-like-knives)

## Can't we use punctuation&#x2e2e;

Do you enjoy lemonade on a hot summer day. I know I sure do?

...Is it just me, or is something _off_ about those two sentences&#x2e2e;

Sorry, that was meant to be a rhetorical question! You could tell because I used the <b class="keyword">percontation point</b>, that backwards question mark thing. It was invented in the 1500s specifically for our friendly question-statement hybrids. You don't really see it a lot nowadays though, as it fell out of favor a long time ago.

TODO PIC?

Anyways, those first couple sentences feel wrong because I used unexpected punctuation. In a way, our periods, exclamation points, and question marks convey _tone_, namely a neutral, excited, and questioning tone respectively.

So if punctuation makes words sound exciting, how about punctuation for making something sound sarcastic?

And people have tried that! Let me introduce you to...

<div class="font-larger">

* The <i lang="fr">point d'ironie</i> TODO (1899)
* The <i>irony point</i> TODO (1966)
* The <i lang="nl">ironieteken</i> TODO (2007)
* The [SarkMark](https://www.sarcmark.com/)<sup>TM</sup> TODO (2010, and yes... it's even trademarked TODO SARKMARK)

</div>

And of course, none of these ever caught on. Looks like we're stuck with just three ways to end a sentence, `.`, `?`, or `!`.

<b>Except...</b>

TODO what if I told you we have hundreds of punctuation marks

## Beyond the period 🧐

The web has inspired written (typed?) language to adapt in fascinating ways, not the least of which is the advent of **emoji**. Text loses facial cues, so... let's just add faces to text!

End a sentence with an emoji and suddenly the words have a voice 😊

Let's see how emoji changes one simple sentence...

* That was a good joke 🤣
* That was a good joke 👏
* That was a good joke 🙃

The first two seem sincere in their praise, albeit in different ways. That last one, though, sounds a bit... _sarcastic_ 🤔

So in a way, emoji used this way can be thought of _like_ punctuation, giving sentences a very wide variety of tones you'd otherwise only be able to pick up in person.

TODO some image

But maybe a yellow face isn't appropriate or possible where you want to make your snide comment. Is there a way to use _just text_ as punctuation?

## Huh, textual punctuation? &lt;/sarcasm&gt;

Using text as punctuation may sound a bit silly at first, but people have (and still do) actually do this for sarcasm! Peruse the internet long enough and you might have seen people write sentences like this:

> John Doe is a brilliant politician <mark>&lt;/sarcasm&gt;</mark>

That [&lt;/sarcasm&gt;](https://www.urbandictionary.com/define.php?term=%3C%2Fsarcasm%3E) bit denotes sarcasm (clearly). And yes, I _did_ just link Urban Dictionary as a reference &lt;/sarcasm&gt;.

<side-text warning>

Nowadays, it's usually shortened to just `/s`.

</side-text>

So where did such a funny looking thing come from anyway?

Well, it turns out to be a bit of a **code joke**! Websites are coded (in part) using a language called Hypertext Markup Language (<abbr>HTML</abbr>). HTML gives pages structure, determining whether a block of text is a paragraph, or a heading, or some other thing. This is done using <b class="keyword">tags</b>; for example, the bolded "code joke" from the earlier sentence uses the `<strong>` tag, which indicates it is an _important_ phrase.

A web author would code it like this:

```html
It is a <strong>code joke</strong>!
```

Every start tag is paired with an end tag, so the `</strong>` there indicates the end of the important text. 

And while `<sarcasm>` is _not_ a real HTML tag, people started using "&lt;/sarcasm&gt;" to indicate the end of a sarcastic phrase!

TODO PIC?

Wait wait wait, did I say it wasn't a real tag? Let me correct myself real quick...

## &lt;/sarcasm&gt; is official?!

Funnily enough, `</sarcasm>` is in the _[official HTML rulebook](https://html.spec.whatwg.org)_!

All the way down in [section 13.2.6.4.7](https://html.spec.whatwg.org/#parsing-main-inbody) is a little blurb telling browsers what to do if they encounter `</sarcasm>` in code:

> [When handling a token with] <mark>An end tag whose tag name is "sarcasm"</mark>: Take a deep breath, then act as described in the "any other end tag" entry below.

Ironically, the instruction itself is rather sarcastic. But perhaps disappointingly, this is saying there's nothing special about the sarcasm end tag, and it should be treated like everything else. In other words, it's just a jab at the historical use of the meme.

And besides, this just the _end_ tag; the handbook has nothing for a start tag `<sarcasm>`, and every _real_ HTML element has a start tag.

TODO PIC IDEA

Hmm, speaking of _real_ HTML elements... above we saw that `<strong>` was used to mark text as being very important, and yet it wasn't _named_ `<important>`. So, even if there's not an HTML element _named_ `<sarcasm>`, is it possible for there to be something we could _use_ for sarcasm?

In other words, **is there a way to denote sarcasm... with code?!**

## HTML Tags are like Knives

Did you know that some knives have holes in them?

TODO PICTURE OF CHEESE KNIFE https://images.cutco.com/products/1000/p3/traditional-cheese-knife.jpg
https://www.cutco.com/products/product.jsp?item=traditional-cheese-knife

Those holes aren't there to be trendy. It turns out a knife like this is designed specifically for cutting _cheese_. I dunno if you're like me and just cut cheese with a normal knife, but sometimes when I do that the cheese sticks to the blade. The holes on a cheese knife prevent that stickage, allowing for a cleaner, far more exquisite cut.

Indeed, cooking is an advanced enough field that it has a specific knife for practically any conceivable purpose...

...kinda like HTML tags! The [official HTML rulebook](https://html.spec.whatwg.org) lists a myriad of tags, each with a specific purpose in mind.

TODO Image of the standard? or something like that

See, HTML tags impart meaning, or **semantics**, to text they annotate. Here are some examples:

* `<strong>` indicates that the text is important, serious, or urgent.
* `<blockquote>` is used for text that is a direct quote from somewhere else.
* `<h1>` denotes the main title of the web page. As a side effect, it also usually makes the title visibly larger.

Because each tag has specific semantics, it's possible to misuse them. Just as how I shouldn't use a butter knife to cut boned meat, a web author would not use an `<h1>` tag just to make some text big. The `<h1>` tag is _only_ for the page's title, so to make some different text big the author would need to use something else.

So our question, really, is whether or not the glorious HTML handbook has a tag whose semantics include sarcasm!

<side-text warning>
  <details>
    <summary>Why would we want this anyway?</summary>
    <p><a href="https://users.soe.ucsc.edu/~maw/papers/kbs_2014_justo.pdf">Studies with computers</a> have shown that machines are not great at identifying sarcasm without significant help. Using code to annotate things like importance, emphasis, and sarcasm can help machines.</p>
    <p>One practical use is with screen readers, which read web pages aloud to those who cannot see the page. Maybe there's a future where if text is marked as sarcastic, the screen reader can indicate as much by fluctuating its tone.</p>
  </details>
</side-text>

## Coding Sarcasm

Let's say your friend told a pretty bad joke, and somehow your able to respond with HTML code. You want to say, "That was perfect." Problem is, that phrase on its own is very ambiguous. If only you could mark it somehow...

```html
<SOMETHING?>That was perfect.</SOMETHING?>
```

### The... &lt;i&gt; Tag?

Well, there are dozens upon dozens of HTML tags, and _none_ of them are specifically for sarcasm. How perfect 🙃

The one tag that comes the closest is the `<i>` tag. It has many uses, one of being used for text that is in an <q cite="https://html.spec.whatwg.org/#the-i-element">alternate voice or mood</q>. In a way, sarcasm _is_ a different mood from the rest of the text, so lacking an alternative...

```html
<i class="sarcasm">That was perfect.</i>
```

<side-text>

It is recommended to use `class` to specify why the `<i>` tag is being used, since the tag can be used for many different things.

</side-text>

There's one **very big problem** with this idea, though.

By default, the `<i>` tag _italicizes_ text, and by convention, italic text is interpretted as stress, not sarcasm.



--------------------

### Don't use strong, q, or b

There are dozens upon dozens of HTML tags, but most of them are irrelevant for sarcasm. Like, `<code>` is clearly for code and not sarcasm. Some tags, though, are not as clear.

The `<strong>` tag is used to mark text as important or urgent. Sarcastic text is neither more important nor urgent than normal text, so `<strong>` is... _not_ so strong here 🙃

The `<q>` tag is for an inline quote <q cite="https://html.spec.whatwg.org/#the-q-element">from another source</q>. Although "air quotes" hint at sarcasm, this tag should _only_ ever be used for quotes from _different_ source material. In fact, the handbook explicitly states <q cite="https://html.spec.whatwg.org/#the-q-element">it is inappropriate to use the q element for marking up sarcastic statements</q>.

The `<b>` tag brings attention to text without imparting importance, such as denoting key words or actions. I like to call it the <b class="keyword">beckon</b> element, as by default it bolds text kinda like `<strong>` does, beckoning viewers toward it. Sarcastic text does not necessarily garner extra attention, so `<b>` isn't a good candidate, either.

<side-text danger>

The `<b>`, `<i>`, `<u>`, and `<s>` tags have a bad reputation among web authors because in older HTML versions, they did not actually have semantics and only changed formatting. However, in the current HTML standard, these elements have renewed semantic purpose.

</side-text>

### What about em?

The `<em>` tag is for adding _stress_ to certain words or phrases in order to subtly change the meaning of a sentence. For example, the following two sentences are exactly the same, but because a different word is stressed in each (denoted with italics), they imply different situations.

* "I did not eat the _donut_." - implying something else was eaten
* "I did not _eat_ the donut." - implying something else happened to the donut

For sarcasm, it does not make sense to emphasize the _entire_ sarcastic phrase, as people rarely verbally stress an _entire_ sentence. But maybe there's something else we can do with `<em>`. I'll get to that later...

### What about i?

And finally, the `<i>` tag represents text set apart from the surrounding text. Reasons for this could be the text is in an alternate voice/mood or the word is a technical term.

<i class="internal-monologue">Hmm, should I put an example of an internal monologue here to demonstrate what "alternate voice/mood" can mean? I kinda don't want the article to be too long, but examples are cool...</i>

Oh sorry, I dunno how my internal thought process got onto the page like that 🤭

Does sarcasm constitute an "alternate mood"? Possibly! If the goal is to find an HTML tag which can mark an entire sentence as sarcastic, the `<i>` tag is probably the best one. That said, there's something better we can do...

```html
<i class="sarcasm">What a splendid way to denote sarcasm!</i>
```

<side-text>

It is recommended to use `class` to specify why the `<i>` tag is being used, since the tag can be used for many different things.

</side-text>

## Combining em, i, and a secret ingredient

There's one very big problem with using the `<i>` tag to denote sarcasm. Let's say I respond to someone's bad joke with "That was perfect," but I want to say it sarcastically. If I use `<i>` alone...

```html
<i class="sarcasm">That was perfect.</i>
```

The result is some italicized text, "<span style="font-style: italic;">That was perfect</span>." Thing is, italicized text conventionally means something _other_ than sarcasm, namely emphasis. Even if the text technically bears the "alternate mood" semantics, visually it is not useful.

<side-text success>

Among webdev conversation, textual semantics is usually tied with <b class="keyword">accessibility</b>, making pages work for abled and disabled people alike. By adding semantics to a page, it makes it more usable by people who cannot otherwise see the page.

Thing is, accessibility goes both ways.

</side-text>

<major-point>

Accessibility applies equally to disabled and non-disabled folk.

</major-point>

## Resources

* [How to show sarcasm in text](https://www.quickanddirtytips.com/education/grammar/how-to-show-sarcasm-in-text) - Sarah Peters
* [Irony Punctuation](https://en.wikipedia.org/wiki/Irony_punctuation) - Wikipedia
* 