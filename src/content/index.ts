import path from 'path'
import { resource } from './resource'
import { time } from './time'

time('posts', () => resource({
    name: 'posts',
    contentPath: path.resolve('content', 'posts'),
    outputPath: path.resolve('public', 'api', 'posts'),
}))

time('portfolio', () => resource({
    name: 'portfolio',
    contentPath: path.resolve('content', 'portfolio'),
    outputPath: path.resolve('public', 'api', 'portfolio'),
}))
