import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BU GPA Calculator",
  description: "Simple GPA Calculator for Bennett University Students",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
