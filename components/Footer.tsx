
import React from 'react';
import { TwitterIcon, FacebookIcon, InstagramIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-slate-400 hover:text-white">
            <span className="sr-only">Facebook</span>
            <FacebookIcon className="h-6 w-6" />
          </a>
          <a href="#" className="text-slate-400 hover:text-white">
            <span className="sr-only">Instagram</span>
            <InstagramIcon className="h-6 w-6" />
          </a>
          <a href="#" className="text-slate-400 hover:text-white">
            <span className="sr-only">Twitter</span>
            <TwitterIcon className="h-6 w-6" />
          </a>
        </div>
        <div className="mt-8 flex justify-center space-x-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-white">Contact</a>
        </div>
        <p className="mt-8 text-center text-base text-slate-500">
          &copy; {new Date().getFullYear()} Dot Escape. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
