import 'prismjs'
import 'prismjs/components/prism-actionscript'
import 'prismjs/components/prism-haxe'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-kotlin'

export type Highlighter = {
    highlightAllUnder(element: Element)
}

export const highlighter = globalThis.Prism as Highlighter
