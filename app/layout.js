import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import {
  ClerkProvider
} from '@clerk/nextjs'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PiTalk",
  description: "Talk with your buddies!",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <link rel="icon" href="/pi_symbol_logo.png" sizes="16x16"/>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar/>
        <main className="flex-grow">{children}</main>
        <Footer/>
      </body>
    </html>
    </ClerkProvider>
  );
}
