import React from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { 
  ShieldCheck, 
  HeartHandshake, 
  Sparkles, 
  ArrowRight, 
  PhoneCall, 
  FileSpreadsheet,
  AlertTriangle,
  Lock
} from 'lucide-react'

export const HomeOverview = ({ onNavigateTab }) => {
  const { t } = useLanguage()

  return (
    <div className="home-overview-container">
      {/* Hero Banner */}
      <div className="hero-card">
        <div className="hero-badge">
          <ShieldCheck size={14} />
          <span>{t('heroBadge')}</span>
        </div>
        <h1 className="hero-title">
          {t('heroTitle')}
        </h1>
        <p className="hero-desc">
          {t('heroDesc')}
        </p>

        <div className="hero-quick-actions">
          <button
            type="button"
            className="btn-primary-action"
            onClick={() => onNavigateTab('vawc')}
          >
            <Lock size={16} style={{ color: '#7e22ce' }} />
            <span>{t('viewGuideBtn')}</span>
            <ArrowRight size={14} />
          </button>

          <button
            type="button"
            className="btn-outline-action"
            onClick={() => onNavigateTab('services')}
          >
            <FileSpreadsheet size={16} />
            <span>{t('navServices')}</span>
          </button>

          <button
            type="button"
            className="btn-danger-action"
            onClick={() => onNavigateTab('hotlines')}
          >
            <PhoneCall size={16} />
            <span>{t('navHotlines')}</span>
          </button>
        </div>
      </div>

      {/* 3 Core Pillars */}
      <div className="pillars-grid">
        <div 
          className="pillar-card" 
          onClick={() => onNavigateTab('vawc')}
          style={{ cursor: 'pointer' }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onNavigateTab('vawc')}
        >
          <div className="pillar-icon-box" style={{ background: '#f3e8ff', color: '#7e22ce' }}>
            <ShieldCheck size={24} />
          </div>
          <div className="pillar-title">{t('pillarSafety')}</div>
          <div className="pillar-desc">{t('pillarSafetyDesc')}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#7e22ce', fontSize: '0.78rem', fontWeight: '700', marginTop: 'auto', paddingTop: '8px' }}>
            Learn reporting steps <ArrowRight size={13} />
          </div>
        </div>

        <div 
          className="pillar-card" 
          onClick={() => onNavigateTab('services')}
          style={{ cursor: 'pointer' }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onNavigateTab('services')}
        >
          <div className="pillar-icon-box" style={{ background: '#ccfbf1', color: '#0f766e' }}>
            <HeartHandshake size={24} />
          </div>
          <div className="pillar-title">{t('pillarHealth')}</div>
          <div className="pillar-desc">{t('pillarHealthDesc')}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#0f766e', fontSize: '0.78rem', fontWeight: '700', marginTop: 'auto', paddingTop: '8px' }}>
            Check health clinic days <ArrowRight size={13} />
          </div>
        </div>

        <div 
          className="pillar-card" 
          onClick={() => onNavigateTab('services')}
          style={{ cursor: 'pointer' }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onNavigateTab('services')}
        >
          <div className="pillar-icon-box" style={{ background: '#fef3c7', color: '#b45309' }}>
            <Sparkles size={24} />
          </div>
          <div className="pillar-title">{t('pillarLivelihood')}</div>
          <div className="pillar-desc">{t('pillarLivelihoodDesc')}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#b45309', fontSize: '0.78rem', fontWeight: '700', marginTop: 'auto', paddingTop: '8px' }}>
            View requirements & benefits <ArrowRight size={13} />
          </div>
        </div>
      </div>

      {/* Emergency Quick Access Box */}
      <div className="emergency-callout-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: '#fee2e2',
            color: '#dc2626',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <AlertTriangle size={22} />
          </div>
          <div>
            <div style={{ fontWeight: '800', color: '#1e293b', fontSize: '0.95rem' }}>
              {t('emergencyHelpPrompt')}
            </div>
            <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
              Police Station 8 (Balubal) & Oro Rescue 911 are ready 24/7.
            </div>
          </div>
        </div>

        <div className="emergency-callout-actions">
          <a
            href="tel:911"
            className="btn-danger-action"
          >
            <PhoneCall size={16} /> 911 Rescue
          </a>
          <button
            type="button"
            className="btn-primary-action"
            onClick={() => onNavigateTab('hotlines')}
          >
            View All Hotlines
          </button>
        </div>
      </div>
    </div>
  )
}
