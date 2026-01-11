import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bibekkumarmahato.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bibek Kumar Mahato - Full Stack Developer",
    template: "%s | Bibek Kumar Mahato",
  },
  description:
    "Portfolio of Bibek Kumar Mahato, a skilled Full Stack Developer specializing in building dynamic and responsive web applications using React, Next.js, Node.js, and modern technologies.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Bibek Kumar Mahato",
    "Portfolio",
  ],
  authors: [{ name: "Bibek Kumar Mahato" }],
  creator: "Bibek Kumar Mahato",
  publisher: "Bibek Kumar Mahato",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Bibek Kumar Mahato Portfolio",
    title: "Bibek Kumar Mahato - Full Stack Developer",
    description:
      "Portfolio of Bibek Kumar Mahato, a skilled Full Stack Developer specializing in building dynamic and responsive web applications using React, Next.js, Node.js, and modern technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bibek Kumar Mahato - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bibek Kumar Mahato - Full Stack Developer",
    description:
      "Portfolio of Bibek Kumar Mahato, a skilled Full Stack Developer specializing in building dynamic and responsive web applications.",
    images: ["/og-image.png"],
    creator: "@bibekkushwaha",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
             <Navbar />
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
