import { Onest } from "next/font/google";
import React from "react";
import "./globals.css";

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
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
