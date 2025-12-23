import React from "react";
import { EXTERNAL_LINKS, BRAND_ASSETS } from "../constants";
import { Mail, Instagram, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-black border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Institute Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Institute of Chemical Technology
            </h3>
            <div className="flex flex-col space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <a
                href={EXTERNAL_LINKS.ictMumbai}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neon-cyan transition-colors flex items-center gap-2"
              >
                <Globe className="w-4 h-4"/>
                Mumbai Campus
              </a>
              <a
                href={EXTERNAL_LINKS.ictJalna}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neon-cyan transition-colors flex items-center gap-2"
              >
                <Globe className="w-4 h-4"/>
                Marathwada Jalna Campus
              </a>
              <a
                href={EXTERNAL_LINKS.ictBhubaneswar}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neon-cyan transition-colors flex items-center gap-2"
              >
                <Globe className="w-4 h-4"/>
                IOCL Bhubaneswar Campus
              </a>
            </div>
          </div>

          {/* Column 2: Logos */}
          <div className="flex flex-col items-center justify-center order-first lg:order-none">
            <div className="flex space-x-6 items-center mb-6">
              <div className="w-24 h-24 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform border border-neon-purple/20">
                <img
                  src={BRAND_ASSETS.ict.logo}
                  className="w-full h-full object-cover transition-transform "
                />
              </div>
              <Link
                to="/"
                className="w-24 h-24 rounded-full overflow-hidden shadow-2xl hover:scale-105 transition-transform "
              >
                <img
                  src={BRAND_ASSETS.aakriti.logo}
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-[0.4em] font-black animate-pulse">
              The Shape of Innovation
            </p>
          </div>

          {/* Column 3: Social & Contact */}
          <div className="md:text-right">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Connect
            </h3>
            <div className="flex md:justify-end space-x-4 mb-4">
              <a
                href={EXTERNAL_LINKS.instagramAakriti}
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-neon-purple transition-transform hover:scale-110 shadow-md"
              >
                <Instagram className="w-6 h-6"/>
              </a>
              <a
                href={EXTERNAL_LINKS.email}
                className="text-gray-600 dark:text-gray-400 hover:text-neon-purple transition-transform hover:scale-110 shadow-md"
                aria-label="Email"
              >
                <Mail className="w-6 h-6"/>
              </a>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              BT-6/7, Biotechnology Park, Additional MIDC Area, Aurangabad Road, Jalna, Maharashtra 431203, India
            </p>
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">
            © {new Date().getFullYear()} Institute of Chemical Technology | Team Aakriti
          </p>
          <p className="text-[8px] text-gray-500 mt-2">
            Designed and developed by Mridun Gupta
          </p>
          <div className="flex gap-6">
            <Link
              to="/about"
              className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-blue-600 transition-colors"
            >
              Vision
            </Link>
            <Link
              to="/contact"
              className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-blue-600 transition-colors"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;