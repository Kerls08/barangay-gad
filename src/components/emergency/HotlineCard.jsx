import React, { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { Phone, Copy, Check, Clock } from 'lucide-react'

export const HotlineCard = ({ hotline, onShowToast }) => {
  const { language, t } = useLanguage()
  const [copied, setCopied] = useState(false)

  const isCeb = language === 'ceb'
  const name = isCeb ? hotline.nameCeb : hotline.nameEn
  const desc = isCeb ? hotline.descCeb : hotline.descEn
  const badgeText = isCeb ? hotline.badgeCeb : hotline.badgeEn

  const handleCopy = (number) => {
    navigator.clipboard.writeText(number).then(() => {
      setCopied(true)
      onShowToast(t('numberCopied'))
      setTimeout(() => setCopied(false), 2500)
    }).catch(() => {
      onShowToast('Could not copy number')
    })
  }

  // Clean phone string for tel: protocol
  const targetNumber = hotline.mobilePhone || hotline.phone
  const telHref = `tel:${targetNumber.replace(/[^\d+]/g, '')}`

  return (
    <article className={`hotline-card ${hotline.highlight ? 'highlight' : ''}`}>
      <div>
        <div className="hotline-top">
          <div>
            <span className="service-badge badge-purple" style={{ marginBottom: '4px' }}>
              {badgeText}
            </span>
            <h3 className="hotline-name">{name}</h3>
          </div>
          {hotline.is247 ? (
            <span className="badge-247">
              <Clock size={12} /> {t('badge247')}
            </span>
          ) : (
            <span className="badge-office">
              <Clock size={12} /> {t('badgeOfficeHours')}
            </span>
          )}
        </div>

        <p className="hotline-desc" style={{ marginTop: '8px' }}>
          {desc}
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {/* Primary Phone Display */}
        <div className="hotline-number-display">
          <div>
            <div style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: '600', textTransform: 'uppercase' }}>
              Primary Number
            </div>
            <div className="primary-number-text">{hotline.phone}</div>
          </div>
          <button
            type="button"
            className="copy-btn"
            onClick={() => handleCopy(hotline.phone)}
            title="Copy phone number"
            aria-label={`Copy ${hotline.phone}`}
          >
            {copied ? <Check size={13} style={{ color: '#10b981' }} /> : <Copy size={13} />}
            <span>{copied ? 'Copied' : t('copyNumber')}</span>
          </button>
        </div>

        {/* Mobile Alternate if available */}
        {hotline.mobilePhone && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.78rem', color: '#475569', padding: '0 4px' }}>
            <span>Mobile: <strong>{hotline.mobilePhone}</strong></span>
            <button
              type="button"
              onClick={() => handleCopy(hotline.mobilePhone)}
              style={{ background: 'none', border: 'none', color: '#6b21a8', cursor: 'pointer', fontSize: '0.75rem', fontWeight: '600' }}
            >
              Copy Mobile
            </button>
          </div>
        )}

        {/* 1-Tap Call Action */}
        <div className="hotline-actions">
          <a
            href={telHref}
            className={`btn-dial-now ${hotline.highlight ? 'danger' : ''}`}
            aria-label={`Call ${name} immediately at ${hotline.phone}`}
          >
            <Phone size={18} />
            <span>{t('callNow')} ({hotline.phone})</span>
          </a>
        </div>
      </div>
    </article>
  )
}
