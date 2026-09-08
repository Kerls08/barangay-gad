import React from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { Home, FileSpreadsheet, ShieldAlert, PhoneCall } from 'lucide-react'

export const BottomNav = ({ activeTab, onTabChange }) => {
  const { t } = useLanguage()

  const navItems = [
    { id: 'home', label: t('navHome'), icon: Home },
    { id: 'services', label: t('navServices'), icon: FileSpreadsheet },
    { id: 'vawc', label: t('navVawc'), icon: ShieldAlert },
    { id: 'hotlines', label: t('navHotlines'), icon: PhoneCall },
  ]

  return (
    <nav className="bottom-nav-bar" aria-label="Mobile navigation">
      {navItems.map((item) => {
        const Icon = item.icon
        const isActive = activeTab === item.id

        return (
          <button
            key={item.id}
            type="button"
            className={`bottom-nav-item ${isActive ? 'active' : ''}`}
            onClick={() => onTabChange(item.id)}
            aria-label={item.label}
          >
            <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
            <span>{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
