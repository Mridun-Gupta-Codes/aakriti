import React from "react";
import { SPONSORS_DATA } from "../constants";
import { ExternalLink, Star } from "lucide-react";

const Sponsors: React.FC = () => {
  const titleSponsor = SPONSORS_DATA.find(s => s.id === 's4');
  const otherSponsors = SPONSORS_DATA.filter(s => s.id !== 's4');

  return (
    <div className="pt-32 pb-20 min-h-screen bg-white dark:bg-deep-space selection:bg-neon-cyan/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] text-blue-500 uppercase mb-2">
            The Backbone
          </h2>

          <h1 className="text-5xl md:text-7xl font-display font-black mb-6 text-gray-900 dark:text-white uppercase tracking-tighter">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-neon-purple drop-shadow-[0_0_15px_rgba(188,19,254,0.3)]">
              Partners
            </span>
          </h1>
        </div>

        {/* Title Sponsor Section */}
        {titleSponsor && (
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10 justify-center">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-neon-purple/30"></div>
              <h3 className="flex items-center gap-2 text-xs font-black tracking-[0.4em] uppercase text-neon-purple">
                <Star className="w-4 h-4 fill-neon-purple"/> Title Sponsor
              </h3>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-neon-purple/30"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative group bg-gradient-to-b from-white/5 to-transparent dark:bg-[#0a0a1a] rounded-[3rem] p-1 md:p-2 border border-neon-purple/20 shadow-[0_0_50px_rgba(188,19,254,0.1)] transition-all duration-500 hover:shadow-neon-purple/20">
                <div className="bg-white dark:bg-[#050510] rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
                  <div className="w-full md:w-1/2 h-64 flex items-center justify-center p-6 bg-gray-50 dark:bg-white/5 rounded-[2rem]">
                    <img
                      src={titleSponsor.logo}
                      alt={titleSponsor.name}
                      className="max-h-full max-w-full object-contain transition-all duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
                    <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 dark:text-white uppercase tracking-tighter">
                      {titleSponsor.name}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
                      Leading the vision of Aakriti 3.0 as our premier Title Partner.
                    </p>
                    <a
                      href={titleSponsor.website}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full flex items-center justify-center gap-3 bg-gray-200 dark:bg-white/5 text-gray-900 dark:text-white py-4 rounded-2xl font-black text-sm tracking-widest hover:bg-gray-300 dark:hover:bg-white/10 transition-all shadow-md group-hover:shadow-neon-purple/20"
                    >
                      <ExternalLink className="w-5 h-5"/>
                      VISIT WEBSITE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}


        {/* Other Sponsors Section */}
        <div className="flex items-center gap-4 mb-10 justify-center">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gray-200 dark:to-white/10"></div>
          <h3 className="text-xs font-black tracking-[0.4em] uppercase text-gray-400 dark:text-gray-500">
            Strategic Partners
          </h3>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gray-200 dark:to-white/10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {otherSponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="w-full bg-gray-50 dark:bg-[#0a0a1a] rounded-[3rem] p-8 border border-gray-100 dark:border-white/10 overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-blue-500/10 group flex flex-col items-center justify-center relative">

              {/* Logo Area */}
              <div className="flex items-center justify-center mb-8">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>

              {/* Name */}
              <h3 className="text-2xl font-display font-black text-center text-gray-900 dark:text-white mb-8">
                {sponsor.name}
              </h3>

              {/* CTA */}
              <a
                href={sponsor.website}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-gray-200 dark:bg-white/5 text-gray-900 dark:text-white py-4 rounded-2xl font-black text-sm tracking-widest hover:bg-gray-300 dark:hover:bg-white/10 transition-all shadow-md group-hover:shadow-neon-purple/20"
              >
                <ExternalLink className="w-5 h-5"/>
                VISIT WEBSITE
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;