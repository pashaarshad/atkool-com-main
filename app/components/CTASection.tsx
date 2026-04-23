"use client";

import { motion } from "framer-motion";

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
            borderRadius: "var(--radius-xl)",
            background:
              "linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(245,158,11,0.05) 50%, rgba(16,185,129,0.05) 100%)",
            border: "1px solid rgba(59,130,246,0.2)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "center",
          }}
        >
          {/* Left Text */}
          <div>
            <div className="section-badge" style={{ marginBottom: 16 }}>
              <span>🚀</span> Get in Touch
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
                marginBottom: 40,
                lineHeight: 1.7,
              }}
            >
              Contact our team today to learn how ATKool can streamline your
              operations, improve attendance, and keep parents connected.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ fontSize: "1.5rem" }}>📞</div>
                <div>
                  <div style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Call Us Directly</div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)" }}>+91 98765 43210</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ fontSize: "1.5rem" }}>📧</div>
                <div>
                  <div style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Email Support</div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)" }}>hello@atkool.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form (Non-functional as requested) */}
          <div style={{ background: "rgba(10, 22, 40, 0.4)", padding: "32px", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-glass)" }}>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label className="input-label">Full Name</label>
                <input type="text" className="input-field" placeholder="John Doe" />
              </div>
              <div>
                <label className="input-label">School Name</label>
                <input type="text" className="input-field" placeholder="Delhi Public School" />
              </div>
              <div>
                <label className="input-label">Phone Number</label>
                <input type="tel" className="input-field" placeholder="+91 98765 43210" />
              </div>
              <div>
                <label className="input-label">Message</label>
                <textarea className="input-field" rows={4} placeholder="How can we help you?" style={{ resize: "vertical" }}></textarea>
              </div>
              <button type="button" className="btn-gold" style={{ width: "100%", marginTop: 8 }}>
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
