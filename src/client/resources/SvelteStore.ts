import type { Writable } from 'svelte/store'
import type { ResourceItem, ResourceApi, Resource } from './Resource'

export class SvelteStore<T extends ResourceItem> {
    private store: Writable<T[]>
    private api: ResourceApi<T>
    private pendingList: boolean

    constructor(store: Writable<T[]>, api: ResourceApi<T>) {
        this.store = store
        this.api = api
        this.pendingList = false
    }

    public subscribe(f: (resource: Resource<T>) => void): () => void {
        return this.store.subscribe((value: T[]) => {
            f({
                list: (): T[] => {
                    if (value === null && !this.pendingList) {
                        this.fetchList()
                    }

                    return value
                },
                one: (id: string): T => {
                    if (value === null && !this.pendingList) {
                        this.fetchList()
                        return null
                    } else {
                        return value.find(v => v.id === id)
                    }
                }
            })
        })
    }

    private fetchList: () => Promise<void> = () => {
        this.pendingList = true
        return this.api.list().then((items: T[]) => {
            this.pendingList = false
            this.store.set(items)
        })
    }
}
