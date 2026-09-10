export type Project = {
  slug: string;
  title: string;
  category: string;
  filters: string[];
  desc: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  github: string;
  demo: string | null;
  arch: string[];
};

export const projects: Project[] = [
  {
    slug: "ai-career-mentor",
    title: "AI Career Mentor",
    category: "AI + Flutter",
    filters: ["AI", "Flutter"],
    desc: "An AI-powered Flutter application that helps students explore career paths, receive personalized recommendations, and improve career planning.",
    problem:
      "Students often choose career paths based on incomplete information, peer pressure, or generic advice — with little insight into how their own skills and interests map to real career options.",
    solution:
      "AI Career Mentor uses an AI recommendation layer inside a Flutter app to analyze a student's interests, strengths and goals, then surfaces tailored career paths and next steps.",
    features: [
      "Personalized career path recommendations",
      "Interest and skill-based assessment flow",
      "Clean, guided onboarding experience",
      "Cross-platform Flutter app (Android/iOS)",
    ],
    tech: ["Flutter", "Dart", "Python", "AI/ML APIs", "Firebase"],
    github: "https://github.com/Snivas1",
    demo: null,
    arch: ["Flutter UI", "AI Recommendation Engine", "Career Data Store"],
  },
  {
    slug: "learning-navigator",
    title: "Learning Navigator",
    category: "Flutter Education Platform",
    filters: ["Flutter", "Education"],
    desc: "A modern educational platform built with Flutter where students can browse learning programs, manage profiles, receive notifications, and explore educational resources.",
    problem:
      "Students juggling multiple learning programs often lack a single, well-designed place to browse programs, track their profile, and stay updated — resorting to scattered PDFs and group chats instead.",
    solution:
      "Learning Navigator brings programs, profiles, notifications and resources into one clean Flutter experience, so students always know what to learn next.",
    features: [
      "Browse and filter learning programs",
      "Personal profile management",
      "Real-time notifications",
      "Curated educational resource library",
    ],
    tech: ["Flutter", "Dart", "Firebase", "REST APIs"],
    github: "https://github.com/Snivas1",
    demo: null,
    arch: ["Flutter App", "Auth & Profiles", "Programs API", "Notifications"],
  },
  {
    slug: "trustbite",
    title: "TrustBite",
    category: "Food Safety Platform",
    filters: ["Flutter", "Web Applications"],
    desc: "A food delivery platform integrated with food safety verification to improve trust between customers and restaurants.",
    problem:
      "Food delivery apps rarely surface real hygiene and safety signals, leaving customers to trust restaurants blindly and giving safe restaurants no way to stand out.",
    solution:
      "TrustBite layers a food-safety verification system on top of a delivery experience, so customers can see trust signals before they order.",
    features: [
      "Restaurant safety verification badges",
      "Customer-facing trust score",
      "Order and delivery flow",
      "Restaurant-side verification dashboard",
    ],
    tech: ["Flutter", "Node.js", "MongoDB", "REST APIs"],
    github: "https://github.com/Snivas1",
    demo: null,
    arch: ["Customer App", "Trust & Safety Service", "Restaurant Dashboard"],
  },
  {
    slug: "product-recommendation-system",
    title: "Product Recommendation System",
    category: "Machine Learning",
    filters: ["Machine Learning", "Web Applications"],
    desc: "A recommendation system built using Python, Flask, Pandas, Scikit-learn, and SQLite that suggests personalized products based on user preferences and interaction history.",
    problem:
      "Generic product listings don't adapt to individual users, which means people spend more time searching and less time finding what they actually want.",
    solution:
      "A Flask-based recommendation engine analyzes user interaction history with Pandas and Scikit-learn to serve personalized product suggestions in real time.",
    features: [
      "Collaborative + content-based recommendations",
      "User interaction tracking",
      "Lightweight SQLite data layer",
      "Flask REST API for suggestions",
    ],
    tech: ["Python", "Flask", "Pandas", "Scikit-learn", "SQLite"],
    github: "https://github.com/Snivas1",
    demo: null,
    arch: ["Flask API", "Recommendation Model", "SQLite Store"],
  },
];

