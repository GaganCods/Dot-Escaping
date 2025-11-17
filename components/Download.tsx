
import React from 'react';
import { GooglePlayIcon } from './icons/PlatformIcons';

interface DownloadProps {
  title: string;
  isFinalCTA?: boolean;
}

const Download: React.FC<DownloadProps> = ({ title, isFinalCTA = false }) => {
  return (
    <section id="download" className={`py-20 sm:py-28 ${isFinalCTA ? 'bg-slate-800/50' : ''}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
        <p className="mt-4 text-lg text-slate-400 max-w-xl mx-auto">
          The game is light, fast to install, and fun to play. Available now on Android!
        </p>
        <div className="mt-10 flex items-center justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-3 bg-red-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-red-700 transition-transform transform hover:scale-105 duration-300 ease-in-out shadow-lg shadow-red-600/30"
          >
            <GooglePlayIcon className="w-7 h-7" />
            <span>Get it on Google Play</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Download;
