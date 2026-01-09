'use client';

import { useEffect, useRef, useState } from 'react';

// Type definitions
interface Skill {
  name: string;
  level?: 'core' | 'proficient' | 'familiar';
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

// Skills data organized by category
const skillsData: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: '{ }',
    skills: [
      { name: 'JavaScript (ES6+)', level: 'core' },
      { name: 'TypeScript', level: 'core' },
      { name: 'C', level: 'proficient' },
      { name: 'C++', level: 'proficient' },
      { name: 'Java', level: 'proficient' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: '⚛',
    skills: [
      { name: 'React', level: 'core' },
      { name: 'Next.js', level: 'core' },
      { name: 'Node.js', level: 'core' },
      { name: 'Express', level: 'proficient' },
      { name: 'Hono', level: 'proficient' },
      { name: 'Tailwind CSS', level: 'core' },
      { name: 'Shadcn UI', level: 'proficient' },
    ],
  },
  {
    title: 'Databases',
    icon: '◉',
    skills: [
      { name: 'PostgreSQL', level: 'core' },
      { name: 'MySQL', level: 'proficient' },
      { name: 'MongoDB', level: 'proficient' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁',
    skills: [
      { name: 'AWS (EC2, RDS, S3, Cognito)', level: 'core' },
      { name: 'Cloudflare', level: 'proficient' },
      { name: 'Docker', level: 'proficient' },
      { name: 'GitHub Actions', level: 'proficient' },
    ],
  },
  {
    title: 'Messaging & Caching',
    icon: '⚡',
    skills: [
      { name: 'Apache Kafka', level: 'proficient' },
      { name: 'Redis', level: 'proficient' },
    ],
  },
  {
    title: 'Tools',
    icon: '⚙',
    skills: [
      { name: 'Git', level: 'core' },
      { name: 'VS Code', level: 'core' },
      { name: 'Postman', level: 'proficient' },
      { name: 'Prisma', level: 'proficient' },
      { name: 'Razorpay API', level: 'proficient' },
    ],
  },
];

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors duration-300"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-100 dark:bg-blue-950/20 rounded-full blur-3xl opacity-30 dark:opacity-20" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-100 dark:bg-purple-950/20 rounded-full blur-3xl opacity-30 dark:opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-gray-100 dark:via-gray-300 dark:to-gray-100">
            Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies I work with
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillsData.map((category, categoryIndex) => (
            <SkillCategoryCard
              key={category.title}
              category={category}
              index={categoryIndex}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Skill Category Card Component
interface SkillCategoryCardProps {
  category: SkillCategory;
  index: number;
  isVisible: boolean;
}

function SkillCategoryCard({
  category,
  index,
  isVisible,
}: SkillCategoryCardProps) {
  return (
    <div
      className={`group relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 hover:-translate-y-1">
        {/* Category header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xl font-bold shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
            {category.icon}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {category.title}
          </h3>
        </div>

        {/* Skills list */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, skillIndex) => (
            <SkillBadge
              key={skill.name}
              skill={skill}
              index={skillIndex}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Skill Badge Component
interface SkillBadgeProps {
  skill: Skill;
  index: number;
  isVisible: boolean;
}

function SkillBadge({ skill, index, isVisible }: SkillBadgeProps) {
  const isCore = skill.level === 'core';

  return (
    <span
      className={`group/badge relative inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-500 cursor-default ${
        isCore
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md hover:shadow-xl hover:shadow-blue-500/50 dark:hover:shadow-blue-500/30 hover:scale-105'
          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-750 hover:scale-105'
      } ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
      style={{
        transitionDelay: `${index * 50}ms`,
      }}
    >
      {/* Glow effect on hover for core skills */}
      {isCore && (
        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/badge:opacity-20 blur-lg transition-opacity duration-300" />
      )}
      
      <span className="relative z-10">{skill.name}</span>
      
      {/* Core skill indicator */}
      {isCore && (
        <span className="relative z-10 ml-1.5 w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
      )}
    </span>
  );
}
