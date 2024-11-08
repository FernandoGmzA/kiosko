import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kiosko NextJS AppRouter and Prisma",
  description: "Kiosko NextJS AppRouter and Prisma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-mono text-black bg-gray-100">{children}</body>
    </html>
  );
}
