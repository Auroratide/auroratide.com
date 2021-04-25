import type { TransitionConfig } from 'svelte/transition'
import { quadOut } from 'svelte/easing'
import { forCustomElement } from '@auroratide/svelte-custom-element-transitions'

export type BurstOptions = {
    duration: number
}

export const burst = forCustomElement((node: HTMLElement, options: BurstOptions): TransitionConfig => {
    return {
        duration: options.duration,
        css: (t: number) => {
            const eased = quadOut(t)

            return `
                box-shadow: 0 0 ${1 + 4 * eased}em ${25 * eased}em var(--burst-color);
                opacity: ${1 - eased};
            `
        },
    }
})
