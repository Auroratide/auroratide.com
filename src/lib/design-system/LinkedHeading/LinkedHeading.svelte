<script lang="ts">
	let {
		h,
		value,
	}: {
		h: "1" | "2" | "3" | "4" | "5" | "6"
		value: string
	} = $props()

	let heading = $derived(`h${h}`)
	let id = $derived(value
		.toLocaleLowerCase()
		.replaceAll(/\s/g, "-")
		.replaceAll(/[^a-z0-9-]/g, "")
	)
</script>

<!-- CSS is in PageContent.css -->
<div class="heading-with-link">
	<svelte:element this={heading} {id} tabindex="-1">{value}</svelte:element>
	<a class="header-anchor" href="#{id}">
		<span class="visually-hidden">Permalink to "{value}""</span>
		<span aria-hidden="true">#</span>
	</a>
</div>
