import { writable } from 'svelte/store'

const KEY = 'darkmode'

export const isDark = writable((localStorage.getItem(KEY) ?? 'false') === 'true')

isDark.subscribe((value) => localStorage.setItem(KEY, value.toString()))
