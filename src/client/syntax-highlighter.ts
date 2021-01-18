import 'prismjs'
import 'prismjs/components/prism-jsx'

export type Highlighter = {
    highlightAllUnder(element: Element)
}

export const highlighter = globalThis.Prism as Highlighter
