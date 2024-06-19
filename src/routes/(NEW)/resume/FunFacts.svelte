<section class="fun-facts">
	<h2>Fun Facts</h2>
	<ul>
		<li>Shaken the hand of Apollo 13 astronaut Fred Haise</li>
		<li>Bronze Medal, most innovative game in Ludum Dare competition</li>
		<li>Taken unplanned adventures in India, Ireland, and Colorado</li>
		<li>Writing a science fiction story</li>
	</ul>
</section>

<style>
	.fun-facts {
		grid-area: fun-facts;
	}

	ul {
		list-style: none;
		padding-left: 1em;
		font-size: 0.8em;
		line-height: 1.25;
	}

	ul li {
		text-align: left;
		text-indent: -0.75em;
		margin: 0;
	}

	ul li::before {
		content: '-';
		margin-right: 0.5ch;
	}

	@media print {
		.fun-facts {
			background: var(--c-light-mid);
			padding: 0 1.5em 1.5em;
		}
	}
</style>
