
import React, { useState, useEffect, useMemo } from "react";
import {
  EVENT_TIMELINE,
  TRANSITION_MESSAGE,
  TRANSITION_DURATION_MS,
  FEST_END_MESSAGE,
  FEST_END_SUBTEXT
} from "../constants";
import { Loader2, Award } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMs: number;
}

const IST_OFFSET = 5.5 * 60 * 60 * 1000;

const Countdown: React.FC<{ compact?: boolean }> = ({ compact }) => {
  const [now, setNow] = useState(new Date(Date.now() + IST_OFFSET));

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Determine which phase we are in
  const timelineState = useMemo(() => {
    for (let i = 0; i < EVENT_TIMELINE.length; i++) {
      const event = EVENT_TIMELINE[i];
      const diff = +event.date - +now;

      // If event is in the future
      if (diff > 0) {
        return {
          phase: 'countdown',
          event: event,
          diff
        };
      }

      // If event just started, show transition for 15 mins
      if (diff <= 0 && Math.abs(diff) < TRANSITION_DURATION_MS) {
        return {
          phase: 'transition',
          event: event,
          diff: TRANSITION_DURATION_MS - Math.abs(diff)
        };
      }
    }

    // All events finished
    return { phase: 'finished', event: null, diff: 0 };
  }, [now]);

  const calculateTimeLeft = (difference: number): TimeLeft => {
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0, totalMs: difference };
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        totalMs: difference
      };
    }
    return timeLeft;
  };

  const timeLeft = calculateTimeLeft(timelineState.diff);

  if (timelineState.phase === 'finished') {
    return (
      <div className="flex flex-col items-center p-10 bg-black/40 rounded-[3rem] border border-white/10 backdrop-blur-2xl animate-in fade-in duration-1000 text-center max-w-lg mx-auto">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-neon-cyan/20 blur-2xl rounded-full animate-pulse"></div>
          <Award className="w-16 h-16 text-neon-cyan relative z-10" />
        </div>
        <h2 className="text-3xl font-display font-black text-white uppercase tracking-[0.2em] mb-4">
          {FEST_END_MESSAGE}
        </h2>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] leading-relaxed">
          {FEST_END_SUBTEXT}
        </p>
        <div className="mt-8 flex items-center gap-2 px-4 py-1 bg-white/5 rounded-full border border-white/5">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-ping"></span>
          <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest">System Archived - Offline</span>
        </div>
      </div>
    );
  }

  if (timelineState.phase === 'transition') {
    return (
      <div className="flex flex-col items-center p-8 bg-gradient-to-br from-neon-purple/10 to-transparent rounded-[2.5rem] border border-neon-purple/20 backdrop-blur-2xl animate-in zoom-in duration-700">
        <div className="flex items-center gap-4 mb-4">
          <Loader2 className="w-6 h-6 text-neon-purple animate-spin" />
          <h4 className="text-sm font-black tracking-widest text-white uppercase">In progress "{timelineState.event?.name}"</h4>
        </div>
        <div className="text-3xl md:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 animate-pulse uppercase text-center leading-tight">
          {TRANSITION_MESSAGE}
        </div>
        <p className="mt-4 text-[10px] font-bold text-neon-purple/60 uppercase tracking-[0.3em]">
          Next Objective in {timeLeft.minutes}m {timeLeft.seconds}s
        </p>
      </div>
    );
  }

  if (compact) {
    return (
      <div className="flex flex-col items-end gap-1">
         <span className="text-[8px] font-black text-gray-500 uppercase tracking-tighter">Target: {timelineState.event?.name}</span>
         <div className="font-mono text-xs font-bold text-neon-purple dark:text-neon-cyan bg-gray-100/80 dark:bg-black/50 px-3 py-1 rounded-full border border-neon-purple/20 dark:border-neon-cyan/30 backdrop-blur-sm transition-colors">
          T-{timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
        </div>
      </div>
    );
  }

  const TimeUnit = ({ val, label }: { val: number; label: string }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4 group">
      <div className="text-3xl md:text-6xl font-display font-black mb-1 md:mb-2 bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 group-hover:from-neon-cyan group-hover:to-blue-500 transition-all duration-500">
        {String(val).padStart(2, "0")}
      </div>
      <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-blue-600 dark:text-neon-cyan font-black transition-colors">{label}</div>
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-2 rounded-full backdrop-blur-md">
        <span className="flex h-2 w-2 rounded-full bg-neon-cyan animate-ping"></span>
        <span className="text-[12px] font-black text-white uppercase tracking-widest">
          What's Next? <span className="text-neon-cyan">{timelineState.event?.name}</span>
        </span>
       <span className="flex h-2 w-2 rounded-full bg-neon-cyan animate-ping"></span>
      </div>

      <div className="flex justify-center items-center p-6 bg-gray-100/50 dark:bg-black/20 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/10 transition-colors">
        <TimeUnit val={timeLeft.days} label="Days"/>
        <div className="text-2xl md:text-4xl text-neon-purple font-bold -mt-6">:</div>
        <TimeUnit val={timeLeft.hours} label="Hours"/>
        <div className="text-2xl md:text-4xl text-neon-purple font-bold -mt-6">:</div>
        <TimeUnit val={timeLeft.minutes} label="Mins"/>
        <div className="text-2xl md:text-4xl text-neon-purple font-bold -mt-6">:</div>
        <TimeUnit val={timeLeft.seconds} label="Secs"/>
      </div>
    </div>
  );
};

export default Countdown;
