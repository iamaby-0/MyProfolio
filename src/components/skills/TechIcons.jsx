import React from 'react';

export const TechIcons = {
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
      <path
        d="M6 18c0-2.5 1.5-3.5 3-3.5.8 0 1.5.4 1.8.8l-1 1.2c-.3-.2-.5-.4-.8-.4-.7 0-1 .5-1 1.9 0 1.2.3 1.8 1 1.8.4 0 .7-.2.9-.4l.9 1.1c-.6.6-1.2.9-2 .9-2 0-2.8-1.5-2.8-3.3zm7 0c0-2.3 1.2-3.4 2.8-3.4 1.5 0 2.5.9 2.5 2.5 0 .2 0 .4-.1.6h-3.8c.1.9.7 1.4 1.5 1.4.6 0 1-.2 1.3-.5l1 1c-.6.7-1.3 1-2.4 1-2 0-2.8-1.4-2.8-2.6z"
        fill="#000000"
      />
      <text x="12" y="17" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="11" fill="#000" textAnchor="middle">JS</text>
    </svg>
  ),
  'C++': () => (
    <svg width="28" height="28" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10.5" fill="#00599C" />
      <path
        d="M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 3.8-2.1l-1.5-.9a2.7 2.7 0 1 1 0-3l1.5-.9A4.5 4.5 0 0 0 12 7.5z"
        fill="#FFFFFF"
      />
      <path d="M16 11h1v-1h1v1h1v1h-1v1h-1v-1h-1v-1zM19.5 11h1v-1h1v1h1v1h-1v1h-1v-1h-1v-1z" fill="#004482" />
    </svg>
  ),
  'React.js': () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(150 12 12)" />
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
    </svg>
  ),
  'Node.js': () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2l8.5 4.9v9.8L12 21.6l-8.5-4.9V6.9L12 2z"
        stroke="#539E43"
        strokeWidth="1.5"
        fill="#339933"
        fillOpacity="0.2"
      />
      <path
        d="M12 7v10M7.5 9.5l9 5M16.5 9.5l-9 5"
        stroke="#539E43"
        strokeWidth="1.3"
      />
    </svg>
  ),
  'Express.js': () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#18272C" />
      <text
        x="12"
        y="15.5"
        fontFamily="monospace"
        fontWeight="bold"
        fontSize="10"
        fill="#F1F5F4"
        textAnchor="middle"
      >
        ex
      </text>
    </svg>
  ),
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
        stroke="#00618A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="12" cy="9" r="2.5" fill="#E48E00" />
    </svg>
  ),
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
  )
};
