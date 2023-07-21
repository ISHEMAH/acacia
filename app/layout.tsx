import "./globals.css";
import type { Metadata } from "next";

import { Navbar } from "@/components";

export const metadata: Metadata = {
  title: "ACACIA",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
