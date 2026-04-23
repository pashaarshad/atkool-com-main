"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const ParticleBackground = dynamic(
  () => import("./ParticleBackground"),
  { ssr: false }
);

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "var(--gradient-hero)",
      }}
    >
      {/* Three.js Background */}
      <ParticleBackground />

      {/* Decorative Glow Orbs */}
      <div
        className="glow-orb glow-orb-blue"
        style={{ width: 500, height: 500, top: "-10%", right: "-10%" }}
      />
      <div
        className="glow-orb glow-orb-gold"
        style={{ width: 400, height: 400, bottom: "5%", left: "-5%" }}
      />

      {/* Content */}
      <div
        className="container-main"
        style={{
          position: "relative",
          zIndex: 10,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
          paddingTop: "120px",
          paddingBottom: "80px",
        }}
      >
        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="section-badge">
            <span style={{ fontSize: "1rem" }}>🎓</span>
            Next-Gen School Management
          </div>

          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            Empower Your School{" "}
            <span className="gradient-text">With Intelligence</span>
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              maxWidth: 540,
              marginBottom: 40,
            }}
          >
            ATKool is the all-in-one SaaS platform that revolutionises
            attendance tracking, grade management, parent communication, and
            school administration — so educators can focus on what matters most.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="tel:+919876543210" className="btn-primary" style={{ fontSize: "1.05rem", padding: "16px 36px" }}>
              Contact Us
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <a href="#features" className="btn-secondary" style={{ fontSize: "1.05rem", padding: "16px 36px" }}>
              Explore Features
            </a>
          </div>

          {/* Trust bar */}
          <div
            style={{
              marginTop: 48,
              display: "flex",
              gap: 32,
              flexWrap: "wrap",
            }}
          >
            {[
              { number: "500+", label: "Schools" },
              { number: "1M+", label: "Students" },
              { number: "99.9%", label: "Uptime" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: "var(--accent-blue-light)",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — Dashboard Image */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="animate-float-slow"
          style={{ position: "relative" }}
        >
          <div
            className="glass-card"
            style={{
              padding: 8,
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
            }}
          >
            <Image
              src="/hero-dashboard.png"
              alt="ATKool Dashboard Preview"
              width={640}
              height={440}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "var(--radius-lg)",
              }}
              priority
            />
          </div>

          {/* Floating mini-card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="glass-card"
            style={{
              position: "absolute",
              bottom: -20,
              left: -30,
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              borderRadius: "var(--radius-md)",
            }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                background: "var(--gradient-gold)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem",
              }}
            >
              ✓
            </div>
            <div>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "var(--text-primary)",
                }}
              >
                Live Attendance
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "var(--accent-gold)",
                }}
              >
                98.5% Accuracy
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Responsive Override */}
      <style jsx>{`
        @media (max-width: 768px) {
          section > div:nth-child(3) {
            grid-template-columns: 1fr !important;
            padding-top: 100px !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
