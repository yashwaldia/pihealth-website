import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:scale-105">
    <div 
    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
    style={{ backgroundColor: 'rgba(250, 138, 97, 0.1)' }}
    >
    <Icon className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />
    </div>

      <h3 className="text-xl font-semibold text-text mb-2">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </div>
  );
}
