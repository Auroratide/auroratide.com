import { getContext as svGet, setContext as svSet } from "svelte"

type Context = {
	onPress: (key: string) => void,
	onRelease: (key: string) => void,
	toName: (key: string) => void,
}

export function getContext(): Context {
	return svGet("keyboard-panel")
}

export function setContext(context: Context) {
	return svSet("keyboard-panel", context)
}
