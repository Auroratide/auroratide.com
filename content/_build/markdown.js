import { marked } from 'marked'

const renderer = {
    heading(text, level) {
        const escapedText = text.toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9\-]/g, '')

        return `<h${level} id="${escapedText}" class="anchored-heading">${text}<a href="#${escapedText}" class="heading-anchor"><vector-icon icon="link"></vector-icon><span class="visually-hidden">Anchor for ${text}</span></a></h${level}>`
    }
}

marked.use({ renderer })

export const parseMarkdown = (markdown) => marked.parse(markdown)
