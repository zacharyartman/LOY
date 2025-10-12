"use client";

import { Inter } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";

import "../globals.css";
const inter = Inter({ subsets: ["latin"] });

import Contact from "@/components/Contact";
import MomenceChat from "@/components/MomenceChat";

import ToasterContext from "../context/ToastContext";
import Head from "./head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <Head />
        <Header />
        <ToasterContext />
        {children}
        <Contact />
        <Footer />
        <ScrollToTop />
        <MomenceChat />
      </body>
    </html>
  );
}
