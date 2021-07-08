<point-compilation id="key-questions" title="Key Questions" style="--point-compilation-color: #4164ff;">
  <ul slot="items">
    <li>What are they key objects involved in my scenario?</li>
    <li>What properties of those objects are the most important to represent?</li>
    <li>How do I know when the scenario is starting or ending?</li>
    <li>During the course of the scenario, what changes?</li>
  </ul>
  <img slot="image" src="/assets/posts/the-bounce-of-rubber-juggle/balloon.png" alt="Balloon" />
</point-compilation>

Last week, I participated in the annual [GMTK Game Jam](https://itch.io/jam/gmtk-2021) to make an entire video game in just 48 hours. The result?

**[Rubber Juggle](/portfolio/rubber-juggle)**, a minigame where the goal is to keep balloons on screen for as long as possible! You do that by rubber-banding pegs on a pegboard that the balloons bounce off of, like below.

<article-image src="/assets/posts/the-bounce-of-rubber-juggle/bounce.webp" alt="Animated image of a balloon bouncing off a rubber band." size="lg">
</article-image>

That bounce may look fairly innoculous, but it turns out to be slightly tricky to code (especially for me who hadn't touched any linear algebra in years)! The bounce mechanic was the core of Rubber Juggle, so I spent most of my time during the jam coding it to work well and feel good.

In this article, I want to detail my thought process in implementing the bounce of Rubber Juggle, focusing on key questions that can help implement virtually _any_ game mechanic.

## From Pictures to Numbers

Humans and computers see the world very differently. If I say, "Imagine a bounce," most people will probably envision a ball hitting a wall or bouncing several times on the floor, tracing out an imaginary path; it is a very pictoral way of predicting an outcome. Computers, however, just see a bunch of numbers. To them, the ball is just a few numbers that change over time according to some rules.

<picture-numbers-demo caption="As you drag the slider, you can compare what humans see against what a computer sees."></picture-numbers-demo>

The numbers a computer sees only have meaning when interpretted by a person. That interpretation is what we call a **domain model** in code. A domain model is just a way of representing real world objects and processes in a way a computer can understand. For example, one way to model a cup of tea on a wooden table is with two numbers: one for its `x` location and one for its `y` location. Modelling is all about identifying how to represent important objects for the processes we want to automate.

<major-point>

Programmers are interpretters. We focus on giving meaning to the cacaphony of numbers chugging inside the machine.

</major-point>

So to get a good bounce working for our balloon, we want to start thinking of a way to create a domain model. There is no one way to always create a good model; heck, the entire field of software engineering is devoted to making accurate models! That said, a good approach is to come up with **key questions** that can get us closer and closer to solving the problem.

<side-text success>

By the end, we should have a small list of questions that can help kick start a solution to many different programming problems!

</side-text>

### Identifying Objects

For our first question, we need to identify what things are even important.

<point-compilation-view using="key-questions" highlight="0"></point-compilation-view>

To answer this question, we can try to summarize the entire scenario in a sentence. Doing so, let's pay special attention to the **nouns** in the sentence and highlight them.

> A **balloon** bounces on a **rubber band** tied between two **pegs**.

As it turns out, the nouns are probably very important objects to model! With that, we can start to actually draft out some code.

<side-text>

All code in this article is in Typescript.

</side-text>

```typescript
class Balloon { }
class RubberBand { }
class Peg { }
```

It is important to note that as we learn more about the scenario, we may come up with more things to model, and that's all right! The **key questions** are not meant to be answered all at once; modelling is an iterative process (which, by the way, is why developers spend a lot of time making code that is easy to change).

### Identifying Properties

Now that we have objects, we want to start contemplating what about those objects is actually important for the bounce.

<point-compilation-view using="key-questions" highlight="1"></point-compilation-view>

Let's go back to our one-summary sentence from before. This time, however, we're going to highlight the **verbs**.

> A balloon **bounces** on a rubber band **tied** between two pegs.

The verbs are very important actions within our domain. Knowing what the actions are, we can start to think about what properties are necessary in order to model them.

* To know when the bounce happens, we must know the **positions** of the balloon and the rubber band
* The bounce will cause a change in the **velocity** of the balloon
* Since the rubber band is tied between two pegs, the **positions of the pegs** determines the position of the rubber band
* And finally, position and velocity are two-dimensional **vectors** since we working on a 2d game

Knowing these, we can start to add to our model!

```typescript
// Adding Vector to our model to represent two-dimensional properties
class Vector {
    x: number
    y: number
}

class Balloon {
    position: Vector
    velocity: Vector
}

// "tied" between two pegs
class RubberBand {
    from: Peg
    to: Peg
}

class Peg {
    position: Vector
}
```

As with the previous question, it's very possible (read: likely) that we may encounter more properties to add to our domain. Once we have a starting point, though, we can begin to think about how to code the _processes_, in our case the bounce itself.

## Bumping into Walls

Now that we have a way of representing the balloon and pegs, we must tackle the next critical question:

<point-compilation-view using="key-questions" highlight="2"></point-compilation-view>

In other words, how do we know when a balloon is colliding with a band? This ultimately turns out to be collision detection, which is one of the most common themes in game development, enough so that most game engines provide in-built support for detecting collisions.

Now, in the game jam I was using raw [PixiJS](https://www.pixijs.com/), which is a WebGL renderer and not a game engine, so it didn't have any utilities for collision detection. Because of that, I needed to find a way to determine when a bounce was starting using the domain represention created above.

### Detecting Collision

Faced with a task like this, I personally like drawing a bunch of scenarios to see if a pattern can be picked out. For instance:

<horizontal-flex>
    <figure>
        <rubber-juggle-pegboard width="3" height="3" assetpath="/assets/components/rubber-juggle">
            <rubber-juggle-peg label="a" x="1" y="2"></rubber-juggle-peg>
            <rubber-juggle-peg label="b" x="2" y="0"></rubber-juggle-peg>
            <rubber-juggle-balloon x="0.7" y="0.7"></rubber-juggle-balloon>
            <rubber-juggle-band from="a" to="b"></rubber-juggle-band>
        </rubber-juggle-pegboard>
        <figcaption><p>Not colliding</p></figcaption>
    </figure>
    <figure>
        <rubber-juggle-pegboard width="3" height="3" assetpath="/assets/components/rubber-juggle">
            <rubber-juggle-peg label="a" x="1" y="2"></rubber-juggle-peg>
            <rubber-juggle-peg label="b" x="2" y="0"></rubber-juggle-peg>
            <rubber-juggle-balloon x="1.3" y="0.7"></rubber-juggle-balloon>
            <rubber-juggle-band from="a" to="b"></rubber-juggle-band>
        </rubber-juggle-pegboard>
        <figcaption><p>Just colliding</p></figcaption>
    </figure>
    <figure>
        <rubber-juggle-pegboard width="3" height="3" assetpath="/assets/components/rubber-juggle">
            <rubber-juggle-peg label="a" x="1" y="2"></rubber-juggle-peg>
            <rubber-juggle-peg label="b" x="2" y="0"></rubber-juggle-peg>
            <rubber-juggle-balloon x="1.6" y="0.7"></rubber-juggle-balloon>
            <rubber-juggle-band from="a" to="b"></rubber-juggle-band>
        </rubber-juggle-pegboard>
        <figcaption><p>Definitely colliding</p></figcaption>
    </figure>
</horizontal-flex>

Pictorially, it can be easy to pick out in which scenarios a bounce should happen, but it doesn't really help actually solve how to code the bounce. For that, we have to start thinking in terms of our domain model, simplifying the problem a bit and bringing us a step closer to how the computer sees the interacting elements.

Redrawing the exact same three scenarios above but using only our domain representation, we get this:

<horizontal-flex>
    <article-image src="/assets/posts/the-bounce-of-rubber-juggle/model-01.png" alt="A blue circle marked (x, y) with radius r. Two small, red circles marked (ax, ay) and (bx, by) are connected with a brown line. The blue circle and brown line do not intersect. The distance between them is labeled d." size="fit"></article-image>
    <article-image src="/assets/posts/the-bounce-of-rubber-juggle/model-02.png" alt="A blue circle marked (x, y) with radius r. Two small, red circles marked (ax, ay) and (bx, by) are connected with a brown line. The blue circle barely touches the brown line." size="fit"></article-image>
    <article-image src="/assets/posts/the-bounce-of-rubber-juggle/model-03.png" alt="A blue circle marked (x, y) with radius r. Two small, red circles marked (ax, ay) and (bx, by) are connected with a brown line. The blue circle is on top of the brown line." size="fit"></article-image>
</horizontal-flex>

* `(x, y)` represents the balloon's position, which in our code is `balloon.position`
* `(ax, ay)` and `(bx, by)` represent the peg positions, which in or code is `band.from.position` and `band.to.position`
* `r` represents the balloon's radius/size, which is actually not in our representation of `Balloon` yet! That's fine, if we need it, we can add it as a property called `balloon.radius`.

Meanwhile, `d` does not actually have a represention in the domain model. Instead, it represents the **shortest distance** from the center of the balloon to the rubber band. Drawing `d` into the diagram actually reveals a key insight into how we can determine a collision:

* In the first diagram, `d` is much longer than `r`, and there is _no_ collision
* In the second diagram, `d` is equal to `r`, and there _is_ a collision
* In the third diagram, `d` is much shorter than `r`, and there _is_ a collision

This means that if the **shortest distance** from the balloon to the band is less than or equal to the size of the balloon, then a collision must be happening! This allows us to begin writing a function in our model:

```typescript
class Balloon {
    position: Vector
    radius: number // NEW!

    isCollidingWith(band: RubberBand): boolean {
        return band.distanceTo(this.position) <= this.radius
    }
}

class RubberBand {
    distanceTo(p: Vector): number {
        // ???
    }
}
```

Next, we figure out the `distanceTo()` method.

If we look at our pictoral representation, what we have is a balloon represented by a point `(x, y)` and a band represented by two points `(ax, ay)` and `(bx, by)`. I don't know about you, but I don't casually have memorized the formula for getting the distance between a line and a point. Thankfully, the [Internet is here to save us](https://en.wikipedia.org/wiki/Distance_from_a_point_to_a_line#Line_defined_by_two_points), and we find that the mathy-looking formula is thus:

<math-block tex="\displaystyle \operatorname {distance}\left((x, y), (a_x, a_y), (b_x, b_y)\right) = \frac{\left|(b_x - a_x)(a_y - y) - (a_x - x)(b_y - a_y)\right|}{\sqrt {(b_x - a_x)^2 + (b_y - a_y)^2}}"></math-block>

Even if the formula looks intimidating at first, translating it into code just requires puting the right variables into the right places. Doing so, we get:

```typescript
class RubberBand {
    from: Peg
    to: Peg

    distanceTo(p: Vector): number {
        const a = this.from.position
        const b = this.to.position

        const dx = b.x - a.x
        const dy = b.y - a.y

        const area = Math.abs(dx * (a.y - p.y) - dy * (a.x - p.x))
        const length = Math.sqrt(dx * dx + dy * dy)
        return area / length
    }
}
```

<side-text>

If you're wondering how the formula works, it essentially creates a triangle between the three points and uses the area for a triangle, <math-inline tex="A = \frac{bh}{2}"></math-inline>, to figure out the "height". That height turns out to be the distance!

</side-text>

And this seems to work great! The interactive below uses this formula to determine a collision between the rubber band and the balloon.

<bad-distance-demo caption="The distance formula determines if the balloon is touching the rubber band." x="1.5"></bad-distance-demo>

Unfortunately, there is a **very significant problem** with this model...

### The Software Bug

It is very rare in programming to get things working the first time around. When I first coded the bouncing logic during the game jam, I kept running into this mysterious bug where the balloon would seem to bounce off of thin air. If we take our interactive from above, but this time shimmy the balloon to the right a bit, it reveals an interesting thing:

<bad-distance-demo caption="Collision is detected in thin air!" x="4.5"></bad-distance-demo>

A collision is clearly being detected when it shouldn't be! In fact, it's almost as if there's an invisible line extending the rubber band.

As it turns out, that's because there _is_ an infinite line stretching the entire span of the band, mathematically speaking. The formula used above helps find the distance from a point to a _line_ defined by two other points; in math, lines are infinitely long, meaning our formula for collision detection treats the band as infinitely long too.

<article-image src="/assets/posts/the-bounce-of-rubber-juggle/infinite-line.png" alt="Two pegs connected with a rubber band and a ballon are lined up on a pegboard. A thick dashed line is drawn across all of them." size="lg" caption="At the moment, the band internally stretches infinitely in both directions"></article-image>

What we really want is the distance from a point to a line _segment_. Knowing this, we can add a couple more diagrams to our scenarios above:

<horizontal-flex>
    <article-image src="/assets/posts/the-bounce-of-rubber-juggle/model-04.png" alt="A blue circle marked (x, y) with radius r. Two small, red circles marked (ax, ay) and (bx, by) are connected with a brown line. The blue circle is above one of the red circles. The distance between them is labeled d." size="lg"></article-image>
    <article-image src="/assets/posts/the-bounce-of-rubber-juggle/model-05.png" alt="A blue circle marked (x, y) with radius r. Two small, red circles marked (ax, ay) and (bx, by) are connected with a brown line. The blue circle is lined up with the brown line, but not going through it. The distance between them is labeled d." size="lg"></article-image>
</horizontal-flex>

Finding this version of `d` will be far more accurate for collision detection.

-----------------------

If the original distance formula was wrong all along, why did I bring it up in this article? The point is to highlight a kind of **software bug** that does not result from writing the code wrong. Indeed, the code above implements the distance formula perfectly fine. The bug was not in the code, but in the _domain understanding_.

I wanted to simulate a balloon bouncing off a rubber band, and I modeled it using a formula which was too simple to accurately represent that. As a result, the code worked fine but the outcome was wrong.

It is perfectly fine, and honestly normal, to incrementally update our understanding of the problem and solution over time, and this is a core reason why writing maintainable code is of such importance.

<side-text warning>

Software testing might have caught this bug, but it isn't guaranteed. In theory, each scenario I pictured above could have become a unit test, but since I had failed to consider the case of the balloon passing the invisible line formed by the band, the bug would have manifested anyway.

Here, proper **test driven development** may have slowed me down enough to properly consider all of the edge cases and thereby catch the bug before it manifested. But I was doing a 48-hour game jam, and wasn't exactly in a TDD mindset at the time (:

</side-text>

### Distance Between a Point and Line Segment

Ok, so what's the formula for the distance between a point and a line segment?

As it turns out, this question is a bit more specialized, so it's more difficult finding a nice concise formula. In fact, some of the first search results show how to solve this problem in code. Having looked through them all, though, my favorite find was a post made on the [mathematics stack exchange](https://math.stackexchange.com/questions/330269/the-distance-from-a-point-to-a-line-segment).

The idea can essentially be summarized in four steps. Given we represent the balloon's x and y position as a vector called <math-inline tex="\vec{p}"></math-inline>, and the two pegs in the band as <math-inline tex="\vec{a}"></math-inline> and <math-inline tex="\vec{b}"></math-inline>, then:

1. Define <math-inline tex="\vec{s}(t) = \vec{a} + t(\vec{b} - \vec{a})"></math-inline>
2. Determine <math-inline tex="\hat{t} = \frac{(\vec{p} - \vec{a}) \cdot (\vec{b} - \vec{a})}{\|\vec{b} - \vec{a}\|^2}"></math-inline>
3. Determine <math-inline tex="t^* = \min(\max(\hat{t}, 0), 1)"></math-inline>
4. Find the distance: <math-inline tex="d = \|\vec{s}(t^*) - \vec{p}\|"></math-inline>

<side-text>

The variable <math-inline tex="\vec{a}"></math-inline> represents a **[vector](https://www.math.net/vector)**, which is shorthand for <math-inline tex="(a_x, a_y)"></math-inline>.

</side-text>

Let's modify the `distanceTo()` function to match this new formula one step at a time.

1. Define <math-inline tex="\vec{s}(t) = \vec{a} + t(\vec{b} - \vec{a})"></math-inline>

For the first step, we need to create a function that performs a few basic math operations on vectors. Since we are adding vectors together, we can actually implement the rules in the `Vector` class.

```typescript
class Vector {
    /* x, y */

    // We add these functions to our vector model
    add = (other: Vector) =>
        new Vector(this.x + other.x, this.y + other.y)

    minus = (other: Vector) =>
        new Vector(this.x - other.x, this.y - other.y)

    scaleBy = (scalar: number) =>
        new Vector(this.x * scalar, this.y * scalar)
}

class RubberBand {
    distanceTo(p: Vector): number {
        const a = this.from.position
        const b = this.to.position

        const s = (t: number) => a.add(b.minus(a).scaleBy(t))
        // ...
    }
}
```

2. Determine <math-inline tex="\hat{t} = \frac{(\vec{p} - \vec{a}) \cdot (\vec{b} - \vec{a})}{\|\vec{b} - \vec{a}\|^2}"></math-inline>

Defining <math-inline tex="\hat{t}"></math-inline> requires using the [dot product](https://www.math.net/dot-product) and [vector magnitude](https://www.math.net/magnitude). Again, since these are operations on vectors, we can put them onto the `Vector` model.

```typescript
class Vector {
    /* x, y, add, minus, scaleBy */

    // Add more vector operations that we need
    dot = (other: Vector) =>
        this.x * other.x + this.y * other.y

    magnitude = () =>
        Math.sqrt(this.x * this.x + this.y * this.y)
}

class RubberBand {
    distanceTo(p: Vector): number {
        /* a, b, s(t) */

        const m = b.minus(a).magnitude()
        const th = (p.minus(a).dot(b.minus(a)) / (m * m)
        // ...
    }
}
```

3. Determine <math-inline tex="t^* = \min(\max(\hat{t}, 0), 1)"></math-inline>

This essentially clamps <math-inline tex="t^*"></math-inline> to be between 0 and 1. Javascript provides `Math.min` and `Math.max` as functions.

```typescript
class Vector { /* ... */ }

class RubberBand {
    distanceTo(p: Vector): number {
        /* a, b, s(t), th */

        const ts = Math.min(Math.max(th, 0), 1)
        // ...
    }
}
```

4. Find the distance: <math-inline tex="d = \|\vec{s}(t^*) - \vec{p}\|"></math-inline>

Finally, the distance just puts <math-inline tex="t^*"></math-inline> into the <math-inline tex="s(t)"></math-inline> function defined earlier! We can utilize our `Vector` model methods to help make this line succinct.

```typescript
class Vector { /* ... */ }

class RubberBand {
    distanceTo(p: Vector): number {
        /* a, b, s(t), th, ts */

        return s(ts).minus(p).magnitude()
    }
}
```

Put it all together, and we get the following code:

<div class="success">

```typescript
class Vector {
    x: number
    y: number

    add = (other: Vector) =>
        new Vector(this.x + other.x, this.y + other.y)

    minus = (other: Vector) =>
        new Vector(this.x - other.x, this.y - other.y)

    scaleBy = (scalar: number) =>
        new Vector(this.x * scalar, this.y * scalar)

    dot = (other: Vector) =>
        this.x * other.x + this.y * other.y

    magnitude = () =>
        Math.sqrt(this.x * this.x + this.y * this.y)
}

class RubberBand {
    from: Peg
    to: Peg

    distanceTo(p: Vector): number {
        const a = this.from.position
        const b = this.to.position

        const s = (t: number) => a.add(b.minus(a).scaleBy(t))

        const m = b.minus(a).magnitude()
        const th = (p.minus(a).dot(b.minus(a)) / (m * m)

        const ts = Math.min(Math.max(th, 0), 1)
        return s(ts).minus(p).magnitude()
    }
}
```

</div>

<side-text>

If you're wondering how this formula works, I recommend reading the [original math exchange post](https://math.stackexchange.com/questions/330269/the-distance-from-a-point-to-a-line-segment), as it's summarized well, albeit rather concisely. I may decide to write something short on this topic specifically in the future.

</side-text>

This algorithm turns out to work much better! Using our same interactive, we can see that the balloon no longer collides with the "invisible" line formed by the rubber band.

<good-distance-demo caption="Now, only the lefthand balloon collides with the rubber band."></good-distance-demo>

<side-text warning>

Feel free to look at the [source code of the widget](https://github.com/Auroratide/auroratide.com/blob/master/src/components/pages/posts/the-bounce-of-rubber-juggle/good-distance-demo.ts) above to make sure I'm not cheating!

</side-text>

### Alternative Approaches?

Before we started looking into how to implement the collision detection, or domain model consisted of just positions for the balloon and pegs. Now, we have updated our understanding of the problem to include distance from the rubber band to various things and whether a balloon is in contact with a band.

In our code, the distance became a function in the `RubberBand` class, and the collision detection a method on `Balloon`. However, is there any particular reason to organize the code this way?

* Could we have instead implemented the distance function on `Balloon`?
* Could we have implemented the collision detection on `RubberBand` instead?

First of all, these are very good questions to ask! Part of having a maintainable codebase is having an accurate domain model, and having an accurate domain model means representing core concepts in the right places in code.

I like to think of questions like these in two ways.

1. At first, we had the task of converting our understanding of the balloon bounce into code. If we instead we flip our thinking and consider converting our code into what it means for a balloon to bounce, does anything change?
2. Are we following good programming principles like encapsulation, single responsibility, and so forth?

Regarding whether determining distance belongs on `Balloon` or `RubberBand`, ultimately this came down to a concern for encapsulation and generality. If distance were implemented on `Balloon`, then it would require the `Balloon` class to know that a `RubberBand` is composed of two pegs, which is an internal implementation. If in the future `RubberBand` could be composed of three pegs, then we'd have to change the definition of a function in `Balloon`, indicating **coupled code**.

Ideally, a change in the implementation of `RubberBand` should require only changing code in `RubberBand`, hence why it makes sense for the distance calculation to be there. Additionally, since `distanceTo` is written taking a generic `Vector` as a parameter, it could theoretically be used to determine distance to any object, not just `Balloon`s.

Regarding whether collision belongs on the balloon or the rubber band, I landed on the logic being in `Balloon` because it makes more sense to ask myself, "Am I as a _person_ bumping into a wall?" rather than the question "As a _wall_, am I bumping into a person?" In particular, the first question makes sense because the one moving is the _person_, and the _person_ is the one who will feel the effect of the collision.

------------------------

Now that the logic is in place for detecting the bounce, the only thing left to do is code the bounce itself!

## Bouncing off the Walls

Having a model for determining when the interaction is occurring is useful, so now we need to ask about the effect.

<point-compilation-view using="key-questions" highlight="3"></point-compilation-view>

Focusing on what changes can help in modelling the situation accurately. In the case of the balloon bouncing, only one thing is actually changing: the _direction_ of the balloon's motion. And conveniently, we already have the direction encoded as the balloon's **velocity**.

So, the real challenge here is figuring out what the balloon's velocity should be after a bounce so that it feels like a real bounce.

<side-text warning>

The balloon bounce is admittedly simpler than most other scenarios, as only one thing is changing. The domain becomes vastly more complicated if multiple things change in interconnected ways.

</side-text>

As before, I like to think of the problem pictorially before analyizing possible abstractions. If we take the bounce from before, we can trace out its path and reveal the nature of the reflection:

<picture-path-demo caption="The balloon's path traces out a symmetrical reflection"></picture-path-demo>

In this case, the simplest way to represent the bounce is with a symmetrical reflection; in physics, this is known as **[specular reflection](https://en.wikipedia.org/wiki/Specular_reflection)**. If we compare a typical diagram for specular reflection against the diagram created by our simulated bounce, we can see the similarity:

<horizontal-flex>
    <article-image src="/assets/posts/the-bounce-of-rubber-juggle/bounce-physics.png" alt="A blue circle's path bouncing off a brown line is drawn, with a dashed line bisecting the angle formed." size="lg" caption="Bounce Reflection"></article-image>
    <article-image src="/assets/posts/the-bounce-of-rubber-juggle/reflection.png" alt="Two line segments QO and OP depect reflection on a mirror. A line bisects the angle formed." size="lg" caption="Specular Reflection" cite="https://commons.wikimedia.org/wiki/File:Reflection_angles.svg"></article-image>
</horizontal-flex>

So that's great and all, but how the heck do we actually _code_ this?

Again, we have the [internet to thank](https://en.wikipedia.org/wiki/Specular_reflection#Vector_formulation) for providing a formula that models this exact kind of reflection.

Our goal is to find <math-inline tex="\vec{v}_f"></math-inline>, the new velocity for the balloon. Using its current velocity <math-inline tex="\vec{v}_0"></math-inline> and the direction of the rubber band <math-inline tex="\hat{r}"></math-inline>, we can do some vector math:

<math-block tex="\vec{v}_f = 2 \left(\hat{r} \cdot \vec{v}_0 \right) \hat{r} - \vec{v}_0"></math-block>

* We already have a variable for <math-inline tex="\vec{v}_0"></math-inline> called `balloon.velocity`
* For <math-inline tex="\hat{r}"></math-inline>, however, we will need to append the `RubberBand` model a little

The variable <math-inline tex="\hat{r}"></math-inline> represents the direction of the rubber band's surface. This is essentially a vector created by sticking the rubber band onto a plane and drawing an arrow from one peg to the other.

<article-image src="/assets/posts/the-bounce-of-rubber-juggle/draw-vector.png" alt="Two pegs are drawn on a grid with one on the origin. A vector arrow is drawn from the origin to the other peg." size="lg" caption="This vector equals the difference between the position vectors of each peg">
</article-image>

We can actually add this to our model of `RubberBand` with a descriptive function:

<div class="danger">

```typescript
class RubberBand {
    from: Peg
    to: Peg

    surfaceDirection(): Vector {
        // Recall: our Vector class has minus defined already
        return to.position.minus(from.position)
    }
}
```

</div>

However, all we want is a _direction_, meaning that the length of the band is irrelevant. We can _normalize_ the vector by dividing it by its own magnitude, essentially forcing its length to become 1.

```typescript
class RubberBand {
    from: Peg
    to: Peg

    surfaceDirection(): Vector {
        return to.position.minus(from.position).normalized()
    }
}

class Vector {
    normalized = () =>
        this.scaleBy(1 / this.magnitude())
}
```

<side-text>

In mathematical notation, the subtle difference between a vector marked with an arrow like <math-inline tex="\vec{r}"></math-inline> and a "hat" symbol like <math-inline tex="\hat{r}"></math-inline> is the difference between having a length of 1 or not. The hat symbol denotes a **unit vector**, meaning the vector must have a length of 1. Generally, this is used to indicate that it's only the direction of the vector that's important.

</side-text>

Now, the mystical <math-inline tex="\hat{r}"></math-inline> variable is represented in our model with `band.surfaceDirection()`! With that, we can utilize the other vector methods already created in the previous sections to model the bounce:

```typescript
class Balloon {
    bounce(band: RubberBand) {
        const r = band.surfaceDirection()
        const v = this.velocity
        this.velocity = r.scaleBy(2 * r.dot(v)).minus(v)
    }
}
```

And that's it! This changes the Balloon's velocity to match the velocity given by the formula representing a reflection on the rubber band.

<side-text success>

There's no reason the reflection _needed_ to be modeled with specular reflection. In fact, the angle of reflection could have been completely random if we wanted! During the game jam, I decided on a predictable model of reflection to make the game feel like it was more within the player's control, giving an opportunity to plan and strategize.

</side-text>

## Final Code

And so, here is the final code we end up with after performing this exercise! This code represents the beginning of the Rubber Juggle domain model, capable so far of simulating a balloon bouncing off a rubber band.

During the game jam, this is essentially the core around which I built the rest of the code, adding to and updating the model as more complexity became required.

<div class="success">

```typescript
class Balloon {
    position: Vector
    velocity: Vector
    radius: number

    isCollidingWith(band: RubberBand): boolean {
        return band.distanceTo(this.position) <= this.radius
    }

    bounce(band: RubberBand) {
        const r = band.surfaceDirection()
        const v = this.velocity
        this.velocity = r.scaleBy(2 * r.dot(v)).minus(v)
    }
}

class RubberBand {
    from: Peg
    to: Peg

    distanceTo(p: Vector): number {
        const a = this.from.position
        const b = this.to.position

        const s = (t: number) => a.add(b.minus(a).scaleBy(t))

        const m = b.minus(a).magnitude()
        const th = (p.minus(a).dot(b.minus(a)) / (m * m)

        const ts = Math.min(Math.max(th, 0), 1)
        return s(ts).minus(p).magnitude()
    }

    surfaceDirection(): Vector {
        return to.position.minus(from.position).normalized()
    }
}

class Peg {
    position: Vector
}

class Vector {
    x: number
    y: number

    add = (other: Vector) =>
        new Vector(this.x + other.x, this.y + other.y)

    minus = (other: Vector) =>
        new Vector(this.x - other.x, this.y - other.y)

    scaleBy = (scalar: number) =>
        new Vector(this.x * scalar, this.y * scalar)

    dot = (other: Vector) =>
        this.x * other.x + this.y * other.y

    magnitude = () =>
        Math.sqrt(this.x * this.x + this.y * this.y)
    
    normalized = () =>
        this.scaleBy(1 / this.magnitude())
}
```

</div>

<side-text warning>

As an interesting note, we did not really need to know all that much math to arrive at this solution. Indeed, most of the formulas came from online sources! What we did need to know was what to research, and that required reducing the problem into something more familiar, breaking down the complexity into pieces that can be more easily searched.

</side-text>

## Summarizing the Key Questions

As it turns out, this entire ordeal in implementing the bounce for Rubber Juggle is really an exercise in **domain modeling**. Clearly, not every game is going to have bouncing the same way Rubble Juggle does, but every game _is_ going to have its own domain, and our primary job as programmers is to pick out the core pieces of the problem and put them into code a computer understands.

To get to the final bounce solution, we asked some key questions:

<point-compilation-view using="key-questions"></point-compilation-view>

These questions help put the focus on the key nouns and verbs, creating a domain-driven mindset. In a game with multiple mechanics and concerns, this can really help highlight the truly important aspects to focus on, but more than that, a domain-driven approach helps make the code readable, maintainable, and extensible.

At the end of the day, what matters most is creating a solid domain understanding, for which there are many useful techniques. Next time you get stuck with coder's block, see if slowing down and asking these **key questions** helps develop an approach!
