// ─────────────────────────────────────────────
// Portfolio content — single source of truth
// ─────────────────────────────────────────────

export const personal = {
  name: "Joshuva Prabhakar Palicharla",
  nameShort: "Joshuva Prabhakar",
  initials: "JP",
  headline: "Software Engineer",
  subheadline: "GenAI/RAG · Python · SQL · REST APIs · Cloud · Docker · CI/CD",
  tagline:
    "I build reliable applications, backend services, and data pipelines — and GenAI/RAG applications when a problem calls for them.",
  email: "joshuvaprabhakarpalicharla@gmail.com",
  phone: "551-376-8712",
  location: "Jersey City, NJ",
  locationNote: "Open to on-site, hybrid, remote — NJ/NY preferred",
  linkedin: "https://www.linkedin.com/in/joshuva-prabhakar",
  github: "https://github.com/JoshuvaPrabhakarP",
  targetRoles: ["Software Engineer", "Software Developer", "Backend Engineer", "Data Engineer", "Data Analyst"],
};

export const metrics = [
  { value: "69.4% Hit@10", label: "Document Intelligence RAG", context: "Up from 55.6% with reranking, on 36 single-target queries", featured: true },
  { value: "18-Model Study", label: "Transformer, Mamba & hybrid", context: "Six architectures across three seeds, document extraction", featured: true },
  { value: "ETL + Tests", label: "Databricks pipeline", context: "Unit tests and data integrity checks" },
  { value: "15M+", label: "Records processed", context: "Spark and Databricks ETL" },
  { value: "94%", label: "Tweet classification accuracy", context: "Random Forest, best of 10 models" },
  { value: "MS CS", label: "Stevens Institute", context: "Completed May 2026" },
  { value: "2", label: "Published papers", context: "Deepfake detection, deep learning" },
  { value: "Full-stack", label: "LMS built from scratch", context: "HTML, CSS, JavaScript, PHP, MySQL" },
];

export const about = {
  lead: "I turn complex problems and raw data into reliable software.",
  intro:
    "I'm Joshuva, a Software Engineer with an MS in Computer Science from Stevens Institute of Technology (May 2026), combining software development with data and AI.",
  specializationsLabel: "What I specialize in",
  specializations: [
    {
      title: "Software & Backend",
      text: "Clean, testable Python and SQL, data-driven applications, REST APIs, and reliable development workflows.",
    },
    {
      title: "Data Engineering",
      text: "Spark and Databricks ETL pipelines processing 15M+ records with data integrity checks.",
    },
    {
      title: "Cloud & Deployment",
      text: "AWS, Azure, GCP, Docker, CI/CD, and MLOps.",
    },
    {
      title: "Analytics",
      text: "SQL, Power BI, and Tableau for actionable insights.",
    },
    {
      title: "Applied AI",
      text: "GenAI/RAG applications, LLMs, and machine learning.",
    },
  ],
  results: "Selected results: 94% classification accuracy · CLV R² = 0.8738 · 30% less data-preparation time.",
  closing:
    "I bring engineering discipline and analytical depth to every project, whether that's building backend services, automating workflows, or extracting signal from large-scale data.",
  open:
    "Currently open to Software Engineer, Software Developer, Data Engineer, and Data Analyst roles (on-site, hybrid, or remote), with AI/ML-focused roles also welcome.",
};

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
      "Database Management Systems",
      "Big Data Technologies",
      "Machine Learning",
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
  stack: string[];
  highlight?: boolean;
  tag?: string;
};

