'use client';

import { Shield, Lock, Eye, Database, Brain, Trash2, Check, AlertTriangle, Mail, Camera, FolderOpen, Bell, Wifi, User, FileText, Heart, Syringe, Activity, Apple, Baby, Utensils, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PrivacyPage() {
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
              <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5">
                <Shield size={48} className="sm:w-14 sm:h-14" style={{ color: 'var(--color-primary)' }} />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
              style={{ color: 'var(--color-text)' }}
            >
              Privacy Policy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl mb-3 sm:mb-4"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Your health data is private, secure, and belongs to you
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
          
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-lg"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--color-text)' }}>
              Introduction
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
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
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-lg"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl flex-shrink-0 bg-gradient-to-br from-blue-50 to-blue-100">
                <Database size={28} className="sm:w-9 sm:h-9 text-blue-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-text)' }}>
                Information We Collect
              </h2>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {/* Personal Information */}
              <div>
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <User size={20} className="sm:w-6 sm:h-6" style={{ color: 'var(--color-primary)' }} />
                  <h3 className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>
                    1. Personal Information
                  </h3>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    { label: 'Account Data', desc: 'Email address, phone number, display name, profile photo' },
                    { label: 'Profile Information', desc: 'Date of birth, age, gender, blood group, height, weight' },
                    { label: 'Device Information', desc: 'Timezone, push notification tokens, device locale' }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={14} className="sm:w-4 sm:h-4 text-green-600" />
                      </div>
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
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <Heart size={20} className="sm:w-6 sm:h-6" style={{ color: 'var(--color-primary)' }} />
                  <h3 className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>
                    2. Health & Medical Data
                  </h3>
                </div>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>
                  We collect sensitive health information that you voluntarily provide, including:
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    { icon: Activity, label: 'Vital Signs', desc: 'Blood pressure, heart rate, blood sugar, temperature, oxygen saturation, weight' },
                    { icon: Syringe, label: 'Medication Records', desc: 'Medication names, dosages, schedules, prescription images' },
                    { icon: FileText, label: 'Lab Reports', desc: 'Pathology reports, radiology scans, test results, medical documents' },
                    { icon: FileText, label: 'Symptom Logs', desc: 'Health symptoms, notes, and observations' },
                    { icon: Heart, label: "Women's Health", desc: 'Menstrual cycle data, pregnancy tracking (LMP, due date, trimester)' },
                    { icon: Baby, label: 'Child Health', desc: "Child's name, birthdate, growth records, vaccination status" },
                    { icon: Utensils, label: 'Nutrition Data', desc: 'Food photos, meal logs, calorie intake, macronutrient tracking' },
                    { icon: Target, label: 'Wellness Programs', desc: 'Daily task completion, health goals, organ health tracking' }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                        <item.icon size={14} className="sm:w-3.5 sm:h-3.5 text-green-600" />
                      </div>
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
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <Camera size={20} className="sm:w-6 sm:h-6" style={{ color: 'var(--color-primary)' }} />
                  <h3 className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>
                    3. Images & Media Files
                  </h3>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    'Prescription photos (for medication extraction)',
                    'Lab report images and PDF documents',
                    'Radiology scans and medical imaging',
                    'Food photos (for nutrition analysis)',
                    'Profile photos'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={14} className="sm:w-4 sm:h-4 text-green-600" />
                      </div>
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
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-lg"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl flex-shrink-0 bg-gradient-to-br from-purple-50 to-purple-100">
                <Brain size={28} className="sm:w-9 sm:h-9 text-purple-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-text)' }}>
                How We Use Your Information
              </h2>
            </div>

            <ul className="space-y-3 sm:space-y-4">
              {[
                { label: 'Health Tracking', desc: 'Store and display your health metrics, vitals, and medical records' },
                { label: 'AI Analysis', desc: 'Process your data using Google Gemini AI to provide health insights and analyze lab reports' },
                { label: 'Personalized Recommendations', desc: 'Generate wellness suggestions, predict nutrient deficiencies, and provide health trends' },
                { label: 'Reminders & Notifications', desc: 'Send medication reminders, health alerts, and wellness program updates' },
                { label: 'Report Comparison', desc: 'Compare lab reports over time to show health progress' },
                { label: 'Service Improvement', desc: 'Analyze usage patterns to improve app functionality' }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={14} className="sm:w-4 sm:h-4 text-green-600" />
                  </div>
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
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-lg"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl flex-shrink-0 bg-gradient-to-br from-orange-50 to-orange-100">
                <Eye size={28} className="sm:w-9 sm:h-9 text-orange-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-text)' }}>
                Third-Party Services & Data Sharing
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
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
                  className="p-5 sm:p-6 rounded-xl sm:rounded-2xl border-2"
                  style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-background)' }}
                >
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--color-primary)' }}>
                    {service.title}
                  </h3>
                  <div className="space-y-2 text-xs sm:text-sm">
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
                      <p className="text-xs sm:text-sm italic mt-2" style={{ color: 'var(--color-text-secondary)' }}>
                        <strong>Note:</strong> {service.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Important Disclosure */}
              <div
                className="p-5 sm:p-6 border-2 rounded-xl sm:rounded-2xl"
                style={{ borderColor: 'var(--color-status-warning)', backgroundColor: 'rgba(245, 158, 11, 0.05)' }}
              >
                <div className="flex items-start gap-2 sm:gap-3">
                  <AlertTriangle size={20} className="sm:w-6 sm:h-6 shrink-0 mt-1" style={{ color: 'var(--color-status-warning)' }} />
                  <div>
                    <p className="font-bold mb-2 text-sm sm:text-base" style={{ color: 'var(--color-text)' }}>
                      ⚠️ Important Disclosure
                    </p>
                    <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
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
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-lg"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl flex-shrink-0 bg-gradient-to-br from-green-50 to-green-100">
                <Lock size={28} className="sm:w-9 sm:h-9 text-green-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-text)' }}>
                Data Storage & Security
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--color-primary)' }}>
                  Where Your Data is Stored
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    { label: 'Database', value: 'Firebase Cloud Firestore (Google Cloud servers)' },
                    { label: 'Files', value: 'Firebase Cloud Storage (encrypted storage)' },
                    { label: 'Location', value: 'Multiple regions for redundancy' }
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={14} className="sm:w-4 sm:h-4 text-green-600" />
                      </div>
                      <div>
                        <strong style={{ color: 'var(--color-text)' }}>{item.label}:</strong>
                        <span style={{ color: 'var(--color-text-secondary)' }}> {item.value}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--color-primary)' }}>
                  Security Measures
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    'End-to-end encryption',
                    'Firebase Authentication',
                    'Access controls',
                    'Regular security updates',
                    'Automatic logout'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Shield size={14} className="sm:w-4 sm:h-4 text-green-600" />
                      </div>
                      <span style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Android Permissions - Modern Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-lg"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl flex-shrink-0 bg-gradient-to-br from-orange-50 to-orange-100">
                <Eye size={28} className="sm:w-9 sm:h-9 text-orange-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-text)' }}>
                Android Permissions
              </h2>
            </div>

            <p className="mb-4 sm:mb-6 text-sm sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>
              pi-health requests the following Android permissions:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { icon: Camera, title: 'CAMERA', desc: 'Scan prescriptions, capture lab reports, take food photos', color: 'from-gray-50 to-gray-100', iconColor: 'text-gray-700' },
                { icon: FolderOpen, title: 'STORAGE', desc: 'Upload medical documents and images from gallery', color: 'from-green-50 to-green-100', iconColor: 'text-green-700' },
                { icon: Bell, title: 'NOTIFICATIONS', desc: 'Send medication reminders and health alerts', color: 'from-yellow-50 to-yellow-100', iconColor: 'text-yellow-700' },
                { icon: Wifi, title: 'INTERNET', desc: 'Sync data with Firebase and AI services', color: 'from-blue-50 to-blue-100', iconColor: 'text-blue-700' }
              ].map((permission, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className={`p-5 sm:p-6 rounded-xl sm:rounded-2xl border-2 bg-gradient-to-br ${permission.color} transition-all`}
                  style={{ borderColor: 'var(--color-border)' }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2.5 rounded-lg bg-white shadow-sm`}>
                      <permission.icon size={24} className={`sm:w-7 sm:h-7 ${permission.iconColor}`} />
                    </div>
                    <span className="font-bold text-sm sm:text-base" style={{ color: 'var(--color-text)' }}>
                      {permission.title}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    {permission.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Your Rights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-lg"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl flex-shrink-0 bg-gradient-to-br from-green-50 to-green-100">
                <Check size={28} className="sm:w-9 sm:h-9 text-green-600" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-text)' }}>
                Your Rights & Choices
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {[
                { title: 'Access Your Data', desc: 'View all your health data within the app at any time' },
                { title: 'Correct or Update Data', desc: 'Edit or update your profile and health records directly in the app' },
                { title: 'Delete Your Data', desc: 'Delete your account and all associated data anytime', link: '/data-deletion' },
                { title: 'Export Your Data', desc: 'Export your health reports as PDFs within the app' },
                { title: 'Opt-Out of Notifications', desc: 'Disable push notifications in app settings or device settings' }
              ].map((right, i) => (
                <div
                  key={i}
                  className="p-5 sm:p-6 rounded-xl sm:rounded-2xl border-2"
                  style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-background)' }}
                >
                  <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
                    {right.title}
                  </h3>
                  <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
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
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {/* Children's Privacy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border-2"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Baby size={20} className="sm:w-6 sm:h-6" style={{ color: 'var(--color-primary)' }} />
                <h2 className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--color-text)' }}>
                  Children's Privacy
                </h2>
              </div>
              <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                Our Child Care module allows parents to track their children's health. If you create a child profile, 
                you must be the parent or legal guardian. This data is stored securely and is only accessible by the parent account holder.
              </p>
            </motion.div>

            {/* Data Retention */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border-2"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Trash2 size={20} className="sm:w-6 sm:h-6" style={{ color: 'var(--color-primary)' }} />
                <h2 className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--color-text)' }}>
                  Data Retention
                </h2>
              </div>
              <p className="text-xs sm:text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                We retain your data for as long as your account is active. When you delete your account, all data is permanently removed within 30 days.
              </p>
            </motion.div>
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/5 to-background rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-lg border-2"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="p-3 rounded-xl bg-white shadow-sm">
                <Mail size={24} className="sm:w-7 sm:h-7" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold" style={{ color: 'var(--color-text)' }}>
                Contact Us
              </h2>
            </div>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base md:text-lg" style={{ color: 'var(--color-text-secondary)' }}>
              If you have any questions about this Privacy Policy or how we handle your data, please contact us:
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

          {/* Medical Disclaimer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 md:p-10 border-2 sm:border-4 rounded-2xl sm:rounded-3xl"
            style={{ borderColor: 'var(--color-status-error)', backgroundColor: 'rgba(239, 68, 68, 0.05)' }}
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="p-2.5 rounded-lg bg-white shadow-sm">
                <AlertTriangle size={24} className="sm:w-7 sm:h-7" style={{ color: 'var(--color-status-error)' }} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3" style={{ color: 'var(--color-status-error)' }}>
                  Important Medical Disclaimer
                </h3>
                <p className="text-xs sm:text-sm md:text-base" style={{ color: 'var(--color-text-secondary)' }}>
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
