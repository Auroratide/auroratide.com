import type { ArtItem } from '../types'
import { InMemoryResourceApi } from '@/client/resources'
import { ArtForge } from '../testing/ArtForge'

describe('art api', () => {
    let forge: ArtForge
    let api: InMemoryResourceApi<ArtItem>

    beforeEach(() => {
        forge = new ArtForge()
    })

    describe('single art item', () => {
        test('it exists', async () => {
            const items = [forge.create('apple'), forge.create('orange')]
            api = new InMemoryResourceApi(items)
    
            const result = await api.one('orange')
    
            expect(result).toEqual(items[1])
        })

        test('art item does not exist', async () => {
            const items = [forge.create('apple'), forge.create('orange')]
            api = new InMemoryResourceApi(items)
    
            const result = await api.one('banana')
    
            expect(result).toBeNull()
        })
    })

    describe('entire art', () => {
        test('items exist', async () => {
            const items = [forge.create('apple'), forge.create('orange')]
            api = new InMemoryResourceApi(items)
    
            const result = await api.list()
    
            expect(result).toEqual(items)
        })
    })
})
