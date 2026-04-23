# 🧠 ATKool-COM-main: Project Memory & Documentation

This document is the definitive source of truth for the **ATKool Main Website** (atkool.com). This is the public-facing marketing & registration site for the ATKool ecosystem.

---

## 🏗️ 1. Project Overview
- **Product:** ATKool Main Website — Landing page + School Registration portal.
- **Purpose:** Public website at `atkool.com` — the entry point for new schools to discover and register for the ATKool platform.
- **Framework:** Next.js 16 (App Router) with TypeScript.
- **Styling:** Tailwind CSS v4 + Custom CSS Design System.
- **3D Effects:** Three.js (via @react-three/fiber + @react-three/drei).
- **Animations:** Framer Motion.
- **Database:** MongoDB (shared with atkool-website ecosystem).

---

## 🌐 2. Architecture & Ecosystem

### **Domain Strategy**
| Domain | App | Description |
|--------|-----|-------------|
| `atkool.com` | **atkool-com-main** (this project) | Landing page + Registration |
| `admin.atkool.com` (TBD) | atkool-website | Super Admin + School Admin dashboards |
| Mobile App | atkool-fultter-app | Parent + Student + Teacher (Flutter) |

### **Tech Stack**
- **Runtime:** Node.js (Next.js 16)
- **Language:** TypeScript
- **CSS:** Tailwind CSS v4 + Custom design system (`globals.css`)
- **3D:** Three.js, @react-three/fiber, @react-three/drei
- **Animations:** Framer Motion
- **DB Driver:** Mongoose
- **Database:** MongoDB 7.0 (shared with VPS at `187.127.153.92:27017`)

---

## 📂 3. Project Structure

```
atkool-com-main/
├── app/
│   ├── api/
│   │   └── register/
│   │       └── route.ts        # POST: Create registration, GET: List all
│   ├── components/
│   │   ├── CTASection.tsx       # Call-to-action section
│   │   ├── FeaturesSection.tsx  # 6-card feature grid
│   │   ├── Footer.tsx           # Site footer
│   │   ├── HeroSection.tsx      # Hero with Three.js background
│   │   ├── HowItWorks.tsx       # 3-step process section
│   │   ├── Navbar.tsx           # Responsive navbar with glassmorphism
│   │   ├── ParticleBackground.tsx # Three.js particle system
│   │   └── WhyAtkool.tsx        # Benefits section
│   ├── register/
│   │   └── page.tsx             # Multi-step school registration form
│   ├── globals.css              # Design system (tokens, components, animations)
│   ├── layout.tsx               # Root layout with SEO metadata
│   └── page.tsx                 # Landing page (assembles all sections)
├── lib/
│   ├── models/
│   │   └── SchoolRegistration.ts # Mongoose schema for registrations
│   └── mongodb.ts               # MongoDB connection utility with caching
├── public/
│   ├── logo.jpeg                # ATKool brand logo
│   ├── hero-dashboard.png       # AI-generated hero image
│   ├── feature-attendance.png   # AI-generated attendance feature image
│   └── feature-parent.png       # AI-generated parent portal image
├── .env.local                   # MongoDB URI (environment config)
└── next.config.ts               # Next.js + Turbopack config
```

---

## 🔗 4. API Routes

### **POST /api/register**
Creates a new school registration request.
- **Body:** `{ schoolName, boardType, city, state, studentCount, adminName, email, phone, password }`
- **Response:** `201` with registration ID, or `400`/`409` for validation/duplicate errors.
- **Storage:** MongoDB → `Atkool` database → `schoolregistrations` collection.
- **Status:** Defaults to `"pending"` — Super Admin can approve/reject later.

### **GET /api/register**
Lists all registration requests (for Super Admin dashboard).
- **Response:** Array of registrations (password excluded).
- **TODO:** Add authentication middleware before production.

---

## 🎨 5. Design System

### **Color Palette**
| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#0A1628` | Main background |
| `--bg-secondary` | `#0F1F3A` | Alternating sections |
| `--accent-blue` | `#3B82F6` | Primary accent |
| `--accent-gold` | `#F59E0B` | Secondary accent |
| `--text-primary` | `#F1F5F9` | Headings |
| `--text-secondary` | `#94A3B8` | Body text |

### **Typography**
- **Headings:** Outfit (Google Fonts)
- **Body:** Inter (Google Fonts)

### **Components**
- `.glass-card` — Glassmorphism card with blur + border
- `.btn-primary` — Blue gradient button
- `.btn-secondary` — Outlined button
- `.btn-gold` — Gold gradient button
- `.gradient-text` — Blue-to-gold gradient text
- `.input-field` — Dark themed input with focus glow

---

## 📂 6. Database Schema

### **SchoolRegistration**
```
{
  schoolName: String (required),
  boardType: String (CBSE/ICSE/State Board/IB/Cambridge/Other),
  city: String,
  state: String,
  studentCount: String,
  adminName: String,
  email: String (unique),
  phone: String,
  password: String (TODO: hash with bcrypt),
  status: "pending" | "approved" | "rejected",
  createdAt: Date,
  updatedAt: Date,
}
```

---

## 📋 7. Next Steps Checklist
1. [x] **Project Setup:** Next.js 16 + Tailwind CSS + Three.js initialized.
2. [x] **Landing Page:** Hero, Features, How It Works, Why ATKool, CTA, Footer.
3. [x] **Registration Form:** Multi-step form with API integration.
4. [x] **API Route:** POST /api/register storing to MongoDB.
5. [ ] **Password Hashing:** Add bcrypt before production deployment.
6. [ ] **Domain Connection:** Deploy to Hostinger VPS, connect atkool.com.
7. [ ] **Login Page:** Admin login with JWT authentication.
8. [ ] **Super Admin Integration:** Wire registration approval to atkool-website.
9. [ ] **Email Notifications:** Send confirmation emails on registration.
10. [ ] **Nginx Reverse Proxy:** Set up SSL + domain routing.

---
*Created by Antigravity AI on April 24, 2026. This file is the persistent context for all future AI agents and developers working on this repository.*
