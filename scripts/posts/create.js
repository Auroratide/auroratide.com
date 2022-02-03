#!/usr/bin/env node

import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'
import mkdirp from 'mkdirp'
import { exec } from 'child_process'
import program from 'commander'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

let slug = null

program
    .version('0.1.0')
    .arguments('<slug>')
    .action(s => slug = s)
    .parse(process.argv)

if(!slug) {
    console.error('ERROR: Slug is required')
    process.exit(1)
}

const ENCODING = { encoding: 'utf-8' }
const TEMPLATE_PATH = path.join(__dirname, 'templates')
const POST_PATH = path.join('content', 'posts', slug)

if(fs.existsSync(POST_PATH)) {
    console.error('ERROR: Post with this name already exists')
    process.exit(1)
}

const date = new Date().toISOString()

const replaceNames = content => content
    .replace(/\$SLUG\$/g, slug)
    .replace(/\$DATE\$/g, date)

mkdirp.sync(POST_PATH)

fs.readdirSync(TEMPLATE_PATH).forEach(filename => {
    const contents = replaceNames(fs.readFileSync(path.join(TEMPLATE_PATH, filename), ENCODING))
    fs.writeFileSync(path.join(POST_PATH, replaceNames(filename)), contents, ENCODING)
})

if(!fs.existsSync(POST_PATH)) {
    console.error('ERROR: Post failed to save')
    process.exit(1)
}

console.log(`Post ${slug} created successfully!`)

exec(`open ${POST_PATH}/meta.json`)
