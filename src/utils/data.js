// Asset imports for Experiences
import ccAdvisBackEnd from '../assets/cc26/advis back end.png';
import ccAdvisUiUx from '../assets/cc26/advis ui ux.png';
import ccCertificate from '../assets/cc26/certificate.png';
import ccEnglish from '../assets/cc26/english.png';
import ccPresent from '../assets/cc26/present.png';
import ccSelfPech from '../assets/cc26/self pech.png';
import ccSoft5 from '../assets/cc26/soft 5.png';
import ccTech4 from '../assets/cc26/tech 4.png';

import dsfScreenshot from '../assets/dsf/Screenshot 2026-10-31 133531.png';

// Asset imports for Projects
import diskusifyPreview from '../assets/diskusify/disk1.png';

import csHomepage from '../assets/careersync/homepage.png';
import csAiPage from '../assets/careersync/AIpage.png';
import csCareer from '../assets/careersync/carrer.png';
import csSettingPage from '../assets/careersync/settingpage.png';

import openjobPreview from '../assets/openjob/image.png';
import bookshelfPreview from '../assets/bookshelf/image.png';

import notesV1Preview from '../assets/personalnotesv1/notes.png';
import notesV2DarkMode from '../assets/personalnotesv2/darkmode.png';
import notesV2LightMode from '../assets/personalnotesv2/lightmode.png';
import recSysScreenshot1 from '../assets/recommendationsystem/Screenshot 2026-11-03 093429.png';
import recSysScreenshot2 from '../assets/recommendationsystem/Screenshot 2026-11-03 093524.png';

export const experiencesData = [
  {
    id: 'coding-camp-2026',
    type: 'experience',
    title: 'Coding Camp 2026 powered by DBS Foundation',
    role: 'Full-Stack Web Developer Cohort',
    period: 'February 2026 - July 2026',
    overview:
      'Completed an intensive 900+ hours project-based learning track focused on full-stack web development, covering both robust frontend architecture and scalable backend services.',
    points: [
      'Completed an intensive 900+ hours project-based learning track focused on full-stack web development path.',
      'Built responsive client-side web applications using React.js, implementing functional components, custom hooks, context API, state management, and asynchronous API data fetching.',
      'Developed server-side Web Services & RESTful APIs using Node.js and Express.js, integrated with PostgreSQL databases, JWT authentication, and data validation middleware.',
      'Engaged in 70+ hours of professional soft skills development, business English presentation, and financial literacy workshops conducted by industry experts.'
    ],
    gallery: [
      { src: ccCertificate, caption: 'Program Completion Certificate' },
      { src: ccTech4, caption: 'Technical Milestone & Architecture' },
      { src: ccAdvisBackEnd, caption: 'Backend Technical Advisory' },
      { src: ccAdvisUiUx, caption: 'UI/UX Design Mentorship' },
      { src: ccPresent, caption: 'Capstone Project Presentation' },
      { src: ccEnglish, caption: 'Business English Session' },
      { src: ccSoft5, caption: 'Soft Skills Training' },
      { src: ccSelfPech, caption: 'Self Pitch & Career Preparation' }
    ]
  },
  {
    id: 'digital-skill-fair-43',
    type: 'experience',
    title: 'Digital Skill Fair 43.0 – Faculty of ProDesign: UI/UX',
    role: 'UI/UX Design',
    period: 'September 2025',
    overview:
      'An intensive 5-day short bootcamp focused on understanding and executing the end-to-end UI/UX design thinking process.',
    points: [
      'Completed an intensive 5-day short bootcamp focused on the UI/UX design process.',
      'Learned about user needs analysis, user research, and design requirements.',
      'Explored design references using the Lego Section method.',
      'Practiced using Figma by applying consistency, visual hierarchy, and good design principles.',
      'Used Figma features such as Grouping, Auto Layout, and Sections to support the interface design process.',
      'Designed a fried rice ordering interface using Figma as a final project.'
    ],
    gallery: [
      { src: dsfScreenshot, caption: 'Design Showcase & Prototype Overview' }
    ]
  }
];

