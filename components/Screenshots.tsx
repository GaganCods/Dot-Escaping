
import React from 'react';

const screenshots = [
  'https://picsum.photos/seed/game1/500/400',
  'https://picsum.photos/seed/game2/500/400',
  'https://picsum.photos/seed/game3/500/400',
  'https://picsum.photos/seed/game4/500/400',
  'https://picsum.photos/seed/game5/500/400',
  'https://picsum.photos/seed/game6/500/400',
];

const Screenshots: React.FC = () => {
  return (
    <section id="screenshots" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">See It in Action</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            A glimpse into the clean, focused world of Dot Escape.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((src, index) => (
            <div key={index} className="group aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-lg">
              <img
                src={src}
                alt={`Dot Escape Screenshot ${index + 1}`}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;
