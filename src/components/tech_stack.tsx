import React from "react";
import { About } from "../constants";
import { Button } from "./ui/moving-border";

const TechStack = () => {
  return (
    <section className="pt-10 w-full" id="about">
      <h1 className="heading">
        About <span className="text-purple">US</span>
      </h1>

      <div className="w-full mt-12 md:px-20 px-5 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {About.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 14000}
            borderRadius="1.75rem"
            className="
              bg-white/80 dark:bg-[#04071d] shadow-2xl
              border-3 border-neutral-200 dark:border-slate-800
              text-neutral-900 dark:text-white
            "
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-4 md:p-6 lg:p-10 gap-3 transition-transform duration-300 group-hover:-translate-y-0.5">
              {/* <img
                src={card.thumbnail}
                alt={card.title}
                className="lg:w-32 md:w-20 w-16"
              /> */}

              <div className="lg:ms-5">
                <h2 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h2>
                <p className="text-start text-neutral-600 dark:text-neutral-300 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
