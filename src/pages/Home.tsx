import React from "react";
import { ArrowRight, Timer, TimerOff } from "lucide-react";
import { Link } from "react-router-dom";
import Countdown from "../components/Countdown";
import { BRAND_ASSETS } from "../constants";

interface HomeProps {
  showTimer: boolean;
  toggleTimer: () => void;
}

const Home: React.FC<HomeProps> = ({ showTimer, toggleTimer }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-gray-50 to-white dark:from-[#1a1a2e] dark:via-[#050510] dark:to-black transition-colors duration-500"></div>
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16 md:mt-0">

        {/* Institute Branding */}
        <div className="mb-6 animate-fade-in-down">
          <h2 className="text-sm md:text-lg font-black tracking-[0.3em] text-gray-400 dark:text-gray-500 uppercase mb-1">Institute of Chemical Technology, Mumbai</h2>
          <h3 className="text-xs md:text-sm font-bold tracking-[0.2em] text-neon-purple dark:text-neon-purple uppercase">Marathwada Campus, Jalna</h3>
        </div>

        {/* Main Title with Logo */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-neon-purple rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
            <div className="relative w-16 h-16 md:w-24 md:h-24 bg-white dark:bg-black rounded-full flex items-center justify-center border-2 border-blue-600/30 dark:border-neon-cyan/30 shadow-xl">
              <img src={BRAND_ASSETS.aakriti.logo} className="absolute text-[8px] md:text-[10px] font-black text-gray-900 dark:text-white"/>
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-500 drop-shadow-lg">AAKRITI 3.0</h1>
        </div>

        <p className="text-xl md:text-3xl font-light text-gray-600 dark:text-gray-300 mb-8 font-sans">
          The Shape of{" "}
          <span className="text-blue-600 dark:text-neon-cyan font-black">Innovation</span>
        </p>

        {/* Countdown */}
        <div className={`mb-12 transition-all duration-700 ${showTimer ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-8 scale-95 pointer-events-none h-0"}`}><Countdown/></div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/events" className="group relative px-10 py-5 bg-gray-900 dark:bg-white text-white dark:text-black font-black uppercase tracking-widest text-xs md:text-sm rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-2xl">
            <span className="relative z-10 flex items-center">
              Explore Events
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"/>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-neon-purple opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </Link>

          <Link to="/about" className="px-10 py-5 bg-transparent border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-white font-black uppercase tracking-widest text-xs md:text-sm rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-all hover:scale-105">
          Our Vision
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;