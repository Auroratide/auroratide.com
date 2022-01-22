import path from 'path'
import fs from 'fs/promises'
import mkdirp from 'mkdirp'
import { marked } from 'marked'

interface Options {
    name: string
    contentPath: string
    outputPath: string
}

const parse = async (dir: string) => {
    const content = marked.parse(await fs.readFile(path.join(dir, 'content.md'), { encoding: 'utf-8' }))

    return { content }
}

export const single = async (options: Options) => {
    await mkdirp(options.outputPath)

    await fs.writeFile(path.join(options.outputPath, 'index.json'), JSON.stringify(await parse(options.contentPath)), { encoding: 'utf-8' })
}
