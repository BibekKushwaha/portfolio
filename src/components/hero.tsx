"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Button clicked!");
    
    const projectsSection = document.getElementById("projects");
    console.log("Projects section found:", projectsSection);
    
    if (projectsSection) {
      // Add some offset to account for any fixed headers
      const yOffset = -80; // Adjust this value as needed
      const yPosition = projectsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      console.log("Scrolling to position:", yPosition);
      window.scrollTo({
        top: yPosition,
        behavior: "smooth"
      });
    } else {
      console.log("Projects section not found");
      // Fallback: try to find it after a short delay
      setTimeout(() => {
        const retrySection = document.getElementById("projects");
        if (retrySection) {
          const yOffset = -80;
          const yPosition = retrySection.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({
            top: yPosition,
            behavior: "smooth"
          });
        }
      }, 500);
    }
  };
  return (
    <section className=" relative overflow-hidden bg-background bg-linear-to-br 
        from-indigo-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950">
      {/* Subtle Grid */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(#d1d5db_1px,transparent_1px)]
          dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]
          [background-size:24px_24px]
          opacity-40
        "
      />

      {/* Gradient Blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-indigo-500/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-purple-500/30 blur-3xl" />
      {/* Gradient background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-primary/20 via-purple-500/10 to-pink-500/10 blur-[140px]" />
        <div className="absolute right-[-10%] bottom-1/4 h-[400px] w-[400px] rounded-full bg-gradient-to-l from-primary/10 via-blue-500/10 to-cyan-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid items-center gap-20 md:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
              Full Stack Software Engineer
            </p>

            {/* Gradient Heading */}
           <h1 className="mt-6 text-4xl font-semibold leading-tight text-gray-900 dark:text-white sm:text-5xl">
              Designing and building{" "}
              <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                reliable, scalable
              </span>{" "}
              software systems
            </h1>

            {/* Gradient divider */}
            <div className="mt-6 h-[3px] w-24 rounded-full bg-gradient-to-r from-primary via-purple-500 to-pink-500" />

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I’m{" "}
              <span className="font-medium text-foreground">
                Bibek Kumar Mahato
              </span>
              , a software engineer focused on designing scalable, reliable,
              and user-centric web applications using modern JavaScript
              frameworks and cloud technologies.
            </p>

             <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              React · Next.js · Node.js · Hono · TypeScript · PostgreSQL · AWS · Cloudflare
            </p>


            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4 relative z-50">
              <button
                onClick={scrollToProjects}
                className="rounded-md bg-linear-to-r from-primary to-purple-600 px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:opacity-90 pointer-events-auto cursor-pointer"
              >
                View Projects
              </button>

              <Link
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2
                  rounded-md bg-indigo-600 px-7 py-3
                  text-sm font-medium text-white
                  shadow-xl shadow-indigo-600/30
                  hover:bg-indigo-500  dark:text-gray-300 hover:underline"
              >
                Download Resume
              </Link>
            </div>
          </div>

          {/* RIGHT CODE CARD */}
          <div className="relative hidden md:block">
            <div className="rounded-xl border border-border bg-muted/80 p-6 shadow-xl backdrop-blur">
              <div className="mb-3 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-green-500/70" />
              </div>

              <pre className="text-m leading-relaxed text-muted-foreground">
  {`export const engineer = {
    name: "Bibek Kumar Mahato",
    role: "Software Engineer",
    education: "B.Tech (CGPA: 8.64)",
    experience: "Scalable Microservices & Web Apps",
    stack: [
      "Next.js","React","Node.js","Hono","TypeScript",
      "PostgreSQL","MongoBd","MySQL"
    ],
    cloud: ["AWS", "Docker", "Kafka"],
    achievements: "350+ DSA problems solved"
  };`}
  </pre>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
