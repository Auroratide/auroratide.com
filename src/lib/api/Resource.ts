export type ResourceItem = {
    id: string
}

export interface ResourceApi<T extends ResourceItem> {
    list(): Promise<T[]>
    one(id: string): Promise<T>
}
