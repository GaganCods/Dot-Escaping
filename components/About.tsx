
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            A Simple Challenge, Infinitely Fun
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto">
            Dot Escape is a beautifully simple game with one goal: draw a path from start to finish without hitting any of the pesky dots. It sounds easy, but with randomly generated levels, each attempt is a new, unique challenge that will test your precision and focus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
