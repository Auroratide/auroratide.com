import * as path from 'path'
import svelte from 'rollup-plugin-svelte'
import css from 'rollup-plugin-css-only'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import sveltePreprocess from 'svelte-preprocess'
import typescript from '@rollup/plugin-typescript'

const production = !process.env.ROLLUP_WATCH
const clientSrc = path.resolve(__dirname, 'src', 'client')
const clientOut = path.resolve(__dirname, 'public', 'build')

export default {
    input: path.join(clientSrc, 'main.ts'),
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'client',
        file: path.join(clientOut, 'bundle.js'),
    },
    plugins: [
        // Compile svelte program
        svelte({
            preprocess: sveltePreprocess(),
            compilerOptions: {
                dev: !production
            }
        }),
        
        // Collect CSS into a file, for browser performance
        css({
            output: 'bundle.css'
        }),

        // Resolve dependencies
        resolve({
            browser: true,
            dedupe: ['svelte'],
        }),
        commonjs(),
        typescript({
            sourceMap: !production,
            inlineSources: !production
        }),

        // Refresh browser when changes occur in public
        !production && livereload('public'),

        // Minify for production
        production && terser()
    ],
    watch: {
        clearScreen: false
    }
}
