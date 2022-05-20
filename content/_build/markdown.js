import { marked } from 'marked'

const renderer = {
    heading(text, level, _, slugger) {
        const id = slugger.slug(text)

        return `<h${level} id="${id}" class="anchored-heading">${text}<a href="#${id}" class="heading-anchor"><vector-icon icon="link"></vector-icon><span class="visually-hidden">Anchor for ${text}</span></a></h${level}>`
    }
}

marked.use({ renderer })

export const parseMarkdown = (markdown) => marked.parse(markdown)
