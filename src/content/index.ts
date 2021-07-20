import path from 'path'
import { resource } from './resource'
import { single } from './single'
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

time('art', () => resource({
    name: 'art',
    contentPath: path.resolve('content', 'art'),
    outputPath: path.resolve('public', 'api', 'art'),
}))

time('sandbox', () => single({
    name: 'single',
    contentPath: path.resolve('content', 'sandbox'),
    outputPath: path.resolve('public', 'api', 'sandbox'),
}))