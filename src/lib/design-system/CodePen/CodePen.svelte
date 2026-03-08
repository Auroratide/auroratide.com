<script lang="ts">
	let {
		title,
		hash,
		height,
	}: {
		title: string,
		hash: string
		height: number,
	} = $props()
</script>

<div class="codepen-container">
	<p class="codepen" data-height="{height}" data-default-tab="html,result" data-slug-hash="{hash}" data-pen-title="{title}" data-user="auroratide" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
	<span>See the Pen <a href="https://codepen.io/auroratide/pen/{hash}">
	{title}</a> by Timothy Foster (<a href="https://codepen.io/auroratide">@auroratide</a>)
	on <a href="https://codepen.io">CodePen</a>.</span>
	</p>
	<script async src="https://public.codepenassets.com/embed/index.js"></script>
</div>
