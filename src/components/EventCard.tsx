import React from "react";
import { Event } from "../types";
import { Info } from "lucide-react";

interface EventCardProps {
  event: Event;
  onSelect: (event: Event) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onSelect }) => {
  return (
    <div className="w-full h-full bg-gray-50 dark:bg-[#0a0a1a] rounded-[3rem] p-8 border border-gray-100 dark:border-white/10 overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-blue-500/10 group flex flex-col items-center justify-center relative">

      {/* Logo */}
      <div className="flex items-center justify-center mb-8 w-full">
        <img
          src={event.logo}
          alt={event.name}
          className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 group-hover:opacity-100"
          loading="lazy"
        />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-display font-black text-center text-gray-900 dark:text-white mb-8">
        {event.name}
      </h3>

      {/* Type */}
      <div className="absolute top-5 right-6 text-[9px] font-black uppercase tracking-widest bg-black/40 text-gray-300 px-3 py-1 rounded-full border border-white/10">
        {event.type}
      </div>

      {/* CTA */}
      <button
        onClick={() => onSelect(event)}
        className="w-full flex items-center justify-center gap-3 bg-gray-200 dark:bg-white/5 text-gray-900 dark:text-white py-4 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-gray-300 dark:hover:bg-white/10 transition-all shadow-md group-hover:shadow-neon-purple/20"
      >
        <Info className="w-5 h-5"/>View Details
      </button>
    </div>
  );
};

export default EventCard;