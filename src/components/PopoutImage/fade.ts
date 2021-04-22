import type { TransitionConfig } from 'svelte/transition'
import { linear } from 'svelte/easing'

export type FadeOptions = {
    delay?: number,
    duration?: number
}

export const fade = (node: Element, {
	delay = 0,
	duration = 400,
}: FadeOptions = {}): TransitionConfig => {
	const o = +getComputedStyle(node).opacity;

	return {
		delay,
		duration,
		easing: linear,
		css: t => `opacity: ${t * o}`,
        tick: t => {
            (node as HTMLElement).style.opacity = `${t * o}`
        }
	};
}