export const filterCategories = [
  "All",
  "AI",
  "Flutter",
  "Machine Learning",
  "Education",
  "Web Applications",
];

export const timelineData: { year: string; title: string; desc: string }[] = [
  { year: "2023", title: "Started B.Tech CSE (AI & ML)", desc: "Began the Computer Science Engineering journey, specializing in Artificial Intelligence & Machine Learning." },
  { year: "2023", title: "Learned C Programming", desc: "Built a foundation in logic, memory and structured programming." },
  { year: "2023", title: "HTML & CSS", desc: "Started shaping ideas into real interfaces on the web." },
  { year: "2024", title: "JavaScript", desc: "Brought interactivity and logic to the front end." },
  { year: "2024", title: "Python", desc: "Picked up Python as a primary language for scripting, data and AI." },
  { year: "2024", title: "Flutter Development", desc: "Started building cross-platform mobile apps with Flutter & Dart." },
  { year: "2024", title: "Machine Learning", desc: "Explored Pandas, NumPy and Scikit-learn to build learning models." },
  { year: "2025", title: "AI Career Mentor", desc: "Shipped an AI-powered Flutter app for student career guidance." },
  { year: "2025", title: "Learning Navigator", desc: "Built a full Flutter education platform end-to-end." },
  { year: "2025", title: "TrustBite", desc: "Designed a food safety verification platform for delivery apps." },
  { year: "2025", title: "Product Recommendation System", desc: "Built a Flask + ML recommendation engine from scratch." },
  { year: "2026", title: "Full Stack Development", desc: "Now deepening full stack skills to ship complete products solo." },
];

export const evolutionData = ["C", "HTML", "CSS", "JavaScript", "Python", "Java", "Flutter", "ML", "AI"];

export const currentFocus = [
  "AI Career Mentor",
  "Learning Flutter",
  "Machine Learning Projects",
  "Full Stack Development",
  "Problem Solving",
];

export const skillsData: Record<string, string[]> = {
  Languages: ["Python", "Java", "JavaScript", "C", "HTML", "CSS"],
  Frameworks: ["Flutter", "Flask"],
  Tools: ["Git", "GitHub", "VS Code", "SQLite"],
  "Machine Learning": ["Pandas", "NumPy", "Scikit-learn"],
};

export const contact = {
  name: "Shanaboina Nivas",
  email: "nivasn227@gmail.com",
  phone: "+91 9542841948",
  github: "https://github.com/Snivas1",
};

export const assistantQA: { q: string; a: string }[] = [
  {
    q: "Who is Shanaboina Nivas?",
    a: "Nivas is a Computer Science Engineering (AI & ML) student who builds AI, educational and productivity products using Flutter, Python and full stack technologies — with a focus on clean UX and scalable design.",
  },
  {
    q: "Tell me about AI Career Mentor.",
    a: "AI Career Mentor is an AI-powered Flutter app that helps students explore career paths with personalized recommendations, based on their interests and skills. Built with Flutter, Dart and an AI recommendation layer.",
  },
  {
    q: "Show my projects.",
    a: "Nivas has shipped four featured projects: AI Career Mentor, Learning Navigator, TrustBite, and a Product Recommendation System. Scroll to the Projects section or use Recruiter Mode for a quick summary of each.",
  },
  {
    q: "What technologies does Nivas use?",
    a: "Languages: Python, Java, JavaScript, C. Frameworks: Flutter, Flask. Tools: Git, GitHub, VS Code, SQLite. Machine Learning: Pandas, NumPy, Scikit-learn.",
  },
  {
    q: "Generate Resume.",
    a: "You can request the latest resume directly — click 'Download Resume' in the navbar or Recruiter Mode panel, and it'll open a pre-filled email to nivasn227@gmail.com.",
  },
];
