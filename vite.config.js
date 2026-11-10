import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  base: '/childbook/',
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        designSystem: fileURLToPath(new URL('./design-system/index.html', import.meta.url)),
      },
    },
  },
})
