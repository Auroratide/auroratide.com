<script lang="ts">
	import { setContext } from "./context"
	import Key from "./Key.svelte"
	import Row from "./Row.svelte"

	type Props = {
		onPress: (key: string) => void,
		onRelease: (key: string) => void,
		toName: (key: string) => void,
	}; const {
		onPress,
		onRelease,
		toName,
	}: Props = $props()

	setContext({
		onPress,
		onRelease,
		toName,
	})
</script>

<section class="keyboard-panel">
	<Row offset={0}>
		<Key name="1" />
		<Key name="2" />
		<Key name="3" />
		<Key name="4" />
		<Key name="5" />
		<Key name="6" />
		<Key name="7" />
		<Key name="8" />
		<Key name="9" />
		<Key name="0" />
		<Key name="-" />
		<Key name="=" />
	</Row>
	<Row offset={0.3}>
		<Key name="q" />
		<Key name="w" />
		<Key name="e" />
		<Key name="r" />
		<Key name="t" />
		<Key name="y" />
		<Key name="u" />
		<Key name="i" />
		<Key name="o" />
		<Key name="p" />
		<Key name="[" />
		<Key name="]" />
	</Row>
	<Row offset={0.5}>
		<Key name="a" />
		<Key name="s" />
		<Key name="d" />
		<Key name="f" />
		<Key name="g" />
		<Key name="h" />
		<Key name="j" />
		<Key name="k" />
		<Key name="l" />
		<Key name=";" />
		<Key name="'" />
	</Row>
	<Row offset={0.8}>
		<Key name="z" />
		<Key name="x" />
		<Key name="c" />
		<Key name="v" />
		<Key name="b" />
		<Key name="n" />
		<Key name="m" />
		<Key name="," />
		<Key name="." />
		<Key name="/" />
	</Row>
</section>

<style>
	.keyboard-panel {
		font-size: 1.5em;
		display: flex;
		flex-direction: column;
		gap: 0.25em;
	}
</style>