export const experience: Experience[] = [
  {
    company: "AICTE NEAT",
    role: "AI-ML Virtual Intern",
    period: "Apr 2024 – Jun 2024",
    location: "India",
    bullets: [
      "Built a text-classification pipeline on the public TweepFake dataset to tell human-written tweets from machine-generated ones; it became the basis of my capstone and published paper.",
      "Turned tweet text into numerical features with CountVectorizer in Python.",
      "Trained and compared 10 classifiers, including Random Forest, SVM, MLP, Logistic Regression, and Gradient Boosting. Random Forest performed best at 94% accuracy.",
      "Evaluated models with cross-validation and classification metrics.",
    ],
    stack: ["Python", "CountVectorizer", "Random Forest", "Cross-validation"],
  },
  {
    company: "BRAINOVISION SOLUTIONS INDIA PVT.LTD",
    role: "Data Science Intern",
    period: "Aug 2023 – Feb 2024",
    location: "Hyderabad, India",
    bullets: [
      "Prepared datasets with Python, Pandas, and NumPy, engineered features, and tuned SVM classifiers evaluated with F1-score.",
      "Built an Amazon Sales Analytics dashboard in Power BI and Tableau dashboards covering sales categories, product performance, and trends over time.",
      "Worked with cross-functional teams to gather requirements and shape analytical solutions, then reported model results and dashboard insights to stakeholders.",
    ],
    stack: ["Python", "Pandas", "NumPy", "SVM", "Power BI", "Tableau"],
  },
  {
    company: "EduStation",
    role: "Summer Intern",
    period: "May 2023 – Jul 2023",
    location: "Bengaluru, India",
    bullets: [
      "Designed and built an automated ETL pipeline in Databricks that ingests, transforms, and loads raw financial and health-related data into analysis-ready tables, cutting data preparation time by 30%.",
      "Validated pipeline output with unit tests and data integrity checks.",
      "Ran EDA in Python and Pandas to resolve missing values and flag anomalies, then wrote SQL queries to surface risk patterns for root-cause analysis.",
      "Built automated dashboards to track key metrics for business reporting.",
    ],
    stack: ["Databricks", "ETL", "Python", "Pandas", "SQL"],
  },
  {
    company: "Trainity",
    role: "Virtual Internship",
    period: "Mar 2022 – May 2022",
    location: "Bangalore Urban, India",
    tag: "Full-stack development",
    highlight: true,
    bullets: [
      "Built a full-stack Learning Management System from scratch, supporting online courses for learners and educators.",
      "Developed the front end in HTML, CSS, and JavaScript, including the course and learning pages.",
      "Built the PHP back end with a MySQL database (managed in phpMyAdmin) to store and retrieve course and user data.",
      "Split the codebase into separate pages, stylesheets, and scripts for maintainability, deployed the app online, and managed the code with Git and GitHub.",
    ],
    stack: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "phpMyAdmin", "Git/GitHub"],
  },
  {
    company: "Verzeo",
    role: "Machine Learning Intern",
    period: "Nov 2021 – Jan 2022",
    location: "Bengaluru, India",
    bullets: [
      "Preprocessed and analyzed large volumes of text with Python and NLP techniques to prepare it for modeling.",
      "Built sentiment-classification models, evaluated them with classification metrics, and iterated to improve results.",
      "Worked with cross-functional teams to integrate the sentiment analysis solutions into applications.",
    ],
    stack: ["Python", "NLP", "Sentiment classification"],
  },
];

export type Project = {
  id: string;
  title: string;
  date: string;
  affiliation?: string;
  description: string;
  stack: string[];
  metrics?: string[];
  highlight?: boolean;
  published?: boolean;
  link?: string;
  repo?: string;
  lead?: boolean;
  details?: string[];
};

