import React from 'react';

export const TechIcons = {
  // --- Programming Languages ---
  Java: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M8.5 17.5c2.5 1 5.5 1 8 0M7 20c3.5 1 7.5 1 11 0"
        stroke="#E76F00"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M10 13c-.5-2 1-3.5 2-4.5.5 2 2 2.5 2 4.5"
        stroke="#E76F00"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M13.5 7.5c-.5-1.5.5-2.5 1-3 .5 1.5 1.5 2 1.5 3"
        stroke="#5382A1"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  ),

  JavaScript: () => (
    <svg width="28" height="28" viewBox="0 0 24 24">
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <text
        x="12"
        y="17"
        fontFamily="sans-serif"
        fontWeight="bold"
        fontSize="11"
        fill="#000000"
        textAnchor="middle"
      >
        JS
      </text>
    </svg>
  ),

  TypeScript: () => (
    <svg width="28" height="28" viewBox="0 0 24 24">
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <text
        x="12"
        y="17"
        fontFamily="sans-serif"
        fontWeight="bold"
        fontSize="11"
        fill="#FFFFFF"
        textAnchor="middle"
      >
        TS
      </text>
    </svg>
  ),

  Python: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M11.9 2c-3.1 0-2.9 1.3-2.9 1.3l.03 1.4h3v.4H6.2S4 4.8 4 8c0 3.1 1.9 3 1.9 3h1.1V9.5c0-1.7 1.4-1.6 1.4-1.6h4.9s1.4.02 1.4-1.4V3.4S15 2 11.9 2zM9.8 3.5a.6.6 0 1 1 0 1.2.6.6 0 0 1 0-1.2z"
        fill="#3776AB"
      />
      <path
        d="M12.1 22c3.1 0 2.9-1.3 2.9-1.3l-.03-1.4h-3v-.4h5.8s2.2.3 2.2-2.9c0-3.1-1.9-3-1.9-3h-1.1v1.5c0 1.7-1.4 1.6-1.4 1.6H10.7s-1.4-.02-1.4 1.4v3.1s-.3 1.5 2.8 1.5zm2.1-1.5a.6.6 0 1 1 0-1.2.6.6 0 0 1 0 1.2z"
        fill="#FFD43B"
      />
    </svg>
  ),

  'C++': () => (
    <svg width="28" height="28" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10.5" fill="#00599C" />
      <path
        d="M11 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 3.8-2.1l-1.5-.9a2.7 2.7 0 1 1 0-3l1.5-.9A4.5 4.5 0 0 0 11 7.5z"
        fill="#FFFFFF"
      />
      <path
        d="M15 11h1v-1h1v1h1v1h-1v1h-1v-1h-1v-1zm4 0h1v-1h1v1h1v1h-1v1h-1v-1h-1v-1z"
        fill="#FFFFFF"
      />
    </svg>
  ),

  Kotlin: () => (
    <svg width="28" height="28" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="kg" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C711E1" />
          <stop offset="50%" stopColor="#7F52FF" />
          <stop offset="100%" stopColor="#E4485D" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="4" fill="url(#kg)" />
      <polygon points="4,4 12,4 4,12" fill="#FFFFFF" fillOpacity="0.9" />
      <polygon points="12,4 20,4 4,20 4,12" fill="#FFFFFF" fillOpacity="0.4" />
      <polygon points="4,20 12,12 20,20 4,20" fill="#FFFFFF" fillOpacity="0.8" />
    </svg>
  ),

  SQL: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#35E9A0" strokeWidth="1.5" />
      <path
        d="M4 6v5c0 1.66 3.58 3 8 3s8-1.34 8-3V6"
        stroke="#35E9A0"
        strokeWidth="1.5"
      />
      <path
        d="M4 11v5c0 1.66 3.58 3 8 3s8-1.34 8-3v-5"
        stroke="#35E9A0"
        strokeWidth="1.5"
      />
      <path
        d="M8 12l2 2-2 2M13 16h3"
        stroke="#4FFFB0"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  ),

  // --- Backend & Frameworks ---
  'Node.js': () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2l8.5 4.9v9.8L12 21.6l-8.5-4.9V6.9L12 2z"
        stroke="#539E43"
        strokeWidth="1.5"
        fill="#339933"
        fillOpacity="0.25"
      />
      <path
        d="M12 7v10M7.5 9.5l9 5M16.5 9.5l-9 5"
        stroke="#539E43"
        strokeWidth="1.3"
      />
    </svg>
  ),

  'Express.js': () => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="6" fill="#142024" stroke="#24363B" strokeWidth="1" />
      <text
        x="16"
        y="19"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="700"
        fontSize="8"
        fill="#E5EAE8"
        textAnchor="middle"
        letterSpacing="0.2"
      >
        Express
      </text>
    </svg>
  ),

  'RESTful APIs': () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="4" width="20" height="16" rx="4" stroke="#35E9A0" strokeWidth="1.5" fill="#123D32" fillOpacity="0.4" />
      <text
        x="12"
        y="15"
        fontFamily="sans-serif"
        fontWeight="800"
        fontSize="8"
        fill="#35E9A0"
        textAnchor="middle"
        letterSpacing="0.5"
      >
        API
      </text>
    </svg>
  ),
  'RESTful API Development': () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="4" width="20" height="16" rx="4" stroke="#35E9A0" strokeWidth="1.5" fill="#123D32" fillOpacity="0.4" />
      <text
        x="12"
        y="15"
        fontFamily="sans-serif"
        fontWeight="800"
        fontSize="8"
        fill="#35E9A0"
        textAnchor="middle"
        letterSpacing="0.5"
      >
        API
      </text>
    </svg>
  ),

  'Socket.IO': () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#F1F5F4" strokeWidth="1.5" fill="#101A1D" />
      <path
        d="M13 5L8 13h5l-2 6 7-9h-5l2-5z"
        fill="#35E9A0"
        stroke="#35E9A0"
        strokeWidth="0.8"
        strokeLinejoin="round"
      />
    </svg>
  ),

  Microservices: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      {/* Central node + satellite connected nodes */}
      <circle cx="12" cy="12" r="2.8" fill="#35E9A0" />
      <circle cx="5" cy="8" r="1.8" fill="#4FFFB0" />
      <circle cx="19" cy="8" r="1.8" fill="#4FFFB0" />
      <circle cx="6" cy="17" r="1.8" fill="#4FFFB0" />
      <circle cx="18" cy="17" r="1.8" fill="#4FFFB0" />
      <path
        d="M5 8l7 4 7-4M6 17l6-5 6 5M12 5v4"
        stroke="#35E9A0"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  ),
  'Microservices Architecture': () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="2.8" fill="#35E9A0" />
      <circle cx="5" cy="8" r="1.8" fill="#4FFFB0" />
      <circle cx="19" cy="8" r="1.8" fill="#4FFFB0" />
      <circle cx="6" cy="17" r="1.8" fill="#4FFFB0" />
      <circle cx="18" cy="17" r="1.8" fill="#4FFFB0" />
      <path
        d="M5 8l7 4 7-4M6 17l6-5 6 5M12 5v4"
        stroke="#35E9A0"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  ),

  'Google Gemini': () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4E75F8" />
          <stop offset="50%" stopColor="#8AB4F8" />
          <stop offset="100%" stopColor="#C58AF9" />
        </linearGradient>
      </defs>
      <path
        d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z"
        fill="url(#geminiGrad)"
      />
    </svg>
  ),

  Groq: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#F55036" fillOpacity="0.15" />
      <path
        d="M14.5 8C13.8 7.4 12.9 7 11.8 7 9.2 7 7.2 9.1 7.2 11.8c0 2.6 2 4.7 4.6 4.7.9 0 1.8-.3 2.5-.8l1.4 1.4c-.2.4-.7.9-1.5.9h-1.5"
        stroke="#F55036"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="16" cy="15.5" r="1.5" fill="#F55036" />
    </svg>
  ),

  Deepgram: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#101A1D" stroke="#24363B" />
      <path
        d="M7 6h5c3.3 0 6 2.7 6 6s-2.7 6-6 6H7V6z"
        stroke="#13EF93"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="12" cy="12" r="2.2" fill="#13EF93" />
    </svg>
  ),

  LiveKit: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#101A1D" stroke="#24363B" />
      <path
        d="M6 7v10h4M13 7v10M17 7l-4 5 4 5"
        stroke="#00D1FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  // --- Databases & Caching ---
  MongoDB: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C12 2 6 7.5 6 13c0 3.3 2.7 6 6 6s6-2.7 6-6c0-5.5-6-11-6-11z"
        fill="#47A248"
      />
      <path
        d="M12 2v19"
        stroke="#13AA52"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M12 19c-1.5 0-3-1-3-2.5 0-1.5 3-4.5 3-4.5"
        fill="#3FA037"
      />
    </svg>
  ),

  MySQL: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#00618A" fillOpacity="0.25" />
      <path
        d="M5 16c1-3 3-5 7-5 3 0 5 1.5 6 4"
        stroke="#4479A1"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="12" cy="9" r="2.5" fill="#E48E00" />
    </svg>
  ),

  PostgreSQL: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10.5" fill="#336791" fillOpacity="0.2" stroke="#336791" strokeWidth="1.2" />
      <path
        d="M12 6c-3 0-5 2-5 5 0 2 1 3.5 2 4.5v2.5h2v-2c1 .5 2 .5 3 0v2h2v-2.5c1-1 2-2.5 2-4.5 0-3-2-5-6-5z"
        stroke="#336791"
        strokeWidth="1.4"
        fill="#336791"
        fillOpacity="0.4"
      />
      <circle cx="10" cy="10" r="1" fill="#fff" />
      <circle cx="14" cy="10" r="1" fill="#fff" />
    </svg>
  ),

  Redis: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3l8 4-8 4-8-4 8-4z"
        fill="#DC382D"
      />
      <path
        d="M4 11l8 4 8-4M4 15l8 4 8-4"
        stroke="#DC382D"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),

  // --- Frontend Development ---
  'React.js': () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(150 12 12)" />
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
    </svg>
  ),

  HTML5: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 3l1.8 17 6.2 2 6.2-2L20 3H4z"
        fill="#E34F26"
      />
      <path
        d="M12 4.6v15.8l4.8-1.5L18.4 4.6H12z"
        fill="#EF652A"
      />
      <path
        d="M8.2 7.5h7.6l-.3 3.2H8.5l.3 3.3h6.7l-.4 3.7-3.1 1-3.1-1-.2-2H7l.3 3.5L12 21.5l4.7-1.5.7-8.2H8.1l.1-4.3z"
        fill="#FFFFFF"
      />
    </svg>
  ),

  CSS3: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 3l1.8 17 6.2 2 6.2-2L20 3H4z"
        fill="#1572B6"
      />
      <path
        d="M12 4.6v15.8l4.8-1.5L18.4 4.6H12z"
        fill="#33A9DC"
      />
      <path
        d="M8.2 7.5h7.6l-.3 3.2H8.5l.3 3.3h6.7l-.4 3.7-3.1 1-3.1-1-.2-2H7l.3 3.5L12 21.5l4.7-1.5.7-8.2H8.1l.1-4.3z"
        fill="#FFFFFF"
      />
    </svg>
  ),

  // --- DevOps & Development Tools ---
  Git: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect x="2.5" y="2.5" width="19" height="19" rx="4" transform="rotate(45 12 12)" fill="#F05032" />
      <circle cx="12" cy="7" r="1.5" fill="#fff" />
      <circle cx="12" cy="17" r="1.5" fill="#fff" />
      <circle cx="16" cy="12" r="1.5" fill="#fff" />
      <path d="M12 8.5v7M12 12h2.5" stroke="#fff" strokeWidth="1.4" />
    </svg>
  ),

  GitHub: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        fill="#F1F5F4"
      />
    </svg>
  ),

  Docker: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M21.5 12.5c-.5-.4-1.6-.4-2.2.1-.3.2-.5.5-.7.9-.9-.4-2.1-.2-2.8.5-2.2-.2-4.5 1-5.7 3-2.6.2-4.6 2-5 4.5 1.6.5 3.3.6 5 .2 3.6-.8 6.9-2.7 9.8-5.3.7.1 1.4-.2 1.6-.9z"
        fill="#2496ED"
      />
      <rect x="7" y="10" width="2" height="2" rx="0.3" fill="#2496ED" />
      <rect x="10" y="10" width="2" height="2" rx="0.3" fill="#2496ED" />
      <rect x="13" y="10" width="2" height="2" rx="0.3" fill="#2496ED" />
      <rect x="10" y="7" width="2" height="2" rx="0.3" fill="#2496ED" />
      <rect x="13" y="7" width="2" height="2" rx="0.3" fill="#2496ED" />
      <rect x="16" y="10" width="2" height="2" rx="0.3" fill="#2496ED" />
    </svg>
  ),

  'VS Code': () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M17.5 2L5 12l12.5 10 4-2.5V4.5L17.5 2z"
        fill="#007ACC"
      />
      <path
        d="M17.5 2l-8 7.5L5 6.5 17.5 2z"
        fill="#1F8AD2"
      />
      <path
        d="M17.5 22l-8-7.5L5 17.5 17.5 22z"
        fill="#0065A9"
      />
      <path
        d="M21.5 4.5L14 12l7.5 7.5V4.5z"
        fill="#007ACC"
      />
    </svg>
  ),

  'Android Studio': () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 18h12v-6c0-3.3-2.7-6-6-6s-6 2.7-6 6v6z"
        fill="#3DDC84"
      />
      <circle cx="9" cy="11" r="1.2" fill="#fff" />
      <circle cx="15" cy="11" r="1.2" fill="#fff" />
      <path
        d="M7 6L5 3M17 6l2-3"
        stroke="#3DDC84"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),

  // --- Core Computer Science ---
  DSA: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="5" r="2.5" stroke="#35E9A0" strokeWidth="1.5" />
      <circle cx="6" cy="17" r="2.5" stroke="#35E9A0" strokeWidth="1.5" />
      <circle cx="18" cy="17" r="2.5" stroke="#35E9A0" strokeWidth="1.5" />
      <path
        d="M10.5 7l-3 7.5M13.5 7l3 7.5"
        stroke="#35E9A0"
        strokeWidth="1.4"
      />
    </svg>
  ),
  'Data Structures & Algorithms': () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="5" r="2.5" stroke="#35E9A0" strokeWidth="1.5" />
      <circle cx="6" cy="17" r="2.5" stroke="#35E9A0" strokeWidth="1.5" />
      <circle cx="18" cy="17" r="2.5" stroke="#35E9A0" strokeWidth="1.5" />
      <path
        d="M10.5 7l-3 7.5M13.5 7l3 7.5"
        stroke="#35E9A0"
        strokeWidth="1.4"
      />
    </svg>
  ),

  OOP: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3l7 4v9l-7 4-7-4V7l7-4z"
        stroke="#35E9A0"
        strokeWidth="1.5"
      />
      <path
        d="M12 3v18M5 7l7 4 7-4"
        stroke="#35E9A0"
        strokeWidth="1.3"
      />
    </svg>
  ),
  'Object-Oriented Programming': () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3l7 4v9l-7 4-7-4V7l7-4z"
        stroke="#35E9A0"
        strokeWidth="1.5"
      />
      <path
        d="M12 3v18M5 7l7 4 7-4"
        stroke="#35E9A0"
        strokeWidth="1.3"
      />
    </svg>
  ),

  DBMS: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="6" rx="7" ry="2.5" stroke="#35E9A0" strokeWidth="1.5" />
      <path
        d="M5 6v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6"
        stroke="#35E9A0"
        strokeWidth="1.5"
      />
      <path
        d="M5 10v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4"
        stroke="#35E9A0"
        strokeWidth="1.5"
      />
      <path
        d="M5 14v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4"
        stroke="#35E9A0"
        strokeWidth="1.5"
      />
    </svg>
  ),
  'Database Management Systems': () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="6" rx="7" ry="2.5" stroke="#35E9A0" strokeWidth="1.5" />
      <path
        d="M5 6v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6"
        stroke="#35E9A0"
        strokeWidth="1.5"
      />
      <path
        d="M5 10v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4"
        stroke="#35E9A0"
        strokeWidth="1.5"
      />
      <path
        d="M5 14v4c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-4"
        stroke="#35E9A0"
        strokeWidth="1.5"
      />
    </svg>
  ),

  OS: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="13" rx="2" stroke="#35E9A0" strokeWidth="1.5" />
      <path
        d="M7 8l2.5 2L7 12M12 12h4M9 20h6M12 17v3"
        stroke="#35E9A0"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  ),
  'Operating Systems': () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="13" rx="2" stroke="#35E9A0" strokeWidth="1.5" />
      <path
        d="M7 8l2.5 2L7 12M12 12h4M9 20h6M12 17v3"
        stroke="#35E9A0"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  ),

  Networks: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="7" r="2.5" stroke="#35E9A0" strokeWidth="1.5" />
      <circle cx="5" cy="17" r="2.5" stroke="#35E9A0" strokeWidth="1.5" />
      <circle cx="19" cy="17" r="2.5" stroke="#35E9A0" strokeWidth="1.5" />
      <path
        d="M12 9.5v3M5 14.5l7-2 7 2"
        stroke="#35E9A0"
        strokeWidth="1.3"
      />
    </svg>
  ),
  'Computer Networks': () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="7" r="2.5" stroke="#35E9A0" strokeWidth="1.5" />
      <circle cx="5" cy="17" r="2.5" stroke="#35E9A0" strokeWidth="1.5" />
      <circle cx="19" cy="17" r="2.5" stroke="#35E9A0" strokeWidth="1.5" />
      <path
        d="M12 9.5v3M5 14.5l7-2 7 2"
        stroke="#35E9A0"
        strokeWidth="1.3"
      />
    </svg>
  ),

  // Aliases for Project Tags
  'Gemini AI': () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z"
        fill="#4E75F8"
      />
    </svg>
  ),
  'Gemini API': () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z"
        fill="#4E75F8"
      />
    </svg>
  ),
  AI: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3z"
        fill="#35E9A0"
      />
      <path
        d="M18 14l.9 2.1L21 17l-2.1.9L18 20l-.9-2.1L15 17l2.1-.9L18 14z"
        fill="#4FFFB0"
      />
    </svg>
  ),
  'Groq API': () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#F55036" fillOpacity="0.15" />
      <path
        d="M14.5 8C13.8 7.4 12.9 7 11.8 7 9.2 7 7.2 9.1 7.2 11.8c0 2.6 2 4.7 4.6 4.7.9 0 1.8-.3 2.5-.8l1.4 1.4c-.2.4-.7.9-1.5.9h-1.5"
        stroke="#F55036"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  ),
  'Chart.js': () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="13" width="3" height="7" rx="1" fill="#FF6384" />
      <rect x="10.5" y="8" width="3" height="12" rx="1" fill="#36A2EB" />
      <rect x="17" y="4" width="3" height="16" rx="1" fill="#FFCE56" />
    </svg>
  )
};
