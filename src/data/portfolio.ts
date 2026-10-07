export const profile = {
  name: "Subban Khan",
  title: "Full Stack + AI Engineer",
  tagline: "4+ Years Experience",
  email: "subbankhan96@gmail.com",
  phone: "+91 7568262629",
  location: "Jaipur, Rajasthan (Open to Remote)",
  summary:
    "Full Stack + AI Engineer with 4+ years of experience designing and building scalable, production-grade applications across the MERN stack — from RESTful APIs and microservices on the backend to responsive, user-facing interfaces on the frontend. Strong expertise in Node.js, React.js, and real-time communication systems (Socket.io, WebRTC), along with hands-on AI/LLM integration using OpenAI, Anthropic Claude, AWS Bedrock, RAG pipelines and vector databases. Proven track record shipping multiple live mobile and web applications end-to-end while collaborating remotely with cross-functional, cross-timezone teams.",
  linkedin: "https://www.linkedin.com/in/subban-khan-494966228/",
};

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "HTML5", "CSS3", "SASS/SCSS"],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "FastAPI",
      "RESTful API Design",
      "Microservices Architecture",
      "Socket.io",
      "WebRTC",
      "GraphQL",
      "Webhooks",
    ],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "React Native",
      "Redux Toolkit",
      "Next.js",
      "Tailwind CSS",
      "Material-UI",
      "Bootstrap",
    ],
  },
  {
    category: "AI & LLM Integration",
    items: [
      "OpenAI API (GPT-4o, GPT-4o-mini)",
      "Anthropic Claude API",
      "AWS Bedrock",
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "Prompt Engineering",
      "Function Calling / Tool Use",
    ],
  },
  {
    category: "RAG & Vector Databases",
    items: ["Retrieval-Augmented Generation (RAG)", "Pinecone", "Embeddings (OpenAI, HuggingFace)"],
  },
  {
    category: "State Management",
    items: ["Redux", "Context API", "Zustand"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Prisma"],
  },
  {
    category: "Message Brokers",
    items: ["Kafka", "Redis", "RabbitMQ"],
  },
  {
    category: "APIs",
    items: ["RESTful APIs", "GraphQL", "WebSockets", "Socket.io", "SOAP APIs"],
  },
  {
    category: "System Design",
    items: ["Microservices", "Monolithic Architecture", "NGINX", "Load Balancing", "API Gateway"],
  },
  {
    category: "Auth & Security",
    items: ["OAuth", "JWT", "Role-Based Access Control (RBAC)", "API Security"],
  },
  {
    category: "Testing & Debugging",
    items: ["Jest", "React Testing Library", "PyTest", "Chrome DevTools", "Postman"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "AWS (EC2, S3, Bedrock)", "CI/CD (GitHub Actions)", "Linux", "Nginx"],
  },
  {
    category: "Version Control",
    items: ["Git", "GitHub", "GitLab"],
  },
];

export const currentlyExpanding = ["NestJS Microservices", "Advanced GraphQL", "Webhooks"];

