import { InMemoryApi } from '.'
import { PostForge } from '../testing/PostForge'

describe('posts api', () => {
    let forge: PostForge
    let api: InMemoryApi

    beforeEach(() => {
        forge = new PostForge()
    })

    describe('single post', () => {
        test('post exists', async () => {
            const items = [forge.create('apple'), forge.create('orange')]
            api = new InMemoryApi(items)
    
            const result = await api.one('orange')
    
            expect(result).toEqual(items[1])
        })

        test('post does not exist', async () => {
            const items = [forge.create('apple'), forge.create('orange')]
            api = new InMemoryApi(items)
    
            const result = await api.one('banana')
    
            expect(result).toBeNull()
        })
    })

    describe('list of posts', () => {
        test('posts exist', async () => {
            const items = [forge.create('apple'), forge.create('orange')]
            api = new InMemoryApi(items)
    
            const result = await api.list()
    
            expect(result).toEqual(items)
        })
    })
})
