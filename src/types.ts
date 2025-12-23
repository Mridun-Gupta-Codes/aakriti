export interface Event {
  id: string;
  name: string;
  logo: string; // URL
  type: "individual" | "team" | "workshop"
  date: string;
  venue: string;
  showRegisterButton?: boolean;
  showRulesBox?: boolean;
  downloadUrl?: string;
  minMembers?: number; // Minimum members required for team
  maxMembers?: number; // Maximum members allowed for team
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string; // URL
  website: string; // Primary contact
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  instagram?: string;
  email?: string;
}

export interface NavLink {
  name: string;
  path: string;
  isExternal?: boolean;
}