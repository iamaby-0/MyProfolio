export const skillsData = {
  featured: [
    { name: "Java", category: "Languages", icon: "Coffee", color: "#E76F00" },
    { name: "JavaScript", category: "Languages", icon: "Code2", color: "#F7DF1E" },
    { name: "TypeScript", category: "Languages", icon: "Code", color: "#3178C6" },
    { name: "Python", category: "Languages", icon: "Code", color: "#3776AB" },
    { name: "C++", category: "Languages", icon: "FileCode", color: "#00599C" },
    { name: "Kotlin", category: "Languages", icon: "Code", color: "#7F52FF" },
    { name: "SQL", category: "Languages", icon: "Database", color: "#336791" },
    { name: "React.js", category: "Frontend", icon: "Atom", color: "#61DAFB" },
    { name: "Node.js", category: "Backend", icon: "Server", color: "#339933" },
    { name: "Express.js", category: "Backend", icon: "Workflow", color: "#A5B4B8" },
    { name: "MongoDB", category: "Databases", icon: "Database", color: "#47A248" },
    { name: "MySQL", category: "Databases", icon: "Database", color: "#4479A1" },
    { name: "PostgreSQL", category: "Databases", icon: "Database", color: "#336791" },
    { name: "Redis", category: "Databases", icon: "Database", color: "#DC382D" },
    { name: "Git", category: "Tools", icon: "GitBranch", color: "#F05032" },
    { name: "GitHub", category: "Tools", icon: "Github", color: "#F1F5F4" },
    { name: "Docker", category: "Tools", icon: "Container", color: "#2496ED" },
    { name: "VS Code", category: "Tools", icon: "Laptop", color: "#007ACC" },
    { name: "Android Studio", category: "Tools", icon: "Smartphone", color: "#3DDC84" }
  ],
  categories: [
    {
      name: "Programming Languages",
      items: ["Java", "JavaScript", "TypeScript", "Python", "C++", "Kotlin", "SQL"]
    },
    {
      name: "Backend & Frameworks",
      items: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "Socket.IO",
        "Microservices",
        "Google Gemini",
        "Groq",
        "Deepgram",
        "LiveKit"
      ]
    },
    {
      name: "Databases & Caching",
      items: ["MongoDB", "MySQL", "PostgreSQL", "Redis"]
    },
    {
      name: "Frontend Development",
      items: ["React.js", "HTML5", "CSS3"]
    },
    {
      name: "DevOps & Development Tools",
      items: ["Git", "GitHub", "Docker", "VS Code", "Android Studio"]
    },
    {
      name: "Core Computer Science",
      items: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Operating Systems",
        "Computer Networks"
      ]
    }
  ]
};

export const skillsHeroStats = [
  {
    id: "technologies",
    value: "15+",
    label: "Technologies",
    description: "Technologies across my development stack",
    icon: "Code"
  },
  {
    id: "fullstack",
    value: "Full Stack",
    label: "Development",
    description: "Frontend and backend development",
    icon: "Cpu"
  },
  {
    id: "core-cs",
    value: "Core CS",
    label: "Fundamental Subjects",
    description: "Fundamental computer science subjects",
    icon: "BookOpen"
  },
  {
    id: "continuous",
    value: "Continuous",
    label: "Learning & Growing",
    description: "Learning and growing",
    icon: "TrendingUp"
  }
];

export const skillCategories = [
  {
    id: "languages",
    title: "Programming Languages",
    count: "7 Skills",
    description: "Languages I use to build applications and solve problems.",
    icon: "Code",
    gridColumns: 4,
    skills: [
      { name: "Java", icon: "Java", color: "#E76F00" },
      { name: "JavaScript", icon: "JavaScript", color: "#F7DF1E" },
      { name: "TypeScript", icon: "TypeScript", color: "#3178C6" },
      { name: "Python", icon: "Python", color: "#3776AB" },
      { name: "C++", icon: "C++", color: "#00599C" },
      { name: "Kotlin", icon: "Kotlin", color: "#7F52FF" },
      { name: "SQL", icon: "SQL", color: "#336791" }
    ]
  },
  {
    id: "backend",
    title: "Backend & Frameworks",
    count: "6+ Skills",
    description: "Building scalable server-side applications and APIs.",
    icon: "Server",
    gridColumns: 3,
    skills: [
      { name: "Node.js", icon: "Node.js", color: "#339933" },
      { name: "Express.js", icon: "Express.js", color: "#A5B4B8" },
      { name: "RESTful APIs", icon: "RESTful APIs", color: "#35E9A0" },
      { name: "Socket.IO", icon: "Socket.IO", color: "#010101" },
      { name: "Microservices", icon: "Microservices", color: "#35E9A0" },
      {
        name: "Google Gemini",
        icon: "Google Gemini",
        color: "#4E75F8",
        badge: "AI Service"
      },
      {
        name: "Groq",
        icon: "Groq",
        color: "#F55036",
        badge: "Fast AI"
      },
      {
        name: "Deepgram",
        icon: "Deepgram",
        color: "#13EF93",
        badge: "Speech AI"
      },
      {
        name: "LiveKit",
        icon: "LiveKit",
        color: "#00D1FF",
        badge: "Real-time"
      }
    ]
  },
  {
    id: "databases",
    title: "Databases & Caching",
    count: "4 Skills",
    description: "Working with relational, NoSQL databases and caching.",
    icon: "Database",
    gridColumns: 3,
    skills: [
      { name: "MongoDB", icon: "MongoDB", color: "#47A248" },
      { name: "MySQL", icon: "MySQL", color: "#4479A1" },
      { name: "PostgreSQL", icon: "PostgreSQL", color: "#336791" },
      { name: "Redis", icon: "Redis", color: "#DC382D" }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Development",
    count: "3 Skills",
    description: "Building modern and responsive user interfaces.",
    icon: "Monitor",
    gridColumns: 3,
    skills: [
      { name: "React.js", icon: "React.js", color: "#61DAFB" },
      { name: "HTML5", icon: "HTML5", color: "#E34F26" },
      { name: "CSS3", icon: "CSS3", color: "#1572B6" }
    ]
  },
  {
    id: "tools",
    title: "DevOps & Development Tools",
    count: "5 Skills",
    description: "Tools I use in daily development workflow.",
    icon: "Wrench",
    gridColumns: 3,
    skills: [
      { name: "Git", icon: "Git", color: "#F05032" },
      { name: "GitHub", icon: "GitHub", color: "#F1F5F4" },
      { name: "Docker", icon: "Docker", color: "#2496ED" },
      { name: "VS Code", icon: "VS Code", color: "#007ACC" },
      { name: "Android Studio", icon: "Android Studio", color: "#3DDC84" }
    ]
  },
  {
    id: "core-cs",
    title: "Core Computer Science",
    count: "5 Topics",
    description: "Fundamental subjects I have studied and work with.",
    icon: "BookOpen",
    gridColumns: 3,
    skills: [
      { name: "Data Structures & Algorithms", icon: "DSA", color: "#35E9A0" },
      { name: "Object-Oriented Programming", icon: "OOP", color: "#35E9A0" },
      { name: "Database Management Systems", icon: "DBMS", color: "#35E9A0" },
      { name: "Operating Systems", icon: "OS", color: "#35E9A0" },
      { name: "Computer Networks", icon: "Networks", color: "#35E9A0" }
    ]
  }
];
