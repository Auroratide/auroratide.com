import type { Resource, ResourceStore } from './Resource'

export class InMemoryResource<T extends Resource> implements ResourceStore<T> {
    private items: T[]

    constructor(items: T[]) {
        this.items = items
    }

    list = () => this.items
    one = (id: string) => this.items.find(i => i.id === id)
}
