import type { PortfolioItem } from '../types'
import { InMemoryResourceApi } from '@/client/resources'
import { PortfolioForge } from '../testing/PortfolioForge'

describe('portfolio api', () => {
    let forge: PortfolioForge
    let api: InMemoryResourceApi<PortfolioItem>

    beforeEach(() => {
        forge = new PortfolioForge()
    })

    describe('single portfolio item', () => {
        test('post exists', async () => {
            const items = [forge.create('apple'), forge.create('orange')]
            api = new InMemoryResourceApi(items)
    
            const result = await api.one('orange')
    
            expect(result).toEqual(items[1])
        })

        test('portfolio item does not exist', async () => {
            const items = [forge.create('apple'), forge.create('orange')]
            api = new InMemoryResourceApi(items)
    
            const result = await api.one('banana')
    
            expect(result).toBeNull()
        })
    })

    describe('entire portfolio', () => {
        test('items exist', async () => {
            const items = [forge.create('apple'), forge.create('orange')]
            api = new InMemoryResourceApi(items)
    
            const result = await api.list()
    
            expect(result).toEqual(items)
        })
    })
})
