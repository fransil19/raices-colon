import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raices de Colon",
  description: "Raices de Colon - Verduleria, Almacén, Mayorista.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-emerald-400 bg-opacity-20'}>{children}</body>
    </html>
  );
}
