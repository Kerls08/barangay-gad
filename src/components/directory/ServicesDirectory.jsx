import React, { useState, useMemo } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { servicesData } from '../../data/servicesData'
import { ServiceCard } from './ServiceCard'
import { Search, X } from 'lucide-react'

export const ServicesDirectory = () => {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', labelKey: 'filterAll' },
    { id: 'health', labelKey: 'filterHealth' },
    { id: 'solo-parent', labelKey: 'filterSoloParent' },
    { id: 'livelihood', labelKey: 'filterLivelihood' },
    { id: 'legal', labelKey: 'filterLegal' },
    { id: 'senior-pwd', labelKey: 'filterSeniorPwd' },
  ]

  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      // Category match
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory

      // Search match
      const query = searchQuery.trim().toLowerCase()
      if (!query) return matchesCategory

      const titleEnMatch = service.titleEn.toLowerCase().includes(query)
      const titleCebMatch = service.titleCeb.toLowerCase().includes(query)
      const descEnMatch = service.descEn.toLowerCase().includes(query)
      const descCebMatch = service.descCeb.toLowerCase().includes(query)
      const reqEnMatch = service.requirementsEn.some(r => r.toLowerCase().includes(query))
      const reqCebMatch = service.requirementsCeb.some(r => r.toLowerCase().includes(query))

      const matchesSearch = titleEnMatch || titleCebMatch || descEnMatch || descCebMatch || reqEnMatch || reqCebMatch
      return matchesCategory && matchesSearch
    })
  }, [searchQuery, selectedCategory])

  return (
    <section className="services-directory-section" aria-label="Services Directory">
      <div className="section-header">
        <h2 className="section-title">{t('directoryTitle')}</h2>
        <p className="section-subtitle">{t('directorySubtitle')}</p>
      </div>

      {/* Search Bar */}
      <div className="search-box-wrapper">
        <Search size={18} className="search-icon-inside" />
        <input
          type="text"
          className="search-input"
          placeholder={t('searchPlaceholder')}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search services"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            style={{
              position: 'absolute',
              right: '14px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: '#94a3b8'
            }}
            aria-label="Clear search"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Filter Pills */}
      <div className="filter-pills-container" role="tablist" aria-label="Filter categories">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={selectedCategory === cat.id}
            className={`filter-pill ${selectedCategory === cat.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {t(cat.labelKey)}
          </button>
        ))}
      </div>

      {/* Services List */}
      <div className="services-list">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '40px 20px',
            background: '#ffffff',
            borderRadius: '16px',
            border: '1px dashed #cbd5e1'
          }}>
            <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
              {t('noServicesFound')}
            </p>
            <button
              type="button"
              className="btn-primary-action"
              style={{ marginTop: '12px', padding: '8px 16px' }}
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
