
import type React from 'react';

export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface Review {
  quote: string;
  author: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}
