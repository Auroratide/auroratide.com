<script lang="ts">
	import { mdToSummarizedStory } from "$lib/auroratide/stories"
	import { attributes } from "$content/stories/the-fairy-of-fire/content.md"
	import FlowersImg from "./flowers.webp"
	import TreesImg from "./trees.webp"
	import ButterfliesImg from "./butterflies.webp"
	import SnowImg from "./snow.webp"
	import "@auroratide/typewritten-text/lib/style.css"
	import { onMount } from "svelte"
	import "./fonts.css"
	import Paragraph from "./Paragraph.svelte"
	import ImgSection from "./ImgSection.svelte"
	import { PageMeta } from "$lib/design-system/PageMeta"

	const story = mdToSummarizedStory(attributes)

	onMount(() => {
		import("@auroratide/typewritten-text/lib/define.js")
	})
</script>

<svelte:head>
	<style>
		body {
			background-color: black !important;
			background-image:
				radial-gradient(circle at 5vw 0%, oklch(50% 0.11 30 / 0.15), oklch(50% 0.11 30 / 0) 67%),
				radial-gradient(circle at 75vw 25%, oklch(55% 0.119 250 / 0.15), oklch(55% 0.119 250 / 0) 67%),
				radial-gradient(circle at 33vw 40%, oklch(55% 0.111 134 / 0.15), oklch(55% 0.111 134 / 0) 67%),
				radial-gradient(circle at 65vw 60%, oklch(56.5% 0.11 95.5 / 0.15), oklch(56.5% 0.11 95.5 / 0) 67%),
				radial-gradient(circle at 10vw 80%, oklch(53% 0.11 304 / 0.15), oklch(53% 0.11 304 / 0) 67%);
		}
	</style>
</svelte:head>

