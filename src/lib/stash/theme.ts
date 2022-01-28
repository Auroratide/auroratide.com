import { writable } from 'svelte/store'

const KEY = 'darkmode'

export const isDark = writable((globalThis.localStorage?.getItem(KEY) ?? 'false') === 'true')

isDark.subscribe((value) => globalThis.localStorage?.setItem(KEY, value.toString()))
