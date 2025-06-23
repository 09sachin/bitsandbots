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
  title: "Software Developer Portfolio",
  description: "Modern portfolio showcasing innovative software development projects and expertise.",
  keywords: ["software developer", "portfolio", "web development", "full stack", "technology"],
  authors: [{ name: "Software Developer" }],
  openGraph: {
    title: "Software Developer Portfolio",
    description: "Modern portfolio showcasing innovative software development projects and expertise.",
    type: "website",
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
