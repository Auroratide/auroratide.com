export type ResourceItem = {
    id: string
}

export interface ResourceApi<T extends ResourceItem> {
    list(): Promise<T[]>
    one(id: string): Promise<T>
}

export interface Resource<T extends ResourceItem> {
    list(): T[]
    one(id: string): T
}
