import Link from 'next/link';
import { Mail, Shield, FileText } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-background border-t border-border mt-12 sm:mt-16 md:mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4 group">
              <Image
                src="/logo.png"
                alt="Pi Health Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <h3 className="font-bold text-lg sm:text-xl text-primary group-hover:scale-105 transition-transform">
                Pi Health
              </h3>
            </Link>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Your comprehensive AI-powered health companion for tracking vitals, medications, and wellness.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-text mb-4 flex items-center gap-2">
              <FileText size={18} className="text-primary" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/privacy', label: 'Privacy Policy' },
                { href: '/terms', label: 'Terms of Service' },
                { href: '/data-deletion', label: 'Data Deletion' }
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-all hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-text mb-4 flex items-center gap-2">
              <Shield size={18} className="text-primary" />
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm sm:text-base">
              {[
                { href: '/contact', label: 'Contact Us' },
                { href: '/privacy#data-security', label: 'Data Security' }
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-primary transition-all hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Download */}
          <div>
            <h4 className="font-semibold text-text mb-4">Get the App</h4>
            <p className="text-text-secondary text-sm sm:text-base mb-4 leading-relaxed">
              Download Pi Health on Google Play Store
            </p>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl hover:bg-primary-dark hover:scale-105 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base font-medium"
              aria-label="Download Pi Health from Google Play Store"
            >
              Download Now
            </a>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text-secondary">
            <p className="text-center sm:text-left">
              &copy; {currentYear} Pi Health. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              <a
                href="mailto:narisnarender@gmail.com"
                className="hover:text-primary transition-colors"
              >
                narisnarender@gmail.com
              </a>
            </div>
          </div>
          <p className="mt-4 text-xs sm:text-sm text-text-secondary text-center bg-primary/5 rounded-lg p-3 sm:p-4">
            <Shield size={14} className="inline mr-1 text-primary" />
            This app is not a medical device and should not replace professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
