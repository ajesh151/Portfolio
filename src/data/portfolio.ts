import kuinfobot from "@/assets/kuinfobot.png";
import projectImage2 from "@/assets/project-2.jpg";
import projectImage3 from "@/assets/project-3.jpg";
import projectImage4 from "@/assets/project-4.jpg";

export type SkillGroup = { category: string; items: string[] };

export type Project = {
  slug: string;
  name: string;
  summary: string;
  image: string;
  imageAlt: string;
  tech: string[];
  github?: string;
  demo?: string;
  overview: string;
  problem: string;
  solution: string;
  role: string;
  features: string[];
  challenges: string;
  learned: string;
};

export type ExperienceEntry = {
  role: string;
  organization: string;
  period: string;
  description: string;
};

export type EducationEntry = {
  institution: string;
  degree: string;
  period: string;
  location: string;
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
};

export const profile = {
  name: "Ajesh Pokhrel",
  firstName: "Ajesh",
  lastName: "Pokhrel",
  label: "Computer Engineering Student",
  headline: "Questioning limits to make the possible practical.",
  intro:
    "I'm a Computer Engineering student at Kathmandu University, working across software development, AI/ML, and systems.",
  aboutParagraphs: [
    "I’m a Computer Engineering student who enjoys building things, solving problems, and figuring out how technology works beneath the surface. I’m interested in software development, AI and system design. I like experimenting with ideas, turning them into projects, and learning through the process rather than simply following predefined paths.",
    "Outside of technology, I’m someone who values freedom, independence, and being true to myself. I care deeply about the people and things that matter to me, and the experiences I’ve had have shaped the way I see life and people. I’m still figuring out what I want my future to look like, but I know I want to keep growing, keep trying new things, and build a life that feels genuinely mine.",
  ],
  quote: "“Perhaps the closest humanity ever gets to the divine is when \rit creates.”",
  email: "ajesh4325@student.ku.edu.np",
  phone: "+977 9804359920", // optional — leave empty to hide
  location: "Nepal",
  university: "Kathmandu University",
  degree: "Bachelor's in Computer Engineering",
  campusLocation: "Dhulikhel, Nepal",
  status: "Student",
  github: "https://github.com/ajesh151",
  githubLabel: "github.com/ajesh151",
  linkedin: "https://linkedin.com/in/ajesh-pokhrel-63b54128a",
  linkedinLabel: "linkedin.com/in/ajeshpokhrel",
  resumePath: "/resume.pdf",
  seoTitle: "Ajesh Pokhrel",
  seoDescription:
    "Portfolio of Ajesh Pokhrel, a Computer Engineering student at Kathmandu University interested in software engineering, AI, and technology.",
};

export const skillGroups: SkillGroup[] = [
  { category: "Programming", items: ["C", "C++", "Python", "JavaScript", "TypeScript"] },
  { category: "Web", items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"] },
  { category: "Backend / Database", items: ["Node.js", "PostgreSQL", "REST APIs"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Docker", "Linux"] },
  { category: "AI / ML", items: ["Python", "Machine Learning", "AI APIs", "Data Processing"] },
];

const placeholderDetail = {
  overview: "[One or two sentences describing what this project is and who it is for.]",
  problem: "[The problem this project addresses.]",
  solution: "[How the project solves that problem.]",
  role: "[What you personally designed, built and owned.]",
  challenges: "[The hardest technical problem you ran into and how you approached it.]",
  learned: "[What this project taught you.]",
};

export const projects: Project[] = [
  {
    slug: "project-one",
    name: "KU Infobot",
    summary: "A rule based chatbot that answers questions related to Kathmandu University.",
    image: kuinfobot,
    imageAlt: "Interface preview for the first project",
    tech: ["C", "C++", "Qt"],
    github: "https://github.com/ajesh151/KU-INFOBOT",
    demo: "",
    features: ["Understands typos and synonyms", "Web Crawling", "KU info centralized"],
    overview: "",
  problem: "The information frequently needed by the students about KU scattered across different websites.",
  solution: "A chatbot that answers related questions based on user's query.",
  role: "System Designer and Architect",
  challenges: "Scattered Communication in team, Limited understanding of the framework",
  learned: "Team Work, Object Oriented Programming, Git"

    },
  
  {
    slug: "project-two",
    name: "[Project Name]",
    summary: "[Short description explaining what the project does and the problem it solves.]",
    image: projectImage2,
    imageAlt: "Interface preview for the second project",
    tech: ["Python", "Machine Learning", "FastAPI"],
    github: "https://github.com/[handle]/[repo]",
    demo: "",
    features: ["[Key feature one]", "[Key feature two]", "[Key feature three]"],
    ...placeholderDetail,
  },
  {
    slug: "project-three",
    name: "[Project Name]",
    summary: "[Short description explaining what the project does and the problem it solves.]",
    image: projectImage3,
    imageAlt: "Interface preview for the third project",
    tech: ["Node.js", "Docker", "PostgreSQL"],
    github: "https://github.com/[handle]/[repo]",
    demo: "",
    features: ["[Key feature one]", "[Key feature two]", "[Key feature three]"],
    ...placeholderDetail,
  },
  {
    slug: "project-four",
    name: "[Project Name]",
    summary: "[Short description explaining what the project does and the problem it solves.]",
    image: projectImage4,
    imageAlt: "Placeholder command line interface preview for the fourth project",
    tech: ["C", "Linux", "Systems"],
    github: "https://github.com/[handle]/[repo]",
    demo: "",
    features: ["[Key feature one]", "[Key feature two]", "[Key feature three]"],
    ...placeholderDetail,
  },
];

/** Remove or replace these entries. An empty array shows a neutral empty state. */
export const experience: ExperienceEntry[] = [
  {
    role: "[Role]",
    organization: "[Organization]",
    period: "[Date] — [Date]",
    description: "[What you worked on, built, learned or contributed.]",
  },
  {
    role: "[Role]",
    organization: "[Organization]",
    period: "[Date] — [Date]",
    description: "[What you worked on, built, learned or contributed.]",
  },
];

export const education: EducationEntry = {
  
  institution: "Kathmandu University",
  degree: "Bachelor of Engineering in Computer Engineering",
  period: "2025 — Present",
  location: "Dhulikhel, Nepal",
};

export const certifications: Certification[] = [
  {
    title: "QBronze195",
    issuer: "QWorld",
    date: "2026",
    credentialUrl: "https://drive.google.com/file/d/14ln0ECUSAniINd5ViTSGKg2gTJc0q82o/view?usp=drive_link"
},
{
    title: "NASA International Space Apps Challenge",
    issuer: "NASA",
    date: "2023",
    credentialUrl: "https://drive.google.com/file/d/10meUZRg7h2x6TnZOLtdTqrbtGiN8xLLF/view?usp=drive_link"
}];

export type Hobby = { name: string; description: string };

export const hobbies: Hobby[] = [
  {
    name: "One Piece",
    description: "A reminder to stay curious, chase freedom, and never lose sight of the journey.",
  },
  {
    name: "Chess",
    description: "Something about thinking a few moves ahead and still getting surprised.",
  },

  {
    name: "Music",
    description: "Always got something playing in the background.",
  },
  {
    name: "Football",
    description: "For the love of the game, the competition, and the occasional heartbreak",
  },

  {
    name: "Travel",
    description: "A way of remembering that the world is bigger than the place I started.",
  },
];

export const navLinks = [
 // { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
 // { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#work" },
 // { label: "Experience", href: "#experience" },
 // { label: "Education", href: "#education" },
 // {label: "Achievements", href:"#certifications"},
  { label: "Contact", href: "#contact" },
];
