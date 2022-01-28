import 'prismjs'
import 'prismjs/components/prism-actionscript.js'
import 'prismjs/components/prism-haxe.js'
import 'prismjs/components/prism-jsx.js'
import 'prismjs/components/prism-kotlin.js'
import 'prismjs/components/prism-typescript.js'

export type Highlighter = {
    highlightAllUnder(element: Element)
}

export const highlighter = globalThis.Prism as Highlighter
