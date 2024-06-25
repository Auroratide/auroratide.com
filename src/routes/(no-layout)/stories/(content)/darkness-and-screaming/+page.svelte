<script lang="ts">
	import { mdToSummarizedStory } from "$lib/auroratide/stories"
	import { attributes } from "$content/stories/darkness-and-screaming/content.md"

	const story = mdToSummarizedStory(attributes)
</script>

<svelte:head>
	<style>
		body {
			background: black !important;
		}
	</style>
</svelte:head>

<article aria-labelledby="darkness-and-screaming" class="container theme-deep-dark">
	<header>
		<h1 id="darkness-and-screaming" class="text-center">
			<span>Darkness</span>
			<span>and</span>
			<span>Screaming</span>
		</h1>
		<p>This story was written from a prompt on a <a href="https://www.reddit.com/r/WritingPrompts/comments/qpwssv/wp_soulmates_exist_you_have_flashes_of_of_what/">creative writing subreddit</a>:</p>
		<blockquote>
			<p>
				Soulmates exist. You have flashes of of what your soulmate is seeing and hearing.
				A lot of soulmates use these flashes in their pursuit to find their soulmate.
				Personally, you have no interest. The only thing you ever see is darkness and the
				only thing you ever hear is a constant scream.
			</p>
		</blockquote>
	</header>
	<section>
		<h2 id="the-story">The Story</h2>
		<p>
			All of my friends (okay, <em>both</em> of my friends) down booze to pass their
			worries. I tried that, didn't like it much. Instead, I visit the Gisneyland
			amusement park, almost every week.
		</p>
		<p>
			"I thought it romantic! I kept seeing visions of your dull grey office building,
			so I introduced myself by filling your boring life with color."
		</p>
		<p>
			"Heh, she calls that building dull, but in the end she tracked me down by using
			its name! What about you, my boy? Caught glimpses of your soulmate's life yet?"
		</p>
		<p>
			I have, but I could never tell them.
		</p>
		<p>
			Permanent darkness, shrill screaming, metal scraping. Every time, it's the same,
			and every time I awake drowned in chilling sweat.
		</p>
		<p>
			My nightmares are definitely an unusual case; every else I know has had blissful
			dreams by comparison. They let you see what your soulmate sees, hear what your
			soulmate hears, and compiling the clues over time helps couples find each other.
			I guess that's romantic.
		</p>
		<p>
			But I stopped caring about romance a while ago. Now I just wish I could <em>save</em> her,
			from the consistent dread she must feel, wherever she is. But when each dream is
			the same...
		</p>
		<p>
			Anyway, that's why I visit the park. Somehow, meeting all the couples and hearing
			their stories is cathartic. It's good to experience these happy endings, even if
			they're not your ow—
		</p>
		<p>
			"Aaah, oof!"
		</p>
		<p>
			Tripping on something getting off a roller coaster while lost in thought? Classic.
		</p>
		<p>
			Ah, and just my luck, I caused a young lady to fall. Even more classic.
		</p>
		<p>
			"Ooooh I'm so terribly sorry! I really should watch my step more carefully, haha."
		</p>
		<p>
			"No, miss, this was definitely my fault. Are you... by yourself today?"
		</p>
		<p>
			"At a park? Yeah, it's rather awkward of me, isn't it? But I'm sure you have heard
			the same story many times! Just looking for my soulmate, well, maybe 'looking'
			isn't the best word for it, haha."
		</p>
		<p>
			No, actually this is a first for me. I only ever talk to couples. "So then in your
			visions you see—"
		</p>
		<p>
			"Roller coasters, yes! And food stalls, stages with shows, and people everywhere
			too. But it's the same place every time. I never thought someone could spend so
			much time at a park... but not knowing which park—"
		</p>
		<p>
			"—you've gone from park to park, searching for him."
		</p>
		<p>
			"You got it!" That's actually kind of romantic. "But you know, if I'm spending
			all this time in parks, I might as well have a little fun too, so I make sure
			to do all the rides! I never got use to it, still scream every time... Well
			anyway, have you seen my cane?"
		</p>
		<p>
			Her cane? Oh, so that's what I tripped on, a red and white cane... wait...
		</p>
		<p>
			The grinding metal, the thrilling screams, and the blinding darkness...
		</p>
		<p>
			Suddenly, it all makes sense. There was nothing I could do to save her.
			Instead, she saved me.
		</p>
	</section>
</article>

<style>
	.theme-deep-dark {
		--t-fg-a: oklch(67% 0 0);
		--t-fg-b: oklch(75% 0 0);
		--t-primary-a: var(--t-fg-b);
		--t-primary-b: var(--t-fg-b);
	}

	.container {
		max-width: 50rem;
		margin: auto;
	}

	.text-center {
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 0.1ch 0.5ch;
	}

	h1, h2 { color: var(--t-fg-b); }

	h1 {
		font-size: 2.5em;
		margin-block: 1.25em 1em;
		line-height: 1em;
	}
	h2 { font-size: 1.75em; }

	header {
		margin-block-end: 4em;
	}

	a {
		color: var(--t-fg-b);
	} a:hover, a:focus {
		text-decoration: none;
		filter: brightness(1.25);
	}

	p {
		line-height: 1.5em;
		margin-block: 1.5em;
		color: var(--t-fg-a);
	}
</style>
