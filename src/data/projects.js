import financeImg from '../assets/finance-tracker.jpg';
import interviewImg from '../assets/interview-portal.jpg';
import mathImg from '../assets/math-solver.jpg';

export const projectsData = [
  {
    id: "finance-tracker",
    title: "AI-Powered Finance Tracker",
    description:
      "A full-stack personal finance application for managing expenses, income, budgets, and analytics, with AI-powered financial insights.",
    thumbnail: financeImg,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Groq API / Qwen AI", "Chart.js"],
    liveUrl: "https://finance-tracker-demo.vercel.app",
    githubUrl: "https://github.com/iamaby-0",
    featured: true
  },
  {
    id: "interview-portal",
    title: "AI-Driven Interview Portal",
    description:
      "A real-time, voice-based AI interview platform designed to automate initial candidate screening using resume-aware questions and speech interaction.",
    thumbnail: interviewImg,
    tags: ["React.js", "Google Gemini 1.5 Flash", "Deepgram Flux", "Deepgram Aura"],
    liveUrl: "https://interview-portal-demo.vercel.app",
    githubUrl: "https://github.com/iamaby-0",
    featured: true
  },
  {
    id: "maths-doubt-solver",
    title: "Maths Doubt Solver",
    description:
      "An AI-powered application that helps users solve mathematics problems with step-by-step explanations.",
    thumbnail: mathImg,
    tags: ["React.js", "JavaScript", "Gemini API"],
    liveUrl: "https://math-solver-demo.vercel.app",
    githubUrl: "https://github.com/iamaby-0",
    featured: true
  }
];
