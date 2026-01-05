'use client';

import { Mail, MessageCircle, HelpCircle, Bug, Lightbulb, Shield, AlertTriangle, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is pi-health free to use?",
      answer: "Yes! pi-health is completely free to download and use. All core features including vitals tracking, medication management, AI analysis, and wellness programs are available at no cost."
    },
    {
      question: "How secure is my health data?",
      answer: "Your health data is stored securely on Firebase Cloud with enterprise-grade encryption. Only you can access your data. We never sell your information to third parties."
    },
    {
      question: "Can I export my health data?",
      answer: "Yes! You can export your health reports as PDF files directly from the app. For complete data export requests, contact us at narisnarender@gmail.com."
    },
    {
      question: "How do I delete my account?",
      answer: "You can delete your account anytime through the app settings or by contacting us."
    },
    {
      question: "Is the AI analysis accurate?",
      answer: "Our AI uses Google Gemini to provide health insights, but it's for informational purposes only and not a substitute for professional medical advice. Always consult a healthcare provider for medical decisions."
    },
    {
      question: "Which platforms does pi-health support?",
      answer: "Currently, pi-health is available for Android devices via Google Play Store. iOS support is planned for future releases."
    }
  ];

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
              <Mail size={80} style={{ color: 'var(--color-primary)' }} className="mx-auto mb-6" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ color: 'var(--color-text)' }}
            >
              Contact Us
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              We're here to help! Get in touch with the pi-health team.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-20 xl:px-32 py-20">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Main Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 md:p-14 shadow-lg"
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
              Get in Touch
            </h2>
            <p className="mb-8 text-lg" style={{ color: 'var(--color-text-secondary)' }}>
              Have questions, feedback, or need support? We'd love to hear from you.
            </p>

            <div className="p-8 rounded-2xl mb-6" style={{ backgroundColor: 'var(--color-background)' }}>
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-xl mr-4" style={{ backgroundColor: 'rgba(250, 138, 97, 0.1)' }}>
                  <Mail size={28} style={{ color: 'var(--color-primary)' }} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: 'var(--color-text)' }}>
                  Email Support
                </h3>
              </div>
              <p className="mb-6 text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                Send us an email and we'll get back to you within 24-48 hours.
              </p>
              <a 
                href="mailto:narisnarender@gmail.com" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:scale-105 shadow-lg"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                <Send size={20} />
                narisnarender@gmail.com
              </a>
            </div>

            <div className="p-6 rounded-2xl border-2" style={{ borderColor: 'var(--color-border)' }}>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                <strong>Response Time:</strong> We typically respond within 24-48 hours during business days. 
                For urgent technical issues, please include "URGENT" in your subject line.
              </p>
            </div>
          </motion.div>

          {/* What Can We Help With */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 md:p-14 shadow-lg"
          >
            <h2 className="text-4xl font-bold mb-8" style={{ color: 'var(--color-text)' }}>
              What Can We Help With?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: HelpCircle,
                  title: "General Support",
                  items: [
                    "Account setup and login issues",
                    "Feature questions and how-tos",
                    "Data syncing problems",
                    "App navigation help"
                  ]
                },
                {
                  icon: Bug,
                  title: "Bug Reports",
                  items: [
                    "App crashes or freezes",
                    "Features not working properly",
                    "AI analysis errors",
                    "Upload or sync failures"
                  ]
                },
                {
                  icon: Lightbulb,
                  title: "Feature Requests",
                  items: [
                    "New feature suggestions",
                    "UI/UX improvements",
                    "Integration requests",
                    "Wellness module ideas"
                  ]
                },
                {
                  icon: Shield,
                  title: "Privacy & Security",
                  items: [
                    "Privacy policy questions",
                    "Data deletion requests",
                    "Account security concerns",
                    "Data export requests"
                  ]
                }
              ].map((category, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl hover:shadow-md transition-all"
                  style={{ backgroundColor: 'var(--color-background)' }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg mr-3" style={{ backgroundColor: 'rgba(250, 138, 97, 0.1)' }}>
                      <category.icon size={24} style={{ color: 'var(--color-primary)' }} />
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: 'var(--color-text)' }}>
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        <CheckCircle size={16} style={{ color: 'var(--color-primary)' }} className="mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 md:p-14 shadow-lg"
          >
            <h2 className="text-4xl font-bold mb-8" style={{ color: 'var(--color-text)' }}>
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl border-2 overflow-hidden transition-all"
                  style={{ 
                    borderColor: openFaq === index ? 'var(--color-primary)' : 'var(--color-border)',
                    boxShadow: openFaq === index ? '0 4px 20px rgba(250, 138, 97, 0.15)' : 'none'
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors"
                    style={{ 
                      backgroundColor: openFaq === index ? 'rgba(250, 138, 97, 0.05)' : 'white'
                    }}
                  >
                    <span className="font-semibold text-lg pr-4" style={{ color: 'var(--color-text)' }}>
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0"
                    >
                      <div className="w-6 h-6 rounded-full flex items-center justify-center" 
                        style={{ backgroundColor: openFaq === index ? 'var(--color-primary)' : 'var(--color-border)' }}>
                        <span className="text-white font-bold text-lg">+</span>
                      </div>
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-5 pt-2" style={{ color: 'var(--color-text-secondary)' }}>
                          {faq.answer}
                          {index === 1 && (
                            <span>
                              {' '}Read our{' '}
                              <a href="/privacy" className="underline font-semibold hover:opacity-80 transition-opacity" style={{ color: 'var(--color-primary)' }}>
                                Privacy Policy
                              </a>{' '}
                              for complete details.
                            </span>
                          )}
                          {index === 3 && (
                            <span>
                              {' '}See our{' '}
                              <a href="/data-deletion" className="underline font-semibold hover:opacity-80 transition-opacity" style={{ color: 'var(--color-primary)' }}>
                                Data Deletion Policy
                              </a>{' '}
                              for step-by-step instructions.
                            </span>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Before You Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 md:p-14 shadow-lg"
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
              Before You Contact Us
            </h2>
            <p className="mb-6 text-lg" style={{ color: 'var(--color-text-secondary)' }}>
              To help us assist you faster, please include the following in your email:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: "Your registered email address", desc: "The one used to create your account" },
                { label: "Device information", desc: "Android version, device model" },
                { label: "App version", desc: "Found in Settings → About" },
                { label: "Detailed description", desc: "Of your issue or question" },
                { label: "Screenshots", desc: "If reporting a bug or UI issue" },
                { label: "Steps to reproduce", desc: "For technical issues" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl" style={{ backgroundColor: 'var(--color-background)' }}>
                  <CheckCircle size={20} style={{ color: 'var(--color-primary)' }} className="mt-0.5 shrink-0" />
                  <div>
                    <strong style={{ color: 'var(--color-text)' }}>{item.label}:</strong>
                    <span className="text-sm block mt-1" style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Feedback Welcome */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-linear-to-br from-primary/5 to-background rounded-3xl p-10 md:p-14 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl" style={{ backgroundColor: 'rgba(250, 138, 97, 0.1)' }}>
                <MessageCircle size={32} style={{ color: 'var(--color-primary)' }} />
              </div>
              <h2 className="text-3xl font-bold" style={{ color: 'var(--color-text)' }}>
                Your Feedback Matters
              </h2>
            </div>
            <p className="mb-4 text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              We're constantly improving pi-health based on user feedback. Your suggestions help us build better 
              features and improve your health tracking experience.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
              Whether it's a feature request, bug report, or just a kind word, we read every message and appreciate 
              your input. Thank you for being part of the pi-health community!
            </p>
          </motion.div>

          {/* Emergency Notice */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 border-4 rounded-3xl"
            style={{ borderColor: 'var(--color-status-error)', backgroundColor: 'rgba(239, 68, 68, 0.05)' }}
          >
            <div className="flex items-start gap-4">
              <AlertTriangle size={32} style={{ color: 'var(--color-status-error)' }} className="shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-status-error)' }}>
                  ⚠️ Medical Emergency? Do Not Email Us
                </h3>
                <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                  If you are experiencing a medical emergency, <strong>do not contact us via email</strong>. 
                  Immediately call emergency services (911, 108, or your local emergency number) or visit the nearest 
                  hospital emergency room.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
