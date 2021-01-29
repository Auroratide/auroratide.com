import type { Writable } from 'svelte/store'
import type { Resource, ResourceApi, ResourceStore } from './Resource'

export class SvelteResource<T extends Resource> {
    private store: Writable<T[]>
    private api: ResourceApi<T>

    constructor(store: Writable<T[]>, api: ResourceApi<T>) {
        this.store = store
        this.api = api
    }

    public subscribe(f: (resource: ResourceStore<T>) => void): () => void {
        return this.store.subscribe((value: T[]) => {
            f({
                list: (): T[] => {
                    if (value === null) {
                        this.api.list().then((items: T[]) => {
                            this.store.set(items)
                        })
                    }

                    return value
                },
                one: (id: string): T => {
                    return value.find(v => v.id === id)
                }
            })
        })
    }
}
