import "./styles/globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";

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
    default: "Montyforge",
    template: "%s | Montyforge",
  },
  description:
    "Autonomous systems engineering practice by Antonio Montero. Drones, robotics, control systems, and fielded mechatronic systems.",
  alternates: {
    canonical: "https://monty.bio",
  },
  openGraph: {
    title: "Montyforge | Autonomous Systems Engineering",
    description:
      "Drones, robotics, control systems, and fielded mechatronic systems by Antonio Montero.",
    url: "https://monty.bio",
    siteName: "Montyforge",
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
    title: "Montyforge | Autonomous Systems Engineering",
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
