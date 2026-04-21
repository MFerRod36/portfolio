import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    headers: {
      'Content-Security-Policy': [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://use.typekit.net",
        "style-src-elem 'self' 'unsafe-inline' https://fonts.googleapis.com https://use.typekit.net",
        "img-src 'self' data: https:",
        "font-src 'self' data: https://fonts.gstatic.com https://use.typekit.net",
        "connect-src 'self' https:",
        "frame-ancestors 'none'",
      ].join('; '),
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
})
