import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    port: 1337
  },
  base: 'https://steveoh.github.io/logo-lightroom/'
})
