import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://amingoni.vercel.app"),
  title: {
    default: "Amin Goni | Fullstack Web Developer",
    template: "%s | Amin Goni",
  },
  description:
    "Portfolio of Amin Goni, a fullstack web developer building scalable and efficient web applications with React, Next.js, and TypeScript.",
  keywords: [
    "Amin Goni",
    "web developer",
    "fullstack developer",
    "front-end developer",
    "React developer",
    "NextJS developer",
    "TypeScript",
    "Tailwind CSS",
    "portfolio",
    "Nigeria",
    "freelance web developer",
  ],
  authors: [{ name: "Amin Mohammed Goni" }],
  creator: "Amin Mohammed Goni",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Amin Goni | Fullstack Web Developer",
    description:
      "Portfolio of Amin Goni, a fullstack web developer building scalable and efficient web applications with React, Next.js, and TypeScript.",
    url: "https://amingoni.vercel.app",
    siteName: "Amin Goni Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amin Goni | Fullstack Web Developer",
    description:
      "Portfolio of Amin Goni, a fullstack web developer building scalable and efficient web applications.",
  },
  alternates: {
    canonical: "https://amingoni.vercel.app",
  },
  icons: {
    icon: "/img/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Amin Mohammed Goni",
  jobTitle: "Fullstack Web Developer",
  url: "https://amingoni.vercel.app",
  email: "ameen.m.goney@gmail.com",
  description:
    "Fullstack web developer building scalable and efficient web applications with React, Next.js, and TypeScript.",
  image: "https://amingoni.vercel.app/img/profile.jpg",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NG",
  },
  sameAs: [
    "https://github.com/amgoni",
    "https://www.linkedin.com/in/amingoni/",
  ],
  knowsAbout: [
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "User Experience",
    "HTML",
    "CSS",
    "JavaScript",
    "Firebase",
    "Laravel",
  ],
};

const themeScript = `
  (function() {
    try {
      var stored = localStorage.getItem('theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (stored === 'dark' || (!stored && prefersDark)) {
        document.documentElement.classList.add('dark');
      }
    } catch(e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${montserrat.variable} font-poppins antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
