import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg text-primary mb-4">pi-health</h3>
            <p className="text-text-secondary text-sm">
              Your comprehensive AI-powered health companion for tracking vitals, medications, and wellness.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-text mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-text-secondary hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-text-secondary hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-text-secondary hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/data-deletion" className="text-text-secondary hover:text-primary transition-colors">
                  Data Deletion
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-text mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="text-text-secondary hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy#data-security" className="text-text-secondary hover:text-primary transition-colors">
                  Data Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Download */}
          <div>
            <h4 className="font-semibold text-text mb-4">Get the App</h4>
            <p className="text-text-secondary text-sm mb-4">
              Download pi-health on Google Play Store
            </p>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors text-sm"
            >
              Download Now
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-text-secondary">
          <p>&copy; {currentYear} pi-health. All rights reserved.</p>
          <p className="mt-2 text-xs">
            This app is not a medical device and should not replace professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
