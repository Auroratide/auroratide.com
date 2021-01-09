import { PostList } from '.'
import { InMemoryApi } from '../api'
import { component } from '@/testing/component'

describe('PostList', () => {
    test('rendering', () => {
        expect(() => component(PostList)
            .prop('api', new InMemoryApi([]))
            .render()
        ).not.toThrow()
    })
})
