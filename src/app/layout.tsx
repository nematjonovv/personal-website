import type { Metadata } from "next";
import { Geist_Mono, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import SmoothScrollProvider from "../components/LenisProivder";
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: 'Hikmatillo Nematjonov — Frontend Developer',
  description: '',
  keywords: ['fullstack developer tashkent', 'web developer uzbekistan', 'react developer', 'sayt yasash', "frontend developer", "hikmatillo nematjonov", ""],
  icons: {},
  openGraph: {
    title: 'Hikmatillo Nematjonov — Frontend Developer',
    siteName: 'Hikmatillo Nematjonov',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <Analytics />
      <body className="bg-(--primary)">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
