
import React from 'react';

const Step: React.FC<{ number: string; title: string; description: string; imageUrl: string }> = ({ number, title, description, imageUrl }) => (
  <div className="flex flex-col md:flex-row items-center gap-8 even:md:flex-row-reverse">
    <div className="flex-1 text-center md:text-left">
      <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
        <span className="flex items-center justify-center w-10 h-10 bg-red-600 text-white font-bold rounded-full text-lg">{number}</span>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-slate-400">{description}</p>
    </div>
    <div className="flex-1">
      <img src={imageUrl} alt={title} className="rounded-lg shadow-xl w-full h-auto object-cover aspect-video" />
    </div>
  </div>
);

const HowToPlay: React.FC = () => {
  return (
    <section id="how-to-play" className="py-20 sm:py-28 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Simple to Learn, Hard to Master</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">Follow these simple steps to begin your journey.</p>
        </div>
        <div className="space-y-16">
          <Step 
            number="1"
            title="Start at the Bottom"
            description="Every level begins at the designated START zone. This is your safe haven."
            imageUrl="https://picsum.photos/seed/step1/600/300"
          />
          <Step 
            number="2"
            title="Draw Your Line"
            description="Click and drag your mouse (or use your finger) to draw a continuous line towards the END zone."
            imageUrl="https://picsum.photos/seed/step2/600/300"
          />
          <Step 
            number="3"
            title="Avoid the Dots"
            description="This is the crucial part! Your line cannot touch any of the yellow dots scattered across the screen. Stay focused!"
            imageUrl="https://picsum.photos/seed/step3/600/300"
          />
          <Step 
            number="4"
            title="Reach the Top"
            description="Successfully guide your line to the END zone without any collisions to complete the level and move to the next challenge."
            imageUrl="https://picsum.photos/seed/step4/600/300"
          />
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;
