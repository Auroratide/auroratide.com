For years, I had been writing the wrong alt text for my images.

Those familiar with HTML and creating web content have probably used the `alt` attribute for the `img` tag. It's short for "alternate", letting creators specify a <q cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Img">text description of the image</q> just in case the image doesn't load or can't be seen. 

Here's a possibly pretty example:

<article-image src="/assets/posts/image-alt-text/purpiter.png" alt="Purple and pink clouds swirl about a planet, twisting into a knot of three deep red storms. An icy blue ring encircles the planet reflecting light from a bright star in the distance." size="lg"></article-image>

What alt text should be used for this?

I use to think something like "Alien World", or perhaps "A purple planet in space" were good; after all, they describe what the image is. However, after doing a deep dive into **accessibility** practices, I've come to learn that descriptions like these are not incredibly useful.

So, what _does_ make for good and useful alternative text? There's a number of tips and antipatterns I've collected perusing the web, but actually I've found that a single, concise principle encompasses them all:

<major-point>

Alt text is a _replacement_, not a description.

</major-point>

Let's see how this alternative paradigm helps write alt text for images!

## Replacing "Description"

Let's give the purple planet picture from above some story. We'll say it's a fictional planet called **Purpiter**, and Jenna is an extraterrestrial journalist writing about it. Probably she will want to include the image of Purpiter in the article so her readers know what the planet looks like.

Here's an excerpt from her article:

<blockquote>

Purpiter is a gas giant planet in orbit around the star Rigel Ba. Although beautiful at first glance, its iodine atmosphere would be toxic to our biology!

<article-image src="/assets/posts/image-alt-text/purpiter.png" alt="Purple and pink clouds swirl about the planet, twisting into a knot of three deep red storms. An icy blue ring encircles the planet reflecting light from a bright star in the distance." size="md"></article-image>

Tourism to Purpiter is expected to take off within the next decade.

</blockquote>

Happy with the article, Jenna decides to publish it to an online interplanetary tourism guide. But when submitting the article, something went wrong! Somehow, the image of Purpiter became corrupted while uploading, meaning it will not show up in the article. Oof.

Instead, the **alt text** will appear. Let's say she used the alt text from the intro, "Alien World". Here's how the article would appear:

<blockquote>

Purpiter is a gas giant planet in orbit around the star Rigel Ba. Although beautiful at first glance, its iodine atmosphere would be toxic to our biology!

**Alien World**

Tourism to Purpiter is expected to take off within the next decade.

</blockquote>

That's not very useful, especially for a website about space tourism!

Although the phrase "Alien World" in some sense _describes_ Purpiter, it does not adequately _replace_ the image in the article. Even "a purple planet in space", though more descriptive, does not get everything across we wanted by using an image.

We want the alt text to serve as a **replacement**, so let's use it to convey the details of Purpiter that make it distinct and interesting.

<blockquote>

Purpiter is a gas giant planet in orbit around the star Rigel Ba. Although beautiful at first glance, its iodine atmosphere would be toxic to our biology!

**Purple and pink clouds swirl about the planet, twisting into a knot of three deep red storms. An icy blue ring encircles the planet reflecting light from a bright star in the distance.**

Tourism to Purpiter is expected to take off within the next decade.

</blockquote>

Much better! In the absence of the image, the alt text leaves us with a decent mental illustration of what should have been there.

### Why does this matter?

So, maybe it's rather rare for images to just be missing. That said, image alt text serves two very important audiences.

Earlier, I had mentioned **accessibility**. Websites are used by both people who can see and people who cannot; as developers, our goal is to make websites _accessible_ to all groups of people, regardless of ability.

How would someone with vision impairment "see" a picture? **Screen readers** are assistive tools that can read the contents of a web page out loud; when it runs into an image, it will read that image's alt text.

<side-text>

I highly recommend experimenting with screen readers if you work in the web.

</side-text>

Additionally, for users with **low internet bandwidth**, a large image might take some time to download. As a result, the alt text may be shown in the meantime.

In all these cases, the hope is that the alt text is able to convey as much of the original image as needed. This is why I've started to think of it as a _replacement_, as its purpose is literally to replace the image under some circumstances.

### The Secret Technique

Imagine for a moment that you are talking with a friend over the phone <small>(I _think_ people still do that)</small>, and you are very excited about visiting Purpiter. You want them to come with you, so you recite Jenna's tourism article.

When you reach the image, **how would you describe it over the phone**?

<icon-divider icon="phone" aria-hidden="true"></icon-divider>

