import React, { useEffect } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { LogOut } from 'lucide-react'

export const QuickExitButton = () => {
  const { t } = useLanguage()

  const executeQuickExit = () => {
    // 1. Clear session and any temporary form entries
    try {
      sessionStorage.clear()
    } catch {
      // ignore
    }

    // 2. Replace current location so "Back" button does not return to VAWC page
    window.location.replace('https://www.google.com')
  }

  // Keyboard shortcut listener: Escape key triggers quick exit
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        executeQuickExit()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <button
      type="button"
      id="quick-exit-btn"
      className="quick-exit-fab"
      onClick={executeQuickExit}
      title="Press to instantly leave this page (or press ESC key)"
      aria-label="Quick Exit to safe page"
    >
      <LogOut size={18} className="quick-exit-icon" />
      <span>{t('quickExit')}</span>
    </button>
  )
}
