"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const features = [
  {
    icon: "📋",
    title: "Smart Attendance",
    description:
      "Real-time digital attendance tracking with instant parent notifications, analytics dashboards, and automated absence reporting.",
    image: "/feature-attendance.png",
    gradient: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
  },
  {
    icon: "📊",
    title: "Grade Management",
    description:
      "Comprehensive exam & grade management with automatic GPA calculation, report card generation, and performance trend analysis.",
    image: "/feature-parent.png",
    gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Parent Portal",
    description:
      "Give parents real-time visibility into their child's attendance, grades, schedules, and school announcements via our mobile app.",
    image: "/feature-attendance.png",
    gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
  },
  {
    icon: "🏫",
    title: "Admin Dashboard",
    description:
      "Powerful Super Admin and School Admin panels for managing teachers, classes, timetables, fees, and institution-wide analytics.",
    image: "/feature-parent.png",
    gradient: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
  },
  {
    icon: "📱",
    title: "Mobile App",
    description:
      "Native Android app for teachers to mark attendance and for parents to monitor their children — all synced in real time.",
    image: "/feature-attendance.png",
    gradient: "linear-gradient(135deg, #EC4899 0%, #DB2777 100%)",
  },
  {
    icon: "🔒",
    title: "Secure & Scalable",
    description:
      "Enterprise-grade security with role-based access control, encrypted data storage, and cloud infrastructure built for thousands of users.",
    image: "/feature-parent.png",
    gradient: "linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="section-padding"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Decorative */}
      <div
        className="glow-orb glow-orb-blue"
        style={{ width: 400, height: 400, top: "20%", right: "-8%" }}
      />

      <div className="container-main" style={{ position: "relative", zIndex: 2 }}>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="section-badge" style={{ margin: "0 auto 16px" }}>
              <span>⚡</span> Powerful Features
            </div>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Everything Your School{" "}
              <span className="gradient-text">Needs to Thrive</span>
            </h2>
            <p
              className="section-subtitle"
              style={{ margin: "0 auto", textAlign: "center" }}
            >
              From attendance to analytics, ATKool provides a complete suite of
              tools designed for modern educational institutions.
            </p>
          </motion.div>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: 24,
          }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="glass-card"
              style={{
                padding: 32,
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top Glow Line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: feature.gradient,
                  borderRadius: "var(--radius-lg) var(--radius-lg) 0 0",
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "var(--radius-md)",
                  background: `${feature.gradient}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  marginBottom: 20,
                  boxShadow: `0 8px 20px ${feature.gradient.includes("#3B82F6") ? "rgba(59,130,246,0.3)" : "rgba(245,158,11,0.3)"}`,
                }}
              >
                {feature.icon}
              </div>

              {/* Text */}
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  marginBottom: 12,
                  color: "var(--text-primary)",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.7,
                }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