export const experience = [
  {
    role: " Full Stack + AI  Engineer ",
    company: "Freelance",
    period: "Current",
    points: [
      "Working independently with clients to design, build, and ship full-stack web and mobile applications end-to-end using the MERN stack.",
      "Delivering RESTful APIs and backend services with Node.js and Express.js, paired with responsive React.js interfaces.",
      "Integrating AI/LLM features into client applications using OpenAI, Claude and AWS Bedrock, including RAG pipelines with vector databases.",
      "Managing projects from requirements through deployment, handling architecture, integrations, and client communication directly.",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "Next Big Technology, Jaipur",
    period: "Previous",
    points: [
      "Developed and maintained full-stack features end-to-end — RESTful APIs and backend services using Node.js and Express.js, paired with responsive React.js interfaces.",
      "Designed MongoDB data models and integrations to support efficient storage and retrieval for web applications.",
      "Built and integrated front-end components with server-side logic, ensuring smooth end-to-end functionality across the stack.",
      "Contributed to the design of scalable microservices architecture for enterprise-grade applications.",
    ],
  },
];

export type StoreLink = { label: "iOS" | "Android" | "Web"; url: string };

export type Project = {
  name: string;
  description?: string;
  period?: string;
  links: StoreLink[];
  featured?: boolean;
};

export const mobileProjects: Project[] = [
  {
    name: "Xtrafyl — Customer",
    description: "Customer-facing app for the Xtrafyl mobility platform.",
    links: [
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.xtrafylcustomer" },
      { label: "iOS", url: "https://apps.apple.com/us/app/xtrafyl/id6757584838" },
    ],
  },
  {
    name: "Xtrafyl — Driver",
    description: "Driver-side companion app for the Xtrafyl mobility platform.",
    links: [
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.xtrafyldriver" },
      { label: "iOS", url: "https://apps.apple.com/us/app/xtrafyl-driver/id6757585425" },
    ],
  },
  {
    name: "Travlo",
    description: "Travel booking and planning mobile experience.",
    links: [
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.travlo" },
      { label: "iOS", url: "https://apps.apple.com/in/app/travlo/id6738392849" },
    ],
  },
  {
    name: "Intercambio Inmobiliario",
    description: "Real-estate exchange platform for the Latin American market.",
    links: [
      {
        label: "Android",
        url: "https://play.google.com/store/apps/details?id=com.intercambio.inmobiliario",
      },
      { label: "iOS", url: "https://apps.apple.com/gt/app/intercambio-inmobiliario/id1624068664" },
    ],
  },
  {
    name: "Zenbase",
    description: "Meditate-to-earn wellness app.",
    links: [{ label: "iOS", url: "https://apps.apple.com/in/app/zenbase-meditate-to-earn/id1619530022" }],
  },
  {
    name: "Bloop — AI Social Network",
    description: "AI-powered social networking application.",
    featured: true,
    links: [
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.makeablooper" },
      { label: "iOS", url: "https://apps.apple.com/in/app/bloop-the-ai-social-network/id6752389728" },
    ],
  },
  {
    name: "Red Pocket Mobile",
    description: "Mobile carrier account management app.",
    links: [{ label: "Android", url: "https://play.google.com/store/apps/details?id=com.redpocket" }],
  },
  {
    name: "Boatflex",
    description: "Boat rental and marketplace platform.",
    links: [
      { label: "Android", url: "https://play.google.com/store/apps/details?id=com.boatflexaps" },
      { label: "iOS", url: "https://apps.apple.com/in/app/boatflex/id1563762907" },
    ],
  },
  {
    name: "Rapid Pair Portal",
    description: "Pairing and portal management mobile app.",
    links: [
      {
        label: "Android",
        url: "https://play.google.com/store/apps/details?id=com.rapid_pair_portal",
      },
      { label: "iOS", url: "https://apps.apple.com/in/app/rapid-pair-portal/id6743496437" },
    ],
  },
];

export const webProjects: Project[] = [
  {
    name: "Lucidia",
    links: [{ label: "Web", url: "https://lucidia.vercel.app/" }],
  },
  {
    name: "NextERP",
    links: [{ label: "Web", url: "https://nexterp-murex.vercel.app/login" }],
  },
  {
    name: "Xtrafyl",
    links: [{ label: "Web", url: "https://xtrafyl.com/" }],
  },
  {
    name: "Optimal Rating",
    links: [{ label: "Web", url: "https://optimalrating.com/" }],
  },
  {
    name: "Jockey Driver Challenge",
    links: [{ label: "Web", url: "https://jockeydriverchallenge.com/" }],
  },
  {
    name: "Tasky.ae",
    links: [{ label: "Web", url: "https://tasky.ae/" }],
  },
  {
    name: "Noonmar",
    links: [{ label: "Web", url: "https://noonmar.com/" }],
  },
  {
    name: "Vantage Commercial Realty",
    links: [{ label: "Web", url: "https://vantagecr.com/" }],
  },
];

export const interests = ["Photography", "Traveling", "Graphic Designing", "Blogging", "Cooking"];
