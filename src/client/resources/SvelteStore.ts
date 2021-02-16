import type { Writable } from 'svelte/store'
import { Maybe, Missing } from './Maybe'
import { Pending } from './Maybe'
import type { ResourceItem, ResourceApi, Resource } from './Resource'
import { mergeAll, mergeOne } from './merge'

export class SvelteStore<T extends ResourceItem> {
    private store: Writable<T[]>
    private api: ResourceApi<T>
    private pendingList: boolean
    private fetchedItems: Set<string>

    constructor(store: Writable<T[]>, api: ResourceApi<T>) {
        this.store = store
        this.api = api
        this.pendingList = false
        this.fetchedItems = new Set()
    }

    public subscribe(f: (resource: Resource<T>) => void): () => void {
        return this.store.subscribe((value: T[]) => {
            f({
                list: (): Maybe<T[]> => {
                    if (value === null && !this.pendingList) {
                        this.fetchList()
                        return Pending
                    } else {
                        return value
                    }
                },
                one: (id: string): Maybe<T> => {
                    if (value === null && !this.pendingList) {
                        this.fetchList()
                        this.fetchOne(id)
                        return Pending
                    } else {
                        if (!this.fetchedItems.has(id))
                            this.fetchOne(id)
                        return value.find(v => v.id === id) ?? Missing
                    }
                }
            })
        })
    }

    private fetchList: () => Promise<void> = () => {
        this.pendingList = true
        return this.api.list().then((items: T[]) => {
            this.pendingList = false
            this.store.update(prev => mergeAll(prev, items))
        })
    }

    private fetchOne: (id: string) => Promise<void> = (id: string) => {
        return this.api.one(id).then((item: T) => {
            if (item) {
                this.fetchedItems.add(item.id)
                this.store.update(prev => mergeOne(prev, item))
            }
        })
    }
}
