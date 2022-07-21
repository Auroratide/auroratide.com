import { marked } from 'marked'

const renderer = {
    heading(text, level, _, slugger) {
        const id = slugger.slug(text)

        return `<div class="anchored-heading"><h${level} id="${id}">${text}</h${level}><a href="#${id}" class="heading-anchor"><vector-icon icon="link"></vector-icon><span class="visually-hidden">Anchor for ${text}</span></a></div>`
    }
}

marked.use({ renderer })

export const parseMarkdown = (markdown) => marked.parse(markdown)
