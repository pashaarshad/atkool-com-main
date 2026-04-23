"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface FormData {
  schoolName: string;
  boardType: string;
  adminName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  city: string;
  state: string;
  studentCount: string;
  agreeTerms: boolean;
}

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>({
    schoolName: "",
    boardType: "",
    adminName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    city: "",
    state: "",
    studentCount: "",
    agreeTerms: false,
  });

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // In production, this would call the API
    console.log("Registration Data:", formData);
    setSubmitted(true);
  };

  const nextStep = () => setStep(2);
  const prevStep = () => setStep(1);

  if (submitted) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "var(--gradient-hero)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card"
          style={{
            padding: 48,
            textAlign: "center",
            maxWidth: 480,
            width: "100%",
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "var(--gradient-gold)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
              fontSize: "2rem",
            }}
          >
            🎉
          </div>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.75rem",
              fontWeight: 800,
              marginBottom: 12,
            }}
          >
            Registration Successful!
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1rem",
              lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            Welcome to ATKool, <strong>{formData.schoolName}</strong>! We&apos;ve
            sent a confirmation email to <strong>{formData.email}</strong>. Our
            team will contact you within 24 hours to complete the setup.
          </p>
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--gradient-hero)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative */}
      <div
        className="glow-orb glow-orb-blue"
        style={{ width: 500, height: 500, top: "-10%", right: "-5%" }}
      />
      <div
        className="glow-orb glow-orb-gold"
        style={{ width: 400, height: 400, bottom: "-5%", left: "-5%" }}
      />

      <div
        className="container-main"
        style={{
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "center",
          minHeight: "100vh",
          paddingTop: 48,
          paddingBottom: 48,
        }}
      >
        {/* Left — Branding */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ padding: "40px 0" }}
        >
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
              marginBottom: 40,
            }}
          >
            <Image
              src="/logo.jpeg"
              alt="ATKool"
              width={48}
              height={48}
              className="rounded-lg"
            />
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.6rem",
                fontWeight: 800,
                color: "var(--text-primary)",
              }}
            >
              AT<span style={{ color: "var(--accent-blue)" }}>KOOL</span>
            </span>
          </Link>

          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: 20,
            }}
          >
            Register Your{" "}
            <span className="gradient-text">School Today</span>
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              maxWidth: 460,
              marginBottom: 40,
            }}
          >
            Join the ATKool ecosystem and unlock powerful tools for attendance
            management, grade tracking, parent communication, and more.
          </p>

          {/* Benefits */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              {
                icon: "⚡",
                title: "Quick Setup",
                desc: "Get started in under 30 minutes",
              },
              {
                icon: "🔒",
                title: "Secure & Private",
                desc: "Enterprise-grade data protection",
              },
              {
                icon: "📱",
                title: "Mobile Ready",
                desc: "Android app for teachers & parents",
              },
              {
                icon: "💰",
                title: "Free Trial",
                desc: "30 days free, no credit card needed",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "var(--radius-sm)",
                    background: "rgba(59,130,246,0.1)",
                    border: "1px solid var(--border-glass)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.2rem",
                    flexShrink: 0,
                  }}
                >
                  {benefit.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      color: "var(--text-primary)",
                    }}
                  >
                    {benefit.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    {benefit.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div
            className="glass-card"
            style={{
              padding: "40px 36px",
              borderRadius: "var(--radius-xl)",
            }}
          >
            {/* Progress Indicator */}
            <div
              style={{
                display: "flex",
                gap: 8,
                marginBottom: 32,
              }}
            >
              {[1, 2].map((s) => (
                <div
                  key={s}
                  style={{
                    flex: 1,
                    height: 4,
                    borderRadius: "var(--radius-full)",
                    background:
                      s <= step
                        ? "var(--accent-blue)"
                        : "rgba(59,130,246,0.15)",
                    transition: "background 0.3s ease",
                  }}
                />
              ))}
            </div>

            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.5rem",
                fontWeight: 800,
                marginBottom: 8,
              }}
            >
              {step === 1 ? "School Details" : "Admin Account"}
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.9rem",
                marginBottom: 28,
              }}
            >
              {step === 1
                ? "Tell us about your institution"
                : "Set up your administrator account"}
            </p>

            <form onSubmit={handleSubmit}>
              {step === 1 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ display: "flex", flexDirection: "column", gap: 20 }}
                >
                  {/* School Name */}
                  <div>
                    <label className="input-label" htmlFor="schoolName">
                      School Name *
                    </label>
                    <input
                      id="schoolName"
                      name="schoolName"
                      type="text"
                      className="input-field"
                      placeholder="e.g. Delhi Public School"
                      value={formData.schoolName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Board Type */}
                  <div>
                    <label className="input-label" htmlFor="boardType">
                      Board / Curriculum *
                    </label>
                    <select
                      id="boardType"
                      name="boardType"
                      className="input-field"
                      value={formData.boardType}
                      onChange={handleChange}
                      required
                      style={{ cursor: "pointer" }}
                    >
                      <option value="">Select Board</option>
                      <option value="CBSE">CBSE</option>
                      <option value="ICSE">ICSE</option>
                      <option value="State Board">State Board</option>
                      <option value="IB">International Baccalaureate</option>
                      <option value="Cambridge">Cambridge (IGCSE)</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* City & State */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 16,
                    }}
                  >
                    <div>
                      <label className="input-label" htmlFor="city">
                        City *
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        className="input-field"
                        placeholder="e.g. Bangalore"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="input-label" htmlFor="state">
                        State *
                      </label>
                      <input
                        id="state"
                        name="state"
                        type="text"
                        className="input-field"
                        placeholder="e.g. Karnataka"
                        value={formData.state}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Student Count */}
                  <div>
                    <label className="input-label" htmlFor="studentCount">
                      Approximate Student Count
                    </label>
                    <select
                      id="studentCount"
                      name="studentCount"
                      className="input-field"
                      value={formData.studentCount}
                      onChange={handleChange}
                      style={{ cursor: "pointer" }}
                    >
                      <option value="">Select range</option>
                      <option value="1-100">1 – 100</option>
                      <option value="101-500">101 – 500</option>
                      <option value="501-1000">501 – 1,000</option>
                      <option value="1001-5000">1,001 – 5,000</option>
                      <option value="5000+">5,000+</option>
                    </select>
                  </div>

                  <button
                    type="button"
                    className="btn-primary"
                    onClick={nextStep}
                    style={{
                      width: "100%",
                      marginTop: 8,
                      padding: "16px",
                      fontSize: "1rem",
                    }}
                  >
                    Continue to Admin Setup
                    <svg
                      width="18"
                      height="18"
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
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ display: "flex", flexDirection: "column", gap: 20 }}
                >
                  {/* Admin Name */}
                  <div>
                    <label className="input-label" htmlFor="adminName">
                      Admin Full Name *
                    </label>
                    <input
                      id="adminName"
                      name="adminName"
                      type="text"
                      className="input-field"
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.adminName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="input-label" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="input-field"
                      placeholder="admin@yourschool.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="input-label" htmlFor="phone">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="input-field"
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Password */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 16,
                    }}
                  >
                    <div>
                      <label className="input-label" htmlFor="password">
                        Password *
                      </label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        className="input-field"
                        placeholder="Min 8 characters"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        minLength={8}
                      />
                    </div>
                    <div>
                      <label className="input-label" htmlFor="confirmPassword">
                        Confirm Password *
                      </label>
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        className="input-field"
                        placeholder="Re-enter password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        minLength={8}
                      />
                    </div>
                  </div>

                  {/* Agree Terms */}
                  <label
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                      cursor: "pointer",
                    }}
                  >
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      required
                      style={{
                        marginTop: 3,
                        accentColor: "var(--accent-blue)",
                        width: 18,
                        height: 18,
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--text-muted)",
                        lineHeight: 1.5,
                      }}
                    >
                      I agree to ATKool&apos;s{" "}
                      <a
                        href="#"
                        style={{
                          color: "var(--accent-blue-light)",
                          textDecoration: "underline",
                        }}
                      >
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        style={{
                          color: "var(--accent-blue-light)",
                          textDecoration: "underline",
                        }}
                      >
                        Privacy Policy
                      </a>
                    </span>
                  </label>

                  {/* Buttons */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "auto 1fr",
                      gap: 12,
                      marginTop: 8,
                    }}
                  >
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={prevStep}
                      style={{ padding: "16px 24px" }}
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="btn-gold"
                      style={{ padding: "16px", fontSize: "1rem" }}
                    >
                      🚀 Register School
                    </button>
                  </div>
                </motion.div>
              )}
            </form>

            {/* Login link */}
            <div
              style={{
                textAlign: "center",
                marginTop: 24,
                fontSize: "0.9rem",
                color: "var(--text-muted)",
              }}
            >
              Already have an account?{" "}
              <a
                href="#"
                style={{
                  color: "var(--accent-blue-light)",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Log in here
              </a>
            </div>
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
  );
}
