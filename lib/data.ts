// ─────────────────────────────────────────────
// Portfolio content — single source of truth
// ─────────────────────────────────────────────

export const personal = {
  name: "Joshuva Prabhakar Palicharla",
  nameShort: "Joshuva Prabhakar",
  initials: "JP",
  headline: "AI & ML Engineer",
  subheadline: "MSCS @ Stevens | Building intelligent systems that perform in production",
  tagline:
    "I turn raw data and complex AI challenges into measurable business outcomes — through LLMs, scalable MLOps, and rigorous research.",
  email: "joshuvaprabhakarpalicharla@gmail.com",
  phone: "551-376-8712",
  location: "Jersey City, NJ",
  locationNote: "Open to on-site, hybrid, remote — NJ/NY preferred",
  linkedin: "https://www.linkedin.com/in/joshuva-prabhakar",
  github: "https://github.com/JoshuvaPrabhakarP",
  targetRoles: ["AI Engineer", "ML Engineer", "Data Scientist", "Data Analyst", "Cloud Data Engineer"],
};

export const metrics = [
  { value: "15M+", label: "Records processed", context: "Spark/Databricks ETL" },
  { value: "94%", label: "Classification accuracy", context: "Deepfake Detection" },
  { value: "R² 87.38", label: "Predictive accuracy", context: "CLV Stacking Ensemble" },
  { value: "30%", label: "Time reduction", context: "ETL automation" },
  { value: "6×", label: "Certified", context: "Microsoft Azure, Databricks, AWS" },
  { value: "2", label: "Publications", context: "Peer-reviewed research" },
];

export type Education = {
  institution: string;
  degree: string;
  field: string;
  gpa: string;
  gpaMax: string;
  graduation: string;
  location: string;
  courses: string[];
};

