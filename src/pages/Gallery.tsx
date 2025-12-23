import React from "react";
import { GALLERY_DATA } from "../constants";

const Gallery: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white dark:bg-deep-space selection:bg-neon-cyan/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] text-blue-500 uppercase mb-2">
            Legacy
          </h2>

          <h1 className="text-5xl md:text-7xl font-display font-black mb-6 text-gray-900 dark:text-white uppercase">
            Aura of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-neon-purple drop-shadow-[0_0_15px_rgba(188,19,254,0.3)]">
              Aakriti
            </span>
          </h1>
        </div>

        {/* Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_DATA.map((img) => (
            <div
              key={img.id}
              className="w-full h-full bg-gray-50 dark:bg-[#0a0a1a] cyber-border border border-gray-100 dark:border-white/10 overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-blue-500/10 hover:border-neon-cyan duration-500 group flex flex-col items-center relative"
            >
              <img
                src={img.url}
                alt="Aakrit Moments"
                loading="lazy"
                className="w-full h-auto grayscale group-hover:grayscale-0"
              />

              {/* Overlay only, no text */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;