export const projects: Project[] = [
  {
    id: "doc-rag",
    title: "Document-Intelligence-RAG: Enterprise RAG System with Dual-Track Metadata",
    date: "July 2026",
    description:
      "A document intelligence RAG pipeline over 3,712 receipts from SROIE, WildReceipt, and CORD. I combined BGE embeddings and FAISS semantic search with BM25 keyword retrieval through Reciprocal Rank Fusion, added Transformer-extracted vendor, date, and amount metadata for filtered retrieval, and benchmarked seven retrieval configurations across 57 queries.",
    details: [
      "Evaluated cross-encoder reranking. On the 36 single-target queries within the 57-query benchmark, Hit@10 rose from 55.6% to 69.4% and MRR from 0.385 to 0.618.",
      "Compared model-extracted metadata against ground truth, and analyzed retrieval failures and accuracy–latency trade-offs.",
    ],
    stack: ["Python", "BGE Embeddings", "FAISS", "BM25", "RRF", "Transformers", "Cross-Encoder Reranking"],
    metrics: ["Hit@10 55.6% → 69.4%", "MRR 0.385 → 0.618", "36 single-target queries"],
    repo: "https://github.com/JoshuvaPrabhakarP/Document-Intelligence-RAG",
    highlight: true,
    lead: true,
  },
  {
    id: "hybrid-extractor",
    title: "Hybrid Document Extractor: Transformer vs. Mamba vs. Hybrid Architectures for NER",
    date: "Jun – Jul 2026",
    description:
      "Transformer, Mamba, and hybrid Mamba+Attention models for named entity recognition and receipt/invoice field extraction, all trained from scratch without a pretrained backbone. I ran an 18-model study across six architectures and three seeds, using CRF decoding, class-weighted loss, and early stopping.",
    details: [
      "Unified 3,684 documents from WildReceipt, SROIE, and CORD into a BIO-tagged NER dataset.",
      "Trained a custom BPE tokenizer with an 8,000-token vocabulary and a 0% UNK rate.",
      "Designed six architecture variants with matched layer counts: a pure Transformer, a pure Mamba, and four hybrid Mamba:Attention ratios.",
      "Improved F1 by up to 8× over a naive baseline. Proper training reversed the naive ranking: the Transformer outperformed Mamba under the controlled training setup, tested with paired t-tests across seeds.",
      "Measured 2.2–7.5× lower GPU memory use for Mamba than Transformer in the tested configurations.",
      "Built Streamlit and Gradio dashboards for model comparison, extraction demos, and results visualization; the Gradio app can expose a temporary public link.",
      "Findings are specific to this study's data, models, and configurations.",
    ],
    stack: ["Python", "PyTorch", "Transformer", "Mamba", "NER", "CRF", "BPE", "Streamlit", "Gradio"],
    metrics: ["18-model study", "Up to 8× F1 over naive baseline", "2.2–7.5× lower GPU memory (Mamba)"],
    repo: "https://github.com/JoshuvaPrabhakarP/hybrid-doc-extractor",
    highlight: true,
    lead: true,
  },
  {
    id: "congestion",
    title: "LLM-Driven Congestion Prediction & Analytics",
    date: "May 2025",
    affiliation: "Stevens Institute of Technology",
    description:
      "Data pipelines that prepare large traffic datasets for congestion prediction and analytics. I built end-to-end Spark/Databricks ETL with cloud-based MLOps, kept data integrity and transformation accuracy across 15M+ records, and tuned runtime and cloud cost with auto-scaling on GCP Dataproc and Azure Databricks.",
    stack: ["Spark", "Databricks", "GCP Dataproc", "Azure", "MLOps"],
    metrics: ["15M+ records", "Cloud auto-scaling"],
    highlight: true,
  },
  {
    id: "deepfake",
    title: "Enhanced Deepfake Detection on Social Media",
    date: "Mar – Jun 2024",
    affiliation: "Capstone · Narayana Engineering College",
    description:
      "A text-classification pipeline that separates human-written tweets from bot-generated ones on the TweepFake dataset. I built the feature extraction and Random Forest classifier and benchmarked it against 9 other models. Published in IJREISS.",
    stack: ["Python", "CountVectorizer", "Random Forest", "NLP"],
    metrics: ["94% accuracy", "Best of 10 models"],
    highlight: true,
    published: true,
    link: "https://drive.google.com/file/d/1kiuhxMU21RKUO6tuhekVXtuWw9n4zJQU/view",
  },
  {
    id: "powerbi",
    title: "Amazon Sales Analytics Dashboard",
    date: "Dec 2023",
    affiliation: "Brainovision Solutions (internship)",
    description:
      "An interactive Power BI dashboard that turns raw Amazon sales data into KPIs, regional distribution, category performance, and sales trends. I designed the report with cards, slicers, charts, tables, and geospatial maps.",
    stack: ["Power BI", "Excel", "Data Visualization", "Business Intelligence"],
  },
  {
    id: "ridge",
    title: "Ridge Regression — Bike Rental Prediction",
    date: "Sep 2024",
    affiliation: "Stevens Institute of Technology",
    description:
      "Predicts bike rental counts on the UCI Bike Sharing dataset. I implemented Ridge regression with mini-batch gradient descent, K-fold cross-validation, feature selection, and MSE evaluation by hand, documenting each step for reproducibility.",
    stack: ["Python", "Ridge Regression", "K-Fold CV", "Mini-Batch GD"],
    metrics: ["No ML libraries for training"],
  },
  {
    id: "linreg",
    title: "Manual Linear Regression — California Housing",
    date: "Sep 2024",
    affiliation: "Stevens Institute of Technology",
    description:
      "Regression on the California Housing dataset, built without ML libraries. I implemented the closed-form normal equation and stochastic gradient descent, plus data splitting, standardization, MSE evaluation, and loss curves.",
    stack: ["Python", "Linear Regression", "SGD", "Statistical Modeling"],
    metrics: ["No ML libraries"],
  },
  {
    id: "lda",
    title: "Fisher's LDA: Heart Disease Prediction",
    date: "Oct 2024",
    affiliation: "Stevens Institute of Technology",
    description:
      "A heart disease classifier on the UCI dataset. I implemented Fisher's LDA from scratch: class means, within-class scatter matrix, projection vector, and a custom decision boundary, evaluated on accuracy, precision, recall, and F1.",
    stack: ["Python", "Linear Algebra", "Dimensionality Reduction"],
    metrics: ["No ML libraries"],
  },
  {
    id: "clv",
    title: "Enhanced Customer Lifetime Value Prediction",
    date: "Nov – Dec 2024",
    affiliation: "Stevens Institute of Technology",
    description:
      "Built an ensemble-based customer lifetime value prediction model to capture nonlinear patterns in customer behavior and support customer segmentation, retention planning, and marketing resource allocation. Evaluated predictive performance using R², MAE, and RMSE, achieving an MAE of 268.07 and RMSE of 2978.58.",
    stack: ["Python", "Stacking Ensemble", "Feature Engineering", "Predictive Modeling"],
    metrics: ["MAE 268.07", "RMSE 2978.58"],
  },
];

