'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms' },
    { href: '/data-deletion', label: 'Data Deletion' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div whileHover={{ rotate: 5 }} transition={{ duration: 0.3 }}>
              <Image
                src="/logo.png"
                alt="Pi Health Logo"
                width={40}
                height={40}
                className="rounded-lg w-8 h-8 sm:w-10 sm:h-10"
              />
            </motion.div>
            <span className="text-xl sm:text-2xl font-bold group-hover:scale-105 transition-transform" style={{ color: 'var(--color-primary)' }}>
              Pi Health
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? 'bg-primary/10 text-primary'
                    : 'text-text hover:text-primary hover:bg-primary/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-text hover:text-primary rounded-lg hover:bg-primary/5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - Slide Down */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-2 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                        isActive(link.href)
                          ? 'bg-primary/10 text-primary'
                          : 'text-text hover:text-primary hover:bg-primary/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
