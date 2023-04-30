<style>
    .percontation-mark-figure vector-icon {
        font-size: calc(2 * var(--font-sz-jupiter));
        transform: scaleX(-1);
    }

    .punctuation-marks img {
        height: 1em;
        vertical-align: baseline;
    }
</style>

Ah yes, sarcasm, the _pinnacle_ of human language. Life would be so _incredibly_ dull without it.

And yet, despite sarcasm's profound influence on both oral and written conversation, we don't have a way to denote it in text! I mean, at least in person you can roll your eyes or change your tone to indicate some witty derision. But text? It's just neutral words on a page. We can't even use code to properly mark something as sarcastic!

**Or _can_ we?**

* [Can't we use punctuation&#x2e2e;](#can39t-we-use-punctuationx2e2e)
* [Beyond the period 🧐](#beyond-the-period-🧐)
* [Huh, textual punctuation? &lt;/sarcasm&gt;](#huh-textual-punctuation-ltsarcasmgt)
* [&lt;/sarcasm&gt; is official?!](#ltsarcasmgt-is-official)
* [HTML Tags are like Knives](#html-tags-are-like-knives)
* [Tagging Sarcasm with HTML](#tagging-sarcasm-with-html)
  * [The... &lt;i&gt; Tag?](#the-ltigt-tag)
  * [<em>Em</em>ulating Verbal Cues](#emulating-verbal-cues)
  * [But don't use &lt;q&gt;!](#but-don39t-use-ltqgt)
* [Sooo... where does this leave us?](#sooo-where-does-this-leave-us)

## Can't we use punctuation&#x2e2e;

Do you enjoy lemonade on a hot summer day. I know I sure do?

...Is it just me, or is something _off_ about those two sentences&#x2e2e;

Sorry, that was meant to be a rhetorical question! You could tell because I used the <b class="keyword">percontation point</b>, that backwards question mark thing. It was invented in the 1500s specifically for questions not meant to be answered. You don't really see it <del>a lot</del> <ins>ever</ins> nowadays though, as it fell out of favor a long time ago.

<figure class="percontation-mark-figure">
    <vector-icon icon="question-circle" role="img" aria-label="A backwards question mark"></vector-icon>
    <figcaption>The Percontation Point sure looks funky.</figcaption>
</figure>

Anyways, those first couple sentences feel wrong because I used unexpected punctuation. In a way, our periods, exclamation points, and question marks convey _tone_, namely a neutral, excited, and questioning tone respectively.

So if punctuation makes words sound exciting, how about punctuation for making something sound sarcastic?

And people have tried that! Let me introduce you to...

<div class="punctuation-marks font-larger">

* The <i lang="fr">point d'ironie</i> ![like a sullen, reversed question mark](/assets/posts/making-sarcastic-text/point-d-ironie.svg) (1899)
* The <i>irony point</i> ![an exclamation point with a curve through the middle](/assets/posts/making-sarcastic-text/irony-point.svg) (1966)
* The <i lang="nl">ironieteken</i> ![an exclamation mark bent like a lightning bolt](/assets/posts/making-sarcastic-text/ironieteken.svg) (2007)
* The [SarkMark](https://www.sarcmark.com/)<sup>TM</sup> ![a semi-spiral around a dot](/assets/posts/making-sarcastic-text/sarkmark.svg) (2010, and yes... it's even trademarked ![sarkmark](/assets/posts/making-sarcastic-text/sarkmark.svg))

</div>

And of course, none of these ever caught on. Looks like we're stuck with just three ways to end a sentence, `.`, `?`, or `!`.

<b>Except...</b>

<article-image src="/assets/posts/making-sarcastic-text/what-if-i-told-you.png" alt="What if I told you we have hundreds of punctuation marks?" size="lg" width="834" height="438"></article-image>

## Beyond the period 🧐

The web has inspired written (typed?) language to adapt in fascinating ways, not the least of which is the advent of **emoji**. Text loses facial cues, so... let's just add faces to text!

End a sentence with an emoji and suddenly the words have a voice 😊

Let's see how emoji changes one simple sentence...

* That was a good joke 🤣
* That was a good joke 👏
* That was a good joke 🙃

The first two seem sincere in their praise, albeit in different ways. That last one, though, sounds a bit... _sarcastic_ 🤔

So in a way, emoji used this way can be thought of _like_ punctuation, giving sentences a very wide variety of tones you'd otherwise only be able to pick up in person.

<icon-divider icon="smile-wink"></icon-divider>

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

_Wait wait wait_, did I say it wasn't a real tag? Let me correct myself real quick...

<article-image nopopout src="/assets/posts/making-sarcastic-text/book-confusion.gif" alt="A man quickly flips through a book." width="640" height="360" size="lg">
    <span slot="caption"><a href="https://tenor.com/view/book-confusion-huh-what-read-gif-16432979">Book Confusion</a> by <a href="https://tenor.com">tenor.com</a></span>
</article-image>

## &lt;/sarcasm&gt; is official?!

Funnily enough, `</sarcasm>` is in the _[official HTML rulebook](https://html.spec.whatwg.org)_!

All the way down in [section 13.2.6.4.7](https://html.spec.whatwg.org/#parsing-main-inbody) is a little blurb telling browsers what to do if they encounter `</sarcasm>` in code:

> [When handling a token with] <mark>An end tag whose tag name is "sarcasm"</mark>: Take a deep breath, then act as described in the "any other end tag" entry below.

Ironically, the instruction itself is rather sarcastic. But perhaps disappointingly, this is saying there's nothing special about the sarcasm end tag, and it should be treated like everything else. In other words, it's just a jab at the historical use of the meme.

And besides, this just the _end_ tag; the handbook has nothing for a start tag `<sarcasm>`, and every _real_ HTML element has a start tag.

<icon-divider icon="code"></icon-divider>

Hmm, speaking of _real_ HTML elements... above we saw that `<strong>` was used to mark text as being very important, and yet it wasn't _named_ `<important>`. So, even if there's not an HTML element _named_ `<sarcasm>`, is it possible for there to be something we could _use_ for sarcasm?

In other words, **is there a way to denote sarcasm... with code?!**

## HTML Tags are like Knives

Did you know that some knives have holes in them?

<article-image src="/assets/posts/making-sarcastic-text/knife.png" alt="A knife with three large holes on the blade." width="1157" height="593" size="lg">
    <span slot="caption">A <a href="https://www.cutco.com/products/product.jsp?item=traditional-cheese-knife">Cutco Cheese Knife</a></span>
</article-image>

Those holes aren't there to be trendy. It turns out a knife like this is designed specifically for cutting _cheese_. I dunno if you're like me and just cut cheese with a normal knife, but sometimes when I do that the cheese sticks to the blade. The holes on a cheese knife prevent that stickage, allowing for a cleaner, far more exquisite cut.

Indeed, cooking is an advanced enough field that it has a specific knife for practically any conceivable purpose...

...kinda like HTML tags! The [official HTML rulebook](https://html.spec.whatwg.org) lists a myriad of tags, each with a specific purpose in mind.

<icon-divider icon="book"></icon-divider>

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

## Tagging Sarcasm with HTML

Let's say your friend told a pretty bad pun, and somehow your able to respond with HTML code. You want to say, "That was perfect." Problem is, that phrase on its own is very ambiguous. If only you could mark it somehow...

```html
<SOMETHING?>That was perfect.</SOMETHING?>
```

### The... &lt;i&gt; Tag?

Well, there are dozens upon dozens of HTML tags, and _none_ of them are specifically for sarcasm. How perfect 🙃

The one tag that comes the closest is the `<i>` tag. It has many uses, one of them being used for text that is in an <q cite="https://html.spec.whatwg.org/#the-i-element">alternate voice or mood</q>. In a way, sarcasm _is_ a different mood from the rest of the text, so lacking an alternative...

```html
<i class="sarcasm">That was perfect.</i>
```

<side-text>

It is recommended to use `class` to specify why the `<i>` tag is being used, since the tag can be used for many different things.

</side-text>

There's one **very big problem** with this idea, though.

By default, the `<i>` tag _italicizes_ text, and by convention, italic text is interpretted as verbal stress, not sarcasm. It is possible to undo the italics with Cascading Style Sheets (<abbr>CSS</abbr>), a web technology that lets authors adjust how things look. But doing that leaves us back at the beginning: "That was perfect," with no indication of sarcasm!

<article-image nopopout src="/assets/posts/making-sarcastic-text/eye-roll.gif" alt="A man dramatically rolls his eyes." width="220" height="118" size="md">
    <span slot="caption"><a href="https://tenor.com/view/house-md-gregory-house-ugh-whatever-eye-roll-gif-7380271">Gregory House</a> by <a href="https://tenor.com">tenor.com</a></span>
</article-image>

Even though the text is _semantically_ tagged as being sarcastic, it does not outwardly present itself that way, which is arguably _less_ than useless. If only there were _some_ other way to make something appear sarcastic...

<side-text success>

Textual semantics is usually tied with conversations about <b class="keyword">accessibility</b>, making pages work for abled and disabled people alike. By adding semantics to a page, it becomes more usable by people who cannot otherwise see the page.

Thing is, accessibility goes both ways. If a screen reader announces text as a title to a non-sighted person, then that text better _appear_ like a title to sighted people as well!

</side-text>

### <em>Em</em>ulating Verbal Cues

Sarcasm gets lost in text due to losing certain cues, like body language and tone. We saw that emoji are kind of able to simulate facial language, so is there a way to simulate _tone_?

In fact, there _is_, and I've been using it all throughout this post!

All of the **_italic text_** hints at some kind of verbal stress. In HTML code, this is accomplished using the `<em>` tag, and according to the rulebook, its purpose is to <em>em</em>phasize words and phrases in order to change the overall meaning of the sentence.

```html
This <em>emphasizes</em> the word.
```

For example, the following two sentences are exactly the same, but because a different word is emphasized in each, they imply different situations.

* "I did not eat the _cookie_." - implying something else was eaten
* "I did not _eat_ the cookie." - implying something else happened to the cookie

<icon-divider icon="cookie-bite"></icon-divider>

So let's get back to our "That was perfect" phrase. Now equipped with the glorious power of `<em>`, we can do two things:

* Add _word cues_, extra words that suggest a deeper meaning
* Add _verbal stress_ to sharpen the phrase's sarcasm

<blockquote style="font-style: normal;">
    <p>Wow, <em>that</em> was <em>just</em> perfect.</p>
</blockquote>

```html
Wow, <em>that</em> was <em>just</em> perfect.
```

### But don't use &lt;q&gt;!

There's one last HTML element worth talking about: `<q>`! It represents text that is <q cite="https://html.spec.whatwg.org/#the-q-element">quoted from another source</q>, and has the effect of automatically adding quotation marks.

Sarcasm is often associated with so-called "air quotes", but the `<q>` element is _only_ for quoting some other thing. In fact, the HTML handbook goes so far to say <q cite="https://html.spec.whatwg.org/#the-q-element">it is inappropriate to use the q element for marking up sarcastic statements</q>!

So yeah, don't use it 🙃

## Sooo... where does this leave us?

Text loses both verbal and non-verbal cues, making it harder to detect sarcasm. Oh no!

But when there's a will, there's a way!

* Recreate facial cues with emoji 🙃
* Wittily use textual convention to your advantage &lt;/sarcasm&gt;
* In HTML code, tag a sentence as sarcastic with the `<i>` tag.
* Or, strategically stress words with italics and `<em>`.

So thousands of words later, I guess I should end by asking one last question.

Was this ever _really_ a problem to begin with&#x2e2e;

## Resources

* [How to show sarcasm in text](https://www.quickanddirtytips.com/education/grammar/how-to-show-sarcasm-in-text) - Sarah Peters
* [Irony Punctuation](https://en.wikipedia.org/wiki/Irony_punctuation) - Wikipedia
* [Egocentrism Over E-Mail](https://web-docs.stern.nyu.edu/pa/kruger_email_ego.pdf) - Kruger et al
* [Extracting relevant knowledge for the detection of sarcasm](https://users.soe.ucsc.edu/~maw/papers/kbs_2014_justo.pdf) - Justo et al
* [HTML Living Standard](https://html.spec.whatwg.org)
  * [The i element](https://html.spec.whatwg.org/#the-i-element)
  * [The em element](https://html.spec.whatwg.org/#the-em-element)
  * [The q element](https://html.spec.whatwg.org/#the-q-element)
