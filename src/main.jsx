import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { registerSW } from 'virtual:pwa-register'

// Register PWA service worker with immediate caching for 100% offline functionality
registerSW({
  immediate: true,
  onNeedRefresh() {
    console.log('Balubal GAD: New version available.')
  },
  onOfflineReady() {
    console.log('Balubal GAD: App is ready to work completely offline.')
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
