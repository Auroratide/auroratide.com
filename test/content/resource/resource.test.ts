import { describe, test, expect, beforeEach } from 'vitest'
import path from 'path'
import fs from 'fs/promises'
import { resource } from '../../../content/_build/resource'
import rimraf from 'rimraf'

describe('resource content builder', () => {
    const name = 'posts'
    const contentPath = path.resolve(__dirname, 'testing', 'posts')
    const outputPath = path.resolve(__dirname, 'testing', 'out')

    beforeEach(() => {
        rimraf.sync(outputPath)
    })

    const expectEachFileCreated = async () => {
        const files = await fs.readdir(outputPath)

        expect(files.length).toEqual(3)
        expect(files).toEqual(expect.arrayContaining([
            'index.json',
            'sample-1.json',
            'sample-2.json',
        ]))
    }

    const expectListIsOrdered = async () => {
        const list = JSON.parse(await fs.readFile(path.join(outputPath, 'index.json'), { encoding: 'utf-8' }))

        expect(list.posts[0].id).toEqual('sample-2')
        expect(list.posts[1].id).toEqual('sample-1')
    }

    const expectContentIsParsed = async () => {
        const content = JSON.parse(await fs.readFile(path.join(outputPath, 'sample-1.json'), { encoding: 'utf-8' }))

        expect(content.content).toContain('<p>Some content</p>')
    }

    test('building', async () => {
        await resource({ name, contentPath, outputPath })

        await expectEachFileCreated()
        await expectListIsOrdered()
        await expectContentIsParsed()
    })
})
