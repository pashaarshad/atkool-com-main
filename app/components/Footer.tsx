"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#" },
      { label: "Mobile App", href: "#" },
    ],
    Company: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
    Support: [
      { label: "Help Center", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  };

  return (
    <footer
      id="contact"
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border-glass)",
        paddingTop: 64,
        paddingBottom: 32,
      }}
    >
      <div className="container-main">
        {/* Top Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-3 no-underline"
              style={{ marginBottom: 20, display: "inline-flex" }}
            >
              <Image
                src="/logo.jpeg"
                alt="ATKool Logo"
                width={40}
                height={40}
                className="rounded-lg"
                style={{ objectFit: "contain" }}
              />
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.4rem",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                }}
              >
                AT<span style={{ color: "var(--accent-blue)" }}>KOOL</span>
              </span>
            </Link>
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--text-muted)",
                lineHeight: 1.7,
                maxWidth: 300,
                marginBottom: 20,
              }}
            >
              Learn. Grow. Succeed. — Transforming school management with
              intelligent technology for a brighter educational future.
            </p>
            {/* Social Icons */}
            <div style={{ display: "flex", gap: 12 }}>
              {["Twitter", "LinkedIn", "YouTube", "Instagram"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "var(--radius-sm)",
                      background: "rgba(59,130,246,0.08)",
                      border: "1px solid var(--border-glass)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-muted)",
                      fontSize: "0.8rem",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      fontWeight: 600,
                    }}
                    title={social}
                  >
                    {social[0]}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "var(--text-primary)",
                  marginBottom: 20,
                }}
              >
                {title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {links.map((link) => (
                  <li key={link.label} style={{ marginBottom: 12 }}>
                    <a
                      href={link.href}
                      style={{
                        color: "var(--text-muted)",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color =
                          "var(--accent-blue-light)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text-muted)")
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider" style={{ marginBottom: 24 }} />

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            © {currentYear} ATKool. All rights reserved.
          </p>
          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
            Made with 💙 for better education
          </p>
        </div>
      </div>

      {/* Responsive */}
      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 2fr 1fr 1fr 1fr"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          div[style*="grid-template-columns: 2fr 1fr 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
