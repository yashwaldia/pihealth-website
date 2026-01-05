'use client';

import { 
  Heart, 
  Pill, 
  FileText, 
  Activity, 
  Brain, 
  Baby, 
  Camera, 
  TrendingUp,
  Shield,
  Smartphone,
  ArrowRight,
  Check,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    {
      icon: Activity,
      title: "Vitals Tracking",
      description: "Monitor blood pressure, heart rate, blood sugar, temperature, oxygen saturation, and weight with intelligent tracking."
    },
    {
      icon: Pill,
      title: "Smart Medication Manager",
      description: "Scan prescriptions with AI to extract medications automatically. Get reminders and track adherence."
    },
    {
      icon: FileText,
      title: "Lab Report Analysis",
      description: "Upload lab reports and get AI-powered simplified explanations in easy-to-understand language."
    },
    {
      icon: Camera,
      title: "Food Recognition",
      description: "Take photos of meals to get instant nutrition analysis with calorie and macro tracking powered by AI."
    },
    {
      icon: Baby,
      title: "Pregnancy & Child Care",
      description: "Track pregnancy week-by-week, monitor child growth, vaccinations, and developmental milestones."
    },
    {
      icon: TrendingUp,
      title: "Health Insights",
      description: "Compare reports over time, predict nutrient deficiencies, and get personalized wellness recommendations."
    },
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Google Gemini AI analyzes your health data to provide actionable insights and friendly explanations."
    },
    {
      icon: Heart,
      title: "Wellness Programs",
      description: "30-day guided programs for liver, kidney, skin, hair, gut health, bone, dental care, and fitness."
    },
  ];

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
      answer: "Yes! You can export your health reports as PDF files directly from the app. For complete data export requests, contact us."
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-background overflow-hidden">
      {/* Hero Section - Full Width */}
      <section className="relative min-h-screen flex items-center">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-background via-white to-primary/5" />
        
        <div className="container mx-auto px-6 lg:px-12 xl:px-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ backgroundColor: 'var(--color-primary)', opacity: 0.1 }}
              >
                <Sparkles size={18} style={{ color: 'var(--color-primary)' }} />
                <span className="text-sm font-semibold" style={{ color: 'var(--color-primary)' }}>
                  AI-Powered Health Companion
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ color: 'var(--color-text)' }}>
                Your Health,{' '}
                <span className="relative inline-block">
                  <span style={{ color: 'var(--color-primary)' }}>Simplified</span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  />
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                Track vitals, medications, lab reports, and wellness with intelligent AI insights. 
                Everything you need in one comprehensive app.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-white transition-all shadow-lg hover:shadow-xl"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Smartphone className="mr-2 group-hover:rotate-12 transition-transform" size={22} />
                  Download Now
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </motion.a>

                <motion.a
                  href="#features"
                  className="group inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold border-2 transition-all hover:shadow-lg"
                  style={{ 
                    borderColor: 'var(--color-primary)', 
                    color: 'var(--color-primary)',
                    backgroundColor: 'white'
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Features
                  <ChevronDown className="ml-2 group-hover:translate-y-1 transition-transform" size={20} />
                </motion.a>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <div>
                  <div className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>50+</div>
                  <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Health Metrics</div>
                </div>
                <div>
                  <div className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>AI</div>
                  <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Powered Insights</div>
                </div>
                <div>
                  <div className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>24/7</div>
                  <div className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Health Tracking</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-3xl overflow-hidden shadow-2xl bg-white p-10"
              >
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                />
                
                <div className="relative z-10 text-center">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="mb-6 flex justify-center"
                  >
                    <Image
                      src="/logo.png"
                      alt="pi-health Logo"
                      width={120}
                      height={120}
                      className="mx-auto rounded-2xl"
                      priority
                    />
                  </motion.div>
                  
                  <h3 className="text-3xl font-bold mb-4">Comprehensive Health Tracking</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }} className="text-lg">
                    AI insights, personalized wellness, and complete medical record management
                  </p>

                  <div className="mt-8 flex items-center justify-center gap-3">
                    <div className="flex -space-x-3">
                      {[
                        { seed: 'Sarah-Johnson', name: 'Sarah' },
                        { seed: 'John-Smith', name: 'John' },
                        { seed: 'Emma-Davis', name: 'Emma' },
                        { seed: 'Alex-Wilson', name: 'Alex' },
                        { seed: 'Maya-Brown', name: 'Maya' }
                      ].map((user, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                          className="relative w-12 h-12 rounded-full border-4 border-white shadow-lg overflow-hidden hover:scale-110 transition-transform cursor-pointer"
                          whileHover={{ scale: 1.15, zIndex: 10 }}
                        >
                          <Image
                            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.seed}&backgroundColor=b6e3f4,c0aede,d1d4f9`}
                            alt={user.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                            unoptimized
                          />
                        </motion.div>
                      ))}
                    </div>
                    <span className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
                      Trusted by thousands
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} style={{ color: 'var(--color-primary)' }} />
        </motion.div>
      </section>

      {/* Features Section - Full Width */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
                Powerful Features for Complete Health Management
              </h2>
              <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
                Everything you need to track, analyze, and improve your health
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FeatureCard {...feature} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-linear-to-b from-background to-white">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
                How pi-health Works
              </h2>
              <p className="text-xl" style={{ color: 'var(--color-text-secondary)' }}>
                Get started in three simple steps
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Download & Sign Up",
                  description: "Get pi-health from Play Store and create your secure account in seconds"
                },
                {
                  step: "02",
                  title: "Track Your Health",
                  description: "Log vitals, upload reports, scan prescriptions, and track medications effortlessly"
                },
                {
                  step: "03",
                  title: "Get AI Insights",
                  description: "Receive personalized health insights and recommendations powered by AI"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full">
                    <div className="text-6xl font-bold mb-4 opacity-10" style={{ color: 'var(--color-primary)' }}>
                      {item.step}
                    </div>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-text)' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: 'var(--color-text-secondary)' }}>
                      {item.description}
                    </p>
                  </div>
                  
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight size={28} style={{ color: 'var(--color-primary)' }} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Modern Accordion */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
                Frequently Asked Questions
              </h2>
              <p className="text-xl" style={{ color: 'var(--color-text-secondary)' }}>
                Everything you need to know about pi-health
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl border-2 overflow-hidden transition-all"
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
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={24} style={{ color: 'var(--color-primary)' }} />
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
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Security Section */}
      <section className="py-24 bg-linear-to-br from-primary/5 via-background to-white">
        <div className="container mx-auto px-6 lg:px-12 xl:px-20">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 md:p-16 shadow-2xl"
            >
              <div className="flex items-center justify-center mb-8">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Shield size={64} style={{ color: 'var(--color-primary)' }} />
                </motion.div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6" style={{ color: 'var(--color-text)' }}>
                Your Health Data is Private & Secure
              </h2>
              
              <p className="text-center text-lg mb-8 max-w-3xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
                We use Firebase Cloud Firestore with enterprise-grade encryption to protect your sensitive health information. 
                Your data belongs to you, and only you can access it.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {[
                  { icon: Shield, text: "End-to-End Encryption" },
                  { icon: Check, text: "GDPR Compliant" },
                  { icon: Check, text: "No Data Selling" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 justify-center">
                    <item.icon size={20} style={{ color: 'var(--color-primary)' }} />
                    <span className="font-medium" style={{ color: 'var(--color-text)' }}>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center">
                <a
                  href="/privacy"
                  className="inline-flex items-center px-8 py-3 rounded-xl font-semibold border-2 transition-all hover:scale-105"
                  style={{ 
                    borderColor: 'var(--color-primary)', 
                    color: 'var(--color-primary)' 
                  }}
                >
                  Read Privacy Policy
                  <ArrowRight className="ml-2" size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-linear-to-r from-primary to-primary-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 xl:px-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Start Your Health Journey Today
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl mb-10 opacity-90"
            >
              Join thousands of users tracking their health with pi-health. Download now for free on Android.
            </motion.p>

            <motion.a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-10 py-5 rounded-xl font-bold text-lg bg-white shadow-2xl hover:shadow-3xl transition-all"
              style={{ color: 'var(--color-primary)' }}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <Smartphone className="mr-3 group-hover:rotate-12 transition-transform" size={28} />
              Get Started - It's Free
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={24} />
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}
