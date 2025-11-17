
import React, { useState } from 'react';
import type { FAQItem } from '../types';
import { ChevronDownIcon } from './icons/FeatureIcons';

const faqItems: FAQItem[] = [
  {
    question: 'Are there different difficulty levels?',
    answer: 'Yes! Dot Escape features multiple difficulty settings, from "Easy" for a relaxed experience to "Insane" for those who truly want to test their limits. The number and speed of dots increase with difficulty.',
  },
  {
    question: 'Can I play the game offline?',
    answer: 'Absolutely. Once downloaded, Dot Escape can be played entirely offline. No internet connection is required, making it perfect for travel or when you\'re away from Wi-Fi.',
  },
  {
    question: 'What devices are supported?',
    answer: 'We aim to support a wide range of devices. The game is available on modern Android phones and tablets, iPhones and iPads, and Windows PCs. Check the respective app store pages for specific requirements.',
  },
  {
    question: 'Will there be future updates?',
    answer: 'Yes! We are constantly working on new features, including new game modes, themes, and challenges. Follow our social media channels to stay up-to-date on what\'s next.',
  },
];

const AccordionItem: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-5 text-left"
      >
        <span className="text-lg font-medium text-white">{item.question}</span>
        <ChevronDownIcon
          className={`w-6 h-6 text-slate-400 transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
             <p className="pb-5 pr-10 text-slate-400">{item.answer}</p>
        </div>
      </div>
    </div>
  );
};


const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-slate-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-slate-400">
            Have questions? We have answers.
          </p>
        </div>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
