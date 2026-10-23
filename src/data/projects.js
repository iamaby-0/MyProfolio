import financeImg from '../assets/finance-tracker.jpg';
import interviewImg from '../assets/interview-portal.jpg';
import mathImg from '../assets/math-solver.jpg';
import spaceShooterImg from '../assets/space-shooter.jpg';
import calculatorImg from '../assets/simple-calculator.jpg';
import hyperosImg from '../assets/hyperos-themes.jpg';

export const projectStats = [
  {
    id: "major-projects",
    value: "3+",
    label: "Major Projects",
    icon: "FolderGit2"
  },
  {
    id: "technologies",
    value: "5+",
    label: "Technologies",
    icon: "Layers"
  },
  {
    id: "ai-integration",
    value: "AI",
    label: "AI Integration",
    icon: "Sparkles"
  },
  {
    id: "open-source",
    value: "Open Source",
    label: "Development",
    icon: "Github"
  }
];

export const projectCategories = [
  "All",
  "Full Stack",
  "Backend",
  "AI / ML",
  "Frontend",
  "Mobile App",
  "Web App",
  "Other"
];

export const projectsData = [
  {
    id: "finance-tracker",
    slug: "ai-finance-tracker",
    title: "AI-Powered Finance Tracker",
    description:
      "Full-stack finance tracker with expense, income, budget management, analytics and AI-powered insights.",
    thumbnail: financeImg,
    featured: true,
    categories: ["Full Stack", "Backend", "AI / ML", "Web App"],
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Groq API",
      "Chart.js"
    ],
    liveUrl: "https://finance-tracker-demo.vercel.app",
    githubUrl: "https://github.com/iamaby-0",
    actionType: "live",
    actionLabel: "Live Demo →"
  },
  {
    id: "interview-portal",
    slug: "ai-interview-portal",
    title: "AI Driven Interview Portal",
    description:
      "Real-time voice-based AI interview platform for automated candidate screening.",
    thumbnail: interviewImg,
    featured: true,
    categories: ["Full Stack", "Backend", "AI / ML", "Web App"],
    technologies: [
      "React.js",
      "Gemini AI",
      "Deepgram",
      "AI"
    ],
    liveUrl: "https://interview-portal-demo.vercel.app",
    githubUrl: "https://github.com/iamaby-0",
    actionType: "live",
    actionLabel: "Live Demo →"
  },
  {
    id: "maths-doubt-solver",
    slug: "maths-doubt-solver",
    title: "Maths Doubt Solver",
    description:
      "Solve math problems using AI with step-by-step explanations.",
    thumbnail: mathImg,
    featured: true,
    categories: ["AI / ML", "Frontend", "Web App"],
    technologies: [
      "React.js",
      "AI",
      "Python",
      "Gemini API"
    ],
    liveUrl: "https://math-solver-demo.vercel.app",
    githubUrl: "https://github.com/idrag0/MathsDoubtSolver.git",
    actionType: "live",
    actionLabel: "Live Demo →"
  },
  {
    id: "space-shooter",
    slug: "space-shooter-terminal-game",
    title: "Space Shooter - Terminal Game",
    description:
      "A simple space shooter game built in C++ for terminal, featuring basic game mechanics, scoring and smooth controls.",
    thumbnail: spaceShooterImg,
    featured: false,
    categories: ["Other", "Backend"],
    technologies: [
      "C++",
      "Game Development",
      "Terminal"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/iamaby-0",
    actionType: "source",
    actionLabel: "View Source →"
  },
  {
    id: "simple-calculator",
    slug: "simple-calculator-app",
    title: "Simple Calculator App",
    description:
      "A clean and responsive calculator application built with Flutter and Dart, featuring a modern UI and essential calculations.",
    thumbnail: calculatorImg,
    featured: false,
    categories: ["Mobile App", "Frontend"],
    technologies: [
      "Flutter",
      "Dart",
      "Mobile App"
    ],
    liveUrl: "",
    githubUrl: "https://github.com/iamaby-0",
    actionType: "source",
    actionLabel: "View Source →"
  },
  {
    id: "hyperos-themes",
    slug: "hyperosthemes-blogger",
    title: "HyperOSThemes.com (Blogger)",
    description:
      "A theme-focused website for sharing and publishing HyperOS and MIUI themes, resources and tech-related content.",
    thumbnail: hyperosImg,
    featured: false,
    categories: ["Web App", "Frontend", "Other"],
    technologies: [
      "Blogger",
      "Themes",
      "HyperOS",
      "MIUI"
    ],
    liveUrl: "https://hyperosthemes.com/",
    githubUrl: "",
    actionType: "website",
    actionLabel: "Visit Website →"
  }
];
