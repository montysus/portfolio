import "./styles/globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";

import { Navbar } from "@/components/nav";
import { ThemeProvider } from "@/components/providers";
import { cn } from "@/lib/utils";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://monty.bio"),
  title: {
    default: "Antonio Montero",
    template: "%s | Monty",
  },
  description: "",
  alternates: {
    canonical: "https://monty.bio",
  },
  openGraph: {
    title: "Antonio Montero",
    description: "",
    url: "https://monty.bio",
    siteName: "Antonio Montero",
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "Antonio Montero",
    "Robotics",
    "Engineering",
    "Creator",
    "Drone Pilot",
  ],
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
  twitter: {
    card: "summary_large_image",
    title: "Antonio Montero",
    // description: "Minimalist code. Maximum impact.",
  },
  // verification: {
  //   google: "Fyg64Q58kWDqARPWRbdy4uCuy8ENcCPHLITkRgRzyW4",
  // },
  authors: [
    {
      name: "Antonio Montero",
    },
  ],
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background font-sans text-foreground antialiased",
          geistSans.variable,
          geistMono.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
