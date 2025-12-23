import React, { useState } from "react";
import { Mail, MapPin, Send, Instagram, Globe } from "lucide-react";
import { EXTERNAL_LINKS } from "../constants";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleTransmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    setTimeout(() => {
      alert("Demo Mode: Message captured successfully. Live backend is active on the official fest website.");
      setFormData({ name: "", email: "", message: "" });
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-white dark:bg-deep-space selection:bg-neon-cyan/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h1 className="text-5xl md:text-8xl font-display font-black mb-6 text-gray-900 dark:text-white leading-none">
                GET IN{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-neon-purple drop-shadow-[0_0_15px_rgba(188,19,254,0.3)]">
                  TOUCH
                </span>
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-lg">
                Have queries about registrations, sponsorship, or volunteering?
                Our team is ready to assist you in the shape of innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Connect Socially Box */}
              <div>
                <h4 className="text-[10px] font-black text-blue-600 dark:text-blue-500 uppercase tracking-[0.3em] mb-6">
                  Connect Socially
                </h4>
                <div className="flex gap-4">
                  <a
                    href={EXTERNAL_LINKS.instagramAakriti}
                    className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-gray-400 hover:text-neon-purple border border-white/10 transition-all"
                  >
                    <Instagram/>
                  </a>
                  <a
                    href={EXTERNAL_LINKS.email}
                    className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-gray-400 hover:text-neon-cyan border border-white/10 transition-all"
                  >
                    <Mail/>
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="p-4 bg-blue-900/20 rounded-2xl text-blue-400 border border-blue-500/20">
                  <MapPin className="w-6 h-6"/>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                    ICT Mumbai, Marathwada Jalna Campus
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-bold">
                    BT-6/7, Biotechnology Park, Additional MIDC Area, Aurangabad
                    Road, Jalna - 431203, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <form
            onSubmit={handleTransmit}
            className="bg-white/5 p-10 rounded-[3rem] border border-white/10 space-y-6"
          >
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                Full Name
              </label>
              <input
                required
                type="text"
                placeholder="JOHN DOE"
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-neon-cyan outline-none"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                Email Node
              </label>
              <input
                required
                type="email"
                placeholder="firstname.lastname@example.com"
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-neon-cyan outline-none"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                Signal Message
              </label>
              <textarea
                required
                placeholder="Enter your concern here..."
                rows={4}
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-neon-cyan outline-none resize-none"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button
              disabled={loading}
              type="submit"
              className="w-full py-5 bg-gradient-to-r from-blue-600 to-neon-purple text-white font-black tracking-widest rounded-2xl hover:scale-105 transition-all"
            >
              {loading ? "TRANSMITTING..." : "TRANSMIT SIGNAL"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;