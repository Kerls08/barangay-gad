import React, { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { ShieldAlert, X } from 'lucide-react'

export const SafetyBanner = () => {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(() => {
    return sessionStorage.getItem('hide_safety_banner') !== 'true'
  })

  if (!isVisible) return null

  const handleDismiss = () => {
    setIsVisible(false)
    sessionStorage.setItem('hide_safety_banner', 'true')
  }

  return (
    <aside className="safety-banner" aria-label="Safety advice">
      <div className="safety-banner-content">
        <ShieldAlert size={20} className="safety-banner-icon" />
        <div>
          <div className="safety-banner-title">{t('safetyTipTitle')}</div>
          <div className="safety-banner-desc">{t('safetyTipText')}</div>
        </div>
      </div>
      <button 
        type="button" 
        className="safety-banner-close" 
        onClick={handleDismiss}
        title={t('hideTip')}
        aria-label={t('hideTip')}
      >
        <X size={16} />
      </button>
    </aside>
  )
}
