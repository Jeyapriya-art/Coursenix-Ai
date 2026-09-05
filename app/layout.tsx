import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReduxProvider from "@/components/providers/Reduxprovider";

export const metadata: Metadata = {
  title: "Coursenix - AI Course Generator",
  description: "Turn any topic into a structured, ready-to-teach course generated instantly by AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050505] text-white min-h-screen flex flex-col justify-between">
        <ReduxProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}



