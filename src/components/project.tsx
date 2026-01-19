"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "./titleHeader";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const rydeRef = useRef<HTMLDivElement | null>(null);
  const libraryRef = useRef<HTMLDivElement | null>(null);
  const ycDirectoryRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [
      rydeRef.current,
      libraryRef.current,
      ycDirectoryRef.current,
    ];

    cards.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="projects" ref={sectionRef} className="pt-4 md:pt-6">
      <TitleHeader 
          title="Projects"
          sub="A showcase of my recent works and collaborations"
      />
    <div className="app-showcase">
        

      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
            <Link href="https://github.com/BibekKushwaha/enterprise-rental-app" target="_blank" >

              <img src="/realstate.png" alt="Ryde App Interface" className="object-fill"/>
              </Link>
            </div>
            <div className="text-content">
              <h2>
                Enterprise Rental App
              </h2>
              <p className="text-white-50 md:text-xl">
                A comprehensive rental application designed for enterprises to manage their rental properties efficiently. Built with Next.js and Tailwind CSS for a responsive and user-friendly interface, it features robust backend support using Node.js and Postgres database, ensuring seamless data management and scalability.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
            <Link href="https://github.com/BibekKushwaha/Job-Portal" target="_blank" >

                <img
                  src="/project1.png"
                  alt="Job Platform"
                />
                </Link>
              </div>
              <h2>The Job Platform</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <Link href="https://github.com/BibekKushwaha/Blog-hono-" target="_blank" >

                <img src="/blog.png" alt="Blog Platform" />
                </Link>
              </div>
              <h2>The Blog Platform</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;
