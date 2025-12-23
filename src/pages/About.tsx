import React from "react";
import { EXTERNAL_LINKS } from "../constants";
import { Cpu, Award, ExternalLink, Globe } from "lucide-react";
import about from "../assets/about.webp";

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-white dark:bg-deep-space selection:bg-neon-cyan/30 transition-colors duration-300">
      {/* SECTION 1: RISE FOR THE FUTURE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-6xl md:text-8xl font-display font-black leading-none mb-8">
              <span className="block text-gray-900 dark:text-white">
                RISE FOR
              </span>
              <span className="block text-gray-900 dark:text-white">
                THE
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-neon-cyan drop-shadow-[0_0_15px_rgba(59,130,246,0.3)] dark:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                FUTURE
              </span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Cpu className="w-6 h-6"/>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                    Innovation First
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Dedicated to showcasing the latest trends in technology.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-500/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <Award className="w-6 h-6"/>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                    Excellence
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Recognizing and rewarding the brightest minds.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl">
              <img
                src={about}
                className="w-full h-[500px] object-cover contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              <div className="absolute bottom-8 left-0 translate-x-[-10%] sm:translate-x-0">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl flex items-center gap-4 min-w-[240px] border border-gray-100 dark:border-white/5 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-500">
                    <Globe className="w-6 h-6"/>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                      Global Standard
                    </span>
                    <span className="block text-xl font-display font-black text-gray-900 dark:text-white leading-tight">
                      PREMIER
                      <br/>
                      INSTITUTE
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>
          </div>
        </div>
      </section>
      {/* SECTION 2: OUR PARENT INSTITUTION */}
      <section className="bg-gradient-to-b from-transparent to-gray-50 dark:to-black/40 border-t border-gray-200 dark:border-white/5 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-auto">
            <h5 className="text-blue-600 dark:text-blue-500 font-bold tracking-[0.3em] text-sm mb-6">
              OUR PARENT INSTITUTION
            </h5>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              Institute of Chemical Technology
            </h2>

            <div className="flex flex-wrap gap-6">
              <a
                href={EXTERNAL_LINKS.ictMumbai}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-gray-900 text-white dark:bg-white dark:text-gray-900 px-8 py-4 rounded-2xl font-black uppercase text-sm tracking-wider hover:bg-gray-800 dark:hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
              >
                Mumbai Campus <ExternalLink className="w-4 h-4"/>
              </a>
              <a
                href={EXTERNAL_LINKS.ictJalna}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-transparent border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white px-8 py-4 rounded-2xl font-black uppercase text-sm tracking-wider hover:bg-gray-100 dark:hover:bg-white/5 transition-all hover:scale-105"
              >
                Marathwada Jalna Campus <ExternalLink className="w-4 h-4"/>
              </a>
              <a
                href={EXTERNAL_LINKS.ictBhubaneswar}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-transparent border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white px-8 py-4 rounded-2xl font-black uppercase text-sm tracking-wider hover:bg-gray-100 dark:hover:bg-white/5 transition-all hover:scale-105"
              >
                IOCL Bhubaneswar Campus <ExternalLink className="w-4 h-4"/>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;