"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Contact Our Team",
    description:
      "Get in touch with us. We will quickly set up your school details, admin credentials, and configure your institution's profile.",
    icon: "🏫",
    color: "#3B82F6",
  },
  {
    step: "02",
    title: "Configure & Customize",
    description:
      "Add teachers, create classes, set up timetables, and customize attendance rules and grading schemes to your school's needs.",
    icon: "⚙️",
    color: "#F59E0B",
  },
  {
    step: "03",
    title: "Go Live & Track",
    description:
      "Start tracking attendance in real time, manage grades, and let parents stay connected through the mobile app instantly.",
    icon: "🚀",
    color: "#10B981",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section-padding"
      style={{
        position: "relative",
        background: "var(--bg-secondary)",
        overflow: "hidden",
      }}
    >
      {/* Decorative */}
      <div
        className="glow-orb glow-orb-gold"
        style={{ width: 350, height: 350, bottom: "-10%", right: "10%" }}
      />

      <div className="container-main" style={{ position: "relative", zIndex: 2 }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="section-badge" style={{ margin: "0 auto 16px" }}>
              <span>🔄</span> Simple Process
            </div>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Get Started in{" "}
              <span className="gradient-text">Three Easy Steps</span>
            </h2>
            <p
              className="section-subtitle"
              style={{ margin: "0 auto", textAlign: "center" }}
            >
              From sign-up to full deployment in under 30 minutes. No complex
              setup required.
            </p>
          </motion.div>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
            position: "relative",
          }}
        >
          {/* Connector line */}
          <div
            style={{
              position: "absolute",
              top: 50,
              left: "16.66%",
              right: "16.66%",
              height: 2,
              background:
                "linear-gradient(90deg, #3B82F6, #F59E0B, #10B981)",
              opacity: 0.3,
              zIndex: 0,
            }}
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              style={{
                textAlign: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Step Number Circle */}
              <div
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  background: `rgba(${step.color === "#3B82F6" ? "59,130,246" : step.color === "#F59E0B" ? "245,158,11" : "16,185,129"}, 0.1)`,
                  border: `2px solid ${step.color}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  position: "relative",
                }}
              >
                <span style={{ fontSize: "2.5rem" }}>{step.icon}</span>
                <div
                  style={{
                    position: "absolute",
                    top: -8,
                    right: -8,
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: step.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800,
                    fontSize: "0.75rem",
                    color: step.color === "#F59E0B" ? "#0A1628" : "#fff",
                  }}
                >
                  {step.step}
                </div>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  marginBottom: 12,
                  color: "var(--text-primary)",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                  maxWidth: 320,
                  margin: "0 auto",
                }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Responsive */}
        <style jsx>{`
          @media (max-width: 768px) {
            div[style*="grid-template-columns: repeat(3"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
