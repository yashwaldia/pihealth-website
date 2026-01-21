'use client';

import { Trash2, AlertCircle, Check, Mail, Shield, CheckCircle, Clock, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DataDeletionPage() {
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
              <Trash2 size={60} className="sm:w-20 sm:h-20 mx-auto" style={{ color: 'var(--color-primary)' }} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
              style={{ color: 'var(--color-text)' }}
            >
              Data Deletion Policy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Your data, your choice. Delete your account and data anytime.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 py-10 sm:py-16 md:py-20">
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
          
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-lg"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--color-text)' }}>
              Your Right to Delete
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              <p>
                At pi-health, we respect your right to control your personal data. You can request deletion of your 
                account and all associated health information at any time, for any reason.
              </p>
              <p>
                This page explains what data gets deleted, how to request deletion, and the timeline for complete 
                data removal.
              </p>
            </div>
          </motion.div>

          {/* What Gets Deleted */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-lg"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl flex-shrink-0" style={{ backgroundColor: 'rgba(250, 138, 97, 0.1)' }}>
                <Check size={28} className="sm:w-9 sm:h-9" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-text)' }}>
                What Gets Deleted
              </h2>
            </div>

            <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg" style={{ color: 'var(--color-text-secondary)' }}>
              When you delete your pi-health account, the following data is <strong>permanently removed</strong>:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  title: "Account Information",
                  items: [
                    "Email address and phone number",
                    "Display name and profile photo",
                    "Login credentials and authentication tokens",
                    "Push notification tokens"
                  ]
                },
                {
                  title: "All Health Data",
                  items: [
                    "Vitals records (BP, heart rate, blood sugar, etc.)",
                    "Medication lists and schedules",
                    "Lab reports and test results",
                    "Symptom logs and health notes",
                    "Pregnancy and child health tracking data",
                    "Nutrition logs and meal histories",
                    "Wellness program progress and goals"
                  ]
                },
                {
                  title: "Uploaded Files & Images",
                  items: [
                    "Prescription photos and scanned documents",
                    "Lab report images and PDF files",
                    "Radiology scans and medical imaging",
                    "Food photos and nutrition images",
                    "Profile photos"
                  ]
                },
                {
                  title: "AI Analysis & Insights",
                  items: [
                    "All AI-generated health insights and reports",
                    "Medication extraction results",
                    "Lab report analysis summaries",
                    "Nutrition analysis data",
                    "Health trend predictions"
                  ]
                }
              ].map((category, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 sm:p-6 rounded-xl sm:rounded-2xl"
                  style={{ backgroundColor: 'var(--color-background)' }}
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2" style={{ color: 'var(--color-text)' }}>
                    <CheckCircle size={18} className="sm:w-5 sm:h-5 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        <span className="text-primary mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* How to Delete */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-lg"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8" style={{ color: 'var(--color-text)' }}>
              How to Delete Your Account
            </h2>

            <div className="space-y-8 sm:space-y-10">
              {/* Method 1 */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--color-primary)' }}>
                  Method 1: Delete from the App
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Open pi-health App",
                      desc: "Launch the app on your Android device"
                    },
                    {
                      step: "2",
                      title: "Go to Profile Settings",
                      desc: "Tap on your profile icon → Settings"
                    },
                    {
                      step: "3",
                      title: 'Select "Delete Account"',
                      desc: 'Scroll down and tap "Delete Account" button'
                    },
                    {
                      step: "4",
                      title: "Confirm Deletion",
                      desc: 'Read the warning, type "DELETE" to confirm, and tap "Permanently Delete"'
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl hover:shadow-md transition-all"
                      style={{ backgroundColor: 'var(--color-background)' }}>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 text-white font-bold text-base sm:text-lg"
                        style={{ backgroundColor: 'var(--color-primary)' }}>
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <p className="font-bold mb-1 text-sm sm:text-base" style={{ color: 'var(--color-text)' }}>{item.title}</p>
                        <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Method 2 */}
              <div className="border-t-2 pt-6 sm:pt-8" style={{ borderColor: 'var(--color-border)' }}>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--color-primary)' }}>
                  Method 2: Email Request
                </h3>
                <p className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                  If you're unable to access the app, you can request account deletion via email:
                </p>
                
                <div className="space-y-3 sm:space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Send Email",
                      desc: "Email us from your registered email address:"
                    },
                    {
                      step: "2",
                      title: "Include Required Information",
                      desc: 'Subject: "Account Deletion Request" | Body: Include your registered email and phone number (for verification)'
                    },
                    {
                      step: "3",
                      title: "We'll Confirm & Process",
                      desc: "We'll verify your identity and process your deletion request within 7 days"
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl hover:shadow-md transition-all"
                      style={{ backgroundColor: 'var(--color-background)' }}>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 text-white font-bold text-base sm:text-lg"
                        style={{ backgroundColor: 'var(--color-primary)' }}>
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <p className="font-bold mb-1 text-sm sm:text-base" style={{ color: 'var(--color-text)' }}>{item.title}</p>
                        <p className="text-xs sm:text-sm mb-3" style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
                        {i === 0 && (
                          <a 
                            href="mailto:narisnarender@gmail.com?subject=Account Deletion Request" 
                            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-white transition-all hover:scale-105 shadow-md text-xs sm:text-sm break-all"
                            style={{ backgroundColor: 'var(--color-primary)' }}
                          >
                            <Mail size={16} className="sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                            narisnarender@gmail.com
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-lg"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl flex-shrink-0" style={{ backgroundColor: 'rgba(250, 138, 97, 0.1)' }}>
                <Clock size={28} className="sm:w-9 sm:h-9" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-text)' }}>
                Deletion Timeline
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl border-2" style={{ borderColor: 'var(--color-primary)', backgroundColor: 'rgba(250, 138, 97, 0.05)' }}>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2" style={{ color: 'var(--color-primary)' }}>
                  <CheckCircle size={20} className="sm:w-6 sm:h-6 flex-shrink-0" />
                  Immediate (Within 24 hours)
                </h3>
                <ul className="space-y-2">
                  {[
                    "Your account is deactivated and you cannot log in",
                    "Your data is no longer accessible in the app",
                    "Active sessions are terminated"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      <CheckCircle size={16} className="sm:w-[18px] sm:h-[18px] mt-0.5 shrink-0" style={{ color: 'var(--color-primary)' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl border-2" style={{ borderColor: 'var(--color-border)' }}>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2" style={{ color: 'var(--color-text)' }}>
                  <Clock size={20} className="sm:w-6 sm:h-6 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
                  Complete Deletion (Within 30 days)
                </h3>
                <ul className="space-y-2">
                  {[
                    "All data is permanently removed from Firebase Cloud servers",
                    "Uploaded files are deleted from Firebase Storage",
                    "Backups are purged from all systems",
                    "Third-party AI service data processing stops"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      <CheckCircle size={16} className="sm:w-[18px] sm:h-[18px] mt-0.5 shrink-0" style={{ color: 'var(--color-primary)' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl" style={{ backgroundColor: 'var(--color-background)' }}>
                <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                  <strong>Note:</strong> We may retain minimal anonymized usage data for legal compliance and service 
                  improvement (e.g., aggregated statistics). This data cannot be linked back to you.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Important Warnings */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-xl border-2 sm:border-4"
            style={{ borderColor: 'var(--color-status-warning)' }}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-yellow-50 flex-shrink-0">
                <AlertCircle size={32} className="sm:w-10 sm:h-10" style={{ color: 'var(--color-status-warning)' }} />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: 'var(--color-text)' }}>
                Important: This Action is Permanent
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <p className="font-bold text-lg sm:text-xl md:text-2xl" style={{ color: 'var(--color-status-warning)' }}>
                ⚠️ Before You Delete Your Account:
              </p>
              
              <div className="space-y-3">
                {[
                  {
                    icon: XCircle,
                    text: "Deletion is permanent and irreversible. You cannot recover your data once deleted."
                  },
                  {
                    icon: AlertCircle,
                    text: "Export important data first. Download any health reports or data you want to keep before deletion."
                  },
                  {
                    icon: AlertCircle,
                    text: "Active subscriptions are not refunded. Cancel any paid features before deleting (if applicable in future)."
                  },
                  {
                    icon: CheckCircle,
                    text: "You can create a new account later, but you'll start fresh with no previous data."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl" style={{ backgroundColor: 'rgba(245, 158, 11, 0.05)' }}>
                    <item.icon size={18} className="sm:w-5 sm:h-5 mt-0.5 shrink-0" style={{ color: 'var(--color-status-warning)' }} />
                    <p className="text-xs sm:text-sm md:text-base" style={{ color: 'var(--color-text-secondary)' }}>
                      <strong>{item.text.split('.')[0]}.</strong>
                      {item.text.substring(item.text.indexOf('.') + 1)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Privacy Assurance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-lg"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl flex-shrink-0" style={{ backgroundColor: 'rgba(250, 138, 97, 0.1)' }}>
                <Shield size={28} className="sm:w-9 sm:h-9" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-text)' }}>
                Your Privacy is Protected
              </h2>
            </div>
            
            <p className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg" style={{ color: 'var(--color-text-secondary)' }}>
              We take data deletion seriously. When you request deletion:
            </p>
            
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {[
                "We do not retain any personally identifiable information",
                "We do not sell or share your data with third parties before or after deletion",
                "We comply with GDPR, CCPA, and other data protection regulations",
                "You will receive email confirmation once deletion is complete"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm md:text-base">
                  <CheckCircle size={18} className="sm:w-5 sm:h-5 mt-0.5 shrink-0" style={{ color: 'var(--color-primary)' }} />
                  <span style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl" style={{ backgroundColor: 'var(--color-background)' }}>
              <p className="text-xs sm:text-sm md:text-base" style={{ color: 'var(--color-text-secondary)' }}>
                For complete details on how we handle your data, read our{' '}
                <a href="/privacy" className="underline font-semibold hover:opacity-80 transition-opacity" style={{ color: 'var(--color-primary)' }}>
                  Privacy Policy
                </a>.
              </p>
            </div>
          </motion.div>

          {/* Need Help */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/5 to-background rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-lg"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <Mail size={28} className="sm:w-8 sm:h-8 flex-shrink-0" style={{ color: 'var(--color-primary)' }} />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-text)' }}>
                Need Help with Account Deletion?
              </h2>
            </div>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg" style={{ color: 'var(--color-text-secondary)' }}>
              If you encounter any issues or have questions about data deletion, contact us:
            </p>
            <a 
              href="mailto:narisnarender@gmail.com?subject=Data Deletion Help" 
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-white transition-all hover:scale-105 shadow-lg text-sm sm:text-base"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <Mail size={18} className="sm:w-5 sm:h-5" />
              Contact Support
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
