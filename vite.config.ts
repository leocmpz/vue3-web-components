import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), dts()],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  build: {
    lib: {
      entry: resolve(__dirname, './src/web-components.ts'),
      formats: ['es', 'cjs'],
      name: 'vue3-web-components',
      fileName: format => (format === 'es' ? 'index.js' : 'index.cjs')
    },
    sourcemap: true,
    target: 'esnext',
    minify: 'terser'
  }
})
