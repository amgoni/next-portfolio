import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato-family",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amingoni.netlify.app"),
  title: "Amin Goni | Front-End Web Developer",
  description:
    "Portfolio of Amin Goni, a front-end web developer building scalable and efficient web applications for personal or commercial use.",
  keywords: [
    "Amin Goni",
    "front-end web developer",
    "web developer",
    "NextJS developer",
    "React developer",
    "Nigeria",
  ],
  authors: [{ name: "Amin Mohammed Goni" }],
  creator: "Amin Mohammed Goni",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Amin Goni | Front-End Web Developer",
    description:
      "Portfolio of Amin Goni, a front-end web developer building scalable and efficient web applications for personal or commercial use.",
    url: "https://amingoni.netlify.app",
    siteName: "Amin Goni Portfolio",
    images: [{ url: "/img/profile.jpg", alt: "Amin Goni" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amin Goni | Front-End Web Developer",
    description:
      "Portfolio of Amin Goni, a front-end web developer building scalable and efficient web applications.",
    images: ["/img/profile.jpg"],
  },
  alternates: {
    canonical: "https://amingoni.netlify.app",
  },
  icons: {
    icon: "/img/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Amin Mohammed Goni",
  jobTitle: "Front-End Web Developer",
  url: "https://amingoni.netlify.app",
  email: "ameen.m.goney@gmail.com",
  sameAs: [
    "https://github.com/amgoni",
    "https://www.linkedin.com/in/amingoni/",
  ],
  knowsAbout: [
    "Web Development",
    "React",
    "Next.js",
    "User Experience",
    "HTML",
    "CSS",
    "JavaScript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${lato.variable} antialiased`}>{children}</body>
    </html>
  );
}
