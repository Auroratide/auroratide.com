import type { ResourceItem, Resource } from './Resource'
import { Pending, Missing } from './Maybe'

export class InMemoryResource<T extends ResourceItem> implements Resource<T> {
    private items: T[]

    constructor(items: T[]) {
        this.items = items
    }

    list = () => this.items ?? Pending
    one = (id: string) => {
        if (this.items) {
            return this.items.find(i => i.id === id) ?? Missing
        } else {
            return Pending
        }
    }
}
