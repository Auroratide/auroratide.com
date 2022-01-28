import path from 'path'
import { resource } from './resource/resource.js'
import { single } from './single/single.js'
import { time } from './time.js'

time('posts', () => resource({
    name: 'posts',
    contentPath: path.resolve('content', 'posts'),
    outputPath: path.resolve('static', 'api', 'posts'),
}))

time('portfolio', () => resource({
    name: 'portfolio',
    contentPath: path.resolve('content', 'portfolio'),
    outputPath: path.resolve('static', 'api', 'portfolio'),
}))

time('art', () => resource({
    name: 'art',
    contentPath: path.resolve('content', 'art'),
    outputPath: path.resolve('static', 'api', 'art'),
}))

time('sandbox', () => single({
    name: 'single',
    contentPath: path.resolve('content', 'sandbox'),
    outputPath: path.resolve('static', 'api', 'sandbox'),
}))