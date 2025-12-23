// Public demo constants for Aakriti Fest Website
// Backend registration and admin features are only available in the private production version.
import { Event, Sponsor, TeamMember } from "./types";

import ict from "./assets/ict.webp";
import aakriti from "./assets/aakriti.webp";

import e1 from "./assets/events/bb.webp";
import e2 from "./assets/events/com.webp";
import e3 from "./assets/events/pb.webp";
import e4 from "./assets/events/ch.webp";
import e5 from "./assets/events/ef.webp";
import e6 from "./assets/events/cq.webp";
import e7 from "./assets/events/idp.webp";
import e8 from "./assets/events/isi.webp"
import e9 from "./assets/events/sd.webp";;

import g1 from "./assets/gallery/g1.webp";
import g2 from "./assets/gallery/g2.webp";
import g3 from "./assets/gallery/g3.webp";
import g4 from "./assets/gallery/g4.webp";
import g5 from "./assets/gallery/g5.webp";
import g6 from "./assets/gallery/g6.webp";
import g7 from "./assets/gallery/g7.webp";
import g8 from "./assets/gallery/g8.webp";
import g9 from "./assets/gallery/g9.webp";
import g10 from "./assets/gallery/g10.webp";
import g11 from "./assets/gallery/g11.webp";
import g12 from "./assets/gallery/g12.webp";

import s1 from "./assets/sponsors/s1.webp";
import s2 from "./assets/sponsors/s2.webp";
import s3 from "./assets/sponsors/s3.webp";
import s4 from "./assets/sponsors/s4.webp";
import s5 from "./assets/sponsors/s5.webp";
import s6 from "./assets/sponsors/s6.webp";
import s7 from "./assets/sponsors/s7.webp";
import s8 from "./assets/sponsors/s8.webp";
import s9 from "./assets/sponsors/s9.webp";
import s10 from "./assets/sponsors/s10.webp";
import s11 from "./assets/sponsors/s11.webp";
import s12 from "./assets/sponsors/s12.webp";
import s13 from "./assets/sponsors/s13.webp";
import s14 from "./assets/sponsors/s14.webp";

import tf1 from "./assets/team/tf1.webp";
import tf2 from "./assets/team/tf2.webp";
import ts1ts from "./assets/team/ts1ts.webp";
import ts2em from "./assets/team/ts2em.webp";
import ts3em from "./assets/team/ts3em.webp";
import ts4d from "./assets/team/ts4d.webp";
import ts5d from "./assets/team/ts5d.webp";
import ts6d from "./assets/team/ts6d.webp";
import ts7pr from "./assets/team/ts7pr.webp";
import ts8t from "./assets/team/ts8t.webp";

export const EVENT_TIMELINE = [
  { name: "Fest Inaugural", date: new Date('2026-01-05T17:00:00') },
  { name: "Cryptic Hunt", date: new Date('2026-01-07T14:00:00') },
  { name: "Periodic Bingo", date: new Date('2026-01-07T17:00:00') },
  { name: "Byte Bonanza", date: new Date('2026-01-11T09:30:00') },
  { name: "Clash of Minds", date: new Date('2026-01-11T11:00:00') },
  { name: "ChemQuest and Industrial Defined Problems", date: new Date('2026-01-11T12:00:00') },
];

export const TRANSITION_MESSAGE = "ENJOY THE VIBES OF AAKRITI 3.0";
export const TRANSITION_DURATION_MS = 15 * 60 * 1000;

export const FEST_END_MESSAGE = "MISSION ACCOMPLISHED";
export const FEST_END_SUBTEXT = "THE LEGACY LIVES ON. PREPARING FOR NEXT SEASON!";

export const BRAND_ASSETS = {
  ict: {
    logo: ict,
    fullName: "Institute of Chemical Technology",
    colors: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100",
  },
  aakriti: {
    logo: aakriti,
    fullName: "Aakriti 3.0",
    edition: "3.0",
    gradient: "from-blue-600 to-neon-purple",
  }
};

export const EXTERNAL_LINKS = {
  ictMumbai: "https://www.ictmumbai.edu.in/",
  ictJalna: "https://marj.ictmumbai.edu.in/",
  ictBhubaneswar: "https://iocb.ictmumbai.edu.in/",
  instagramAakriti: "https://instagram.com/aakriti_ictmarj",
  email: "mailto:ts.ta@stumarj.ictmumbai.edu.in",
};

export const EVENTS_DATA: Event[] = [
  {
    id: "e1",
    name: "Byte Bonanza",
    logo: e1,
    type: "individual",
    date: "11-01-2026",
    venue: "Computer Lab",
    showRegisterButton: true,
    showRulesBox: true,
  },
  {
    id: "e2",
    name: "Clash of Minds",
    logo: e2,
    type: "individual",
    date: "11-01-2026",
    venue: "Board Room (Senior)\nVisiting Faculty Room (Junior)",
    showRegisterButton: true,
    showRulesBox: true,
  },
  {
    id: "e3",
    name: "Periodic Bingo",
    logo: e3,
    type: "individual",
    date: "07-01-2026",
    venue: "Auditorium",
    showRegisterButton: true,
    showRulesBox: true,
  },
  {
    id: "e4",
    name: "Cryptic Hunt",
    logo: e4,
    type: "team",
    date: "07-01-2026",
    venue: "Auditorium",
    showRegisterButton: true,
    showRulesBox: true,
    minMembers: 4,
    maxMembers: 4
  },
  {
    id: "e5",
    name: "Eco Framework",
    logo: e5,
    type: "individual",
    date: "11-01-2026",
    venue: "Drawing Hall",
    showRegisterButton: true,
    showRulesBox: true,
  },
  {
    id: "e6",
    name: "ChemQuest",
    logo: e6,
    type: "individual",
    date: "11-01-2026",
    venue: "Board Room\nOnline",
    showRegisterButton: true,
    showRulesBox: true,
    downloadUrl: "./cq.pdf"
  },
  {
    id: "e7",
    name: "Industrial Defined Problems",
    logo: e7,
    type: "team",
    date: "11-01-2026",
    venue: "Board Room\nOnline",
    showRegisterButton: true,
    showRulesBox: true,
    downloadUrl: "./idp_ps/1.pdf\n./idp_ps/2.pdf",
    minMembers: 1,
    maxMembers: 4
  },
  {
    id: "e8",
    name: "Industrial Safety Inspector",
    logo: e8,
    type: "workshop",
    date: "11-01-2026",
    venue: "Drawing Hall",
    showRegisterButton: false,
    showRulesBox: true,
  },
    {
    id: "e9",
    name: "Self Defense Workshop",
    logo: e9,
    type: "workshop",
    date: "11-01-2026",
    venue: "Open Ground",
    showRegisterButton: false,
    showRulesBox: false,
  },
];

