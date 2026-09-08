import React, { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'
import { 
  ShieldCheck, 
  Lock, 
  FileCheck, 
  FileText, 
  Hospital, 
  AlertCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

export const VawcTimeline = () => {
  const { language, t } = useLanguage()
  const isCeb = language === 'ceb'
  const [showBpoDetails, setShowBpoDetails] = useState(false)

  const steps = [
    {
      stepNumber: 1,
      icon: ShieldCheck,
      titleEn: "Arrival at Balubal Barangay Hall",
      titleCeb: "Pag-abot sa Balubal Barangay Hall",
      descEn: "Enter the hall and state simply to the staff or front desk: 'I need to speak with the Barangay VAWC Desk Officer.' You DO NOT have to explain your personal situation or reason to guards, tanods, or bystanders.",
      descCeb: "Pagsulod sa barangay hall, sulti lang dayon sa staff: 'Gusto ko makig-istorya sa Barangay VAWC Desk Officer.' DILI kinahanglan isaysay ang imong kasinatian ngadto sa mga tanod o gwardya.",
      reassuranceEn: "Confidentiality begins the moment you step through the door.",
      reassuranceCeb: "Pribado ug kompidensiyal gikan sa pagsulod pa lang nimo."
    },
    {
      stepNumber: 2,
      icon: Lock,
      titleEn: "Entry into the Private VAWC Room",
      titleCeb: "Pagsulod sa Pribado nga VAWC Room",
      descEn: "You will be brought to the private, enclosed VAWC office. Under Philippine law (RA 9262), interviews MUST be conducted in private. Unauthorized persons, relatives of the abuser, or onlookers are strictly prohibited from entering.",
      descCeb: "Dad-on ka sa pribado ug sirado nga kwarto sa VAWC. Subay sa balaod (RA 9262), bawal ang ubang tawo, kabanay sa nangabuso, o mga miron nga mosulod o mamati.",
      reassuranceEn: "Your legal right to absolute privacy is non-negotiable.",
      reassuranceCeb: "Imong legal nga katungod ang hingpit nga pribasiya."
    },
    {
      stepNumber: 3,
      icon: FileCheck,
      titleEn: "Safe Narration & Intake Documentation",
      titleCeb: "Pagsaysay ug Pagsulat sa Hitabo (Intake Form)",
      descEn: "The trained VAWC Desk Officer will listen attentively without victim-blaming or judgment. They will record the facts on the standard National VAWC Intake Form and discuss your immediate safety needs.",
      descCeb: "Ang gibansay nga VAWC Officer mamati kanimo nga walay paghukom o pagbasol. Isulat ang mga detalye sa opisyal nga VAWC Intake Form.",
      reassuranceEn: "You will be listened to with respect, dignity, and care.",
      reassuranceCeb: "Pamatian ka uban ang pagtahod ug pagtagad."
    },
    {
      stepNumber: 4,
      icon: FileText,
      titleEn: "Barangay Protection Order (BPO) Issuance",
      titleCeb: "Pag-isyu sa Barangay Protection Order (BPO)",
      descEn: "The Punong Barangay or Kagawad-on-duty can immediately issue an ex-parte BPO. This legally prohibits the respondent from causing further harm, contacting you, or coming near your home and workplace for 15 days.",
      descCeb: "Ang Kapitan o Kagawad makapagawas dayon og BPO. Nagmando kini sa nangabuso nga dili mopaduol, dili motawag, ug dili maghasol kanimo sulod sa 15 ka adlaw.",
      reassuranceEn: "Violating a BPO is a criminal offense punishable by arrest.",
      reassuranceCeb: "Ang paglapas sa BPO usa ka krimen ug mahimong dakpon dayon."
    },
    {
      stepNumber: 5,
      icon: Hospital,
      titleEn: "Medical Referrals & Protective Support",
      titleCeb: "Referral sa Ospital, kapulisan, ug CSWD Shelter",
      descEn: "If medical attention or medico-legal documentation is needed, the barangay provides an official referral to JR Borja Hospital or NMMC. If you need a safe place to sleep, coordination is made with CSWD CDO Crisis Shelter.",
      descCeb: "Kung gikinahanglan ang medical checkup, hatagan ka og libreng referral sa JR Borja o NMMC. Kung gikinahanglan ang kapasilongan, tabangan ka sa CSWD Crisis Shelter.",
      reassuranceEn: "Comprehensive support for your health, healing, and legal journey.",
      reassuranceCeb: "Kompleto nga tabang alang sa imong kaluwasan ug kaayohan."
    }
  ]

  return (
    <section className="vawc-timeline-section" aria-label="VAWC Reporting Guide">
      <div className="section-header">
        <h2 className="section-title">{t('vawcTitle')}</h2>
        <p className="section-subtitle">{t('vawcSubtitle')}</p>
      </div>

      {/* BPO Explanation Banner */}
      <div className="rights-highlight-card">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <h3>
            <AlertCircle size={20} style={{ color: '#fef08a' }} />
            {t('bpoTitle')}
          </h3>
          <button
            type="button"
            onClick={() => setShowBpoDetails(prev => !prev)}
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              border: 'none',
              color: '#ffffff',
              padding: '4px 10px',
              borderRadius: '20px',
              fontSize: '0.78rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            {showBpoDetails ? 'Hide' : 'Learn More'}
            {showBpoDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>

        <p>{t('bpoDesc')}</p>

        {showBpoDetails && (
          <div style={{
            background: 'rgba(0, 0, 0, 0.25)',
            borderRadius: '8px',
            padding: '12px',
            marginTop: '10px',
            fontSize: '0.82rem',
            lineHeight: '1.5'
          }}>
            <strong>Important Legal Notes:</strong>
            <ul style={{ paddingLeft: '18px', marginTop: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <li>BPO applications require <strong>zero payment / absolutely free</strong>.</li>
              <li>A BPO is effective immediately upon issuance and lasts for 15 days.</li>
              <li>During or after 15 days, victims can be assisted in filing for a Temporary Protection Order (TPO) or Permanent Protection Order (PPO) in Family Court.</li>
            </ul>
          </div>
        )}

        <div style={{ marginTop: '12px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <span className="rights-pill-tag">Republic Act 9262 (Anti-VAWC)</span>
          <span className="rights-pill-tag">RA 11313 (Safe Spaces Act)</span>
          <span className="rights-pill-tag">100% Confidential</span>
        </div>
      </div>

      {/* Visual Timeline */}
      <div className="timeline-card-container">
        <div className="timeline-list">
          {steps.map((step) => {
            const Icon = step.icon
            const title = isCeb ? step.titleCeb : step.titleEn
            const desc = isCeb ? step.descCeb : step.descEn
            const reassurance = isCeb ? step.reassuranceCeb : step.reassuranceEn

            return (
              <div key={step.stepNumber} className="timeline-item">
                <div className="timeline-step-badge" title={`Step ${step.stepNumber}`}>
                  <Icon size={18} />
                </div>
                <div className="timeline-content-box">
                  <h3 className="timeline-step-title">{title}</h3>
                  <p className="timeline-step-desc">{desc}</p>
                  <div className="timeline-reassurance">
                    <ShieldCheck size={14} />
                    <span>{reassurance}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
