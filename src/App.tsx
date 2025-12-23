import React, { useState, useEffect, Suspense, lazy } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Countdown from "./components/Countdown";
import { ArrowUp } from "lucide-react";
import { BRAND_ASSETS } from "./constants";

{/* Lazy Load Pages */}
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Events = lazy(() => import("./pages/Events"));
const Sponsors = lazy(() => import("./pages/Sponsors"));
const Team = lazy(() => import("./pages/Team"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));

{/* Dynamic Page Title Component*/}
const PageTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const routeTitles: { [key: string]: string } = {
      "/": "The Shape of Innovation",
      "/about": "Our Story",
      "/events": "Events Lineup",
      "/sponsors": "Our Partners",
      "/team": "The Architects",
      "/gallery": "Aura Legacy",
      "/contact": "Connect with Us",
      "/admin": "Demo Mode",
    };

    const baseTitle = "Aakriti 3.0";
    const subTitle = routeTitles[location.pathname];
    document.title = `${baseTitle} | ${subTitle}`;
  }, [location]);

  return null;
};

{/* Cinematic Loader */}
const Loader = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-deep-space transition-colors">
    <div className="flex flex-col items-center text-center">
      {/* Logo Spinner */}
      <div className="relative flex items-center justify-center">
        <div className="w-24 h-24 rounded-full border-2 border-blue-600/20 dark:border-neon-cyan/20 border-t-blue-600 dark:border-t-neon-cyan animate-spin"/>
        <img src={BRAND_ASSETS.aakriti.logo} className="absolute text-[10px] font-display font-black tracking-[0.3em] text-blue-600 dark:text-neon-cyan animate-pulse"/>
      </div>

      {/* Brand name */}
      <h1 className="mt-6 font-display font-black text-xl tracking-[0.4em] text-gray-900 dark:text-white">Aakriti 3.0</h1>

      {/* Status message */}
      <p className="mt-3 text-sm tracking-wide text-gray-600 dark:text-gray-400 animate-pulse">
        Innovating
        <span className="animate-blink inline-block mx-0.5">.</span>
        <span className="animate-blink animation-delay-200 inline-block mx-0.5">.</span>
        <span className="animate-blink animation-delay-400 inline-block mx-0.5">.</span>
      </p>
    </div>
  </div>
);

{/* Scroll Progress Bar Component */}
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (location.pathname === "/") return null;

  return (
    <div className="fixed top-0 left-0 w-full h-[4px] z-[100] bg-transparent">
      <div className="h-full bg-gradient-to-r from-blue-600 via-neon-purple to-neon-cyan shadow-[0_0_10px_rgba(188,19,254,0.5)] transition-all duration-150 ease-out" style={{ width: `${scrollProgress}%` }}/>
    </div>
  );
};

{/* Floating Status Widget */}
const StickyWidget = ({ showTimer }: { showTimer: boolean }) => {
  const location = useLocation();

  if (location.pathname === "/" || !showTimer) return null;

  return (
    <div className={`fixed bottom-24 right-6 z-40 transition-all duration-500 transform animate-in slide-in-from-bottom-10`}>
      <div className="relative group">
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-neon-purple rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        <Countdown compact/>
      </div>
    </div>
  );
};

{/* Scroll To Top */}
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.pageYOffset > 500);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={`fixed bottom-6 left-6 z-40 p-4 rounded-xl glass-panel text-gray-900 dark:text-white transition-all duration-300 shadow-xl ${visible ? "opacity-100 scale-100" :"opacity-0 scale-50 pointer-events-none"}`}>
      <ArrowUp className="w-5 h-5 text-blue-600 dark:text-neon-cyan"/>
    </button>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [showTimer, setShowTimer] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === null ? true : saved === "dark";
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  if (loading) return <Loader/>;

  return (
    <div className="antialiased min-h-screen flex flex-col bg-white dark:bg-deep-space transition-colors">
      <Router>
        <PageTitleUpdater/>
        <ScrollProgress/>
        <Navbar darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} showTimer={showTimer} toggleTimer={() => setShowTimer(!showTimer)}/>

        <main className="flex-grow">
          <Suspense fallback={<Loader/>}>
            <Routes>
              <Route path="/" element={<Home showTimer={showTimer} toggleTimer={() => setShowTimer(!showTimer)}/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/events" element={<Events/>}/>
              <Route path="/sponsors" element={<Sponsors/>}/>
              <Route path="/team" element={<Team/>}/>
              <Route path="/gallery" element={<Gallery/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/register" element={<Navigate to="/events"/>}/>
              <Route path="*" element={<Navigate to="/" replace/>}/>
            </Routes>
          </Suspense>
        </main>

        <StickyWidget showTimer={showTimer}/>
        <ScrollToTop/>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;