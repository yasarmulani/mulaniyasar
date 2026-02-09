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
      status: "Preprint",
      year: 2024
    }
  ],

  projects: [
    {
      title: "Failure-Oriented Evaluation Suite for LLM Reasoning",
      subtitle: "Robustness Testing for Large Language Models",
      status: "Completed",
      image: "https://placehold.co/600x338/e2e8f0/1e293b?text=LLM+Eval",
      content: `
        <p class="mb-4">Development of a comprehensive suite designed to stress-test LLM reasoning capabilities.By focusing on failure modes, we can better understand the limitations of current generation models.</p>
        <h3 class="text-lg font-bold text-slate-800 mb-2">Key Features</h3>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Automated adversarial prompt generation</li>
          <li>Consistency metrics across multiple reasoning paths</li>
          <li>Integration with popular model APIs</li>
        </ul>
        <div class="my-6">
           <img src="https://placehold.co/800x400/f1f5f9/475569?text=System+Architecture" alt="Architecture" class="rounded shadow-sm w-full" />
           <p class="text-sm text-slate-500 mt-2 text-center">System architecture diagram showing the evaluation pipeline.</p>
        </div>
        <p>This project resulted in a significant improvement in identifying edge cases where models hallucinate or fail to follow logical constraints.</p>
      `
    },
    {
      title: "Consistency-First Retrieval-Free LLM for Fact-Critical QA",
      subtitle: "Improving Reliability in Question Answering",
      status: "Completed",
      image: "https://placehold.co/600x338/e2e8f0/1e293b?text=Consistency+LLM",
      content: `
        <p class="mb-4">A novel approach to Question Answering that prioritizes self-consistency without relying on external retrieval mechanisms during inference.</p>
        <p>The model is fine-tuned to express uncertainty when internal knowledge is insufficient, reducing the rate of confident hallucinations.</p>
      `
    },
    {
      title: "Agentic RAG System with Confidence-Aware Answer Routing",
      subtitle: "Next-Gen Retrieval Augmented Generation",
      status: "Completed",
      image: "https://placehold.co/600x338/e2e8f0/1e293b?text=Agentic+RAG",
      content: `
        <p class="mb-4">Built an agent-based system that dynamically decides whether to use a RAG pipeline or answer directly based on confidence scores.</p>
        <h3 class="text-lg font-bold text-slate-800 mb-2">Outcomes</h3>
        <ul class="list-disc pl-5 mb-4">
          <li>Reduced latency for simple queries by 40%</li>
          <li>Improved accuracy on tail-knowledge queries</li>
        </ul>
      `
    },
    {
      title: "Latency-Constrained Fine-Tuning of Open LLMs",
      subtitle: "Efficient Deployment Strategies",
      status: "Completed",
      image: "https://placehold.co/600x338/e2e8f0/1e293b?text=Fine-Tuning",
      content: `
        <p class="mb-4">Optimization of open-source LLMs (Llama 2, Mistral) to meet strict latency requirements for real-time edge deployment while maintaining reasoning performance.</p>
      `
    },
    {
      title: "Gradient-Regularized Class Incremental Federated Learning",
      subtitle: "Privacy-Preserving Machine Learning",
      status: "Completed",
      image: "https://placehold.co/600x338/e2e8f0/1e293b?text=Federated+Learning",
      content: `
        <p class="mb-4">Proposed GRCI-FL, a method to mitigate catastrophic forgetting in class-incremental federated learning scenarios using gradient regularization.</p>
      `
    },
    {
      title: "Extracting Informative Quantum Features for Learning",
      subtitle: "Quantum Machine Learning",
      status: "Ongoing",
      image: "https://placehold.co/600x338/e2e8f0/1e293b?text=Quantum+Features",
      content: `
        <p class="mb-4">Researching methods to extract quantum features that provide a genuine advantage over classical features in kernel-based learning tasks.</p>
      `
    },
    {
      title: "End-to-End Quantum-Enhanced Agriculture Systems",
      subtitle: "Applied Quantum Computing",
      status: "Ongoing",
      image: "https://placehold.co/600x338/e2e8f0/1e293b?text=Agri+Quantum",
      content: `
        <p class="mb-4">Developing a hybrid quantum-classical framework to optimize resource allocation in large-scale agriculture systems.</p>
      `
    },
    {
      title: "AMRPA: Adaptive Multi-Layer Recursive Preconditioned Attention",
      subtitle: "Advanced Neural Architectures",
      status: "Ongoing",
      image: "https://placehold.co/600x338/e2e8f0/1e293b?text=AMRPA",
      content: `
        <p class="mb-4">Novel attention mechanism design improving long-context handling in transformers with better computational efficiency.</p>
      `
    },
    {
      title: "Uncertainty-Aware NLP Using Quantum Superposition",
      subtitle: "Quantum NLP",
      status: "Ongoing",
      image: "https://placehold.co/600x338/e2e8f0/1e293b?text=Quantum+NLP",
      content: `
        <p class="mb-4">Leveraging quantum superposition principles to model semantic ambiguity and uncertainty in Natural Language Processing tasks.</p>
      `
    }
  ],

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

export default CONTENT;
