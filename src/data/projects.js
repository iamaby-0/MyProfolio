import financeImg from '../assets/finance-tracker.jpg';
import interviewImg from '../assets/interview-portal.jpg';
import mathImg from '../assets/math-solver.jpg';

export const projectsData = [
  {
    id: "finance-tracker",
    title: "AI-Powered Finance Tracker",
    description:
      "Full-stack finance tracker with expense, income, budget management, analytics and AI-powered insights.",
    thumbnail: financeImg,
    tags: ["React.js", "Node.js", "MongoDB", "Groq API", "Chart.js"],
    liveUrl: "https://finance-tracker-demo.vercel.app",
    githubUrl: "https://github.com/iamaby-0",
    featured: true
  },
  {
    id: "interview-portal",
    title: "AI Driven Interview Portal",
    description:
      "Real-time voice-based AI interview platform for automated candidate screening.",
    thumbnail: interviewImg,
    tags: ["React.js", "Gemini AI", "Deepgram", "AI"],
    liveUrl: "https://interview-portal-demo.vercel.app",
    githubUrl: "https://github.com/iamaby-0",
    featured: true
  },
  {
    id: "maths-doubt-solver",
    title: "Maths Doubt Solver",
    description:
      "Solve math problems using AI with step-by-step explanations.",
    thumbnail: mathImg,
    tags: ["React.js", "AI", "Python", "Gemini API"],
    liveUrl: "https://math-solver-demo.vercel.app",
    githubUrl: "https://github.com/iamaby-0",
    featured: true
  }
];
