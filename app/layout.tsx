import { Onest } from "next/font/google";
import React from "react";
import "./globals.css";
import { ASSETS } from "@/constants/assets";

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={onest.variable}>
      <body className="flex flex-col min-h-dvh">
        <main className="flex-1 flex flex-col">{children}</main>

        <footer className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-3">
            <p>Feito por Felipe Ferreira</p>
            <img src={ASSETS.svgs.github} alt="github.svg" />
          </div>
          <span>&copy; Copyright 2025</span>
        </footer>
      </body>
    </html>
  );
}
