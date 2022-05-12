import path from 'path'
import fs from 'fs/promises'
import mkdirp from 'mkdirp'
import { parseMarkdown } from './markdown.js'

const parse = async (dir) => {
    const content = parseMarkdown(await fs.readFile(path.join(dir, 'content.md'), { encoding: 'utf-8' }))

    return { content }
}

export const single = async ({ name, contentPath, outputPath }) => {
    await mkdirp(outputPath)

    await fs.writeFile(path.join(outputPath, 'index.json'), JSON.stringify(await parse(contentPath)), { encoding: 'utf-8' })
}
