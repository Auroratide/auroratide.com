import type { ResourceItem, Resource } from './Resource'

export class InMemoryResource<T extends ResourceItem> implements Resource<T> {
    private items: T[]

    constructor(items: T[]) {
        this.items = items
    }

    list = () => this.items
    one = (id: string) => this.items.find(i => i.id === id)
}
