export interface Topic {
  num: string;
  title: string;
  body: string;
  tags: string[];
}

export interface ProjectSection {
  label: string;
  body: string;
}

export interface ProjectResult {
  value: string;
  label: string;
}

export interface ProjectCredit {
  slug: string;
  name: string;
  role: string;
}

export interface Project {
  slug: string;
  image: string;
  imageUrl: string;
  domain: string;
  year: string;
  title: string;
  body: string;
  client: string;
  duration: string;
  scale: string;
  summary: string;
  sections: ProjectSection[];
  stack: string[];
  results: ProjectResult[];
  gallery: string[];
  credits: ProjectCredit[];
}

export interface Paper {
  year: string;
  title: string;
  venue: string;
}

export interface PersonProject {
  role: string;
  title: string;
  body: string;
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  blurb: string;
  affiliation: string;
  email: string;
  bio: string;
  photoUrl: string;
  scholarUrl: string;
  expertise: string[];
  papers: Paper[];
  projects: PersonProject[];
}
