import React, { useState, useEffect } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { EyeOff, Globe, WifiOff } from 'lucide-react'

export const Header = ({ onToggleDiscreet, onNavigateHome }) => {
  const { language, toggleLanguage, t } = useLanguage()
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return (
    <header className="site-header" role="banner">
      <div className="header-container">
        <div 
          className="brand-wrapper" 
          onClick={onNavigateHome}
          title="Return to home"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onNavigateHome()}
        >
          <img 
            src="/balubal-gad-seal.jpg" 
            alt="Barangay Balubal GAD Official Seal" 
            className="brand-seal"
          />
          <div className="brand-text">
            <div className="brand-title">
              {t('appName')}
              {!isOnline && (
                <span title={t('offlineStatus')} style={{ color: '#d97706', display: 'inline-flex' }}>
                  <WifiOff size={14} />
                </span>
              )}
            </div>
            <div className="brand-subtitle">
              {t('appSubtitle')}
            </div>
          </div>
        </div>

        <div className="header-actions">
          {/* Discreet Camouflage Mode Button */}
          <button 
            type="button" 
            className="discreet-toggle-btn"
            onClick={onToggleDiscreet}
            title={t('discreetMode')}
            aria-label={t('discreetMode')}
          >
            <EyeOff size={15} />
            <span className="hide-on-mobile">{t('discreetMode')}</span>
          </button>

          {/* Bilingual Language Switcher */}
          <button 
            type="button" 
            className="lang-toggle-btn" 
            onClick={toggleLanguage}
            title="Switch language / Usba ang pinulongan"
            aria-label="Switch between English and Bisaya"
          >
            <Globe size={14} />
            <span className={language === 'en' ? 'lang-active' : ''}>EN</span>
            <span>|</span>
            <span className={language === 'ceb' ? 'lang-active' : ''}>CEB</span>
          </button>
        </div>
      </div>
    </header>
  )
}
