import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "leaflet/dist/leaflet.css";`
      }
    }
  },
  resolve: {
    alias: {
      '@fortawesome/react-fontawesome': '@fortawesome/react-fontawesome/index.es.js',
    },
  },
  build: {
    rollupOptions: {
      external: ['react-leaflet']
    }
  }
})
