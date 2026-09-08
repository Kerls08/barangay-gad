import React, { useState, useEffect } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { Download, X, Smartphone } from 'lucide-react'

export const InstallPrompt = () => {
  const { t } = useLanguage()
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showPrompt, setShowPrompt] = useState(false)

  useEffect(() => {
    const handleBeforeInstall = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      // Check if user previously dismissed
      const dismissed = localStorage.getItem('pwa_prompt_dismissed')
      if (!dismissed) {
        setShowPrompt(true)
      }
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstall)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall)
    }
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted') {
      setShowPrompt(false)
    }
    setDeferredPrompt(null)
  }

  const handleDismiss = () => {
    setShowPrompt(false)
    localStorage.setItem('pwa_prompt_dismissed', 'true')
  }

  if (!showPrompt) return null

  return (
    <div className="pwa-banner" role="region" aria-label="Install App">
      <div className="pwa-banner-content">
        <Smartphone size={28} style={{ color: '#fef08a', flexShrink: 0 }} />
        <div>
          <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>
            {t('pwaInstallTitle')}
          </div>
          <div style={{ fontSize: '0.78rem', color: '#e9d5ff', marginTop: '2px' }}>
            {t('pwaInstallDesc')}
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
        <button
          type="button"
          className="pwa-banner-btn"
          onClick={handleInstall}
        >
          <Download size={14} style={{ display: 'inline', marginRight: '4px' }} />
          {t('pwaInstallBtn')}
        </button>
        <button
          type="button"
          onClick={handleDismiss}
          style={{ background: 'transparent', border: 'none', color: '#cbd5e1', cursor: 'pointer', padding: '4px' }}
          aria-label="Dismiss install banner"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}
