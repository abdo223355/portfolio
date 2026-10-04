import {
  PersonalInfo,
  FeaturedProject,
  CurrentlyBuildingItem,
  SkillCategory,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  LanguageItem
} from '../types';

export const personalData: PersonalInfo = {
  name: "Abdelrahman Mohamed Ezz Eldin",
  title: "AI Engineer",
  focus: [
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "LLMs",
    "Generative AI",
    "Agentic AI"
  ],
  summary: "AI/ML Engineer building practical, end-to-end AI systems across Machine Learning, Deep Learning, LLMs, and Agentic AI. Hands-on experience developing and evaluating machine learning models, applying data science workflows, and integrating intelligent models into functional software products.",
  detailedBio: [
    "I am an early-career AI Engineer focused on turning predictive models and generative architectures into robust, functional software systems. Rather than stopping at exploratory notebooks, my work centers on building reproducible data pipelines, evaluating models with strict statistical rigor, and developing modular AI agent workflows.",
    "My technical trajectory progresses steadily from foundational machine learning and deep learning toward state-of-the-art LLM architectures, Retrieval-Augmented Generation (RAG), and autonomous Agentic AI systems with tool orchestration and persistent state."
  ],
  progressionPhases: [
    {
      phase: "01",
      title: "Machine Learning & Data Science",
      description: "Data preparation, exploratory analysis, leakage-safe feature pipelines, cross-validation, and production-oriented tabular modeling.",
      technologies: ["Python", "Pandas", "Scikit-learn", "XGBoost", "LightGBM"]
    },
    {
      phase: "02",
      title: "Deep Learning & NLP",
      description: "Neural architectures, representation learning, computer vision foundations, and sequence modeling for text processing.",
      technologies: ["PyTorch", "CNNs", "Transformers", "NLP", "Neural Networks"]
    },
    {
      phase: "03",
      title: "LLMs, RAG & Fine-Tuning",
      description: "Contextual retrieval pipelines, prompt optimization, vector index integration, and specialized LLM fine-tuning.",
      technologies: ["LLMs", "RAG", "Prompt Engineering", "Fine-Tuning", "Vector DBs"]
    },
    {
      phase: "04",
      title: "Agentic AI & System Orchestration",
      description: "Multi-agent graph orchestration, Model Context Protocol (MCP) tool integration, persistent memory, and observable decision paths.",
      technologies: ["LangGraph", "LangChain", "MCP", "LangSmith", "Docker"]
    }
  ],
  email: "abdommmezz@gmail.com",
  github: "https://github.com/abdo223355",
  linkedin: "https://www.linkedin.com/in/abdelrhman-mohamed-ezz-44153a2b4", // Configurable
  phone: "01023668945", // Displayed exclusively in the Contact section
  location: "Egypt",
  cvUrl: "/cv.pdf", // Configurable: place cv.pdf in public folder
  cvFileName: "Abdelrahman_Mohamed_Ezz_Eldin_CV.pdf"
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "ai-career-agent",
    title: "AI Career Agent",
    subtitle: "Agentic AI Platform with Multi-Agent Routing & Observability",
    type: "Personal Project",
    year: "2026",
    description: "Engineered a modular AI career assistant with a layered software architecture spanning agent orchestration, retrieval, persistence, tools, configuration, and UI. Implemented multi-agent routing and persistent memory to support context-aware career guidance, with full observability into agent behavior and decision paths.",
    longDescription: "A production-oriented agentic system designed to provide structured, context-aware career advising. It employs LangGraph for stateful cyclical workflow execution, multi-agent router nodes to delegate specific inquiries, persistent memory backends to maintain multi-turn context, custom MCP tools for standardized interface access, and LangSmith integration for granular tracing and evaluation.",
    techStack: [
      "Python",
      "LangChain",
      "LangGraph",
      "RAG",
      "LangSmith",
      "MCP",
      "SQL",
      "Streamlit",
      "Docker"
    ],
    technicalHighlights: [
      "Multi-Agent Graph Orchestration with cyclical state machines and intelligent intent routing",
      "Context-Aware RAG with semantic retrieval over curated domain knowledge",
      "Persistent Session Memory enabling coherent multi-turn reasoning and state preservation",
      "Custom MCP (Model Context Protocol) & SQL Tools for standardized external tool invocation",
      "End-to-End Observability & Tracing integrated via LangSmith to inspect decision paths",
      "Modular Layered Architecture packaged with Docker for reproducible deployment"
    ],
    architectureLayers: [
      { name: "User Interface", details: "Streamlit responsive UI with real-time token streaming and message thread visualization" },
      { name: "Agent Orchestration", details: "LangGraph state graph with dynamic intent classifier and specialized worker subagents" },
      { name: "Retrieval & Knowledge", details: "RAG pipeline with semantic chunking, vector indexing, and relevance re-ranking" },
      { name: "Tools & Protocols", details: "Model Context Protocol (MCP) server endpoints and SQL query execution tools" },
      { name: "State & Memory", details: "Persistent checkpointer saving conversation states across sessions" },
      { name: "Observability", details: "LangSmith instrumentation capturing token latency, tool calls, and execution trees" }
    ],
    githubUrl: "https://github.com/abdo223355",
    demoUrl: "", // Configurable when live demo is hosted
    featuredBadge: "Flagship Agentic System",
    accentColor: "from-cyan-500/20 to-violet-500/20"
  },
  {
    id: "fraud-detection",
    title: "Credit Card Fraud Detection",
    subtitle: "Imbalanced Classification Pipeline with SHAP Explainability",
    type: "Personal Project",
    year: "2026",
    description: "Built an end-to-end fraud detection pipeline using XGBoost on highly imbalanced transaction data, with stratified 5-fold cross-validation, hyperparameter tuning, SHAP explainability, and Streamlit deployment. The results demonstrate strong fraud discrimination while maintaining high precision to help limit unnecessary alerts.",
    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
      "SHAP",
      "Streamlit"
    ],
    metrics: [
      { label: "ROC-AUC", value: "0.967", description: "Discriminative ability across thresholds" },
      { label: "Precision", value: "0.92", description: "Minimizing false fraud alarms" },
      { label: "Recall", value: "0.76", description: "True positive fraud capture rate" },
      { label: "F1-Score", value: "0.83", description: "Harmonic mean of precision & recall" }
    ],
    technicalHighlights: [
      "Imbalanced classification handling using stratified cross-validation and probability threshold tuning",
      "Stratified 5-fold cross-validation to guarantee leak-free performance estimates",
      "Hyperparameter optimization for the optimal precision-recall balance in financial risk",
      "SHAP (SHapley Additive exPlanations) integration to deliver transparent transaction-level interpretability",
      "Streamlit web interface for interactive inference and feature importance inspection"
    ],
    githubUrl: "https://github.com/abdo223355",
    demoUrl: "",
    accentColor: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: "customer-value-prediction",
    title: "Customer Value Prediction",
    subtitle: "Leakage-Safe Feature Engineering & Temporal Modeling",
    type: "Personal Project",
    year: "2026",
    description: "Built a future-based customer value prediction model using time-based splitting and leakage-safe feature engineering to predict high-value customers from historical purchasing behavior. Achieved 91% accuracy, 84% recall, 80% precision, and 82% F1-score using Logistic Regression and Random Forest, supporting potential customer prioritization and targeted marketing use cases.",
    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn"
    ],
    metrics: [
      { label: "Accuracy", value: "91%", description: "Overall classification accuracy" },
      { label: "Recall", value: "84%", description: "Identification of high-value segments" },
      { label: "Precision", value: "80%", description: "Confidence in targeted campaigns" },
      { label: "F1-Score", value: "82%", description: "Balanced performance indicator" }
    ],
    technicalHighlights: [
      "Strict time-based temporal splitting to simulate realistic forward-looking customer prediction",
      "Leakage-safe feature engineering aggregating purchase frequencies, monetary values, and recency",
      "Comparative modeling with Logistic Regression and Random Forest classifiers",
      "Actionable customer tier scoring tailored for business retention and targeted marketing prioritization"
    ],
    githubUrl: "https://github.com/abdo223355",
    demoUrl: "",
    accentColor: "from-violet-500/20 to-indigo-500/20"
  }
];

