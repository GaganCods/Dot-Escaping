
import React from 'react';
import { AppleIcon, GooglePlayIcon, WindowsIcon } from './icons/PlatformIcons';

interface DownloadProps {
  title: string;
  isFinalCTA?: boolean;
}

const Download: React.FC<DownloadProps> = ({ title, isFinalCTA = false }) => {
  return (
    <section id="download" className={`py-20 sm:py-28 ${isFinalCTA ? 'bg-slate-800/50' : ''}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
        <p className="mt-4 text-lg text-slate-400">
          Available on your favorite platforms. Get started in seconds.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-slate-600 transition-colors duration-300"
          >
            <GooglePlayIcon className="w-6 h-6" />
            <span>Google Play</span>
          </a>
          <a
            href="#"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-slate-600 transition-colors duration-300"
          >
            <AppleIcon className="w-6 h-6" />
            <span>App Store</span>
          </a>
          <a
            href="#"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-slate-600 transition-colors duration-300"
          >
            <WindowsIcon className="w-6 h-6" />
            <span>Windows</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Download;
