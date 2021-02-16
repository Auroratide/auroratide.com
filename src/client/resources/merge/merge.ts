import type { ResourceItem } from "../Resource"

export const mergeAll = <T extends ResourceItem>(original: T[], incoming: T[]): T[] => {
    return incoming.map((item: T) => {
        if (original) {
            const originalItem = original.find((inOriginal: T) => inOriginal.id === item.id)
            if (originalItem) {
                Object.entries(originalItem).forEach(([key, value]) => {
                    item[key] = item[key] ?? value
                })    
            }
        }
        
        return item
    })
}

export const mergeOne = <T extends ResourceItem>(original: T[], incoming: T): T[] => {
    original = original ?? []
    const position = original.findIndex((inOriginal: T) => inOriginal.id === incoming.id)
    if (position > -1) {
        original[position] = incoming
    } else {
        original.push(incoming)
    }

    return original
}
