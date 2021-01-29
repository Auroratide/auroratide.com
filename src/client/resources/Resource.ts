export type Resource = {
    id: string
}

export interface ResourceApi<T extends Resource> {
    list(): Promise<T[]>
    one(id: string): Promise<T>
}

export interface ResourceStore<T extends Resource> {
    list(): T[]
    one(id: string): T
}
