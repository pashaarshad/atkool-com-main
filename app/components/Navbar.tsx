"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Why ATKool", href: "#why-atkool" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "top-0 py-3"
          : "top-4 py-5"
      }`}
      style={{
        background: scrolled
          ? "rgba(10, 22, 40, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(59, 130, 246, 0.12)"
          : "1px solid transparent",
      }}
    >
      <div className="container-main flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <Image
            src="/logo.jpeg"
            alt="ATKool Logo"
            width={44}
            height={44}
            className="rounded-lg"
            style={{ objectFit: "contain" }}
          />
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            AT<span style={{ color: "var(--accent-blue)" }}>KOOL</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: "var(--text-secondary)",
                fontWeight: 500,
                fontSize: "0.95rem",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent-blue-light)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="btn-secondary" style={{ padding: "10px 22px", fontSize: "0.9rem" }}>
            Login
          </a>
          <Link href="/register" className="btn-primary" style={{ padding: "10px 22px", fontSize: "0.9rem" }}>
            Register School
          </Link>
        </div>

        {/* Mobile Burger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
          }}
          aria-label="Toggle menu"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
            <span
              style={{
                width: 24,
                height: 2,
                background: "var(--text-primary)",
                borderRadius: 4,
                transition: "all 0.3s",
                transform: mobileOpen
                  ? "rotate(45deg) translateY(7px)"
                  : "none",
              }}
            />
            <span
              style={{
                width: 24,
                height: 2,
                background: "var(--text-primary)",
                borderRadius: 4,
                transition: "all 0.3s",
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                width: 24,
                height: 2,
                background: "var(--text-primary)",
                borderRadius: 4,
                transition: "all 0.3s",
                transform: mobileOpen
                  ? "rotate(-45deg) translateY(-7px)"
                  : "none",
              }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: "rgba(10, 22, 40, 0.95)",
              backdropFilter: "blur(20px)",
              borderTop: "1px solid var(--border-glass)",
            }}
          >
            <div className="container-main" style={{ padding: "24px" }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "block",
                    padding: "12px 0",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    fontSize: "1.1rem",
                    fontWeight: 500,
                    borderBottom: "1px solid var(--border-glass)",
                  }}
                >
                  {link.label}
                </a>
              ))}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  marginTop: 16,
                }}
              >
                <a href="#contact" className="btn-secondary" style={{ justifyContent: "center" }}>
                  Login
                </a>
                <Link
                  href="/register"
                  className="btn-primary"
                  style={{ justifyContent: "center" }}
                  onClick={() => setMobileOpen(false)}
                >
                  Register School
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