<PageMeta pagetitle={story.title} description={story.summary.short} />
<article aria-labelledby="page-title" class="container">
	<header>
		<h1 id="page-title" class="text-center">
			{story.title}
		</h1>
	</header>
	<section>
		<p>Beyond every mountain, river, and valley is a mystical garden painted with a rainbow brush, where the trees nuzzle the clouds and flowers roll like waves. This is the land of the Fairies, spirits of paradise free from the troubles of the world.</p>
		<p>One such fairy, a <span class="fire">Fairy of Fire</span>, cherished the beauty of the garden. "So much here is loved," she thought. "There must be one thing here meant for me—something I can tend with all my heart!"</p>
		<p>And so she flew off in search of how she could love the garden.</p>
	</section>
	<ImgSection title="Spring" src="{FlowersImg}">
		<Paragraph id="spring-1" next="spring-2">
			When spring came, the Fairy happened upon a field of flowers—red dahlias, yellow daffodils, blue orchids—blossoms of every color and shape imaginable. As she admired them, she noticed another fairy afar off: a <span class="water">Fairy of Water</span>. The water fairy danced among the flowers, leaving dew upon their leaves to glisten in the sunlight.
		</Paragraph>
		<Paragraph id="spring-2" next="spring-3">
			Among them was one flower she loved most. She caressed its petals with her hand, spurring it into a brilliant carousel. Each night, she slept cradled by its petals, whispering it to sleep.
		</Paragraph>
		<Paragraph id="spring-3" next="spring-4">
			Marvelling, the fire fairy thought, "Surely there's a flower for me too." She soared over the field and found the prettiest scarlet rose, so arresting it made her heart kindle.
		</Paragraph>
		<Paragraph id="spring-4" next="spring-5">
			But, when she went to brush her hand against its petals, her heat made it smolder. Gasping, she withdrew. "I'm sorry, I'm sorry! I meant you no harm!"
		</Paragraph>
		<Paragraph id="spring-5">
			And so the <span class="fire">Fairy of Fire</span> flew off.
		</Paragraph>
	</ImgSection>
	<ImgSection title="Summer" src="{TreesImg}">
		<Paragraph id="summer-1" next="summer-2">
			When summer came, the Fairy happened upon a trove of trees—cedar, oak, pine—stoic giants anchored to the ground yet rising to the sky. Nearby, she heard the low humming of another fairy: a <span class="earth">Fairy of Earth</span>. The earth fairy wandered between the trunks, nourishing the roots and soil with her voice.
		</Paragraph>
		<Paragraph id="summer-2" next="summer-3">
			Each day, she lingered at her beloved tree, pressing her palms to the earth at its feet. In return, the tree unfurled wide, spiral branches, weaving a canopy of shade where the fairy could rest.
		</Paragraph>
		<Paragraph id="summer-3" next="summer-4">
			Impressed, the fire fairy thought, "Surely there's a tree for me too." She glided over the canopy and found the tallest redwood, so bold it made her gasp in awe.
		</Paragraph>
		<Paragraph id="summer-4" next="summer-5">
			But, when she weaved between its leaves, her heat made them shrivel. Shocked, she darted away. "Oh no, oh no! I promise, I'll never return!"
		</Paragraph>
		<Paragraph id="summer-5">
			And so the <span class="fire">Fairy of Fire</span> flew off.
		</Paragraph>
	</ImgSection>
	<ImgSection title="Autumn" src="{ButterfliesImg}">
		<Paragraph id="autumn-1" next="autumn-2">
			When autumn came, the Fairy happened upon a bevy of butterflies—spotted fritillaries, striped monarchs, broad swallowtails—fluttering freely in a clearing. Drifting among them was another fairy: a <span class="wind">Fairy of Wind</span>. The wind fairy's acrobatic ballet stirred the air into playful drafts that kept the butterflies aloft.
		</Paragraph>
		<Paragraph id="autumn-2" next="autumn-3">
			One such butterfly she cherished most. Each morning, they waltzed through the misted light, scattering the butterfly's scales into shimmering wisps that danced like stars on the breeze.
		</Paragraph>
		<Paragraph id="autumn-3" next="autumn-4">
			Enraptured, the fire fairy thought, "Surely there's a butterfly for me too." She flitted into the clearing and found the most vivid scarlet lacewing, so dazzling she overlooked her fiery nature.
		</Paragraph>
		<Paragraph id="autumn-4" next="autumn-5">
			So, when she invited it to dance, her heat made it recoil. Its pain seared her heart. "Why, why am I like this? I should have known better."
		</Paragraph>
		<Paragraph id="autumn-5">
			And so the <span class="fire">Fairy of Fire</span> flew off.
		</Paragraph>
	</ImgSection>
	<ImgSection title="Winter" src="{SnowImg}">
		<Paragraph id="winter-1" next="winter-2">
			When winter came, clouds rolled in, blanketing the land in a veil of snow. All was quiet.
		</Paragraph>
		<Paragraph id="winter-2" next="winter-3">
			The Fairy perched alone upon a rock jutting from the white sea. The other fairies had each found a piece of nature to love. But she had not. Her flames, it seemed, forbade it.
		</Paragraph>
		<Paragraph id="winter-3" next="winter-4">
			She curled into herself, trying in vain to dim her glow. "Why does everything burn when I try to get close? Am I cursed to love this garden only from afar?"
		</Paragraph>
		<Paragraph id="winter-4" next="winter-5">
			The winter wind whistled, and with it, a <span class="nature">whisper</span>: "Look around you, Fairy of Fire. What do you see?"
		</Paragraph>
		<Paragraph id="winter-5" next="winter-6">
			She lifted her head. Around her, the snow had melted into pools of color—<span class="water">flowers blooming from beneath</span>, <span class="earth">trees shaking free their branches</span>, <span class="wind">butterflies stretching glistening wings</span>. Wherever her warmth touched, nature stirred and gathered.
		</Paragraph>
		<Paragraph id="winter-6" next="winter-7">
			Her light swelled as she beheld its potential. "I was searching for one thing to love, and all along, I was meant to love it all."
		</Paragraph>
		<Paragraph id="winter-7">
			And so the <span class="fire">Fairy of Fire</span> learned to love the garden by sharing her warmth with the world.
		</Paragraph>
	</ImgSection>
</article>

<style>
	article {
		font-family: "David Libre", serif;
	}

	h1 {
		font-family: "Lavishly Yours", cursive;
		font-size: 4em;
		color: var(--t-red-b);
		margin-block: 1em;
		text-shadow:
			0.025em 0.025em 0 oklch(100% 0.2 30 / 0.25),
			0.0625em 0.0625em 0 oklch(0% 0 0),
			0 0 0.25em oklch(0% 0 0);
	}

	.fire { color: var(--t-red-b); }
	.water { color: var(--t-blue-b); }
	.earth { color: var(--t-yellow-b); }
	.wind { color: var(--t-green-b); }
	.nature { color: var(--t-purple-b); }

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

	p {
		line-height: 1.5em;
		margin-block: 1.5em;
		color: var(--t-fg-a);
	}
</style>
