import path from 'path'
import fs from 'fs/promises'
import mkdirp from 'mkdirp'
import marked from 'marked'

interface Options {
    name: string
    contentPath: string
    outputPath: string
}

const parseAll = async (dir: string) => {
    const entries = await fs.readdir(dir)
    return Promise.all(entries.map(async entry => {
        const entryPath = path.join(dir, entry)
        const meta = JSON.parse(await fs.readFile(path.join(entryPath, 'meta.json'), { encoding: 'utf-8' }))
        const content = marked(await fs.readFile(path.join(entryPath, 'content.md'), { encoding: 'utf-8' }))

        return { content, ...meta }
    }))
}

const stripOffContent = items => items.map(item => {
    const { content, ...rest } = item
    return rest;
})

export const resource = async (options: Options) => {
    await mkdirp(options.outputPath)

    const items = await parseAll(options.contentPath)
    items.sort((lhs, rhs) => new Date(rhs.published_at).getTime() - new Date(lhs.published_at).getTime())

    await fs.writeFile(path.join(options.outputPath, 'index.json'), JSON.stringify({ [options.name]: stripOffContent(items) }), { encoding: 'utf-8' })
    await Promise.all(items.map(async item => await fs.writeFile(path.join(options.outputPath, `${item.id}.json`), JSON.stringify(item), { encoding: 'utf-8' })))
}
