import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue, { Options } from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'

const vuePluginConfig: Options = {
  template: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('iconify-')
    }
  }
}

export default defineConfig({
  plugins: [
    vue(vuePluginConfig),
    viteCompression()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
})
