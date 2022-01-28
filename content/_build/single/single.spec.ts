import path from 'path'
import fs from 'fs/promises'
import { single } from '.'
import rimraf from 'rimraf'

describe('single content builder', () => {
    const name = 'page'
    const contentPath = path.resolve(__dirname, 'testing', 'page')
    const outputPath = path.resolve(__dirname, 'testing', 'out')

    beforeEach(done => {
        rimraf(outputPath, done)
    })

    const expectEachFileCreated = async () => {
        const files = await fs.readdir(outputPath)

        expect(files.length).toEqual(1)
        expect(files).toEqual(expect.arrayContaining([
            'index.json',
        ]))
    }

    const expectContentIsParsed = async () => {
        const content = JSON.parse(await fs.readFile(path.join(outputPath, 'index.json'), { encoding: 'utf-8' }))

        expect(content.content).toContain('<p>Some content</p>')
    }

    test('building', async () => {
        await single({ name, contentPath, outputPath })

        await expectEachFileCreated()
        await expectContentIsParsed()
    })
})
