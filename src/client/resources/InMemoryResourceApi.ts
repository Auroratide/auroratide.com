import type { Resource, ResourceApi } from './Resource'

export class InMemoryResourceApi<T extends Resource> implements ResourceApi<T> {
    private items: T[]
    private promises: Promise<T | T[]>[]

    constructor(initial: T[]) {
        this.items = initial
        this.promises = []
    }

    // for example, await act(() => api.finishAll())
    public finishAll() {
        return Promise.all(this.promises)
    }

    public one(id: string): Promise<T> {
        const item = this.items.find(item => item.id === id)
        const promise = Promise.resolve(item ? item : null)
        this.promises.push(promise)

        return promise
    }

    public list(): Promise<T[]> {
        const promise = Promise.resolve(this.items)
        this.promises.push(promise)

        return promise
    }
}
