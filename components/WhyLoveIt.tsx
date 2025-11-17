
import React from 'react';
import { CheckCircleIcon } from './icons/FeatureIcons';

const loveItPoints = [
    { title: 'Deceptively Simple', description: 'Easy to pick up, but offers a deep, rewarding challenge.' },
    { title: 'Endless Challenge', description: 'With infinite random levels, the fun never stops.' },
    { title: 'Perfect for Short Breaks', description: 'Quick-fire rounds make it ideal for playing on the go.' },
    { title: 'Completely Free', description: 'Enjoy the full game experience without any hidden costs.' }
];

const WhyLoveIt: React.FC = () => {
    return (
        <section id="why-love-it" className="py-20 sm:py-28 bg-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Why You'll Love It</h2>
                    <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
                        Dot Escape is more than just a game; it's an experience.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {loveItPoints.map((point, index) => (
                        <div key={index} className="text-center p-6">
                            <div className="flex justify-center items-center mb-4">
                                <CheckCircleIcon className="w-10 h-10 text-yellow-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-white">{point.title}</h3>
                            <p className="mt-2 text-slate-400">{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyLoveIt;