export const GALLERY_DATA = [
  { id: "g1", url: g1 },
  { id: "g2", url: g2 },
  { id: "g3", url: g3 },
  { id: "g4", url: g4 },
  { id: "g5", url: g5 },
  { id: "g6", url: g6 },
  { id: "g7", url: g7 },
  { id: "g8", url: g8 },
  { id: "g9", url: g9 },
  { id: "g10", url: g10 },
  { id: "g11", url: g11 },
  { id: "g12", url: g12 },
];

export const SPONSORS_DATA: Sponsor[] = [
  {
    id: "s1",
    name: "Ankush Sir Institute",
    logo: s1,
    website: "https://www.ankushsirinstitute.com/"
  },
  {
    id: "s2",
    name: "Kalika Steel",
    logo: s2,
    website: "https://kalikasteels.com/"
  },
  {
    id: "s3",
    name: "Vinodrai Engineers",
    logo: s3,
    website: "https://www.vinodrai.com/"
  },
  {
    id: "s4",
    name: "Matrix Life Science",
    logo: s4,
    website: "https://matrixlifescience.com/"
  },
  {
    id: "s5",
    name: "Altotech Organics",
    logo: s5,
    website: "https://maps.app.goo.gl/X3vJL5R7WQMMMuyz8"
  },
  {
    id: "s6",
    name: "Shrihari Nutrition",
    logo: s6,
    website: "https://www.linkedin.com/company/shrihari-nutrtition"
  },
  {
    id: "s7",
    name: "VITS Hotels & Resorts",
    logo: s7,
    website: "https://www.vitshotels.com/"
  },
  {
    id: "s8",
    name: "Kalish Park",
    logo: s8,
    website: "https://www.kashishpark.in/"
  },
  {
    id: "s9",
    name: "Unstop",
    logo: s9,
    website: "https://unstop.com/"
  },
  {
    id: "s10",
    name: "Polaad Steel",
    logo: s10,
    website: "https://www.polaad.in/"
  },
  {
    id: "s11",
    name: "Thakurji Solvex",
    logo: s11,
    website: "https://thakurjisolvex.com/"
  },
  {
    id: "s12",
    name: "Vikram Tea",
    logo: s12,
    website: "https://www.vikramtea.com/"
  },
  {
    id: "s13",
    name: "Aromax Creation",
    logo: s13,
    website: "https://www.aromaxcreation.com/"
  },
  {
    id: "s14",
    name: "Krunchillo",
    logo: s14,
    website: "https://krunchillo.com/"
  },
];

export const TEAM_DATA: TeamMember[] = [
  // Faculty Coordinator
  {
    id: "tf1",
    name: "Dr. Debashis Kundu",
    role: "Faculty Coordinator",
    image: tf1,
    email: "d.kundu@marj.ictmumbai.edu.in"
  },
  {
    id: "tf2",
    name: "Dr. Nagsen Meshram",
    role: "Faculty Coordinator",
    image: tf2,
    email: "np.meshram@marj.ictmumbai.edu.in"
  },
  // Core Secretariat
  {
    id: "ts1ts",
    name: "Sanket Maurya",
    role: "Technical Secretary",
    image: ts1ts
  },
  // Event Management
  {
    id: "ts2em",
    name: "Nishant Potghan",
    role: "Head, Event Management",
    image: ts2em,
    instagram: "https://www.instagram.com/nishantpotghan/"
  },
  {
    id: "ts3em",
    name: "Sinchana Patil",
    role: "Co-Head, Event Management",
    image: ts3em,
    linkedin: "https://www.linkedin.com/in/sinchana-patil-015255329/"
  },
  // Design & Content
  {
    id: "ts4d",
    name: "Prachi Vinayak",
    role: "Head, Design and Content Creation",
    image: ts4d
  },
  // Decoration
  {
    id: "ts5d",
    name: "Heet Rajput",
    role: "Head, Decoration",
    image: ts5d,
    linkedin: "https://www.linkedin.com/in/heet-rajput-65b515329/"
  },
  {
    id: "ts6d",
    name: "Shruti Dighe",
    role: "Co-Head, Decoration",
    image: ts6d
  },
  // PR
  {
    id: "ts7pr",
    name: "Mridun Gupta",
    role: "PR Coordinator",
    image: ts7pr,
    linkedin: "https://www.linkedin.com/in/mridun-gupta/",
    instagram: "https://www.instagram.com/mridun_gupta/",
    email: "mailto:gmridun@gmail.com"
  },
  // Treasure
  {
    id: "ts8t",
    name: "Shubham Gilbile",
    role: "Treasurer",
    image: ts8t
  },
];