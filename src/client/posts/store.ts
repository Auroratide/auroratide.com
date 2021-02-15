import { Writable, writable } from 'svelte/store'
import type { Post } from './types'
import { SvelteResource, ResourceStore } from '@/client/resources'
import { FetchApi } from './api'

const allPosts: Writable<Post[]> = writable(null)

export const posts = new SvelteResource(allPosts, new FetchApi(fetch.bind(window)))
