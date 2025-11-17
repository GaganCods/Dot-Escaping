
import React from 'react';
import type { Feature } from '../types';
import { ChartBarIcon, DevicePhoneMobileIcon, EyeIcon, PencilIcon, ShieldCheckIcon, SparklesIcon } from './icons/FeatureIcons';


const features: Feature[] = [
  {
    icon: PencilIcon,
    title: 'Smooth Path Drawing',
    description: 'Experience fluid, intuitive controls that make drawing your path a delight.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Accurate Collision Detection',
    description: 'Every move counts. Our pixel-perfect collision system means you can\'t cheat!',
  },
  {
    icon: SparklesIcon,
    title: 'Randomly Generated Layouts',
    description: 'Never play the same game twice. Dots are randomly placed for endless replayability.',
  },
  {
    icon: ChartBarIcon,
    title: 'Multiple Difficulty Modes',
    description: 'Whether you\'re a casual player or a seasoned expert, there\'s a challenge for you.',
  },
  {
    icon: EyeIcon,
    title: 'Clean & Minimalist Visuals',
    description: 'A beautiful, distraction-free interface that lets you focus on what matters: the game.',
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'Responsive Gameplay',
    description: 'Enjoy a seamless experience on any device, from your phone to your desktop.',
  },
];

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
    const Icon = feature.icon;
    return (
        <div className="bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-red-500/20 hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-600 text-white mb-4">
                <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-white">{feature.title}</h3>
            <p className="mt-2 text-base text-slate-400">{feature.description}</p>
        </div>
    );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Everything You Need to Succeed</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            We've packed Dot Escape with features to make it challenging, fair, and fun.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
