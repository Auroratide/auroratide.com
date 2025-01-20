import type { TypewrittenTextElement } from "@auroratide/typewritten-text"
import { TYPED } from "@auroratide/typewritten-text/lib/events.js"
import type { Action } from "svelte/action"

export type ChainingTypewriterOptions = {
	delay?: number
}

export const chainingTypewriters: Action<HTMLElement, ChainingTypewriterOptions, {
	"on:typed": (e: CustomEvent) => void
}> = (node, {
	delay = 400,
}) => {
	const typewriters = Array.from(node?.querySelectorAll<TypewrittenTextElement>("typewritten-text"))

	typewriters.forEach((cur, i) => {
		const next = typewriters[i + 1]
		cur.addEventListener(TYPED, () => {
			if (next != null) {
				setTimeout(() => next.type(), cur.repeatInterval ?? 1000)
			} else {
				node.dispatchEvent(new CustomEvent("typed"))
			}
		}, { once: true })
	})

	setTimeout(() => typewriters[0]?.type(), delay)
}
