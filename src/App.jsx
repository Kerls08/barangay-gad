import React, { useState } from 'react'
import { LanguageProvider } from './context/LanguageContext'
import { Header } from './components/layout/Header'
import { BottomNav } from './components/layout/BottomNav'
import { DiscreetDecoy } from './components/layout/DiscreetDecoy'
import { QuickExitButton } from './components/safety/QuickExitButton'
import { SafetyBanner } from './components/safety/SafetyBanner'
import { InstallPrompt } from './components/pwa/InstallPrompt'
import { HomeOverview } from './components/home/HomeOverview'
import { ServicesDirectory } from './components/directory/ServicesDirectory'
import { VawcTimeline } from './components/vawc/VawcTimeline'
import { HotlinesHub } from './components/emergency/HotlinesHub'
import { OfflineNotice } from './components/layout/OfflineNotice'

function MainApp() {
  const [activeTab, setActiveTab] = useState('home')
  const [isDiscreet, setIsDiscreet] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const showToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => {
      setToastMessage('')
    }, 2800)
  }

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-wrapper">
      {/* Camouflage / Discreet Mode Decoy Screen */}
      {isDiscreet && (
        <DiscreetDecoy onClose={() => setIsDiscreet(false)} />
      )}

      {/* Header */}
      <Header 
        onToggleDiscreet={() => setIsDiscreet(prev => !prev)}
        onNavigateHome={() => handleTabChange('home')}
      />

      {/* Persistent Floating Quick Exit Button */}
      <QuickExitButton />

      {/* Main Content Area */}
      <main className="main-content" id="main-content">
        <OfflineNotice />
        <SafetyBanner />
        <InstallPrompt />

        {activeTab === 'home' && (
          <HomeOverview onNavigateTab={handleTabChange} />
        )}

        {activeTab === 'services' && (
          <ServicesDirectory />
        )}

        {activeTab === 'vawc' && (
          <VawcTimeline />
        )}

        {activeTab === 'hotlines' && (
          <HotlinesHub onShowToast={showToast} />
        )}
      </main>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notice" role="status" aria-live="polite">
          {toastMessage}
        </div>
      )}

      {/* Mobile Bottom Navigation Bar */}
      <BottomNav 
        activeTab={activeTab} 
        onTabChange={handleTabChange} 
      />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  )
}
