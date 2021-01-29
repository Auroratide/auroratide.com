import type { Resource } from '.'
import { InMemoryResourceApi } from '.'

describe('InMemoryResourceApi', () => {
    const item = (n: number): Resource => ({ id: n.toString() })
    let api: InMemoryResourceApi<Resource>

    describe('single post', () => {
        test('post exists', async () => {
            const items = [item(1), item(2)]
            api = new InMemoryResourceApi(items)
    
            const result = await api.one('2')
    
            expect(result).toEqual(items[1])
        })

        test('post does not exist', async () => {
            const items = [item(1), item(2)]
            api = new InMemoryResourceApi(items)
    
            const result = await api.one('3')
    
            expect(result).toBeNull()
        })
    })

    describe('list of posts', () => {
        test('posts exist', async () => {
            const items = [item(1), item(2)]
            api = new InMemoryResourceApi(items)
    
            const result = await api.list()
    
            expect(result).toEqual(items)
        })
    })
})
