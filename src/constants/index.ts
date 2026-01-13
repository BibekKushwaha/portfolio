







// Cache-busting for resume PDF - increment this version when resume is updated
export const RESUME_VERSION = "1";
export const RESUME_URL = `/resume.pdf?v=${RESUME_VERSION}`;


export const expCards = [
  {
    review:
      "Built a production-grade rental management platform with secure authentication, cloud deployment, and a scalable full-stack architecture.",
    // imgPath: "/images/enterprise-rental.png",
    logoPath: "/logos/Enterprise.png",
    title: "Full-Stack Engineer | Enterprise Rental App",
    date: "2024",
    responsibilities: [
      "Developed a full-stack rental management platform with property listings, tenant bookings, and landlord dashboards.",
      "Implemented secure authentication and role-based access control using AWS Cognito.",
      "Designed and built REST APIs using Node.js and TypeScript.",
      "Deployed backend services on AWS EC2 with PostgreSQL (RDS) and integrated S3 for storage.",
      "Built a responsive, scalable UI using Next.js, React, Tailwind CSS, and Shadcn UI.",
    ],
  },
  {
    review:
      "Designed and implemented a scalable microservices-based job platform using event-driven architecture and modern backend technologies.",
    // imgPath: "/images/job-platform.png",
    logoPath: "/logos/jobportal.png",
    title: "Full-Stack Engineer (Backend-Focused) | Job Platform",
    date: "2024",
    responsibilities: [
      "Designed and developed a microservices-based job portal for job seekers and recruiters.",
      "Built 5+ independent services communicating via Apache Kafka (event-driven architecture).",
      "Implemented authentication, authorization, and multi-account user flows.",
      "Integrated Redis for caching and performance optimization.",
      "Added Razorpay subscription system, email notifications, and password reset workflows.",
      "Containerized services using Docker and followed clean service boundaries.",
    ],
  },
  {
    review:
      "Built a serverless blogging platform optimized for edge runtimes, focusing on performance, reliability, and cloud-native best practices.",
    // imgPath: "/images/blog-platform.png",
    logoPath: "/logos/Blog.png",
    title: "Full-Stack Engineer (Backend-Focused) | Blog Platform",
    date: "2025",
    responsibilities: [
      "Built a serverless blogging backend using Hono, Prisma ORM, and Cloudflare Workers.",
      "Designed REST APIs optimized for edge runtimes and low-latency execution.",
      "Handled Prisma v7.x breaking changes and edge-runtime constraints.",
      "Implemented authentication, secure API routes, and database schema design.",
      "Integrated backend services with a Next.js frontend for full-stack functionality.",
    ],
  },
];





export const companies = [
  {
    id: 1,
    name: "AWS",
    img: "logos/Amazon.svg.png",
    nameImg: "/awsName.svg",
  },
  {
    id: 2,
    name: "Next.js",
    img: "/next.jpeg",
    nameImg: "/nextName.svg",
  },
  {
    id: 3,
    name: "Node.js",
    img: "/node.svg",
    nameImg: "/nodeName.svg",
  },
  {
    id: 4,
    name: "PostgreSQL",
    img: "/postgres.svg",
    nameImg: "/postgresName.svg",
  },
 
];



export const About = [
  {
    id: 1,
    title: "Full-Stack Web Developer",
    desc: "Built production-grade web applications using React, Next.js, Hono, Node.js and TypeScript, focusing on clean UI architecture, responsive design, and maintainable Web Application code.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Backend & API Engineer",
    desc: "Developed scalable backend services and REST APIs using Node.js, Express, and Hono, implementing authentication, role-based access control, and business logic.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Cloud & Database Engineer",
    desc: "Designed and implemented cloud infrastructure solutions using AWS, Docker along with database design and optimization using PostgreSQL and MongoDB.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
  },
  {
    id: 4,
    title: "Scalable Systems & Problem Solving",
    desc: "Designed scalable systems using microservices and event-driven architecture with Apache Kafka, and strengthened problem-solving skills by solving 350+ DSA challenges.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];




