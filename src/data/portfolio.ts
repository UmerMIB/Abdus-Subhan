import resumeUrl from './ABDUL SUBHAN CV.pdf';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
  stars?: number;
  image?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface SkillCategory {
  category: string;
  icon: string;
  items: {
    name: string;
    level: number; // 0 to 100
    description?: string;
  }[];
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  avatarUrl?: string;
}

export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Abdul Subhan",
    role: "Frontend Developer",
    tagline: "Building clean, responsive & user-friendly web experiences.",
    bio: "Passionate frontend developer focused on creating responsive, fast, and visually appealing web applications using modern JavaScript frameworks.",
    location: "Pakistan",
    email: "subhanallauddin@gmail.com",
    linkedin: "https://www.linkedin.com/in/muhammad-subhan-allauddin-a43127283/",
    github: "https://github.com/subhan-allauddin",
    resume: resumeUrl,
    yearsExperience: "1+",
    projectsCompleted: "8+",
    clientsSatisfied: "100%",
  },

  skills: [
    {
      category: "Frontend",
      icon: "Code2",
      items: [
        { name: "HTML", level: 95, description: "Semantic markup, accessibility & web standards" },
        { name: "CSS", level: 90, description: "Flexbox, Grid, Responsive layouts & Animations" },
        { name: "JavaScript", level: 85, description: "ES6+, Async/Await, DOM manipulation & Logic" },
        { name: "React.js", level: 85, description: "Hooks, Component architecture & State management" },
        { name: "Next.js", level: 80, description: "Server components, App router & SEO optimization" },
        { name: "Tailwind CSS", level: 90, description: "Utility-first styling & Responsive design" }
      ]
    },
    {
      category: "Backend Basics",
      icon: "Database",
      items: [
        { name: "Node.js", level: 70, description: "Server runtime, NPM ecosystem & Core modules" },
        { name: "MongoDB", level: 75, description: "Document storage, CRUD operations & Mongoose" },
        { name: "Express.js", level: 65, description: "REST APIs, Routing & Middleware" }
      ]
    },
    {
      category: "Tools & Workflow",
      icon: "Wrench",
      items: [
        { name: "Git & GitHub", level: 80, description: "Version control, branching & collaboration" },
        { name: "Responsive Design", level: 90, description: "Mobile-first approach across all viewports" },
        { name: "Redux Toolkit", level: 70, description: "Global state management & Async thunks" }
      ]
    }
  ] as SkillCategory[],

  experience: [
    {
      id: "exp-1",
      role: "Frontend Developer Intern",
      company: "Computing Yard",
      location: "Karachi, Pakistan",
      period: "Jun 2024 - Sep 2024",
      description: "Worked on building responsive web applications and improving UI performance.",
      highlights: [
        "Developed responsive pages compatible across all devices",
        "Fixed frontend bugs and optimized component performance",
        "Integrated REST APIs with frontend React applications"
      ],
      skills: ["React", "Next.js", "JavaScript", "Responsive Design", "Tailwind CSS"]
    },
    {
      id: "exp-2",
      role: "React Trainee",
      company: "Utech Digital",
      location: "Pakistan",
      period: "2024",
      description: "Completed hands-on training in React development and modern frontend practices.",
      highlights: [
        "Built multiple React projects following modular design patterns",
        "Learned component-based architecture and state lifecycle management",
        "Achieved top performance recognition in the training program"
      ],
      skills: ["React", "JavaScript", "HTML", "CSS", "Git"]
    }
  ] as Experience[],

  projects: [
    {
      id: "proj-1",
      title: "Birthday Wishes App",
      description: "A dynamic web app where users can send and store birthday wishes using MongoDB and Prisma as a database.",
      tags: ["Next.js", "MongoDB", "Prisma", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://my-birth-day-ecru.vercel.app/",
      githubUrl: "https://github.com/subhan-allauddin/My-BirthDay",
      featured: true
    },
    {
      id: "proj-2",
      title: "Music Store Website",
      description: "Responsive music store interface inspired by modern e-commerce layouts with clean UI and mobile responsiveness.",
      tags: ["NextJs", "TypeScript", "Framer Motion", "Tailwind CSS", "AceternityUI"],
      liveUrl: "https://next-project-one-ten.vercel.app/",
      githubUrl: "https://github.com/subhan-allauddin/Next-Project-One"
    },
    {
      id: "proj-3",
      title: "Snake Game",
      description: "Classic snake game implemented using Vanilla JavaScript with smooth controls and score tracking.",
      tags: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: "https://snake-games-xi.vercel.app/",
      githubUrl: "https://github.com/subhan-allauddin/Snake-games"
    },
    {
      id: "proj-4",
      title: "Calculator App",
      description: "A calculator application with real-time input and result computation.",
      tags: ["JavaScript", "HTML", "CSS"],
      liveUrl: "https://calculator-tan-six-85.vercel.app/",
      githubUrl: "https://github.com/subhan-allauddin/Calculator"
    }
  ] as Project[],

  testimonials: [
    {
      quote: "Subhan is a dedicated developer who delivers clean, responsive designs and demonstrates great problem-solving skills.",
      author: "Team Lead",
      title: "Frontend Mentor",
      company: "Computing Yard"
    }
  ] as Testimonial[]
};