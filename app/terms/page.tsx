'use client';

import { FileText, AlertTriangle, Scale, UserCheck, CheckCircle, XCircle, Shield, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-linear-to-br from-background via-white to-primary/5 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-20 xl:px-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <FileText size={80} style={{ color: 'var(--color-primary)' }} className="mx-auto mb-6" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ color: 'var(--color-text)' }}
            >
              Terms of Service
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl mb-4"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Please read these terms carefully before using pi-health
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm font-medium"
              style={{ color: 'var(--color-primary)' }}
            >
              Last Updated: January 5, 2026
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-20 xl:px-32 py-20">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Agreement to Terms */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 md:p-14 shadow-lg"
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
              Agreement to Terms
            </h2>
            <div className="space-y-4 text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              <p>
                These Terms of Service ("Terms") govern your access to and use of the pi-health mobile application 
                ("App," "Service," "we," or "our"). By downloading, installing, or using pi-health, you agree to 
                be bound by these Terms.
              </p>
              <div className="p-6 rounded-2xl border-2" style={{ borderColor: 'var(--color-primary)', backgroundColor: 'rgba(250, 138, 97, 0.05)' }}>
                <p className="font-bold text-xl" style={{ color: 'var(--color-text)' }}>
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
            className="bg-white rounded-3xl p-10 md:p-14 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl" style={{ backgroundColor: 'rgba(250, 138, 97, 0.1)' }}>
                <UserCheck size={36} style={{ color: 'var(--color-primary)' }} />
              </div>
              <h2 className="text-4xl font-bold" style={{ color: 'var(--color-text)' }}>
                Eligibility
              </h2>
            </div>

            <ul className="space-y-4">
              {[
                "You must be at least 13 years old to create an account and use pi-health",
                "If you are under 18, you must have parental or guardian consent to use the App",
                "You must provide accurate and complete information during registration",
                "You are responsible for maintaining the confidentiality of your account credentials",
                "You agree to notify us immediately of any unauthorized access to your account"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={24} style={{ color: 'var(--color-primary)' }} className="shrink-0 mt-0.5" />
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
            className="bg-white rounded-3xl p-10 md:p-14 shadow-xl border-4"
            style={{ borderColor: 'var(--color-status-error)' }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-red-50">
                <AlertTriangle size={40} style={{ color: 'var(--color-status-error)' }} />
              </div>
              <h2 className="text-4xl font-bold" style={{ color: 'var(--color-status-error)' }}>
                Medical Disclaimer
              </h2>
            </div>

            <div className="space-y-6">
              <p className="font-bold text-2xl" style={{ color: 'var(--color-status-error)' }}>
                IMPORTANT: pi-health is NOT a Medical Device
              </p>
              
              <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                pi-health is a <strong>personal health tracking tool</strong> designed for informational and 
                wellness purposes only.
              </p>

              {/* It is NOT */}
              <div className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(239, 68, 68, 0.05)' }}>
                <h3 className="font-bold text-lg mb-4" style={{ color: 'var(--color-text)' }}>
                  It is NOT:
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "A substitute for professional medical advice",
                    "A medical device approved by any authority",
                    "Intended to diagnose or treat diseases",
                    "A replacement for doctor visits",
                    "HIPAA-compliant for healthcare settings"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <XCircle size={20} style={{ color: 'var(--color-status-error)' }} className="shrink-0 mt-0.5" />
                      <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* You acknowledge */}
              <div className="p-6 rounded-2xl" style={{ backgroundColor: 'rgba(239, 68, 68, 0.05)' }}>
                <h3 className="font-bold text-lg mb-4" style={{ color: 'var(--color-text)' }}>
                  You acknowledge and agree that:
                </h3>
                <ul className="space-y-3">
                  {[
                    "All AI-generated insights are for informational purposes only",
                    "You should always consult a qualified healthcare professional before making any medical decisions",
                    "You use the App's health tracking and AI features at your own risk",
                    "We are not responsible for any health outcomes resulting from your use of the App",
                    "In case of medical emergency, immediately call emergency services (911, 108, etc.)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <AlertTriangle size={18} style={{ color: 'var(--color-status-error)' }} className="shrink-0 mt-1" />
                      <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warning box */}
              <div className="p-6 rounded-2xl border-2" style={{ borderColor: 'var(--color-status-error)', backgroundColor: 'rgba(239, 68, 68, 0.05)' }}>
                <p className="font-bold text-lg mb-2" style={{ color: 'var(--color-status-error)' }}>
                  ⚠️ Never Delay or Ignore Medical Advice
                </p>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  Never disregard professional medical advice or delay seeking medical treatment because of 
                  information provided by pi-health. Always seek the advice of your physician or other qualified 
                  healthcare provider with any questions regarding a medical condition.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Permitted vs Prohibited Use - Side by Side */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Permitted Use */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg border-2"
              style={{ borderColor: 'var(--color-status-success)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle size={32} style={{ color: 'var(--color-status-success)' }} />
                <h2 className="text-3xl font-bold" style={{ color: 'var(--color-text)' }}>
                  Permitted Use
                </h2>
              </div>
              <p className="mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                You may use pi-health for:
              </p>
              <ul className="space-y-3">
                {[
                  "Personal health tracking and wellness monitoring",
                  "Recording vital signs, medications, and health metrics",
                  "Uploading and storing personal medical documents",
                  "Tracking pregnancy, child health, and family wellness",
                  "Using AI features to analyze your own health data",
                  "Setting medication reminders and health goals"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle size={18} style={{ color: 'var(--color-status-success)' }} className="shrink-0 mt-0.5" />
                    <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Prohibited Use */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg border-2"
              style={{ borderColor: 'var(--color-status-error)' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <XCircle size={32} style={{ color: 'var(--color-status-error)' }} />
                <h2 className="text-3xl font-bold" style={{ color: 'var(--color-text)' }}>
                  Prohibited Use
                </h2>
              </div>
              <p className="mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                You agree NOT to:
              </p>
              <ul className="space-y-3">
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
                  <li key={i} className="flex items-start gap-2">
                    <XCircle size={18} style={{ color: 'var(--color-status-error)' }} className="shrink-0 mt-0.5" />
                    <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
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
            className="bg-white rounded-3xl p-10 md:p-14 shadow-lg"
          >
            <h2 className="text-4xl font-bold mb-8" style={{ color: 'var(--color-text)' }}>
              User Content & Data Ownership
            </h2>

            <div className="space-y-8">
              {/* Your Data Belongs to You */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Shield size={28} style={{ color: 'var(--color-primary)' }} />
                  <h3 className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>
                    Your Data Belongs to You
                  </h3>
                </div>
                <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                  You retain all ownership rights to the health data, images, and content you upload to pi-health. 
                  We do not claim ownership of your personal information or medical records.
                </p>
              </div>

              {/* License Grant */}
              <div className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--color-background)' }}>
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                  License Grant
                </h3>
                <p className="mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                  By uploading content to the App, you grant us a limited license to:
                </p>
                <ul className="space-y-3">
                  {[
                    "Store your data on Firebase Cloud servers",
                    "Process your images and data using Google Gemini AI for analysis",
                    "Display your data back to you within the App",
                    "Backup your data for service reliability"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle size={18} style={{ color: 'var(--color-primary)' }} className="shrink-0 mt-0.5" />
                      <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-semibold" style={{ color: 'var(--color-primary)' }}>
                  This license ends when you delete your content or account.
                </p>
              </div>

              {/* Content Responsibility */}
              <div className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--color-background)' }}>
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-primary)' }}>
                  Content Responsibility
                </h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
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
            className="bg-white rounded-3xl p-10 md:p-14 shadow-lg"
          >
            <h2 className="text-4xl font-bold mb-8" style={{ color: 'var(--color-text)' }}>
              AI-Powered Features
            </h2>
            
            <p className="text-lg mb-6" style={{ color: 'var(--color-text-secondary)' }}>
              pi-health uses Google Gemini AI to provide health insights. You acknowledge that:
            </p>

            <div className="space-y-4">
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
                <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--color-background)' }}>
                  <h4 className="font-bold mb-2" style={{ color: 'var(--color-text)' }}>
                    {item.title}:
                  </h4>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 md:p-14 shadow-lg"
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
              Privacy & Data Protection
            </h2>
            <p className="text-lg mb-4" style={{ color: 'var(--color-text-secondary)' }}>
              Your privacy is important to us. Our collection and use of your personal and health information is 
              governed by our{' '}
              <a href="/privacy" className="underline font-semibold hover:opacity-80 transition-opacity" style={{ color: 'var(--color-primary)' }}>
                Privacy Policy
              </a>
              , which is incorporated into these Terms by reference.
            </p>
            <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
              By using pi-health, you consent to the data practices described in our Privacy Policy.
            </p>
          </motion.div>

          {/* Limitation of Liability */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 md:p-14 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl" style={{ backgroundColor: 'rgba(250, 138, 97, 0.1)' }}>
                <Scale size={36} style={{ color: 'var(--color-primary)' }} />
              </div>
              <h2 className="text-4xl font-bold" style={{ color: 'var(--color-text)' }}>
                Limitation of Liability
              </h2>
            </div>

            <div className="mb-6 p-6 rounded-2xl border-2" style={{ borderColor: 'var(--color-status-warning)', backgroundColor: 'rgba(245, 158, 11, 0.05)' }}>
              <p className="font-bold text-xl" style={{ color: 'var(--color-text)' }}>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW:
              </p>
            </div>

            <ul className="space-y-4">
              {[
                'The App is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, express or implied',
                "We do not guarantee the accuracy, reliability, or completeness of any health information or AI insights",
                "We are not liable for any health-related decisions or outcomes resulting from your use of the App",
                "We are not responsible for any data loss, service interruptions, or technical failures",
                "Our total liability to you for any claims arising from your use of the App shall not exceed the amount you paid to us (if any) in the past 12 months",
                "We are not liable for indirect, incidental, consequential, or punitive damages"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-white font-bold text-sm mt-0.5"
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
            className="bg-white rounded-3xl p-10 md:p-14 shadow-lg"
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
              Indemnification
            </h2>
            <p className="mb-4" style={{ color: 'var(--color-text-secondary)' }}>
              You agree to indemnify, defend, and hold harmless pi-health and its affiliates from any claims, 
              damages, losses, liabilities, and expenses (including legal fees) arising from:
            </p>
            <ul className="space-y-3">
              {[
                "Your violation of these Terms",
                "Your use or misuse of the App",
                "Your violation of any third-party rights",
                "Any content you upload to the App"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={20} style={{ color: 'var(--color-primary)' }} className="shrink-0 mt-0.5" />
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
            className="bg-white rounded-3xl p-10 md:p-14 shadow-lg"
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
              Governing Law
            </h2>
            <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
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
            className="bg-linear-to-br from-primary/5 to-background rounded-3xl p-10 md:p-14 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <Mail size={32} style={{ color: 'var(--color-primary)' }} />
              <h2 className="text-3xl font-bold" style={{ color: 'var(--color-text)' }}>
                Contact Information
              </h2>
            </div>
            <p className="text-lg mb-6" style={{ color: 'var(--color-text-secondary)' }}>
              If you have questions about these Terms of Service, please contact us:
            </p>
            <a 
              href="mailto:narisnarender@gmail.com" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:scale-105 shadow-lg"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <Mail size={20} />
              narisnarender@gmail.com
            </a>
          </motion.div>

          {/* Acceptance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 border-4 rounded-3xl text-center bg-linear-to-br from-primary/10 to-white" 
            style={{ borderColor: 'var(--color-primary)' }}
          >
            <CheckCircle size={48} style={{ color: 'var(--color-primary)' }} className="mx-auto mb-4" />
            <p className="text-xl font-bold leading-relaxed" style={{ color: 'var(--color-text)' }}>
              By using pi-health, you acknowledge that you have read, understood, and agree to be bound by these 
              Terms of Service.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