export const education: Education[] = [
  {
    institution: "Stevens Institute of Technology",
    degree: "Master of Science",
    field: "Computer Science",
    gpa: "3.455",
    gpaMax: "4.0",
    graduation: "May 2026",
    location: "Hoboken, NJ",
    courses: [
      "Machine Learning",
      "Big Data Technologies",
      "Database Management Systems",
      "Text & Information Retrieval",
      "Marketing Analytics",
    ],
  },
  {
    institution: "Narayana Engineering College",
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    gpa: "9.13",
    gpaMax: "10.0",
    graduation: "Jun 2024",
    location: "AP, India",
    courses: [
      "Data Structures & Algorithms",
      "Artificial Intelligence",
      "Data Science",
      "Cloud Computing",
      "Data Analytics & Machine Learning",
    ],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "AICTE NEAT",
    role: "AI/ML Intern",
    period: "Apr 2024 – Jun 2024",
    location: "India",
    bullets: [
      "Boosted ML model training quality by applying Prompt Engineering with LLMs to generate synthetic training data and iteratively optimizing prompt design, replacing legacy datasets.",
      "Reduced overfitting in production via cross-validation and data augmentation, validated by held-out evaluation metrics.",
    ],
  },
  {
    company: "BRAINOVISION",
    role: "Data Science Intern",
    period: "Aug 2023 – Feb 2024",
    location: "India",
    bullets: [
      "Achieved high classification accuracy for marketing analytics by building SVM-based ML models with feature engineering and hyperparameter tuning, measured by F1-score.",
      "Delivered insight reports from model evaluations, accelerating data-driven decisions and reducing manual analysis time for stakeholders.",
    ],
  },
  {
    company: "EDUSTATION",
    role: "Summer Intern",
    period: "May 2023 – Jul 2023",
    location: "India",
    bullets: [
      "Reduced data preparation time by 30% for healthcare and financial datasets by automating ETL workflows in Databricks, measured by pipeline runtime benchmarks.",
      "Built EDA-driven KPI dashboards with real-time monitoring, improving stakeholder visibility and enabling faster decisions.",
    ],
  },
  {
    company: "VERZEO",
    role: "Machine Learning Intern",
    period: "Nov 2021 – Jan 2022",
    location: "India",
    bullets: [
      "Improved sentiment analysis accuracy and speed by engineering NLP pipelines with PyTorch, CountVectorizer, and SVC, measured by F1-score.",
      "Deployed ML models as Streamlit web apps, enabling real-time interaction and reducing time-to-insight for end users.",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  date: string;
  affiliation: string;
  description: string;
  stack: string[];
  metrics?: string[];
  highlight?: boolean;
  published?: boolean;
  link?: string;
};

export const projects: Project[] = [
  {
    id: "congestion",
    title: "LLM-Driven Congestion Prediction & Analytics",
    date: "May 2025",
    affiliation: "Stevens Institute of Technology",
    description:
      "Engineered end-to-end Spark/Databricks ETL pipelines with cloud-based MLOps to process 15M+ traffic records, ensuring data integrity and transformation accuracy. Optimized runtime and cloud cost via MLOps auto-scaling on GCP Dataproc and Azure Databricks.",
    stack: ["Spark", "Databricks", "GCP Dataproc", "Azure", "MLOps", "LLMs"],
    metrics: ["15M+ records", "Cloud auto-scaling", "End-to-end MLOps"],
    highlight: true,
  },
  {
    id: "clv",
    title: "Enhanced Customer Lifetime Value Prediction",
    date: "Nov – Dec 2024",
    affiliation: "Stevens Institute of Technology",
    description:
      "Developed an advanced CLV predictive model using stacking ensemble techniques, combining multiple ML algorithms to identify complex behavioral patterns that traditional linear models miss — enabling data-driven retention strategies and maximizing marketing ROI.",
    stack: ["Python", "Scikit-learn", "Stacking Ensemble", "Feature Engineering"],
    metrics: ["R² = 87.38", "MAE = 268.07", "Outperformed 5 benchmarks"],
    highlight: true,
  },
  {
    id: "deepfake",
    title: "Enhanced Deepfake Detection on Social Media",
    date: "Mar – Jun 2024",
    affiliation: "Narayana Engineering College",
    description:
      "Developed an ML pipeline to classify tweets as human-generated or bot-generated using the Tweepfake dataset. Combined CountVectorizer with Random Forest and benchmarked against 9 other models. Published in IJREISS.",
    stack: ["Python", "NLP", "Random Forest", "CountVectorizer"],
    metrics: ["94% accuracy", "Outperformed 9 models"],
    published: true,
    link: "https://drive.google.com/file/d/1kiuhxMU21RKUO6tuhekVXtuWw9n4zJQU/view",
  },
  {
    id: "lda",
    title: "Fisher's LDA: Heart Disease Prediction",
    date: "Oct 2024",
    affiliation: "Stevens Institute of Technology",
    description:
      "Implemented Fisher's LDA entirely from scratch — no pre-built ML libraries — including manual class mean computation, within-class scatter matrix derivation, and a custom decision boundary on the UCI Heart Disease dataset.",
    stack: ["Python", "Linear Algebra", "NumPy", "Dimensionality Reduction"],
    metrics: ["Zero ML libraries", "Custom decision boundary"],
  },
  {
    id: "linreg",
    title: "Manual Linear Regression — California Housing",
    date: "Sep 2024",
    affiliation: "Stevens Institute of Technology",
    description:
      "Built a complete linear regression model from scratch using both the closed-form normal equation and stochastic gradient descent — zero external ML libraries. Implemented manual data splitting, standardization, and MSE evaluation.",
    stack: ["Python", "Linear Regression", "SGD", "Statistical Modeling"],
  },
  {
    id: "ridge",
    title: "Ridge Regression — Bike Rental Prediction",
    date: "Sep 2024",
    affiliation: "Stevens Institute of Technology",
    description:
      "Manually implemented Ridge regression with mini-batch gradient descent to predict bike rental counts. Built K-fold cross-validation and feature selection entirely from scratch on the UCI Bike Sharing Dataset.",
    stack: ["Python", "Ridge Regression", "K-Fold CV", "Mini-Batch GD"],
  },
  {
    id: "powerbi",
    title: "Amazon Sales Analytics Dashboard",
    date: "Dec 2023",
    affiliation: "Independent",
    description:
      "Designed a comprehensive Amazon Sales Analytics dashboard in Power BI, translating raw sales data into actionable business insights with interactive KPI cards, slicers, geospatial maps, and trend charts.",
    stack: ["Power BI", "DAX", "Data Visualization", "Business Intelligence"],
    metrics: ["Interactive KPI dashboard", "Geospatial analysis"],
  },
];

export type SkillCategory = {
  category: string;
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    icon: "Code2",
    skills: ["Python", "Java", "SQL", "C", "C++", "R"],
  },
  {
    category: "AI / ML",
    icon: "Brain",
    skills: [
      "PyTorch", "TensorFlow", "Hugging Face", "LangChain",
      "OpenAI API", "RAG", "Scikit-learn", "MLOps",
      "Prompt Engineering", "AI Agents",
    ],
  },
  {
    category: "ML Techniques",
    icon: "GitBranch",
    skills: [
      "Feature Engineering", "Hyperparameter Tuning",
      "Model Deployment", "Cross-validation", "Data Augmentation",
    ],
  },
  {
    category: "Cloud",
    icon: "Cloud",
    skills: ["AWS", "Azure", "GCP", "Spark", "Databricks", "Cloud Data Engineering"],
  },
  {
    category: "Databases",
    icon: "Database",
    skills: ["MySQL", "PostgreSQL", "Pinecone", "Milvus"],
  },
  {
    category: "Frameworks & Tools",
    icon: "Wrench",
    skills: ["Flask", "ETL", "Git", "Streamlit", "Power BI", "SQL Optimization"],
  },
];

export type Certification = {
  name: string;
  issuer: string;
  badge: string;
  link: string;
};

export const certifications: Certification[] = [
  {
    name: "Azure Data Engineer Associate",
    issuer: "Microsoft",
    badge: "azure",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/JoshuvaPrabhakar-4435/3673A74756FD65EE?sharingId=A763E97263BC0958",
  },
  {
    name: "Azure Data Scientist Associate",
    issuer: "Microsoft",
    badge: "azure",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/JoshuvaPrabhakar-4435/B52656250C7BA420?sharingId=A763E97263BC0958",
  },
  {
    name: "Azure Developer Associate",
    issuer: "Microsoft",
    badge: "azure",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/JoshuvaPrabhakar-4435/2CE820ADF78435DD?sharingId=A763E97263BC0958",
  },
  {
    name: "Azure AI Fundamentals",
    issuer: "Microsoft",
    badge: "azure",
    link: "https://www.credly.com/badges/4118ac45-62bd-4d5d-8802-17661d22295e/public_url",
  },
  {
    name: "Databricks Fundamentals",
    issuer: "Databricks",
    badge: "databricks",
    link: "https://credentials.databricks.com/29e788d4-3ee6-48b6-acca-8e1d7a305c06",
  },
  {
    name: "AWS Data Engineering",
    issuer: "Amazon Web Services",
    badge: "aws",
    link: "https://www.credly.com/badges/81a5eec8-172c-4b91-b091-254badc4a991/public_url",
  },
];

export type Publication = {
  title: string;
  journal: string;
  issn: string;
  link: string;
  year: string;
};

export const publications: Publication[] = [
  {
    title: "Enhanced Deepfake Detection on Social Media",
    journal: "International Journal of Research in Engineering, IT and Social Sciences (IJREISS)",
    issn: "2250-0588",
    link: "https://drive.google.com/file/d/1kiuhxMU21RKUO6tuhekVXtuWw9n4zJQU/view",
    year: "2024",
  },
  {
    title: "Deep Learning — Literature Review",
    journal: "Journal of Technology",
    issn: "10123407",
    link: "https://drive.google.com/file/d/1JxbI6aC2E1s4K7eCvlZjRvCij91CSXoQ/view?usp=sharing",
    year: "2024",
  },
];

export const navLinks = [
  { label: "About",          href: "#about" },
  { label: "Experience",     href: "#experience" },
  { label: "Projects",       href: "#projects" },
  { label: "Skills",         href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Publications",   href: "#publications" },
  { label: "Contact",        href: "#contact" },
];
