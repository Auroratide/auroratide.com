<section class="education">
	<h2>Education</h2>
	<div class="contents">
		<p class="degree"><strong>B.S. Computer Science</strong></p>
		<p class="time"><time>2012</time> - <time>2016</time></p>
		<p class="college">Texas A&M University, USA</p>
		<p class="gpa"><small><strong>GPA:</strong> 3.97</small></p>
		<ul class="activities">
			<li><small>Researched Creativity Expression</small></li>
			<li><small>President of Texas Aggie Game Developers</small></li>
		</ul>
	</div>
</section>

<style>
	.education {
		grid-area: education;
	}

	.education p {
		line-height: 1.25;
		margin: 0;
	}

	.contents {
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-areas:
			"degree time"
			"college college"
			"gpa gpa"
			"activities activities";
	}

	.degree {
		grid-area: degree;
	}

	.time {
		grid-area: time;
		font-weight: bold;
		font-size: 0.75em;
		place-self: center right;
		text-align: end;
	}

	.college {
		grid-area: college;
	}

	.gpa {
		grid-area: gpa;
	}

	.activities {
		grid-area: activities;
		margin-block-start: 0;
		list-style: none;
		padding-left: 1em;
		font-style: italic;
		line-height: 1.15;
	}

	.activities li {
		margin: 0;
		text-indent: -0.75em;
	}

	.activities li::before {
		content: '-';
		margin-right: 0.5ch;
	}

	small {
		font-size: 0.8em;
	}

	@media print {
		.education {
			background: var(--c-light-mid);
			padding: 0 1.5em 1.5em;
		}

		.contents {
			text-align: left;
			grid-template-areas:
				"degree"
				"time"
				"college"
				"gpa"
				"activities";
		}

		.time {
			text-align: left;
			place-self: center left;
		}

		.activities {
			text-align: left;
		}
	}
</style>