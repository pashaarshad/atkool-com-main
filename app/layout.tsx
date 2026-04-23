import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ATKool — Smart School Management System | Learn. Grow. Succeed.",
  description:
    "ATKool is a next-generation SaaS school management platform powering attendance tracking, grade management, parent portals, and administrative dashboards for modern educational institutions.",
  keywords: [
    "school management",
    "attendance system",
    "student management",
    "parent portal",
    "education technology",
    "SaaS school",
    "ATKool",
  ],
  openGraph: {
    title: "ATKool — Smart School Management System",
    description:
      "Transform your school operations with ATKool's intelligent attendance, grade management, and parent communication platform.",
    type: "website",
    url: "https://atkool.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
