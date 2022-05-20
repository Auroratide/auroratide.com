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

        const headingMatches = Array.from(result.matchAll(/<h(\d).*?>.*?<\/h\d>/g))
        expect(headingMatches).toHaveLength(2)

        expect(level(headingMatches[0])).toEqual(2)
        expect(level(headingMatches[1])).toEqual(3)
    })

    test('heading anchors', () => {
        const id = (match) => match[1].match(/id="(.*?)"/)[1]
        const anchor = (match) => match[2].match(/<a(.*?)>.*?<\/a>/)[1]

        const result = parseMarkdown(content)

        const headingMatches = Array.from(result.matchAll(/<h\d(.*?)>(.*?)<\/h\d>/g))
        expect(headingMatches).toHaveLength(2)

        expect(id(headingMatches[0])).toEqual('a-heading')
        expect(anchor(headingMatches[0])).toContain('href="#a-heading"')

        expect(id(headingMatches[1])).toEqual('another-heading')
        expect(anchor(headingMatches[1])).toContain('href="#another-heading"')
    })

    test('duplicate heading names', () => {
        const id = (match) => match[1].match(/id="(.*?)"/)[1]

        const content = `
## Heading

## Heading

## Heading 1

## Heading`

        const result = parseMarkdown(content)

        const headingMatches = Array.from(result.matchAll(/<h\d(.*?)>(.*?)<\/h\d>/g))
        expect(headingMatches).toHaveLength(4)

        // all unique
        const uniqueHeadings = new Set(headingMatches.map(it => id(it)))
        expect(uniqueHeadings.size).toEqual(headingMatches.length)

        // For now, ignoring the case of ## Heading_1, as it's unlikely I'll use an underscore in a heading
    })
})
