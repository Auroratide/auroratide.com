import { ArticleCard } from '.'
import { component } from '@/testing/component'
import { ColorForge } from '@/client/color/testing/ColorForge'

describe('ArticleCard', () => {
    test('rendering', () => {
        expect(() => component(ArticleCard)
            .prop('link', 'https://auroratide.com')
            .prop('article', {
                id: 'id',
                title: 'title',
                publishedAt: new Date(0),
                category: 'category',
                summary: 'summary',
                longSummary: 'summary',
                icon: 'icon',
                color: new ColorForge().hex('123456'),
            })
            .render()
        ).not.toThrow()
    })
})