export const projectsData = [
  {
    id: 'diskusify',
    type: 'project',
    title: 'Diskusify – Discussion Forum Application',
    overview:
      'Diskusify is an online discussion forum web app built with React. It uses Redux Toolkit to manage state and data flow in one central place. The app connects to the Dicoding Forum API, so users can create discussion threads, write comments, and vote. The project also uses CI/CD with GitHub Actions and Vercel to automate the deployment process.',
    techStack: [
      { category: 'Core & Bundler', items: ['React', 'Vite'] },
      { category: 'Routing', items: ['React Router DOM'] },
      { category: 'State Management', items: ['Redux Toolkit', 'React Redux'] },
      { category: 'HTTP Client', items: ['Axios'] },
      { category: 'Styling', items: ['Tailwind CSS'] },
      { category: 'UI Feedback & UX', items: ['reapop'] },
      { category: 'Testing & Quality', items: ['Vitest', 'React Testing Library', 'JSDOM', 'Cypress', 'ESLint'] }
    ],
    features: [
      {
        name: 'User Authentication',
        description: 'User registration, login, logout, and automatic session loading using a JWT token.'
      },
      {
        name: 'Thread Management',
        description: 'View discussion threads, create new threads, and filter threads by category.'
      },
      {
        name: 'Comments & Voting',
        description: 'View discussion details, post comments, and upvote, downvote, or remove votes on threads and comments.'
      },
      {
        name: 'Notifications & Loading Bar',
        description: 'Interactive visual feedback during asynchronous processes.'
      }
    ],
    thumbnail: diskusifyPreview,
    gallery: [
      { src: diskusifyPreview, caption: 'Diskusify Discussion Threads & Interface' }
    ]
  },
  {
    id: 'careersync',
    type: 'project',
    title: 'CareerSync – Coding Camp 2026 Capstone Project',
    overview:
      'CareerSync is an AI-based job search and career matching platform. It helps job seekers manage their professional profiles, including personal information, education, work experience, and skills. Users can also upload CV files in PDF format and extract information from them automatically. The platform provides relevant job recommendations using a machine learning model.\n\nCareerSync was developed by a 6-member cross-functional team (Web, Data Science, AI Engineer) to connect job seekers with relevant job recommendations.\n\nMy contributions:\n• Engineered RESTful API endpoints using Express.js & Node.js for user authentication with JSON Web Tokens (JWT) to manage session state and secure routes.\n• Built interactive interfaces with React.js & Tailwind CSS for authentication pages (Login/Register) and the Account Settings page to support profile data management and CV file uploads.\n• Designed wireframes/prototypes in Figma and set up structured GitHub repository templates for both front-end and back-end codebase to streamline team collaboration.',
    techStack: [
      {
        category: 'Frontend',
        items: [
          'React Vite',
          'Tailwind CSS',
          'shadcn/ui & Radix UI',
          'React Router',
          'Framer Motion',
          'Axios',
          'Lucide React'
        ]
      },
      {
        category: 'Backend',
        items: [
          'Node.js & Express',
          'PostgreSQL',
          'JWT (jsonwebtoken)',
          'bcrypt',
          'Joi',
          'Multer',
          'pdf-parse',
          'nanoid',
          'AI / ML Service',
          'Vercel Serverless'
        ]
      }
    ],
    features: [
      {
        name: 'Authentication & Dual-Token Authorization',
        description: 'User registration, login, and logout with bcrypt password hashing. Dual-token system with short-lived Access Tokens and Refresh Tokens stored in PostgreSQL.'
      },
      {
        name: 'Profile & Career Management (CRUD)',
        description: 'Manage personal information, work experience history, education details, and technical skill tags.'
      },
      {
        name: 'Automatic CV Upload & Extraction (PDF Parsing)',
        description: 'Upload PDF resumes processed through cv-parser.js to automatically extract names, skills, education, and experience.'
      },
      {
        name: 'Job Discovery & AI Matching',
        description: 'Explores curated job listings and calculates relevance scores using ML models to recommend suitable jobs.'
      }
    ],
    thumbnail: csHomepage,
    gallery: [
      { src: csHomepage, caption: 'Homepage & Hero Overview' },
      { src: csAiPage, caption: 'AI Job Matching & Relevance Scoring' },
      { src: csCareer, caption: 'Job Listings & Application Interface' },
      { src: csSettingPage, caption: 'Candidate Profile & CV Extraction Settings' }
    ]
  },
  {
    id: 'openjob-api',
    type: 'project',
    title: 'OpenJob API',
    overview:
      'OpenJob API is a RESTful backend API for a job portal platform. It provides the robust backend services that connect job seekers with hiring companies, featuring caching, rate limiting, and document management.',
    techStack: [
      { category: 'Runtime & Framework', items: ['Node.js', 'Express.js'] },
      { category: 'Database & Migration', items: ['PostgreSQL', 'node-pg-migrate'] },
      { category: 'Cache & Performance', items: ['Redis'] },
      { category: 'Security & Auth', items: ['JWT (jsonwebtoken)', 'bcrypt', 'Joi Validation'] },
      { category: 'File Storage & Utils', items: ['Multer', 'nanoid', 'dotenv', 'Nodemon'] }
    ],
    features: [
      {
        name: 'Authentication & Authorization',
        description: 'Secure user onboarding, password hashing, and token rotation with Access & Refresh tokens.'
      },
      {
        name: 'Company & Category Management',
        description: 'Full CRUD capabilities for company profiles, business domains, and job categories.'
      },
      {
        name: 'Job Management & Filtering',
        description: 'Post and browse job listings filtered by city, salary range, employment type, or experience.'
      },
      {
        name: 'Applications & Bookmarks',
        description: 'Apply with resume uploads, track application progress in real-time, and save favorite vacancies.'
      }
    ],
    thumbnail: openjobPreview,
    gallery: [
      { src: openjobPreview, caption: 'API Architecture & Documentation Overview' }
    ]
  },
  {
    id: 'bookshelf-api',
    type: 'project',
    title: 'Bookshelf API',
    overview:
      'Bookshelf API is a RESTful backend API for managing a book collection. Each book contains information such as title, author, publisher, total pages, current reading page, reading status, and an automatically calculated status showing whether the book has been finished.',
    techStack: [
      { category: 'Runtime Environment', items: ['Node.js'] },
      { category: 'Web Framework', items: ['Express.js'] },
      { category: 'Utilities', items: ['nanoid', 'Nodemon'] },
      { category: 'Testing', items: ['Postman Automated Test Collection'] }
    ],
    features: [
      {
        name: 'Add a Book (POST /books)',
        description: 'Validates book name presence and verifies that readPage does not exceed pageCount.'
      },
      {
        name: 'View All Books (GET /books)',
        description: 'Provides quick listing with ID, name, and publisher.'
      },
      {
        name: 'View Book Details (GET /books/:id)',
        description: 'Delivers full book metadata, reading progress, and completion status.'
      },
      {
        name: 'Update & Delete Books (PUT & DELETE /books/:id)',
        description: 'Validates and modifies existing records or deletes books safely.'
      }
    ],
    thumbnail: bookshelfPreview,
    gallery: [
      { src: bookshelfPreview, caption: 'API Testing & Response Output' }
    ]
  },
  {
    id: 'personal-notes',
    type: 'project',
    title: 'PersonalNotes – Personal Notes Application',
    overview:
      'PersonalNotes is a personal note-taking application that allows users to manage their notes easily. The application stores notes locally in the browser using localStorage. Users can add, edit, delete, and mark notes as favorites, making it simple to organize personal notes.',
    techStack: [
      { category: 'Frontend Framework', items: ['React'] },
      { category: 'Programming Language', items: ['JavaScript'] },
      { category: 'State Management', items: ['React Hooks'] },
      { category: 'Styling', items: ['CSS'] },
      { category: 'Build Tool', items: ['Vite'] },
      { category: 'Data Storage', items: ['localStorage (browser)'] },
      { category: 'Testing', items: ['Jest', 'React Testing Library'] },
      { category: 'Version Control', items: ['Git'] }
    ],
    features: [
      {
        name: 'View Notes',
        description: 'Displays all notes with text previews.'
      },
      {
        name: 'Add Notes',
        description: 'Provides a simple form to enter note titles and content.'
      },
      {
        name: 'Edit Notes',
        description: 'Allows users to update existing note titles and content.'
      },
      {
        name: 'Delete Notes',
        description: 'Allows users to delete notes with confirmation.'
      },
      {
        name: 'Mark Favorites',
        description: 'Uses a star icon to mark important notes.'
      },
      {
        name: 'Search Notes',
        description: 'Filters notes by title or content in real time.'
      }
    ],
    thumbnail: notesV1Preview,
    gallery: [
      { src: notesV1Preview, caption: 'Personal Notes Interface & Note Management' }
    ]
  },
  {
    id: 'personal-notes-v2',
    type: 'project',
    title: 'Personal Notes App V2',
    overview:
      'Personal Notes App V2 is a Single Page Application (SPA) built with React. The application connects to an external REST API (Dicoding Notes API) to manage user data and notes. It also provides a dark/light mode feature using React Context and custom React hooks.',
    techStack: [
      { category: 'Frontend Core', items: ['React (Class & Functional Components)', 'Vite'] },
      { category: 'Routing & Navigation', items: ['React Router DOM'] },
      { category: 'UI & Icons', items: ['React Icons', 'Vanilla CSS'] },
      { category: 'API & Communication', items: ['Fetch API', 'JWT Authentication', 'Dicoding Notes REST API'] }
    ],
    features: [
      {
        name: 'User Authentication & Session Management',
        description: 'User Registration, Login with JWT Access Token stored in localStorage, Persistent Login check, and Protected Routes.'
      },
      {
        name: 'Notes Management via API',
        description: 'View active notes, create new notes with title & body, dedicated note details page with URL params, and API-based note deletion.'
      },
      {
        name: 'Theme Management (Dark / Light Mode)',
        description: 'Switch between dark and light themes across the application using React Context, with persistent storage in localStorage.'
      }
    ],
    thumbnail: notesV2DarkMode,
    gallery: [
      { src: notesV2DarkMode, caption: 'Dark Mode View with Active Notes List' },
      { src: notesV2LightMode, caption: 'Light Mode View with Note Management' }
    ]
  },
  {
    id: 'tourism-recommendation-system',
    type: 'project',
    title: 'Tourism Recommendation System - research project',
    overview:
      'The Tourism Recommendation System is an interactive web application that helps users discover new tourist destinations. It provides recommendations based on similarities in destination descriptions and characteristics using Content-Based Filtering, as well as a free-text search feature.',
    techStack: [
      { category: 'Programming Language', items: ['Python'] },
      { category: 'Frontend & UI', items: ['Streamlit', 'HTML / CSS'] },
      { category: 'Machine Learning & NLP', items: ['scikit-learn (TfidfVectorizer, cosine_similarity)'] },
      { category: 'Data Processing & Dataset', items: ['Pandas', 'NumPy', 'CSV Dataset'] }
    ],
    features: [
      {
        name: 'Free-Text Search (Search by Query)',
        description: 'Matches user query keywords with destination descriptions using TF-IDF and Cosine Similarity, showing top 5 most relevant results.'
      },
      {
        name: 'Popular Tourist Destinations',
        description: 'Presents popular tourist destinations in interactive card layouts with hover effects.'
      },
      {
        name: 'Destination Detail Page',
        description: 'Displays complete information including photos, tourism categories, operating hours, ticket prices, facilities, and direct Google Maps links.'
      },
      {
        name: 'Similar Destination Recommendations (Item-to-Item Similarity)',
        description: 'Automatically computes and displays 5 other tourist destinations with highest similarity scores on each destination page.'
      }
    ],
    thumbnail: recSysScreenshot1,
    gallery: [
      { src: recSysScreenshot1, caption: 'Recommendation System Query Search & Destination Overview' },
      { src: recSysScreenshot2, caption: 'Destination Detail & Similar Destination Recommendations' }
    ]
  }
];

export const allPortfolioItems = [...experiencesData, ...projectsData];

export function getItemById(id) {
  return allPortfolioItems.find((item) => item.id === id);
}
