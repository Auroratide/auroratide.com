import * as path from 'path'
import svelte from 'rollup-plugin-svelte'
import css from 'rollup-plugin-css-only'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

const production = !process.env.ROLLUP_WATCH
const clientSrc = path.resolve(__dirname, 'src', 'client')
const clientOut = path.resolve(__dirname, 'public', 'build')

export default {
    input: path.join(clientSrc, 'main.js'),
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'client',
        file: path.join(clientOut, 'bundle.js'),
    },
    plugins: [
        svelte({
            compilerOptions: {
                dev: !production
            }
        }),
        
        css({
            output: 'bundle.css'
        }),

        resolve({
            browser: true,
            dedupe: ['svelte'],
        }),

        commonjs(),
    ],
    watch: {
        clearScreen: false
    }
}
