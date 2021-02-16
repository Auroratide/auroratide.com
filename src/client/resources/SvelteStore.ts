import type { Writable } from 'svelte/store'
import type { Maybe } from './Maybe'
import { Pending } from './Maybe'
import type { ResourceItem, ResourceApi, Resource } from './Resource'
import { mergeAll, mergeOne } from './merge'

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
            this.store.update(prev => mergeAll(prev, items))
        })
    }

    private fetchOne: (id: string) => Promise<void> = (id: string) => {
        return this.api.one(id).then((item: T) => {
            this.store.update(prev => mergeOne(prev, item))
        })
    }
}
