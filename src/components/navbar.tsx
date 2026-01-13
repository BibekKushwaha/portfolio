"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./toggletmode";
import { RESUME_URL } from "@/constants";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-51 w-full transition-all duration-300 ${
        scrolled
          ? "border-b bg-background/70 shadow-sm backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div>

        <Link
          href="/"
          className="group text-xl font-extrabold tracking-tight text-foreground"
        >
          Bibek Kumar Mahato
          <span className="text-primary transition group-hover:text-primary/80">
            .
          </span>
        </Link>
        
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name} className="relative">
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>

                {/* Animated underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ${
                    isActive ? "scale-x-100" : "group-hover:scale-x-100"
                  }`}
                />
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={RESUME_URL}
            target="_blank"
            className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground shadow transition hover:shadow-lg hover:scale-[1.03]"
          >
            Resume
          </Link>
          <ModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <ul className="flex flex-col space-y-5 px-6 py-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-primary"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <Link
              href={RESUME_URL}
              target="_blank"
              className="rounded-full bg-primary px-5 py-2 text-center text-sm font-semibold text-primary-foreground"
            >
              Resume
            </Link>


          </ul>
        </div>
      )}
    </header>
  );
}
