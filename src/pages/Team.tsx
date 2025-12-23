  import React from "react";
  import { TEAM_DATA } from "../constants";
  import { Linkedin, Instagram, Mail, ShieldCheck, GraduationCap } from "lucide-react";

  const Team: React.FC = () => {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-white dark:bg-deep-space selection:bg-neon-cyan/30 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-[0.3em] text-blue-500 uppercase mb-2">
              The Architects
            </h2>
            <h1 className="text-5xl md:text-7xl font-display font-black mb-6 text-gray-900 dark:text-white uppercase tracking-tighter">
              Organizing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-neon-purple drop-shadow-[0_0_15px_rgba(188,19,254,0.3)]">
                Council
              </span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mx-auto text-lg">
              Guiding the shape of innovation at{" "}
              <span className="font-black">
                Institute of Chemical Technology Mumbai, Marathwada Campus, Jalna.
              </span>
            </p>
          </div>

          {/* Faculty Section */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10 justify-center">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gray-200 dark:to-white/10"></div>
              <h3 className="flex items-center gap-2 text-xs font-black tracking-[0.4em] uppercase text-gray-400 dark:text-gray-500">
                <GraduationCap className="w-4 h-4"/>
                Mentorship
              </h3>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gray-200 dark:to-white/10"></div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl justify-center justify-items-center">
              {TEAM_DATA.filter(m => m.id.includes('tf')).map((member) => (
                <TeamMemberCard key={member.id} member={member}/>
              ))}
            </div>
          </div>
        </div>

        {/* Student Section */}
        <div>
          <div className="flex items-center gap-4 mt-10 mb-10 justify-center">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gray-200 dark:to-white/10"></div>
            <h3 className="flex items-center gap-2 text-xs font-black tracking-[0.4em] uppercase text-gray-400 dark:text-gray-500">
              <ShieldCheck className="w-4 h-4"/>
              Student Secretariat
            </h3>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gray-200 dark:to-white/10"></div>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl">
              {TEAM_DATA.filter(m => !m.id.includes('tf')).map((member) => (
                <TeamMemberCard key={member.id} member={member}/>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

  const TeamMemberCard: React.FC<{ member: any }> = ({ member }) => {
    return (
      <div>
        {/* Member Card */}
        <div className="relative w-full aspect-square mb-6">
          {/* Image Container */}
          <div className="bg-gray-50 dark:bg-[#0a0a1a] rounded-[3rem] border border-gray-100 dark:border-white/10 overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-blue-500/10 group relative">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0"
              loading="lazy"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-12">
              <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 hover:scale-110 transition-all shadow-lg"
                  >
                    <Linkedin className="w-6 h-6"/>
                  </a>
                )}
                {member.instagram && (
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-pink-600 hover:scale-110 transition-all shadow-lg"
                  >
                    <Instagram className="w-6 h-6"/>
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-gray-800 hover:scale-110 transition-all shadow-lg"
                  >
                    <Mail className="w-6 h-6"/>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Text Info */}
        <div className="text-center flex flex-col items-center">
          <h3 className="text-2xl font-display font-black text-gray-900 dark:text-white mb-1 tracking-tighter">
            {member.name}
          </h3>
          <p className="text-blue-600 dark:text-neon-purple font-black text-[10px] tracking-[0.2em] uppercase mb-1 drop-shadow-sm">
            {member.role}
          </p>
        </div>
      </div>
    );
  };

  export default Team;