export type SkillCategory = {
  category: string;
  icon: string;
  skills: string[];
  groups?: { label: string; skills: string[] }[];
  featured?: boolean;
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages & Databases",
    icon: "Code2",
    featured: true,
    skills: [],
    groups: [
      { label: "Languages", skills: ["Python", "SQL", "Java", "JavaScript", "PHP", "C", "C++", "R"] },
      { label: "Databases", skills: ["MySQL", "PostgreSQL"] },
    ],
  },
  {
    category: "Applied AI & ML",
    icon: "Brain",
    featured: true,
    skills: [],
    groups: [
      {
        label: "GenAI & Retrieval",
        skills: [
          "GenAI & LLMs", "RAG", "Prompt Engineering", "BGE Embeddings", "FAISS", "BM25",
          "Hybrid Search (RRF)", "Cross-Encoder Reranking", "LangChain", "OpenAI API",
          "Pinecone", "Milvus",
        ],
      },
      {
        label: "Models & Methods",
        skills: [
          "Transformers", "Mamba", "NER", "CRF", "PyTorch", "TensorFlow",
          "Hugging Face", "Scikit-learn", "MLOps",
        ],
      },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    skills: ["AWS", "Azure", "GCP", "Docker", "CI/CD", "Git/GitHub"],
  },
  {
    category: "Data Engineering & Analytics",
    icon: "Workflow",
    skills: [
      "Spark", "Databricks", "ETL Pipelines", "Pandas", "NumPy",
      "SQL Optimization", "Power BI", "Tableau",
    ],
  },
  {
    category: "Web & Backend",
    icon: "Globe",
    skills: [
      "REST APIs", "Flask", "Node.js", "React", "HTML/CSS", "Streamlit", "Gradio",
      "Unit Testing", "Code Reviews", "Agile",
    ],
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
    name: "AWS Academy Graduate — Data Engineering",
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
