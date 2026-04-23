"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section
      className="section-padding"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--bg-secondary)",
      }}
    >
      <div
        className="glow-orb glow-orb-blue"
        style={{ width: 600, height: 600, top: "-30%", left: "50%", transform: "translateX(-50%)" }}
      />
      <div
        className="glow-orb glow-orb-gold"
        style={{ width: 300, height: 300, bottom: "-10%", right: "10%" }}
      />

      <div className="container-main" style={{ position: "relative", zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card"
          style={{
            padding: "64px 48px",
            textAlign: "center",
            borderRadius: "var(--radius-xl)",
            background:
              "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(245,158,11,0.05) 50%, rgba(16,185,129,0.05) 100%)",
            border: "1px solid rgba(59,130,246,0.2)",
          }}
        >
          <div className="section-badge" style={{ margin: "0 auto 16px" }}>
            <span>🚀</span> Get Started Today
          </div>

          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              lineHeight: 1.2,
              marginBottom: 20,
            }}
          >
            Ready to Transform{" "}
            <span className="gradient-text">Your School?</span>
          </h2>

          <p
            style={{
              fontSize: "1.15rem",
              color: "var(--text-secondary)",
              maxWidth: 600,
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            Join hundreds of schools already using ATKool to streamline
            operations, improve attendance, and keep parents connected.
          </p>

          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/register"
              className="btn-gold"
              style={{ fontSize: "1.1rem", padding: "16px 40px" }}
            >
              Register Your School — Free
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <a
              href="#contact"
              className="btn-secondary"
              style={{ fontSize: "1.1rem", padding: "16px 40px" }}
            >
              Contact Sales
            </a>
          </div>

          {/* Trust line */}
          <div
            style={{
              marginTop: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            {[
              "✅ No Credit Card Required",
              "✅ Setup in 30 Minutes",
              "✅ Free Trial Available",
            ].map((text) => (
              <span
                key={text}
                style={{
                  fontSize: "0.9rem",
                  color: "var(--text-muted)",
                  fontWeight: 500,
                }}
              >
                {text}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
