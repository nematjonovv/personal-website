import type { Metadata } from "next";
import { Geist_Mono, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

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
  description: 'Biznes uchun zamonaviy saytlar yasayman.',
  keywords: ['fullstack developer tashkent', 'web developer uzbekistan', 'react developer', 'sayt yasash', "frontend developer"],
  icons: {},
  openGraph: {
    title: 'Hikmatillo Nematjonov — Frontend Developer',
    description: 'Biznes uchun zamonaviy saytlar yasayman.',
    url: 'https://sizning-sayt.com',
    siteName: 'Hikmatillo Nematjonov',
    images: [
      {
        url: 'https://sizning-sayt.com/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ],
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
      <body className="bg-(--primary)">{children}</body>
    </html>
  );
}
