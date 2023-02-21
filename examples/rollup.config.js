import { defineConfig } from 'rollup'
import alias from 'fhx-alias'

export default defineConfig({
  input: './index.js',
  output: {
    file: './dist/index.js',
    format: 'es',
  },
  plugins: [
    alias({
      entries: {
        '@': './utils',
      },
    }),
  ],
})
