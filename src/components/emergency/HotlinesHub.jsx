import React, { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { emergencyHotlines } from '../../data/emergencyData'
import { HotlineCard } from './HotlineCard'
import { AlertCircle, PhoneCall } from 'lucide-react'

export const HotlinesHub = ({ onShowToast }) => {
  const { t } = useLanguage()
  const [filterCategory, setFilterCategory] = useState('all')

  const filteredHotlines = emergencyHotlines.filter((item) => {
    if (filterCategory === 'all') return true
    return item.category === filterCategory
  })

  return (
    <section className="hotlines-hub-section" aria-label="Emergency Hotlines">
      <div className="section-header">
        <h2 className="section-title">{t('hotlinesTitle')}</h2>
        <p className="section-subtitle">{t('hotlinesSubtitle')}</p>
      </div>

      {/* Immediate Danger Banner */}
      <div className="danger-banner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <AlertCircle size={28} style={{ color: '#fca5a5', flexShrink: 0 }} />
          <div>
            <div style={{ fontWeight: '800', fontSize: '1rem' }}>
              {t('emergencyHelpPrompt')}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#fee2e2' }}>
              Oro Rescue 911 and Police Station 8 are on standby 24 hours a day.
            </div>
          </div>
        </div>
        <div>
          <a
            href="tel:911"
            className="btn-primary-action"
            style={{ color: '#b91c1c', fontWeight: '800' }}
          >
            <PhoneCall size={16} /> Dial 911
          </a>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="filter-pills-container" style={{ marginBottom: '18px' }}>
        <button
          type="button"
          className={`filter-pill ${filterCategory === 'all' ? 'active' : ''}`}
          onClick={() => setFilterCategory('all')}
        >
          All Hotlines ({emergencyHotlines.length})
        </button>
        <button
          type="button"
          className={`filter-pill ${filterCategory === 'rescue' ? 'active' : ''}`}
          onClick={() => setFilterCategory('rescue')}
        >
          Rescue & 911
        </button>
        <button
          type="button"
          className={`filter-pill ${filterCategory === 'police' ? 'active' : ''}`}
          onClick={() => setFilterCategory('police')}
        >
          Police & WCPD
        </button>
        <button
          type="button"
          className={`filter-pill ${filterCategory === 'barangay' ? 'active' : ''}`}
          onClick={() => setFilterCategory('barangay')}
        >
          Balubal Barangay Hall
        </button>
        <button
          type="button"
          className={`filter-pill ${filterCategory === 'welfare' ? 'active' : ''}`}
          onClick={() => setFilterCategory('welfare')}
        >
          CSWD Social Services
        </button>
        <button
          type="button"
          className={`filter-pill ${filterCategory === 'medical' ? 'active' : ''}`}
          onClick={() => setFilterCategory('medical')}
        >
          Health & Hospitals
        </button>
      </div>

      {/* Hotline Cards Grid */}
      <div className="hotlines-grid">
        {filteredHotlines.map((hotline) => (
          <HotlineCard 
            key={hotline.id} 
            hotline={hotline} 
            onShowToast={onShowToast} 
          />
        ))}
      </div>
    </section>
  )
}
