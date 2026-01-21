'use client';

import { FileText, AlertTriangle, Scale, UserCheck, CheckCircle, XCircle, Shield, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section - Responsive */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-background via-white to-primary/5 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-primary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-4 sm:mb-6"
            >
              <FileText size={60} className="sm:w-20 sm:h-20 mx-auto" style={{ color: 'var(--color-primary)' }} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
              style={{ color: 'var(--color-text)' }}
            >
              Terms of Service
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Please read these terms carefully before using pi-health
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xs sm:text-sm font-medium"
              style={{ color: 'var(--color-primary)' }}
            >
              Last Updated: January 5, 2026
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 py-10 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          
          {/* Agreement to Terms */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-lg"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--color-text)' }}>
              Agreement to Terms
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              <p>
                These Terms of Service ("Terms") govern your access to and use of the pi-health mobile application 
                ("App," "Service," "we," or "our"). By downloading, installing, or using pi-health, you agree to 
                be bound by these Terms.
              </p>
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2" style={{ borderColor: 'var(--color-primary)', backgroundColor: 'rgba(250, 138, 97, 0.05)' }}>
                <p className="font-bold text-base sm:text-lg md:text-xl" style={{ color: 'var(--color-text)' }}>
                  ⚠️ If you do not agree to these Terms, do not use the App.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Eligibility */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-lg"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl flex-shrink-0" style={{ backgroundColor: 'rgba(250, 138, 97, 0.1)' }}>
                <UserCheck size={28} className="sm:w-9 sm:h-9" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-text)' }}>
                Eligibility
              </h2>
            </div>

            <ul className="space-y-3 sm:space-y-4">
              {[
                "You must be at least 13 years old to create an account and use pi-health",
                "If you are under 18, you must have parental or guardian consent to use the App",
                "You must provide accurate and complete information during registration",
                "You are responsible for maintaining the confidentiality of your account credentials",
                "You agree to notify us immediately of any unauthorized access to your account"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                  <CheckCircle size={20} className="sm:w-6 sm:h-6 shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
                  <span style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Medical Disclaimer - Highlighted */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-xl border-2 sm:border-4"
            style={{ borderColor: 'var(--color-status-error)' }}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-red-50 flex-shrink-0">
                <AlertTriangle size={32} className="sm:w-10 sm:h-10" style={{ color: 'var(--color-status-error)' }} />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-status-error)' }}>
                Medical Disclaimer
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <p className="font-bold text-xl sm:text-2xl" style={{ color: 'var(--color-status-error)' }}>
                IMPORTANT: pi-health is NOT a Medical Device
              </p>
              
              <p className="text-sm sm:text-base md:text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                pi-health is a <strong>personal health tracking tool</strong> designed for informational and 
                wellness purposes only.
              </p>

              {/* It is NOT */}
              <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl" style={{ backgroundColor: 'rgba(239, 68, 68, 0.05)' }}>
                <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4" style={{ color: 'var(--color-text)' }}>
                  It is NOT:
                </h3>
                <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                  {[
                    "A substitute for professional medical advice",
                    "A medical device approved by any authority",
                    "Intended to diagnose or treat diseases",
                    "A replacement for doctor visits",
                    "HIPAA-compliant for healthcare settings"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <XCircle size={18} className="sm:w-5 sm:h-5 shrink-0 mt-0.5" style={{ color: 'var(--color-status-error)' }} />
                      <span className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* You acknowledge */}
              <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl" style={{ backgroundColor: 'rgba(239, 68, 68, 0.05)' }}>
                <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4" style={{ color: 'var(--color-text)' }}>
                  You acknowledge and agree that:
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    "All AI-generated insights are for informational purposes only",
                    "You should always consult a qualified healthcare professional before making any medical decisions",
                    "You use the App's health tracking and AI features at your own risk",
                    "We are not responsible for any health outcomes resulting from your use of the App",
                    "In case of medical emergency, immediately call emergency services (911, 108, etc.)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm">
                      <AlertTriangle size={16} className="sm:w-[18px] sm:h-[18px] shrink-0 mt-1" style={{ color: 'var(--color-status-error)' }} />
                      <span style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warning box */}
              <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl border-2" style={{ borderColor: 'var(--color-status-error)', backgroundColor: 'rgba(239, 68, 68, 0.05)' }}>
                <p className="font-bold text-base sm:text-lg mb-2" style={{ color: 'var(--color-status-error)' }}>
                  ⚠️ Never Delay or Ignore Medical Advice
                </p>
                <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  Never disregard professional medical advice or delay seeking medical treatment because of 
                  information provided by pi-health. Always seek the advice of your physician or other qualified 
                  healthcare provider with any questions regarding a medical condition.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Permitted vs Prohibited Use - Side by Side */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Permitted Use */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border-2"
              style={{ borderColor: 'var(--color-status-success)' }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <CheckCircle size={28} className="sm:w-8 sm:h-8 flex-shrink-0" style={{ color: 'var(--color-status-success)' }} />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-text)' }}>
                  Permitted Use
                </h2>
              </div>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>
                You may use pi-health for:
              </p>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "Personal health tracking and wellness monitoring",
                  "Recording vital signs, medications, and health metrics",
                  "Uploading and storing personal medical documents",
                  "Tracking pregnancy, child health, and family wellness",
                  "Using AI features to analyze your own health data",
                  "Setting medication reminders and health goals"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                    <CheckCircle size={16} className="sm:w-[18px] sm:h-[18px] shrink-0 mt-0.5" style={{ color: 'var(--color-status-success)' }} />
                    <span style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Prohibited Use */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border-2"
              style={{ borderColor: 'var(--color-status-error)' }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <XCircle size={28} className="sm:w-8 sm:h-8 flex-shrink-0" style={{ color: 'var(--color-status-error)' }} />
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-text)' }}>
                  Prohibited Use
                </h2>
              </div>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>
                You agree NOT to:
              </p>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "Use the App for illegal or unauthorized purposes",
                  "Upload false or fraudulent health information",
                  "Impersonate another person or entity",
                  "Share your account credentials with others",
                  "Reverse engineer or hack the App",
                  "Use automated systems (bots, scrapers)",
                  "Upload viruses or malicious code",
                  "Violate applicable laws or regulations",
                  "Use commercially without permission",
                  "Store PHI if subject to HIPAA"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                    <XCircle size={16} className="sm:w-[18px] sm:h-[18px] shrink-0 mt-0.5" style={{ color: 'var(--color-status-error)' }} />
                    <span style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* User Content & Data Ownership */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-lg"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8" style={{ color: 'var(--color-text)' }}>
              User Content & Data Ownership
            </h2>

            <div className="space-y-6 sm:space-y-8">
              {/* Your Data Belongs to You */}
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <Shield size={24} className="sm:w-7 sm:h-7 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                  <h3 className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>
                    Your Data Belongs to You
                  </h3>
                </div>
                <p className="text-sm sm:text-base md:text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                  You retain all ownership rights to the health data, images, and content you upload to pi-health. 
                  We do not claim ownership of your personal information or medical records.
                </p>
              </div>

              {/* License Grant */}
              <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl" style={{ backgroundColor: 'var(--color-background)' }}>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--color-primary)' }}>
                  License Grant
                </h3>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>
                  By uploading content to the App, you grant us a limited license to:
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    "Store your data on Firebase Cloud servers",
                    "Process your images and data using Google Gemini AI for analysis",
                    "Display your data back to you within the App",
                    "Backup your data for service reliability"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm">
                      <CheckCircle size={16} className="sm:w-[18px] sm:h-[18px] shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
                      <span style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-semibold" style={{ color: 'var(--color-primary)' }}>
                  This license ends when you delete your content or account.
                </p>
              </div>

              {/* Content Responsibility */}
              <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl" style={{ backgroundColor: 'var(--color-background)' }}>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ color: 'var(--color-primary)' }}>
                  Content Responsibility
                </h3>
                <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  You are solely responsible for the accuracy and legality of the content you upload. You must have 
                  the right to upload any images or documents you submit to the App.
                </p>
              </div>
            </div>
          </motion.div>

          {/* AI-Powered Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-lg"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8" style={{ color: 'var(--color-text)' }}>
              AI-Powered Features
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6" style={{ color: 'var(--color-text-secondary)' }}>
              pi-health uses Google Gemini AI to provide health insights. You acknowledge that:
            </p>

            <div className="space-y-3 sm:space-y-4">
              {[
                { 
                  title: "AI is Not Perfect", 
                  desc: "AI analysis may contain errors, inaccuracies, or incomplete information. Always verify important health information with a healthcare professional." 
                },
                { 
                  title: "No Medical Advice", 
                  desc: "AI-generated insights do not constitute medical advice, diagnosis, or treatment recommendations." 
                },
                { 
                  title: "Third-Party Processing", 
                  desc: "Your images and data are sent to Google's servers for AI processing. Google's privacy policy applies to this processing." 
                },
                { 
                  title: "Availability", 
                  desc: "AI features depend on third-party services and may be temporarily unavailable due to technical issues." 
                },
                { 
                  title: "Changes", 
                  desc: "We may modify, suspend, or discontinue AI features at any time without notice." 
                }
              ].map((item, i) => (
                <div key={i} className="p-5 sm:p-6 rounded-xl sm:rounded-2xl" style={{ backgroundColor: 'var(--color-background)' }}>
                  <h4 className="font-bold mb-2 text-sm sm:text-base" style={{ color: 'var(--color-text)' }}>
                    {item.title}:
                  </h4>
                  <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-lg"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--color-text)' }}>
              Privacy & Data Protection
            </h2>
            <p className="text-sm sm:text-base md:text-lg mb-3 sm:mb-4" style={{ color: 'var(--color-text-secondary)' }}>
              Your privacy is important to us. Our collection and use of your personal and health information is 
              governed by our{' '}
              <a href="/privacy" className="underline font-semibold hover:opacity-80 transition-opacity" style={{ color: 'var(--color-primary)' }}>
                Privacy Policy
              </a>
              , which is incorporated into these Terms by reference.
            </p>
            <p className="text-sm sm:text-base md:text-lg" style={{ color: 'var(--color-text-secondary)' }}>
              By using pi-health, you consent to the data practices described in our Privacy Policy.
            </p>
          </motion.div>

          {/* Limitation of Liability */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-lg"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl flex-shrink-0" style={{ backgroundColor: 'rgba(250, 138, 97, 0.1)' }}>
                <Scale size={28} className="sm:w-9 sm:h-9" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-text)' }}>
                Limitation of Liability
              </h2>
            </div>

            <div className="mb-4 sm:mb-6 p-5 sm:p-6 rounded-xl sm:rounded-2xl border-2" style={{ borderColor: 'var(--color-status-warning)', backgroundColor: 'rgba(245, 158, 11, 0.05)' }}>
              <p className="font-bold text-lg sm:text-xl" style={{ color: 'var(--color-text)' }}>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW:
              </p>
            </div>

            <ul className="space-y-3 sm:space-y-4">
              {[
                'The App is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, express or implied',
                "We do not guarantee the accuracy, reliability, or completeness of any health information or AI insights",
                "We are not liable for any health-related decisions or outcomes resulting from your use of the App",
                "We are not responsible for any data loss, service interruptions, or technical failures",
                "Our total liability to you for any claims arising from your use of the App shall not exceed the amount you paid to us (if any) in the past 12 months",
                "We are not liable for indirect, incidental, consequential, or punitive damages"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center shrink-0 text-white font-bold text-xs sm:text-sm mt-0.5"
                    style={{ backgroundColor: 'var(--color-primary)' }}>
                    {i + 1}
                  </div>
                  <span style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Indemnification */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-lg"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--color-text)' }}>
              Indemnification
            </h2>
            <p className="mb-3 sm:mb-4 text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>
              You agree to indemnify, defend, and hold harmless pi-health and its affiliates from any claims, 
              damages, losses, liabilities, and expenses (including legal fees) arising from:
            </p>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Your violation of these Terms",
                "Your use or misuse of the App",
                "Your violation of any third-party rights",
                "Any content you upload to the App"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                  <CheckCircle size={18} className="sm:w-5 sm:h-5 shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
                  <span style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Governing Law */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-lg"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--color-text)' }}>
              Governing Law
            </h2>
            <p className="text-sm sm:text-base md:text-lg" style={{ color: 'var(--color-text-secondary)' }}>
              These Terms shall be governed by and construed in accordance with the laws of India, without regard 
              to conflict of law principles. Any disputes arising from these Terms or your use of the App shall be 
              subject to the exclusive jurisdiction of the courts located in India.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/5 to-background rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-lg"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <Mail size={28} className="sm:w-8 sm:h-8 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-text)' }}>
                Contact Information
              </h2>
            </div>
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6" style={{ color: 'var(--color-text-secondary)' }}>
              If you have questions about these Terms of Service, please contact us:
            </p>
            <a 
              href="mailto:narisnarender@gmail.com" 
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-white transition-all hover:scale-105 shadow-lg text-sm sm:text-base break-all"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <Mail size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
              narisnarender@gmail.com
            </a>
          </motion.div>

          {/* Acceptance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 sm:p-10 border-2 sm:border-4 rounded-2xl sm:rounded-3xl text-center bg-gradient-to-br from-primary/10 to-white" 
            style={{ borderColor: 'var(--color-primary)' }}
          >
            <CheckCircle size={40} className="sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4" style={{ color: 'var(--color-primary)' }} />
            <p className="text-base sm:text-lg md:text-xl font-bold leading-relaxed" style={{ color: 'var(--color-text)' }}>
              By using pi-health, you acknowledge that you have read, understood, and agree to be bound by these 
              Terms of Service.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
