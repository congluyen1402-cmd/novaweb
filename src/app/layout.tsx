import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

import { LanguageProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/components/ThemeProvider";
export const metadata: Metadata = {
  title: "NovaWeb AI | Launch Websites That Defy Gravity",
  description: "Buy, generate, and deploy UX/UI Promax websites in seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${space.variable} font-sans antialiased min-h-screen bg-white dark:bg-deep-void text-black dark:text-white selection:bg-neon-cyan selection:text-black`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
