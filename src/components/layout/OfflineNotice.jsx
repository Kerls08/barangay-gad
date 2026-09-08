import React, { useState, useEffect } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { WifiOff } from 'lucide-react'

export const OfflineNotice = () => {
  const { language } = useLanguage()
  const [isOffline, setIsOffline] = useState(!navigator.onLine)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false)
      setDismissed(false)
    }
    const handleOffline = () => {
      setIsOffline(true)
      setDismissed(false)
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  if (!isOffline || dismissed) return null

  const isCeb = language === 'ceb'

  return (
    <div 
      style={{
        background: 'linear-gradient(135deg, #78350f, #92400e)',
        color: '#fef3c7',
        padding: '12px 16px',
        borderRadius: '12px',
        marginBottom: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
        boxShadow: '0 4px 12px rgba(120, 53, 15, 0.25)',
        border: '1px solid #b45309',
        fontSize: '0.82rem'
      }}
      role="status"
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <WifiOff size={22} style={{ color: '#fde68a', flexShrink: 0 }} />
        <div>
          <div style={{ fontWeight: '800', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>{isCeb ? "Offline Mode (Naka-save sa Phone)" : "Offline Mode Active"}</span>
            <span style={{ fontSize: '0.7rem', background: 'rgba(255, 255, 255, 0.2)', padding: '2px 8px', borderRadius: '12px' }}>
              PWA Cached
            </span>
          </div>
          <div style={{ color: '#fef3c7', marginTop: '2px', lineHeight: '1.4' }}>
            {isCeb 
              ? "Walay koneksyon sa internet, apan magamit gihapon ang tanang listahan sa serbisyo, emergency hotlines, ug giya sa VAWC."
              : "No internet connection detected, but all Balubal services, requirements checklists, and emergency numbers are saved and fully functional offline."
            }
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        style={{
          background: 'rgba(255, 255, 255, 0.2)',
          border: 'none',
          color: '#ffffff',
          padding: '6px 12px',
          borderRadius: '20px',
          cursor: 'pointer',
          fontWeight: '700',
          fontSize: '0.75rem',
          flexShrink: 0
        }}
      >
        OK
      </button>
    </div>
  )
}
