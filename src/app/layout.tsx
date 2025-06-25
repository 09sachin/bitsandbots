import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: {
    default: "BitsAndBots",
    template: "%s | Sachin Khoja - BitsAndBots"
  },
  description: "Sachin Khoja is a passionate Full Stack Developer and Software Engineer at BitsAndBots, specializing in modern web development, React, Next.js, Node.js, and innovative software solutions. Explore my portfolio of cutting-edge projects and technical expertise.",
  keywords: [
    "Sachin Khoja",
    "BitsAndBots",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "JavaScript",
    "TypeScript",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
    "Software Development",
    "Portfolio",
    "Tech Innovation",
    "Programming",
    "Software Solutions",
    "Modern Web Apps",
    "Responsive Design",
    "API Development"
  ],
  authors: [{ name: "Sachin Khoja", url: "https://bitsandbots.in" }],
  creator: "Sachin Khoja",
  publisher: "BitsAndBots",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bitsandbots.in",
    siteName: "Sachin Khoja | BitsAndBots",
    title: "Sachin Khoja | BitsAndBots - Full Stack Developer & Software Engineer",
    description: "Explore the portfolio of Sachin Khoja, a passionate Full Stack Developer at BitsAndBots. Discover innovative software projects, technical expertise, and modern web development solutions.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Sachin Khoja - BitsAndBots Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sachin Khoja | BitsAndBots - Full Stack Developer",
    description: "Passionate Full Stack Developer at BitsAndBots specializing in modern web development and innovative software solutions.",
    images: ["/logo.png"],
    creator: "@sachinkhoja",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon/favicon.svg",
        color: "#000000",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  metadataBase: new URL("https://bitsandbots.in"),
  alternates: {
    canonical: "https://bitsandbots.in",
  },
  category: "technology",
  classification: "portfolio",
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="relative min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
