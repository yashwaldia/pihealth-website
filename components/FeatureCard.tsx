import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group bg-white/80 backdrop-blur-sm p-5 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
      <div 
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg"
        style={{ 
          background: 'linear-gradient(135deg, rgba(250, 138, 97, 0.15) 0%, rgba(250, 138, 97, 0.05) 100%)',
          border: '1px solid rgba(250, 138, 97, 0.2)'
        }}
      >
        <Icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: 'var(--color-primary)' }} />
      </div>

      <h3 className="text-lg sm:text-xl font-semibold text-text mb-2 sm:mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
        {description}
      </p>
    </div>
  );
}
