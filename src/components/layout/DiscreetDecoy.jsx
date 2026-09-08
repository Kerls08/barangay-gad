import React from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { CloudSun, ArrowLeft, Calendar, Info, MapPin } from 'lucide-react'

export const DiscreetDecoy = ({ onClose }) => {
  const { t } = useLanguage()

  return (
    <div className="decoy-overlay" role="dialog" aria-modal="true">
      <div className="decoy-container">
        <div className="decoy-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0d9488', fontSize: '0.85rem', fontWeight: '700' }}>
            <MapPin size={16} /> Barangay Balubal, Cagayan de Oro City
          </div>
          <h2 style={{ fontSize: '1.25rem', marginTop: '4px', color: '#1e293b' }}>
            {t('decoyTitle')}
          </h2>
          <p style={{ fontSize: '0.8rem', color: '#64748b' }}>
            {t('decoySubtitle')}
          </p>
        </div>

        <div className="decoy-weather-box">
          <CloudSun size={38} style={{ color: '#0284c7', flexShrink: 0 }} />
          <div>
            <div style={{ fontWeight: '700', fontSize: '0.95rem', color: '#0f172a' }}>
              {t('decoyWeather')}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#475569', marginTop: '2px' }}>
              {t('decoyRainChance')}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ padding: '12px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', fontWeight: '700', color: '#334155', marginBottom: '4px' }}>
              <Calendar size={15} style={{ color: '#0d9488' }} /> Community Announcement
            </div>
            <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: '1.45' }}>
              {t('decoyNotice1')}
            </p>
          </div>

          <div style={{ padding: '12px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', fontWeight: '700', color: '#334155', marginBottom: '4px' }}>
              <Info size={15} style={{ color: '#0284c7' }} /> Public Works & Traffic Notice
            </div>
            <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: '1.45' }}>
              {t('decoyNotice2')}
            </p>
          </div>
        </div>

        <button 
          type="button" 
          className="decoy-return-btn"
          onClick={onClose}
        >
          <ArrowLeft size={16} />
          <span>{t('exitDecoyBtn')}</span>
        </button>
      </div>
    </div>
  )
}