export const currentlyBuilding: CurrentlyBuildingItem[] = [
  {
    id: "m5-forecasting",
    title: "M5 Forecasting",
    status: "In Progress",
    description: "Large-scale time-series forecasting project involving memory-efficient data processing, Parquet pipelines, lag features, rolling features, and feature engineering.",
    highlights: [
      "Memory-optimized columnar Parquet data pipelines for millions of records",
      "Engineered lag windows, rolling statistics, and temporal calendar features",
      "Evaluation across multi-level hierarchical retail demand structures"
    ],
    tags: ["Time-Series", "Parquet", "Feature Engineering", "Python", "Data Pipelines"]
  },
  {
    id: "mcp-server",
    title: "MCP Server",
    status: "In Progress",
    description: "Practical Model Context Protocol (MCP) server implementation involving SQLite, CRUD operations, MCP Tools, authentication, authorization, and MCP Inspector testing.",
    highlights: [
      "SQLite persistent database layer with strict schema migrations",
      "Standardized MCP tool definitions for AI agents to query and mutate state",
      "Security-first authentication and role-based authorization protocols",
      "Protocol verification and debugging with the official MCP Inspector"
    ],
    tags: ["MCP", "Model Context Protocol", "SQLite", "API Design", "AI Tooling"]
  },
  {
    id: "nlp-issue-classification",
    title: "NLP Issue Classification",
    status: "In Progress",
    description: "NLP project focused on classifying issue reports into categories such as Bug, Enhancement, Question, and Documentation.",
    highlights: [
      "Text preprocessing, tokenization, and vector representation pipelines",
      "Multi-class classification covering Bug, Enhancement, Question, Documentation",
      "Evaluation of transformer-based embeddings vs classical NLP baselines"
    ],
    tags: ["NLP", "Transformers", "Text Classification", "PyTorch", "Python"]
  },
  {
    id: "agentic-ai-project",
    title: "Agentic AI Project",
    status: "Coming Soon",
    description: "Next-generation autonomous multi-agent workflow system exploring collaborative reasoning and tool coordination.",
    highlights: [
      "Autonomous agent collaboration and hierarchical task planning",
      "Tool coordination, environment grounding, and reflection loops"
    ],
    tags: ["Agentic AI", "Multi-Agent", "LangGraph", "Autonomous Systems"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming & Software Engineering",
    description: "Core programming languages, computational foundations, system design, and developer tools.",
    skills: [
      "Python",
      "C++",
      "JavaScript",
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Software Engineering",
      "Software Design",
      "REST APIs",
      "Git",
      "GitHub",
      "Problem Solving"
    ]
  },
  {
    id: "ml-ds",
    title: "Machine Learning & Data Science",
    description: "Statistical modeling, exploratory analysis, feature extraction, and predictive algorithms.",
    skills: [
      "Machine Learning",
      "Data Science",
      "Statistics",
      "Feature Engineering",
      "Model Evaluation",
      "Scikit-learn",
      "XGBoost",
      "LightGBM"
    ]
  },
  {
    id: "dl-nlp",
    title: "Deep Learning & NLP",
    description: "Neural network architectures, deep representation learning, and natural language understanding.",
    skills: [
      "Deep Learning",
      "PyTorch",
      "Neural Networks",
      "CNNs",
      "Transformers",
      "NLP"
    ]
  },
  {
    id: "genai-agents",
    title: "Generative AI & Agentic AI",
    description: "Large Language Models, semantic search, agent orchestration, and modern LLM tool protocols.",
    skills: [
      "LLMs",
      "Fine-Tuning",
      "RAG",
      "Prompt Engineering",
      "Agentic AI",
      "AI Agents",
      "LangChain",
      "LangGraph",
      "MCP"
    ]
  },
  {
    id: "cloud-mlops",
    title: "Cloud, Deployment & MLOps",
    description: "Cloud infrastructure, containerization, deployment pipelines, and database management.",
    skills: [
      "AWS",
      "Docker",
      "MLOps",
      "Model Deployment",
      "Cloud Computing",
      "Streamlit",
      "SQL"
    ]
  },
  {
    id: "soft-skills",
    title: "Professional & Soft Skills",
    description: "Collaborative execution, critical inquiry, and commitment to technical growth.",
    skills: [
      "Critical Thinking",
      "Communication & Collaboration",
      "Adaptability & Continuous Learning"
    ]
  }
];

export const experiences: ExperienceItem[] = [
  {
    id: "depi-aws",
    role: "AWS Machine Learning Trainee",
    organization: "Digital Egypt Pioneers Initiative (DEPI)",
    period: "Aug 2026 – Present",
    location: "Egypt",
    responsibilities: [
      "Applied machine learning concepts through hands-on exercises and practical workflows.",
      "Worked with AWS-based machine learning concepts and cloud-oriented AI workflows.",
      "Developed practical understanding of preparing data, training models, evaluating models, and integrating ML workflows in cloud environments.",
      "Practiced building and evaluating machine learning solutions within an AWS-focused environment."
    ],
    tags: ["AWS", "Machine Learning", "Cloud AI", "Model Training", "ML Workflows"]
  },
  {
    id: "dotpy-trainee",
    role: "Machine Learning, Data Science & AI Agents Trainee",
    organization: "DotPy",
    period: "Mar 2026 – Present",
    location: "Egypt",
    responsibilities: [
      "Developed and evaluated machine learning models through hands-on projects covering data preparation, feature engineering, training, and evaluation.",
      "Applied data science workflows to real-world datasets, including preprocessing, exploratory analysis, and visualization.",
      "Implemented AI agent concepts and explored agent-based workflows for building intelligent applications.",
      "Practiced solving project-based problems using Python-based machine learning and data science tools."
    ],
    tags: ["AI Agents", "Data Science", "Machine Learning", "Feature Engineering", "Python"]
  },
  {
    id: "nti-trainee",
    role: "Data Science & AI Trainee",
    organization: "National Telecommunication Institute (NTI)",
    period: "Aug 2025 – Sep 2025",
    duration: "120 Hours",
    location: "Egypt",
    responsibilities: [
      "Applied Python-based data science techniques using NumPy and Pandas for data manipulation and analysis.",
      "Explored and analyzed datasets through data cleaning, preprocessing, exploratory data analysis, and visualization.",
      "Built dashboards and visual reports to communicate insights from analyzed datasets.",
      "Developed and evaluated machine learning models as part of practical training projects."
    ],
    tags: ["Data Science", "Pandas", "NumPy", "EDA", "Dashboards", "ML Evaluation"]
  }
];

export const education: EducationItem = {
  degree: "Bachelor of Science in Artificial Intelligence & Data Science",
  faculty: "Faculty of Computers and Artificial Intelligence",
  institution: "Beni-Suef National University",
  graduationYear: "Expected Graduation: 2027",
  gpa: "3.4 / 4.0",
  location: "Egypt",
  coreDisciplines: [
    "Artificial Intelligence Foundations",
    "Machine Learning & Statistical Methods",
    "Data Structures & Algorithm Design",
    "Database Systems & SQL",
    "Software Engineering Principles",
    "Applied Mathematics & Linear Algebra"
  ]
};

export const certifications: CertificationItem[] = [
  {
    id: "cert-dataquest",
    title: "Data Science",
    issuer: "Dataquest.io",
    year: "2026",
    credentialUrl: "", // Configurable
    verificationUrl: "", // Configurable
    isConfigurable: true
  },
  {
    id: "cert-google",
    title: "Google Data Analytics",
    issuer: "Google",
    year: "2026",
    credentialUrl: "", // Configurable
    verificationUrl: "", // Configurable
    isConfigurable: true
  },
  {
    id: "cert-ibm",
    title: "Machine Learning",
    issuer: "IBM",
    year: "2026",
    credentialUrl: "", // Configurable
    verificationUrl: "", // Configurable
    isConfigurable: true
  }
];

export const languages: LanguageItem[] = [
  {
    language: "Arabic",
    proficiency: "Native",
    nativeNote: "Mother Tongue"
  },
  {
    language: "English",
    proficiency: "B2 (Upper-Intermediate)",
    nativeNote: "Professional Working Proficiency"
  }
];
