import 'prismjs'

export type Highlighter = {
    highlightAllUnder(element: Element)
}

export const highlighter = globalThis.Prism as Highlighter
