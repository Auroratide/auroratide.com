import { parseMarkdown } from '../../content/_build/markdown'

const content = `
## A heading

A paragraph with five words.

### Another heading

Another paragraph, but with six words.
`

describe('parseMarkdown', () => {
    test('heading levels', () => {
        const level = (match) => parseInt(match[1])

        const result = parseMarkdown(content)

        const headingMatches = Array.from(result.matchAll(/<h(\d).*?>(.*?)<\/h\d>/g))
        expect(headingMatches).toHaveLength(2)

        expect(level(headingMatches[0])).toEqual(2)
        expect(level(headingMatches[1])).toEqual(3)
    })
})
