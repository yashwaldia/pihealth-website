'use client';

import { Trash2, AlertCircle, Check, Mail, Shield, CheckCircle, Clock, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DataDeletionPage() {
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
              <Trash2 size={80} style={{ color: 'var(--color-primary)' }} className="mx-auto mb-6" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ color: 'var(--color-text)' }}
            >
              Data Deletion Policy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Your data, your choice. Delete your account and data anytime.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-20 xl:px-32 py-20">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 md:p-14 shadow-lg"
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
              Your Right to Delete
            </h2>
            <div className="space-y-4 text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
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
            className="bg-white rounded-3xl p-10 md:p-14 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl" style={{ backgroundColor: 'rgba(250, 138, 97, 0.1)' }}>
                <Check size={36} style={{ color: 'var(--color-primary)' }} />
              </div>
              <h2 className="text-4xl font-bold" style={{ color: 'var(--color-text)' }}>
                What Gets Deleted
              </h2>
            </div>

            <p className="mb-8 text-lg" style={{ color: 'var(--color-text-secondary)' }}>
              When you delete your pi-health account, the following data is <strong>permanently removed</strong>:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
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
                  className="p-6 rounded-2xl"
                  style={{ backgroundColor: 'var(--color-background)' }}
                >
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--color-text)' }}>
                    <CheckCircle size={20} style={{ color: 'var(--color-primary)' }} />
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
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
            className="bg-white rounded-3xl p-10 md:p-14 shadow-lg"
          >
            <h2 className="text-4xl font-bold mb-8" style={{ color: 'var(--color-text)' }}>
              How to Delete Your Account
            </h2>

            <div className="space-y-10">
              {/* Method 1 */}
              <div>
                <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-primary)' }}>
                  Method 1: Delete from the App
                </h3>
                <div className="space-y-4">
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
                    <div key={i} className="flex items-start gap-4 p-5 rounded-xl hover:shadow-md transition-all"
                      style={{ backgroundColor: 'var(--color-background)' }}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white font-bold text-lg"
                        style={{ backgroundColor: 'var(--color-primary)' }}>
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <p className="font-bold mb-1" style={{ color: 'var(--color-text)' }}>{item.title}</p>
                        <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Method 2 */}
              <div className="border-t-2 pt-8" style={{ borderColor: 'var(--color-border)' }}>
                <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-primary)' }}>
                  Method 2: Email Request
                </h3>
                <p className="mb-6 text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                  If you're unable to access the app, you can request account deletion via email:
                </p>
                
                <div className="space-y-4">
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
                    <div key={i} className="flex items-start gap-4 p-5 rounded-xl hover:shadow-md transition-all"
                      style={{ backgroundColor: 'var(--color-background)' }}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white font-bold text-lg"
                        style={{ backgroundColor: 'var(--color-primary)' }}>
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <p className="font-bold mb-1" style={{ color: 'var(--color-text)' }}>{item.title}</p>
                        <p className="text-sm mb-3" style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
                        {i === 0 && (
                          <a 
                            href="mailto:narisnarender@gmail.com?subject=Account Deletion Request" 
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all hover:scale-105 shadow-md"
                            style={{ backgroundColor: 'var(--color-primary)' }}
                          >
                            <Mail size={18} />
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
            className="bg-white rounded-3xl p-10 md:p-14 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl" style={{ backgroundColor: 'rgba(250, 138, 97, 0.1)' }}>
                <Clock size={36} style={{ color: 'var(--color-primary)' }} />
              </div>
              <h2 className="text-4xl font-bold" style={{ color: 'var(--color-text)' }}>
                Deletion Timeline
              </h2>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl border-2" style={{ borderColor: 'var(--color-primary)', backgroundColor: 'rgba(250, 138, 97, 0.05)' }}>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--color-primary)' }}>
                  <CheckCircle size={24} />
                  Immediate (Within 24 hours)
                </h3>
                <ul className="space-y-2">
                  {[
                    "Your account is deactivated and you cannot log in",
                    "Your data is no longer accessible in the app",
                    "Active sessions are terminated"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2" style={{ color: 'var(--color-text-secondary)' }}>
                      <CheckCircle size={18} style={{ color: 'var(--color-primary)' }} className="mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl border-2" style={{ borderColor: 'var(--color-border)' }}>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--color-text)' }}>
                  <Clock size={24} style={{ color: 'var(--color-primary)' }} />
                  Complete Deletion (Within 30 days)
                </h3>
                <ul className="space-y-2">
                  {[
                    "All data is permanently removed from Firebase Cloud servers",
                    "Uploaded files are deleted from Firebase Storage",
                    "Backups are purged from all systems",
                    "Third-party AI service data processing stops"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2" style={{ color: 'var(--color-text-secondary)' }}>
                      <CheckCircle size={18} style={{ color: 'var(--color-primary)' }} className="mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--color-background)' }}>
                <p style={{ color: 'var(--color-text-secondary)' }}>
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
            className="bg-white rounded-3xl p-10 md:p-14 shadow-xl border-4"
            style={{ borderColor: 'var(--color-status-warning)' }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-yellow-50">
                <AlertCircle size={40} style={{ color: 'var(--color-status-warning)' }} />
              </div>
              <h2 className="text-4xl font-bold" style={{ color: 'var(--color-text)' }}>
                Important: This Action is Permanent
              </h2>
            </div>

            <div className="space-y-6">
              <p className="font-bold text-2xl" style={{ color: 'var(--color-status-warning)' }}>
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
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl" style={{ backgroundColor: 'rgba(245, 158, 11, 0.05)' }}>
                    <item.icon size={20} style={{ color: 'var(--color-status-warning)' }} className="mt-0.5 shrink-0" />
                    <p style={{ color: 'var(--color-text-secondary)' }}>
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
            className="bg-white rounded-3xl p-10 md:p-14 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl" style={{ backgroundColor: 'rgba(250, 138, 97, 0.1)' }}>
                <Shield size={36} style={{ color: 'var(--color-primary)' }} />
              </div>
              <h2 className="text-4xl font-bold" style={{ color: 'var(--color-text)' }}>
                Your Privacy is Protected
              </h2>
            </div>
            
            <p className="mb-6 text-lg" style={{ color: 'var(--color-text-secondary)' }}>
              We take data deletion seriously. When you request deletion:
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "We do not retain any personally identifiable information",
                "We do not sell or share your data with third parties before or after deletion",
                "We comply with GDPR, CCPA, and other data protection regulations",
                "You will receive email confirmation once deletion is complete"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={20} style={{ color: 'var(--color-primary)' }} className="mt-0.5 shrink-0" />
                  <span style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-6 rounded-2xl" style={{ backgroundColor: 'var(--color-background)' }}>
              <p style={{ color: 'var(--color-text-secondary)' }}>
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
            className="bg-linear-to-br from-primary/5 to-background rounded-3xl p-10 md:p-14 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <Mail size={32} style={{ color: 'var(--color-primary)' }} />
              <h2 className="text-3xl font-bold" style={{ color: 'var(--color-text)' }}>
                Need Help with Account Deletion?
              </h2>
            </div>
            <p className="mb-6 text-lg" style={{ color: 'var(--color-text-secondary)' }}>
              If you encounter any issues or have questions about data deletion, contact us:
            </p>
            <a 
              href="mailto:narisnarender@gmail.com?subject=Data Deletion Help" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:scale-105 shadow-lg"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              <Mail size={20} />
              Contact Support
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
