const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Learning",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  // { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 5, suffix: "+", label: "Completed Projects" },
  // { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Version Control",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Version Control",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    id: "hostara-saas-2025",
    review:
      "A solid full-stack implementation of a SaaS-grade Airbnb clone. Backend structure and feature integration were handled with clarity and depth.",
    imgPath: "/images/hostara.png",
    logoPath: "/images/hostara.png",
    title: "Full Stack Developer – Hostara (Airbnb Clone)",
    date: "June 2025 – July 2025",
    responsibilities: [
      "Built a complete Airbnb-style rental app using EJS, Express, MongoDB, and Node.js.",
      "Designed a clean backend architecture with proper MVC patterns and RESTful routes.",
      "Implemented features like authentication, booking flow, image uploads, and reviews.",
      "Gained experience in creating scalable backend structure suitable for SaaS products.",
    ],
  },
  {
    id: "resume-ai-optimizer-2025",
    review:
      "An impressive integration of frontend, backend, and AI. Demonstrated maturity in handling data flow and API integration in a production-grade tool.",
    imgPath: "/images/resume.png",
    logoPath: "/images/resume.png",
    title: "MERN Developer – Resume Optimizer AI Tool",
    date: "July 2025 – August 2025",
    responsibilities: [
      "Developed a resume optimization tool that uses AI to improve resume content and formatting.",
      "Integrated React frontend with Express backend using robust API architecture.",
      "Handled user input, file parsing, and real-time feedback with effective state management.",
      "Implemented OpenAI/GPT-based logic to analyze and suggest resume improvements.",
    ],
  },
  {
    id: "streetly-food-frontend-2025",
    review:
      "Streetly showcases my ability to build polished UIs with interactivity and design finesse. The chatbot and dynamic menu bring it to life.",
    imgPath: "/images/streetly.png",
    logoPath: "/images/streetly.png",
    title: "Frontend Developer – Streetly (Street Food Website)",
    date: "August 2025 – September 2025",
    responsibilities: [
      "Built the frontend using React 18 + Vite, implementing a responsive design across breakpoints.",
      "Created an interactive chatbot to respond to menu queries, pricing, location, and timings.",
      "Displayed dynamic menu & pricing components (food + beverages) using data-driven React structure.",
      "Handled smooth scrolling, transitions, animations, and cross-browser UI consistency.",
      "Ensured mobile-first responsiveness and performance optimization for various device widths.",
    ],
  },
  {
    id: "personal-portfolio-2025",
    review:
      "A pixel-perfect 3D portfolio with excellent use of animation libraries. Performance-focused and visually engaging — the work of a polished frontend dev.",
    imgPath: "/images/fav.png",
    logoPath: "/images/fav.png",
    title: "Frontend Developer – 3D Portfolio Website",
    date: "April 2025 – May 2025",
    responsibilities: [
      "Designed and developed a personal portfolio using React, TailwindCSS, and GSAP.",
      "Integrated Three.js to create interactive 3D elements for a dynamic user experience.",
      "Applied smooth scroll animations and performance optimization techniques.",
      "Deployed using Vercel with CI/CD pipeline for rapid iteration and updates.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialInfos = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/bhavesh_solminde/",
  },
  {
    name: "github",
    imgPath: "/images/github.png",
    url: "https://github.com/Bhavesh-Solminde",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/bhaveshsolminde/",
  },
];

export {
  words,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialInfos,
  techStackIcons,
  techStackImgs,
  navLinks,
};
