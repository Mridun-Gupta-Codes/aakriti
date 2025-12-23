import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Moon, Sun, Timer, TimerOff, Binary } from "lucide-react";
import { EXTERNAL_LINKS, BRAND_ASSETS } from "../constants";

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
  showTimer: boolean;
  toggleTimer: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  toggleTheme,
  showTimer,
  toggleTimer,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isEventsPage = location.pathname === '/events';
  const isAdminPage = location.pathname === '/admin';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

   useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "TEAM", path: "/team" },
    { name: "EVENTS", path: "/events" },
    { name: "GALLERY", path: "/gallery" },
    { name: "SPONSORS", path: "/sponsors" },
    { name: "CONTACT", path: "/contact" },
  ];

  const QuickLinks = () => (
    <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl z-50 overflow-hidden">
      <div className="px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800">
        Institute of Chemical Technology
      </div>
      <a
        href={EXTERNAL_LINKS.ictMumbai}
        target="_blank"
        rel="noopener noreferrer"
        className="block px-4 py-3 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border-gray-100 dark:border-gray-800"
      >
        Mumbai Campus
      </a>
      <a
        href={EXTERNAL_LINKS.ictJalna}
        target="_blank"
        rel="noopener noreferrer"
        className="block px-4 py-3 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        Marathwada Jalna Campus
      </a>
      <a
        href={EXTERNAL_LINKS.ictBhubaneswar}
        target="_blank"
        rel="noopener noreferrer"
        className="block px-4 py-3 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        IOCL Bhubaneswar Campus
      </a>

      <div className="px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800">
        Fest Connect
      </div>
      <a
        href={EXTERNAL_LINKS.instagramAakriti}
        target="_blank"
        rel="noopener noreferrer"
        className="block px-4 py-3 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        Instagram
      </a>
      <a
        href={EXTERNAL_LINKS.email}
        className="block px-4 py-3 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-bold text-neon-purple"
      >
        Email
      </a>
    </div>
  );

  return (
    <>
      <nav
        className={`fixed w-full z-40 transition-all duration-300 font-sans ${
          scrolled
            ? "bg-white/80 dark:bg-black/80 backdrop-blur-md py-2 shadow-lg"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-2xl overflow-hidden flex items-center justify-center transition-all group-hover:scale-110 shadow-sm border border-gray-300 dark:border-white/10">
                <img
                  src={BRAND_ASSETS.ict.logo}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center transition-all group-hover:scale-110 shadow-lg border border-transparent">
                <img
                  src={BRAND_ASSETS.aakriti.logo}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>

            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1 lg:space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3 py-2 rounded-md text-xs font-black tracking-widest transition-all duration-200 ${
                      location.pathname === link.path
                        ? "text-blue-600 dark:text-neon-cyan"
                        : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="relative group ml-4">
                  <button className="flex items-center px-3 py-2 text-xs font-black tracking-widest text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white focus:outline-none">
                    QUICK LINKS
                    <ChevronDown className="ml-1 w-3 h-3"/>
                  </button>
                  <div className="absolute right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <QuickLinks/>
                  </div>
                </div>

                <div className="flex items-center gap-2 ml-4 border-l border-gray-200 dark:border-white/10 pl-4">
                  {isEventsPage && (
                    <button
                      onClick={() => window.open("https://api.qrserver.com/v1/create-qr-code/?color=000000&bgcolor=FFFFFF&data=https%3A%2F%2Fq.me-qr.com%2Fk1jo32p3&qzone=1&margin=0&size=1000x1000&ecc=L")}
                      className="group relative flex items-center gap-2 px-4 py-2 bg-black border border-neon-cyan/50 text-neon-cyan rounded-full text-[10px] font-black tracking-widest hover:bg-neon-cyan hover:text-black transition-all animate-pulse"
                    >
                      <Binary className="w-4 h-4"/>
                    </button>
                  )}
                  <button
                    onClick={toggleTimer}
                    className={`p-2 rounded-xl transition-all ${
                      showTimer
                        ? "text-blue-600 dark:text-neon-cyan bg-blue-50 dark:bg-blue-900/20"
                        : "text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5"
                    }`}
                    title={showTimer ? "Hide Global Timer" : "Show Global Timer"}
                  >
                    {showTimer ? (
                      <Timer className="w-5 h-5"/>
                    ) : (
                      <TimerOff className="w-5 h-5"/>
                    )}
                  </button>
                  {!isAdminPage && (
                    <button
                      onClick={toggleTheme}
                      className="p-2 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
                    >
                      {darkMode ? (
                        <Sun className="w-5 h-5 text-yellow-400"/>
                      ) : (
                        <Moon className="w-5 h-5 text-gray-700"/>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden gap-2">
              {isEventsPage && (
                <button
                  onClick={() => window.open("https://api.qrserver.com/v1/create-qr-code/?color=000000&bgcolor=FFFFFF&data=https%3A%2F%2Fq.me-qr.com%2Fk1jo32p3&qzone=1&margin=0&size=1000x1000&ecc=L")}
                  className="p-2 text-neon-cyan bg-neon-cyan/10 rounded-xl"
                >
                  <Binary className="w-5 h-5"/>
                </button>
              )}
              <button
                onClick={toggleTimer}
                className={`p-2 rounded-xl ${
                  showTimer ? "text-blue-600" : "text-gray-400"
                }`}
              >
                <Timer className="w-5 h-5"/>
              </button>
              {!isAdminPage && (
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-xl bg-gray-100 dark:bg-white/5"
                >
                  {darkMode ? (
                    <Sun className="w-5 h-5 text-yellow-400"/>
                  ) : (
                    <Moon className="w-5 h-5 text-gray-700"/>
                  )}
                </button>
              )}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5 focus:outline-none"
              >
                {isOpen ? (
                  <X className="w-6 h-6"/>
                ) : (
                  <Menu className="w-6 h-6"/>
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white dark:bg-deep-space border-b border-gray-200 dark:border-gray-800 animate-in slide-in-from-top duration-300">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-3 rounded-xl text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
