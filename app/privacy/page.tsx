'use client';

import { Shield, Lock, Eye, Database, Brain, Trash2, Check, AlertTriangle, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PrivacyPage() {
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
              <Shield size={80} style={{ color: 'var(--color-primary)' }} className="mx-auto mb-6" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ color: 'var(--color-text)' }}
            >
              Privacy Policy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl mb-4"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Your health data is private, secure, and belongs to you
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
          
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 md:p-14 shadow-lg"
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
              Introduction
            </h2>
            <div className="space-y-4 text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              <p>
                pi-health ("we," "our," or "the app") is committed to protecting your privacy and handling your 
                health data with the highest level of security and transparency. This Privacy Policy explains how 
                we collect, use, store, and protect your personal and health information when you use our mobile 
                application.
              </p>
              <p>
                By using pi-health, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>
          </motion.div>

          {/* Information We Collect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 md:p-14 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl" style={{ backgroundColor: 'rgba(250, 138, 97, 0.1)' }}>
                <Database size={36} style={{ color: 'var(--color-primary)' }} />
              </div>
              <h2 className="text-4xl font-bold" style={{ color: 'var(--color-text)' }}>
                Information We Collect
              </h2>
            </div>

            <div className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                  1. Personal Information
                </h3>
                <ul className="space-y-3">
                  {[
                    { label: 'Account Data', desc: 'Email address, phone number, display name, profile photo' },
                    { label: 'Profile Information', desc: 'Date of birth, age, gender, blood group, height, weight' },
                    { label: 'Device Information', desc: 'Timezone, push notification tokens, device locale' }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={20} style={{ color: 'var(--color-primary)' }} className="mt-1 shrink-0" />
                      <div>
                        <strong style={{ color: 'var(--color-text)' }}>{item.label}:</strong>
                        <span style={{ color: 'var(--color-text-secondary)' }}> {item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Health & Medical Data */}
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                  2. Health & Medical Data
                </h3>
                <p className="mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                  We collect sensitive health information that you voluntarily provide, including:
                </p>
                <ul className="space-y-3">
                  {[
                    { label: 'Vital Signs', desc: 'Blood pressure, heart rate, blood sugar, temperature, oxygen saturation, weight' },
                    { label: 'Medication Records', desc: 'Medication names, dosages, schedules, prescription images' },
                    { label: 'Lab Reports', desc: 'Pathology reports, radiology scans, test results, medical documents' },
                    { label: 'Symptom Logs', desc: 'Health symptoms, notes, and observations' },
                    { label: "Women's Health", desc: 'Menstrual cycle data, pregnancy tracking (LMP, due date, trimester)' },
                    { label: 'Child Health', desc: "Child's name, birthdate, growth records, vaccination status" },
                    { label: 'Nutrition Data', desc: 'Food photos, meal logs, calorie intake, macronutrient tracking' },
                    { label: 'Wellness Programs', desc: 'Daily task completion, health goals, organ health tracking' }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={20} style={{ color: 'var(--color-primary)' }} className="mt-1 shrink-0" />
                      <div>
                        <strong style={{ color: 'var(--color-text)' }}>{item.label}:</strong>
                        <span style={{ color: 'var(--color-text-secondary)' }}> {item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Images & Media */}
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                  3. Images & Media Files
                </h3>
                <ul className="space-y-3">
                  {[
                    'Prescription photos (for medication extraction)',
                    'Lab report images and PDF documents',
                    'Radiology scans and medical imaging',
                    'Food photos (for nutrition analysis)',
                    'Profile photos'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={20} style={{ color: 'var(--color-primary)' }} className="mt-1 shrink-0" />
                      <span style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* How We Use Data */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 md:p-14 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl" style={{ backgroundColor: 'rgba(250, 138, 97, 0.1)' }}>
                <Brain size={36} style={{ color: 'var(--color-primary)' }} />
              </div>
              <h2 className="text-4xl font-bold" style={{ color: 'var(--color-text)' }}>
                How We Use Your Information
              </h2>
            </div>

            <ul className="space-y-4">
              {[
                { label: 'Health Tracking', desc: 'Store and display your health metrics, vitals, and medical records' },
                { label: 'AI Analysis', desc: 'Process your data using Google Gemini AI to provide health insights and analyze lab reports' },
                { label: 'Personalized Recommendations', desc: 'Generate wellness suggestions, predict nutrient deficiencies, and provide health trends' },
                { label: 'Reminders & Notifications', desc: 'Send medication reminders, health alerts, and wellness program updates' },
                { label: 'Report Comparison', desc: 'Compare lab reports over time to show health progress' },
                { label: 'Service Improvement', desc: 'Analyze usage patterns to improve app functionality' }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={20} style={{ color: 'var(--color-primary)' }} className="mt-1 shrink-0" />
                  <div>
                    <strong style={{ color: 'var(--color-text)' }}>{item.label}:</strong>
                    <span style={{ color: 'var(--color-text-secondary)' }}> {item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Third-Party Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 md:p-14 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl" style={{ backgroundColor: 'rgba(250, 138, 97, 0.1)' }}>
                <Eye size={36} style={{ color: 'var(--color-primary)' }} />
              </div>
              <h2 className="text-4xl font-bold" style={{ color: 'var(--color-text)' }}>
                Third-Party Services & Data Sharing
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: '1. Firebase (Google Cloud)',
                  purpose: 'User authentication, database storage, file hosting',
                  shared: 'All user account data, health records, and uploaded files',
                  security: 'Enterprise-grade encryption, secure cloud storage'
                },
                {
                  title: '2. Google Gemini AI',
                  purpose: 'AI-powered health insights and analysis',
                  shared: 'Lab report images, prescription photos, food images, health metrics',
                  note: 'Google may process this data according to their privacy policy. We do not control how Google handles data sent to their AI services.'
                },
                {
                  title: '3. Expo Push Notifications',
                  purpose: 'Send medication reminders and health alerts',
                  shared: 'Device push notification tokens only (no health data)'
                }
              ].map((service, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl"
                  style={{ backgroundColor: 'var(--color-background)' }}
                >
                  <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                    {service.title}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p style={{ color: 'var(--color-text-secondary)' }}>
                      <strong>Purpose:</strong> {service.purpose}
                    </p>
                    <p style={{ color: 'var(--color-text-secondary)' }}>
                      <strong>Data Shared:</strong> {service.shared}
                    </p>
                    {service.security && (
                      <p style={{ color: 'var(--color-text-secondary)' }}>
                        <strong>Security:</strong> {service.security}
                      </p>
                    )}
                    {service.note && (
                      <p className="text-sm italic mt-2" style={{ color: 'var(--color-text-secondary)' }}>
                        <strong>Note:</strong> {service.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Important Disclosure */}
              <div
                className="p-6 border-2 rounded-2xl"
                style={{ borderColor: 'var(--color-status-warning)', backgroundColor: 'rgba(245, 158, 11, 0.05)' }}
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle size={24} style={{ color: 'var(--color-status-warning)' }} className="shrink-0 mt-1" />
                  <div>
                    <p className="font-bold mb-2" style={{ color: 'var(--color-text)' }}>
                      ⚠️ Important Disclosure
                    </p>
                    <p style={{ color: 'var(--color-text-secondary)' }}>
                      We <strong>do NOT sell</strong> your health data to third parties. We <strong>do NOT share</strong> your 
                      data with advertisers or marketers. The only third-party sharing is with Firebase (for storage) and 
                      Google Gemini AI (for analysis) as described above.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Data Storage & Security */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 md:p-14 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl" style={{ backgroundColor: 'rgba(250, 138, 97, 0.1)' }}>
                <Lock size={36} style={{ color: 'var(--color-primary)' }} />
              </div>
              <h2 className="text-4xl font-bold" style={{ color: 'var(--color-text)' }}>
                Data Storage & Security
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                  Where Your Data is Stored
                </h3>
                <ul className="space-y-3">
                  {[
                    { label: 'Database', value: 'Firebase Cloud Firestore (Google Cloud servers)' },
                    { label: 'Files', value: 'Firebase Cloud Storage (encrypted storage)' },
                    { label: 'Location', value: 'Multiple regions for redundancy' }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={20} style={{ color: 'var(--color-primary)' }} className="mt-1 shrink-0" />
                      <div>
                        <strong style={{ color: 'var(--color-text)' }}>{item.label}:</strong>
                        <span style={{ color: 'var(--color-text-secondary)' }}> {item.value}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
                  Security Measures
                </h3>
                <ul className="space-y-3">
                  {[
                    'End-to-end encryption',
                    'Firebase Authentication',
                    'Access controls',
                    'Regular security updates',
                    'Automatic logout'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Shield size={20} style={{ color: 'var(--color-primary)' }} className="mt-1 shrink-0" />
                      <span style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Android Permissions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 md:p-14 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl" style={{ backgroundColor: 'rgba(250, 138, 97, 0.1)' }}>
                <Eye size={36} style={{ color: 'var(--color-primary)' }} />
              </div>
              <h2 className="text-4xl font-bold" style={{ color: 'var(--color-text)' }}>
                Android Permissions
              </h2>
            </div>

            <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
              pi-health requests the following Android permissions:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { emoji: '📷', title: 'CAMERA', desc: 'Scan prescriptions, capture lab reports, take food photos' },
                { emoji: '🖼️', title: 'STORAGE', desc: 'Upload medical documents and images from gallery' },
                { emoji: '🔔', title: 'NOTIFICATIONS', desc: 'Send medication reminders and health alerts' },
                { emoji: '🌐', title: 'INTERNET', desc: 'Sync data with Firebase and AI services' }
              ].map((permission, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border-2"
                  style={{ borderColor: 'var(--color-border)' }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{permission.emoji}</span>
                    <span className="font-bold" style={{ color: 'var(--color-primary)' }}>
                      {permission.title}
                    </span>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    {permission.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Your Rights */}
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
                Your Rights & Choices
              </h2>
            </div>

            <div className="space-y-6">
              {[
                { title: 'Access Your Data', desc: 'View all your health data within the app at any time' },
                { title: 'Correct or Update Data', desc: 'Edit or update your profile and health records directly in the app' },
                { title: 'Delete Your Data', desc: 'Delete your account and all associated data anytime', link: '/data-deletion' },
                { title: 'Export Your Data', desc: 'Export your health reports as PDFs within the app' },
                { title: 'Opt-Out of Notifications', desc: 'Disable push notifications in app settings or device settings' }
              ].map((right, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl"
                  style={{ backgroundColor: 'var(--color-background)' }}
                >
                  <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
                    {right.title}
                  </h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>
                    {right.desc}
                    {right.link && (
                      <>
                        {'. '}
                        <a href={right.link} className="underline font-semibold hover:opacity-80 transition-opacity" style={{ color: 'var(--color-primary)' }}>
                          Learn more →
                        </a>
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Additional Info - Compact Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Children's Privacy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
                Children's Privacy
              </h2>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                Our Child Care module allows parents to track their children's health. If you create a child profile, 
                you must be the parent or legal guardian. This data is stored securely and is only accessible by the parent account holder.
              </p>
            </motion.div>

            {/* Data Retention */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <Trash2 size={24} style={{ color: 'var(--color-primary)' }} />
                <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text)' }}>
                  Data Retention
                </h2>
              </div>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                We retain your data for as long as your account is active. When you delete your account, all data is permanently removed within 30 days.
              </p>
            </motion.div>
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-linear-to-br from-primary/5 to-background rounded-3xl p-10 md:p-14 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <Mail size={32} style={{ color: 'var(--color-primary)' }} />
              <h2 className="text-3xl font-bold" style={{ color: 'var(--color-text)' }}>
                Contact Us
              </h2>
            </div>
            <p className="mb-6 text-lg" style={{ color: 'var(--color-text-secondary)' }}>
              If you have any questions about this Privacy Policy or how we handle your data, please contact us:
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

          {/* Medical Disclaimer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 border-2 rounded-3xl"
            style={{ borderColor: 'var(--color-status-error)', backgroundColor: 'rgba(239, 68, 68, 0.05)' }}
          >
            <div className="flex items-start gap-4">
              <AlertTriangle size={32} style={{ color: 'var(--color-status-error)' }} className="shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-status-error)' }}>
                  Important Medical Disclaimer
                </h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>
                  pi-health is <strong>NOT a medical device</strong> and should not be used for medical diagnosis or treatment. 
                  All AI-generated insights are for informational purposes only. Always consult a qualified healthcare 
                  professional for medical advice. This app is not HIPAA-compliant and should not be used to store 
                  Protected Health Information (PHI) in regulated healthcare settings.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
