"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reasons = [
  {
    title: "Built for Indian Schools",
    description:
      "Designed specifically for Indian education standards with support for CBSE, ICSE, and State Board grading systems.",
    icon: "🇮🇳",
  },
  {
    title: "Lightning Fast",
    description:
      "Cloud-native architecture ensures blazing fast response times, even with thousands of concurrent users.",
    icon: "⚡",
  },
  {
    title: "24/7 Support",
    description:
      "Dedicated support team available round the clock to help with setup, training, and troubleshooting.",
    icon: "🛟",
  },
  {
    title: "Affordable Pricing",
    description:
      "Flexible SaaS pricing that scales with your school. No hidden charges, no long-term contracts.",
    icon: "💎",
  },
];

export default function WhyAtkool() {
  return (
    <section
      id="why-atkool"
      className="section-padding"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div
        className="glow-orb glow-orb-blue"
        style={{ width: 500, height: 500, top: "10%", left: "-12%" }}
      />

      <div className="container-main" style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
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
                src="/feature-parent.png"
                alt="ATKool Parent Mobile App"
                width={560}
                height={400}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "var(--radius-lg)",
                }}
              />
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-badge">
              <span>🏆</span> Why Choose Us
            </div>
            <h2 className="section-title">
              Why Schools{" "}
              <span className="gradient-text">Love ATKool</span>
            </h2>
            <p
              className="section-subtitle"
              style={{ marginBottom: 40 }}
            >
              Trusted by hundreds of institutions across the country, ATKool
              delivers reliability, performance, and peace of mind.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 20,
              }}
            >
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  style={{
                    padding: 20,
                    borderRadius: "var(--radius-md)",
                    background: "var(--gradient-card)",
                    border: "1px solid var(--border-glass)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div style={{ fontSize: "1.75rem", marginBottom: 10 }}>
                    {reason.icon}
                  </div>
                  <h4
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: "1rem",
                      marginBottom: 6,
                      color: "var(--text-primary)",
                    }}
                  >
                    {reason.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Responsive */}
        <style jsx>{`
          @media (max-width: 768px) {
            div[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
