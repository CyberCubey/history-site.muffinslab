import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
       manifest: {
	"name": "Histori",
	"short_name": "Hist",
	"start_url": "./index.html",
	"id": "./index.html",

	"display": "standalone",
	"background_color": "#ffffff",
	"theme_color": "#ffffff",
	"orientation": "portrait-primary",

    "icons": [{
      "src": "./src/assets/web-app-manifest-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "./src/assets/web-app-manifest-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    },
    {
    "src": "./src/assets/180.png",
      "sizes": "180x180",
      "type": "image/png"
    },
    {
    "src": "./src/assets/120.png",
      "sizes": "120x120",
      "type": "image/png"
    },
    {
    "src": "./src/assets/60.png",
      "sizes": "60x60",
      "type": "image/png"
    },
    {
    "src": "./src/assets/1024.png",
      "sizes": "1024x1024",
      "type": "image/png"
    }
  ]
    }
  
})]
})