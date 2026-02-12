"use client";

import { useState } from "react";

const navLinks = [
  { label: ".is()", href: "#hero" },
  { label: ".about()", href: "#hero" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-5 py-4 md:px-8 md:py-5">
        {/* Logo - left */}
        <a
          href="#"
          className="font-mono text-sm tracking-tight text-primary transition-colors hover:text-primary/80"
          aria-label="Bahruz Mammadly - Home"
        >
          .dev()
        </a>

        {/* Desktop nav - right */}
        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs tracking-tight text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://linkedin.com/in/bahruzmammadly"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile of Bahruz Mammadly"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <i className="fa-brands fa-linkedin text-base" aria-hidden="true" />
          </a>
          <a
            href="https://github.com/bahruzmammadly"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile of Bahruz Mammadly"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <i className="fa-brands fa-github text-base" aria-hidden="true" />
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="flex h-10 w-10 items-center justify-center text-muted-foreground transition-colors hover:text-foreground md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <i className="fa-solid fa-xmark text-xl" aria-hidden="true" />
          ) : (
            <i
              className="fa-solid fa-ellipsis-vertical text-xl"
              aria-hidden="true"
            />
          )}
        </button>
      </div>

      {/* Mobile fullscreen menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col bg-background transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        role="dialog"
        aria-modal={menuOpen}
        aria-label="Navigation menu"
        aria-hidden={!menuOpen}
      >
        {/* Mobile top bar */}
        <div className="flex items-center justify-between px-5 py-4">
          <a
            href="#"
            className="font-mono text-sm tracking-tight text-primary"
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
            aria-label="Home"
          >
            .dev()
          </a>
          <button
            className="flex h-10 w-10 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? 0 : -1}
            aria-label="Close menu"
          >
            <i className="fa-solid fa-xmark text-xl" aria-hidden="true" />
          </button>
        </div>

        {/* Mobile nav items - bottom right, large text */}
        <nav
          className="flex flex-1 flex-col items-end justify-end gap-2 px-6 pb-8"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-5xl font-bold text-muted-foreground/40 transition-colors hover:text-foreground"
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 flex items-center gap-6">
            <a
              href="https://linkedin.com/in/bahruzmammadly"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-primary transition-colors hover:text-primary/80"
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
            >
              <i
                className="fa-brands fa-linkedin text-3xl"
                aria-hidden="true"
              />
            </a>
            <a
              href="https://github.com/bahruzmammadly"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-primary transition-colors hover:text-primary/80"
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
            >
              <i
                className="fa-brands fa-github text-3xl"
                aria-hidden="true"
              />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