This thought experiment happens to be an incredibly useful technique for thinking about alt text. In a way, it's simulating what a screen reader would say.

## Intent is Important

Since alt text is a replacement, it's possible for the same image to have different text depending on the context. Let's consider two more articles for Purpiter to appear in:

1. A critique of the artistic style of the image
2. A wiki entry talking about exoplanets in general

### An Alternative Purpose for the Image

In an article about the artist's depiction of the planet, the focus is not necessarily on the fact that the planet is purple or has a blue ring. Hence, whilst the alt text from before is very descriptive, it wouldn't be a suitable _replacement_.

<icon-divider icon="paint-brush"></icon-divider>

The intent is different. It's probably more important to bring up how the picture was drawn so the reader understands what is actually being criticized.

Here's an example excerpt with the alt text in bold:

<blockquote>

Perot is an astrobiologist, but also a hobbyist artist. A sample of his artwork depicting the planet Purpiter is shown below.

**The planet is a purple circle with wide, rounded magenta strokes. Shapes transition sharply from one to the next, with no gradients between nor within features.**

Because of the simplicity of the coloring, he fails to convey the swirling nature of the storms.

</blockquote>

### Decorative Images

Sometimes, images serve more as a visual enhancement. That is, they provide user a break from the wordiness of a lengthy article but do not actually contribute to the article's content.

In this case, the image could be replaced with nothing without impacting the core information. And so, the right alt text to use is just an **empty string**, signaling the image is decorative.

In an article about exoplanets in general, the image of Purpiter might just be decorative, showing an example of what an exoplanet _might_ look like. In the excerpt below, the image is provided but has empty alt text. See what happens when you use a screen reader!

<blockquote>

Exoplanets are planets outside of the solar system. We know they exist because of subtle clues provided by the light of their host stars.

<article-image src="/assets/posts/image-alt-text/purpiter.png" alt="" size="md"></article-image>

Over time, we've learned that exoplanets are incredibly diverse in size, composition, and countless other ways.

</blockquote>

<side-text danger>

Empty alt text is different from **no** alt text! You should always define alt text, even if it is empty.

</side-text>

## All as the Spec Intended

So it turns out, I learned most of this by reading the [HTML specification](https://html.spec.whatwg.org/multipage/images.html#alt) provided by WHATWG.

The **specification** is essentially the HTML rulebook. Browsers implement the standards defined by the spec. In a sense, since it is the HTML rulebook and web developers work in HTML, it's also the web developer rulebook.

<icon-divider icon="html5"></icon-divider>

Despite that, I hadn't actually taken time to read it until recently in my career. Besides the notion that the word "specification" is scary, it's also understandably technical and dense.

Or so I thought. In fact, the spec is written to be very readable and thorough! It details the semantic intent of HTML tags and attributes with scenarios and examples, in similar fashion to how I'd expect an article _summarizing_ the spec to be written.

The mantra of "alt text is a _replacement_, not a description" is almost a direct quote from the spec:

<blockquote cite="https://html.spec.whatwg.org/multipage/images.html">

The intent is that **replacing** every image with the text of its `alt` attribute does not change the meaning of the page.

</blockquote>

And in fact, the "secret technique" of using a phone call as a thought experiment is not so secret after all. This, too, came directly from the spec!

<blockquote cite="https://html.spec.whatwg.org/multipage/images.html">

One way to think of alternative text is to think about how you would read the page containing the image to someone over the phone, without mentioning that there is an image present.

</blockquote>

So this idea of treating alt text as a replacement is not a new way of thinking about it. It's the perspective the HTML standard wanted us to have all along.

<side-text warning>

Admittedly, the spec is a bit advanced for beginners! My intent is to shatter the myth that the spec is reserved for experts. In WHATWG's own words, having a <q cite="https://html.spec.whatwg.org/multipage/introduction.html">passing familiarity with web technologies</q> can be enough.

</side-text>

## Where to go from here?

<major-point>

Alt text is a replacement, not a description.

</major-point>

Although I covered what that means at a high level, there are more detailed questions we could ask about how it applies:

* What if the image is a button?
* What if I talk about the image in the content already?
* What if the image is of text?
* What if the image is too detailed to explain concisely?

This and more is covered directly by the HTML specification! It devotes no less than 15 subsections to image alt text, and while that may be intimidating, it also goes to show how important writing the right text is.

My recommendation for learning more is to read the **[HTML Spec on Image Alt Text](https://html.spec.whatwg.org/multipage/images.html#alt)**. For supplementary material, [MDN's article on alt](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt) is pretty good as well.
