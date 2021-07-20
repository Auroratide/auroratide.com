import { Writable, writable } from 'svelte/store'
import type { PortfolioItem } from './types'
import { SvelteStore } from '@/client/resources'
import { FetchApi } from './api'

const allItems: Writable<PortfolioItem[]> = writable(null)

export const portfolio = new SvelteStore(allItems, new FetchApi(fetch.bind(window)))
