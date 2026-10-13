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
    desc: "An AI-powered Flutter application designed to help students explore career paths, assess their interests and skills, and receive personalized career guidance.",
    problem:
      "Students often struggle to identify suitable career paths because they lack personalized guidance that connects their interests, skills, and goals with relevant opportunities.",
    solution:
      "AI Career Mentor combines a Flutter-based user experience with an AI recommendation layer to provide personalized career guidance based on student inputs.",
    features: [
      "Personalized career path recommendations",
      "Interest and skill-based assessment",
      "Guided student onboarding",
      "Cross-platform Flutter application",
    ],
    tech: ["Flutter", "Dart", "Python", "AI/ML", "Firebase"],
    github: "https://github.com/Snivas1/AI-Career-Mentor",
    demo: null,
    arch: [
      "Flutter UI",
      "AI Recommendation Layer",
      "Career Data",
    ],
  },

  {
    slug: "learning-navigator",
    title: "Learning Navigator",
    category: "Flutter Education Platform",
    filters: ["Flutter", "Education"],
    desc: "A Flutter-based education platform that brings learning programs, announcements, profiles, notifications, and educational resources together in one application.",
    problem:
      "Students often manage learning programs and educational information across multiple platforms, making it difficult to discover programs and stay updated.",
    solution:
      "Learning Navigator provides a centralized Flutter application where students can explore programs, manage their profiles, receive notifications, and access learning resources.",
    features: [
      "Learning program listing and exploration",
      "Program detail screens",
      "Student profile management",
      "Notifications and announcements",
      "Quick links and educational resources",
    ],
    tech: ["Flutter", "Dart", "Firebase", "REST APIs"],
    github: "https://github.com/KAB-04/Learning-Navigator",
    demo: null,
    arch: [
      "Flutter Application",
      "Authentication & Profiles",
      "Program Module",
      "Notifications",
    ],
  },

  {
    slug: "trustbite",
    title: "TrustBite",
    category: "Food Safety Platform",
    filters: ["Flutter", "Web Applications"],
    desc: "A food delivery platform concept that combines food ordering with food-safety verification to help customers make more informed choices.",
    problem:
      "Customers often have limited visibility into restaurant hygiene and food-safety information when choosing where to order from.",
    solution:
      "TrustBite introduces food-safety verification and trust signals into the food delivery experience, connecting customers with verified restaurant information.",
    features: [
      "Restaurant safety verification",
      "Customer-facing trust information",
      "Food ordering workflow",
      "Restaurant-side management",
    ],
    tech: ["Flutter", "Node.js", "MongoDB", "REST APIs"],
    github: "https://github.com/Snivas1/TrustBite",
    demo: null,
    arch: [
      "Customer Application",
      "Trust & Safety Service",
      "Restaurant Management",
    ],
  },

  {
    slug: "product-recommendation-system",
    title: "Product Recommendation System",
    category: "Machine Learning",
    filters: ["Machine Learning", "Web Applications"],
    desc: "A machine-learning recommendation system for e-commerce that analyzes product information and user interactions to generate personalized product recommendations.",
    problem:
      "Large e-commerce catalogs can make it difficult for users to discover relevant products, while generic product listings provide limited personalization.",
    solution:
      "The system uses Python, Pandas, and Scikit-learn to analyze product and interaction data and generate recommendations through a Flask-based application.",
    features: [
      "Personalized product recommendations",
      "Similar-product recommendations",
      "User-based recommendations",
      "Same-price product suggestions",
      "Product interaction analysis",
      "SQLite data storage",
    ],
    tech: [
      "Python",
      "Flask",
      "Pandas",
      "Scikit-learn",
      "SQLite",
      "Machine Learning",
    ],
    github:
      "https://github.com/Snivas1/Ecommerce-Product-Recommendation-System",
    demo: null,
    arch: [
      "Flask Application",
      "Recommendation Engine",
      "Machine Learning Models",
      "SQLite Database",
    ],
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
  {
    year: "2023",
    title: "Started B.Tech CSE (AI & ML)",
    desc: "Began the Computer Science Engineering journey, specializing in Artificial Intelligence & Machine Learning.",
  },
  {
    year: "2023",
    title: "Learned C Programming",
    desc: "Built a foundation in logic, memory and structured programming.",
  },
  {
    year: "2023",
    title: "HTML & CSS",
    desc: "Started shaping ideas into real interfaces on the web.",
  },
  {
    year: "2024",
    title: "JavaScript",
    desc: "Brought interactivity and logic to the front end.",
  },
  {
    year: "2024",
    title: "Python",
    desc: "Picked up Python as a primary language for scripting, data and AI.",
  },
  {
    year: "2024",
    title: "Flutter Development",
    desc: "Started building cross-platform mobile apps with Flutter & Dart.",
  },
  {
    year: "2024",
    title: "Machine Learning",
    desc: "Explored Pandas, NumPy and Scikit-learn to build learning models.",
  },
  {
    year: "2025",
    title: "AI Career Mentor",
    desc: "Shipped an AI-powered Flutter app for student career guidance.",
  },
  {
    year: "2025",
    title: "Learning Navigator",
    desc: "Built a full Flutter education platform end-to-end.",
  },
  {
    year: "2025",
    title: "TrustBite",
    desc: "Designed a food safety verification platform for delivery apps.",
  },
  {
    year: "2025",
    title: "Product Recommendation System",
    desc: "Built a Flask + ML recommendation engine from scratch.",
  },
  {
    year: "2026",
    title: "Full Stack Development",
    desc: "Now deepening full stack skills to ship complete products solo.",
  },
];

export const evolutionData = [
  "C",
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "Java",
  "Flutter",
  "ML",
  "AI",
];

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
    a: "Nivas's latest resume is available directly through the Download Resume button. Click the Download Resume option in the portfolio to download the PDF.",
  },
];
