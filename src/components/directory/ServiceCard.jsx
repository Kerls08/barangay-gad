import React, { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  User, 
  FileText 
} from 'lucide-react'

export const ServiceCard = ({ service }) => {
  const { language, t } = useLanguage()
  const [isExpanded, setIsExpanded] = useState(false)

  const isCeb = language === 'ceb'
  const title = isCeb ? service.titleCeb : service.titleEn
  const desc = isCeb ? service.descCeb : service.descEn
  const officer = isCeb ? service.officerCeb : service.officerEn
  const requirements = isCeb ? service.requirementsCeb : service.requirementsEn
  const categoryLabel = isCeb ? service.categoryLabelCeb : service.categoryLabelEn

  return (
    <article className="service-card" aria-expanded={isExpanded}>
      <div 
        className="service-card-header"
        onClick={() => setIsExpanded(prev => !prev)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setIsExpanded(prev => !prev)}
      >
        <div className="service-main-info">
          <span className={`service-badge badge-${service.badgeColor}`}>
            {categoryLabel}
          </span>
          <h3 className="service-card-title">{title}</h3>
          <p className="service-card-desc">{desc}</p>
        </div>
        <button 
          type="button" 
          className="card-expand-btn"
          aria-label={isExpanded ? "Collapse details" : "Expand requirements and details"}
        >
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {isExpanded && (
        <div className="service-details-drawer">
          {/* Document Checklist */}
          <div>
            <div className="detail-section-title">
              <FileText size={16} />
              <span>{t('requirementsTitle')}</span>
            </div>
            <ul className="checklist-items">
              {requirements.map((req, index) => (
                <li key={index} className="checklist-item">
                  <CheckCircle2 size={16} className="check-icon" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Schedule & Venue Grid */}
          <div className="info-grid">
            <div className="info-box-item">
              <Clock size={16} style={{ color: '#6b21a8', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>{t('scheduleTitle')}</strong>
                <span>{service.schedule}</span>
              </div>
            </div>

            <div className="info-box-item">
              <MapPin size={16} style={{ color: '#0d9488', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Venue</strong>
                <span>{service.venue}</span>
              </div>
            </div>

            <div className="info-box-item" style={{ gridColumn: '1 / -1' }}>
              <User size={16} style={{ color: '#b45309', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>{t('officerTitle')}</strong>
                <span>{officer}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </article>
  )
}
