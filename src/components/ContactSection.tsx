'use client';

import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';


import React, { useState } from 'react';


interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (loading) return;

  setLoading(true);

  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to_email: 'kushwahabibek33@gmail.com',
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    setSuccess(true);
    toast.success('Message sent successfully 🚀');

    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setSuccess(false), 3000);
  } catch (error) {
    console.error(error);
    toast.error('Failed to send message ❌');
  } finally {
    setLoading(false);
  }
};


  const contactDetails = [
    {
      label: 'Email',
      value: 'kushwahabibek33@gmail.com',
      href: 'mailto:kushwahabibek33@gmail.com',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      label: 'GitHub',
      value: 'github.com/BibekKushwaha',
      href: 'https://github.com/BibekKushwaha',
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/bibek-kushwaha',
      href: 'https://linkedin.com/in/bibek-kushwaha',
      icon: (
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black transition-colors duration-500"
    >

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#111',
            color: '#fff',
          },
        }}
      />
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 dark:bg-blue-900/10 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 dark:bg-purple-900/10 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl w-full">
        {/* Section header with animation */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 px-4 py-2 rounded-full">
              Get In Touch
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Building the future, one line of code at a time
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Contact info */}
          <div className="space-y-8 animate-fadeInLeft">
            {/* Professional pitch */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Full-Stack Software Engineer
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I specialize in building scalable, production-grade systems and modern web applications. 
                With expertise in Next.js, React, TypeScript, and Node.js, I bring ideas to life through 
                clean architecture and innovative solutions.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                From microservices to event-driven architectures, I thrive on solving complex problems 
                and delivering software that makes an impact.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4 pt-4">
              {contactDetails.map((detail, index) => (
                <a
                  key={detail.label}
                  href={detail.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    {detail.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {detail.label}
                    </p>
                    <p className="text-gray-900 dark:text-white font-medium truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {detail.value}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              ))}
            </div>

            {/* Availability note */}
            <div className="pt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-900/30">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">Available for opportunities:</span> Open to full-time roles, 
                  internships, and freelance projects. Let's create something amazing together.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div className="animate-fadeInRight">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-8 rounded-3xl bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-900/30 border border-gray-200 dark:border-gray-800 backdrop-blur-sm"
            >
              <div className="space-y-6">
                {/* Name input */}
                <div className="relative">
                  <label
                    htmlFor="name"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      focusedField === 'name' || formData.name
                        ? '-top-2.5 text-xs bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-900/30 px-2 text-blue-600 dark:text-blue-400'
                        : 'top-4 text-base text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-4 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none transition-all duration-200 focus:shadow-lg"
                    required
                  />
                </div>

                {/* Email input */}
                <div className="relative">
                  <label
                    htmlFor="email"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      focusedField === 'email' || formData.email
                        ? '-top-2.5 text-xs bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-900/30 px-2 text-blue-600 dark:text-blue-400'
                        : 'top-4 text-base text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-4 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none transition-all duration-200 focus:shadow-lg"
                    required
                  />
                </div>

                {/* Message textarea */}
                <div className="relative">
                  <label
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                      focusedField === 'message' || formData.message
                        ? '-top-2.5 text-xs bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900/50 dark:to-gray-900/30 px-2 text-blue-600 dark:text-blue-400'
                        : 'top-4 text-base text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={6}
                    className="w-full px-4 py-4 rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none transition-all duration-200 resize-none focus:shadow-lg"
                    required
                  />
                </div>
              </div>

              {/* Submit button */}
             <button
                type="submit"
                disabled={loading}
                className={`group relative w-full px-8 py-4 font-semibold rounded-xl shadow-lg transform transition-all duration-200 overflow-hidden
                  ${
                    success
                      ? 'bg-green-600 scale-105'
                      : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:scale-105'
                  }
                  ${loading ? 'opacity-70 cursor-not-allowed' : ''}
                `}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {loading ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : success ? (
                    <>
                      Message Sent
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </span>
              </button>

            </form>
          </div>
        </div>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
