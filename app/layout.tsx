import type { Metadata } from "next";
import { Source_Sans_3, Inter } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from 'next-themes';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';
const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-source-sans',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Hui's Profile",
  description: "Hui Wang's profile website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${sourceSans.variable} ${inter.variable} font-sans antialiased min-h-screen overflow-x-hidden bg-white dark:bg-gray-900 flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
