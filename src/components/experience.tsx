"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "./titleHeader";
import GlowCard from "./glowCard";

gsap.registerPlugin(ScrollTrigger);

/* ---------- Types ---------- */

type ExperienceCard = {
  review: string;
  title: string;
  imgPath: string;
  logoPath: string;
  date: string;
  responsibilities: string[];
};

/* ---------- Component ---------- */

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    gsap.utils.toArray<HTMLElement>(".timeline").forEach((timeline) => {
      gsap.to(timeline, {
        transformOrigin: "bottom bottom",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: timeline,
          start: "top center",
          end: "70% center",
          onUpdate: (self) => {
            gsap.to(timeline, {
              scaleY: 1 - self.progress,
            });
          },
        },
      });
    });


    gsap.utils.toArray<HTMLElement>(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    });
    // ScrollTrigger.refresh();

  }, []);

  return (
    <section
      id="experience"
      className="flex-center w-full   section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />

        <div className="mt-20 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card: ExperienceCard,index) => (
              <div
                key={card.title}
                // className="exp-card-wrapper timeline-card"
                className="exp-card-wrapper "
              >
                <div className="xl:w-2/6">
                  <GlowCard card={card} index={index}>
                    <img src={card.imgPath} alt="exp-img" />
                  </GlowCard>
                </div>

                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>

                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt="logo" className="object-fill"/>
                      </div>

                      <div>
                        <h1 className="font-semibold text-3xl">
                          {card.title}
                        </h1>

                        <p className="my-5 text-gray-500 dark:text-gray-400">
                          🗓️ {card.date}
                        </p>

                        <p className="italic  text-gray-400">
                          {/* text-[#839cb5] */}
                          Responsibilities
                        </p>

                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-gray-600 dark:text-gray-300">
                          {card.responsibilities.map(
                            (item: string, index: number) => (
                              <li key={index} className="text-lg">
                                {item}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
