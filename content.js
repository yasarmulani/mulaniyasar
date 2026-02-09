/*
  content.js
  All textual data for the portfolio lives in this file.
  main.js reads `CONTENT` and populates the DOM. Do not hardcode text elsewhere.
*/

const CONTENT = {
  header: {
    name: "Yasar Mulani",
    role: "Research Software Engineer",
    affiliation: "Qkrishi",
    email: "mulaniyhofficial@gmail.com",
    profileImage: "/assets/profile.jpg",
    institutionLogo: "/assets/institution-logo.png"
  },

  nav: ["About", "Experience", "Research", "Publications", "Projects", "Talks", "Contact"],

  about: {
    bio: `Research Software Engineer with background in quantum optimization,
    LLM reasoning and federated learning. Interested in applying
    computational methods to real-world systems and developing reproducible
    research software.`,
    interests: [
      "Large Language Model Reasoning",
      "Retrieval-Augmented Generation",
      "Quantum Machine Learning",
      "Federated Learning",
      "Uncertainty-Aware NLP"
    ],
    personalInterests: [
      "Screenwriting",
      "Story writing",
      "Filmmaking",
      "Traveling"
    ],
    philosophy: [
      "No one will lift you up regardless of your circumstances; you must carve your own path with the skills you have and the life lessons you learned.",
      "Trust the process, embrace the work, and results will follow."
    ]
  },

  experience: [
     { year: "Jun 2025 – Present", role: "Research Software Engineer", institution: "Qkrishi" },
     { year: "Jan 2024 – Jun 2024", role: "Undergraduate Research Assistant", institution: "CUK" },
     { year: "Oct 2023 – Jun 2024", role: "Research Intern", institution: "Teesside University (UK)" },
     { year: "Jun 2023 – Aug 2023", role: "Summer Intern", institution: "Teesside University (UK)" },
     { year: "Jun 2022 – May 2023", role: "Student Research Assistant", institution: "RIT" },
     { year: "2020 – 2024", role: "B.S. Computer Engineering", institution: "RIT Sangli" }
  ],

  research: [
    "LLM reasoning and consistency-focused evaluation",
    "Quantum-enhanced optimization and QUBO frameworks",
    "Uncertainty-aware NLP & quantum attention mechanisms",
    "Federated learning with continual/ class-incremental setups"
  ],

  publications: [
    {
      title: "Quantum Similarity-Driven QUBO Framework for Multi-Period Supply Chain Allocation using Time-Multiplexed Coherent Ising Machines and Simulated Quantum Annealing",
      authors: "Rushikesh Ubale, Yasar Mulani, Abhay Suresh, Gregory Byrd, Sangram Deshpande, B. R. Nikilesh, Sanya Nanda",
      venue: "arXiv preprint",
      year: 2024
    }
  ],

  projects: {
    completed: [
      "Failure-Oriented Evaluation Suite for LLM Reasoning",
      "Consistency-First Retrieval-Free LLM for Fact-Critical QA",
      "Agentic RAG System with Confidence-Aware Answer Routing",
      "Latency-Constrained Fine-Tuning of Open LLMs for Deployment",
      "Gradient-Regularized Class Incremental Federated Learning (GRCI-FL)"
    ],
    ongoing: [
      "Extracting Informative Quantum Features for Learning",
      "End-to-End Quantum-Enhanced Agriculture Systems",
      "AMRPA: Adaptive Multi-Layer Recursive Preconditioned Attention",
      "Uncertainty-Aware NLP Using Quantum Superposition Attention"
    ]
  },

  talks: {
    invited: [
      "Quantum Optimization for Industry (with L. Venkata Subramaniam)"
    ],
    teaching: [
      "Instructor: Quantum Computing Bootcamp (APSCHE Hackathon)",
      "Invited faculty: Fundamentals of AI & ML — RIT Mechatronics"
    ]
  },

  profiles: {
    github: "https://github.com/yasarmulani",
    scholar: "https://scholar.google.com/citations?user=oVQp4tQAAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/yasar-mulani/"
  }
};

/* Expose CONTENT to the global scope for main.js to use */
window.CONTENT = CONTENT;
