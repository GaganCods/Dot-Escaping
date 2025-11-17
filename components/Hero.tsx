
import React, { useState, useEffect, useRef } from 'react';

// FIX: Explicitly type Dot as a React.FC to ensure special props like `key` are handled correctly by TypeScript.
const Dot: React.FC<{ cx: number; cy: number }> = ({ cx, cy }) => (
  <circle cx={cx} cy={cy} r="3" className="fill-yellow-400" />
);

const HeroAnimation = () => {
  const [pathLength, setPathLength] = useState(0);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
      pathRef.current.style.strokeDasharray = `${length}`;
      pathRef.current.style.strokeDashoffset = `${length}`;
    }
  }, []);

  const dots = [
    { cx: 40, cy: 120 }, { cx: 80, cy: 80 }, { cx: 120, cy: 150 },
    { cx: 160, cy: 60 }, { cx: 200, cy: 130 }, { cx: 240, cy: 90 },
    { cx: 70, cy: 180 }, { cx: 180, cy: 20 },
  ];

  return (
    <div className="relative w-full max-w-sm h-64">
      <svg viewBox="0 0 280 200" className="w-full h-full">
        <text x="10" y="195" className="fill-slate-400 font-bold text-lg">START</text>
        <path d="M20 180 C 60 100, 150 100, 200 40 S 260 20, 260 20" stroke="url(#line-gradient)" strokeWidth="4" fill="none" ref={pathRef} className="animate-draw" />
        <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#f87171" />
            </linearGradient>
        </defs>
        <text x="230" y="15" className="fill-slate-400 font-bold text-lg">END</text>
        {dots.map((dot, i) => <Dot key={i} cx={dot.cx} cy={dot.cy} />)}
      </svg>
      <style>{`
        @keyframes draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        .animate-draw {
          animation: draw 3s ease-in-out forwards infinite alternate;
        }
      `}</style>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-800 [mask-image:linear-gradient(to_bottom,white_0%,transparent_100%)]"></div>
        <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">
            Dot <span className="text-red-500">Escape</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Draw your path to victory. A game of skill, precision, and nerves of steel.
            </p>
            <HeroAnimation />
            <div className="mt-8">
                <a
                    href="#download"
                    className="bg-red-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-red-700 transition-transform transform hover:scale-105 duration-300 ease-in-out shadow-lg shadow-red-600/30"
                >
                    Download Now
                </a>
            </div>
        </div>
        <style>{`
          .bg-grid-slate-800 {
            background-image: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
            background-size: 2rem 2rem;
          }
      `}</style>
    </section>
  );
};

export default Hero;