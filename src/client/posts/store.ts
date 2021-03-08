import { Writable, writable } from 'svelte/store'
import type { Post } from './types'
import { SvelteStore, Resource } from '@/client/resources'
import { FetchApi } from './api'

const allPosts: Writable<Post[]> = writable(null)

export const posts = new SvelteStore(allPosts, new FetchApi(fetch.bind(window)))
