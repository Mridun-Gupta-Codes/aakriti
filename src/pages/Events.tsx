import React, { useState, useEffect } from "react";
import { EVENTS_DATA, BRAND_ASSETS } from "../constants";
import EventCard from "../components/EventCard";
import { Event } from "../types";
import { X, Calendar, MapPin, Send, Download, PowerOff, Users as UsersIcon, Info } from "lucide-react";
import ReactMarkdown from "react-markdown";

type ModalStep = "closed" | "rules" | "register";

const COUNTRY_CODES = [{ code: "+91", label: "IN" }];

const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [modalStep, setModalStep] = useState<ModalStep>("closed");
  const [filter, setFilter] = useState<
    "All" | "Individual" | "Team" | "Workshop"
  >("All");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rulesMap, setRulesMap] = useState<Record<string, string>>({});
  const [eventStatuses, setEventStatuses] = useState<Record<string, boolean>>({});

  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    email: "",
    countryCode: "+91",
    whatsapp: "",
    teamName: "",
    members: [{ name: "", roll: "" }],
  });

  const isCurrentEventOpen = () => true;

  const filteredEvents =
    filter === "All"
      ? EVENTS_DATA
      : EVENTS_DATA.filter((e) => e.type === filter);

  const openRules = (event: Event) => {
    setSelectedEvent(event);
    setModalStep("rules");
    // Initialize members based on minimum required
    const initialCount = event.type === 'Team' ? (event.minMembers || 1) : 1;
    setFormData({
      name: "",
      roll: "",
      email: "",
      countryCode: "+91",
      whatsapp: "",
      teamName: "",
      members: Array.from({ length: initialCount }, () => ({
        name: "",
        roll: "",
      })),
    });
  };

  const closeModals = () => {
    setModalStep("closed");
    setSelectedEvent(null);
  };

  const validateRoll = (roll: string) => /^J\d{2}[A-Z]{3}6\d{2}$/i.test(roll);

  const setMemberCount = (count: number) => {
    if (!selectedEvent) return;
    const newMembers = [...formData.members];
    if (count > newMembers.length) {
      for (let i = newMembers.length; i < count; i++) {
        newMembers.push({ name: "", roll: "" });
      }
    } else {
      newMembers.splice(count);
    }
    setFormData({ ...formData, members: newMembers });
  };

  const validateForm = () => {
    if (!isCurrentEventOpen()) return "Registration for this event is currently closed.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (selectedEvent?.type === "Individual") {
      if (
        !formData.name ||
        !formData.roll ||
        !formData.email ||
        !formData.whatsapp
      )
        return "Please fill all fields.";
      if (!validateRoll(formData.roll))
        return "Invalid Roll Number format (Expected: J24IMT601).";
      if (!emailRegex.test(formData.email)) return "Invalid Email address.";
      if (formData.whatsapp.length < 10)
        return "WhatsApp number must be at least 10 digits.";
    } else {
      if (!formData.teamName || !formData.whatsapp)
        return "Please fill Team Name and Contact WhatsApp.";
      if (formData.members.some((m) => !m.name || !m.roll))
        return "All member names and roll numbers are mandatory.";
      if (formData.members.some((m) => !validateRoll(m.roll)))
        return "One or more roll numbers have an invalid format.";
    }
    return null;
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      alert(error);
      return;
    }

    alert(`Demo Mode: Registration UI works. Backend is active only on the official live website.`);
    closeModals();
  };

  useEffect(() => {
    import("../data/eventRules.json").then((data) => {
      setRulesMap(data.default || data);
    }).catch(() => console.warn("Rules not loaded"));
  }, []);

    // Determine if squad size is selectable
  const isSquadSizeVariable = selectedEvent?.type === 'Team' && selectedEvent.minMembers !== selectedEvent.maxMembers;
  const availableSizes = selectedEvent?.type === 'Team'
    ? Array.from(
        { length: (selectedEvent.maxMembers || 4) - (selectedEvent.minMembers || 1) + 1 },
        (_, i) => (selectedEvent.minMembers || 1) + i
      )
    : [];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-white dark:bg-deep-space selection:bg-neon-cyan/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] text-blue-500 uppercase mb-2">
            The Arena
          </h2>

          <h1 className="text-5xl md:text-7xl font-display font-black mb-6 text-gray-900 dark:text-white uppercase">
            Event{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-neon-purple drop-shadow-[0_0_15px_rgba(188,19,254,0.3)]">
              Lineup
            </span>
          </h1>

          <div className="flex justify-center gap-4 mt-12">
            {(["All", "Individual", "Team", "Workshop"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-8 py-2 rounded-full text-[10px] font-black tracking-widest transition-all ${
                  filter === f
                    ? "bg-gradient-to-r from-neon-purple to-neon-cyan text-white shadow-lg"
                    : "bg-white/5 text-gray-400 hover:text-black dark:hover:text-white"
                }`}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} onSelect={openRules}/>
          ))}
        </div>

        {/* Modal System */}
        {modalStep !== "closed" && selectedEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              onClick={closeModals}
            ></div>

            <div className="relative w-full max-w-3xl bg-[#0a0a1a] border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in duration-300">
              <button
                onClick={closeModals}
                className="absolute top-6 right-6 p-2 bg-white/5 rounded-full text-white hover:bg-white/10 z-20"
              >
                <X className="w-6 h-6"/>
              </button>

              <div className="p-8 md:p-12 max-h-[90vh] overflow-y-auto">
                {modalStep === "rules" && (
                  <>
                    <div className="space-y-10">
                      <div className="flex items-center justify-between pb-6 border-b border-white/5">
                        <img
                          src={BRAND_ASSETS.aakriti.logo}
                          className="w-16 h-16 object-contain"
                          alt="Aakriti"
                        />
                        <div className="text-center">
                          <h2 className="text-3xl font-display font-black text-white uppercase tracking-wider">
                            {selectedEvent.name}
                          </h2>
                          {selectedEvent.showRegisterButton !== false && (
                            <span className="text-[10px] font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-neon-purple tracking-[0.3em] uppercase">
                              Guidelines
                            </span>
                          )}
                        </div>
                        <img
                          src={BRAND_ASSETS.ict.logo}
                          className="w-16 h-16 rounded-2xl border border-white/10"
                          alt="ICT"
                        />
                      </div>

                      {selectedEvent.showRulesBox !== false && (
                        <div className="space-y-8">
                          <div className="bg-white/5 p-8 rounded-3xl border border-white/5 shadow-inner max-h-64 overflow-y-auto">
                            <div className="text-gray-300 leading-relaxed text-lg font-sans font-medium space-y-3">
                              <ReactMarkdown
                                components={{
                                  h1: ({ node, ...props }) => (
                                    <h3
                                      className="text-xl font-black text-white mt-0 mb-2"
                                      {...props}
                                    />
                                  ),
                                  h2: ({ node, ...props }) => (
                                    <h4
                                      className="text-lg font-bold text-white mt-0 mb-2"
                                      {...props}
                                    />
                                  ),
                                  h3: ({ node, ...props }) => (
                                    <h5
                                      className="text-base font-bold text-white mt-0 mb-2"
                                      {...props}
                                    />
                                  ),
                                  p: ({ node, ...props }) => (
                                    <p
                                      className="inline text-gray-300 leading-relaxed"
                                      {...props}
                                    />
                                  ),
                                  ul: ({ node, ...props }) => (
                                    <ul
                                      className="space-y-1 pl-4 list-disc marker:text-neon-purple"
                                      {...props}
                                    />
                                  ),
                                  li: ({ node, ...props }) => (
                                    <li
                                      className="leading-relaxed align-top"
                                      {...props}
                                    />
                                  ),
                                  strong: ({ node, ...props }) => (
                                    <strong
                                      className="text-white font-bold"
                                      {...props}
                                    />
                                  ),
                                }}
                              >
                                {rulesMap[selectedEvent.id] ||
                                  "Rules will be updated soon."}
                              </ReactMarkdown>
                            </div>
                          </div>
                        </div>
                      )}

                      {selectedEvent.downloadUrl && (
                        <>
                          {selectedEvent.id === "e6" && (
                            <a
                              href={selectedEvent.downloadUrl.trim()}
                              download
                              onClick={(e) => e.stopPropagation()}
                              className="w-full flex items-center justify-center gap-3 bg-gray-200 dark:bg-white/5 text-gray-900 dark:text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-gray-300 dark:hover:bg-white/10 transition-all"
                            >
                              <Download className="w-5 h-5"/>
                              Presentation Topic
                            </a>
                          )}

                          {selectedEvent.id === "e7" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {selectedEvent.downloadUrl
                              .split("\n")
                              .map((url, index) => (
                                <a
                                  key={index}
                                  href={url.trim()}
                                  download
                                  onClick={(e) => e.stopPropagation()}
                                  className="flex items-center justify-center gap-3 bg-gray-200 dark:bg-white/5 text-gray-900 dark:text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-gray-300 dark:hover:bg-white/10 transition-all"
                                >
                                  <Download className="w-5 h-5"/>
                                  Problem Statement #{index + 1}
                                </a>
                              ))}
                            </div>
                          )}
                        </>
                      )}

                      {selectedEvent.showRegisterButton !== false && (
                      <div>
                        {isCurrentEventOpen() ? (
                          <button onClick={() => setModalStep("register")} className="w-full py-5 bg-gradient-to-r from-blue-600 to-neon-purple text-white font-black uppercase tracking-[0.3em] rounded-2xl hover:scale-[1.01] transition-all">Proceed to Registration</button>
                        ) : (
                          <div className="w-full py-5 mb-2 bg-white/5 border border-white/10 text-gray-500 font-black uppercase tracking-[0.3em] rounded-2xl flex items-center justify-center gap-3 cursor-not-allowed">
                            <PowerOff className="w-5 h-5" /> Node Offline
                          </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                          <Calendar className="w-8 h-8 text-neon-purple flex-shrink-0"/>
                          <div>
                            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
                              Date
                            </p>
                            <p className="text-white font-bold whitespace-pre-line">
                              {selectedEvent.date}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                          <MapPin className="w-8 h-8 text-neon-cyan flex-shrink-0"/>
                          <div>
                            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
                              Venue
                            </p>
                            <p className="text-white font-bold whitespace-pre-line">
                              {selectedEvent.venue}
                            </p>
                          </div>
                        </div>
                      </div>
                        </div>
                      )}
                    </div>
                  </>
                )}

                {modalStep === "register" && (
                  <form onSubmit={handleRegister} className="space-y-8">
                    <div className="text-center">
                      <h2 className="text-3xl font-display font-black text-white uppercase tracking-widest">{selectedEvent.name}</h2>
                      <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-neon-purple text-[10px] font-black tracking-widest uppercase mt-2">Registration Portal</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                      {selectedEvent.type === "Team" ? (
                        <div className="md:col-span-2 space-y-4">
                          <div className="flex items-center justify-between">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">
                              {isSquadSizeVariable ? "Select Squad Size" : "Fixed Squad Size"}
                            </label>
                            {isSquadSizeVariable ? (
                              <div className="flex gap-2">
                                {availableSizes.map((n) => (
                                  <button
                                    key={n}
                                    type="button"
                                    onClick={() => setMemberCount(n)}
                                    className={`w-10 h-10 rounded-xl font-black text-xs transition-all border ${
                                      formData.members.length === n ? 'bg-neon-cyan text-black border-neon-cyan' : 'bg-white/5 text-gray-400 border-white/10'
                                    }`}
                                  >
                                    {n}
                                  </button>
                                ))}
                              </div>
                            ) : (
                              <span className="bg-neon-purple/20 text-neon-purple px-4 py-2 rounded-xl text-xs font-black border border-neon-purple/30">
                                {selectedEvent.maxMembers} MEMBERS REQUIRED
                              </span>
                            )}
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Squad Name</label>
                            <input required type="text" placeholder="INNOVATION SQUAD" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-neon-cyan outline-none uppercase" value={formData.teamName} onChange={(e) => setFormData({ ...formData, teamName: e.target.value.toUpperCase() })} />
                          </div>
                        </div>
                      ) : (
<>
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Full Name</label>
                            <input required type="text" placeholder="JOHN DOE" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-neon-cyan outline-none uppercase" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value.toUpperCase() })} />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Roll Number</label>
                            <input required type="text" placeholder="J25IMT601" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-neon-cyan outline-none uppercase" value={formData.roll} onChange={(e) => setFormData({ ...formData, roll: e.target.value.toUpperCase() })} />
                          </div>
                        </>
                      )}

                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Email Node</label>
                        <input
                          required
                          type="email"
                          placeholder="imt25ab.name@stumarj.ictmumbai.edu.in"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-neon-cyan outline-none"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">WhatsApp Contact</label>
                        <div className="flex gap-2">
                          <select className="bg-white/5 border border-white/10 rounded-2xl px-3 py-4 text-white text-xs outline-none" value={formData.countryCode} onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}>
                            {COUNTRY_CODES.map((c) => (
                              <option key={c.code} value={c.code} className="bg-[#0a0a1a]">{c.label} {c.code}</option>
                            ))}
                          </select>
                          <input required type="tel" placeholder="1234567890" className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-neon-cyan outline-none" value={formData.whatsapp} onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })} />
                        </div>
                      </div>
                    </div>

                    {selectedEvent.type === "Team" && (
                      <div className="space-y-6 pt-6 border-t border-white/5 text-left">
                        <label className="text-[10px] font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-neon-purple uppercase tracking-widest">Squad Members ({formData.members.length} Entry Slots)</label>
                        <div className="space-y-4">
                          {formData.members.map((member, idx) => (
                            <div key={idx} className="relative bg-white/5 border border-white/10 p-4 rounded-2xl space-y-4">
                              <span className="text-[10px] font-bold text-gray-500">MEMBER {idx + 1} {idx === 0 ? "(LEAD)" : ""}</span>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input required type="text" placeholder="FULL NAME" className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-xs text-white outline-none uppercase" value={member.name} onChange={(e) => {
                                  const newMembers = [...formData.members];
                                  newMembers[idx].name = e.target.value.toUpperCase();
                                  setFormData({ ...formData, members: newMembers });
                                }} />
                                <input required type="text" placeholder="ROLL (J24IMT601)" className="bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-xs text-white outline-none uppercase" value={member.roll} onChange={(e) => {
                                  const newMembers = [...formData.members];
                                  newMembers[idx].roll = e.target.value.toUpperCase();
                                  setFormData({ ...formData, members: newMembers });
                                }} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <button disabled={isSubmitting || !isCurrentEventOpen()} type="submit" className="w-full py-6 bg-gradient-to-r from-blue-600 to-neon-purple text-white font-black uppercase tracking-[0.3em] rounded-2xl flex items-center justify-center gap-3 transition-all hover:scale-[1.01] disabled:opacity-50 shadow-xl">
                      {isSubmitting ? "INITIATING UPLOAD..." : !isCurrentEventOpen() ? "PORTAL CLOSED" : "SUBMIT (DEMO)"}
                      {(!isSubmitting && isCurrentEventOpen()) && <Send className="w-5 h-5" />}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;