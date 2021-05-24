import { Writable, writable } from 'svelte/store'
import type { ArtItem } from './types'
import { SvelteStore } from '@/client/resources'
import { FetchApi } from './api'

const allItems: Writable<ArtItem[]> = writable(null)

export const art = new SvelteStore(allItems, new FetchApi(fetch.bind(window)))
