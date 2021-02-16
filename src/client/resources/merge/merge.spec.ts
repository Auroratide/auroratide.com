import { mergeAll, mergeOne } from '.'

type Item = {
    id: string,
    content?: string
}

describe('merging resources', () => {
    const item = (id: string, content?: string): Item => ({ id, content })

    describe('mergeAll', () => {
        test('merging with null original', () => {
            const original: Item[] = null
            const incoming: Item[] = [item('1')]
    
            const result = mergeAll(original, incoming)
    
            expect(result).toEqual([item('1')])
        })
    
        test('merging with non-intersecting items', () => {
            const original: Item[] = [item('0')]
            const incoming: Item[] = [item('1')]
    
            const result = mergeAll(original, incoming)
    
            // if it's not in the new list, remove it; it may no longer be relevant
            expect(result).toEqual([item('1')])
        })

        test('merging with intersecting items', () => {
            const original: Item[] = [item('0'), item('1', 'some content'), item('2', 'some content')]
            const incoming: Item[] = [item('1'), item('0', 'new content'), item('2', 'new content')]

            const result = mergeAll(original, incoming)
    
            // keep the new order, and keep all non-null fields already loaded
            expect(result).toEqual([item('1', 'some content'), item('0', 'new content'), item('2', 'new content')])
        })
    })

    describe('mergeOne', () => {
        test('merging with null original', () => {
            const original: Item[] = null
            const incoming: Item = item('1')
    
            const result = mergeOne(original, incoming)
    
            expect(result).toEqual([item('1')])
        })

        test('merging with non-intersecting item', () => {
            const original: Item[] = [item('0')]
            const incoming: Item = item('1')
    
            const result = mergeOne(original, incoming)
    
            // keep original items
            expect(result).toEqual([item('0'), item('1')])
        })

        test('merging with intersecting item with new field', () => {
            const original: Item[] = [item('0')]
            const incoming: Item = item('0', 'some content')
    
            const result = mergeOne(original, incoming)
    
            // add the new information
            expect(result).toEqual([item('0', 'some content')])
        })

        test('merging with intersecting item', () => {
            const original: Item[] = [item('0', 'some content')]
            const incoming: Item = item('0')
    
            const result = mergeOne(original, incoming)
    
            // remove missing keys, as they may be missing for a reason
            expect(result).toEqual([item('0')])
        })
    })
})
