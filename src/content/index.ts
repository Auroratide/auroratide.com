import path from 'path'
import { posts } from './posts'
import { time } from './time'

time('posts', () => posts({
    contentPath: path.resolve('content', 'posts'),
    outputPath: path.resolve('public', 'api', 'posts'),
}))
