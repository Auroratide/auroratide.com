import type { Resource, ResourceApi } from './Resource'

export abstract class FetchResourceApi<T extends Resource> implements ResourceApi<T> {
    private name: string
    private fetch: (input: RequestInfo) => Promise<Response>

    constructor(name: string, fetch: (input: RequestInfo) => Promise<Response>) {
        this.name = name
        this.fetch = fetch
    }

    public async one(id: string): Promise<T> {
        return this.fetch(`/api/${this.name}/${id}.json`)
            .then(res => res.json())
            .then(this.mapItem)
    }

    public async list(): Promise<T[]> {
        return this.fetch(`/api/${this.name}/index.json`)
            .then(res => res.json())
            .then(data => data[this.name].map(this.mapItem))
    }

    abstract mapItem: (data: Record<string, any>) => T
}
